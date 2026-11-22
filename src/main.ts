import './style.css';
import { IntroMusic } from './audio/music';
import { assetManifest } from './content/assetManifest';
import { getRoom } from './content/rooms';
import { GameEngine } from './core/engine';
import { FIXED_STEP_MS } from './core/types';
import { createInitialState } from './core/state';
import { GameRenderer } from './render/GameRenderer';
import { VisualRegistry } from './render/visualRegistry';
import { deserializeSave, SAVE_STORAGE_KEY, serializeSave } from './save/persistence';
import { GameUI } from './ui/gameShell';
import { IntroSequence } from './scenes/intro';

const app = document.querySelector<HTMLElement>('#app');
if (!app) throw new Error('Missing #app root element.');

const ui = new GameUI(app);
const searchParams = new URLSearchParams(window.location.search);
const engine = new GameEngine(createInitialState(getRoom(1), { skipIntro: searchParams.get('skipIntro') === '1' }));
let renderer: GameRenderer | undefined;
const visualRegistry = new VisualRegistry();

function startRenderer(): void {
  try {
    renderer = new GameRenderer(ui.viewport, visualRegistry);
    renderer.onPointer = (point, target) => engine.handleClick(point, target);
    renderer.onCharacterStatus = (message) => ui.setNotice(message);
  } catch (error) {
    ui.viewport.innerHTML = '<div class="renderer-error">WebGL could not start in this browser. The game logic is still available for testing.</div>';
    ui.setNotice(error instanceof Error ? error.message : 'WebGL initialization failed.');
  }
}

if (searchParams.get('pocAssets') === '1') {
  void import('./content/pocAssets')
    .then(({ registerPocPreviewAssets }) => {
      const report = registerPocPreviewAssets(visualRegistry);
      ui.setNotice(report.missing.length
        ? `POC preview: ${report.registered} complete-room backgrounds enabled; ${report.missing.length} background images missing (see console).`
        : `POC preview: ${report.registered} complete-room backgrounds enabled; object candidates remain opt-in.`);
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
function playIntro(): void {
  introSequence?.dispose();
  music.stop();
  introSequence = new IntroSequence(ui.viewport, {
    onDreamMusicCue: () => void music.play(),
    onFinish: (skipped) => {
      introSequence = undefined;
      if (skipped) music.stop();
      engine.replaceState(createInitialState(getRoom(1), { skipIntro: skipped }));
      ui.setNotice(skipped
        ? 'Intro skipped. Zak starts at the original SCv2_0108 skip position.'
        : 'Intro complete. The original SCv2_0108 wake-up sequence is starting.');
    },
  });
  introSequence.start();
}
ui.bind({
  onVerb: (verb) => engine.setVerb(verb),
  onInventoryItem: (objectId) => engine.selectInventoryItem(objectId),
  onSave: () => {
    try {
      localStorage.setItem(SAVE_STORAGE_KEY, serializeSave(engine.state));
      ui.setNotice('Saved locally in this browser.');
    } catch (error) {
      ui.setNotice(`Save failed: ${error instanceof Error ? error.message : 'browser storage is unavailable'}`);
    }
  },
  onLoad: () => {
    try {
      const saved = localStorage.getItem(SAVE_STORAGE_KEY);
      if (!saved) {
        ui.setNotice('No local save found yet.');
        return;
      }
      engine.replaceState(deserializeSave(saved));
      ui.setNotice('Save loaded.');
    } catch (error) {
      ui.setNotice(`Load failed: ${error instanceof Error ? error.message : 'invalid save'}`);
    }
  },
  onPlayIntro: playIntro,
  onStopMusic: () => music.stop(),
});

if (searchParams.get('intro') === '1') requestAnimationFrame(playIntro);

let previousTime = performance.now();
let accumulator = 0;
function frame(now: number): void {
  accumulator += Math.min(250, now - previousTime);
  previousTime = now;
  let steps = 0;
  while (accumulator >= FIXED_STEP_MS && steps < 8) {
    engine.advanceOneTick();
    accumulator -= FIXED_STEP_MS;
    steps += 1;
  }
  if (steps === 8 && accumulator >= FIXED_STEP_MS) accumulator %= FIXED_STEP_MS;
  const room = engine.room;
  renderer?.update(room, engine.state);
  ui.update(engine.state, room);
  requestAnimationFrame(frame);
}

ui.update(engine.state, engine.room);
requestAnimationFrame(frame);

if (!music.available) ui.setMusicStatus('Intro audio was not found through the asset manifest.');
