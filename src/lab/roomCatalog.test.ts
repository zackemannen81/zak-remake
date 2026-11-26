import {expect,it} from 'vitest';
import {labRooms} from './roomCatalog';
import {parseProject} from './model';
it('round-trips all 58 resource rooms with their shipped master and original fallback',()=>{
 expect(labRooms).toHaveLength(58);
 for(const room of labRooms)for(const master of [room.master,room.original])expect(parseProject({version:1,roomId:room.id,width:320,height:128,master,plate:'',layers:[]}).roomId).toBe(room.id);
 const project={version:1,roomId:3,width:320,height:128,master:labRooms[2].master,plate:'',layers:[]};
 expect(()=>parseProject({...project,roomId:999})).toThrow();
 expect(()=>parseProject({...project,master:'https://example.com/image.png'})).toThrow();
});
