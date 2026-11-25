import { advanceActorOneStep, planWalk, scriptActorToRoomPixels } from './movement';
import { advanceScheduler, scheduleAction } from './scheduler';
import { PLAYER_OWNER_ID, OBJECT_INTRINSIC, OBJECT_UNTOUCHABLE, type GameState, type Point, type RoomData, type SourceObject, type VerbId } from './types';
import { getRoom, displayObjectName, inventoryObjectName, objectIsTargetable } from '../content/rooms';
import { advanceSceneScripts, applyInventoryVerb, applyInventoryUse, applyRoomScriptVerb, getOriginalExit, getOutOfSliceDestination, hasPickupHandler } from '../scenes/roomScripts';

export class GameEngine {
  constructor(public state: GameState) {}

  get room(): RoomData {
    return getRoom(this.state.roomId);
  }

  setVerb(verb: VerbId): void {
    if (this.state.scriptSequence || (this.state.scriptLockedUntil ?? 0) > this.state.tick) return;
    this.state.activeVerb = verb;
    if (verb !== 'use') this.state.selectedItemId = null;
  }

  selectInventoryItem(objectId: number): void {
    if (this.state.scriptSequence || this.state.intro || (this.state.scriptLockedUntil ?? 0) > this.state.tick || !this.state.inventory.includes(objectId)) return;
    const scripted = applyInventoryVerb(this.state, objectId, this.state.activeVerb);
    if (scripted !== undefined) { this.speak(scripted, 120); this.state.selectedItemId = null; return; }
    if (this.state.activeVerb === 'use' && this.state.selectedItemId !== null && this.state.selectedItemId !== objectId) {
      const first = this.state.selectedItemId;
      const result = applyInventoryUse(this.state, first, objectId);
      this.speak(result ?? `${inventoryObjectName(first, this.state.objectNames)} doesn't seem to work with ${inventoryObjectName(objectId, this.state.objectNames)}.`, 120);
      this.state.selectedItemId = null;
      return;
    }
    this.state.selectedItemId = this.state.selectedItemId === objectId ? null : objectId;
    this.state.activeVerb = 'use';
  }

  replaceState(state: GameState): void {
    this.state = state;
  }

  targetableObjects(): SourceObject[] {
    const room = this.room;
    return room.objects.filter((object) => objectIsTargetable(room, this.state.objectOwners, this.state.objectStates, object));
  }

  handleClick(point: Point, target?: SourceObject): void {
    // The original script holds control until its dream dialogue and walk finish.
    if (this.state.intro || this.state.scriptSequence || (this.state.scriptLockedUntil ?? 0) > this.state.tick) return;

    const room = this.room;
    if (!target || !this.targetableObjects().some((object) => object.object_id === target.object_id)) {
      this.state.pendingInteraction = null;
      planWalk(this.state, room, point);
      return;
    }

    const destination = planWalk(this.state, room, { x: target.walk_x, y: target.walk_y });
    this.state.pendingInteraction = {
      verb: this.state.activeVerb,
      targetObjectId: target.object_id,
      selectedItemId: this.state.selectedItemId,
    };
    // A pending interaction may resolve immediately on the next deterministic tick if already at the hotspot.
    if (!Number.isFinite(destination.x) || !Number.isFinite(destination.y)) this.state.pendingInteraction = null;
  }

  advanceOneTick(): void {
    advanceScheduler(this.state);
    advanceSceneScripts(this.state);
    this.advanceScript108Intro();
    if (this.state.actor.path.length > 0) advanceActorOneStep(this.state);
    this.advanceScript108WindowShadeSentence();
    if (this.state.intro?.phase === 'walking' && this.state.actor.path.length === 0) delete this.state.intro;
    if (this.state.actor.path.length === 0 && this.state.scriptSequence) {
      const sequence = this.state.scriptSequence;
      delete this.state.scriptSequence;
      if (sequence.roomId === this.state.roomId) for (const action of sequence.afterWalk) scheduleAction(this.state, 1, action);
    }
    if (this.state.actor.path.length === 0 && this.state.pendingInteraction) this.resolvePendingInteraction();
  }

  advance(ticks: number): void {
    for (let index = 0; index < Math.max(0, Math.floor(ticks)); index += 1) this.advanceOneTick();
  }

  private advanceScript108Intro(): void {
    const intro = this.state.intro;
    if (!intro || intro.phase !== 'waiting-to-walk' || this.state.tick < intro.nextTick) return;

    // SCv2_0108 dispatches the walk verb on object 90 before its final walk to (21,56).
    const windowShade = this.room.objects.find((object) => object.object_id === 90);
    if (!windowShade) throw new Error('SCv2_0108 requires room 1 object 90 (window shade).');
    planWalk(this.state, this.room, { x: windowShade.walk_x, y: windowShade.walk_y });
    intro.phase = 'walking-to-window-shade';
  }

  private advanceScript108WindowShadeSentence(): void {
    const intro = this.state.intro;
    if (!intro || intro.phase !== 'walking-to-window-shade' || this.state.actor.path.length > 0) return;

    // waitForSentence() completes when the object-90 walk reaches its hotspot.
    planWalk(this.state, this.room, scriptActorToRoomPixels({ x: 21, y: 56 }));
    intro.phase = 'walking';
  }

  private speak(text: string, durationTicks = 90): void {
    scheduleAction(this.state, 1, { type: 'say', text, durationTicks });
  }

  private resolvePendingInteraction(): void {
    const pending = this.state.pendingInteraction;
    if (!pending) return;
    this.state.pendingInteraction = null;

    const room = this.room;
    const target = room.objects.find((object) => object.object_id === pending.targetObjectId);
    if (!target || !objectIsTargetable(room, this.state.objectOwners, this.state.objectStates, target)) {
      this.speak('That object is no longer here.');
      return;
    }

    if (pending.verb === 'walk') {
      const exit = getOriginalExit(room.id, target.object_id);
      if (exit) {
        if ([84, 111, 112].includes(target.object_id) && !((this.state.objectStates[String(target.object_id)] ?? 0) & OBJECT_INTRINSIC)) {
          this.speak('The door is closed.');
          return;
        }
        const arrival = getRoom(exit.roomId).objects.find((object) => object.object_id === exit.arrivalObjectId);
        if (!arrival) {
          this.speak(`The original exit points to room ${exit.roomId}, but its arrival object is missing from the slice.`);
          return;
        }
        scheduleAction(this.state, 1, { type: 'travel', roomId: exit.roomId, x: arrival.walk_x, y: arrival.walk_y });
        this.state.selectedItemId = null;
        return;
      }
      const outsideDestination = getOutOfSliceDestination(room.id, target.object_id);
      if (outsideDestination !== undefined) {
        this.speak(`The original exit leads to room ${outsideDestination}; that room is outside this playable slice.`);
      }
      return;
    }

    const scripted = applyRoomScriptVerb(this.state, room.id, target.object_id, pending.verb, pending.selectedItemId);
    if (scripted) {
      if (pending.verb === 'use') this.state.selectedItemId = null;
      this.speak(scripted, 120);
      return;
    }

    const name = displayObjectName(target);
    switch (pending.verb) {
      case 'look':
        this.state.variables[1] = target.object_id;
        this.speak(name === `Object ${target.object_id}` ? `It is object ${target.object_id}.` : `It's ${name}.`);
        break;
      case 'pickup':
        if (!hasPickupHandler(room.id, target.object_id)) {
          this.speak(`I can't pick up ${name.toLowerCase()}.`);
        } else if ((this.state.objectOwners[String(target.object_id)] ?? 0) === PLAYER_OWNER_ID) {
          this.speak(`I already have ${name.toLowerCase()}.`);
        } else {
          scheduleAction(this.state, 1, { type: 'set-owner', objectId: target.object_id, ownerId: PLAYER_OWNER_ID });
          scheduleAction(this.state, 1, { type: 'set-object-state', objectId: target.object_id, mask: OBJECT_INTRINSIC | OBJECT_UNTOUCHABLE, value: true });
          this.speak(`Picked up: ${name}.`);
        }
        break;
      case 'open': {
        if (![84, 90, 92, 94, 111, 112, 121, 125].includes(target.object_id)) {
          this.speak(`I can't open ${name.toLowerCase()}.`);
          break;
        }
        scheduleAction(this.state, 1, { type: 'set-object-state', objectId: target.object_id, mask: 0x08, value: true });
        if (target.object_id === 84 || target.object_id === 111) scheduleAction(this.state, 1, { type: 'set-object-state', objectId: target.object_id === 84 ? 111 : 84, mask: 8, value: true });
        this.speak(`Opened ${name.toLowerCase()}.`);
        break;
      }
      case 'close':
        if (![84, 90, 92, 94, 111, 112, 121, 125].includes(target.object_id)) { this.speak(`I can't close ${name.toLowerCase()}.`); break; }
        scheduleAction(this.state, 1, { type: 'set-object-state', objectId: target.object_id, mask: 0x08, value: false });
        if (target.object_id === 84 || target.object_id === 111) scheduleAction(this.state, 1, { type: 'set-object-state', objectId: target.object_id === 84 ? 111 : 84, mask: 8, value: false });
        this.speak(`Closed ${name.toLowerCase()}.`);
        break;
      case 'use': {
        const itemId = pending.selectedItemId;
        if (itemId === null || !this.state.inventory.includes(itemId)) {
          this.speak('Choose an inventory item first, then use it on an object.');
        } else {
          const itemName = inventoryObjectName(itemId, this.state.objectNames);
          this.state.variables[2] += 1;
          this.speak(`${itemName} doesn't seem to work with ${name.toLowerCase()}.`);
        }
        break;
      }
      case 'talk':
        this.speak(room.id === 3 && target.object_id === 144 ? 'The driver is busy with the bus.' : `There is nobody to talk to at ${name.toLowerCase()}.`);
        break;
      case 'putOn':
      case 'takeOff':
      case 'turnOn':
      case 'turnOff':
      case 'push':
      case 'pull':
      case 'give':
        this.speak(`I can't do that with ${name.toLowerCase()}.`);
        break;
      default: {
        const exhaustive: never = pending.verb;
        return exhaustive;
      }
    }
  }
}
