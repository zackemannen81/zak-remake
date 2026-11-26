"""Reuse one generated image for byte-identical original state images in a room."""
from collections import defaultdict
import json,shutil,hashlib
from export_objects import ROOT
OUT=ROOT/'zak/converted'
def build():
 groups=defaultdict(list)
 for o in json.loads((OUT/'images/objects/objects.json').read_text())['objects']:groups[(o['room'],o['png_sha256'])].append(o)
 records=[]
 for (room,source_hash),items in groups.items():
  if len(items)<2:continue
  items.sort(key=lambda o:o['object_id']);leader=items[0];folder=OUT/f"poc/objects/room_{room:03}/object_{leader['object_id']:04}";files=sorted(folder.glob('state_*.png'))
  if not files:continue
  selected=files[-1]
  for o in items[1:]:
   dest=OUT/f"poc/objects/room_{room:03}/object_{o['object_id']:04}/state_v020.png";dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(selected,dest)
   row=dict(room=room,object_id=o['object_id'],source_object_id=leader['object_id'],identical_original_sha256=source_hash,reused_from=selected.relative_to(ROOT).as_posix(),file=dest.relative_to(ROOT).as_posix(),sha256=hashlib.sha256(dest.read_bytes()).hexdigest(),reason='Byte-identical original images in the same room; reuse preserves state consistency. No image editing.')
   (dest.parent/'reuse_v020.json').write_text(json.dumps(row,indent=2)+'\n');records.append(row)
 (OUT/'poc/reused_state_images.json').write_text(json.dumps(records,indent=2)+'\n');print('Identical reference images reused:',len(records))
if __name__=='__main__':build()
