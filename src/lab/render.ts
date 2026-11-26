import { bounds, destination, type Layer, type Quad } from './model';
export function canvas(w:number,h:number){const c=document.createElement('canvas');c.width=w;c.height=h;return c;}
export function path(ctx:CanvasRenderingContext2D,q:Quad){ctx.beginPath();q.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();}
export function patch(image:CanvasImageSource,q:Quad){const b=bounds(q),c=canvas(b.width,b.height),ctx=c.getContext('2d')!;ctx.translate(-b.x,-b.y);path(ctx,q);ctx.clip();ctx.drawImage(image,0,0);return c;}
// Two affine triangles provide an intentionally approximate 2.5D deformation.
function triangle(ctx:CanvasRenderingContext2D,img:CanvasImageSource,s:Quad,d:Quad,ids:number[]){
 const [a,b,c]=ids.map(i=>s[i]),[u,v,w]=ids.map(i=>d[i]);const det=(b.x-a.x)*(c.y-a.y)-(c.x-a.x)*(b.y-a.y);if(Math.abs(det)<0.001)return;
 const A=((v.x-u.x)*(c.y-a.y)-(w.x-u.x)*(b.y-a.y))/det,B=((v.y-u.y)*(c.y-a.y)-(w.y-u.y)*(b.y-a.y))/det;
 const C=((w.x-u.x)*(b.x-a.x)-(v.x-u.x)*(c.x-a.x))/det,D=((w.y-u.y)*(b.x-a.x)-(v.y-u.y)*(c.x-a.x))/det;
 ctx.save();ctx.beginPath();ctx.moveTo(u.x,u.y);ctx.lineTo(v.x,v.y);ctx.lineTo(w.x,w.y);ctx.closePath();ctx.clip();ctx.transform(A,B,C,D,u.x-A*a.x-C*a.y,u.y-B*a.x-D*a.y);ctx.drawImage(img,0,0);ctx.restore();
}
export function drawLayer(ctx:CanvasRenderingContext2D,l:Layer,img:CanvasImageSource){if(l.mode==='patch'){ctx.save();path(ctx,l.quad);ctx.clip();ctx.drawImage(img,0,0);ctx.restore();}else{const d=destination(l);triangle(ctx,img,l.quad,d,[0,1,2]);triangle(ctx,img,l.quad,d,[0,2,3]);}}
