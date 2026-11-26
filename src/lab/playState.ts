import {objectIsAvailable,objectIsVisible,objectIsTargetable,hitTestRoomObject} from '../content/rooms';
import type {GameState,RoomData,Point} from '../core/types';
import {geometryDefaults,type Layer,type Project,type Quad} from './model';
import {hingePoints} from './geometry';
/** Disabled/empty patch layers have no replacement; retain the original fallback. */
export function replacedObjectIds(project:Project):number[]{
 return [...new Set(project.layers.filter(l=>l.enabled&&(l.mode!=='patch'||!!l.image)).map(l=>l.objectId))];
}
export function layerActive(l:Layer,room:RoomData,state:GameState){
 if(!l.enabled)return false;
 const object=room.objects.find(o=>o.object_id===l.objectId);if(!object)return false;
 switch(l.binding??'auto'){
 case 'always':return true;
 case 'picked':return (state.objectOwners[String(l.objectId)]??15)!==15;
 case 'present':return objectIsAvailable(room,state.objectStates,object)&&(state.objectOwners[String(l.objectId)]??15)===15;
 case 'set':return objectIsAvailable(room,state.objectStates,object)&&!!((state.objectStates[String(l.objectId)]??0)&8);
 case 'clear':return objectIsAvailable(room,state.objectStates,object)&&!((state.objectStates[String(l.objectId)]??0)&8);
 default:return objectIsVisible(room,state.objectOwners,state.objectStates,object);
 }
}
export function inQuad(p:Point,q:Quad){let pos=false,neg=false;for(let i=0;i<4;i++){const a=q[i],b=q[(i+1)%4],v=(b.x-a.x)*(p.y-a.y)-(b.y-a.y)*(p.x-a.x);pos||=v>0;neg||=v<0;}return !(pos&&neg);}
export function playHitTest(project:Project,room:RoomData,state:GameState,point:Point){
 const p={x:point.x*project.width/room.width,y:point.y*project.height/room.height};
 const candidates=project.layers.filter(l=>{if(!l.enabled||(l.mode==='patch'&&!l.image))return false;const amount=layerActive(l,room,state)?l.amount:0,g=l.geometry??geometryDefaults;const moved=l.mode==='hinged'?hingePoints({...l,amount},0).map(v=>({x:v.x+v.z*l.dx/g.depth,y:-v.y+v.z*l.dy/g.depth})) as Quad:l.quad.map(v=>({x:v.x+l.dx*amount,y:v.y+l.dy*amount})) as Quad;return inQuad(p,l.quad)||(l.mode!=='patch'&&inQuad(p,moved));}).map(l=>room.objects.find(o=>o.object_id===l.objectId)).filter(o=>o&&objectIsTargetable(room,state.objectOwners,state.objectStates,o));
 const fallback=hitTestRoomObject(room,state.objectOwners,state.objectStates,point,state.activeVerb);
 if(candidates.length){const containers=[84,92,94,111,112,121,125];if(state.activeVerb==='open'||state.activeVerb==='close'){const c=candidates.find(o=>o&&containers.includes(o.object_id));if(c)return c;}
 // A container's authored face must not swallow its original child hotspot.
 if(fallback&&!project.layers.some(l=>l.enabled&&(l.mode!=='patch'||!!l.image)&&l.objectId===fallback.object_id)&&candidates.some(o=>o?.slot===fallback.parent_slot))return fallback;
 return candidates.sort((a,b)=>a!.slot-b!.slot)[0];}
 return fallback&&project.layers.some(l=>l.enabled&&(l.mode!=='patch'||!!l.image)&&l.objectId===fallback.object_id)?undefined:fallback;
}
export function missingContainerItems(project:Project,room:RoomData,state:GameState){return room.objects.filter(o=>o.parent_slot>0&&objectIsTargetable(room,state.objectOwners,state.objectStates,o)&&!project.layers.some(l=>l.enabled&&(l.mode!=='patch'||!!l.image)&&l.objectId===o.object_id)&&project.layers.some(l=>l.enabled&&(l.mode!=='patch'||!!l.image)&&room.objects.find(parent=>parent.slot===o.parent_slot)?.object_id===l.objectId));}
