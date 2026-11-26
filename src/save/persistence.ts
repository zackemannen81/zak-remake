import { getRoom, playableRoomIds } from '../content/rooms';
import type { GameState, VerbId } from '../core/types';
import { resourceRoom } from '../core/roomIdentity';

export const SAVE_STORAGE_KEY = 'zak-remake-save-v1';
const validVerbs: VerbId[] = ['walk', 'look', 'use', 'open', 'close', 'pickup', 'talk', 'putOn', 'takeOff', 'turnOn', 'turnOff', 'push', 'pull', 'give'];

export function serializeSave(state: GameState): string {
  return JSON.stringify(state);
}

export function deserializeSave(serialized: string): GameState {
  const value: unknown = JSON.parse(serialized);
  if (value === null || typeof value !== 'object') throw new Error('Save file must contain a state object.');
  const candidate = value as Partial<GameState>;
  if (candidate.schemaVersion !== 1) throw new Error('Unsupported save version.');
  if (!Number.isInteger(candidate.roomId) || !playableRoomIds.includes(candidate.roomId!)) throw new Error('Save refers to a room outside the playable slice.');
  getRoom(candidate.roomId!);
  if(candidate.logicalRoomId!==undefined && (!Number.isInteger(candidate.logicalRoomId) || resourceRoom(candidate.logicalRoomId)!==candidate.roomId)) throw new Error('Save has inconsistent logical room identity.');
  if(candidate.flight && (![candidate.flight.origin,candidate.flight.destination].every(n=>Number.isInteger(n)&&n>=141&&n<=149) || !Number.isFinite(candidate.flight.fare) || candidate.flight.fare<0 || typeof candidate.flight.boarded!=='boolean'))throw new Error('Save has invalid flight data.');
  if(candidate.choiceMenu!==undefined&&candidate.choiceMenu!=='flights')throw new Error('Save has invalid choice menu.');
  if(candidate.planeSinkTicks!==undefined&&(!Number.isInteger(candidate.planeSinkTicks)||candidate.planeSinkTicks<0||candidate.planeSinkTicks>600))throw new Error('Save has invalid sink timer.');
  if(candidate.randomSeed!==undefined&&(!Number.isInteger(candidate.randomSeed)||candidate.randomSeed<0||candidate.randomSeed>0xffffffff))throw new Error('Save has invalid random state.');
  if (!Number.isInteger(candidate.tick) || (candidate.tick ?? -1) < 0) throw new Error('Save has an invalid scheduler tick.');
  if (!Array.isArray(candidate.variables) || candidate.variables.length !== 256 || candidate.variables.some((item) => !Number.isFinite(item))) throw new Error('Save has invalid game variables.');
  if (!candidate.actor || !Number.isFinite(candidate.actor.x) || !Number.isFinite(candidate.actor.y) || !Array.isArray(candidate.actor.path)) throw new Error('Save has invalid actor state.');
  if (!validVerbs.includes(candidate.activeVerb!)) throw new Error('Save has an invalid active verb.');
  if (!Array.isArray(candidate.inventory) || !Array.isArray(candidate.scheduled) || !Array.isArray(candidate.messages)) throw new Error('Save is missing required state collections.');
  return structuredClone(candidate as GameState);
}
