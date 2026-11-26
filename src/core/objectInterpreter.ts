import programsJson from '../content/object-programs.json';
import { getRoom, playableRoomIds, objectHasClass } from '../content/rooms';
import { scheduleAction } from './scheduler';
import type { GameState, VerbId, ScheduledAction } from './types';
import { resourceRoom } from './roomIdentity';

type Edge = {target:number;kind:string};
type Program = {events:Record<string,number>;nodes:Record<string,[string,Edge[]]>};
const programs = programsJson as unknown as Record<string,Program>;
const verbs: Record<VerbId,number> = {open:1,close:2,give:3,turnOn:4,turnOff:5,putOn:6,takeOff:7,push:9,pull:10,use:11,look:12,walk:13,pickup:14,talk:17};

// Execute a bounded subset transactionally: unsupported instructions never commit partial effects.
export function runObjectProgram(state:GameState,id:number,verb:VerbId,item:number|null): 'handled'|'unsupported'|'missing' {
  const program=programs[state.roomId+':'+id];
  const entry=program?.events[String(verbs[verb])] ?? (verb==='walk' ? program?.events['255'] : undefined);
  if (!program || entry===undefined) return 'missing';
  const draft=structuredClone(state);
  const effects: Array<{delay:number;action:ScheduledAction}>=[];
  let delay=1, result=0, pc=entry, instruction='';
  const emit=(action:ScheduledAction)=>effects.push({delay,action});
  const val=(raw:string):number=>{
    const s=raw.trim();
    if (/^-?\d+$/.test(s)) return Number(s);
    if(s==='VAR_ACTIVE_OBJECT1')return id;
    if(s==='VAR_ACTIVE_OBJECT2')return item??0;
    if(s==='VAR_ACTIVE_VERB')return verbs[verb];
    if(s==='VAR_EGO')return 1;
    if(s==='VAR_ROOM')return state.logicalRoomId ?? state.roomId;
    if(s==='VAR_RESULT')return result;
    const v=s.match(/^Var\[(\d+)\]$/);
    if(v)return Number(v[1])===235?1:Number(v[1])===234?0:draft.variables[Number(v[1])]??0;
    const st=s.match(/^getState(01|02|04|08)\((.+)\)$/);
    if(st)return (draft.objectStates[String(val(st[2]!))]??0)&Number(st[1]);
    const owner=s.match(/^getObjectOwner\((.+)\)$/);
    if(owner)return draft.objectOwners[String(val(owner[1]!))]??0;
    const bv=s.match(/^getBitVar\(([^,]+),(.+)\)$/);
    if(bv)return Number(draft.flags[`bit:${val(bv[1]!)+val(bv[2]!)}`]??false);
    const cls=s.match(/^classOfIs\(([^,]+),(.+)\)$/);
    if(cls)return Number(objectHasClass(val(cls[1]!),val(cls[2]!)));
    if(/^getActorWalkBox\(7\)$/.test(s))return -1; // NPC simulation not active in the current runtime
    if(/^isScriptRunning\(62\)$/.test(s))return 0; // single-player runtime has no companion script 62
    throw Error('Unsupported expression '+s);
  };
  const condition=(s:string):boolean=>{
    s=s.trim();
    if(s.startsWith('!'))return !condition(s.slice(1));
    const m=s.match(/^(.+?)\s*(==|!=|<=|>=|<|>)\s*(.+)$/);
    if(!m)return Boolean(val(s));
    const a=val(m[1]!),b=val(m[3]!);
    switch(m[2]){case '==':return a===b;case '!=':return a!==b;case '<':return a<b;case '>':return a>b;case '<=':return a<=b;default:return a>=b;}
  };
  const bit=(obj:number,mask:number,on:boolean)=>{
    const k=String(obj),v=draft.objectStates[k]??0;
    draft.objectStates[k]=on?v|mask:v&~mask;
    emit({type:'set-object-state',objectId:obj,mask,value:on});
  };
  const owner=(obj:number,n:number)=>{
    draft.objectOwners[String(obj)]=n;
    emit({type:'set-owner',objectId:obj,ownerId:n});
  };
  try {
    for(let budget=0;budget<256;budget++){
      const node=program.nodes[String(pc)];
      if(!node)throw Error('Missing instruction');
      const [raw,edges]=node, s=raw.trim(); instruction=s;
      if (/^(stopObjectCode|stopScript\(0\))/.test(s)){
        for(const e of effects)scheduleAction(state,e.delay,e.action);
        if(delay>1)state.scriptLockedUntil=state.tick+delay;
        return 'handled';
      }
      let branch:string='next';
      let m:RegExpMatchArray|null;
      if((m=s.match(/^unless \((.*)\) goto [0-9A-F]+;/i))) branch=condition(m[1]!)?'condition_true':'condition_false';
      else if(/^goto /.test(s)) { if(edges.length!==1)throw Error('ambiguous jump'); pc=edges[0]!.target;continue; }
      else if((m=s.match(/^(set|clear)State(01|02|04|08)\((.+)\);$/)))bit(val(m[3]!),Number(m[2]),m[1]==='set');
      else if((m=s.match(/^pickupObject\((.+)\);$/))){const o=val(m[1]!);owner(o,1);bit(o,10,true);}
      else if((m=s.match(/^setOwnerOf\(([^,]+),(.+)\);$/)))owner(val(m[1]!),val(m[2]!));
      else if((m=s.match(/^setBitVar\(([^,]+),([^,]+),(.+)\);$/))){const name=`bit:${val(m[1]!)+val(m[2]!)}`,value=Boolean(val(m[3]!));draft.flags[name]=value;emit({type:'set-flag',name,value});}
      else if((m=s.match(/^VAR_RESULT = (.+);$/)))result=val(m[1]!);
      else if((m=s.match(/^Var\[(\d+)\] = (.+);$/))){const i=Number(m[1]),v=val(m[2]!);draft.variables[i]=v;emit({type:'set-variable',index:i,value:v});}
      else if((m=s.match(/^Var\[(\d+)\](\+\+|--);$/))){const i=Number(m[1]),v=(draft.variables[i]??0)+(m[2]==='++'?1:-1);draft.variables[i]=v;emit({type:'set-variable',index:i,value:v});}
      else if((m=s.match(/^printEgo\("(.*)"\);$/)))emit({type:'say',text:m[1]!.replace(/\\x[0-9a-f]{2}/gi,' ').replace(/[\x00-\x1f]/g,' ').replace(/\s+/g,' ')});
      else if((m=s.match(/^delay\((\d+)\);$/)))delay+=Number(m[1]);
      else if(/^breakHere\(\);$/.test(s))delay++;
      else if(/^startScript\((10|11)\);$/.test(s))bit(id,8,s.includes('(10)')); // standard door open/close
      else if((m=s.match(/^setObjectName\(([^,]+),"(.*)"\);$/)))emit({type:'set-object-name',objectId:val(m[1]!),name:m[2]!});
      else if((m=s.match(/^loadRoomWithEgo\(([^,]+),([^,]+),([^,]+),([^,]+)\);$/))){
        const obj=val(m[1]!),room=val(m[2]!);
        if(!playableRoomIds.includes(resourceRoom(room)))throw Error('Unknown room');
        const dest=getRoom(resourceRoom(room)).objects.find(o=>o.object_id===obj);
        if(!dest)throw Error('Missing arrival');
        const x=val(m[3]!),y=val(m[4]!);
        emit({type:'travel',roomId:room,x:x===255?dest.walk_x:x*8,y:y===255?dest.walk_y:y*2});
      }
      else throw Error('Unsupported instruction '+s);
      const next=edges.find(e=>e.kind===branch);
      if(!next)throw Error('Missing successor '+branch);
      pc=next.target;
    }
  }catch(error){state.scriptDiagnostic={room:state.logicalRoomId??state.roomId,object:id,verb,instruction,reason:String(error)};return 'unsupported';}
  state.scriptDiagnostic={room:state.logicalRoomId??state.roomId,object:id,verb,instruction,reason:'Instruction budget exceeded'};
  return 'unsupported';
}
