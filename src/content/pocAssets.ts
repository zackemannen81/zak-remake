import catalog from './poc-catalog.json';
import { playableRoomIds } from './rooms';
import { candidateUvToTextureCrop, type VisualRegistry } from '../render/visualRegistry';

interface PocVersion {
  file: string;
  candidateUvTopLeft?: number[] | null;
}

interface PocResource {
  room: number;
  objectId: number;
  kind: 'background' | 'object';
  viewportCandidate?: string;
  versions: PocVersion[];
}

const pocAssetUrls = import.meta.glob<string>(
  '../../zak/converted/poc/{backgrounds,objects}/room_00{1,2,3}/**/*.png',
  { eager: true, query: '?url', import: 'default' },
);

/**
 * Register only full-room background candidates for the opt-in preview.
 * Catalog object candidates are not classified as isolated cutouts and may be
 * baked into a complete room image; object overlays must be explicitly
 * reviewed and registered separately, never inferred from the catalog.
 */
export function registerPocPreviewAssets(registry: VisualRegistry): { registered: number; missing: string[] } {
  const resources = (catalog as { resources: PocResource[] }).resources;
  const playableRooms = new Set<number>(playableRoomIds);
  const missing = new Set<string>();
  let registered = 0;

  for (const resource of resources) {
    if (!playableRooms.has(resource.room) || resource.kind !== 'background' || resource.objectId !== 0 || !resource.viewportCandidate) continue;

    const path = resource.viewportCandidate;
    const url = pocAssetUrls[`../../${path}`];
    if (!url) {
      missing.add(path);
      continue;
    }

    const version = resource.versions.find((candidate) => candidate.file === path);
    const crop = candidateUvToTextureCrop(version?.candidateUvTopLeft);
    const visual = { kind: 'concept-2d' as const, url, ...(crop ? { crop } : {}) };
    registry.registerBackground(resource.room, visual);
    registered += 1;
  }

  return { registered, missing: [...missing].sort() };
}
