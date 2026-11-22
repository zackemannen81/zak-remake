import manifest from './asset-manifest.json';

const externalAssetUrls = import.meta.glob<string>('../../temp/*.{glb,m4a}', {
  eager: true,
  query: '?url',
  import: 'default',
});

function resolveUserAsset(source: string): string | undefined {
  const fileName = source.split('/').at(-1);
  if (!fileName) return undefined;
  return Object.entries(externalAssetUrls).find(([path]) => path.endsWith(`/temp/${fileName}`))?.[1];
}

export const assetManifest = {
  character: {
    ...manifest.characters.zak,
    url: resolveUserAsset(manifest.characters.zak.source),
  },
  introMusic: {
    ...manifest.music.intro,
    url: resolveUserAsset(manifest.music.intro.source),
  },
};
