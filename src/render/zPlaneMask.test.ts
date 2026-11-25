import { describe, expect, it } from 'vitest';
import { getRoom, objectZplaneUrl, roomOcclusionObjects } from '../content/rooms';
import { createInitialState } from '../core/state';
import { walkboxAtPoint } from '../core/movement';
import { composeRoomMaskPixels, scummV2MaskBufferIndex } from './zPlaneMask';

describe('SCUMM V2 Z-plane masking', () => {
  it('maps room 1 walkbox depth 3 to the single populated V2 occlusion plane', () => {
    const room = getRoom(1);
    const bedZone = walkboxAtPoint(room, { x: 72, y: 104 });
    const unmaskedZone = walkboxAtPoint(room, { x: 150, y: 112 });

    expect(bedZone).toMatchObject({ index: 0, mask: 3 });
    expect(unmaskedZone).toMatchObject({ mask: 0 });
    expect(scummV2MaskBufferIndex(bedZone!.mask)).toBe(1);
    expect(scummV2MaskBufferIndex(unmaskedZone!.mask)).toBe(0);
    expect(objectZplaneUrl(1, 85)).toBeTruthy();
  });

  it('places only covered source-mask pixels at the object origin in room coordinates', () => {
    const source = new Uint8Array([
      255, 255, 255, 255, 0, 0, 0, 255,
      0, 0, 0, 255, 255, 255, 255, 255,
    ]);
    const roomPixels = composeRoomMaskPixels(4, 4, 1, 1, 2, 2, source);
    const covered = (x: number, y: number): boolean => roomPixels[(y * 4 + x) * 4]! > 0;

    expect(covered(1, 1)).toBe(true);
    expect(covered(2, 2)).toBe(true);
    expect(covered(2, 1)).toBe(false);
    expect(covered(1, 2)).toBe(false);
    expect(covered(0, 0)).toBe(false);
  });

  it('uses the inclusive 128 red cutoff and clips mask pixels at room boundaries', () => {
    const source = new Uint8Array([
      255, 0, 0, 255, 127, 0, 0, 255, 128, 0, 0, 255, 255, 0, 0, 255,
    ]);
    const roomPixels = composeRoomMaskPixels(3, 1, -1, 0, 4, 1, source);
    const coveredAt = (x: number): boolean => roomPixels[(x * 4)]! > 0;

    expect(coveredAt(0)).toBe(false);
    expect(coveredAt(1)).toBe(true);
    expect(coveredAt(2)).toBe(true);
  });
});

it('retains the bed foreground mask even when its color patch is inactive', () => {
  const room = getRoom(1);
  const state = createInitialState(room);
  expect(state.objectStates['85'] & 8).toBe(0);
  expect(roomOcclusionObjects(room, state.objectStates).map(o => o.object_id)).toContain(85);
  state.objectStates['94'] = 8;
  expect(roomOcclusionObjects(room, state.objectStates).map(o => o.object_id)).toContain(85);
});
