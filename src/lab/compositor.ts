import {canvas,drawLayer,path} from './render';
import {bounds,geometryDefaults,lightingDefaults,type Project} from './model';
import {GeometryPreview} from './geometry';
export function composeProject(project:Project,images:Map<string,HTMLImageElement>,geometryPreview:GeometryPreview){
 geometryPreview.clearPicking();
 const c=canvas(project.width,project.height),cctx=c.getContext('2d')!;cctx.drawImage(images.get(project.plate||project.master)!,0,0);
 for(const l of project.layers){if(!l.enabled)continue;if(l.mode==='patch'){if(l.image&&images.has(l.image))drawLayer(cctx,l,images.get(l.image)!);continue;}
 const g=l.geometry??geometryDefaults,b=bounds(l.quad);cctx.save();path(cctx,l.quad);cctx.clip();
 if(g.reveal&&images.has(g.reveal))cctx.drawImage(images.get(g.reveal)!,0,0);else{const gradient=cctx.createLinearGradient(0,b.y,0,b.y+b.height);gradient.addColorStop(0,'#110d09');gradient.addColorStop(1,'#432713');cctx.fillStyle=gradient;cctx.fillRect(b.x,b.y,b.width,b.height);if(g.revealKind==='corridor'){cctx.fillStyle='#4d6558';cctx.fillRect(b.x+b.width*.22,b.y,b.width*.56,b.height*.73);cctx.fillStyle='#b4874d';cctx.beginPath();cctx.moveTo(b.x+b.width*.22,b.y+b.height*.73);cctx.lineTo(b.x+b.width*.78,b.y+b.height*.73);cctx.lineTo(b.x+b.width,b.y+b.height);cctx.lineTo(b.x,b.y+b.height);cctx.fill();}}
 cctx.restore();cctx.drawImage(geometryPreview.render(l,project.width,project.height,project.master,images,project.lighting??lightingDefaults),0,0);
 }return c;
}
