import {parseProject,geometryDefaults,type Project} from './model';
import {objectIsAvailable} from '../content/rooms';
import {GeometryPreview} from './geometry';
import {composeProject} from './compositor';
import {canvas} from './render';
import {layerActive,playHitTest,missingContainerItems,replacedObjectIds} from './playState';
import type {GameState,RoomData} from '../core/types';
import type {GameRenderer} from '../render/GameRenderer';

export class LabPlayRuntime {
 private images=new Map<string,HTMLImageElement>();
 private geometry=new GeometryPreview();
 private projects=new Map<number,Project>();
 private surfaces=new Map<number,HTMLCanvasElement>();
 private signature='';
 private amounts=new Map<string,number>();
 private previous=performance.now();
 static async create(raw:unknown[]){const runtime=new LabPlayRuntime();for(const value of raw){const p=parseProject(value);runtime.projects.set(p.roomId,p);const sources=[p.master,p.plate,...p.layers.flatMap(l=>[l.image,l.geometry?.reveal,l.geometry?.side,l.geometry?.back])].filter((s):s is string=>!!s);for(const src of new Set(sources)){if(runtime.images.has(src))continue;const img=new Image();img.src=src;await img.decode();runtime.images.set(src,img);}const full=[p.master,p.plate,...p.layers.flatMap(l=>[l.image,l.geometry?.reveal])].filter((s):s is string=>!!s);for(const src of full){const img=runtime.images.get(src)!;if(img.width!==p.width||img.height!==p.height)throw Error('Bakgrundens pixelmått stämmer inte.');}runtime.surfaces.set(p.roomId,canvas(p.width,p.height));}return runtime;}
 missingItems(room:RoomData,state:GameState){const p=this.projects.get(room.id);return p?missingContainerItems(p,room,state):[];}
 attach(renderer:GameRenderer){renderer.labHitTest=(point,room,state)=>{const project=this.projects.get(room.id);return project?playHitTest(project,room,state,point):undefined;};}
 update(room:RoomData,state:GameState,renderer:GameRenderer){const now=performance.now(),step=Math.min(0.1,(now-this.previous)/1000)*3;this.previous=now;const p=this.projects.get(room.id);if(!p)return;const active=p.layers.map(l=>layerActive(l,room,state));
 const amounts=p.layers.map((l,i)=>{const key=room.id+':'+l.key,target=active[i]?l.amount:0,old=this.amounts.get(key)??target,next=old+Math.sign(target-old)*Math.min(Math.abs(target-old),step);this.amounts.set(key,next);return Math.round(next*30)/30;});
 const signature=JSON.stringify([room.id,active,amounts,state.objectStates]);if(signature===this.signature)return;this.signature=signature;
 const visual:Project={...p,lighting:p.lighting?{...p.lighting,helpers:false}:undefined,layers:p.layers.map((l,i)=>{const object=room.objects.find(o=>o.object_id===l.objectId);return {...l,enabled:l.enabled&&(l.mode==='patch'?active[i]:!!object&&objectIsAvailable(room,state.objectStates,object)),amount:amounts[i],geometry:{...(l.geometry??geometryDefaults),item:false}};})};
 const rendered=composeProject(visual,this.images,this.geometry),surface=this.surfaces.get(room.id)!;surface.getContext('2d')!.clearRect(0,0,p.width,p.height);surface.getContext('2d')!.drawImage(rendered,0,0);renderer.setLabCanvas(room.id,surface,replacedObjectIds(p));
 }
}
