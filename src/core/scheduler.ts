import { PLAYER_OWNER_ID, type GameState, type ScheduledAction } from './types';

export function scheduleAction(state: GameState, delayTicks: number, action: ScheduledAction): void {
  state.scheduled.push({
    dueTick: state.tick + Math.max(1, Math.floor(delayTicks)),
    sequence: state.nextEventSequence++,
    action,
  });
}

function say(state: GameState, text: string, durationTicks: number): void {
  state.dialogue = text;
  state.dialogueUntilTick = state.tick + durationTicks;
  state.messages.push({ tick: state.tick, text });
  if (state.messages.length > 30) state.messages.splice(0, state.messages.length - 30);
}

function applyAction(state: GameState, action: ScheduledAction): void {
  switch (action.type) {
    case 'say':
      say(state, action.text, action.durationTicks ?? 90);
      break;
    case 'set-variable':
      if (action.index >= 0 && action.index < state.variables.length) state.variables[action.index] = action.value;
      break;
    case 'add-variable':
      if (action.index >= 0 && action.index < state.variables.length) state.variables[action.index] += action.amount;
      break;
    case 'set-flag':
      state.flags[action.name] = action.value;
      break;
    case 'set-object-name':
      (state.objectNames ??= {})[String(action.objectId)] = action.name;
      break;
    case 'set-owner':
      state.objectOwners[String(action.objectId)] = action.ownerId;
      state.inventory = state.inventory.filter((id) => id !== action.objectId);
      if (action.ownerId === PLAYER_OWNER_ID) state.inventory.push(action.objectId);
      else if (state.selectedItemId === action.objectId) state.selectedItemId = null;
      break;
    case 'set-object-state': {
      const key = String(action.objectId);
      const previous = state.objectStates[key] ?? 0;
      state.objectStates[key] = action.value ? previous | action.mask : previous & ~action.mask;
      break;
    }
    case 'travel':
      state.roomId = action.roomId;
      state.actor.x = action.x;
      state.actor.y = action.y;
      state.actor.path = [];
      state.actor.pose = 'idle';
      state.pendingInteraction = null;
      break;
    default: {
      const exhaustive: never = action;
      return exhaustive;
    }
  }
}

/** Advance exactly one simulation tick; equal-tick events execute in insertion order. */
export function advanceScheduler(state: GameState): void {
  state.tick += 1;
  state.scheduled.sort((a, b) => a.dueTick - b.dueTick || a.sequence - b.sequence);
  let dueCount = 0;
  while (dueCount < state.scheduled.length && state.scheduled[dueCount]!.dueTick <= state.tick) {
    applyAction(state, state.scheduled[dueCount]!.action);
    dueCount += 1;
  }
  if (dueCount > 0) state.scheduled.splice(0, dueCount);
  if (state.dialogue !== null && state.tick >= state.dialogueUntilTick) state.dialogue = null;
}

export function advanceSchedulerBy(state: GameState, ticks: number): void {
  for (let index = 0; index < Math.max(0, Math.floor(ticks)); index += 1) advanceScheduler(state);
}
