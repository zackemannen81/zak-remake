import { getRoom, objectImageUrl } from '../content/rooms';
import { assetUrl } from '../content/runtimeAssets';
const officeRoom = assetUrl('intro/office.png');
const logoRoom = assetUrl('intro/logo.png');
const bedroomRoom = assetUrl('backgrounds/LFv2_0001.png');
const dreamRoom = assetUrl('backgrounds/LFv2_0058.png');
const dreamPanorama = assetUrl('backgrounds/LFv2_0051.png');
const dreamCloseup = assetUrl('backgrounds/LFv2_0055.png');
const dreamStreet = assetUrl('backgrounds/LFv2_0049.png');
const dreamExit = assetUrl('backgrounds/LFv2_0056.png');

interface IntroBeat {
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

export const introBeats: IntroBeat[] = [
  { roomId: 46, image: logoRoom, label: "Opening logo", durationMs: 5000 },
  ...officeDialogue,
  { roomId: 1, image: bedroomRoom, label: 'SCv2_0001 · Later that night', text: 'Later that night, Zak’s in bed…' },
  { roomId: 1, image: bedroomRoom, label: 'SCv2_0001 · Later that night', text: 'Alone… again.' },
  { roomId: 58, image: dreamRoom, label: 'SCv2_0001 · Dream sequence', durationMs: 3000 },
  ...credits,
  { roomId: 58, image: dreamRoom, label: 'SCv2_0001 · Dream sequence', durationMs: 3000, patches: [766, 767, 768] },
  { roomId: 51, image: dreamPanorama, label: 'SCv2_0001 · Dream / music cue 95', durationMs: 8000, pan: true, musicCue: true },
  ...[756, 757, 758, 759, 760].map(id => ({ roomId: 55, image: dreamCloseup, label: 'Dream vision', durationMs: 1600, patches: [id] })),
  { roomId: 49, image: dreamStreet, label: 'SCv2_0001 · Dream sequence', text: "Hey! That's ME!", patches: [701] },
  { roomId: 49, image: dreamStreet, label: 'Dream sequence', speaker: 'Zak', text: 'TABLOID REPORTER SPACES OUT IN DREAM.', patches: [699,700] },
  { roomId: 49, image: dreamStreet, label: 'Dream sequence', speaker: 'Zak', text: 'AIEEEEE!', patches: [702] },
  { roomId: 56, image: dreamExit, label: 'SCv2_0001 · Return transition', durationMs: 6000, pan: true, patches: [761] },
  { roomId: 1, image: bedroomRoom, label: 'SCv2_0108 · Wake-up', durationMs: 1800 },
];

export function introBeatDuration(beat: IntroBeat): number {
  return beat.durationMs ?? Math.max(2200, Math.min(9500, 1100 + (beat.text?.length ?? 0) * 55));
}

export interface IntroSequenceCallbacks {
  onDreamMusicCue: () => void;
  onFinish: (skipped: boolean) => void;
}

/** Replays the extracted opening beats over their original room backgrounds. */
export class IntroSequence {
  private readonly overlay = document.createElement('section');
  private index = 0;
  private finished = false;
  private timer?: ReturnType<typeof setTimeout>;
  private imageKey = "";
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
    this.viewport.append(this.overlay);
    this.renderBeat();
    this.overlay.focus();
  }

  dispose(): void {
    this.finished = true;
    clearTimeout(this.timer);
    this.overlay.removeEventListener('keydown', this.handleKeyDown);
    this.overlay.remove();
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

    const key = JSON.stringify([beat.image, beat.patches, beat.pan]);
    if (key !== this.imageKey) {
      this.imageKey = key;
      this.art.className = 'intro-scene';
      this.art.dataset.pan = beat.pan ? 'true' : 'false';
      this.art.replaceChildren();
      const image = document.createElement('img');
      image.className = 'intro-art';
      image.src = beat.image;
      image.alt = beat.label;
      image.draggable = false;
      this.art.append(image);
      const roomWidth = beat.roomId === 51 || beat.roomId === 56 ? 640 : 320;
      for (const id of beat.patches ?? []) {
        const object = getRoom(beat.roomId).objects.find(o => o.object_id === id);
        const url = objectImageUrl(beat.roomId, id);
        if (!object || !url) continue;
        const patch = document.createElement('img');
        patch.className = 'intro-patch';
        patch.src = url;
        Object.assign(patch.style, { left: (object.x / roomWidth * 100) + '%', top: (object.y / 128 * 100) + '%', width: (object.width / roomWidth * 100) + '%', height: (object.height / 128 * 100) + '%' });
        this.art.append(patch);
      }
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

    this.overlay.append(this.art, shade, header, card, footer);
  }
}
