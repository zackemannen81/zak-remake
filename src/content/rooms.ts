import runtimeAssets from './runtime-assets.json';
import { assetUrl } from './runtimeAssets';
import objectClasses from './object-classes.json';
import labelsJson from '../../zak/converted/metadata/scene_labels.json';
import roomsJson from '../../zak/converted/metadata/rooms.json';
import walkboxesJson from '../../zak/converted/metadata/walkboxes.json';
import { ROOM_OWNER_ID, OBJECT_INTRINSIC, OBJECT_UNTOUCHABLE, type Point, type RoomData, type SourceObject, type VerbId, type Walkbox } from '../core/types';

interface SourceRoomRecord {
  room: number;
  width: number;
  height: number;
  objects: SourceObject[];
}

interface SourceWalkboxRecord {
  room: number;
  boxes: Array<Omit<Walkbox, 'pixel_coordinates' | 'actor_coordinates'> & {
    pixel_coordinates: Array<Point | [number, number]>;
    actor_coordinates?: Array<Point | [number, number]>;
  }>;
  next_hop: number[][];
}

function toPoint(coordinate: Point | [number, number]): Point {
  return Array.isArray(coordinate) ? { x: coordinate[0], y: coordinate[1] } : coordinate;
}

const backgrounds = Object.fromEntries(runtimeAssets.backgrounds.map(path => [path, assetUrl(path)]));
const backgroundByRoom: Record<number, string> = {};
for (const [path, url] of Object.entries(backgrounds)) {
  const match = path.match(/LFv2_(\d+)\.png$/);
  if (match) backgroundByRoom[Number(match[1])] = url;
}
const roomNames: Record<number, string> = { 1: "Zak's bedroom", 2: 'Apartment', 3: 'San Francisco street' };
const sourceRooms = roomsJson as unknown as SourceRoomRecord[];
const sourceWalkboxes = walkboxesJson as unknown as SourceWalkboxRecord[];

const roomMap = new Map<number, RoomData>();
for (const { room: id } of sourceRooms) {
  const source = sourceRooms.find((room) => room.room === id);
  const walkboxSource = sourceWalkboxes.find((room) => room.room === id);
  const backgroundUrl = backgroundByRoom[id];
  if (!source || !walkboxSource || !backgroundUrl) throw new Error(`Missing canonical source data for room ${id}`);
  roomMap.set(id, {
    id,
    name: roomNames[id] ?? labelsJson.find(label => label.room === id)?.label ?? `Room ${id}`,
    width: source.width,
    height: source.height,
    backgroundUrl,
    objects: source.objects,
    walkboxes: walkboxSource.boxes.map((box) => ({
      ...box,
      pixel_coordinates: box.pixel_coordinates.map(toPoint),
      actor_coordinates: box.actor_coordinates?.map(toPoint),
    })),
    nextHop: walkboxSource.next_hop,
  });
}

export const playableRoomIds: readonly number[] = [...roomMap.keys()];
export function getRoom(id: number): RoomData {
  const room = roomMap.get(id);
  if (!room) throw new Error(`Room ${id} is outside the current playable slice`);
  return room;
}

const originalObjectImages = Object.fromEntries(runtimeAssets.objects.filter(path => path.includes('/frame_')).map(path => [path, assetUrl(path)]));
const originalObjectZplanes = Object.fromEntries(runtimeAssets.objects.filter(path => path.endsWith('/zplane_000.png')).map(path => [path, assetUrl(path)]));
const zplaneByObject = new Map<string, string>();
for (const [path, url] of Object.entries(originalObjectZplanes)) {
  const match = path.match(/room_(\d+)\/object_(\d+)\/zplane_000\.png$/);
  if (match) zplaneByObject.set(`${Number(match[1])}:${Number(match[2])}`, url);
}
const imageByObject = new Map<string, string>();
for (const [path, url] of Object.entries(originalObjectImages)) {
  const match = path.match(/room_(\d+)\/object_(\d+)\/frame_(\d+)\.png$/);
  if (!match) continue;
  const key = `${Number(match[1])}:${Number(match[2])}`;
  const frame = Number(match[3]);
  const previous = imageByObject.get(key);
  if (!previous || frame === 0) imageByObject.set(key, url);
}

export function objectImageUrl(roomId: number, objectId: number): string | undefined {
  return imageByObject.get(`${roomId}:${objectId}`);
}

export function objectZplaneUrl(roomId: number, objectId: number): string | undefined {
  return zplaneByObject.get(`${roomId}:${objectId}`);
}

export function inventoryObjectName(objectId: number, names: Record<string, string> = {}): string {
  if (names[String(objectId)]) return names[String(objectId)]!;
  for (const room of roomMap.values()) {
    const object = room.objects.find(o => o.object_id === objectId);
    if (object) return displayObjectName(object);
  }
  return `Object ${objectId}`;
}

export function displayObjectName(object: SourceObject): string {
  const clean = object.name.replace(/@+$/g, '').trim();
  return clean || `Object ${object.object_id}`;
}

// SCUMM v2 object.cpp: parent chain compares the intrinsic bit, including expected zero.
function objectIsAvailable(room: RoomData, states: Record<string, number>, object: SourceObject): boolean {
  if (object.width <= 0 || object.height <= 0) return false;
  const visited = new Set<number>();
  let child = object;
  while (child.parent_slot !== 0) {
    if (visited.has(child.slot)) return false;
    visited.add(child.slot);
    const parent = room.objects.find((candidate) => candidate.slot === child.parent_slot);
    if (!parent || ((states[String(parent.object_id)] ?? 0) & OBJECT_INTRINSIC) !== child.parent_state) return false;
    child = parent;
  }
  return true;
}

export function objectIsVisible(room: RoomData, owners: Record<string, number>, states: Record<string, number>, object: SourceObject): boolean {
  // An OI is an opaque replacement patch; picked-up objects can still draw it.
  return objectIsAvailable(room, states, object) && Boolean((states[String(object.object_id)] ?? 0) & OBJECT_INTRINSIC);
}

export function objectHasClass(id: number, mask: number): boolean {
  return Boolean(((objectClasses as Record<string, number>)[String(id)] ?? 0) & mask);
}

export function objectIsTargetable(room: RoomData, owners: Record<string, number>, states: Record<string, number>, object: SourceObject): boolean {
  return objectIsAvailable(room, states, object) && (owners[String(object.object_id)] ?? ROOM_OWNER_ID) === ROOM_OWNER_ID && !((states[String(object.object_id)] ?? 0) & OBJECT_UNTOUCHABLE);
}

export function objectIsDrawable(room: RoomData, owners: Record<string, number>, states: Record<string, number>, object: SourceObject, hasRegisteredVisual: boolean): boolean {
  return hasRegisteredVisual && objectIsVisible(room, owners, states, object);
}

// Original findObject scans ascending source slots, with half-open rectangles.
export function hitTestRoomObject(room: RoomData, owners: Record<string, number>, states: Record<string, number>, point: Point, verb?: VerbId): SourceObject | undefined {
  const hits = room.objects.filter(object =>
    objectIsTargetable(room, owners, states, object)
    && point.x >= object.x && point.x < object.x + object.width
    && point.y >= (room.id === 1 && object.object_id === 106 ? object.y + 8 : object.y)
    && point.y < object.y + object.height + (room.id === 1 && object.object_id === 106 ? 8 : 0),
  ).sort((a, b) => a.slot - b.slot);
  // Keep the container accessible for explicit open/close even when a child overlaps.
  if (verb === 'open' || verb === 'close') {
    const container = hits.find(object => [84, 90, 92, 94, 111, 112, 121, 125].includes(object.object_id));
    if (container) return container;
  }
  if (room.id === 1 && (verb === 'push' || verb === 'pull')) {
    const rug = hits.find(object => object.object_id === 107 || object.object_id === 109);
    if (rug) return rug;
  }
  if (room.id === 1 && (verb === 'pickup' || verb === 'use' || verb === 'look')) {
    const card = hits.find(o => o.object_id === 106);
    if (card) return card;
  }
  if (room.id === 3 && verb === 'use') {
    const reader = hits.find(o => o.object_id === 150);
    if (reader) return reader;
    const bus = hits.find(o => o.object_id === 142);
    if (bus) return bus;
  }
  return hits[0];
}

/** The bed is a permanent foreground mask in the current room-1 artwork.
 * Other masks follow their active replacement patches, not hotspot eligibility.
 */
export function roomOcclusionObjects(room: RoomData, states: Record<string, number>): SourceObject[] {
  return room.objects.filter(object =>
    objectZplaneUrl(room.id, object.object_id) !== undefined
    && objectIsAvailable(room, states, object)
    && ((room.id === 1 && object.object_id === 85) || Boolean((states[String(object.object_id)] ?? 0) & OBJECT_INTRINSIC)),
  );
}

export function roomAssetSummary(): { rooms: number; objects: number; images: number; walkboxes: number } {
  const rooms = playableRoomIds.map(getRoom);
  return {
    rooms: rooms.length,
    objects: rooms.reduce((sum, room) => sum + room.objects.length, 0),
    images: [...imageByObject.keys()].filter((key) => playableRoomIds.some((id) => key.startsWith(`${id}:`))).length,
    walkboxes: rooms.reduce((sum, room) => sum + room.walkboxes.length, 0),
  };
}
