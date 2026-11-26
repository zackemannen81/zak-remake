import {expect,it} from 'vitest';
import {npcVisuals} from './npcVisuals';
import {createInitialState} from '../core/state';
import {getRoom} from '../content/rooms';
it('uses reviewed costumes, hides departed devotee and moves cabin distraction visual',()=>{
 const s=createInitialState(getRoom(8));s.logicalRoomId=145;
 expect(npcVisuals(s)[0]?.costume).toBe(25);
 s.objectOwners[45]=1;expect(npcVisuals(s)).toHaveLength(0);
 s.roomId=11;s.flags.stewardessCleaning=true;expect(npcVisuals(s)[0]?.x).toBe(72);
 s.flags.stewardessAtOven=true;s.dialogue='Stewardess: What is that smell?';s.tick=15;
 const n=npcVisuals(s)[0]!;expect(n.x).toBe(728);expect(n.animation.id).toBe(18);expect(n.phase).toBeLessThan(n.animation.frames);
});
