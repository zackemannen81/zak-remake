import { describe, expect, it } from 'vitest';
import { introBeats } from './intro';
import { shouldStartIntro } from './introPolicy';
import { getRoom, objectImageUrl } from '../content/rooms';
import costumes from '../content/costume-reference.json';
describe('original opening sequence', () => {
  it('starts new games but respects editor/direct room/skip entry points', () => {
    expect(shouldStartIntro(new URLSearchParams(), false)).toBe(true);
    for (const query of ['room=12','skipIntro=1','intro=0']) expect(shouldStartIntro(new URLSearchParams(query), false)).toBe(false);
    expect(shouldStartIntro(new URLSearchParams('intro=1'), true)).toBe(false);
  });
  it('uses existing source objects and costumes throughout the dream and office', () => {
    for (const beat of introBeats) {
      for (const id of beat.patches ?? []) {
        expect(getRoom(beat.roomId).objects.some(o => o.object_id === id)).toBe(true);
        expect(objectImageUrl(beat.roomId,id)).toBeTruthy();
      }
      for (const actor of beat.actors ?? []) expect((costumes as Record<string, typeof costumes['1']>)[actor.costume]?.some(a=>a.id===actor.animation)).toBe(true);
    }
  });
  it('preserves the SC1 camera directions and sequential dream changes', () => {
    expect(introBeats.find(b=>b.roomId===51)?.camera).toEqual([320,0]);
    expect(introBeats.some(b=>b.roomId===56 && b.camera?.[1]===320 && b.camera?.[0]===0)).toBe(true);
    expect(introBeats.filter(b=>b.roomId===58).map(b=>b.patches??[])).toEqual([[],[766],[766,767],[766,767,768]]);
    expect(introBeats.filter(b=>b.creditText).length).toBe(6);
    expect(introBeats.at(-1)?.roomId).toBe(56); // SC108, not a duplicated bedroom slide, owns wake-up.
  });
});
