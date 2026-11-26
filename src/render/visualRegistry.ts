import { objectImageUrl } from '../content/rooms';
import type { ObjectVisualKind } from '../core/types';

/** Texture-space crop with a bottom-left UV origin, as expected by Three.js. */
export interface TextureCrop {
  u: number;
  v: number;
  width: number;
  height: number;
}

export type ImageVisualSource = {
  kind: Exclude<ObjectVisualKind, 'scene-3d'>;
  url: string;
  crop?: TextureCrop;
};

export type VisualSource = ImageVisualSource | { kind: 'scene-3d'; url: string };

/** Convert catalog UVs (normalized, top-left origin) to Three.js texture UVs. */
export function candidateUvToTextureCrop(uv: readonly number[] | null | undefined): TextureCrop | undefined {
  if (!uv || uv.length !== 4 || uv.some((value) => !Number.isFinite(value))) return undefined;
  const [u, top, width, height] = uv;
  if (u < 0 || top < 0 || width <= 0 || height <= 0 || u + width > 1.000001 || top + height > 1.000001) return undefined;
  return { u, v: 1 - top - height, width, height };
}

/** Background replacement never disables object fallback. Only an authored object does. */
export function shouldDrawObjectVisual(objectInRoomComposite: boolean): boolean {
  return !objectInRoomComposite;
}

/** Visual choice is keyed by stable original IDs, never by UI labels. */
export class VisualRegistry {
  private readonly overrides = new Map<string, VisualSource>();
  private readonly backgroundOverrides = new Map<number, ImageVisualSource>();

  register(roomId: number, objectId: number, source: VisualSource): void {
    this.overrides.set(`${roomId}:${objectId}`, source);
  }

  resolveOverride(roomId: number, objectId: number): VisualSource | undefined {
    return this.overrides.get(`${roomId}:${objectId}`);
  }

  resolve(roomId: number, objectId: number): VisualSource | undefined {
    return this.resolveOverride(roomId, objectId)
      ?? (objectImageUrl(roomId, objectId) ? { kind: 'original-2d', url: objectImageUrl(roomId, objectId)! } : undefined);
  }

  registerBackground(roomId: number, source: ImageVisualSource): void {
    this.backgroundOverrides.set(roomId, source);
  }

  resolveBackground(roomId: number): ImageVisualSource | undefined {
    return this.backgroundOverrides.get(roomId);
  }

  clearOverride(roomId: number, objectId: number): void {
    this.overrides.delete(`${roomId}:${objectId}`);
  }
}
