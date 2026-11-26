import { scriptActorToRoomPixels } from './movement';
import { scheduleAction } from './scheduler';
import type { GameState, Point, RoomData } from './types';
import initialObjects from '../content/initial-objects.json';

export interface InitialStateOptions {
  /** Start on script 108's already-arrived branch instead of its ordinary opening. */
  skipIntro?: boolean;
}

function averagePoint(points: Point[]): Point {
  if (points.length === 0) return { x: 160, y: 112 };
  const sum = points.reduce((value, point) => ({ x: value.x + point.x, y: value.y + point.y }), { x: 0, y: 0 });
  return { x: Math.round(sum.x / points.length), y: Math.round(sum.y / points.length) };
}

export function createInitialState(room: RoomData, options: InitialStateOptions = {}): GameState {
  const skipIntro = room.id === 1 && options.skipIntro === true;
  const startsScript108Intro = room.id === 1 && !skipIntro;
  const spawn = room.id === 1
    ? scriptActorToRoomPixels(skipIntro ? { x: 21, y: 56 } : { x: 9, y: 52 })
    : averagePoint(room.walkboxes[0]?.pixel_coordinates ?? []);
  const state: GameState = {
    schemaVersion: 1,
    tick: 0,
    roomId: room.id,
    actor: { ...spawn, path: [], facing: 'down', pose: 'idle' },
    variables: Array.from({ length: 256 }, (_, i) => i === 62 ? 12250 : 0),
    flags: {},
    objectOwners: Object.fromEntries(initialObjects.map((value, id) => [id, value & 15])),
    // Script 108's skip branch explicitly calls setState08(90).
    objectStates: { ...Object.fromEntries(initialObjects.map((value, id) => [id, value >> 4])), ...(skipIntro ? { '90': 0x08 } : {}) },
    inventory: [],
    activeVerb: 'walk',
    selectedItemId: null,
    pendingInteraction: null,
    dialogue: startsScript108Intro ? '' : 'Click to walk. Choose a verb, then click an object.',
    dialogueUntilTick: startsScript108Intro ? 60 : 120,
    messages: [],
    scheduled: [],
    nextEventSequence: 0,
  };

  if(room.id===1) {
    // SCv2_0001 picks up 82 before the skippable boss sequence (SCv2_0127).
    state.inventory.push(82);state.objectOwners[82]=1;state.objectStates[82]=11;
    state.objectNames={'82':'ticket to Seattle'};
    state.flight={origin:145,destination:144,fare:260,boarded:false};
    state.variables[79]=662;state.variables[155]=145;state.variables[82]=260;
  }

  if (startsScript108Intro) {
    // SCv2_0108: delay(60), then printEgo's extracted line; the next 60 ticks lead into the walk.
    scheduleAction(state, 60, {
      type: 'say',
      text: 'WOW! What a dream!\nI should make a drawing of that map I saw.',
      durationTicks: 60,
    });
    state.intro = { source: 'SCv2_0108', phase: 'waiting-to-walk', nextTick: 120 };
  }

  return state;
}

function canonical(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(canonical);
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonical((value as Record<string, unknown>)[key])]));
  }
  return value;
}

export function canonicalStateJson(state: GameState): string {
  return JSON.stringify(canonical(state));
}

/** Small deterministic content hash used for replay checks, not cryptographic integrity. */
export function stateHash(state: GameState): string {
  const serialized = canonicalStateJson(state);
  let hash = 0x811c9dc5;
  for (let index = 0; index < serialized.length; index += 1) {
    hash = Math.imul(hash ^ serialized.charCodeAt(index), 0x01000193) >>> 0;
  }
  return hash.toString(16).padStart(8, '0');
}
