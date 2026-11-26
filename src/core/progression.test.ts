import { describe, expect, it } from 'vitest';
import { GameEngine } from './engine';
import { createInitialState, stateHash } from './state';
import { getRoom } from '../content/rooms';
import { deserializeSave, serializeSave } from '../save/persistence';
import { scheduleAction } from './scheduler';
import type { VerbId } from './types';
import { runObjectProgram } from './objectInterpreter';

function fixture(room:number,items:number[]=[]) {
  const engine=new GameEngine(createInitialState(getRoom(room),{skipIntro:true}));
  for(const id of items){engine.state.inventory.push(id);engine.state.objectOwners[id]=1;}
  engine.advance(1);return engine;
}
// Uses real input, eligibility, walk planner, pending action and scheduler, never bypasses targeting.
function act(e:GameEngine,id:number,verb:VerbId,item?:number,ticks=350) {
  const o=e.targetableObjects().find(o=>o.object_id===id);
  expect(o,`target ${e.state.roomId}:${id} ${verb}`).toBeDefined();
  e.setVerb(verb);if(item!==undefined)e.selectInventoryItem(item);
  e.handleClick({x:o!.walk_x,y:o!.walk_y},o);
  for(let n=0;e.state.pendingInteraction&&n<5000;n++)e.advance(1);
  expect(e.state.pendingInteraction).toBeNull();e.advance(ticks);
  expect(e.state.scriptDiagnostic,JSON.stringify(e.state.scriptDiagnostic)).toBeUndefined();
}
function go(e:GameEngine,logical:number,room:number) {scheduleAction(e.state,1,{type:'travel',roomId:logical,x:80,y:110});e.advance(1);expect(e.state.roomId).toBe(room);}
function buy(e:GameEngine,destination:number) {act(e,e.state.roomId===8?194:220,'use');e.chooseSceneAction(`flight:${destination}`);e.advance(1);}
function fly(e:GameEngine,destination:number) {buy(e,destination);act(e,e.state.roomId===8?190:217,'walk');}

describe('walkthrough progression through actual engine actions',()=>{
  it('issues/replaces tickets without double charging, requires cash and retains logical airport on save',()=>{
    const e=fixture(8,[18]);const balance=e.state.variables[62]!;
    act(e,190,'walk');expect(e.state.roomId).toBe(8);
    buy(e,144);expect(e.state.variables[62]).toBe(balance-260);
    buy(e,143);expect(e.state.variables[62]).toBe(balance-305);
    expect(e.state.inventory.filter(n=>n===82)).toHaveLength(1);
    const saved=deserializeSave(serializeSave(e.state));expect(saved.flight?.destination).toBe(143);expect(saved.logicalRoomId).toBe(145);
    e.state.variables[62]=0;buy(e,149);expect(e.state.flight?.destination).toBe(143);
  });
  it('clogs/floods sink, distracts stewardess, cooks egg, exposes lighter and retrieves oxygen; timer resumes identically',()=>{
    const e=fixture(8,[18,22]);fly(e,144);expect(e.state.roomId).toBe(11);
    act(e,260,'open');expect(e.state.objectStates[260]!&8).toBe(0);
    act(e,246,'open');act(e,47,'pickup');act(e,242,'use',47);act(e,242,'turnOn',undefined,100);
    expect(e.state.objectStates[265]!&8).toBe(0);
    const resumed=new GameEngine(deserializeSave(serializeSave(e.state)));
    e.advance(650);resumed.advance(650);expect(stateHash(e.state)).toBe(stateHash(resumed.state));
    expect(e.state.objectStates[265]!&8).toBe(8);
    act(e,245,'push');act(e,260,'open');act(e,260,'use',22);act(e,260,'turnOn');e.advance(650);
    act(e,249,'open');act(e,50,'pickup');act(e,48,'pickup');act(e,49,'pickup');
    expect(e.state.inventory).toEqual(expect.arrayContaining([49,50,51]));expect(e.state.inventory).not.toContain(22);
    e.chooseSceneAction('land');e.advance(2);expect(e.state.logicalRoomId).toBe(144);expect(e.state.roomId).toBe(8);
    act(e,191,'open');act(e,191,'walk');expect(e.state.roomId).toBe(12);
  });
  it('requires squirrel distraction and a complete fire before opening the ankh and unlocking the crystal',()=>{
    const e=fixture(12,[51,49,25,21]);act(e,52,'pickup');act(e,267,'use',52);expect(e.state.objectStates[267]!&8).toBe(0);
    act(e,268,'use',51);act(e,267,'use',52);act(e,267,'walk');expect(e.state.roomId).toBe(13);
    act(e,282,'use',25);expect(e.state.objectStates[281]!&8).toBe(0);
    act(e,53,'use',52);act(e,273,'use',52);act(e,273,'use',53);act(e,273,'use',49);act(e,282,'use',25);act(e,281,'walk');
    expect(e.state.logicalRoomId).toBe(129);expect(e.state.roomId).toBe(14);
    act(e,55,'pickup');expect(e.state.inventory).not.toContain(55);
    e.setVerb('use');e.selectInventoryItem(21);e.advance(2);act(e,55,'pickup');expect(e.state.inventory).toContain(55);
    act(e,297,'walk');act(e,272,'walk');act(e,266,'walk');expect(e.state.logicalRoomId).toBe(144);
  });
  it('supports pipe/crumbs and application combination without consuming wrong items',()=>{
    const e=fixture(2,[35,29,30]);act(e,121,'open');act(e,25,'pickup');
    act(e,126,'use',35);act(e,129,'use',29);act(e,122,'turnOn');act(e,23,'pickup');expect(e.state.inventory).toContain(23);
    e.setVerb('use');e.selectInventoryItem(25);e.selectInventoryItem(30);e.advance(1);expect(e.state.variables[160]).toBe(1);
    expect(e.state.inventory).toContain(25);expect(e.state.activeVerb).toBe('walk');
  });
  it('routes via Cairo to Nepal, admits devotees, trains crystal, requires hay distraction and charges yak fare',()=>{
    const e=fixture(8,[18,45,49,50,55]);go(e,143,8);fly(e,146);expect(e.state.logicalRoomId).toBe(146);
    fly(e,148);expect(e.state.logicalRoomId).toBe(148);act(e,218,'walk');expect(e.state.roomId).toBe(17);
    act(e,59,'pickup');expect(e.state.inventory).not.toContain(59);
    e.setVerb('give');e.selectInventoryItem(45);e.chooseSceneAction('guard');e.advance(1);
    act(e,351,'walk');e.chooseSceneAction('guru');e.advance(181);expect(e.state.objectStates[55]!&4).toBe(4);
    act(e,375,'walk');act(e,359,'use',49);act(e,59,'pickup');expect(e.state.inventory).toContain(59);
    const cash=e.state.variables[62]!;act(e,352,'use',18);expect(e.state.variables[62]).toBe(cash-100);expect(e.state.logicalRoomId).toBe(148);
    fly(e,147);act(e,218,'walk');expect(e.state.roomId).toBe(37);
    for(let i=0;i<5;i++)act(e,572,'walk');expect(e.state.logicalRoomId).toBe(150);
    act(e,578,'walk');expect(e.state.logicalRoomId).toBe(151);
  });
  it('reports the exact unsupported instruction and leaves transactional VM effects uncommitted',()=>{
    const e=fixture(8);const before=JSON.stringify([e.state.objectStates,e.state.scheduled]);
    expect(runObjectProgram(e.state,194,'use',null)).toBe('unsupported');
    expect(e.state.scriptDiagnostic?.instruction).toContain('isSoundRunning');
    expect(JSON.stringify([e.state.objectStates,e.state.scheduled])).toBe(before);
  });
  it('takes the disguised sewer route to pay the bill and collect the application',()=>{
    const e=fixture(1,[15,35,37,39,40,43]);
    for(const id of [39,40,43]){e.setVerb('putOn');e.selectInventoryItem(id);e.advance(2);}
    act(e,107,'pull');act(e,108,'use',35);act(e,108,'use',37);act(e,110,'walk');expect(e.state.roomId).toBe(16);
    act(e,329,'open');act(e,329,'walk');expect(e.state.roomId).toBe(4);
    act(e,152,'use');expect(e.state.inventory).not.toContain(15);expect(e.state.objectStates[152]!&4).toBe(4);
    act(e,156,'open');act(e,30,'pickup');expect(e.state.inventory).toContain(30);
    act(e,151,'open');act(e,151,'walk');expect(e.state.roomId).toBe(3);
  });
  it('delivers Annie’s artifacts and persists the six-part shaman clue',()=>{
    const e=fixture(5,[55,44]);act(e,169,'open');act(e,169,'use',55);e.advance(181);
    expect(e.state.inventory).toEqual(expect.arrayContaining([33,55]));expect(e.state.flags.annieMet).toBe(true);
    expect(e.state.roomId).toBe(6);act(e,172,'walk');expect(e.state.roomId).toBe(5);
    go(e,151,38);e.setVerb('give');e.selectInventoryItem(44);e.chooseSceneAction('shaman');e.advance(121);
    const saved=new GameEngine(deserializeSave(serializeSave(e.state)));e.advance(720);saved.advance(720);
    expect(stateHash(e.state)).toBe(stateHash(saved.state));expect(e.state.inventory).not.toContain(44);
    expect(e.state.messages.filter(m=>m.text.startsWith('Dancer '))).toHaveLength(6);
    expect(e.state.variables.slice(131,137).every(n=>n>=531&&n<=533)).toBe(true);
  });
  it('rejects saves mixing logical airports with unrelated room artwork',()=>{
    const e=fixture(1);e.state.logicalRoomId=144;
    expect(()=>deserializeSave(serializeSave(e.state))).toThrow('logical room');
  });
  it('mails a completed application and unlocks the delivered fan-club card',()=>{
    const e=fixture(3,[24,25,30]);
    e.setVerb('use');e.selectInventoryItem(25);e.selectInventoryItem(30);e.advance(2);
    act(e,138,'use',24);act(e,138,'use',30,0);
    expect(e.state.inventory).not.toContain(30);expect(e.state.variables[159]).toBe(11);
    e.advance(301);act(e,28,'use',24);act(e,139,'pickup');expect(e.state.inventory).toContain(27);
  });
});
