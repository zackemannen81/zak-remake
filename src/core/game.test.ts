import { describe, expect, it } from 'vitest';
import { GameEngine } from './engine';
import { advanceActorOneStep, isInsideWalkbox, planWalk, scriptActorToRoomPixels } from './movement';
import { advanceSchedulerBy, scheduleAction } from './scheduler';
import { canonicalStateJson, createInitialState, stateHash } from './state';
import type { GameState } from './types';
import { getRoom, hitTestRoomObject, objectIsDrawable, objectIsTargetable, objectIsVisible, playableRoomIds, roomAssetSummary } from '../content/rooms';
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
    expect(state.objectOwners['26']).toBe(15);
    expect(state.objectStates['26']).toBe(1);
    expect(state.inventory).toEqual([]);
  });

  it('preserves the script 108 skip-intro branch and its verified object-90 state', () => {
    const state = createInitialState(getRoom(1), { skipIntro: true });
    expect(state.actor).toMatchObject({ x: 168, y: 112 });
    expect(state.intro).toBeUndefined();
    expect(state.objectStates['90']).toBe(0x08);
    expect(state.objectOwners['26']).toBe(15);
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
    expect(objectIsTargetable(room, state.objectOwners, state.objectStates, child)).toBe(true);
    expect(objectIsVisible(room, state.objectOwners, state.objectStates, child)).toBe(false);
  });

  it('follows verified original room 1 → 2 → 3 → 2 transitions', () => {
    const engine = new GameEngine(stateFor(1));
    const door1 = getRoom(1).objects.find((object) => object.object_id === 84)!;
    engine.setVerb('open');
    engine.handleClick({ x: door1.x, y: door1.y }, door1);
    engine.advance(450);
    engine.setVerb('walk');
    engine.handleClick({ x: door1.x, y: door1.y }, door1);
    engine.advance(450);
    expect(engine.state.roomId).toBe(2);

    const door2 = getRoom(2).objects.find((object) => object.object_id === 112)!;
    engine.setVerb('open');
    engine.handleClick({ x: door2.x, y: door2.y }, door2);
    engine.advance(650);
    engine.setVerb('walk');
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
    expect(engine.state.objectOwners['24']).toBe(1);

    const saved = deserializeSave(serializeSave(engine.state));
    expect(canonicalStateJson(saved)).toBe(canonicalStateJson(engine.state));
    expect(() => deserializeSave('{"schemaVersion":1,"roomId":999}')).toThrow(/outside the playable slice/);
  });

  it('runs the source-backed key-on-mailbox interaction with persistent object bits', () => {
    const state = stateFor(3);
    state.inventory.push(24);
    state.objectOwners['24'] = 1;
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

describe('SCUMM v2 intrinsic patches', () => {
  it('renders the knife removal patch only after pickup and disables its hotspot', () => {
    const room = getRoom(2);
    const engine = new GameEngine(stateFor(2));
    const knife = room.objects.find(o => o.object_id === 26)!;
    const drawable = () => objectIsDrawable(room, engine.state.objectOwners, engine.state.objectStates, knife, true);
    expect(drawable()).toBe(false);
    expect(engine.targetableObjects()).toContain(knife);
    engine.setVerb('pickup');
    engine.handleClick({ x: knife.x, y: knife.y }, knife);
    engine.advance(650);
    expect(engine.state.inventory).toContain(26);
    expect(drawable()).toBe(true);
    expect(engine.targetableObjects()).not.toContain(knife);
  });
  it('keeps closed drawer patches off and gates contents and door travel', () => {
    const room = getRoom(1);
    const engine = new GameEngine(stateFor(1));
    const drawer = room.objects.find(o => o.object_id === 92)!;
    const bill = room.objects.find(o => o.object_id === 15)!;
    const door = room.objects.find(o => o.object_id === 84)!;
    const drawable = () => objectIsDrawable(room, engine.state.objectOwners, engine.state.objectStates, drawer, true);
    expect(drawable()).toBe(false);
    expect(engine.targetableObjects()).not.toContain(bill);
    engine.handleClick({ x: door.x, y: door.y }, door);
    engine.advance(650);
    expect(engine.state.roomId).toBe(1);
    engine.setVerb('open');
    engine.handleClick({ x: drawer.x, y: drawer.y }, drawer);
    engine.advance(650);
    expect(drawable()).toBe(true);
    expect(engine.targetableObjects()).toContain(bill);
    engine.setVerb('close');
    engine.handleClick({ x: drawer.x, y: drawer.y }, drawer);
    engine.advance(650);
    expect(drawable()).toBe(false);
    expect(engine.targetableObjects()).not.toContain(bill);
  });
});

describe('coordinate-based container interactions', () => {
  it.each([[1, 94, 16], [1, 92, 15], [2, 125, 22], [2, 121, 25]])(
    'room %i: container %i exposes item %i to actual coordinate hit tests',
    (roomId, containerId, itemId) => {
      const room = getRoom(roomId);
      const engine = new GameEngine(stateFor(roomId));
      const item = room.objects.find(o => o.object_id === itemId)!;
      const point = { x: item.x + item.width / 2, y: item.y + item.height / 2 };
      const hit = () => hitTestRoomObject(room, engine.state.objectOwners, engine.state.objectStates, point, engine.state.activeVerb);
      const click = (verb: 'open' | 'close' | 'pickup') => {
        engine.setVerb(verb);
        engine.handleClick(point, hit());
        engine.advance(650);
      };
      expect(hit()?.object_id).not.toBe(itemId);
      click('open');
      engine.setVerb('pickup');
      expect(hit()?.object_id).toBe(itemId);
      click('close');
      expect(hit()?.object_id).not.toBe(itemId);
      click('open');
      click('pickup');
      expect(engine.state.inventory).toContain(itemId);
      expect(hit()?.object_id).not.toBe(itemId);
    },
  );
});

describe('inventory combinations and scripted scene objects', () => {
  function click(engine: GameEngine, id: number, verb: 'pickup' | 'open' | 'use' | 'walk') {
    const object = engine.room.objects.find(o => o.object_id === id)!;
    engine.setVerb(verb);
    const point = { x: object.x + object.width / 2, y: object.y + object.height / 2 };
    engine.handleClick(point, hitTestRoomObject(engine.room, engine.state.objectOwners, engine.state.objectStates, point, verb));
    engine.advance(650);
  }
  it.each([[17,25],[25,17]])('combines inventory items %i and %i, persists the map and keeps both items', (first,second) => {
    const engine = new GameEngine(stateFor(1));
    click(engine, 17, 'pickup');
    expect(engine.state.inventory).toContain(17);
    click(engine, 84, 'open');
    click(engine, 84, 'walk');
    expect(engine.state.roomId).toBe(2);
    click(engine, 121, 'open');
    click(engine, 25, 'pickup');
    expect(engine.state.objectNames?.['25']).toBe('yellow crayon');
    engine.selectInventoryItem(first);
    engine.selectInventoryItem(second);
    engine.advance(2);
    expect(engine.state.objectNames?.['17']).toBe('wallpaper map');
    expect(engine.state.variables[193]).toBe(1);
    expect(engine.state.inventory).toEqual(expect.arrayContaining([17,25]));
    expect(engine.state.selectedItemId).toBeNull();
    const restored = deserializeSave(serializeSave(engine.state));
    expect(restored.objectNames?.['17']).toBe('wallpaper map');
    engine.selectInventoryItem(first);
    engine.selectInventoryItem(second);
    engine.advance(2);
    expect(engine.state.dialogue).toBe('It already has a map on it.');
  });
  it('moves the right cushion without inventory pickup and exposes the remote', () => {
    const engine = new GameEngine(stateFor(2));
    click(engine, 119, 'pickup');
    expect(engine.state.objectStates['119'] & 8).toBe(8);
    expect(engine.state.inventory).not.toContain(119);
    click(engine, 21, 'pickup');
    expect(engine.state.inventory).toContain(21);
  });
  it('moves the left cushion, walks to the scripted destination and exposes the cord', () => {
    const engine = new GameEngine(stateFor(2));
    click(engine, 131, 'pickup');
    expect(engine.state.objectStates['131'] & 10).toBe(10);
    expect(engine.state.objectStates['132'] & 8).toBe(0);
    expect(engine.state.scriptSequence).toBeUndefined();
    expect(engine.state.inventory).not.toContain(131);
    click(engine, 20, 'pickup');
    expect(engine.state.inventory).toContain(20);
    engine.selectInventoryItem(20);
    click(engine, 118, 'use');
    expect(engine.state.objectStates['118'] & 8).toBe(8);
    expect(engine.state.scriptSequence).toBeUndefined();
  });
});

describe('mailbox, powered TV and repeated bakery actions', () => {
  function click(engine: GameEngine, id: number, verb: import('./types').VerbId) {
    const object = engine.room.objects.find(o => o.object_id === id)!;
    engine.setVerb(verb);
    const point = { x: object.x + object.width / 2, y: object.y + object.height / 2 };
    engine.handleClick(point, hitTestRoomObject(engine.room, engine.state.objectOwners, engine.state.objectStates, point, verb));
    engine.advance(650);
  }
  it('unlocks mailbox, collects the fan club card and removes letter hotspot', () => {
    const engine = new GameEngine(stateFor(3));
    engine.state.inventory.push(24); engine.state.objectOwners['24'] = 1;
    engine.selectInventoryItem(24);
    click(engine, 28, 'use');
    expect(engine.state.objectStates['139'] & 8).toBe(8);
    click(engine, 139, 'pickup');
    expect(engine.state.inventory).toContain(27);
    expect(engine.state.inventory).not.toContain(139);
    expect(engine.state.objectStates['139'] & 10).toBe(2);
    expect(engine.state.objectStates['138'] & 8).toBe(8);
  });
  it('requires TV power, then toggles the screen with the remote', () => {
    const engine = new GameEngine(stateFor(2));
    click(engine, 119, 'pickup'); click(engine, 21, 'pickup');
    engine.setVerb('turnOn'); engine.selectInventoryItem(21); engine.advance(2);
    expect(engine.state.objectStates['21'] & 4).toBe(0);
    click(engine, 131, 'pickup'); click(engine, 20, 'pickup');
    engine.selectInventoryItem(20); click(engine, 118, 'use');
    engine.setVerb('turnOn'); engine.selectInventoryItem(21); engine.advance(2);
    expect(engine.state.objectStates['21'] & 4).toBe(4);
    expect(engine.state.objectStates['115'] & 8).toBe(8);
    engine.setVerb('turnOff'); engine.selectInventoryItem(21); engine.advance(2);
    expect(engine.state.objectStates['115'] & 8).toBe(0);
  });
  it('rings three times with distinct responses and makes bread collectible', () => {
    const engine = new GameEngine(stateFor(3));
    click(engine, 147, 'push');
    expect(engine.state.variables[152]).toBe(1);
    expect(engine.state.objectStates['148'] & 8).toBe(0);
    click(engine, 147, 'use');
    expect(engine.state.variables[152]).toBe(2);
    click(engine, 147, 'push');
    expect(engine.state.variables[152]).toBe(3);
    expect(engine.state.objectStates['148'] & 8).toBe(8);
    click(engine, 29, 'pickup');
    expect(engine.state.inventory).toContain(29);
    click(engine, 147, 'push');
    expect(engine.state.variables[152]).toBe(3);
  });
  it('toggles rug corner with push and pull', () => {
    const engine = new GameEngine(stateFor(1));
    click(engine, 107, 'pull');
    expect(engine.state.objectStates['107'] & 8).toBe(8);
    click(engine, 107, 'push');
    expect(engine.state.objectStates['107'] & 8).toBe(0);
  });
});

describe('scene animation and cord ownership', () => {
  it('runs TV segments deterministically and stops on unplug', () => {
    const engine = new GameEngine(stateFor(2));
    const state = engine.state;
    state.actor.x = 216; state.actor.y = 114;
    state.inventory.push(20,21); state.objectOwners['20']=1; state.objectOwners['21']=1;
    state.objectStates['131']=10;
    const outlet=engine.room.objects.find(o=>o.object_id===118)!;
    engine.selectInventoryItem(20); engine.handleClick({x:210,y:75},outlet); engine.advance(650);
    expect(state.inventory).not.toContain(20);
    engine.setVerb('turnOn'); engine.selectInventoryItem(21); engine.advance(2);
    expect(state.objectStates['115']&8).toBe(8);
    engine.advance(320);
    expect(state.objectStates['114']&8).toBe(8);
    engine.setVerb('pull'); engine.handleClick({x:210,y:75},outlet); engine.advance(650);
    expect(state.objectStates['118']&8).toBe(0);
    expect(state.objectStates['21']&4).toBe(0);
    expect(state.objectOwners['20']).toBe(15);
    expect(state.objectStates['20']&10).toBe(0);
    expect(state.inventory).not.toContain(20);
  });
});

describe('Sushi, CashCard and bus puzzle chains', () => {
  function click(engine: GameEngine, id: number, verb: import('./types').VerbId) {
    const o = engine.room.objects.find(o => o.object_id === id)!;
    engine.setVerb(verb);
    const point = { x: o.x + o.width / 2, y: o.y + o.height / 2 };
    engine.handleClick(point, hitTestRoomObject(engine.room, engine.state.objectOwners, engine.state.objectStates, point, verb));
    engine.advance(650);
  }
  it('transfers Sushi to lamp and back without consuming bowl', () => {
    const e = new GameEngine(stateFor(1));
    click(e,14,'pickup');
    e.selectInventoryItem(14); click(e,103,'use');
    expect(e.state.variables[138]).toBe(1);
    expect(e.state.objectNames?.['14']).toBe('fish bowl');
    expect(e.state.inventory).toContain(14);
    e.selectInventoryItem(14); click(e,103,'use');
    expect(e.state.variables[138]).toBe(0);
    expect(e.state.objectNames?.['14']).toBe('Sushi in fish bowl');
  });
  it('pushes card under desk and retrieves it with butter knife, not egg', () => {
    const e = new GameEngine(stateFor(1));
    click(e,94,'open'); click(e,106,'pickup');
    expect(e.state.objectStates['106'] & 8).toBe(8);
    expect(e.state.inventory).not.toContain(18);
    e.state.inventory.push(22,26); e.state.objectOwners['22']=1; e.state.objectOwners['26']=1;
    e.selectInventoryItem(22); click(e,106,'use');
    expect(e.state.inventory).not.toContain(18);
    e.selectInventoryItem(26); click(e,106,'use');
    expect(e.state.inventory).toContain(18);
    expect(e.state.inventory).toContain(26);
    expect(e.targetableObjects().some(o=>o.object_id===106)).toBe(false);
  });
  it('wakes bus driver with bread and opens bus without consuming bread', () => {
    const e = new GameEngine(stateFor(3));
    e.state.inventory.push(29); e.state.objectOwners['29']=1;
    e.selectInventoryItem(29); click(e,142,'use');
    expect(e.state.objectStates['144'] & 8).toBe(0);
    expect(e.state.objectStates['143'] & 8).toBe(8);
    expect(e.state.inventory).toContain(29);
  });
});
