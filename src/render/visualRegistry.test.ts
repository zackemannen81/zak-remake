import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import { objectImageUrl } from '../content/rooms';
import { createGroundedActorVisual } from './GameRenderer';
import { candidateUvToTextureCrop, shouldDrawObjectVisual, VisualRegistry } from './visualRegistry';

describe('visual registry', () => {
  it('converts top-left POC UV crops for the renderer’s bottom-left texture coordinates', () => {
    expect(candidateUvToTextureCrop([0.1, 0.2, 0.3, 0.4])).toEqual({
      u: 0.1,
      v: 0.4,
      width: 0.3,
      height: 0.4,
    });
    expect(candidateUvToTextureCrop(null)).toBeUndefined();
    expect(candidateUvToTextureCrop([0.8, 0.2, 0.3, 0.4])).toBeUndefined();
  });

  it('keeps object fallback over a new background unless that object is already composited', () => {
    const registry=new VisualRegistry();
    registry.registerBackground(2,{kind:'concept-2d',url:'/new-room.png'});
    expect(registry.resolve(2,125)).toEqual({kind:'original-2d',url:objectImageUrl(2,125)});
    expect(shouldDrawObjectVisual(false)).toBe(true);
    expect(shouldDrawObjectVisual(true)).toBe(false);
  });

  it('keeps original object art as the default and permits an explicit preview override', () => {
    const registry = new VisualRegistry();
    const originalUrl = objectImageUrl(1, 85);
    expect(originalUrl).toBeDefined();
    expect(registry.resolve(1, 85)).toEqual({ kind: 'original-2d', url: originalUrl });

    const candidate = { kind: 'concept-2d' as const, url: '/preview.png' };
    registry.register(1, 85, candidate);
    expect(registry.resolve(1, 85)).toEqual(candidate);
    registry.clearOverride(1, 85);
    expect(registry.resolve(1, 85)).toEqual({ kind: 'original-2d', url: originalUrl });
  });
});

describe('actor model framing', () => {
  it('centers the GLB visual and places its feet on the logical actor anchor', () => {
    const model = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(2, 4, 1), new THREE.MeshBasicMaterial());
    body.position.set(3, 5, 0);
    model.add(body);
    const originalRootPosition = model.position.toArray();

    const visual = createGroundedActorVisual(model, 44);
    expect(visual).toBeDefined();
    const bounds = new THREE.Box3().setFromObject(visual!);
    expect(bounds.getSize(new THREE.Vector3()).y).toBeCloseTo(44);
    expect((bounds.min.x + bounds.max.x) / 2).toBeCloseTo(0);
    expect(bounds.max.y).toBeCloseTo(0);
    expect(model.parent).toBe(visual);
    expect(model.position.toArray()).toEqual(originalRootPosition);
  });

  it('rejects empty models and invalid visual heights', () => {
    expect(createGroundedActorVisual(new THREE.Group(), 44)).toBeUndefined();
    expect(createGroundedActorVisual(new THREE.Group(), 0)).toBeUndefined();
  });
});
