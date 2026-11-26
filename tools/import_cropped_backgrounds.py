"""Copy selected cropped art; retain originals and record exact provenance."""
from pathlib import Path
import hashlib
import json
import shutil
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
source = ROOT / 'zak/converted/poc/backgrounds_cropped'
manifest_path = ROOT / 'src/content/runtime-preview.json'
previous = json.loads(manifest_path.read_text(encoding='utf-8'))
rooms = json.loads((ROOT / 'zak/converted/metadata/rooms.json').read_text(encoding='utf-8'))
manifest, report = {}, []
for room in rooms:
    key = str(room['room'])
    folder = source / f"room_{room['room']:03}"
    candidates = sorted(folder.glob('*.png'))
    if not candidates:
        report.append({'room': room['room'], 'missing': True})
        continue
    preferred = folder / Path(previous.get(key, {}).get('path', '')).name
    chosen = preferred if preferred.is_file() else candidates[-1]
    with Image.open(chosen) as img:
        img.verify()
    with Image.open(chosen) as img:
        width, height = img.size
    relative = Path('cropped/backgrounds') / folder.name / chosen.name
    target = ROOT / 'public/assets' / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(chosen, target)
    digest = hashlib.sha256(chosen.read_bytes()).hexdigest()
    assert hashlib.sha256(target.read_bytes()).hexdigest() == digest
    manifest[key] = {'path': relative.as_posix(), 'uv': None}
    report.append({'room': room['room'], 'source': chosen.relative_to(ROOT).as_posix(),
                   'path': relative.as_posix(), 'width': width, 'height': height,
                   'aspectError': abs((width / height) / (room['width'] / room['height']) - 1),
                   'sha256': digest})
manifest_path.write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
(ROOT / 'docs/evidence/cropped-background-import.json').write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'imported': len(manifest), 'missing': [r['room'] for r in report if r.get('missing')],
                  'aspectWarnings': [r['room'] for r in report if r.get('aspectError', 0) > .02]}))
