import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import { applyScummV2ZPlanePatch, type ScummV2ZPlaneUniforms } from './zPlaneShader';

const zPlaneUniforms: ScummV2ZPlaneUniforms = {
  mask: { value: new THREE.Texture() },
  roomSize: { value: new THREE.Vector2(320, 128) },
  enabled: { value: 1 },
  scrollX: { value: 0 },
  sourceOriginY: { value: 128 },
};

function createShader(): Parameters<THREE.Material['onBeforeCompile']>[0] {
  return {
    uniforms: {},
    vertexShader: '#include <common>\nvoid main() {\n#include <project_vertex>\n}',
    fragmentShader: '#include <common>\nvoid main() {\n#include <clipping_planes_fragment>\n}',
  } as unknown as Parameters<THREE.Material['onBeforeCompile']>[0];
}

describe('SCUMM V2 Z-plane shader patch', () => {
  it.each([
    ['MeshBasicMaterial', () => new THREE.MeshBasicMaterial()],
    ['MeshStandardMaterial', () => new THREE.MeshStandardMaterial()],
  ] as const)('injects clipping and pixel-center sampling into %s', (_name, createMaterial) => {
    const material = createMaterial();
    const shader = createShader();

    applyScummV2ZPlanePatch(material, zPlaneUniforms);
    material.onBeforeCompile(shader, {} as THREE.WebGLRenderer);

    expect(shader.uniforms.uScummV2ZPlaneMask).toBe(zPlaneUniforms.mask);
    expect(shader.uniforms.uScummV2RoomSize).toBe(zPlaneUniforms.roomSize);
    expect(shader.vertexShader).toContain('varying vec3 vScummV2WorldPosition;');
    expect(shader.vertexShader).toContain('vScummV2WorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    expect(shader.fragmentShader).toContain('sourcePixel = floor(vec2(');
    expect(shader.fragmentShader).toContain('maskUv = (sourcePixel + vec2(0.5)) / uScummV2RoomSize;');
    expect(shader.fragmentShader).toContain('texture2D(uScummV2ZPlaneMask, maskUv).r >= 0.5) discard;');

    const cacheKey = material.customProgramCacheKey();
    applyScummV2ZPlanePatch(material, zPlaneUniforms);
    expect(material.customProgramCacheKey()).toBe(cacheKey);
  });

  it('leaves unsupported material types unchanged', () => {
    const material = new THREE.MeshPhongMaterial();
    const cacheKey = material.customProgramCacheKey();

    applyScummV2ZPlanePatch(material, zPlaneUniforms);

    expect(material.userData.scummV2ZPlaneDepthPatch).toBeUndefined();
    expect(material.customProgramCacheKey()).toBe(cacheKey);
  });
});
