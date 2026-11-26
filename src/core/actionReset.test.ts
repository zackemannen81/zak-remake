import {it,expect} from 'vitest';
import {GameEngine} from './engine';
import {createInitialState} from './state';
import {getRoom} from '../content/rooms';

it('keeps the chosen verb during approach and returns to walk after executing',()=>{
 const e=new GameEngine(createInitialState(getRoom(1),{skipIntro:true})),door=e.room.objects.find(o=>o.object_id===84)!;
 e.setVerb('open');e.handleClick({x:door.x,y:door.y},door);expect(e.state.activeVerb).toBe('open');expect(e.state.pendingInteraction?.verb).toBe('open');e.advance(600);expect(e.state.objectStates['84']&8).toBe(8);expect(e.state.activeVerb).toBe('walk');expect(e.state.selectedItemId).toBeNull();
});
it('keeps first inventory selection for combinations and resets only after second item',()=>{
 const e=new GameEngine(createInitialState(getRoom(1),{skipIntro:true}));e.state.inventory=[17,25];e.state.objectOwners['17']=1;e.state.objectOwners['25']=1;e.selectInventoryItem(17);expect(e.state.activeVerb).toBe('use');expect(e.state.selectedItemId).toBe(17);e.selectInventoryItem(25);expect(e.state.activeVerb).toBe('walk');expect(e.state.selectedItemId).toBeNull();e.advance(2);expect(e.state.objectNames?.['17']).toBe('wallpaper map');
});
it('deselecting an inventory item cancels use and returns to walk',()=>{const e=new GameEngine(createInitialState(getRoom(1),{skipIntro:true}));e.state.inventory=[16];e.selectInventoryItem(16);e.selectInventoryItem(16);expect(e.state.activeVerb).toBe('walk');expect(e.state.selectedItemId).toBeNull();});
