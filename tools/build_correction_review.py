"""Review the latest corrected versions in compact source/output contact sheets."""
from pathlib import Path
from PIL import Image,ImageDraw
import json,hashlib
from export_objects import ROOT
OUT=ROOT/'zak/converted';QA=ROOT/'docs/evidence/poc-qa'
def build():
 pairs=[]
 for o in json.loads((OUT/'images/objects/objects.json').read_text())['objects']:
  files=sorted((OUT/f"poc/objects/room_{o['room']:03}/object_{o['object_id']:04}").glob('state_*.png'))
  if not files:continue
  p=files[-1]
  if int(p.stem.split('v')[-1])<4:continue
  pairs.append((o,OUT/'images/objects'/o['png'],p))
 index=[]
 for start in range(0,len(pairs),12):
  part=pairs[start:start+12];canvas=Image.new('RGB',(1200,len(part)*150),(25,28,33));draw=ImageDraw.Draw(canvas);sheet=f'corrections_{start:03}.jpg'
  for i,(o,src,dst) in enumerate(part):
   draw.text((5,i*150+3),f"Room {o['room']:03} / {o['object_id']:04} / {dst.name}",fill='white')
   for x,p in [(0,src),(600,dst)]:
    with Image.open(p) as original:im=original.convert('RGB')
    scale=min(590/im.width,125/im.height);im=im.resize((max(1,round(im.width*scale)),max(1,round(im.height*scale))),Image.Resampling.NEAREST if x==0 else Image.Resampling.LANCZOS);canvas.paste(im,(x+(590-im.width)//2,i*150+22+(125-im.height)//2))
   index.append(dict(room=o['room'],object_id=o['object_id'],file=dst.relative_to(ROOT).as_posix(),sha256=hashlib.sha256(dst.read_bytes()).hexdigest(),sheet=sheet))
  canvas.save(QA/sheet,quality=88)
 (QA/'correction_review_index.json').write_text(json.dumps(index,indent=2)+'\n');print('Correction comparisons:',len(index))
if __name__=='__main__':build()
