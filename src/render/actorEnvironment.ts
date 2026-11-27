export interface ActorEnvironment {
  enabled:boolean;
  shadowOpacity:number;
  contactOpacity:number;
  reflectionOpacity:number;
  reflectionStretch:number;
  floorY:number;
  shadowLength:number;
}
/** Floor boundary is a fraction of source room height, independent of master resolution. */
export function actorEnvironmentDefaults(roomId:number):ActorEnvironment {
  return {enabled:true,shadowOpacity:0.24,contactOpacity:0.32,reflectionOpacity:roomId===2?0.12:0,
    reflectionStretch:0.45,floorY:0.66,shadowLength:0.55};
}
export function validActorEnvironment(p:ActorEnvironment):boolean {
  return !!p&&typeof p.enabled==='boolean'&&
    [p.shadowOpacity,p.contactOpacity,p.reflectionOpacity,p.floorY].every(n=>Number.isFinite(n)&&n>=0&&n<=1)&&
    Number.isFinite(p.reflectionStretch)&&p.reflectionStretch>=0.1&&p.reflectionStretch<=1&&
    Number.isFinite(p.shadowLength)&&p.shadowLength>=0.1&&p.shadowLength<=2;
}
