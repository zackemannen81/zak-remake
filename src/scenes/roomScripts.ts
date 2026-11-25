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

// SCv2_0023: remote requires power and proximity; TV image is object 115.
function toggleTv(state: GameState, desired?: boolean): string {
  if (state.roomId !== 2) return "It doesn't seem to work here.";
  if (state.actor.x >= 45 * 8) return "I'm too far away from the TV.";
  if (!(state.objectStates['118']! & 8)) return "I wonder why it's not working?";
  const on = desired ?? !(state.objectStates['21']! & 4);
  setBits(state, 21, 4, on);
  for (const id of [114,115,116,120,133]) setBits(state, id, 8, on && id === 115);
  return on ? 'Good morning San Francisco.' : 'Turned off the TV.';
}

export function applyInventoryVerb(state: GameState, id: number, verb: VerbId): string | undefined {
  if (id === 21 && (verb === 'use' || verb === 'turnOn' || verb === 'turnOff') && state.selectedItemId === null) {
    return toggleTv(state, verb === 'use' ? undefined : verb === 'turnOn');
  }
  if (verb === 'look') return id === 27 ? 'THE KING FAN CLUB — Member in good standing since 1997.' : undefined;
  return undefined;
}

export function applyRoomScriptVerb(state: GameState, roomId: number, objectId: number, verb: VerbId, itemId: number | null = state.selectedItemId): string | undefined {
  // OCv2_0139: the letter is a scene proxy for inventory object 27.
  if (roomId === 3 && objectId === 139 && (verb === 'pickup' || verb === 'look' || verb === 'close')) {
    if (verb !== 'close') {
      scheduleAction(state, 1, { type: 'set-owner', objectId: 27, ownerId: PLAYER_OWNER_ID });
      setBits(state, 27, 10, true);
      state.variables[159] = 0;
    }
    setBits(state, 139, 8, false);
    setBits(state, 139, 2, true);
    const next = verb === 'close' ? 28 : 138;
    setBits(state, next, 8, true);
    setBits(state, next, 2, false);
    return verb === 'close' ? 'Closed the mailbox.' : "It's THE KING FAN CLUB card! Wow, that was fast!";
  }
  // OCv2_0147 -> SCv2_0039: three visits; the final visit drops bread.
  if (roomId === 3 && objectId === 147 && (verb === 'push' || verb === 'use')) {
    if (state.variables[152]! >= 3) return 'Nobody answers.';
    const count = ++state.variables[152]!;
    setBits(state, 137, 8, true);
    state.scriptLockedUntil = state.tick + (count === 3 ? 150 : 90);
    if (count === 3) {
      scheduleAction(state, 60, { type: 'set-object-state', objectId: 148, mask: 8, value: true });
      scheduleAction(state, 150, { type: 'set-object-state', objectId: 137, mask: 8, value: false });
    }
    return ["We're closed, and we're out of fresh bread anyway.", "Listen, you DON'T want the bread we have left! Go away!", "OK, you asked for it!"][count - 1]!;
  }
  if (roomId === 2 && objectId === 113 && (verb === 'turnOn' || verb === 'turnOff' || verb === 'use')) {
    if (itemId === 21 || (state.inventory.includes(21) && verb !== 'use')) return toggleTv(state, verb === 'use' ? undefined : verb === 'turnOn');
    return state.inventory.includes(21) ? 'I have to use the remote control.' : "It doesn't have any controls on it.";
  }
  if (roomId === 1 && (objectId === 107 || objectId === 109) && ['push','pull','pickup','use'].includes(verb)) {
    const on = !(state.objectStates['107']! & 8);
    setBits(state, 107, 8, on);
    setBits(state, 109, 10, on);
    return on ? 'Lifted the rug corner.' : 'Put the rug corner back.';
  }
  if (roomId === 2 && [129,123,122].includes(objectId) && ['turnOn','turnOff','use','push'].includes(verb) && itemId === null) {
    const id = objectId === 122 ? 122 : 129;
    const bit = id === 122 ? 4 : 8;
    const on = verb === 'turnOn' ? true : verb === 'turnOff' ? false : !(state.objectStates[String(id)]! & bit);
    setBits(state, id, bit, on);
    if (id === 129) setBits(state, 123, 8, on);
    return on ? 'Turned on.' : 'Turned off.';
  }
  if (roomId === 2 && objectId === 129 && verb === 'use' && itemId === 29) {
    scheduleAction(state, 1, { type: 'set-owner', objectId: 29, ownerId: 14 });
    setBits(state, 130, 8, true); setBits(state, 130, 2, false);
    return 'Put the stale bread in the sink.';
  }
  // OCv2_0119: lift the right seat cushion, expose remote; no inventory transfer.
  if (roomId === 2 && objectId === 119 && (verb === 'pickup' || verb === 'open' || verb === 'push' || verb === 'pull' || verb === 'close')) {
    setBits(state, 119, OBJECT_INTRINSIC, verb === 'close' ? false : (verb === 'pull' || verb === 'push') ? !(state.objectStates['119']! & 8) : true);
    return verb === 'close' ? 'Put the cushion back.' : 'Moved the seat cushion.';
  }
  // OCv2_0131: clear the left cushion hotspot, walk to object 132, then clear its patch.
  if (roomId === 2 && objectId === 131 && (verb === 'pickup' || verb === 'pull' || verb === 'push')) {
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
