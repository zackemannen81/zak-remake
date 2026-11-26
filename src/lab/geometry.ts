import * as THREE from 'three';
import {bounds,geometryDefaults,lightingDefaults,type Lighting,type Layer} from './model';

// Screen-aligned source front, true depth and hinge rotation; an oblique projection
// keeps the authored closed face registered with the background pixels.
export function surfacePoints(l:Layer,z:number):THREE.Vector3[]{return l.quad.map(p=>new THREE.Vector3(p.x,-p.y,z));}
export function hingePoints(l:Layer,z:number):THREE.Vector3[]{
 const points=surfacePoints(l,z),g=l.geometry??geometryDefaults;
 const a=points[l.pivot==='left'?0:1].clone().setZ(0),b=points[l.pivot==='left'?3:2].clone().setZ(0);
 const axis=b.sub(a).normalize(),angle=l.amount*g.angle*Math.PI/180*(l.pivot==='left'?1:-1);
 return points.map(p=>p.sub(a).applyAxisAngle(axis,angle).add(a));
}
export class GeometryPreview {
 private picks=new Map<string,{camera:THREE.Camera;meshes:THREE.Mesh[];w:number;h:number}>();
 clearPicking(){this.picks.clear();}
 pick(key:string,x:number,y:number){const p=this.picks.get(key);if(!p)return false;const ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2(x/p.w*2-1,1-y/p.h*2),p.camera);const hits=ray.intersectObjects(p.meshes).filter(hit=>hit.point.z>=0);return hits[0]?.object.userData.item===true;}
 private renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true});
 private textures=new Map<string,THREE.Texture>();
 private texture(src:string,images:Map<string,HTMLImageElement>){if(!this.textures.has(src)){const image=images.get(src);if(!image)throw Error('3D-textur saknas');const texture=new THREE.Texture(image);texture.colorSpace=THREE.SRGBColorSpace;texture.needsUpdate=true;this.textures.set(src,texture);}return this.textures.get(src)!;}
 render(l:Layer,w:number,h:number,master:string,images:Map<string,HTMLImageElement>,light:Lighting=lightingDefaults){
 const r=this.renderer,g=l.geometry??geometryDefaults;r.setSize(w,h,false);r.setClearColor(0,0);r.localClippingEnabled=true;r.outputColorSpace=THREE.SRGBColorSpace;
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(0,w,0,-h,0.1,10000);camera.position.z=4000;camera.updateMatrixWorld();
 const area=bounds(l.quad),cx=area.x+area.width/2,cy=-area.y-area.height/2;
 r.shadowMap.enabled=light.enabled&&light.shadows;r.shadowMap.type=THREE.PCFShadowMap;
 const sun=new THREE.DirectionalLight(light.color,light.intensity);sun.position.set(cx+light.x,cy+light.y,light.z);sun.target.position.set(cx,cy,0);sun.castShadow=r.shadowMap.enabled;
 const extent=Math.max(area.width,area.height)+g.depth*2+light.margin*2;Object.assign(sun.shadow.camera,{left:-extent,right:extent,top:extent,bottom:-extent,near:1,far:6000});sun.shadow.camera.updateProjectionMatrix();sun.shadow.mapSize.set(1024,1024);sun.shadow.radius=light.softness;sun.shadow.bias=-0.0002;sun.shadow.normalBias=0.3;scene.add(sun,sun.target,new THREE.AmbientLight('#ffffff',light.ambient));
 const receiverGeo=new THREE.PlaneGeometry(area.width+light.margin*2,area.height+light.margin*2),receiverMat=new THREE.ShadowMaterial({opacity:light.opacity,depthWrite:false});const receiver=new THREE.Mesh(receiverGeo,receiverMat);receiver.position.set(cx,cy,-0.5);receiver.receiveShadow=true;receiver.visible=light.enabled&&light.shadows;scene.add(receiver);
 let helper:THREE.LineSegments|undefined;if(light.helpers){helper=new THREE.LineSegments(new THREE.EdgesGeometry(receiverGeo),new THREE.LineBasicMaterial({color:'#65d9d0'}));helper.position.copy(receiver.position);scene.add(helper);}
 const group=new THREE.Group();group.matrixAutoUpdate=false;
 // z depth moves right/down on screen; the slider controls its full-depth projection.
 group.matrix.set(1,0,l.dx/g.depth,0, 0,1,-l.dy/g.depth,0, 0,0,1,0, 0,0,0,1);scene.add(group);
 const clipping=l.mode==='sliding'?[new THREE.Plane(new THREE.Vector3(0,0,1),0)]:[];
 const material=(color:string,map?:THREE.Texture,baked=false)=>{
 const options={color,map,side:THREE.DoubleSide,clippingPlanes:clipping,clipShadows:true};
 const mat=light.enabled&&(!baked||light.front)?new THREE.MeshLambertMaterial(options):new THREE.MeshBasicMaterial(options);
 if(light.enabled&&!baked&&light.ao>0){mat.onBeforeCompile=shader=>{shader.uniforms.cavity={value:light.ao};shader.vertexShader='varying vec2 cavityUv;\n'+shader.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\ncavityUv = uv;');shader.fragmentShader='varying vec2 cavityUv;\nuniform float cavity;\n'+shader.fragmentShader.replace('#include <opaque_fragment>','float edgeDistance = min(min(cavityUv.x, 1.0-cavityUv.x), min(cavityUv.y, 1.0-cavityUv.y));\noutgoingLight *= 1.0 - cavity * (1.0 - smoothstep(0.0, 0.22, edgeDistance));\n#include <opaque_fragment>');};}return mat;
 };
 const front=material('#ffffff',this.texture(master,images),true);
 const wood=material(g.color,g.side?this.texture(g.side,images):undefined);
 const dark=material('#6a361b',g.back?this.texture(g.back,images):undefined);
 const meshes:THREE.Mesh[]=[];
 const face=(v:THREE.Vector3[],mat:THREE.Material,source=false)=>{const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(v.flatMap(p=>[p.x,p.y,p.z]),3));geo.setIndex([0,1,2,0,2,3]);geo.setAttribute('uv',new THREE.Float32BufferAttribute(source?l.quad.flatMap(p=>[p.x/w,1-p.y/h]):[0,1,1,1,1,0,0,0],2));geo.computeVertexNormals();const mesh=new THREE.Mesh(geo,mat);mesh.castShadow=true;mesh.receiveShadow=!source||light.front;group.add(mesh);meshes.push(mesh);};
 if(l.mode==='hinged'){
  const f=hingePoints(l,0),b=hingePoints(l,-g.thickness);face(f,front,true);face(b,dark);for(let i=0;i<4;i++){const j=(i+1)%4;face([f[i],f[j],b[j],b[i]],wood);}
 }else{
  const z=l.amount*g.depth,f=surfacePoints(l,z),inner=surfacePoints(l,z-g.thickness),back=surfacePoints(l,z-g.depth);
  face(f,front,true);face(inner,dark);face(back,dark);
  // Open top: left wall, right wall and floor, all clipped at the cabinet aperture.
  for(const [a,b] of [[0,3],[1,2],[3,2]])face([inner[a],inner[b],back[b],back[a]],wood);
  face([f[0],f[1],inner[1],inner[0]],wood);
  if(g.item){const left=l.quad[3],right=l.quad[2],width=right.x-left.x,cx=(left.x+right.x)/2,y=-(left.y+right.y)/2+3,iz=z-g.depth*0.8;
   const card=material('#eacb67');face([new THREE.Vector3(cx-width*.22,y,iz-12),new THREE.Vector3(cx+width*.22,y,iz-12),new THREE.Vector3(cx+width*.22,y,iz+12),new THREE.Vector3(cx-width*.22,y,iz+12)],card);
   meshes.at(-1)!.userData.item=true;
  }
 }
 r.render(scene,camera);this.picks.set(l.key,{camera,meshes,w,h});for(const mesh of meshes){mesh.geometry.dispose();}const mats=new Set(meshes.map(m=>m.material));mats.forEach(m=>(m as THREE.Material).dispose());front.dispose();wood.dispose();dark.dispose();receiverGeo.dispose();receiverMat.dispose();sun.shadow.map?.dispose();if(helper){helper.geometry.dispose();(helper.material as THREE.Material).dispose();}return r.domElement;
 }
}
