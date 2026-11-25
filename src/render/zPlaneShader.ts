import * as THREE from 'three';

export interface ScummV2ZPlaneUniforms {
  mask: { value: THREE.Texture };
  roomSize: { value: THREE.Vector2 };
  enabled: { value: number };
  scrollX: { value: number };
  sourceOriginY: { value: number };
}

/** Add pixel-level SCUMM V2 Z-plane clipping to supported materials. */
export function applyScummV2ZPlanePatch(
  material: THREE.Material,
  uniforms: ScummV2ZPlaneUniforms,
): void {
  if (!(material instanceof THREE.MeshBasicMaterial || material instanceof THREE.MeshStandardMaterial)) return;
  if (material.userData.scummV2ZPlaneDepthPatch) return;

  const previousOnBeforeCompile = material.onBeforeCompile;
  material.onBeforeCompile = (shader, renderer) => {
    previousOnBeforeCompile.call(material, shader, renderer);
    if (
      !shader.vertexShader.includes('#include <common>')
      || !shader.vertexShader.includes('#include <project_vertex>')
      || !shader.fragmentShader.includes('#include <common>')
      || !shader.fragmentShader.includes('#include <clipping_planes_fragment>')
    ) return;

    shader.uniforms.uScummV2ZPlaneMask = uniforms.mask;
    shader.uniforms.uScummV2RoomSize = uniforms.roomSize;
    shader.uniforms.uScummV2ZPlaneEnabled = uniforms.enabled;
    shader.uniforms.uScummV2ScrollX = uniforms.scrollX;
    shader.uniforms.uScummV2SourceOriginY = uniforms.sourceOriginY;

    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vScummV2WorldPosition;')
      .replace(
        '#include <project_vertex>',
        '#include <project_vertex>\nvScummV2WorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;',
      );
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform sampler2D uScummV2ZPlaneMask;\nuniform vec2 uScummV2RoomSize;\nuniform float uScummV2ZPlaneEnabled;\nuniform float uScummV2ScrollX;\nuniform float uScummV2SourceOriginY;\nvarying vec3 vScummV2WorldPosition;')
      .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\nif (uScummV2ZPlaneEnabled > 0.5) {\n  vec2 sourcePixel = floor(vec2(\n    vScummV2WorldPosition.x + uScummV2ScrollX,\n    uScummV2SourceOriginY - vScummV2WorldPosition.y\n  ));\n  if (\n    sourcePixel.x >= 0.0 && sourcePixel.y >= 0.0\n    && sourcePixel.x < uScummV2RoomSize.x && sourcePixel.y < uScummV2RoomSize.y\n  ) {\n    vec2 maskUv = (sourcePixel + vec2(0.5)) / uScummV2RoomSize;\n    if (texture2D(uScummV2ZPlaneMask, maskUv).r >= 0.5) discard;\n  }\n}');
  };
  const originalProgramCacheKey = material.customProgramCacheKey.bind(material);
  material.customProgramCacheKey = () => `${originalProgramCacheKey()}|scumm-v2-zplane-depth-v1`;
  material.userData.scummV2ZPlaneDepthPatch = true;
  material.needsUpdate = true;
}
