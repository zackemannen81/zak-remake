/** Source-backed gameplay adapters for scripts requiring UI, actors or timed tasks.
 * See docs/SCRIPT_PROGRESS.md for source contracts and presentation differences.
 */
import { getRoom, objectHasClass } from '../content/rooms';
import { resourceRoom } from '../core/roomIdentity';
import { scheduleAction } from '../core/scheduler';
import type { GameState, VerbId } from '../core/types';

const owns = (s: GameState, id: number) => s.inventory.includes(id) && s.objectOwners[id] === 1;
const bit = (s: GameState, id: number, mask = 8) => Boolean((s.objectStates[id] ?? 0) & mask);
function bits(s: GameState, id: number, mask: number, on: boolean) {
  s.objectStates[id] = on ? (s.objectStates[id] ?? 0) | mask : (s.objectStates[id] ?? 0) & ~mask;
}
function owner(s: GameState, id: number, value: number) {
  s.objectOwners[id] = value;
  s.inventory = s.inventory.filter(n => n !== id);
  if (value === 1) s.inventory.push(id);
}
function pickup(s: GameState, id: number) { owner(s,id,1); bits(s,id,10,true); }
function name(s: GameState, id: number, text: string) { (s.objectNames ??= {})[id]=text; }
function say(s: GameState, text: string, delay = 1) { scheduleAction(s,delay,{type:'say',text,durationTicks:150}); }
function random(s:GameState,max:number):number {
  s.randomSeed=(Math.imul(s.randomSeed ?? 0x5a414b,1664525)+1013904223)>>>0;
  return Math.floor(s.randomSeed/4294967296*(max+1));
}
function travel(s: GameState, logical: number, arrival: number) {
  const o=getRoom(resourceRoom(logical)).objects.find(o=>o.object_id===arrival);
  if (!o) throw Error(`Missing arrival ${logical}:${arrival}`);
  scheduleAction(s,1,{type:'travel',roomId:logical,x:o.walk_x,y:o.walk_y});
}

function finishFlight(s: GameState): string {
  if (!s.flight?.boarded) return 'There is no flight to continue.';
  // Do not carry delayed oven effects into a different room/flight.
  if (s.flags.eggCooking && !s.flags.stewardessAtOven) return 'The microwave is still running. Wait for it to finish.';
  travel(s,s.flight.destination,s.flight.destination<=145?190:217);
  delete s.flight;
  return 'The flight has arrived.';
}

// ENv2 airport fare tables and SCv2_0120 destination mapping.
export const airports: Record<number,{name:string; routes:Array<[number,number]>; outside?:[number,number]}> = {
  141:{name:'Miami',routes:[[146,795],[148,1589],[142,779],[143,511],[145,808]],outside:[133,639]},
  142:{name:'Mexico City',routes:[[149,691],[141,779],[143,271],[145,295]],outside:[168,572]},
  143:{name:'London',routes:[[146,1316],[141,511],[142,271],[145,305]]},
  144:{name:'Seattle',routes:[[143,407],[145,260]],outside:[12,266]},
  145:{name:'San Francisco',routes:[[149,937],[141,808],[142,295],[143,305],[144,260]],outside:[3,144]},
  146:{name:'Cairo',routes:[[148,1033],[147,644],[141,795],[143,1316]],outside:[20,390]},
  147:{name:'Kinshasa (Zaire)',routes:[[146,644],[148,1399]],outside:[170,572]},
  148:{name:'Kathmandu',routes:[[146,1033],[147,1399],[141,1589]],outside:[17,352]},
  149:{name:'Lima',routes:[[142,691],[145,937]],outside:[175,572]},
};
export function locationName(s: GameState): string | undefined {
  return [8,9].includes(s.roomId) ? `${airports[s.logicalRoomId ?? 145]?.name ?? 'Airport'} · airport` : undefined;
}

export interface SceneChoice { id:string; label:string }
export function sceneChoices(s: GameState): SceneChoice[] {
  if(s.flags.inspectMap)return [{id:'close-map',label:'Done'}];
  if (s.choiceMenu==='flights') {
    const current=s.logicalRoomId ?? 145;
    return [...(airports[current]?.routes ?? []).map(([id,fare])=>({id:`flight:${id}`,label:`${airports[id]!.name} · $${fare}`})),{id:'cancel',label:'Cancel'}];
  }
  const result: SceneChoice[]=[];
  // Actor interaction fallbacks until source NPCs have full rendering/hit testing.
  if (s.roomId===8 && (s.logicalRoomId===145 || s.logicalRoomId===undefined)) result.push({id:'devotee',label:'Devotee'});
  if (s.roomId===11) result.push({id:'land',label:'Continue flight (Return)'});
  if (s.roomId===17) result.push({id:'guard',label:'Guru’s guard'});
  if (s.roomId===19) result.push({id:'guru',label:'Guru'});
  if (s.roomId===38 && s.logicalRoomId===151) result.push({id:'shaman',label:'Shaman'});
  return result;
}

export function chooseSceneAction(s: GameState, id: string): void {
  if(id==='close-map'){s.flags.inspectMap=false;return;}
  if ((s.scriptLockedUntil ?? 0)>s.tick || s.pendingInteraction || s.actor.path.length || s.scriptSequence || s.intro) return;
  if (!sceneChoices(s).some(c=>c.id===id)) return;
  const item=s.selectedItemId, verb=s.activeVerb;
  if (id==='cancel') delete s.choiceMenu;
  else if (id.startsWith('flight:')) {
    const origin=s.logicalRoomId ?? 145, destination=Number(id.slice(7));
    const route=airports[origin]?.routes.find(([n])=>n===destination);
    if (!route || !owns(s,18)) { say(s,'I need my CashCard.'); return; }
    const refund=s.flight && !s.flight.boarded ? s.flight.fare : 0;
    if (s.variables[62]!+refund<route[1]) { say(s,'Not enough money on my CashCard.'); return; }
    s.variables[62]!+=refund-route[1];
    s.flight={origin,destination,fare:route[1],boarded:false};
    pickup(s,82); name(s,82,`ticket to ${airports[destination]!.name}`);
    delete s.choiceMenu; say(s,'Ticket issued. Walk to the gate to board.');
  } else if(id==='devotee') {
    if (owns(s,45)) say(s,'You already have the book.');
    else if (item===18 && ['use','give'].includes(verb) && owns(s,18)) {
      if(s.variables[62]!<42) say(s,'The book costs $42.');
      else {s.variables[62]!-=42;pickup(s,45);say(s,'Here is the Guru’s book.');}
    } else say(s,'A book of wisdom for $42. Use your CashCard if you want one.');
  } else if(id==='land') {
    if(!s.flight?.boarded) return;
    say(s,finishFlight(s));
  } else if(id==='guard') {
    if(item===45 && owns(s,45) && ['give','use'].includes(verb)) {
      s.flags.guruAdmitted=true;bits(s,351,8,true);bits(s,351,2,false);say(s,'You may enter.');
    } else say(s,'Only devotees of Guru may enter.');
  } else if(id==='guru') {
    if(!owns(s,55)) say(s,'Return when you have the Blue Crystal.');
    else {bits(s,55,4,true);s.flags.crystalTrained=true;s.scriptLockedUntil=s.tick+180;say(s,'I will teach you to use the Blue Crystal.');say(s,'Use it to enter rapport with an animal while in contact with the Earth.',180);}
  } else if(id==='shaman') {
    if(item!==44 || !owns(s,44) || !['use','give'].includes(verb)) say(s,'My collection is missing a golf club.');
    else {
      owner(s,44,0);s.flags.shamanDance=true;s.scriptLockedUntil=s.tick+840;
      // SCv2_0048 generates six buttons and retries until all three appear.
      if(s.variables.slice(131,137).some(n=>n<531||n>533)) {
        let code:number[];
        do {code=Array.from({length:6},()=>531+random(s,2));} while(new Set(code).size!==3);
        s.variables.splice(131,6,...code);
      }
      for(let i=0;i<6;i++) {
        say(s,`Dancer ${s.variables[131+i]!-530} bends their knees.`,120+i*120);
      }
      say(s,'Remember the six movements. They unlock the door to the head.',840);
    }
  }
  s.activeVerb='walk';s.selectedItemId=null;
}

export function progressionInventory(s: GameState,id:number,verb:VerbId): string|undefined {
  if(!owns(s,id)) return;
  if([17,15].includes(id)&&verb==='look') {
    if(!s.variables[id===17?193:194])return id===17?"There's nothing on it.":'$1138! I had better pay this soon!';
    s.flags.inspectMap=true;s.flags.inspectMapMars=s.variables[id===17?193:194]===2;
    s.flags.inspectMapBill=id===15;
    return 'The map from my dream.';
  }
  if(id===82&&verb==='look')return s.flight?`Ticket from ${airports[s.flight.origin]?.name} to ${airports[s.flight.destination]?.name}.`:'A used airline ticket.';
  if([39,40,43].includes(id) && ['putOn','takeOff'].includes(verb)) {
    bits(s,id,4,verb==='putOn');
    if(id===40)s.variables[164]=verb==='putOn'?40:44;
    if(id===43)s.variables[167]=verb==='putOn'?48:52;
    return verb==='putOn'?'Put it on.':'Took it off.';
  }
  if(id===49 && ['turnOn','turnOff'].includes(verb)) {
    bits(s,49,4,verb==='turnOn');name(s,49,verb==='turnOn'?'lit lighter':'lighter');return verb==='turnOn'?'Lit the lighter.':'Extinguished the lighter.';
  }
  if(id===21 && s.roomId===14 && ['use','turnOn','turnOff'].includes(verb)) {
    bits(s,298,8,true);bits(s,298,4,false);return 'The crystal is unlocked.';
  }
  if(id===30 && verb==='look')return s.variables[160]?'The fan club application is filled out.':'A fan club application. I should fill it out.';
  return undefined;
}

export function progressionCombination(s:GameState,a:number,b:number):string|undefined {
  if(!owns(s,a)||!owns(s,b))return;
  if([a,b].includes(25)&&[a,b].includes(30)) {s.variables[160]=1;name(s,30,'completed application');return 'Filled out the fan club application.';}
  return undefined;
}

export function progressionVerb(s:GameState,id:number,verb:VerbId,item:number|null):string|undefined {
  const r=s.roomId, use=['use','give'].includes(verb);
  if(use&&item!==null&&!owns(s,item))return 'I no longer have that item.';
  if([8,9].includes(r)) {
    s.logicalRoomId ??= r===8?145:148;
    if([194,220].includes(id)&&verb==='use') {if(!owns(s,18))return 'I need my CashCard.';s.choiceMenu='flights';return 'Choose a destination.';}
    if([190,217].includes(id)&&verb==='walk') {
      if(!s.flight || s.flight.boarded || s.flight.origin!==s.logicalRoomId)return 'I need a ticket from this airport first.';
      owner(s,82,14);s.flight.boarded=true;
      if(owns(s,49)&&owns(s,50)){travel(s,s.flight.destination,s.flight.destination<=145?190:217);delete s.flight;return 'An enjoyable flight later…';}
      s.flags.planeInitialized=false;
      travel(s,11,255);return 'Please take your seat. Press Return when you are ready to continue the flight.';
    }
    if([191,218].includes(id)&&['walk','open'].includes(verb)) {
      const out=airports[s.logicalRoomId]?.outside;
      if(!out)return 'There is no city exit here. Use the reservations terminal for a connecting flight.';
      if(verb==='open'){bits(s,id,8,true);return 'Opened the door.';}
      if(id===191&&!bit(s,id))return 'The door is closed.';
      if(out[0]===170){s.variables[217]=5;s.variables[220]=576;s.variables[223]=150;s.flags.zaireJungle=true;}
      travel(s,...out);return 'Leaving the airport.';
    }
  }
  if(r===1&&id===108&&verb==='use') {
    if(!bit(s,108)) {
      if(item===26){bits(s,26,4,true);name(s,26,'bent butter knife');return 'Oops! I bent it!';}
      if(item!==35&&item!==38)return 'I need a suitable tool to remove the boards.';
      bits(s,108,8,true);name(s,108,'hole');return 'Removed the loose boards.';
    }
    if(item===37){owner(s,37,14);bits(s,84,8,false);bits(s,111,8,false);bits(s,110,8,true);bits(s,110,2,false);return 'Secured the rope in the hole.';}
  }
  if(r===1&&[108,110].includes(id)&&['walk','use'].includes(verb)&&item===null) {
    if(!bit(s,108))return 'The boards cover the hole.';
    if(!bit(s,110))return 'I need a rope to climb down safely.';
    travel(s,16,334);return 'Down we go!';
  }
  if(r===2&&id===126&&verb==='use'&&item===35) {
    bits(s,126,8,!bit(s,126));
    if(bit(s,126)&&bit(s,23,4)){bits(s,23,8,true);bits(s,23,2,false);bits(s,23,4,false);}
    return bit(s,126)?'Removed the pipe.':'Replaced the pipe.';
  }
  if(r===2&&id===23&&verb==='pickup'){pickup(s,23);bits(s,23,8,false);bits(s,23,4,false);return 'Picked up the bread crumbs.';}
  if(r===4&&id===152&&verb==='use') {
    if(!owns(s,15))return bit(s,152,4)?'My bill is already paid.':'I need my phone bill to find my account.';
    owner(s,15,0);bits(s,152,4,true);bits(s,87,4,false);return 'My bill is now zero. I stamped it paid and left it here.';
  }
  if(r===4&&[156,157].includes(id)&&verb==='open') {
    if(!(bit(s,40,4)&&bit(s,43,4)))return 'You cannot come behind the counter!';
    bits(s,156,8,true);bits(s,157,8,true);return 'Hello. Come through.';
  }
  if(r===4&&id===30&&verb==='pickup') {if(!bit(s,156))return 'The counter door is closed.';pickup(s,30);return 'Picked up the application.';}
  if(r===3&&[28,138,139].includes(id)&&use&&item===30) {
    if(!s.variables[160])return 'The application is not filled out.';
    if(!s.flags.mailboxUnlocked&&!bit(s,138))return 'The mailbox is locked.';
    owner(s,30,0);s.variables[159]=11;s.flags.applicationMailed=true;
    bits(s,138,8,false);bits(s,138,2,true);bits(s,139,8,false);bits(s,139,2,true);bits(s,28,8,true);bits(s,28,2,false);
    scheduleAction(s,300,{type:'set-flag',name:'fanMailReady',value:true});
    scheduleAction(s,300,{type:'set-variable',index:159,value:1});return 'Mailed the application.';
  }
  if(r===3&&id===28&&use&&item===24&&s.variables[159]!>10)return 'I will leave it for the mailman.';
  if(r===3&&id===138&&use&&item===24){bits(s,138,8,true);s.flags.mailboxUnlocked=true;return 'Unlocked the mailbox.';}
  if(r===5&&id===169&&use&&item===55) {
    if(!bit(s,169))return 'The drop slot is closed.';
    owner(s,55,2);bits(s,169,4,true);bits(s,169,8,false);s.variables[199]=1;
    s.flags.annieMet=true;scheduleAction(s,180,{type:'set-owner',objectId:55,ownerId:1});
    scheduleAction(s,180,{type:'set-owner',objectId:33,ownerId:1});
    bits(s,172,8,true);bits(s,162,8,true);bits(s,178,8,true);
    scheduleAction(s,180,{type:'travel',roomId:6,x:184,y:104});
    s.scriptLockedUntil=s.tick+180;say(s,'Annie: Take the Blue Crystal to the Guru. I will help with the other artifacts.',180);
    return 'Annie recognizes the crystal from her dream.';
  }
  if(r===11) {
    if([246,247].includes(id)&&['open','close'].includes(verb)){bits(s,246,8,verb==='open');bits(s,247,8,verb==='open');return verb==='open'?'Opened the restroom door.':'Closed the restroom door.';}
    if(id===242&&use&&item===47){owner(s,47,0);bits(s,242,4,true);return 'The paper clogs the sink.';}
    if(id===242&&['turnOn','turnOff'].includes(verb)){bits(s,242,8,verb==='turnOn');return verb==='turnOn'?'Turned on the tap.':'Turned off the tap.';}
    if(id===245&&['push','use'].includes(verb)) {
      if(!bit(s,265))return bit(s,242,4)?'Turn on the tap and wait for the sink to overflow, then call her again.':'There is no mess for the stewardess to clean yet.';
      s.flags.stewardessCleaning=true;s.variables[248]=1;bits(s,242,8,false);say(s,'Stewardess: Oh no! What a mess!',60);return 'Called the stewardess.';
    }
    if(id===260) {
      if(!s.flags.stewardessCleaning)return 'The stewardess is watching. I need to flood the sink and push the call button first.';
      if(['open','close'].includes(verb)){bits(s,260,8,verb==='open');return verb==='open'?'Opened the microwave.':'Closed the microwave.';}
      if(use&&item===22){if(!bit(s,260))return 'The door is closed.';owner(s,22,14);bits(s,262,8,false);return 'Put the egg in the microwave.';}
      if(verb==='turnOn') {
        if(bit(s,241)){s.flags.stewardessAtOven=true;return 'Reheated the egg mess. The smell draws the stewardess back to the microwave.';}
        if(s.objectOwners[22]!==14)return 'I should not run an empty microwave.';
        if(s.flags.eggCooking)return 'It is already running.';
        bits(s,260,8,false);s.flags.eggCooking=true;
        scheduleAction(s,600,{type:'set-object-state',objectId:241,mask:8,value:true});
        scheduleAction(s,600,{type:'set-owner',objectId:22,ownerId:0});
        scheduleAction(s,600,{type:'set-flag',name:'stewardessAtOven',value:true});
        say(s,'Stewardess: What is that awful smell?!',600);return 'Turned on the microwave.';
      }
    }
    if(id>=249&&id<=254&&['open','close'].includes(verb)) {
      bits(s,id,8,verb==='open');if(verb==='open')s.flags.planeBinSearched=true;
      if(verb==='open'&&!owns(s,50)){bits(s,50,2,false);bits(s,50,8,true);}
      return verb==='open'?'Opened the overhead bin.':'Closed the overhead bin.';
    }
    if(id===50&&verb==='pickup') {
      if(!s.flags.stewardessAtOven)return 'She might catch me!';
      if(!s.flags.planeBinSearched)return 'I need to open the bin first.';
      pickup(s,50);return 'Picked up the oxygen tank.';
    }
    if(id===48&&['pickup','pull'].includes(verb)) {
      if(!s.flags.stewardessCleaning)return 'The stewardess is watching.';
      pickup(s,48);bits(s,49,10,false);return 'There is a lighter under the cushion.';
    }
    if(id===255&&['walk','use'].includes(verb))return 'Seated. Press Return to continue the flight.';
    if(id===256&&verb==='walk'&&s.flight?.boarded)return finishFlight(s);
  }
  if(r===12&&id===52&&verb==='pickup'){pickup(s,52);return 'Picked up the tree branch.';}
  if(r===12&&id===268&&use&&item===51){owner(s,51,0);s.variables[147]=1;bits(s,268,2,true);bits(s,268,8,false);return 'It took the peanuts and left!';}
  if(r===12&&id===267&&use) {
    if(item===null||!objectHasClass(item,2))return "I can't dig with that.";
    if(!s.variables[147])return 'Not with a vicious squirrel in my way.';
    if(bit(s,267))return 'The cave entrance is already clear.';
    if(item===26&&bit(s,26,4))return "It's too bent to dig with.";
    bits(s,267,8,true);name(s,267,'cave entrance');
    if(item===26){bits(s,26,4,true);name(s,26,'bent butter knife');}
    return 'After digging for a long time… the cave entrance is clear.';
  }
  if(r===12&&id===271&&verb==='pickup'){bits(s,271,4,true);return 'Come on… get real.';}
  if(r===13&&id===53&&use&&item===52){pickup(s,53);return 'Knocked down the abandoned bird nest.';}
  if(r===13&&id===273&&use) {
    if(item===52||item===53) {owner(s,item,0);s.flags[item===52?'fireWood':'fireNest']=true;s.variables[153]=s.flags.fireWood&&s.flags.fireNest?3:s.flags.fireWood?2:1;return 'Added kindling to the fire pit.';}
    if(item===49){if(!s.flags.fireWood||!s.flags.fireNest)return 'The fire needs both wood and a nest.';s.variables[153]=4;s.flags.caveLit=true;bits(s,276,8,true);return 'The fire lights the cave.';}
  }
  if(r===13&&id===282&&use&&item===25) {if(!s.flags.caveLit)return 'I need more light.';bits(s,282,8,false);bits(s,282,2,true);bits(s,281,8,true);return 'Connected the yellow dots. The ankh door opens.';}
  if(r===14&&id===55&&verb==='pickup') {if(!bit(s,298))return 'It is locked into the pedestal.';pickup(s,55);return 'Picked up the Blue Crystal.';}
  if(r===14&&id===297&&verb==='walk'){travel(s,13,281);return 'Back to the cave.';}
  if(r===17&&[349,351].includes(id)&&verb==='walk') {if(!s.flags.guruAdmitted)return 'Only devotees may enter.';travel(s,19,375);return 'Entered the Guru’s room.';}
  if(r===19&&id===375&&verb==='walk'){travel(s,17,351);return 'Left the Guru’s room.';}
  if(r===17&&id===359&&use&&item===49){bits(s,359,4,true);s.flags.guardDistracted=true;return 'The burning hay distracts the guard.';}
  if(r===17&&id===59&&verb==='pickup'){if(!s.flags.guardDistracted)return 'The guard is watching.';pickup(s,59);return 'Picked up the flagpole.';}
  if(r===17&&id===352&&use&&item===18){if(s.variables[62]!<100)return 'The ride costs $100.';s.variables[62]!-=100;travel(s,148,218);return 'A long dusty ride later…';}
  if(r===37&&s.flags.zaireJungle&&id>=572&&id<=575&&verb==='walk') {
    // OCv2_0571: path changes count down to the destination; visual maze variation simplified.
    s.variables[217]=Math.max(0,s.variables[217]!-1);
    if(!s.variables[217]){travel(s,s.variables[223]!,s.variables[220]!);return 'The jungle opens onto a clearing.';}
    travel(s,s.logicalRoomId===170?171:170,572);return 'Further into the jungle…';
  }
  if(r===38&&id===576&&verb==='walk'){s.flags.zaireJungle=true;s.variables[217]=5;s.variables[220]=218;s.variables[223]=147;travel(s,170,572);return 'Back into the jungle.';}
  return undefined;
}

/** Called each simulation tick; time-dependent puzzle state persists in saves. */
export function advanceProgression(s:GameState):void {
  if(s.roomId===8&&(!s.logicalRoomId||s.logicalRoomId===8))s.logicalRoomId=145;
  if(s.roomId===9&&(!s.logicalRoomId||s.logicalRoomId===9))s.logicalRoomId=148;
  if(s.roomId===11) {
    if(!s.flags.planeInitialized) {
      s.flags.planeInitialized=true;
      if(!owns(s,51))pickup(s,51); // cabin service supplies peanuts
      bits(s,48,2,owns(s,48));bits(s,49,2,!owns(s,48));bits(s,50,2,true);bits(s,263,8,true);
      bits(s,242,12,false);bits(s,265,8,false);bits(s,265,2,true);
      // SCv2_0120 restores consumed paper; retained inventory paper is not duplicated.
      if(s.objectOwners[47]===0){owner(s,47,15);bits(s,47,10,false);}
      bits(s,260,8,false);bits(s,262,8,true);s.variables[248]=0;
      // Return an unheated egg left behind, so an interrupted attempt is retryable.
      if(s.objectOwners[22]===14&&!bit(s,241))pickup(s,22);
      s.flags.stewardessCleaning=false;s.flags.stewardessAtOven=false;s.flags.eggCooking=false;s.flags.planeBinSearched=false;s.planeSinkTicks=0;
    }
    if(bit(s,242)&&bit(s,242,4)&&!bit(s,265)) {
      s.planeSinkTicks=(s.planeSinkTicks??0)+1;
      if(s.planeSinkTicks>=600){bits(s,265,8,true);bits(s,265,2,false);say(s,'The sink has overflowed!');}
    } else if(!bit(s,265)) s.planeSinkTicks=0;
  }
  if(s.roomId===2&&bit(s,122,4)&&bit(s,130)) {
    bits(s,130,8,false);bits(s,130,2,true);owner(s,29,0);
    if(bit(s,126)&&!bit(s,129)){bits(s,23,8,true);bits(s,23,2,false);}
    else if(!bit(s,129))bits(s,23,4,true);
    else say(s,'The crumbs washed away!');
  }
}
