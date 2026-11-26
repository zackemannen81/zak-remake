import type { GameState, RoomData, VerbId } from '../core/types';
import { inventoryObjectName } from '../content/rooms';
import { sceneChoices, locationName } from '../scenes/progression';

const verbs: Array<{ id: VerbId; label: string }> = [
  { id: 'walk', label: 'Walk to' },
  { id: 'putOn', label: 'Put on' },
  { id: 'turnOn', label: 'Turn on' },
  { id: 'push', label: 'Push' },
  { id: 'pull', label: 'Pull' },
  { id: 'give', label: 'Give' },
  { id: 'use', label: 'Use' },
  { id: 'pickup', label: 'Pick up' },
  { id: 'takeOff', label: 'Take off' },
  { id: 'turnOff', label: 'Turn off' },
  { id: 'look', label: 'Look at' },
  { id: 'open', label: 'Open' },
  { id: 'close', label: 'Close' },
  { id: 'talk', label: 'Talk to' },
];

export interface GameUICallbacks {
  onVerb: (verb: VerbId) => void;
  onInventoryItem: (objectId: number) => void;
  onSave: () => void;
  onLoad: () => void;
  onPlayIntro: () => void;
  onStopMusic: () => void;
  onSceneAction: (id:string) => void;
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
  private lastInventory = '';
  private inventoryPage = 0;
  private readonly pageSize = 6;
  private readonly inventoryPrevious: HTMLButtonElement;
  private readonly inventoryNext: HTMLButtonElement;
  private readonly inventoryPageLabel: HTMLElement;
  private readonly sceneActions: HTMLElement;
  private lastChoices = '';

  constructor(root: HTMLElement) {
    root.innerHTML = `
      <div class="game-shell compact-game">
        <header class="topbar">
          <div class="brand-lockup"><span class="brand-mark" aria-hidden="true">Z</span><h1>Zak McKracken <span>and the Alien Mindbenders</span></h1></div>
          <details class="game-menu"><summary>Game menu</summary><div class="menu-content"><div class="button-row"><button id="save-button" class="secondary-button">Save</button><button id="load-button" class="secondary-button">Load</button></div><div class="button-row"><button id="play-music-button" class="secondary-button">Play intro</button><button id="stop-music-button" class="secondary-button">Stop music</button></div><p id="music-status" class="small-copy"></p><p id="notice" class="notice" aria-live="polite"></p></div></details>
        </header>
        <main class="game-layout">
          <section class="play-column" aria-label="Game scene">
            <div class="scene-heading"><h2 id="room-title">Loading room…</h2><span id="room-coordinates" class="room-coordinate"></span></div>
            <div id="viewport" class="viewport" aria-label="Point-and-click game canvas"></div>
            <div id="dialogue" class="dialogue" aria-live="polite">Loading the first room…</div>
            <div id="scene-actions" class="scene-actions" aria-label="Scene interactions"></div>
          </section>
        </main>
        <section class="interaction-dock" aria-label="Game controls">
          <div class="actionbar-panel"><div id="verb-bar" class="verb-bar" role="group" aria-label="Choose an action"></div><p class="selected-item-note" id="selected-item-note"></p></div>
          <section class="inventory-block" aria-label="Inventory"><div class="inventory-heading"><h3>Inventory</h3><div class="inventory-paging"><button id="inventory-prev" aria-label="Previous inventory page">‹</button><span id="inventory-page" aria-live="polite">1 / 1</span><button id="inventory-next" aria-label="Next inventory page">›</button></div></div><div id="inventory" class="inventory-list"></div></section>
        </section>
        <details class="debug-drawer"><summary>Recent events & diagnostics</summary><div class="debug-content"><div id="message-log" class="message-log"></div><p id="engine-readout" class="engine-readout"></p></div></details>
      </div>`;

    this.inventoryPrevious=root.querySelector<HTMLButtonElement>('#inventory-prev')!;
    this.sceneActions=root.querySelector<HTMLElement>('#scene-actions')!;
    this.inventoryNext=root.querySelector<HTMLButtonElement>('#inventory-next')!;
    this.inventoryPageLabel=root.querySelector<HTMLElement>('#inventory-page')!;
    this.inventoryPrevious.onclick=()=>{this.inventoryPage=Math.max(0,this.inventoryPage-1);this.lastInventory='';};
    this.inventoryNext.onclick=()=>{this.inventoryPage++;this.lastInventory='';};
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
    this.roomTitle.textContent = locationName(state) ?? room.name;
    const choices=sceneChoices(state), key=JSON.stringify(choices);
    if(key!==this.lastChoices) {
      this.lastChoices=key;this.sceneActions.replaceChildren();
      for(const choice of choices) { const b=document.createElement('button');b.className='secondary-button';b.textContent=choice.label;b.onclick=()=>this.callbacks.onSceneAction?.(choice.id);this.sceneActions.append(b); }
    }
    for(const button of this.sceneActions.querySelectorAll('button')) button.disabled=(state.scriptLockedUntil??0)>state.tick || !!state.pendingInteraction || state.actor.path.length>0;
    this.roomCoordinates.textContent = `ROOM ${String(room.id).padStart(2, '0')} · ${room.width} × ${room.height}`;
    for (const button of this.verbBar.querySelectorAll<HTMLButtonElement>('[data-verb]')) {
      button.classList.toggle('is-active', button.dataset.verb === state.activeVerb);
      button.setAttribute('aria-pressed',String(button.dataset.verb === state.activeVerb));
    }
    const selectedItem = state.selectedItemId === null ? null : inventoryObjectName(state.selectedItemId, state.objectNames);
    rootSelectedNote(this.verbBar.parentElement?.querySelector<HTMLElement>('#selected-item-note') ?? null, selectedItem);
    const pages=Math.max(1,Math.ceil(state.inventory.length/this.pageSize));
    this.inventoryPage=Math.max(0,Math.min(pages-1,this.inventoryPage));
    this.inventoryPrevious.disabled=this.inventoryPage===0;this.inventoryNext.disabled=this.inventoryPage===pages-1;
    this.inventoryPageLabel.textContent=`${this.inventoryPage+1} / ${pages}`;
    const inventoryKey = JSON.stringify([state.inventory, state.selectedItemId, state.objectNames,this.inventoryPage]);
    if (inventoryKey !== this.lastInventory) {
    this.lastInventory = inventoryKey;
    this.inventory.replaceChildren();
    if (state.inventory.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'inventory-empty';
      empty.textContent = 'Nothing yet. Try “Pick up” on loose items.';
      this.inventory.append(empty);
    } else {
      for (const objectId of state.inventory.slice(this.inventoryPage*this.pageSize,(this.inventoryPage+1)*this.pageSize)) {
        const button = document.createElement('button');
        button.className = 'inventory-item';
        button.classList.toggle('is-selected', state.selectedItemId === objectId);
        button.setAttribute('aria-pressed',String(state.selectedItemId===objectId));
        button.textContent = inventoryObjectName(objectId, state.objectNames);
        button.title = `Use ${inventoryObjectName(objectId, state.objectNames)}`;
        button.addEventListener('click', () => this.callbacks.onInventoryItem?.(objectId));
        this.inventory.append(button);
      }
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
    if(state.scriptDiagnostic)this.status.textContent+='\n'+JSON.stringify(state.scriptDiagnostic);
  }

  setNotice(message: string): void {
    this.notice.textContent = message;
  }

  setMusicStatus(message: string): void {
    this.musicStatus.textContent = message;
  }

}

function rootSelectedNote(node: HTMLElement | null, selectedItem: string | null): void {
  if (!node) return;
  node.textContent = selectedItem ? `Selected for use: ${selectedItem}` : 'Click to walk · choose a verb to interact.';
}
