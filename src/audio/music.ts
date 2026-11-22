export class IntroMusic {
  private readonly audio?: HTMLAudioElement;

  constructor(source: string | undefined, private readonly onStatus: (message: string) => void = () => undefined) {
    if (!source) {
      this.onStatus('Intro music is not available; the manifest asset is missing.');
      return;
    }
    this.audio = new Audio(source);
    this.audio.preload = 'none';
    this.audio.loop = false;
    this.audio.addEventListener('ended', () => this.onStatus('Intro track finished.'));
    this.audio.addEventListener('error', () => this.onStatus('Intro track could not be loaded; gameplay continues.'));
  }

  async play(): Promise<void> {
    if (!this.audio) return;
    try {
      await this.audio.play();
      this.onStatus('Playing your intro track.');
    } catch {
      this.onStatus('The browser could not start the intro track. Try again after a click.');
    }
  }

  stop(): void {
    if (!this.audio) return;
    this.audio.pause();
    this.audio.currentTime = 0;
    this.onStatus('Intro track stopped.');
  }

  get available(): boolean {
    return this.audio !== undefined;
  }
}
