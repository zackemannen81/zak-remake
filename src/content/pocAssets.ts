import preview from './runtime-preview.json';
import { assetUrl } from './runtimeAssets';
import { candidateUvToTextureCrop, type VisualRegistry } from '../render/visualRegistry';

export function registerPocPreviewAssets(registry: VisualRegistry): { registered: number; missing: string[] } {
  let registered = 0;
  for (const [room, entry] of Object.entries(preview)) {
    const crop = candidateUvToTextureCrop(entry.uv);
    registry.registerBackground(Number(room), { kind: 'concept-2d', url: assetUrl(entry.path), ...(crop ? {crop} : {}) });
    registered++;
  }
  return {registered, missing: []};
}
