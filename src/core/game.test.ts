import { describe, expect, it } from 'vitest';
import { GameEngine } from './engine';
import { advanceActorOneStep, isInsideWalkbox, planWalk, scriptActorToRoomPixels } from './movement';
import { advanceSchedulerBy, scheduleAction } from './scheduler';
import { canonicalStateJson, createInitialState, stateHash } from './state';
import type { GameState } from './types';
import { getRoom, objectIsDrawable, objectIsTargetable, objectIsVisible, playableRoomIds, roomAssetSummary } from '../content/rooms';
import { deserializeSave, serializeSave } from '../save/persistence';

function stateFor(roomId: number): GameState {
  return createInitialState(getRoom(roomId), { skipIntro: roomId === 1 });
}

describe('rooms 1–3 source-backed slice', () => {
  it('loads original room dimensions, walkboxes, and object coordinates', () => {
    expect(playableRoomIds).toEqual([1, 2, 3]);
    expect([getRoom(1).width, getRoom(2).width, getRoom(3).width]).toEqual([320, 640, 960]);
    expect(getRoom(1).height).toBe(128);
    expect(getRoom(1).objects.find((object) => object.object_id === 84)).toMatchObject({ x: 296, y: 32, walk_x: 280, walk_y: 112 });
    expect(roomAssetSummary().walkboxes).toBeGreaterThan(0);
    expect(roomAssetSummary().images).toBeGreaterThan(0);
  });

  it('starts the ordinary script 108 branch in room pixels corresponding to (9,52)', () => {
    const room = getRoom(1);
    const state = createInitialState(room);
    const firstWalkbox = room.walkboxes[0]!;
    expect(scriptActorToRoomPixels({ x: 9, y: 52 })).toEqual({ x: 72, y: 104 });
    expect(scriptActorToRoomPixels(firstWalkbox.actor_coordinates![0]!)).toEqual(firstWalkbox.pixel_coordinates[0]);
    expect(state.actor).toMatchObject({ x: 72, y: 104, pose: 'idle' });
    expect(state.intro).toMatchObject({ source: 'SCv2_0108', phase: 'waiting-to-walk', nextTick: 120 });
    expect(state.objectOwners).toEqual({});
    expect(state.objectStates).toEqual({});
    expect(state.inventory).toEqual([]);
  });

  it('preserves the script 108 skip-intro branch and its verified object-90 state', () => {
    const state = createInitialState(getRoom(1), { skipIntro: true });
    expect(state.actor).toMatchObject({ x: 168, y: 112 });
    expect(state.intro).toBeUndefined();
    expect(state.objectStates).toEqual({ '90': 0x08 });
    expect(state.objectOwners).toEqual({});
    expect(state.inventory).toEqual([]);
  });

  it('plays the source 108 dialogue, locks control, walks to the window shade, then reaches the interactive start position', () => {
    const room = getRoom(1);
    const windowShade = room.objects.find((object) => object.object_id === 90)!;
    const expectedShadePathState = createInitialState(room);
    const expectedShadeTarget = planWalk(expectedShadePathState, room, { x: windowShade.walk_x, y: windowShade.walk_y });
    const engine = new GameEngine(createInitialState(room));
    engine.handleClick({ x: 100, y: 64 });
    expect(engine.state.actor.path).toEqual([]);

    engine.advance(59);
    expect(engine.state.actor).toMatchObject({ x: 72, y: 104 });
    expect(engine.state.dialogue).toBe('');
    engine.advance(1);
    expect(engine.state.dialogue).toBe('WOW! What a dream!\nI should make a drawing of that map I saw.');

    engine.advance(60);
    expect(engine.state.intro?.phase).toBe('walking-to-window-shade');
    expect(engine.state.actor.pose).toBe('walk');
    expect(engine.state.actor.path[engine.state.actor.path.length - 1]).toEqual(expectedShadeTarget);

    let ticksToWindowShade = 0;
    while (engine.state.intro?.phase === 'walking-to-window-shade' && ticksToWindowShade < 500) {
      engine.advance(1);
      ticksToWindowShade += 1;
    }
    expect(ticksToWindowShade).toBeLessThan(500);
    expect(engine.state.intro?.phase).toBe('walking');
    expect(engine.state.actor).toMatchObject({ x: expectedShadeTarget.x, y: expectedShadeTarget.y, pose: 'walk' });
    expect(engine.state.actor.path[engine.state.actor.path.length - 1]).toEqual(scriptActorToRoomPixels({ x: 21, y: 56 }));

    engine.advance(500);
    expect(engine.state.actor).toMatchObject({ x: 168, y: 112, pose: 'idle' });
    expect(engine.state.intro).toBeUndefined();
  });

  it('keeps source hotspots targetable when a visual is unavailable', () => {
    const room = getRoom(1);
    const state = stateFor(1);
    const bed = room.objects.find((object) => object.object_id === 85)!;
    expect(objectIsDrawable(room, state.objectOwners, state.objectStates, bed, false)).toBe(false);
    expect(objectIsTargetable(room, state.objectOwners, state.objectStates, bed)).toBe(true);
  });

  it('routes movement to walkable ground using the room walkbox graph', () => {
    const room = getRoom(1);
    const state = stateFor(1);
    const target = planWalk(state, room, { x: 1000, y: 64 });
    for (let tick = 0; tick < 500; tick += 1) advanceActorOneStep(state);
    expect(target.x).toBeLessThanOrEqual(room.width);
    expect(isInsideWalkbox(room, { x: state.actor.x, y: state.actor.y })).toBe(true);
    expect(state.actor.pose).toBe('idle');
  });

  it('resolves equal-tick scheduler events in insertion order and deterministically', () => {
    const run = (): GameState => {
      const state = stateFor(1);
      scheduleAction(state, 2, { type: 'set-variable', index: 7, value: 2 });
      scheduleAction(state, 2, { type: 'add-variable', index: 7, amount: 5 });
      advanceSchedulerBy(state, 3);
      return state;
    };
    const first = run();
    const second = run();
    expect(first.variables[7]).toBe(7);
    expect(stateHash(first)).toBe(stateHash(second));
  });

  it('keeps source parent-state objects hidden until their parent opens', () => {
    const room = getRoom(1);
    const child = room.objects.find((object) => object.object_id === 15)!;
    const parent = room.objects.find((object) => object.slot === child.parent_slot)!;
    const state = stateFor(1);
    expect(child.parent_state).toBe(8);
    expect(objectIsVisible(room, state.objectOwners, state.objectStates, child)).toBe(false);
    state.objectStates[String(parent.object_id)] = 8;
    expect(objectIsVisible(room, state.objectOwners, state.objectStates, child)).toBe(true);
  });

  it('follows verified original room 1 → 2 → 3 → 2 transitions', () => {
    const engine = new GameEngine(stateFor(1));
    const door1 = getRoom(1).objects.find((object) => object.object_id === 84)!;
    engine.setVerb('walk');
    engine.handleClick({ x: door1.x, y: door1.y }, door1);
    engine.advance(450);
    expect(engine.state.roomId).toBe(2);

    const door2 = getRoom(2).objects.find((object) => object.object_id === 112)!;
    engine.handleClick({ x: door2.x, y: door2.y }, door2);
    engine.advance(650);
    expect(engine.state.roomId).toBe(3);

    const returnDoor = getRoom(3).objects.find((object) => object.object_id === 134)!;
    engine.handleClick({ x: returnDoor.x, y: returnDoor.y }, returnDoor);
    engine.advance(650);
    expect(engine.state.roomId).toBe(2);
  });

  it('picks up a source-scripted room 2 object and saves/reloads it', () => {
    const engine = new GameEngine(stateFor(2));
    const key = getRoom(2).objects.find((object) => object.object_id === 24)!;
    engine.setVerb('pickup');
    engine.handleClick({ x: key.x, y: key.y }, key);
    engine.advance(450);
    expect(engine.state.inventory).toContain(24);
    expect(engine.state.objectOwners['24']).toBe(15);

    const saved = deserializeSave(serializeSave(engine.state));
    expect(canonicalStateJson(saved)).toBe(canonicalStateJson(engine.state));
    expect(() => deserializeSave('{"schemaVersion":1,"roomId":999}')).toThrow(/outside the playable slice/);
  });

  it('runs the source-backed key-on-mailbox interaction with persistent object bits', () => {
    const state = stateFor(3);
    state.inventory.push(24);
    state.objectOwners['24'] = 15;
    state.selectedItemId = 24;
    const mailbox = getRoom(3).objects.find((object) => object.object_id === 28)!;
    state.actor.x = mailbox.walk_x;
    state.actor.y = mailbox.walk_y;
    const engine = new GameEngine(state);
    engine.setVerb('use');
    engine.handleClick({ x: mailbox.x, y: mailbox.y }, mailbox);
    engine.advance(2);
    expect(engine.state.flags.mailboxUnlocked).toBe(true);
    expect(engine.state.objectStates['28']! & 0x02).toBe(0x02);
    expect(engine.state.objectStates['139']! & 0x08).toBe(0x08);
  });
});
