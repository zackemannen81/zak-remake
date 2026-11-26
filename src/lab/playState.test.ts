import {it,expect} from 'vitest';
import {getRoom} from '../content/rooms';
import {createInitialState} from '../core/state';
import {GameEngine} from '../core/engine';
import {layerActive,playHitTest,missingContainerItems} from './playState';
import {rectangle,type Layer,type Project} from './model';
const room=getRoom(1);
const layer:Layer={key:'drawer',objectId:92,state:'open',enabled:true,mode:'sliding',quad:rectangle(230,300,50,60),image:'',amount:1,dx:70,dy:4,pivot:'left'};
const project:Project={version:1,roomId:1,width:1640,height:656,master:'./assets/scene-lab/room1-master.png',plate:'',layers:[layer]};
it('binds open state and static/pickup patches without interpreting labels',()=>{const state=createInitialState(room,{skipIntro:true});state.objectStates['92']=0;expect(layerActive(layer,room,state)).toBe(false);state.objectStates['92']=8;expect(layerActive(layer,room,state)).toBe(true);expect(layerActive({...layer,binding:'clear'},room,state)).toBe(false);expect(layerActive({...layer,binding:'always'},room,state)).toBe(true);state.objectOwners['92']=1;expect(layerActive({...layer,binding:'picked'},room,state)).toBe(true);expect(layerActive({...layer,enabled:false},room,state)).toBe(false);});
it('maps authored coordinates into original object identity and runs actual open/close',()=>{const engine=new GameEngine(createInitialState(room,{skipIntro:true}));engine.state.objectStates['92']=0;engine.setVerb('open');const target=playHitTest(project,room,engine.state,{x:250/1640*320,y:330/656*128});expect(target?.object_id).toBe(92);engine.handleClick({x:50,y:65},target);for(let i=0;i<600;i++)engine.advanceOneTick();expect(layerActive(layer,room,engine.state)).toBe(true);engine.setVerb('close');const extended=playHitTest(project,room,engine.state,{x:320/1640*320,y:334/656*128});expect(extended?.object_id).toBe(92);engine.handleClick({x:60,y:65},extended);for(let i=0;i<600;i++)engine.advanceOneTick();expect(layerActive(layer,room,engine.state)).toBe(false);});

it('does not swallow kazoo/crayon child hotspots and allows source pickup',()=>{
 for(const [roomId,parentId,childId] of [[1,94,16],[2,121,25]]){
 const r=getRoom(roomId),e=new GameEngine(createInitialState(r,{skipIntro:true}));e.state.objectStates[String(parentId)]=8;e.setVerb('pickup');
 const parent=r.objects.find(o=>o.object_id===parentId)!,child=r.objects.find(o=>o.object_id===childId)!;
 const p:Project={...project,roomId,width:r.width,height:r.height,layers:[{...layer,objectId:parentId,quad:rectangle(parent.x,parent.y,parent.width,parent.height)}]};
 const target=playHitTest(p,r,e.state,{x:child.x+child.width/2,y:child.y+child.height/2});expect(target?.object_id).toBe(childId);expect(missingContainerItems(p,r,e.state).some(o=>o.object_id===childId)).toBe(true);
 e.handleClick({x:child.walk_x,y:child.walk_y},target);for(let i=0;i<800;i++)e.advanceOneTick();expect(e.state.inventory).toContain(childId);expect(missingContainerItems(p,r,e.state).some(o=>o.object_id===childId)).toBe(false);if(childId===25)expect(e.state.objectNames?.['25']).toBe('yellow crayon');
 }
});
it('shows an egg sprite only while owned by room and fridge open',()=>{const r=getRoom(2),state=createInitialState(r,{skipIntro:true}),egg:Layer={...layer,objectId:22,binding:'present'};state.objectStates['125']=0;state.objectOwners['22']=15;expect(layerActive(egg,r,state)).toBe(false);state.objectStates['125']=8;expect(layerActive(egg,r,state)).toBe(true);state.objectStates['22']=10;state.objectOwners['22']=1;expect(layerActive(egg,r,state)).toBe(false);});
