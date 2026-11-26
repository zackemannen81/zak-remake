import {getRoom, playableRoomIds} from '../content/rooms';
import preview from '../content/runtime-preview.json';
import {assetUrl} from '../content/runtimeAssets';

/** Resource rooms, including special views. Logical aliases share these assets. */
export const labRooms = playableRoomIds.map(id => {
  const room = getRoom(id);
  const entry = (preview as Record<string, {path:string}>)[String(id)];
  const legacy = id <= 2 ? `./assets/scene-lab/room${id}-master.png` : undefined;
  return {id, name:room.name, original:room.backgroundUrl,
    master:legacy ?? (entry ? assetUrl(entry.path) : room.backgroundUrl),
    source:legacy ? 'PoC' : entry ? 'cropped' : 'original'};
});
export const labMasterUrls = new Set(labRooms.flatMap(r=>[r.master,r.original]));
