"""Create a local comparison viewer; never modifies image assets."""
from pathlib import Path
import json,os
from export_objects import ROOT
OUT=ROOT/'zak/converted';DEST=OUT/'poc/asset_review.html'
def rel(p):return os.path.relpath(p,DEST.parent).replace('\\','/')
def build():
 rooms=json.loads((OUT/'metadata/rooms.json').read_text());objs=json.loads((OUT/'images/objects/objects.json').read_text())['objects'];items=[]
 for r in rooms:
  versions=sorted((OUT/f"poc/backgrounds/room_{r['room']:03}").glob('*.png'))
  items.append(dict(kind='background',room=r['room'],id=0,name=f"Rum {r['room']:03}",original=rel(ROOT/r['background']),versions=[rel(p) for p in versions],width=r['width'],height=r['height']))
 for o in objs:
  versions=sorted((OUT/f"poc/objects/room_{o['room']:03}/object_{o['object_id']:04}").glob('state_*.png'))
  items.append(dict(kind='object',room=o['room'],id=o['object_id'],name=o['name'],original=rel(OUT/'images/objects'/o['png']),versions=[rel(p) for p in versions],width=o['width'],height=o['height'],x=o['x'],y=o['y']))
 template=(ROOT/'tools/asset_review_template.html').read_text(encoding='utf-8')
 DEST.write_text(template.replace('__DATA__',json.dumps(items,ensure_ascii=False).replace('</','<\\/')),encoding='utf-8')
 print(dict(viewer=str(DEST),items=len(items),generated=sum(bool(i['versions']) for i in items)))
if __name__=='__main__':build()
