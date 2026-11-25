
from pathlib import Path
import struct
from PIL import Image
root=Path('docs/scummvm-tools-2.9.0-win32-x86_64/zak/dump')
out=Path('src/content/costumeFrames');out.mkdir(exist_ok=True)
palette=[(0,0,0),(0,0,170),(0,170,0),(0,170,170),(170,0,0),(170,0,170),(170,85,0),(170,170,170),(85,85,85),(85,85,255),(85,255,85),(85,255,255),(255,85,85),(255,85,255),(255,255,85),(255,255,255)]
def export(n,region,anchor,anims):
 b=next(root.rglob(f'COv2_{n:04}')).read_bytes()
 u=lambda p:struct.unpack_from('<H',b,p)[0]
 assert b[5]&127==88 and u(0)==len(b)
 x,y,w,h=region
 for phase in range(4):
  limbs={}
  for a in anims+[22 if phase%2 else 18]:
   if a>b[4]:continue
   r=u(41+a*2)
   if not r:continue
   mask=u(r);r+=2
   for i in range(16):
    if not mask&(0x8000>>i):continue
    j=b[r];r+=1
    if j==255:limbs.pop(i,None);continue
    e=b[r];r+=1
    code=b[u(7)+j+phase%((e&127)+1)]&127
    if code<121:limbs[i]=code
  img=Image.new('RGBA',(w,h));mx=my=0
  for i,c in sorted(limbs.items()):
   off=u(u(9+i*2)+2*c);fw,fh,rx,ry,dx,dy=struct.unpack_from('<HHhhhh',b,off)
   assert 0<fw<=128 and 0<fh<=128
   px=Image.new('RGBA',(fw,fh));pos=off+12;k=0
   while k<fw*fh:
    val=b[pos];pos+=1;count=val&15;col=val>>4
    if not count:count=b[pos];pos+=1
    assert count and k+count<=fw*fh
    for q in range(k,k+count):
     if col: px.putpixel((q//fh,q%fh),(*palette[0 if col==b[6] else col],255))
    k+=count
   img.alpha_composite(px,(anchor[0]+rx-72+mx-x,anchor[1]+ry-100+my-y))
   mx+=dx;my-=dy
  assert img.getbbox(),(n,phase)
  img.save(out/f'costume_{n}_{phase}.png')
  print(n,phase,img.getbbox())
export(34,(120,32,64,32),(128,96),[6,10])
export(2,(120,32,64,32),(144,96),[6,10])
export(3,(120,32,64,32),(152,96),[6,10])
export(17,(168,0,104,40),(184,44),[6,10])
export(18,(160,64,56,56),(184,112),[2])

