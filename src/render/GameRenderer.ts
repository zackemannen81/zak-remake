import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { assetManifest } from '../content/assetManifest';
import { displayObjectName, getRoom, objectImageUrl, objectIsDrawable, hitTestRoomObject, roomOcclusionObjects, objectZplaneUrl } from '../content/rooms';
import { walkboxAtPoint } from '../core/movement';
import type { GameState, Point, RoomData, SourceObject, VerbId } from '../core/types';
import { ORIGINAL_ROOM_HEIGHT, VIEWPORT_WIDTH } from '../core/types';
import { shouldDrawObjectVisual, VisualRegistry, type TextureCrop } from './visualRegistry';
import { actorDepthScale, actorYaw } from './actorPose';
import { composeRoomMaskPixels, scummV2MaskBufferIndex } from './zPlaneMask';
import { applyScummV2ZPlanePatch } from './zPlaneShader';

const ACTOR_HEIGHT = 70;
const costumeImages = import.meta.glob<string>('../content/costumeFrames/*.png', { eager: true, query: '?url', import: 'default' });

/** Wrap the GLB so its feet meet the logical actor anchor without changing its animation root. */
export function createGroundedActorVisual(model: THREE.Group, targetHeight: number): THREE.Group | undefined {
  if (!Number.isFinite(targetHeight) || targetHeight <= 0) return undefined;

  const sourceBounds = new THREE.Box3().setFromObject(model);
  const sourceHeight = sourceBounds.getSize(new THREE.Vector3()).y;
  if (!Number.isFinite(sourceHeight) || sourceHeight <= 0) return undefined;

  const visual = new THREE.Group();
  visual.rotation.z = Math.PI;
  visual.scale.setScalar(targetHeight / sourceHeight);
  visual.add(model);
  visual.updateMatrixWorld(true);

  const fittedBounds = new THREE.Box3().setFromObject(visual);
  const centerX = (fittedBounds.min.x + fittedBounds.max.x) / 2;
  visual.position.set(-centerX, -fittedBounds.max.y, 0);
  visual.updateMatrixWorld(true);
  return visual;
}

interface TextureLoadOptions {
  crop?: TextureCrop;
  filter?: 'linear' | 'nearest';
  fallbackUrl?: string;
  onPrimaryError?: () => void;
}

interface LoadedZPlaneImage {
  width: number;
  height: number;
  pixels: Uint8ClampedArray;
}

function loadZPlaneImage(url: string): Promise<LoadedZPlaneImage> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const width = image.naturalWidth;
      const height = image.naturalHeight;
      if (width <= 0 || height <= 0) {
        reject(new Error(`Z-plane image has no pixels: ${url}`));
        return;
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      if (!context) {
        reject(new Error('A 2D canvas context is unavailable for Z-plane decoding.'));
        return;
      }
      context.drawImage(image, 0, 0);
      try {
        resolve({ width, height, pixels: context.getImageData(0, 0, width, height).data });
      } catch (error) {
        reject(error);
      }
    };
    image.onerror = () => reject(new Error(`Unable to load Z-plane image: ${url}`));
    image.src = url;
  });
}

/** Binary red-channel depth data; sampled to clip actor fragments, never used for object transparency. */
function createZPlaneDepthTexture(width: number, height: number, pixels: Uint8Array): THREE.DataTexture {
  const texture = new THREE.DataTexture(pixels, width, height, THREE.RGBAFormat);
  texture.colorSpace = THREE.NoColorSpace;
  texture.flipY = false;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}

export class GameRenderer {
  readonly canvas: HTMLCanvasElement;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.OrthographicCamera(-VIEWPORT_WIDTH / 2, VIEWPORT_WIDTH / 2, ORIGINAL_ROOM_HEIGHT / 2, -ORIGINAL_ROOM_HEIGHT / 2, 0.1, 1000);
  private readonly world = new THREE.Group();
  private readonly roomLayer = new THREE.Group();
  private readonly scriptActorLayer = new THREE.Group();
  private scriptActorSignature = '';
  private readonly actorRoot = new THREE.Group();
  private readonly actorPlaceholder = new THREE.Group();
  private readonly emptyZPlaneMask = createZPlaneDepthTexture(1, 1, new Uint8Array([0, 0, 0, 255]));
  private readonly actorZPlaneUniforms = {
    mask: { value: this.emptyZPlaneMask },
    roomSize: { value: new THREE.Vector2(1, 1) },
    enabled: { value: 0 },
    scrollX: { value: 0 },
    sourceOriginY: { value: ORIGINAL_ROOM_HEIGHT },
  };
  private currentZPlaneMaskTexture?: THREE.DataTexture;
  private zPlaneLoadGeneration = 0;
  private readonly textureLoader = new THREE.TextureLoader();
  private readonly gltfLoader = new GLTFLoader();
  private readonly textureCache = new Map<string, THREE.Texture>();
  private readonly objectModelCache = new Map<string, THREE.Group>();
  private readonly loadingObjectModels = new Set<string>();
  private readonly visualRegistry: VisualRegistry;
  private readonly resizeObserver: ResizeObserver;
  private currentRoom?: RoomData;
  private currentVisualSignature = '';
  private scrollX = 0;
  private actorAction?: THREE.AnimationAction;
  private actorMixer?: THREE.AnimationMixer;
  private externalActor?: THREE.Group;
  private externalActorModel?: THREE.Group;
  private lastFrameTime = 0;
  onPointer?: (point: Point, target?: SourceObject) => void;
  onCharacterStatus?: (message: string) => void;

  constructor(private readonly container: HTMLElement, visualRegistry = new VisualRegistry()) {
    this.visualRegistry = visualRegistry;
    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.domElement.className = 'game-canvas';
    this.renderer.domElement.setAttribute('aria-label', 'Game scene. Click to walk or interact.');
    this.canvas = this.renderer.domElement;
    this.container.replaceChildren(this.canvas);

    this.camera.position.set(VIEWPORT_WIDTH / 2, ORIGINAL_ROOM_HEIGHT / 2, 100);
    this.camera.lookAt(VIEWPORT_WIDTH / 2, ORIGINAL_ROOM_HEIGHT / 2, 0);
    this.scene.background = new THREE.Color('#12100c');
    // Source coordinates are top-left/y-down. Reflect the world, not the
    // projection matrix, so Three.js can account for winding on every mesh.
    this.world.scale.y = -1;
    this.world.position.y = ORIGINAL_ROOM_HEIGHT;
    this.world.add(this.roomLayer, this.scriptActorLayer, this.actorRoot);
    this.scene.add(this.world);
    this.scene.add(new THREE.HemisphereLight(0xfff4e4, 0x727d95, 2.0));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(120, 180, 100);
    this.scene.add(keyLight);
    this.createActorPlaceholder();
    this.applyZPlaneOcclusion(this.actorPlaceholder);
    this.actorRoot.add(this.actorPlaceholder);
    this.renderer.domElement.addEventListener('pointerdown', this.handlePointerDown);
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    this.resize();
    this.loadExternalCharacter();
  }

  update(room: RoomData, state: GameState): void {
    this.currentVerb = state.activeVerb;
    const visualSignature = `${room.id}|${JSON.stringify(state.objectOwners)}|${JSON.stringify(state.objectStates)}`;
    if (this.currentRoom?.id !== room.id || visualSignature !== this.currentVisualSignature) {
      this.currentRoom = room;
      this.currentVisualSignature = visualSignature;
      this.mountRoom(room, state);
    }

    this.updateScriptActors(room, state);
    this.scrollX = Math.max(0, Math.min(room.width - VIEWPORT_WIDTH, state.actor.x - VIEWPORT_WIDTH / 2));
    this.world.position.x = -this.scrollX;
    this.actorRoot.position.set(state.actor.x, state.actor.y, 5);
    const actorWalkbox = walkboxAtPoint(room, { x: state.actor.x, y: state.actor.y });
    this.actorZPlaneUniforms.enabled.value = scummV2MaskBufferIndex(actorWalkbox?.mask ?? 0) === 1 ? 1 : 0;
    this.actorZPlaneUniforms.scrollX.value = this.scrollX;
    // Foot-anchored visual depth; gameplay/hotspot coordinates stay unchanged.
    this.actorRoot.scale.setScalar(actorDepthScale(state.actor.y));
    // Model-local Y yaw works with the existing skinned GLB animation.
    if (this.externalActorModel) this.externalActorModel.rotation.y = actorYaw(state.actor.facing);
    this.actorPlaceholder.visible = !this.externalActor;
    if (this.externalActor) this.externalActor.visible = true;

    if (this.actorAction && this.actorMixer) {
      const moving = state.actor.pose === 'walk';
      this.actorAction.paused = !moving;
      if (!moving && this.actorAction.time !== 0) this.actorAction.time = 0;
      const delta = this.lastFrameTime === 0 ? 0 : Math.min((performance.now() - this.lastFrameTime) / 1000, 0.05);
      this.actorMixer.update(moving ? delta : 0);
    }
    this.lastFrameTime = performance.now();
    this.renderer.render(this.scene, this.camera);
  }

  destroy(): void {
    this.zPlaneLoadGeneration += 1;
    this.resizeObserver.disconnect();
    this.renderer.domElement.removeEventListener('pointerdown', this.handlePointerDown);
    this.renderer.dispose();
    for (const texture of this.textureCache.values()) texture.dispose();
    this.textureCache.clear();
    this.currentZPlaneMaskTexture?.dispose();
    this.emptyZPlaneMask.dispose();
  }

  private updateScriptActors(room: RoomData, state: GameState): void {
    const sprites: Array<{ id: number; x: number; y: number; w: number; h: number }> = [];
    if (room.id === 2 && (state.objectStates['21']! & 4) && (state.objectStates['118']! & 8)) {
      const id = (state.objectStates['114']! & 8) ? 2 : (state.objectStates['116']! & 8) ? 3 : (state.objectStates['115']! & 8) ? 34 : 0;
      if (id) sprites.push({ id, x: 120, y: 32, w: 64, h: 32 });
    }
    if (room.id === 3 && (state.objectStates['137']! & 8)) {
      sprites.push({ id: 17, x: 168, y: 0, w: 104, h: 40 });
      const elapsed = state.tick - (state.bakeryStartedTick ?? state.tick);
      if (state.variables[152] === 3 && elapsed >= 60 && elapsed < 100) {
        sprites.push({ id: 18, x: 160, y: 64 - Math.round((100 - elapsed) * 0.75), w: 56, h: 56 });
      }
    }
    const frame = Math.floor(state.tick / 5) % 4;
    const signature = JSON.stringify([room.id, sprites, sprites.length ? frame : 0]);
    if (signature === this.scriptActorSignature) return;
    this.scriptActorSignature = signature;
    for (const child of [...this.scriptActorLayer.children]) {
      if (child instanceof THREE.Mesh) { child.geometry.dispose(); (child.material as THREE.Material).dispose(); }
    }
    this.scriptActorLayer.clear();
    for (const sprite of sprites) {
      const url = costumeImages[`../content/costumeFrames/costume_${sprite.id}_${frame}.png`];
      if (!url) continue;
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(sprite.w, sprite.h),
        new THREE.MeshBasicMaterial({ map: this.getTexture(url), transparent: true, depthWrite: false }));
      mesh.position.set(sprite.x + sprite.w / 2, sprite.y + sprite.h / 2, 2);
      mesh.renderOrder = 2;
      this.scriptActorLayer.add(mesh);
    }
  }

  private resize(): void {
    const width = Math.max(1, this.container.clientWidth);
    const height = Math.max(1, this.container.clientHeight);
    this.renderer.setSize(width, height, false);
  }

  private handlePointerDown = (event: PointerEvent): void => {
    if (event.button !== 0 || !this.currentRoom) return;
    const point = this.pointerToWorld(event.clientX, event.clientY);
    this.onPointer?.(point, this.hitTest(point));
  };

  pointerToWorld(clientX: number, clientY: number): Point {
    const rect = this.canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * VIEWPORT_WIDTH + this.scrollX;
    const y = ((clientY - rect.top) / rect.height) * ORIGINAL_ROOM_HEIGHT;
    return { x: Math.max(0, Math.min(this.currentRoom?.width ?? VIEWPORT_WIDTH, x)), y: Math.max(0, Math.min(ORIGINAL_ROOM_HEIGHT, y)) };
  }

  hitTest(point: Point): SourceObject | undefined {
    if (!this.currentRoom) return undefined;
    return hitTestRoomObject(this.currentRoom, this.currentStateOwners, this.currentStateObjects, point, this.currentVerb);
  }

  private currentVerb: VerbId = 'walk';
  private currentStateOwners: Record<string, number> = {};
  private currentStateObjects: Record<string, number> = {};
  private readonly failedConceptBackgroundRooms = new Set<number>();

  private mountRoom(room: RoomData, state: GameState): void {
    this.currentStateOwners = state.objectOwners;
    this.currentStateObjects = state.objectStates;
    this.clearRoomLayer();

    const backgroundVisual = this.failedConceptBackgroundRooms.has(room.id)
      ? undefined
      : this.visualRegistry.resolveBackground(room.id);
    const usesConceptRoomImage = backgroundVisual?.kind === 'concept-2d';
    const backgroundTexture = this.getTexture(backgroundVisual?.url ?? room.backgroundUrl, {
      crop: backgroundVisual?.crop,
      filter: backgroundVisual?.kind === 'concept-2d' ? 'linear' : 'nearest',
      fallbackUrl: backgroundVisual?.kind === 'concept-2d' ? room.backgroundUrl : undefined,
      onPrimaryError: usesConceptRoomImage
        ? () => {
          this.failedConceptBackgroundRooms.add(room.id);
          this.currentVisualSignature = '';
        }
        : undefined,
    });
    const background = new THREE.Mesh(
      new THREE.PlaneGeometry(room.width, room.height),
      new THREE.MeshBasicMaterial({ map: backgroundTexture, color: 0xffffff }),
    );
    background.position.set(room.width / 2, room.height / 2, -2);
    this.roomLayer.add(background);

    const drawableObjects = room.objects
      .filter((object) => object.width > 0 && object.height > 0)
      .map((object) => ({
        object,
        explicitVisual: this.visualRegistry.resolveOverride(room.id, object.object_id),
        visual: this.visualRegistry.resolve(room.id, object.object_id),
      }))
      .filter(({ object, explicitVisual, visual }) =>
        objectIsDrawable(room, state.objectOwners, state.objectStates, object, visual !== undefined)
        && shouldDrawObjectVisual(usesConceptRoomImage, explicitVisual !== undefined),
      )
      .sort((a, b) => b.object.slot - a.object.slot);
    for (const { object, visual } of drawableObjects) {
      if (!visual) continue;
      if (visual.kind === 'scene-3d') {
        this.addObjectModel(room, object, visual.url);
      } else {
        this.addObjectSprite(object, visual.url, {
          crop: visual.crop,
          filter: visual.kind === 'concept-2d' ? 'linear' : 'nearest',
          fallbackUrl: visual.kind === 'concept-2d' ? objectImageUrl(room.id, object.object_id) : undefined,
        });
      }
    }
    // Occlusion follows original state, independently of whether modern artwork has a patch.
    this.loadRoomZPlaneMask(room, roomOcclusionObjects(room, state.objectStates));
  }

  private loadRoomZPlaneMask(room: RoomData, objects: SourceObject[]): void {
    const generation = ++this.zPlaneLoadGeneration;
    this.actorZPlaneUniforms.enabled.value = 0;
    this.actorZPlaneUniforms.mask.value = this.emptyZPlaneMask;
    this.actorZPlaneUniforms.roomSize.value.set(room.width, room.height);
    this.currentZPlaneMaskTexture?.dispose();
    this.currentZPlaneMaskTexture = undefined;

    const sources = objects
      .map((object) => ({ object, url: objectZplaneUrl(room.id, object.object_id) }))
      .filter((source): source is { object: SourceObject; url: string } => source.url !== undefined);
    if (sources.length === 0) return;

    void Promise.all(sources.map(async ({ object, url }) => {
      try {
        const image = await loadZPlaneImage(url);
        if (image.width !== object.width || image.height !== object.height) {
          console.warn(`Z-plane size does not match object ${object.object_id} in room ${room.id}.`);
          return undefined;
        }
        return { object, image };
      } catch (error) {
        console.warn(`Unable to decode Z-plane for object ${object.object_id} in room ${room.id}.`, error);
        return undefined;
      }
    })).then((loaded) => {
      if (generation !== this.zPlaneLoadGeneration) return;

      const roomPixels = new Uint8Array(room.width * room.height * 4);
      let hasCoveredPixels = false;
      for (const entry of loaded) {
        if (!entry) continue;
        const objectPixels = composeRoomMaskPixels(
          room.width,
          room.height,
          entry.object.x,
          entry.object.y,
          entry.image.width,
          entry.image.height,
          entry.image.pixels,
        );
        for (let index = 0; index < objectPixels.length; index += 4) {
          if (objectPixels[index] < 128) continue;
          roomPixels[index] = 255;
          roomPixels[index + 1] = 255;
          roomPixels[index + 2] = 255;
          roomPixels[index + 3] = 255;
          hasCoveredPixels = true;
        }
      }
      if (!hasCoveredPixels) return;

      const texture = createZPlaneDepthTexture(room.width, room.height, roomPixels);
      this.currentZPlaneMaskTexture = texture;
      this.actorZPlaneUniforms.mask.value = texture;
    }).catch((error: unknown) => {
      console.error(`Unable to compose Z-planes for room ${room.id}.`, error);
    });
  }

  private applyZPlaneOcclusion(root: THREE.Object3D): void {
    root.traverse((node) => {
      if (!(node instanceof THREE.Mesh)) return;
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      for (const material of materials) {
        applyScummV2ZPlanePatch(material, this.actorZPlaneUniforms);
      }
    });
  }

  private clearRoomLayer(): void {
    for (const child of [...this.roomLayer.children]) {
      child.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          for (const material of materials) material.dispose();
        }
      });
    }
    this.roomLayer.clear();
  }

  private addObjectSprite(object: SourceObject, url: string, options: TextureLoadOptions = {}): void {
    const texture = this.getTexture(url, options);
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(object.width, object.height),
      new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false }),
    );
    mesh.position.set(object.x + object.width / 2, object.y + object.height / 2, 1 - object.slot / 1000);
    mesh.userData.objectId = object.object_id;
    this.roomLayer.add(mesh);
  }

  private addObjectModel(room: RoomData, object: SourceObject, url: string): void {
    const cached = this.objectModelCache.get(url);
    if (cached) {
      this.placeObjectModel(room, object, cached.clone(true));
      return;
    }
    if (this.loadingObjectModels.has(url)) return;
    this.loadingObjectModels.add(url);
    this.gltfLoader.load(url, (gltf) => {
      this.objectModelCache.set(url, gltf.scene);
      this.loadingObjectModels.delete(url);
      this.currentVisualSignature = '';
    }, undefined, () => {
      this.loadingObjectModels.delete(url);
      this.onCharacterStatus?.(`3D scene asset for ${displayObjectName(object)} could not be loaded.`);
    });
  }

  private placeObjectModel(room: RoomData, object: SourceObject, model: THREE.Group): void {
    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const factor = Math.min(object.width / Math.max(size.x, 0.01), object.height / Math.max(size.y, 0.01));
    model.scale.multiplyScalar(factor);
    model.position.set(object.x + object.width / 2, object.y + object.height, 1 - object.slot / 1000);
    model.rotation.z = Math.PI;
    model.userData.originalObjectId = object.object_id;
    this.roomLayer.add(model);
    void room;
  }

  private getTexture(url: string, options: TextureLoadOptions = {}): THREE.Texture {
    const { crop, fallbackUrl, filter = 'nearest', onPrimaryError } = options;
    const cropKey = crop ? `${crop.u},${crop.v},${crop.width},${crop.height}` : 'full';
    const cacheKey = `${url}|${filter}|${cropKey}|${fallbackUrl ?? ''}`;
    const cached = this.textureCache.get(cacheKey);
    if (cached) return cached;

    const texture = this.textureLoader.load(url, undefined, undefined, () => {
      onPrimaryError?.();
      if (!fallbackUrl || fallbackUrl === url) {
        this.onCharacterStatus?.('A scene image could not be loaded.');
        return;
      }
      this.textureLoader.load(
        fallbackUrl,
        (fallbackTexture) => {
          texture.image = fallbackTexture.image;
          texture.offset.set(0, 0);
          texture.repeat.set(1, 1);
          texture.magFilter = THREE.NearestFilter;
          texture.minFilter = THREE.NearestFilter;
          texture.needsUpdate = true;
          fallbackTexture.dispose();
          this.onCharacterStatus?.('A POC concept image failed to load; original artwork is shown instead.');
        },
        undefined,
        () => this.onCharacterStatus?.('Both the selected concept and its original fallback image failed to load.'),
      );
    });
    texture.colorSpace = THREE.SRGBColorSpace;
    // With a y-down source world, UV zero must map to the image's top row.
    texture.flipY = false;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.offset.set(crop?.u ?? 0, crop?.v ?? 0);
    texture.repeat.set(crop?.width ?? 1, crop?.height ?? 1);
    texture.magFilter = filter === 'linear' ? THREE.LinearFilter : THREE.NearestFilter;
    texture.minFilter = filter === 'linear' ? THREE.LinearFilter : THREE.NearestFilter;
    texture.generateMipmaps = false;
    this.textureCache.set(cacheKey, texture);
    return texture;
  }

  private createActorPlaceholder(): void {
    const body = new THREE.Mesh(
      new THREE.PlaneGeometry(13, 27),
      new THREE.MeshBasicMaterial({ color: '#9f593b' }),
    );
    body.position.set(0, -14, 0.2);
    const shirt = new THREE.Mesh(new THREE.PlaneGeometry(12, 9), new THREE.MeshBasicMaterial({ color: '#d69b42' }));
    shirt.position.set(0, -15, 0.3);
    const head = new THREE.Mesh(new THREE.CircleGeometry(5.5, 8), new THREE.MeshBasicMaterial({ color: '#efb879' }));
    head.position.set(0, -31, 0.4);
    const cap = new THREE.Mesh(new THREE.PlaneGeometry(12, 3), new THREE.MeshBasicMaterial({ color: '#573b29' }));
    cap.position.set(0, -36, 0.5);
    this.actorPlaceholder.add(body, shirt, head, cap);
  }

  private loadExternalCharacter(): void {
    const source = assetManifest.character.url;
    if (!source) {
      this.onCharacterStatus?.('Zak model is missing; using the built-in placeholder.');
      return;
    }
    this.gltfLoader.load(source, (gltf) => {
      const model = gltf.scene;
      const visual = createGroundedActorVisual(model, ACTOR_HEIGHT);
      if (!visual) {
        this.onCharacterStatus?.('Zak GLB has no usable height; using the placeholder.');
        return;
      }
      model.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          node.castShadow = false;
          node.receiveShadow = false;
        }
      });
      this.externalActor = visual;
      this.externalActorModel = model;
      this.applyZPlaneOcclusion(visual);
      this.actorRoot.add(visual);
      this.actorPlaceholder.visible = false;

      const clipName = assetManifest.character.walkAnimation.toLowerCase();
      const clip = gltf.animations.find((entry) => entry.name.toLowerCase().includes(clipName)) ?? gltf.animations[0];
      if (clip) {
        this.actorMixer = new THREE.AnimationMixer(model);
        this.actorAction = this.actorMixer.clipAction(clip);
        this.actorAction.play();
        this.actorAction.paused = true;
      }
      this.onCharacterStatus?.(clip ? `Zak model ready — ${clip.name} animation loaded.` : 'Zak model ready; no animation clip found, so the placeholder pose is used.');
    }, undefined, () => {
      this.onCharacterStatus?.('Zak GLB could not be loaded; using the built-in placeholder.');
    });
  }
}
