"""Decode SCUMM v2 BXv2 geometry and next-hop matrix, without modifying sources."""
import json,struct
from export_objects import ROOT,SOURCE,sha

def decode(data):
 n=data[0];end=1+8*n
 assert len(data)==end+n+n*n,(n,len(data),end+n+n*n)
 boxes=[]
 for i in range(n):
  uy,ly,ulx,urx,llx,lrx,mask,flags=data[1+8*i:9+8*i]
  points=[[ulx,uy],[urx,uy],[lrx,ly],[llx,ly]]
  boxes.append(dict(index=i,actor_coordinates=points,pixel_coordinates=[[x*8,y*2] for x,y in points],mask=mask,flags=flags))
 offsets=list(data[end:end+n]);matrix=[]
 for off in offsets:
  assert off+n<=n*n
  matrix.append(list(struct.unpack(f'{n}b',data[end+n+off:end+n+off+n])))
 assert all(-1<=v<n for row in matrix for v in row)
 rebuilt=bytes([n])+b''.join(bytes([b['actor_coordinates'][0][1],b['actor_coordinates'][2][1],b['actor_coordinates'][0][0],b['actor_coordinates'][1][0],b['actor_coordinates'][3][0],b['actor_coordinates'][2][0],b['mask'],b['flags']]) for b in boxes)+bytes(offsets)+data[end+n:]
 assert rebuilt==data
 return dict(box_count=n,boxes=boxes,row_offsets=offsets,next_hop=matrix)

def build():
 result=[]
 for room in range(1,59):
  p=SOURCE/f'dump/LFv2_{room:04}/ROv2/BXv2';data=p.read_bytes()
  result.append(dict(room=room,raw=p.relative_to(ROOT).as_posix(),sha256=sha(data),**decode(data)))
 out=ROOT/'zak/converted/metadata/walkboxes.json';out.write_text(json.dumps(result,indent=2)+'\n')
 print(dict(rooms=len(result),boxes=sum(r['box_count'] for r in result),byte_roundtrip=True))
if __name__=='__main__':build()

