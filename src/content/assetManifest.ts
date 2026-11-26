import manifest from './asset-manifest.json';
import { assetUrl } from './runtimeAssets';

export const assetManifest = {
  character: { ...manifest.characters.zak, url: assetUrl(manifest.characters.zak.source.replace(/^assets\//, '')) },
  introMusic: { ...manifest.music.intro, url: assetUrl(manifest.music.intro.source.replace(/^assets\//, '')) },
};
