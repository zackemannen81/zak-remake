"""Diagnostic comparison sheets and UV candidates; never rewrites generated art."""
from pathlib import Path
import json,math
from PIL import Image,ImageDraw
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'zak/converted'; QA=ROOT/'docs/evidence/poc-qa';QA.mkdir(exist_ok=True)
def build():
    rooms=json.loads((OUT/'metadata/rooms.json').read_text(encoding='utf-8'));views=[];pairs=[]
    for r in rooms:
        files=sorted((OUT/f"poc/backgrounds/room_{r['room']:03}").glob('*.png'))
        if not files:continue
        p=files[-1];im=Image.open(p).convert('RGB');w,h=im.size;rect=[0,0,w,h];expected=r['width']/r['height']
        if expected>3.1:
            # Near-black border detection is only a proposed viewport, never art mutation.
            pix=im.load();active=[y for y in range(h) if sum(max(pix[x,y])>12 for x in range(0,w,4))>w/4*.08]
            if active:rect=[0,(h-w/expected)/2,w,(h+w/expected)/2]
        measured=rect[2]/(rect[3]-rect[1]);views.append(dict(room=r['room'],file=p.relative_to(ROOT).as_posix(),sha256=__import__('hashlib').sha256(p.read_bytes()).hexdigest(),pixel_rect=rect,uv_top_left=[rect[0]/w,rect[1]/h,rect[2]/w,rect[3]/h],reference_aspect=expected,content_aspect=measured,relative_aspect_error=abs(measured/expected-1),status='candidate; borders and anchor geometry need review'))
        pairs.append((f"Room {r['room']:03}",ROOT/r['background'],p))
    (OUT/'poc/viewports.json').write_text(json.dumps(views,indent=2)+'\n')
    def sheets(pairs,prefix,n=12):
        for start in range(0,len(pairs),n):
            part=pairs[start:start+n];canvas=Image.new('RGB',(1200,len(part)*150),(25,28,33));draw=ImageDraw.Draw(canvas)
            for i,(label,src,dst) in enumerate(part):
                draw.text((5,i*150+3),label,fill='white')
                for x,p in [(0,src),(600,dst)]:
                    im=Image.open(p).convert('RGB');scale=min(590/im.width,125/im.height);im=im.resize((max(1,round(im.width*scale)),max(1,round(im.height*scale))),Image.Resampling.NEAREST if x==0 else Image.Resampling.LANCZOS);canvas.paste(im,(x+(590-im.width)//2,i*150+22+(125-im.height)//2))
            canvas.save(QA/f'{prefix}_{start:03}.jpg',quality=88)
    sheets(pairs,'backgrounds')
    objects=json.loads((OUT/'images/objects/objects.json').read_text(encoding='utf-8'))['objects'];pairs=[]
    for o in objects:
        files=sorted((OUT/f"poc/objects/room_{o['room']:03}/object_{o['object_id']:04}").glob('state_*.png'))
        if files:pairs.append((f"Room {o['room']:03} / object {o['object_id']:04} / {o['name']}",OUT/'images/objects'/o['png'],files[-1]))
    sheets(pairs,'objects')
    index=[dict(label=label,reference=src.relative_to(ROOT).as_posix(),file=dst.relative_to(ROOT).as_posix(),sha256=__import__('hashlib').sha256(dst.read_bytes()).hexdigest(),sheet=f'objects_{(i//12)*12:03}.jpg') for i,(label,src,dst) in enumerate(pairs)]
    (QA/'review_index.json').write_text(json.dumps(index,indent=2)+'\n')
    print({'backgrounds':len(views),'objects':len(pairs),'viewport_warnings':[v['room'] for v in views if v['relative_aspect_error']>.04]})
if __name__=='__main__':build()
