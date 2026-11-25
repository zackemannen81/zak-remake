import { getRoom, playableRoomIds } from '../content/rooms';
import type { GameState, VerbId } from '../core/types';

export const SAVE_STORAGE_KEY = 'zak-remake-save-v1';
const validVerbs: VerbId[] = ['walk', 'look', 'use', 'open', 'close', 'pickup', 'talk', 'putOn', 'takeOff', 'turnOn', 'turnOff', 'pull', 'give'];

export function serializeSave(state: GameState): string {
  return JSON.stringify(state);
}

export function deserializeSave(serialized: string): GameState {
  const value: unknown = JSON.parse(serialized);
  if (value === null || typeof value !== 'object') throw new Error('Save file must contain a state object.');
  const candidate = value as Partial<GameState>;
  if (candidate.schemaVersion !== 1) throw new Error('Unsupported save version.');
  if (!Number.isInteger(candidate.roomId) || !playableRoomIds.includes(candidate.roomId as 1 | 2 | 3)) throw new Error('Save refers to a room outside the playable slice.');
  getRoom(candidate.roomId!);
  if (!Number.isInteger(candidate.tick) || (candidate.tick ?? -1) < 0) throw new Error('Save has an invalid scheduler tick.');
  if (!Array.isArray(candidate.variables) || candidate.variables.length !== 256 || candidate.variables.some((item) => !Number.isFinite(item))) throw new Error('Save has invalid game variables.');
  if (!candidate.actor || !Number.isFinite(candidate.actor.x) || !Number.isFinite(candidate.actor.y) || !Array.isArray(candidate.actor.path)) throw new Error('Save has invalid actor state.');
  if (!validVerbs.includes(candidate.activeVerb!)) throw new Error('Save has an invalid active verb.');
  if (!Array.isArray(candidate.inventory) || !Array.isArray(candidate.scheduled) || !Array.isArray(candidate.messages)) throw new Error('Save is missing required state collections.');
  return structuredClone(candidate as GameState);
}
