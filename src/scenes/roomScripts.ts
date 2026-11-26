import { PLAYER_OWNER_ID, ROOM_OWNER_ID, OBJECT_INTRINSIC, OBJECT_UNTOUCHABLE, type GameState, type VerbId, type ScheduledAction } from '../core/types';
import { scheduleAction } from '../core/scheduler';
import { planWalk } from '../core/movement';
import { getRoom, objectHasClass } from '../content/rooms';

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
  if (on) { state.tvStartedTick = state.tick; state.tvSegment = -1; }
  else { delete state.tvStartedTick; delete state.tvSegment; }
  return on ? 'Good morning San Francisco.' : 'Turned off the TV.';
}

export function applyInventoryVerb(state: GameState, id: number, verb: VerbId): string | undefined {
  if (id === 18 && verb === 'look') return 'CashCard balance: $' + state.variables[62];
  if (id === 42 && verb === 'look') return 'Super Lucky Lotto - ' + state.variables.slice(208,212).join(' ');
  if (id === 34 && (verb === 'open' || verb === 'close')) {
    const open = verb === 'open';
    setBits(state,34,4,!open);
    (state.objectNames ??= {})['34'] = open ? 'open tool kit' : 'tool kit';
    for (const tool of [35,36,37,38]) {
      if (state.objectOwners[String(tool)] === (open ? 12 : 1))
        scheduleAction(state,1,{type:'set-owner',objectId:tool,ownerId:open ? 1 : 12});
    }
    return open ? 'Wow! Look at all this stuff!' : 'Closed the tool kit.';
  }
  if (id === 21 && (verb === 'use' || verb === 'turnOn' || verb === 'turnOff') && state.selectedItemId === null) {
    return toggleTv(state, verb === 'use' ? undefined : verb === 'turnOn');
  }
  if (verb === 'look') return id === 27 ? 'THE KING FAN CLUB — Member in good standing since 1997.' : undefined;
  return undefined;
}

export function applyRoomScriptVerb(state: GameState, roomId: number, objectId: number, verb: VerbId, itemId: number | null = state.selectedItemId): string | undefined {
  // SCv2_0024: goods are requested with Pick up, paid at Buy Window.
  const prices: Record<number,number> = {34:45,39:145,40:3,41:139,43:15,44:75,189:10};
  if (roomId === 7 && prices[objectId] !== undefined && (verb === 'pickup' || (objectId === 189 && verb === 'use'))) {
    const id = objectId === 189 ? 42 : objectId;
    if (!state.inventory.includes(18)) return "You can't buy somethin with no CashCard!";
    if (state.objectOwners[String(id)] === 1) return id === 42 ? 'Only one Lotto ticket per person.' : 'You already own that!';
    const price = prices[objectId]!;
    // Migrate saves created before the original opening cash balance was initialized.
    if (!state.flags.cashInitialized && state.variables[62] === 0) state.variables[62] = 12250;
    state.flags.cashInitialized = true;
    if (state.variables[62]! < price) return "Sorry, ya don't have enough money.";
    const window = getRoom(7).objects.find(o=>o.object_id===181)!;
    planWalk(state,getRoom(7),{x:window.walk_x,y:window.walk_y});
    const actions: ScheduledAction[] = [
      {type:'add-variable',index:62,amount:-price},
      {type:'set-owner',objectId:id,ownerId:1},
      {type:'set-object-state',objectId:id,mask:10,value:true},
      {type:'say',text:id===42?'Here, and good luck!':'Here. Thanks, friend.'},
    ];
    if (id===34) for (const tool of [35,36,37,38]) actions.push({type:'set-owner',objectId:tool,ownerId:12});
    if (id===42) {
      for(let i=0;i<4;i++) actions.push({type:'set-variable',index:208+i,value:Math.floor(Math.random()*10)});
      actions.push({type:'set-flag',name:'lottoPending',value:true});
    }
    state.scriptSequence={roomId,afterWalk:actions};
    return "Come over here. That'll be " + price + " bucks, friend.";
  }
  if (roomId===7 && objectId===181 && ['use','talk'].includes(verb)) return 'Show me what ya wanna buy.';
  if (roomId===5 && objectId===31 && verb==='use' && itemId===38 && state.inventory.includes(38)) {
    scheduleAction(state,48,{type:'set-owner',objectId:31,ownerId:1});
    scheduleAction(state,48,{type:'set-object-state',objectId:31,mask:10,value:true});
    state.scriptLockedUntil=state.tick+48;
    return 'Cut the wires holding the bobby pin sign.';
  }
  if (roomId===3 && objectId===150 && verb==='use' && itemId!==null && state.inventory.includes(itemId)) {
    if (!objectHasClass(itemId,128) && itemId!==18) return 'CashCards only.';
    if (!state.flags.busDriverAwakened) return 'The driver is asleep.';
    if (!state.flags.cashInitialized && state.variables[62]===0) state.variables[62]=12250;
    state.flags.cashInitialized=true;
    if (state.variables[62]!<8) return "Sorry bud, but you're low on dough!";
    state.variables[62]-=8;
    state.scriptLockedUntil=state.tick+220;
    scheduleAction(state,40,{type:'set-object-state',objectId:143,mask:8,value:false});
    scheduleAction(state,220,{type:'travel',roomId:8,x:264,y:120});
    return "All right, let's go!";
  }
  // OCv2_0103: Sushi moves between the bowl and the lamp; the bowl remains owned.
  if (roomId === 1 && objectId === 103 && verb === 'use' && itemId === 14 && state.inventory.includes(14)) {
    if (state.variables[138] === 3 || state.variables[138] === 2) return "Sushi's not here.";
    const inLamp = state.variables[138] === 1;
    state.variables[138] = inLamp ? 0 : 1;
    (state.objectNames ??= {})['14'] = inLamp ? 'Sushi in fish bowl' : 'fish bowl';
    state.objectNames['103'] = inLamp ? 'lamp' : 'Sushi in lamp';
    if (inLamp) { setBits(state, 104, 8, false); setBits(state, 105, 8, false); }
    else if (state.objectStates['103']! & 8) state.flags.lampFishHeating = true;
    if (inLamp) state.flags.lampFishHeating = false;
    return inLamp ? "Isn't it nice to be home, Sushi?" : "Hope you're happy in there, Sushi.";
  }
  if (roomId === 1 && objectId === 103 && ['turnOn','turnOff'].includes(verb)) {
    if (verb === 'turnOn' && (state.objectStates['103']! & 4)) return "It's broken.";
    const on = verb === 'turnOn';
    setBits(state, 103, 8, on);
    state.flags.lampFishHeating = on && state.variables[138] === 1;
    if (!on) { setBits(state,104,8,false); setBits(state,105,8,false); }
    return on ? 'Turned on the lamp.' : 'Turned off the lamp.';
  }
  // OCv2_0106 / 0093: first pickup pushes the card away; a class 1/2 tool retrieves it.
  if (roomId === 1 && objectId === 106) {
    if (verb === 'pickup') {
      if (state.objectStates['106']! & 8) return "It's way under the desk.";
      setBits(state,106,8,true); setBits(state,18,8,true);
      return 'Oh no, I pushed it way under the desk!';
    }
    if (verb === 'use' && itemId !== null && state.inventory.includes(itemId)) {
      if (!objectHasClass(itemId, 3)) return "I can't reach it with that.";
      setBits(state,106,10,true); setBits(state,18,8,false); setBits(state,18,2,true);
      scheduleAction(state,1,{type:'set-owner',objectId:18,ownerId:PLAYER_OWNER_ID});
      return "Yay, it's my CashCard.";
    }
    if (verb === 'look') return "I can't make out what it says.";
  }
  // OCv2_0142 -> OCv2_0147 FD: knocking with a class 2/16 item wakes the driver.
  if (roomId === 3 && (objectId === 142 || objectId === 144) && verb === 'use' && itemId !== null && state.inventory.includes(itemId)) {
    if (!objectHasClass(itemId,18) && itemId !== 16) return "That won't wake him up.";
    if (!(state.objectStates['144']! & 8)) return "He's already awake.";
    setBits(state,144,8,false);
    setBits(state,150,2,false);
    state.scriptLockedUntil = state.tick + 240;
    const seen = state.flags.busDriverAwakened;
    state.flags.busDriverAwakened = true;
    scheduleAction(state,80,{type:'say',text:"I guess ya wanna go to the airport.",durationTicks:80});
    scheduleAction(state,160,{type:'say',text:'Well, climb aboard.',durationTicks:80});
    scheduleAction(state,220,{type:'set-object-state',objectId:143,mask:8,value:true});
    scheduleAction(state,220,{type:'set-object-state',objectId:142,mask:2,value:true});
    return seen ? "Oh, it's you again." : "Hey! Wadda ya doin' wakin' me up?";
  }
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
    state.bakeryStartedTick = state.tick;
    state.scriptLockedUntil = state.tick + (count === 3 ? 180 : 120);
    if (count < 3) scheduleAction(state, 120, { type: 'set-object-state', objectId: 137, mask: 8, value: false });
    if (count === 3) {
      scheduleAction(state, 100, { type: 'set-object-state', objectId: 148, mask: 8, value: true });
      scheduleAction(state, 180, { type: 'set-object-state', objectId: 137, mask: 8, value: false });
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
  if (roomId === 2 && objectId === 118 && (verb === 'pull' || verb === 'pickup') && (state.objectStates['118']! & 8)) {
    setBits(state, 118, 8, false);
    setBits(state, 20, 10, false);
    setBits(state, 21, 4, false);
    for (const id of [114,115,116,120,133]) setBits(state, id, 8, false);
    delete state.tvStartedTick; delete state.tvSegment;
    scheduleAction(state, 1, { type: 'set-owner', objectId: 20, ownerId: ROOM_OWNER_ID });
    scheduleAction(state, 1, { type: 'set-object-name', objectId: 118, name: 'power outlet' });
    return 'Unplugged the power cord.';
  }
  if (roomId === 2 && objectId === 118 && verb === 'use' && itemId === 20) {
    setBits(state, 118, 8, true);
    scheduleAction(state, 1, { type: 'set-owner', objectId: 20, ownerId: 0 });
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

const TV_SEGMENTS = [
  { ticks: 150, patch: 115, text: 'Good morning San Francisco, this is Lori Amore.' },
  { ticks: 150, patch: 115, text: "Today's top story: Yale coeds' mission to Mars." },
  { ticks: 180, patch: 114, text: "Hello, I'm Annie Larris from The Society for Ancient Wisdom in San Francisco." },
  { ticks: 180, patch: 114, text: 'Please deposit artifacts in our 14th Avenue drop slot.' },
  { ticks: 150, patch: 115, text: 'Now from Mars, Melissa China.' },
  { ticks: 180, patch: 116, text: 'We had dreams in which an alien told us how to convert our van into a spaceship.' },
  { ticks: 180, patch: 120, text: 'Scientists are baffled by a mysterious buzz that is affecting people worldwide.' },
] as const;
// SCv2_0029: the exit cutscene tidies the apartment before room travel.
export function beginApartmentExit(state: GameState): boolean {
  const steps: Array<'tv' | 'disposal' | 'water' | 'fridge'> = [];
  if (state.objectStates['21']! & 4) steps.push('tv');
  if (state.objectStates['122']! & 4) steps.push('disposal');
  if (state.objectStates['129']! & 8) steps.push('water');
  if (state.objectStates['125']! & 8) steps.push('fridge');
  if (!steps.length) return false;
  state.apartmentExit = { steps, phase: 'next', nextTick: state.tick };
  return true;
}

export function advanceApartmentExit(state: GameState): void {
  const seq = state.apartmentExit;
  if (!seq || state.roomId !== 2 || state.tick < seq.nextTick) return;
  const step = seq.steps[0];
  const targets = { tv: 118, disposal: 122, water: 129, fridge: 125 };
  const lines = { tv: 'I need to turn the TV off.', disposal: "I don't want to leave the disposal on.", water: "I can't leave with the water running.", fridge: 'I forgot to close the fridge.' };
  if (seq.phase === 'next') {
    if (!step) {
      const door = getRoom(2).objects.find(o => o.object_id === 112)!;
      planWalk(state, getRoom(2), { x: door.walk_x, y: door.walk_y });
      seq.phase = 'exit';
      return;
    }
    scheduleAction(state, 1, { type: 'say', text: lines[step], durationTicks: 120 });
    if (step === 'tv' && state.inventory.includes(21)) {
      planWalk(state, getRoom(2), { x: 32 * 8, y: 56 * 2 });
    } else {
      const target = getRoom(2).objects.find(o => o.object_id === targets[step])!;
      planWalk(state, getRoom(2), { x: target.walk_x, y: target.walk_y });
    }
    seq.phase = 'walking';
    return;
  }
  if (seq.phase === 'walking' && state.actor.path.length === 0 && step) {
    if (step === 'tv') {
      if (state.inventory.includes(21)) toggleTv(state, false);
      else applyRoomScriptVerb(state, 2, 118, 'pull', null);
    } else if (step === 'disposal') setBits(state, 122, 4, false);
    else if (step === 'water') { setBits(state, 129, 8, false); setBits(state, 123, 8, false); }
    else setBits(state, 125, 8, false);
    seq.steps.shift();
    seq.phase = 'waiting';
    seq.nextTick = state.tick + 60;
    return;
  }
  if (seq.phase === 'waiting') { seq.phase = 'next'; return; }
  if (seq.phase === 'exit' && state.actor.path.length === 0) {
    const arrival = getRoom(3).objects.find(o => o.object_id === 134)!;
    delete state.apartmentExit;
    scheduleAction(state, 1, { type: 'travel', roomId: 3, x: arrival.walk_x, y: arrival.walk_y });
  }
}

export function advanceSceneScripts(state: GameState): void {
  if (state.flags.lampFishHeating && state.variables[138] === 1 && (state.objectStates['103']! & 8)) {
    state.variables[46] = (state.variables[46] ?? 0) + 1;
    const phase = Math.floor(state.variables[46]! / 5);
    setBits(state,104,8,phase % 2 === 0);
    setBits(state,105,8,phase % 2 === 1);
    if (phase >= 12) {
      state.flags.lampFishHeating = false;
      state.variables[138] = 3; state.variables[46] = 0;
      setBits(state,104,8,false); setBits(state,105,8,false); setBits(state,103,8,false); setBits(state,103,4,true);
      (state.objectNames ??= {})['103'] = 'lamp'; state.objectNames['14'] = 'fish bowl';
      scheduleAction(state,1,{type:'say',text:'Uh oh. Goldfish chowder.'});
    }
  } else if (state.roomId === 1) state.variables[46] = 0;
  if (state.apartmentExit || state.roomId !== 2 || !(state.objectStates['21']! & 4) || !(state.objectStates['118']! & 8)) return;
  state.tvStartedTick ??= state.tick;
  const cycle = TV_SEGMENTS.reduce((sum, seg) => sum + seg.ticks, 0);
  let time = (state.tick - state.tvStartedTick) % cycle;
  let index = 0;
  while (time >= TV_SEGMENTS[index]!.ticks) { time -= TV_SEGMENTS[index]!.ticks; index++; }
  if (state.tvSegment === index) return;
  state.tvSegment = index;
  const seg = TV_SEGMENTS[index]!;
  for (const id of [114,115,116,120,133]) setBits(state, id, 8, id === seg.patch);
  scheduleAction(state, 1, { type: 'say', text: seg.text, durationTicks: seg.ticks - 1 });
}
