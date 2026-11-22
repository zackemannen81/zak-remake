import type { GameState, VerbId } from '../core/types';

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
  [1, new Set([15, 16])],
  [2, new Set([20, 21, 23, 24, 26])],
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

export function applyRoomScriptVerb(state: GameState, roomId: number, objectId: number, verb: VerbId): string | undefined {
  if (roomId === 3 && objectId === 28 && verb === 'use' && state.selectedItemId === 24) {
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
