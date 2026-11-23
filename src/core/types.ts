export type VerbId = 'walk' | 'look' | 'use' | 'open' | 'close' | 'pickup' | 'talk';
export type Facing = 'left' | 'right' | 'up' | 'down';
export type ObjectVisualKind = 'original-2d' | 'concept-2d' | 'scene-3d';

export interface Point {
  x: number;
  y: number;
}

export interface SourceObject {
  room: number;
  slot: number;
  object_id: number;
  width: number;
  height: number;
  x: number;
  y: number;
  parent_slot: number;
  parent_state: number;
  walk_x: number;
  walk_y: number;
  direction: number;
  name: string;
  has_dump_image?: boolean;
}

export interface Walkbox {
  index: number;
  pixel_coordinates: Point[];
  actor_coordinates?: Point[];
  mask: number;
  flags: number;
}

export interface RoomData {
  id: number;
  name: string;
  width: number;
  height: number;
  backgroundUrl: string;
  objects: SourceObject[];
  walkboxes: Walkbox[];
  nextHop: number[][];
}

export interface GameMessage {
  tick: number;
  text: string;
}

export type ScheduledAction =
  | { type: 'say'; text: string; durationTicks?: number }
  | { type: 'set-variable'; index: number; value: number }
  | { type: 'add-variable'; index: number; amount: number }
  | { type: 'set-flag'; name: string; value: boolean }
  | { type: 'set-owner'; objectId: number; ownerId: number }
  | { type: 'set-object-state'; objectId: number; mask: number; value: boolean }
  | { type: 'travel'; roomId: number; x: number; y: number };

export interface ScheduledEvent {
  dueTick: number;
  sequence: number;
  action: ScheduledAction;
}

export interface Script108Intro {
  source: 'SCv2_0108';
  phase: 'waiting-to-walk' | 'walking-to-window-shade' | 'walking';
  nextTick: number;
}

export interface PendingInteraction {
  verb: VerbId;
  targetObjectId: number;
  selectedItemId: number | null;
}

export interface GameState {
  schemaVersion: 1;
  tick: number;
  roomId: number;
  actor: {
    x: number;
    y: number;
    path: Point[];
    facing: Facing;
    pose: 'idle' | 'walk';
  };
  variables: number[];
  flags: Record<string, boolean>;
  objectOwners: Record<string, number>;
  objectStates: Record<string, number>;
  inventory: number[];
  activeVerb: VerbId;
  selectedItemId: number | null;
  pendingInteraction: PendingInteraction | null;
  dialogue: string | null;
  dialogueUntilTick: number;
  messages: GameMessage[];
  intro?: Script108Intro;
  scheduled: ScheduledEvent[];
  nextEventSequence: number;
}

export const PLAYER_OWNER_ID = 15;
export const VIEWPORT_WIDTH = 320;
export const ORIGINAL_ROOM_HEIGHT = 128;
export const FIXED_STEP_MS = 1000 / 30;
