import roomsJson from '../../zak/converted/metadata/rooms.json';
import walkboxesJson from '../../zak/converted/metadata/walkboxes.json';
import background1 from '../../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/images/backgrounds/LFv2_0001.png';
import background2 from '../../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/images/backgrounds/LFv2_0002.png';
import background3 from '../../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/images/backgrounds/LFv2_0003.png';
import type { Point, RoomData, SourceObject, Walkbox } from '../core/types';

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

const backgroundByRoom: Record<number, string> = { 1: background1, 2: background2, 3: background3 };
const roomNames: Record<number, string> = { 1: "Zak's bedroom", 2: 'Apartment', 3: 'San Francisco street' };
const sourceRooms = roomsJson as unknown as SourceRoomRecord[];
const sourceWalkboxes = walkboxesJson as unknown as SourceWalkboxRecord[];

const roomMap = new Map<number, RoomData>();
for (const id of [1, 2, 3]) {
  const source = sourceRooms.find((room) => room.room === id);
  const walkboxSource = sourceWalkboxes.find((room) => room.room === id);
  const backgroundUrl = backgroundByRoom[id];
  if (!source || !walkboxSource || !backgroundUrl) throw new Error(`Missing canonical source data for room ${id}`);
  roomMap.set(id, {
    id,
    name: roomNames[id]!,
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

export const playableRoomIds = [1, 2, 3] as const;
export function getRoom(id: number): RoomData {
  const room = roomMap.get(id);
  if (!room) throw new Error(`Room ${id} is outside the current playable slice`);
  return room;
}

const originalObjectImages = import.meta.glob<string>(
  '../../zak/converted/images/objects/room_00{1,2,3}/object_*/frame_*.png',
  { eager: true, query: '?url', import: 'default' },
);
const imageByObject = new Map<string, string>();
for (const [path, url] of Object.entries(originalObjectImages)) {
  const match = path.match(/room_00([123])\/object_(\d+)\/frame_(\d+)\.png$/);
  if (!match) continue;
  const key = `${Number(match[1])}:${Number(match[2])}`;
  const frame = Number(match[3]);
  const previous = imageByObject.get(key);
  if (!previous || frame === 0) imageByObject.set(key, url);
}

export function objectImageUrl(roomId: number, objectId: number): string | undefined {
  return imageByObject.get(`${roomId}:${objectId}`);
}

export function displayObjectName(object: SourceObject): string {
  const clean = object.name.replace(/@+$/g, '').trim();
  return clean || `Object ${object.object_id}`;
}

function objectIsAvailable(room: RoomData, owners: Record<string, number>, states: Record<string, number>, object: SourceObject): boolean {
  if (object.width <= 0 || object.height <= 0 || (owners[String(object.object_id)] ?? 0) === 15) return false;
  if (object.parent_slot === 0) return true;
  const parent = room.objects.find((candidate) => candidate.slot === object.parent_slot);
  if (!parent) return false;
  const parentState = states[String(parent.object_id)] ?? 0;
  return (parentState & object.parent_state) === object.parent_state;
}

export function objectIsVisible(room: RoomData, owners: Record<string, number>, states: Record<string, number>, object: SourceObject): boolean {
  return objectIsAvailable(room, owners, states, object);
}

export function objectIsTargetable(room: RoomData, owners: Record<string, number>, states: Record<string, number>, object: SourceObject): boolean {
  return objectIsAvailable(room, owners, states, object);
}

export function objectIsDrawable(room: RoomData, owners: Record<string, number>, states: Record<string, number>, object: SourceObject, hasRegisteredVisual: boolean): boolean {
  return hasRegisteredVisual && objectIsVisible(room, owners, states, object);
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
