import * as THREE from 'three';
import type {ActorEnvironment} from './actorEnvironment';

/** Projects the current animated GLB silhouette onto a configurable image-space floor.
 * No room geometry is inferred; reflection and projection-shadow are 2.5D approximations.
 */
export class ActorGroundEffects {
  readonly target=new THREE.WebGLRenderTarget(960,384,{depthBuffer:true});
  readonly mesh:THREE.Mesh<THREE.PlaneGeometry,THREE.ShaderMaterial>;
  constructor(){
    const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,
      uniforms:{actor:{value:this.target.texture},foot:{value:new THREE.Vector2()},floorY:{value:84},
        projection:{value:new THREE.Vector2(0.55,0.2)},shadow:{value:0.24},contact:{value:0.32},
        reflection:{value:0.12},stretch:{value:0.45},softness:{value:0.6}},
      vertexShader:'varying vec2 uvFloor; void main(){uvFloor=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader:`
        uniform sampler2D actor; uniform vec2 foot,projection;
        uniform float floorY,shadow,contact,reflection,stretch,softness;
        varying vec2 uvFloor;
        vec4 sampleActor(vec2 p){
          vec2 uv=vec2(p.x/320.,1.-p.y/128.);
          if(any(lessThan(uv,vec2(0.)))||any(greaterThan(uv,vec2(1.))))return vec4(0.);
          return texture2D(actor,uv);
        }
        void main(){
          vec2 p=uvFloor*vec2(320.,128.);
          if(p.y<floorY)discard;
          float dy=p.y-foot.y;
          vec4 reflected=sampleActor(vec2(p.x,foot.y-dy/stretch));
          float ra=reflection*reflected.a*max(0.,1.-dy/35.)*step(0.,dy);
          float h=dy/projection.y;
          vec2 sp=vec2(p.x-h*projection.x,foot.y-h);
          float blur=softness*(1.+max(h,0.)/30.);
          float sa=(sampleActor(sp).a*2.+sampleActor(sp+vec2(blur,0.)).a+sampleActor(sp-vec2(blur,0.)).a+
             sampleActor(sp+vec2(0.,blur)).a+sampleActor(sp-vec2(0.,blur)).a)/6.;
          sa*=shadow*step(0.,h)*max(0.,1.-h/115.);
          vec2 d=(p-foot)/vec2(9.,2.0);
          float ca=exp(-dot(d,d)*1.7)*contact;
          float dark=1.-(1.-sa)*(1.-ca);
          float alpha=dark+ra*(1.-dark);
          gl_FragColor=vec4(reflected.rgb*ra*(1.-dark)/max(alpha,0.00001),alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});
    this.mesh=new THREE.Mesh(new THREE.PlaneGeometry(320,128),material);
    this.mesh.position.set(160,64,1);this.mesh.renderOrder=1;
  }
  update(x:number,y:number,scrollX:number,p:ActorEnvironment,lightX:number,lightY:number,softness:number):void{
    this.mesh.visible=p.enabled;
    this.mesh.position.x=scrollX+160;
    const u=this.mesh.material.uniforms;
    u.foot.value.set(x-scrollX,y);u.floorY.value=p.floorY*128;
    u.shadow.value=p.shadowOpacity;u.contact.value=p.contactOpacity;
    u.reflection.value=p.reflectionOpacity;u.stretch.value=p.reflectionStretch;
    u.projection.value.set(-lightX/Math.max(100,Math.abs(lightY))*p.shadowLength,0.24*p.shadowLength);
    u.softness.value=Math.max(0.15,softness/5);
  }
  dispose():void{this.target.dispose();this.mesh.geometry.dispose();this.mesh.material.dispose();}
}
