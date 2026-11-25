import { PLAYER_OWNER_ID, OBJECT_INTRINSIC, OBJECT_UNTOUCHABLE, type GameState, type VerbId, type ScheduledAction } from '../core/types';
import { scheduleAction } from '../core/scheduler';
import { planWalk } from '../core/movement';
import { getRoom } from '../content/rooms';

export interface RoomExit {
  roomId: number;
  arrivalObjectId: number;
  source: string;
}

// Extracted from the original room scripts: loadRoomWithEgo(objectId, roomId, ...).
const originalExits = new Map<string, RoomExit>([
  ['1:84', { roomId: 2, arrivalObjectId: 111, source: 'LFv2_0001/OCv2_0084: loadRoomWithEgo(111,2)' }],
  ['2:111', { roomId: 1, arrivalObjectId: 84, source: 'LFv2_0002/OCv2_0111: loadRoomWithEgo(84,1)' }],
  ['2:112', { roomId: 3, arrivalObjectId: 134, source: 'LFv2_0002/OCv2_0112: loadRoomWithEgo(134,3)' }],
  ['3:134', { roomId: 2, arrivalObjectId: 112, source: 'LFv2_0003/OCv2_0134: loadRoomWithEgo(112,2)' }],
]);

const exitsOutsideSlice = new Map<string, number>([
  ['3:135', 4],
  ['3:141', 5],
]);

const pickupHandlers = new Map<number, Set<number>>([
  [1, new Set([14, 15, 16, 17])],
  [2, new Set([20, 21, 22, 23, 24, 25, 26])],
  [3, new Set([29])],
]);

export function getOriginalExit(roomId: number, objectId: number): RoomExit | undefined {
  return originalExits.get(`${roomId}:${objectId}`);
}

export function getOutOfSliceDestination(roomId: number, objectId: number): number | undefined {
  return exitsOutsideSlice.get(`${roomId}:${objectId}`);
}

export function hasPickupHandler(roomId: number, objectId: number): boolean {
  return pickupHandlers.get(roomId)?.has(objectId) ?? false;
}

// Inventory-to-inventory scripts are independent of the current room.
export function applyInventoryUse(state: GameState, first: number, second: number): string | undefined {
  if (first === second || ![first, second].every(id => state.inventory.includes(id) && state.objectOwners[String(id)] === PLAYER_OWNER_ID)) return undefined;
  const paper = first === 25 ? second : second === 25 ? first : 0;
  if (paper === 17 || paper === 15) {
    // OCv2_0025 -> SCv2_0061: rename paper and persist map progress.
    const key = paper === 17 ? 193 : 194;
    if (state.variables[key]) return 'It already has a map on it.';
    scheduleAction(state, 1, { type: 'set-variable', index: key, value: 1 });
    scheduleAction(state, 1, { type: 'set-object-name', objectId: paper, name: paper === 17 ? 'wallpaper map' : 'phone bill map' });
    return 'I drew the map from my dream on it.';
  }
  return undefined;
}

function setBits(state: GameState, objectId: number, mask: number, value: boolean): void {
  const key = String(objectId);
  const old = state.objectStates[key] ?? 0;
  state.objectStates[key] = value ? old | mask : old & ~mask;
}

export function applyRoomScriptVerb(state: GameState, roomId: number, objectId: number, verb: VerbId, itemId: number | null = state.selectedItemId): string | undefined {
  // OCv2_0119: lift the right seat cushion, expose remote; no inventory transfer.
  if (roomId === 2 && objectId === 119 && (verb === 'pickup' || verb === 'open' || verb === 'pull' || verb === 'close')) {
    setBits(state, 119, OBJECT_INTRINSIC, verb === 'close' ? false : verb === 'pull' ? !(state.objectStates['119']! & 8) : true);
    return verb === 'close' ? 'Put the cushion back.' : 'Moved the seat cushion.';
  }
  // OCv2_0131: clear the left cushion hotspot, walk to object 132, then clear its patch.
  if (roomId === 2 && objectId === 131 && (verb === 'pickup' || verb === 'pull')) {
    const destination = getRoom(2).objects.find(o => o.object_id === 132)!;
    setBits(state, 131, OBJECT_INTRINSIC | OBJECT_UNTOUCHABLE, true);
    planWalk(state, getRoom(2), { x: destination.walk_x, y: destination.walk_y });
    state.scriptSequence = { roomId, afterWalk: [{ type: 'set-object-state', objectId: 132, mask: 8, value: false }] };
    return 'Good idea! This place is a mess!';
  }
  // OCv2_0117: crayon pickup also exposes the pipe and renames the inventory item.
  if (roomId === 2 && objectId === 25 && verb === 'pickup') {
    scheduleAction(state, 1, { type: 'set-owner', objectId: 25, ownerId: PLAYER_OWNER_ID });
    scheduleAction(state, 1, { type: 'set-object-state', objectId: 25, mask: 10, value: true });
    scheduleAction(state, 1, { type: 'set-object-state', objectId: 126, mask: 2, value: false });
    scheduleAction(state, 1, { type: 'set-object-name', objectId: 25, name: 'yellow crayon' });
    scheduleAction(state, 120, { type: 'say', text: 'Hmm. Only one yellow crayon left.' });
    return 'Picked up: box of crayons.';
  }
  if (verb === 'use' && itemId !== null && !state.inventory.includes(itemId)) return undefined;
  // OCv2_0118: plug the power cord into the outlet.
  if (roomId === 2 && objectId === 118 && verb === 'use' && itemId === 20) {
    setBits(state, 118, 8, true);
    planWalk(state, getRoom(2), { x: 27 * 8, y: 57 * 2 });
    state.scriptSequence = { roomId, afterWalk: [{ type: 'set-object-name', objectId: 118, name: 'power cord' }] };
    return 'Plugged in the power cord.';
  }
  if (roomId === 3 && objectId === 28 && verb === 'use' && itemId === 24) {
    // Mirrors the verified mailbox/key handler: clearState08(target), setState02(target),
    // setState08(139), clearState02(139). Original source: room_003.md, OCv2_0028 verb 11.
    const targetKey = String(objectId);
    const targetState = state.objectStates[targetKey] ?? 0;
    state.objectStates[targetKey] = (targetState & ~0x08) | 0x02;
    const letterboxItemKey = '139';
    const itemState = state.objectStates[letterboxItemKey] ?? 0;
    state.objectStates[letterboxItemKey] = (itemState | 0x08) & ~0x02;
    state.flags.mailboxUnlocked = true;
    return 'The small key opens the mailbox. (Original room script: object 28 + key 24.)';
  }
  return undefined;
}
