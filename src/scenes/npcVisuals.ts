import type { GameState } from '../core/types';
import animations from '../content/costume-reference.json';

export interface CostumeAnimation {id:number;file:string;frames:number;width:number;height:number;x:number;y:number}
export interface NpcVisual {costume:number;x:number;y:number;animation:CostumeAnimation;phase:number}
/** Reviewed placements from EN7/EN8/EN17/EN19 and SC121. Actor choreography is separate. */
export function npcVisuals(s:GameState):NpcVisual[] {
  const entries:Array<[number,number,number,boolean]>=[];
  if(s.roomId===7)entries.push([16,240,72,false]); // Lou, source (30,36)
  if(s.roomId===8&&(s.logicalRoomId??145)===145&&s.objectOwners[45]===15)entries.push([25,80,92,false]);
  if(s.roomId===8&&s.logicalRoomId===143&&s.objectOwners[46]===15)entries.push([23,240,92,false]);
  if(s.roomId===11)entries.push([11,s.flags.stewardessAtOven?728:s.flags.stewardessCleaning?72:728,108,!!s.dialogue?.startsWith('Stewardess:')]);
  if(s.roomId===17)entries.push([26,640,22,false]);
  if(s.roomId===19)entries.push([22,480,112,!!s.scriptLockedUntil&&s.scriptLockedUntil>s.tick]);
  return entries.flatMap(([costume,x,y,talking])=>{
    const list=(animations as Record<string,CostumeAnimation[]>)[costume];
    const animation=list?.find(a=>a.id===(talking?(Math.floor(s.tick/5)%2?18:22):10));
    return animation?[{costume,x,y,animation,phase:talking?Math.floor(s.tick/5)%animation.frames:0}]:[];
  });
}
