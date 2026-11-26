"""Export all 39 original v2 costumes and a browsable room/animation reference.
Format reference: ScummVM engines/scumm/costume.cpp (old bundle 0x58).
Raw commands/channels are lossless; preview loops omit sound/control scheduling.
"""
from pathlib import Path
import json, struct, hashlib, re, math
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/assets/reference';OUT.mkdir(exist_ok=True)
PAL=[(0,0,0),(0,0,170),(0,170,0),(0,170,170),(170,0,0),(170,0,170),(170,85,0),(170,170,170),(85,85,85),(85,85,255),(85,255,85),(85,255,255),(255,85,85),(255,85,255),(255,255,85),(255,255,255)]

def costume(path):
 b=path.read_bytes();u=lambda p:struct.unpack_from('<H',b,p)[0]
 assert u(0)==len(b) and b[5]&127==0x58
 ident=int(path.name.split('_')[1]);folder=OUT/f'costume_{ident:02}';folder.mkdir(exist_ok=True)
 channels={};cels={}
 for a in range(b[4]+1):
  r=u(41+2*a)
  if not r:continue
  mask=u(r);r+=2;limbs={}
  for limb in range(16):
   if not mask&(0x8000>>limb):continue
   j=b[r];r+=1
   if j==255:limbs[limb]=None;continue
   extra=b[r];r+=1;cmds=list(b[u(7)+j:u(7)+j+(extra&127)+1]);assert len(cmds)==(extra&127)+1
   limbs[limb]={'start':j,'loop':not bool(extra&128),'commands':cmds}
   for code in sorted(set(c&127 for c in cmds if (c&127)<121)):
    key=f'{limb}:{code}'
    if key in cels:continue
    off=u(u(9+2*limb)+2*code);w,h,rx,ry,dx,dy=struct.unpack_from('<HHhhhh',b,off)
    assert 0<w<=512 and 0<h<=512,(ident,a,limb,code,w,h)
    image=Image.new('RGBA',(w,h));pos=off+12;k=0
    while k<w*h:
     v=b[pos];pos+=1;n=v&15;col=v>>4
     if not n:n=b[pos];pos+=1
     assert n and k+n<=w*h,(ident,off,k,n)
     for q in range(k,k+n):
      if col:image.putpixel((q//h,q%h),(*PAL[0 if col==b[6] else col],255))
     k+=n
    file=f'cel_{limb:02}_{code:03}.png';image.save(folder/file)
    cels[key]={'image':image,'file':file,'x':rx-72,'y':ry-100,'dx':dx,'dy':dy,'width':w,'height':h,'offset':off}
  channels[a]=limbs
 animations=[]
 for a,limbs in channels.items():
  baseline={**channels.get(4+a%4,{}),**channels.get(8+a%4,{})}
  combined={**baseline,**limbs}
  length=max([len(v['commands']) for v in combined.values() if v]+[1]);frames=[];bounds=[]
  for phase in range(length):
   placed=[];mx=my=0
   for limb,v in sorted(combined.items()):
    if not v:continue
    codes=v['commands'];index=(phase%len(codes) if v['loop'] else min(phase,len(codes)-1)) if limb in limbs else 0
    # Control tokens retain the previous drawable cel in this reference preview.
    seq=codes[:index+1];code=next((c&127 for c in reversed(seq) if (c&127)<121),None)
    if code is None and (codes[index]&127) in [121,122] and baseline.get(limb):
     code=next((c&127 for c in baseline[limb]['commands'] if (c&127)<121),None)
    if code is None or (codes[index]&127)==123:continue
    cel=cels[f'{limb}:{code}'];x=cel['x']+mx;y=cel['y']+my
    placed.append((cel['image'],x,y));bounds.append((x,y,x+cel['width'],y+cel['height']));mx+=cel['dx'];my-=cel['dy']
   frames.append(placed)
  if not bounds:continue
  x0=min(p[0] for p in bounds);y0=min(p[1] for p in bounds);w=max(p[2] for p in bounds)-x0;h=max(p[3] for p in bounds)-y0
  assert 0<w<1024 and 0<h<1024
  sheet=Image.new('RGBA',(w*length,h))
  for i,frame in enumerate(frames):
   for image,x,y in frame:sheet.alpha_composite(image,(i*w+x-x0,y-y0))
  file=f'anim_{a:02}.png';sheet.save(folder/file)
  animations.append({'id':a,'file':f'costume_{ident:02}/{file}','frames':length,'width':w,'height':h,'x':x0,'y':y0})
 result={'id':ident,'source':path.relative_to(ROOT).as_posix(),'sha256':hashlib.sha256(b).hexdigest(),'channels':channels,'cels':{k:{kk:vv for kk,vv in v.items() if kk!='image'} for k,v in cels.items()},'animations':animations}
 (folder/'source.json').write_text(json.dumps(result,indent=2)+'\n',encoding='utf8')
 return result

def main():
 costumes=[costume(p) for p in sorted((ROOT/'docs/scummvm-tools-2.9.0-win32-x86_64/zak/dump').rglob('COv2_*'),key=lambda p:p.name)]
 scripts=list((ROOT/'zak/converted/scripts_flat').rglob('*.txt'))
 for c in costumes:
  c['references']=[p.relative_to(ROOT).as_posix() for p in scripts if re.search(r'Costume\('+str(c['id'])+r'\)',p.read_text(encoding='utf8'))]
 rooms=json.loads((ROOT/'zak/converted/metadata/rooms.json').read_text());labels={x['room']:x['label'] for x in json.loads((ROOT/'zak/converted/metadata/scene_labels.json').read_text())}
 aliases=json.loads((ROOT/'src/content/logical-rooms.json').read_text());entries=[]
 for r in rooms:
  n=r['room'];entries.append({'id':n,'name':labels.get(n,''),'width':r['width'],'height':r['height'],'aliases':[int(k) for k,v in aliases.items() if v==n],'background':f'../backgrounds/LFv2_{n:04}.png','objects':[{'id':o['object_id'],'name':o['name'].rstrip('@'),'file':f'../objects/room_{n:03}/object_{o["object_id"]:04}/frame_000.png'} for o in r['objects'] if (ROOT/f'public/assets/objects/room_{n:03}/object_{o["object_id"]:04}/frame_000.png').exists()]})
 r=next(r for r in rooms if r['room']==29)
 for paper in ['wallpaper','bill']:
  for mode in ['dream','mars']:
   im=Image.open(ROOT/'public/assets/backgrounds/LFv2_0029.png').convert('RGBA')
   if mode=='dream':
    for o in reversed(r['objects']):
     if o['object_id']>=485:im.alpha_composite(Image.open(ROOT/f'public/assets/objects/room_029/object_{o["object_id"]:04}/frame_000.png').convert('RGBA'),(o['x'],o['y']))
   if paper=='bill':
    im.putdata([(*PAL[7],p[3]) if p[:3]==PAL[6] else p for p in im.getdata()])
   im.save(OUT/f'map-{paper}-{mode}.png')
 data={'rooms':entries,'costumes':costumes,'previewLimit':'Raw channels and cels extracted; previews use init pose plus selected animation. Sound, stop/resume commands, actor palette overrides and script choreography need runtime integration.'}
 (OUT/'catalog.json').write_text(json.dumps(data,indent=2)+'\n',encoding='utf8')
 (ROOT/'src/content/costume-reference.json').write_text(json.dumps({c['id']:c['animations'] for c in costumes},indent=2)+'\n',encoding='utf8')
 print('rooms',len(entries),'costumes',len(costumes),'animations',sum(len(c['animations']) for c in costumes),'cels',sum(len(c['cels']) for c in costumes))
if __name__=='__main__':main()
