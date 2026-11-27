import {expect,it} from 'vitest';
import {actorEnvironmentDefaults,validActorEnvironment} from './actorEnvironment';
import {parseProject} from '../lab/model';
it('defaults to subtle apartment reflections but keeps other floors matte',()=>{
 expect(actorEnvironmentDefaults(2).reflectionOpacity).toBeGreaterThan(0);
 expect(actorEnvironmentDefaults(1).reflectionOpacity).toBe(0);
});
it('round-trips environment profiles and preserves older projects',()=>{
 const p={version:1,roomId:2,width:320,height:128,master:'./assets/scene-lab/room2-master.png',plate:'',layers:[]};
 expect(parseProject(p).actorEnvironment).toBeUndefined();
 const env=actorEnvironmentDefaults(2);
 expect(parseProject({...p,actorEnvironment:env}).actorEnvironment).toEqual(env);
 expect(validActorEnvironment({...env,floorY:NaN})).toBe(false);
 expect(()=>parseProject({...p,actorEnvironment:{...env,reflectionOpacity:2}})).toThrow();
});
