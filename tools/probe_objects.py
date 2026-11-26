from pathlib import Path
import struct,sys
root=Path('docs/scummvm-tools-2.9.0-win32-x86_64/zak')
sys.path.insert(0,str(root/'converted/tools'))
from export_scumm_v2_backgrounds import decode_v2_bitmap
ok=0; errors=[]; matched=0
for room in range(1,59):
 b=bytes(x^255 for x in (root/f'{room:02}.LFL').read_bytes()); n=b[20]
 for i in range(n):
  a=struct.unpack_from('<H',b,28+2*i)[0]; c=struct.unpack_from('<H',b,28+2*n+2*i)[0]; oid=struct.unpack_from('<H',b,c+4)[0]
  raw=root/f'dump/LFv2_{room:04}/ROv2/OIv2_{oid:04}'
  if not raw.exists(): continue
  r=raw.read_bytes(); matched+= b[a:a+len(r)]==r
  w=b[c+9]*8; ht=b[c+13]&248
  try:
   pix,pos=decode_v2_bitmap(r,w,ht); count=0
   while count<w//8*ht:
    run=r[pos];pos+=1; k=run&127
    if not k: raise ValueError('zero mask run')
    pos+=1 if run&128 else k
    count+=k
   if pos!=len(r): raise ValueError(f'trailing {len(r)-pos}, mask {count-w//8*ht}')
   ok+=1
  except Exception as e: errors.append((room,oid,w,ht,str(e)))
print('matched',matched,'ok',ok,'errors',errors[:30], 'errorcount',len(errors))
