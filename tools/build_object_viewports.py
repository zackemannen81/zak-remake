"""Record centered UV candidates for review; do not crop or rewrite generated art."""
from pathlib import Path
from PIL import Image
import json,hashlib
from export_objects import ROOT
OUT=ROOT/'zak/converted'
def build():
 views=[]
 for o in json.loads((OUT/'images/objects/objects.json').read_text())['objects']:
  files=sorted((OUT/f"poc/objects/room_{o['room']:03}/object_{o['object_id']:04}").glob('state_*.png'))
  if not files:continue
  p=files[-1]
  with Image.open(p) as im:w,h=im.size
  aspect=o['width']/o['height'];rect=[0,0,w,h]
  if abs(w/h/aspect-1)>.04:
   if w/h>aspect:rect=[(w-h*aspect)/2,0,(w+h*aspect)/2,h]
   else:rect=[0,(h-w/aspect)/2,w,(h+w/aspect)/2]
  views.append(dict(room=o['room'],object_id=o['object_id'],file=p.relative_to(ROOT).as_posix(),sha256=hashlib.sha256(p.read_bytes()).hexdigest(),source_rectangle=[o['x'],o['y'],o['width'],o['height']],candidate_pixel_rect=rect,uv_top_left=[rect[0]/w,rect[1]/h,rect[2]/w,rect[3]/h],status='candidate only; verify actual letterbox border and source anchors before runtime use'))
 (OUT/'poc/object_viewports.json').write_text(json.dumps(views,indent=2)+'\n')
 print('Object UV candidates:',len(views))
if __name__=='__main__':build()
