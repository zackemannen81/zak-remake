/** Explicit room/editor entry points bypass the opening; menu replay never resets state. */
export function shouldStartIntro(params: URLSearchParams, labPlay: boolean): boolean {
  return !labPlay && params.get('skipIntro') !== '1' && params.get('intro') !== '0'
    && (params.get('intro') === '1' || !params.has('room'));
}
