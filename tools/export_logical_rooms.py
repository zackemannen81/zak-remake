"""Export the byte-verified source alias map without changing source metadata."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
records = json.loads((ROOT / 'zak/converted/metadata/logical_room_map.json').read_text(encoding='utf-8'))
assert all(record['raw_verified'] for record in records)
aliases = {str(record['logical_room']): record['resource_room'] for record in records}
(ROOT / 'src/content/logical-rooms.json').write_text(json.dumps(aliases, indent=2) + '\n', encoding='utf-8')
print(f'Exported {len(aliases)} verified logical room aliases.')
