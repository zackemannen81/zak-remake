import {validActorEnvironment,type ActorEnvironment} from '../render/actorEnvironment';
import {labRooms,labMasterUrls} from './roomCatalog';
export type Point = {x:number;y:number};
export type Quad = [Point,Point,Point,Point];
export type GeometrySettings = {depth:number;thickness:number;angle:number;color:string;reveal:string;side:string;back:string;item:boolean;revealKind:'dark'|'corridor'};
export const geometryDefaults:GeometrySettings={depth:100,thickness:6,angle:95,color:'#8e4b20',reveal:'',side:'',back:'',item:true,revealKind:'dark'};
export type Layer = {key:string;objectId:number;state:string;enabled:boolean;mode:'patch'|'hinged'|'sliding';quad:Quad;image:string;amount:number;dx:number;dy:number;pivot:'left'|'right';geometry?:GeometrySettings;binding?:'auto'|'set'|'clear'|'always'|'picked'|'present'};
export type Lighting = {enabled:boolean;color:string;intensity:number;ambient:number;x:number;y:number;z:number;ao:number;shadows:boolean;opacity:number;softness:number;margin:number;front:boolean;helpers:boolean};
export const lightingDefaults:Lighting={enabled:true,color:'#ffe4bb',intensity:1.1,ambient:1.3,x:-300,y:450,z:600,ao:0.25,shadows:true,opacity:0.3,softness:3,margin:70,front:false,helpers:false};
export type Project = {version:1;roomId:number;width:number;height:number;master:string;plate:string;layers:Layer[];lighting?:Lighting;actorEnvironment?:ActorEnvironment};
export function rectangle(x:number,y:number,w:number,h:number):Quad {return [{x,y},{x:x+w,y},{x:x+w,y:y+h},{x,y:y+h}];}
export function scaleRect(r:{x:number;y:number;width:number;height:number},sx:number,sy:number):Quad {return rectangle(r.x*sx,r.y*sy,r.width*sx,r.height*sy);}
export function bounds(q:Quad) {const x=Math.floor(Math.min(...q.map(p=>p.x))),y=Math.floor(Math.min(...q.map(p=>p.y)));return {x,y,width:Math.ceil(Math.max(...q.map(p=>p.x)))-x,height:Math.ceil(Math.max(...q.map(p=>p.y)))-y};}
export function overlaps(a:Quad,b:Quad) {const x=bounds(a),y=bounds(b);return x.x<y.x+y.width&&y.x<x.x+x.width&&x.y<y.y+y.height&&y.y<x.y+x.height;}
export function validQuad(q:Quad) {let sign=0;for(let i=0;i<4;i++){const a=q[i],b=q[(i+1)%4],c=q[(i+2)%4];const cross=(b.x-a.x)*(c.y-b.y)-(b.y-a.y)*(c.x-b.x);if(Math.abs(cross)<0.01)return false;if(sign&&Math.sign(cross)!==sign)return false;sign=Math.sign(cross);}return true;}
export function destination(l:Layer):Quad {
  if(l.mode==='sliding')return l.quad.map(p=>({x:p.x+l.dx*l.amount,y:p.y+l.dy*l.amount})) as Quad;
  if(l.mode!=='hinged')return l.quad;
  const q=structuredClone(l.quad), t=1-Math.cos(l.amount*Math.PI*0.48);
  const pairs=l.pivot==='left'?[[1,0],[2,3]]:[[0,1],[3,2]];
  for(const [moving,anchor] of pairs){q[moving].x+=(q[anchor].x-q[moving].x)*t;q[moving].y+=(q[anchor].y-q[moving].y)*t;}
  return q;
}
export function parseProject(raw:unknown):Project {
  const p=raw as Project;
  const image=(v:unknown)=>typeof v==='string'&&(v===''||labMasterUrls.has(v)||v.startsWith('data:image/png;base64,')||v.startsWith('data:image/jpeg;base64,')||v.startsWith('data:image/webp;base64,')||/^\.\/assets\/scene-lab\/[\w-]+\.png$/.test(v));
  if(!p||p.version!==1||!labRooms.some(r=>r.id===p.roomId)||!Number.isInteger(p.width)||!Number.isInteger(p.height)||p.width<1||p.height<1||p.width>8192||p.height>8192||!image(p.master)||!p.master||!image(p.plate)||!Array.isArray(p.layers)||p.layers.length>100)throw Error('Ogiltigt projektformat.');
  if(p.actorEnvironment&&!validActorEnvironment(p.actorEnvironment))throw Error('Ogiltig karaktärsbelysning.');
  const keys=new Set<string>();
  for(const l of p.layers){if(!l||typeof l.key!=='string'||keys.has(l.key)||!Number.isInteger(l.objectId)||typeof l.state!=='string'||typeof l.enabled!=='boolean'||!['patch','hinged','sliding'].includes(l.mode)||!['left','right'].includes(l.pivot)||![l.amount,l.dx,l.dy].every(Number.isFinite)||l.amount<0||l.amount>1||!image(l.image)||!Array.isArray(l.quad)||l.quad.length!==4||!l.quad.every(v=>v&&Number.isFinite(v.x)&&Number.isFinite(v.y)&&v.x>=0&&v.y>=0&&v.x<=p.width&&v.y<=p.height)||!validQuad(l.quad))throw Error('Ogiltigt objektlager.');keys.add(l.key);}
  for(const l of p.layers)if(l.geometry){const g=l.geometry;if(![g.depth,g.thickness,g.angle].every(Number.isFinite)||g.depth<1||g.depth>1000||g.thickness<1||g.thickness>100||Math.abs(g.angle)>160||!/^#[0-9a-f]{6}$/i.test(g.color)||![g.reveal,g.side,g.back].every(image)||typeof g.item!=='boolean'||!['dark','corridor'].includes(g.revealKind))throw Error('Ogiltiga 3D-inställningar.');}
  if(p.lighting){const t=p.lighting;if(!['enabled','shadows','front','helpers'].every(k=>typeof t[k as keyof Lighting]==='boolean')||!/^#[0-9a-f]{6}$/i.test(t.color)||!['intensity','ambient','x','y','z','ao','opacity','softness','margin'].every(k=>Number.isFinite(t[k as keyof Lighting]))||t.intensity<0||t.intensity>5||t.ambient<0||t.ambient>5||Math.abs(t.x)>2000||Math.abs(t.y)>2000||t.z<1||t.z>2000||t.ao<0||t.ao>1||t.opacity<0||t.opacity>1||t.softness<0||t.softness>10||t.margin<0||t.margin>500)throw Error('Ogiltig ljusprofil.');}
  for(const l of p.layers)if(l.binding!==undefined&&!['auto','set','clear','always','picked','present'].includes(l.binding))throw Error('Ogiltig spelkoppling.');
  return structuredClone(p);
}
