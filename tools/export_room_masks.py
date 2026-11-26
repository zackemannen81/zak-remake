from export_objects import SOURCE, ROOT, decode_v2_bitmap, mask_decode
from pathlib import Path
from PIL import Image
import struct
out=ROOT/'public/assets/room-masks';out.mkdir(exist_ok=True)
for n in range(1,59):
 r=SOURCE/f'dump/LFv2_{n:04}/ROv2'
 w,h=struct.unpack_from('<HH',(r/'HDv2').read_bytes())
 b=(r/'IMv2').read_bytes()
 try:
  _,pos=decode_v2_bitmap(b,w,h)
  whole=bytes(v^255 for v in (SOURCE/f'{n:02}.LFL').read_bytes())
  offset=whole.find(b)
  assert offset>=0
  mask,end=mask_decode(whole,offset+pos,w,h)
  Image.frombytes('L',(w,h),bytes(mask)).save(out/f'LFv2_{n:04}.png')
  print(n,pos,end,len(b))
 except Exception as e: print('SKIP',n,str(e))
