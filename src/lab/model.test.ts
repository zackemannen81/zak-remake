import {describe,it,expect} from 'vitest';
import {bounds,destination,overlaps,parseProject,rectangle,scaleRect,validQuad,type Layer,type Project} from './model';
const layer:Layer={key:'one',objectId:84,state:'open',enabled:true,mode:'patch',quad:rectangle(10,20,30,40),image:'',amount:1,dx:25,dy:-10,pivot:'left'};
const project:Project={version:1,roomId:1,width:1640,height:656,master:'./assets/scene-lab/room1-master.png',plate:'',layers:[layer]};
describe('scene lab pixel-space contract',()=>{
 it('scales original areas independently in x and y',()=>{expect(bounds(scaleRect({x:10,y:20,width:30,height:40},4,3))).toEqual({x:40,y:60,width:120,height:120});});
 it('exports an enclosing integer crop without losing fractional edge pixels',()=>{expect(bounds(rectangle(1.2,2.8,10.5,9.5))).toEqual({x:1,y:2,width:11,height:11});});
 it('identifies overlapping state regions but allows adjoining edges',()=>{expect(overlaps(rectangle(0,0,10,10),rectangle(9,0,10,10))).toBe(true);expect(overlaps(rectangle(0,0,10,10),rectangle(10,0,10,10))).toBe(false);});
 it('rejects crossed quads and preserves convex perspective quads',()=>{expect(validQuad([{x:0,y:0},{x:10,y:10},{x:10,y:0},{x:0,y:10}])).toBe(false);expect(validQuad([{x:0,y:0},{x:10,y:2},{x:8,y:10},{x:1,y:9}])).toBe(true);});
 it('preserves hinge anchors and translates sliding corners together',()=>{const hinged=destination({...layer,mode:'hinged'});expect(hinged[0]).toEqual(layer.quad[0]);expect(hinged[3]).toEqual(layer.quad[3]);expect(destination({...layer,mode:'sliding'})[0]).toEqual({x:35,y:10});});
 it('round-trips independent combinations without sharing mutable state',()=>{const p=parseProject(JSON.parse(JSON.stringify({...project,layers:[layer,{...layer,key:'two',objectId:92,enabled:false}]})));expect(p.layers.map(l=>l.enabled)).toEqual([true,false]);p.layers[0].quad[0].x=20;expect(layer.quad[0].x).toBe(10);});
 it('rejects malformed project dimensions, duplicate keys and outside corners',()=>{expect(()=>parseProject({...project,width:0})).toThrow();expect(()=>parseProject({...project,layers:[layer,layer]})).toThrow();expect(()=>parseProject({...project,layers:[{...layer,quad:rectangle(-1,0,10,10)}]})).toThrow();expect(()=>parseProject({...project,master:'https://remote.example/image.png'})).toThrow();});
});
