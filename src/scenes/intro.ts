import { getRoom, objectImageUrl } from '../content/rooms';
import costumes from '../content/costume-reference.json';
import { assetUrl } from '../content/runtimeAssets';
const officeRoom = assetUrl('intro/office.png');
const logoRoom = assetUrl('intro/logo.png');
const dreamRoom = assetUrl('backgrounds/LFv2_0058.png');
const dreamPanorama = assetUrl('backgrounds/LFv2_0051.png');
const dreamCloseup = assetUrl('backgrounds/LFv2_0055.png');
const dreamStreet = assetUrl('backgrounds/LFv2_0049.png');
const dreamExit = assetUrl('backgrounds/LFv2_0056.png');

export interface IntroActor { costume: number; x: number; y: number; animation: number; toX?: number; toY?: number }
export interface IntroBeat {
  roomId: number;
  image: string;
  label: string;
  speaker?: string;
  text?: string;
  musicCue?: boolean;
  credit?: boolean;
  durationMs?: number;
  pan?: boolean;
  patches?: number[];
  actors?: IntroActor[];
  camera?: [number, number];
  placements?: Record<number, [number, number]>;
  creditText?: string;
}

const officeDialogue: IntroBeat[] = [
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'The Boss', text: 'Zak, Zak, Zak. What am I going to do with you?' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'Zak', text: 'But Boss! I’ll NEVER win a Pulitzer working for this sleazy tabloid!' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'Zak', text: 'I’m SICK of making up STUPID STORIES!' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'The Boss', text: 'Then make up stories that AREN’T stupid!' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'The Boss', text: 'Look. Just do this last feature, and then you can write your novel.' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'The Boss', text: 'Here’s your ticket to Seattle.' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'The Boss', text: 'I want more on that vicious two-headed squirrel that’s been attacking campers.' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'Zak', text: 'Oh, all right!' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'The Boss', text: 'And while you’re there…' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'The Boss', text: 'The first UFO sighting happened on Mt. Rainier 50 years ago. Write it up too.' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'Zak', text: 'Hmmm…' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'Zak', text: 'TABLOID REPORTER STRANGLES BOSS OVER LOUSY ASSIGNMENT.' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'The Boss', text: 'What was that?' },
  { roomId: 46, image: officeRoom, label: 'SCv2_0127 · The office', speaker: 'Zak', text: 'Nothing, Boss.' },
];

const credits: IntroBeat[] = [
  { roomId: 58, image: dreamRoom, label: 'SCv2_0111 · Original credits', text: 'Created and designed by\nDavid Fox, Matthew Kane,\nDavid Spangler, and Ron Gilbert', credit: true },
  { roomId: 58, image: dreamRoom, label: 'SCv2_0111 · Original credits', text: 'Scripted and programmed by\nDavid Fox and Matthew Kane', credit: true },
  { roomId: 58, image: dreamRoom, label: 'SCv2_0111 · Original credits', text: 'Art and Animation by\nMark J. Ferrari, Basilio Amaro,\nMartin Cameron, and Gary Winnick', credit: true },
  { roomId: 58, image: dreamRoom, label: 'SCv2_0111 · Original credits', text: 'Music and Sound Effects by\nMatthew Kane, Dave Hayes, & Dave Warhol', credit: true },
  { roomId: 58, image: dreamRoom, label: 'SCv2_0111 · Original credits', text: 'IBM Version by Aric Wilmunder', credit: true },
  { roomId: 58, image: dreamRoom, label: 'SCv2_0111 · Original credits', text: 'Project Directed by David Fox', credit: true },
];

// Coordinates below come from SC1/127: actor x * 8, y * 2; drawObject x/y * 8.
const zak = (x: number, y = 56, toX = x, animation = 10): IntroActor => ({ costume: 30, x: x * 8, y: y * 2, toX: toX * 8, animation });
const pursuer = (x: number, toX: number, y = 55): IntroActor => ({ costume: 31, x: x * 8, y: y * 2, toX: toX * 8, animation: toX >= x ? 5 : 4 });
const street = (patches: number[], actors: IntroActor[], durationMs: number, extra: Partial<IntroBeat> = {}): IntroBeat => ({ roomId: 49, image: dreamStreet, label: 'SC1 · Dream', patches, actors, durationMs, ...extra });
export const introBeats: IntroBeat[] = [
  { roomId: 46, image: logoRoom, label: 'Opening logo', durationMs: 5000 },
  ...officeDialogue.map((beat, index) => ({ ...beat, actors: [
    // Office image is the right-hand 320 pixels of room 46.
    { costume: 32, x: 58 * 8 - 320, y: 64, animation: beat.speaker === 'The Boss' ? 18 : 4 },
    { costume: 30, x: (index < 3 ? (index % 2 ? 45 : 55) : index < 6 ? 49 : index < 8 ? 56 : 60) * 8 - 320, toX: (index < 3 ? (index % 2 ? 74 : 45) : index < 6 ? 49 : index < 8 ? 56 : 60) * 8 - 320, y: index < 6 ? 116 : 120, animation: index < 3 ? (index % 2 ? 5 : 4) : beat.speaker === 'Zak' ? 16 : 8 },
  ] })),
  { roomId: 0, image: '', label: 'SC1 · 00BE', text: "Later that night, Zak's in bed…", durationMs: 2000 },
  { roomId: 0, image: '', label: 'SC1 · 00BE', text: "Later that night, Zak's in bed…\nalone…", durationMs: 3000 },
  { roomId: 0, image: '', label: 'SC1 · 00BE', text: "Later that night, Zak's in bed…\nalone… again.", durationMs: 3000 },
  { roomId: 58, image: dreamRoom, label: 'SC1 · 011C', durationMs: 3000 },
  { roomId: 58, image: dreamRoom, label: 'SC1 · 011C', patches: [766], durationMs: 3000 },
  { roomId: 58, image: dreamRoom, label: 'SC1 · 011C', patches: [766,767], durationMs: 4000 },
  { roomId: 58, image: dreamRoom, label: 'SC1 · 011C', patches: [766,767,768], durationMs: 3000 },
  { roomId: 51, image: dreamPanorama, label: 'SC1 · 0148', durationMs: 8000, camera: [320,0], musicCue: true },
  ...[756,757,758,759,760].map((id,i) => ({ roomId: 55, image: dreamCloseup, label: 'SC1 · Dream vision', durationMs: 3000, patches: [id], creditText: credits[i]!.text })),
  street([701], [zak(30)], 2750, { speaker: 'Zak', text: "Hey! That's ME!", creditText: credits[5]!.text }),
  street([701], [zak(30)], 3750, { speaker: 'Zak', text: 'TABLOID REPORTER `SPACES OUT` IN DREAM.' }),
  street([701], [zak(30,56,14,6)], 2500),
  street([699], [zak(14,56,14,12)], 1500, { placements: {699:[80,16]} }),
  street([699,700,696], [zak(14,56,33,5)], 3000, { placements: {699:[80,16],700:[80,48],696:[240,24]} }),
  ...[4,7,10,13,16].map(x => street([697], [zak(33,45,33,24)], 180, {placements:{697:[x*8,48]}})),
  street([697], [zak(33,45,27,6)], 1600, {placements:{697:[128,48]}}),
  street([698], [zak(25,55,25,16)], 2000, {placements:{698:[152,32]}}),
  street([697], [zak(25,55,19,6)], 2000, {placements:{697:[128,48]}}),
  street([], [zak(19,55,19,28),pursuer(0,5)], 2000),
  street([], [zak(19,55,34,5),pursuer(5,25)], 2400, {speaker:'Zak',text:'AIEEEEE!'}),
  street([], [zak(34,56,8,6),pursuer(25,14)], 2800),
  street([702], [zak(8,56,18,5),pursuer(14,18)], 1600),
  { roomId:56,image:dreamExit,label:'SC1 · Escape',durationMs:3500,camera:[0,0],actors:[zak(0,48,26,5)] },
  { roomId:56,image:dreamExit,label:'SC1 / SC109 · Chase',durationMs:3000,camera:[0,0],actors:[zak(26,48,47,5),pursuer(0,26,48)] },
  { roomId:56,image:dreamExit,label:'SC1 · Camera',durationMs:4000,camera:[0,320],actors:[zak(47,48),pursuer(26,0,48)] },
  ...[true,false,true,false].map(visible => ({roomId:56,image:dreamExit,label:'SC1 · 761',durationMs:200,camera:[320,320] as [number,number],patches:visible?[761]:[],actors:[zak(47,48)]})),
  { roomId:56,image:dreamExit,label:'SC1 · 050A',durationMs:3000,camera:[320,320],actors:[zak(47,48,20,6)] },
];

export function introBeatDuration(beat: IntroBeat): number {
  return beat.durationMs ?? Math.max(2200, Math.min(9500, 1100 + (beat.text?.length ?? 0) * 55));
}

export interface IntroSequenceCallbacks {
  onDreamMusicCue: () => void;
  onFinish: (skipped: boolean) => void;
}

/** Source-ordered opening adaptation. Timing/cel cycling is approximate, not a SCUMM VM. */
export class IntroSequence {
  private readonly overlay = document.createElement('section');
  private index = 0;
  private finished = false;
  private timer?: ReturnType<typeof setTimeout>;
  private animationFrame = 0;
  private readonly art = document.createElement("div");

  constructor(private readonly viewport: HTMLElement, private readonly callbacks: IntroSequenceCallbacks) {
    this.overlay.className = 'intro-playback';
    this.overlay.tabIndex = -1;
    this.overlay.setAttribute('role', 'dialog');
    this.overlay.setAttribute('aria-modal', 'true');
    this.overlay.setAttribute('aria-label', 'Zak McKracken opening intro');
    this.overlay.addEventListener('click', (event) => {
      if ((event.target as HTMLElement).closest('button')) return;
      this.advance();
    });
    this.overlay.addEventListener('keydown', this.handleKeyDown);
  }

  start(): void {
    this.viewport.closest('.game-shell')?.classList.add('playing-intro');
    this.viewport.closest('.game-shell')?.querySelector('details.game-menu')?.removeAttribute('open');
    this.viewport.append(this.overlay);
    this.renderBeat();
    this.overlay.focus();
  }

  dispose(): void {
    this.finished = true;
    clearTimeout(this.timer);
    cancelAnimationFrame(this.animationFrame);
    this.overlay.removeEventListener('keydown', this.handleKeyDown);
    this.overlay.remove();
    this.viewport.closest('.game-shell')?.classList.remove('playing-intro');
  }

  private readonly handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.finish(true);
    } else if (event.key === ' ' || event.key === 'ArrowRight' || event.key === 'Enter') {
      event.preventDefault();
      this.advance();
    }
  };

  private advance(): void {
    if (this.finished) return;
    clearTimeout(this.timer);
    if (this.index >= introBeats.length - 1) {
      this.finish(false);
      return;
    }
    this.index += 1;
    this.renderBeat();
  }

  private finish(skipped: boolean): void {
    if (this.finished) return;
    this.dispose();
    this.callbacks.onFinish(skipped);
  }

  private renderBeat(): void {
    const beat = introBeats[this.index]!;
    if (beat.musicCue) this.callbacks.onDreamMusicCue();
    this.overlay.dataset.room = String(beat.roomId);
    this.overlay.dataset.credit = beat.credit ? 'true' : 'false';
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.advance(), introBeatDuration(beat));
    this.overlay.replaceChildren();

    cancelAnimationFrame(this.animationFrame);
    {
      this.art.className = 'intro-scene';
      this.art.dataset.pan = 'false';
      this.art.replaceChildren();
      const image = document.createElement('img');
      image.className = 'intro-art';
      if (beat.image) image.src = beat.image;
      else image.hidden = true;
      image.alt = beat.label;
      image.draggable = false;
      this.art.append(image);
      const roomWidth = beat.camera ? getRoom(beat.roomId).width : 320;
      this.art.style.width = `${roomWidth / 320 * 100}%`;
      this.art.style.transform = `translateX(-${(beat.camera?.[0] ?? 0) / roomWidth * 100}%)`;
      for (const id of beat.patches ?? []) {
        const object = getRoom(beat.roomId).objects.find(o => o.object_id === id);
        const url = objectImageUrl(beat.roomId, id);
        if (!object || !url) continue;
        const patch = document.createElement('img');
        patch.className = 'intro-patch';
        patch.src = url;
        Object.assign(patch.style, { left: ((beat.placements?.[id]?.[0] ?? object.x) / roomWidth * 100) + '%', top: ((beat.placements?.[id]?.[1] ?? object.y) / 128 * 100) + '%', width: (object.width / roomWidth * 100) + '%', height: (object.height / 128 * 100) + '%' });
        this.art.append(patch);
      }
      const sprites = (beat.actors ?? []).flatMap(actor => {
        const list = (costumes as Record<string, typeof costumes['1']>)[String(actor.costume)];
        const cel = list?.find(a => a.id === actor.animation) ?? list?.find(a => a.id === 10);
        if (!cel) return [];
        const sprite = document.createElement('div');
        sprite.className = 'intro-actor';
        sprite.dataset.costume = String(actor.costume);
        Object.assign(sprite.style, { width: `${cel.width / roomWidth * 100}%`, height: `${cel.height / 128 * 100}%`, backgroundImage: `url("${assetUrl('reference/' + cel.file)}")`, backgroundSize: `${cel.frames * 100}% 100%` });
        this.art.append(sprite);
        return [{actor,cel,sprite}];
      });
      const started = performance.now();
      const animate = (now: number): void => {
        if (this.finished) return;
        const elapsed = now - started;
        const t = Math.min(1, elapsed / introBeatDuration(beat));
        const camera = beat.camera ?? [0,0];
        this.art.style.transform = `translateX(-${(camera[0]! + (camera[1]! - camera[0]!) * t) / roomWidth * 100}%)`;
        for (const {actor,cel,sprite} of sprites) {
          sprite.style.left = `${(actor.x + ((actor.toX ?? actor.x) - actor.x) * t + cel.x) / roomWidth * 100}%`;
          sprite.style.top = `${(actor.y + ((actor.toY ?? actor.y) - actor.y) * t + cel.y) / 128 * 100}%`;
          const frame = Math.floor(elapsed / 140) % cel.frames;
          sprite.style.backgroundPositionX = `${cel.frames > 1 ? frame / (cel.frames - 1) * 100 : 0}%`;
        }
        this.animationFrame = requestAnimationFrame(animate);
      };
      animate(started);
    }

    const shade = document.createElement('div');
    shade.className = 'intro-shade';

    const header = document.createElement('div');
    header.className = 'intro-header';
    const label = document.createElement('p');
    label.className = 'intro-label';
    label.textContent = beat.label;
    const progress = document.createElement('span');
    progress.className = 'intro-progress';
    progress.textContent = `${String(this.index + 1).padStart(2, '0')} / ${introBeats.length}`;
    header.append(label, progress);

    const card = document.createElement('div');
    card.className = beat.credit ? 'intro-card intro-credit-card' : 'intro-card';
    if (beat.speaker) {
      const speaker = document.createElement('p');
      speaker.className = 'intro-speaker';
      speaker.textContent = beat.speaker;
      card.append(speaker);
    }
    if (beat.text) {
      const dialogue = document.createElement('p');
      dialogue.className = beat.credit ? 'intro-text intro-credit-text' : 'intro-text';
      dialogue.textContent = beat.text;
      card.append(dialogue);
    }

    const footer = document.createElement('div');
    footer.className = 'intro-footer';
    const hint = document.createElement('span');
    hint.className = 'intro-hint';
    hint.textContent = 'Autoplay · Click or press → to advance · Esc to skip';
    const actions = document.createElement('div');
    actions.className = 'intro-actions';
    const skip = document.createElement('button');
    skip.type = 'button';
    skip.className = 'intro-skip';
    skip.textContent = 'Skip intro';
    skip.addEventListener('click', () => this.finish(true));
    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'intro-next';
    next.textContent = this.index === introBeats.length - 1 ? 'Enter the game' : 'Continue';
    next.addEventListener('click', () => this.advance());
    actions.append(skip, next);
    footer.append(hint, actions);

    const credit = document.createElement('p');
    credit.className = 'intro-concurrent-credit';
    credit.textContent = beat.creditText ?? '';
    this.overlay.append(this.art, shade, header, card, credit, footer);
  }
}
