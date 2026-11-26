import './style.css';
import { IntroMusic } from './audio/music';
import { assetManifest } from './content/assetManifest';
import { getRoom, playableRoomIds, displayObjectName } from './content/rooms';
import { GameEngine } from './core/engine';
import { FIXED_STEP_MS } from './core/types';
import { createInitialState } from './core/state';
import { GameRenderer } from './render/GameRenderer';
import { VisualRegistry } from './render/visualRegistry';
import { deserializeSave, SAVE_STORAGE_KEY, serializeSave } from './save/persistence';
import { GameUI } from './ui/gameShell';
import { shouldStartIntro } from './scenes/introPolicy';
import { IntroSequence } from './scenes/intro';

const app = document.querySelector<HTMLElement>('#app');
if (!app) throw new Error('Missing #app root element.');

const ui = new GameUI(app);
const searchParams = new URLSearchParams(window.location.search);
const isLabPlay=searchParams.get('labPlay')==='1'&&window.parent!==window;
const storageKey=isLabPlay?SAVE_STORAGE_KEY+':scene-lab':SAVE_STORAGE_KEY;
let missingSignature='';
const missingItemsPanel=document.createElement('div');missingItemsPanel.style.cssText='padding:8px;color:#e6c78b;font:13px system-ui';if(isLabPlay)ui.viewport.after(missingItemsPanel);
let labRuntime:import('./lab/playRuntime').LabPlayRuntime|undefined;
const requestedRoom = Number(searchParams.get('room'));
const initialRoom = playableRoomIds.includes(requestedRoom) ? requestedRoom : 1;
const engine = new GameEngine(createInitialState(getRoom(initialRoom), { skipIntro: searchParams.get('skipIntro') === '1' }));
let renderer: GameRenderer | undefined;
const visualRegistry = new VisualRegistry();

function startRenderer(): void {
  try {
    const surface = document.createElement('div');
    surface.className = 'game-render-surface';
    ui.viewport.prepend(surface);
    renderer = new GameRenderer(surface, visualRegistry);
    if(labRuntime)labRuntime.attach(renderer);
    renderer.onPointer = (point, target) => { if (!introSequence) engine.handleClick(point, target); };
    renderer.onCharacterStatus = (message) => ui.setNotice(message);
  } catch (error) {
    ui.viewport.innerHTML = '<div class="renderer-error">WebGL could not start in this browser. The game logic is still available for testing.</div>';
    ui.setNotice(error instanceof Error ? error.message : 'WebGL initialization failed.');
  }
}

if (searchParams.get('originalAssets') !== '1') {
  void import('./content/pocAssets')
    .then(({ registerPocPreviewAssets }) => {
      const report = registerPocPreviewAssets(visualRegistry);
      ui.setNotice(report.missing.length
        ? `Cropped backgrounds: ${report.registered} room backgrounds loaded; ${report.missing.length} background images missing (see console).`
        : `Cropped backgrounds: ${report.registered} room backgrounds loaded.`);
      if (report.missing.length) console.warn('Missing POC candidate images:', report.missing);
      startRenderer();
    })
    .catch((error: unknown) => {
      console.error('Could not load the POC asset preview; using original artwork.', error);
      ui.setNotice('POC asset preview could not be loaded; original artwork is being used.');
      startRenderer();
    });
} else {
  startRenderer();
}

const music = new IntroMusic(assetManifest.introMusic.url, (message) => ui.setMusicStatus(message));
let introSequence: IntroSequence | undefined;
function playIntro(newGame = false): void {
  introSequence?.dispose();
  music.stop();
  introSequence = new IntroSequence(ui.viewport, {
    onDreamMusicCue: () => void music.play(),
    onFinish: (skipped) => {
      introSequence = undefined;
      music.stop();
      if (newGame) engine.replaceState(createInitialState(getRoom(1), { skipIntro: skipped }));
      if (!newGame) { ui.setNotice('Intro replay finished. Your game is unchanged.'); return; }
      ui.setNotice(skipped
        ? 'Intro skipped. Zak starts at the original SCv2_0108 skip position.'
        : 'Intro complete. The original SCv2_0108 wake-up sequence is starting.');
    },
  });
  introSequence.start();
}
ui.bind({
  onSceneAction: (id) => { if (!introSequence) engine.chooseSceneAction(id); },
  onVerb: (verb) => { if (!introSequence) engine.setVerb(verb); },
  onInventoryItem: (objectId) => { if (!introSequence) engine.selectInventoryItem(objectId); },
  onSave: () => {
    if (introSequence) return;
    try {
      localStorage.setItem(storageKey, serializeSave(engine.state));
      ui.setNotice('Saved locally in this browser.');
    } catch (error) {
      ui.setNotice(`Save failed: ${error instanceof Error ? error.message : 'browser storage is unavailable'}`);
    }
  },
  onLoad: () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) {
        ui.setNotice('No local save found yet.');
        return;
      }
      introSequence?.dispose(); introSequence = undefined; music.stop();
      engine.replaceState(deserializeSave(saved));
      ui.setNotice('Save loaded.');
    } catch (error) {
      ui.setNotice(`Load failed: ${error instanceof Error ? error.message : 'invalid save'}`);
    }
  },
  onPlayIntro: () => playIntro(false),
  onStopMusic: () => music.stop(),
});

window.addEventListener('keydown', event => {
  if(event.key==='Enter' && !event.repeat && !introSequence && engine.state.roomId===11 &&
    !(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLTextAreaElement) &&
    !(event.target instanceof HTMLButtonElement)) { event.preventDefault();engine.chooseSceneAction('land'); }
});

if (shouldStartIntro(searchParams, isLabPlay)) playIntro(true);

let previousTime = performance.now();
let accumulator = 0;
function frame(now: number): void {
  accumulator += Math.min(250, now - previousTime);
  previousTime = now;
  let steps = 0;
  while (accumulator >= FIXED_STEP_MS && steps < 8) {
    if (!introSequence&&(!isLabPlay||labRuntime)) engine.advanceOneTick();
    accumulator -= FIXED_STEP_MS;
    steps += 1;
  }
  if (steps === 8 && accumulator >= FIXED_STEP_MS) accumulator %= FIXED_STEP_MS;
  const room = engine.room;
  if(renderer&&labRuntime)labRuntime.update(room,engine.state,renderer);
  if(labRuntime){const items=labRuntime.missingItems(room,engine.state);const signature=JSON.stringify([room.id,items.map(o=>o.object_id),engine.state.activeVerb]);if(signature!==missingSignature){missingSignature=signature;missingItemsPanel.replaceChildren();if(items.length){const label=document.createElement('div');label.textContent='Öppen behållare – föremål utan eget bildlager. Välj verb och klicka namnet:';missingItemsPanel.append(label);for(const object of items){const button=document.createElement('button');button.textContent=displayObjectName(object);button.style.cssText='margin:4px;padding:6px 10px;cursor:pointer';button.onclick=()=>engine.handleClick({x:object.walk_x,y:object.walk_y},object);missingItemsPanel.append(button);}}}}
  renderer?.update(room, engine.state);
  ui.update(engine.state, room);
  requestAnimationFrame(frame);
}

ui.update(engine.state, engine.room);
requestAnimationFrame(frame);

if (!music.available) ui.setMusicStatus('Intro audio was not found through the asset manifest.');

if(isLabPlay){
 ui.setNotice('Väntar på editorns rum…');
 window.addEventListener('message',async event=>{if(event.origin!==location.origin||event.source!==window.parent||event.data?.type!=='zak-lab-projects'||labRuntime)return;
 try{const {LabPlayRuntime}=await import('./lab/playRuntime');labRuntime=await LabPlayRuntime.create(event.data.projects);if(renderer)labRuntime.attach(renderer);ui.setNotice('Provspel: editorns grafik + originalets spelregler. Gångytor och z-masker är ännu originalets.');}catch(error){ui.setNotice(`Provspel kunde inte laddas: ${error instanceof Error?error.message:String(error)}`);}
 });
 window.parent.postMessage({type:'zak-lab-ready'},location.origin);
}
