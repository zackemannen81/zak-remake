import { describe, expect, it } from 'vitest';
import { advanceActorOneStep, facingForMotion } from './movement';
import { createInitialState } from './state';
import { getRoom } from '../content/rooms';

describe('actor walking heading', () => {
  it('keeps the last heading when there is no movement', () => {
    expect(facingForMotion(0, 0, 'up')).toBe('up');
  });

  it('selects the dominant screen axis with top-left/y-down coordinates', () => {
    expect(facingForMotion(0, -10, 'down')).toBe('up');
    expect(facingForMotion(0, 10, 'up')).toBe('down');
    expect(facingForMotion(-10, 1, 'down')).toBe('left');
    expect(facingForMotion(10, -1, 'up')).toBe('right');
  });

  it('updates the persisted actor heading along actual walk segments', () => {
    const state = createInitialState(getRoom(1), { skipIntro: true });
    state.actor.x = 168;
    state.actor.y = 110;

    state.actor.path = [{ x: 168, y: 94 }];
    advanceActorOneStep(state);
    expect(state.actor.facing).toBe('up');

    state.actor.path = [{ x: 168, y: 124 }];
    advanceActorOneStep(state);
    expect(state.actor.facing).toBe('down');

    state.actor.path = [{ x: 90, y: state.actor.y }];
    advanceActorOneStep(state);
    expect(state.actor.facing).toBe('left');

    state.actor.path = [{ x: 250, y: state.actor.y }];
    advanceActorOneStep(state);
    expect(state.actor.facing).toBe('right');
  });
});
