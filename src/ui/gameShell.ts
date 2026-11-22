import type { GameState, RoomData, VerbId } from '../core/types';
import { displayObjectName, getRoom } from '../content/rooms';

const verbs: Array<{ id: VerbId; label: string }> = [
  { id: 'walk', label: 'Walk to' },
  { id: 'look', label: 'Look at' },
  { id: 'use', label: 'Use' },
  { id: 'open', label: 'Open' },
  { id: 'close', label: 'Close' },
  { id: 'pickup', label: 'Pick up' },
  { id: 'talk', label: 'Talk to' },
];

export interface GameUICallbacks {
  onVerb: (verb: VerbId) => void;
  onInventoryItem: (objectId: number) => void;
  onSave: () => void;
  onLoad: () => void;
  onPlayIntro: () => void;
  onStopMusic: () => void;
}

export class GameUI {
  readonly viewport: HTMLElement;
  private readonly roomTitle: HTMLElement;
  private readonly roomCoordinates: HTMLElement;
  private readonly verbBar: HTMLElement;
  private readonly inventory: HTMLElement;
  private readonly dialogue: HTMLElement;
  private readonly messageLog: HTMLElement;
  private readonly status: HTMLElement;
  private readonly notice: HTMLElement;
  private readonly musicStatus: HTMLElement;
  private readonly callbacks: Partial<GameUICallbacks> = {};
  private lastMessages = '';

  constructor(root: HTMLElement) {
    root.innerHTML = `
      <div class="game-shell">
        <header class="topbar">
          <div class="brand-lockup"><span class="brand-mark" aria-hidden="true">Z</span><div><p class="eyebrow">A playable work in progress</p><h1>Zak McKracken <span>and the Alien Mindbenders</span></h1></div></div>
          <div class="topbar-status"><span class="status-light"></span><span id="engine-status">ENGINE READY</span></div>
        </header>
        <main class="game-layout">
          <section class="play-column" aria-label="Game scene">
            <div class="scene-heading"><div><p class="eyebrow">Current location</p><h2 id="room-title">Loading room…</h2></div><span id="room-coordinates" class="room-coordinate"></span></div>
            <div id="viewport" class="viewport" aria-label="Point-and-click game canvas"></div>
            <div id="dialogue" class="dialogue" aria-live="polite">Loading the first room…</div>
            <p class="control-hint">Click a place to walk. Choose a verb, then click a hotspot. Walk to the room doors to travel.</p>
            <section class="log-panel"><h3>Recent events</h3><div id="message-log" class="message-log"></div></section>
          </section>
          <aside class="side-panel" aria-label="Game controls">
            <section class="panel-block"><div class="panel-heading"><span class="panel-index">01</span><h3>Actions</h3></div><div id="verb-bar" class="verb-bar"></div><p class="selected-item-note" id="selected-item-note">Select a verb to begin.</p></section>
            <section class="panel-block inventory-block"><div class="panel-heading"><span class="panel-index">02</span><h3>Inventory</h3></div><p class="small-copy">Choose an item to use it on a hotspot.</p><div id="inventory" class="inventory-list"></div></section>
            <section class="panel-block"><div class="panel-heading"><span class="panel-index">03</span><h3>Game</h3></div><div class="button-row"><button id="save-button" class="secondary-button">Save</button><button id="load-button" class="secondary-button">Load</button></div><div class="button-row music-row"><button id="play-music-button" class="music-button">Play intro</button><button id="stop-music-button" class="secondary-button">Stop</button></div><p id="music-status" class="small-copy" aria-live="polite">Your intro track is loaded on demand.</p><p id="notice" class="notice" aria-live="polite"></p></section>
            <section class="panel-block status-block"><div class="panel-heading"><span class="panel-index">04</span><h3>State</h3></div><p id="engine-readout" class="engine-readout"></p><p class="small-copy">Source room/object IDs are preserved through rendering and interaction.</p></section>
          </aside>
        </main>
        <footer class="footer-note"><span>ROOM SLICE 01–03</span><span>Original art fallback · Three.js · deterministic 30 Hz simulation</span></footer>
      </div>`;

    this.viewport = root.querySelector<HTMLElement>('#viewport')!;
    this.roomTitle = root.querySelector<HTMLElement>('#room-title')!;
    this.roomCoordinates = root.querySelector<HTMLElement>('#room-coordinates')!;
    this.verbBar = root.querySelector<HTMLElement>('#verb-bar')!;
    this.inventory = root.querySelector<HTMLElement>('#inventory')!;
    this.dialogue = root.querySelector<HTMLElement>('#dialogue')!;
    this.messageLog = root.querySelector<HTMLElement>('#message-log')!;
    this.status = root.querySelector<HTMLElement>('#engine-readout')!;
    this.notice = root.querySelector<HTMLElement>('#notice')!;
    this.musicStatus = root.querySelector<HTMLElement>('#music-status')!;

    for (const verb of verbs) {
      const button = document.createElement('button');
      button.className = 'verb-button';
      button.dataset.verb = verb.id;
      button.textContent = verb.label;
      button.addEventListener('click', () => this.callbacks.onVerb?.(verb.id));
      this.verbBar.append(button);
    }
    root.querySelector<HTMLButtonElement>('#save-button')!.addEventListener('click', () => this.callbacks.onSave?.());
    root.querySelector<HTMLButtonElement>('#load-button')!.addEventListener('click', () => this.callbacks.onLoad?.());
    root.querySelector<HTMLButtonElement>('#play-music-button')!.addEventListener('click', () => this.callbacks.onPlayIntro?.());
    root.querySelector<HTMLButtonElement>('#stop-music-button')!.addEventListener('click', () => this.callbacks.onStopMusic?.());
  }

  bind(callbacks: GameUICallbacks): void {
    Object.assign(this.callbacks, callbacks);
  }

  update(state: GameState, room: RoomData): void {
    this.roomTitle.textContent = room.name;
    this.roomCoordinates.textContent = `ROOM ${String(room.id).padStart(2, '0')} · ${room.width} × ${room.height}`;
    for (const button of this.verbBar.querySelectorAll<HTMLButtonElement>('[data-verb]')) {
      button.classList.toggle('is-active', button.dataset.verb === state.activeVerb);
    }
    const selectedItem = state.selectedItemId === null ? null : this.objectLabel(state.selectedItemId);
    rootSelectedNote(this.verbBar.parentElement?.querySelector<HTMLElement>('#selected-item-note') ?? null, selectedItem);
    this.inventory.replaceChildren();
    if (state.inventory.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'inventory-empty';
      empty.textContent = 'Nothing yet. Try “Pick up” on loose items.';
      this.inventory.append(empty);
    } else {
      for (const objectId of state.inventory) {
        const button = document.createElement('button');
        button.className = 'inventory-item';
        button.classList.toggle('is-selected', state.selectedItemId === objectId);
        button.textContent = this.objectLabel(objectId);
        button.title = `Use ${this.objectLabel(objectId)}`;
        button.addEventListener('click', () => this.callbacks.onInventoryItem?.(objectId));
        this.inventory.append(button);
      }
    }
    const visibleDialogue = state.dialogue ?? state.messages.at(-1)?.text ?? 'Click a place to walk, or choose a verb and a hotspot.';
    this.dialogue.textContent = visibleDialogue;
    const messageKey = JSON.stringify(state.messages.slice(-5));
    if (messageKey !== this.lastMessages) {
      this.lastMessages = messageKey;
      this.messageLog.replaceChildren();
      for (const message of state.messages.slice(-5).reverse()) {
        const row = document.createElement('p');
        row.textContent = message.text;
        this.messageLog.append(row);
      }
      if (state.messages.length === 0) {
        const empty = document.createElement('p');
        empty.textContent = 'No events yet.';
        this.messageLog.append(empty);
      }
    }
    this.status.textContent = `TICK ${state.tick.toString().padStart(6, '0')}\nROOM ${room.id} · EGO ${Math.round(state.actor.x)},${Math.round(state.actor.y)}\nVAR[1] ${state.variables[1]} · VAR[2] ${state.variables[2]}`;
  }

  setNotice(message: string): void {
    this.notice.textContent = message;
  }

  setMusicStatus(message: string): void {
    this.musicStatus.textContent = message;
  }

  private objectLabel(objectId: number): string {
    for (const roomId of [1, 2, 3]) {
      const object = getRoom(roomId).objects.find((candidate) => candidate.object_id === objectId);
      if (object) return displayObjectName(object);
    }
    return `Object ${objectId}`;
  }
}

function rootSelectedNote(node: HTMLElement | null, selectedItem: string | null): void {
  if (!node) return;
  node.textContent = selectedItem ? `Selected for use: ${selectedItem}` : 'Select a verb to begin.';
}
