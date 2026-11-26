from pathlib import Path
import json
repo = Path(__file__).resolve().parents[1]
root = repo / 'public/assets'
index = {k: [f.relative_to(root).as_posix() for f in sorted((root/k).rglob('*.png'))] for k in ('backgrounds','objects','costumes')}
(repo/'src/content/runtime-assets.json').write_text(json.dumps(index,indent=2)+'\n', encoding='utf-8')
print({k:len(v) for k,v in index.items()})
