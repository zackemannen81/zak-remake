"""Reproducible SCUMM v2 OI exporter. Original sources are read only.
Reference: ScummVM v2.9.0 object.cpp resetRoomObjects/resetRoomObject,
gfx.cpp GdiV2::prepareDrawBitmap. Z-plane is actor occlusion, NOT alpha.
"""
from pathlib import Path
import argparse, hashlib, json, struct, sys
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
SOURCE=ROOT/'docs/scummvm-tools-2.9.0-win32-x86_64/zak'
sys.path.insert(0,str(SOURCE/'converted/tools'))
from export_scumm_v2_backgrounds import decode_v2_bitmap,EGA_PALETTE

def sha(b): return hashlib.sha256(b).hexdigest()
def u16(b,p): return struct.unpack_from('<H',b,p)[0]
def mask_decode(raw,pos,width,height):
    """Read only samples used by renderer, including partial terminal runs."""
    count=width//8*height; out=[]
    while len(out)<count:
        run=raw[pos]; pos+=1; length=run&127
        if not length: raise ValueError('zero mask run')
        take=min(length,count-len(out))
        if run&128:
            value=raw[pos];pos+=1;out.extend([value]*take)
        else:
            if pos+take>len(raw): raise EOFError('truncated literal mask')
            out.extend(raw[pos:pos+take]);pos+=take
    pixels=bytearray(width*height)
    for i,value in enumerate(out):
        x=(i//height)*8;y=i%height
        for bit in range(8): pixels[y*width+x+bit]=255 if value&(128>>bit) else 0
    return pixels,pos

def records(source=SOURCE):
    for room in range(1,59):
        path=source/f'{room:02}.LFL'; encoded=path.read_bytes(); b=bytes(v^255 for v in encoded)
        size=u16(b,0); assert 28<=size<=len(b)
        b=b[:size]
        n=b[20]; assert 28+4*n<=size
        for slot in range(n):
            a=u16(b,28+slot*2);c=u16(b,28+2*n+slot*2)
            assert c+15<=size and 0<=a<size
            length=u16(b,c); assert c+length<=size
            oid=u16(b,c+4); name_offset=b[c+14]
            name=b[c+name_offset:c+length].split(bytes([0]))[0].decode('cp1252',errors='replace') if name_offset<length else ''
            yield dict(room=room,slot=slot+1,object_id=oid,image_offset=a,code_offset=c,
                code_size=length,width=b[c+9]*8,height=b[c+13]&248,x=b[c+7]*8,y=(b[c+8]&127)*8,
                parent_slot=b[c+10],parent_state=8 if b[c+8]&128 else 0,
                walk_x=b[c+11]*8,walk_y=(b[c+12]&31)*8,direction=b[c+13]&7,
                name=name,lfl=path.relative_to(ROOT).as_posix(),lfl_sha256=sha(encoded)),b

def run(output):
    output=output.resolve()
    for protected in (SOURCE/'dump',ROOT/'docs/gamefiles',SOURCE/'converted/images/backgrounds'):
        if output==protected.resolve() or protected.resolve() in output.parents:
            raise ValueError('output overlaps protected originals')
    output.mkdir(parents=True,exist_ok=True)
    rows=[]; covered=set(); slots=[]
    for row,b in records():
        room=row['room'];oid=row['object_id']
        raw=SOURCE/f'dump/LFv2_{room:04}/ROv2/OIv2_{oid:04}'
        slots.append(dict(row,has_dump_image=raw.exists()))
        if not raw.exists(): continue
        key=raw.relative_to(ROOT).as_posix()
        if key in covered: continue
        data=raw.read_bytes();a=row['image_offset']
        if b[a:a+len(data)]!=data:
            slots[-1]['dump_image_matches_offset']=False
            continue
        slots[-1]['dump_image_matches_offset']=True
        covered.add(key)
        code=SOURCE/f'dump/LFv2_{room:04}/ROv2/OCv2_{oid:04}'
        code_data=code.read_bytes();c=row['code_offset']
        row.update(raw_code=code.relative_to(ROOT).as_posix(),raw_code_sha256=sha(code_data),
            code_matches_lfl=code_data==b[c:c+len(code_data)],
            raw_image=key,raw_sha256=sha(data),raw_bytes=len(data),frames=0,
            alpha_policy='opaque original rectangle; z-plane is not transparency')
        try:
            w=row['width'];h=row['height']
            pixels,used=decode_v2_bitmap(data,w,h)
            mask,absolute_end=mask_decode(b,a+used,w,h)
            end=absolute_end-a
            row['mask_source']='intact LFL, matching ScummVM room pointer'
            row['bytes_beyond_split_block']=max(0,end-len(data))
            row['unused_split_bytes']=max(0,len(data)-end)
            row['mask_status']='verified' if end in (len(data),len(data)+1) else 'requires_runtime_review'
            if row['mask_status']!='verified':
                row['warning']='Original dimensions and renderer traversal preserved; unusual split boundary, not repaired or guessed.'
            folder=output/f'room_{room:03}'/f'object_{oid:04}';folder.mkdir(parents=True,exist_ok=True)
            img=Image.frombytes('P',(w,h),bytes(pixels));img.putpalette(EGA_PALETTE)
            rgba=img.convert('RGBA');rgba.save(folder/'frame_000.png',optimize=False)
            Image.frombytes('L',(w,h),bytes(mask)).save(folder/'zplane_000.png',optimize=False)
            with Image.open(folder/'frame_000.png') as check:
                assert check.tobytes()==rgba.tobytes() and check.getextrema()[3]==(255,255)
            row.update(status='exported',frames=1,color_bytes=used,mask_bytes=end-used,
                png=(folder/'frame_000.png').relative_to(output).as_posix(),
                png_sha256=sha((folder/'frame_000.png').read_bytes()),
                zplane=(folder/'zplane_000.png').relative_to(output).as_posix(),
                zplane_sha256=sha((folder/'zplane_000.png').read_bytes()))
        except (ValueError,EOFError,IndexError) as e:
            row.update(status='unresolved',reason=f'{type(e).__name__}: {e}')
        rows.append(row)
    expected={p.relative_to(ROOT).as_posix() for p in (SOURCE/'dump').rglob('OIv2_*')}
    assert covered==expected,(len(covered),len(expected))
    for slot in slots:
        slot['image_offset_aliases']=[other['slot'] for other in slots if other['room']==slot['room'] and other['image_offset']==slot['image_offset'] and other['slot']!=slot['slot']]
        slot['zero_area']=slot['width']==0 or slot['height']==0
    summary=dict(identified=len(rows),exported=sum(r['status']=='exported' for r in rows),
        mask_review=[{'room':r['room'],'object_id':r['object_id']} for r in rows if r.get('mask_status')=='requires_runtime_review'],
        unresolved=[{'room':r['room'],'object_id':r['object_id'],'reason':r['reason']} for r in rows if r['status']!='exported'],
        room_table_records=len(slots),image_less_table_records=sum(not r['has_dump_image'] for r in slots),
        frames_note='One image per old-bundle OI; scripted state changes may switch object IDs. No invented animation frames.')
    (output/'objects.json').write_text(json.dumps(dict(summary=summary,objects=rows,room_objects=slots),ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(json.dumps(summary,indent=2)); return summary
if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--output',type=Path,default=ROOT/'zak/converted/images/objects')
    run(p.parse_args().output)
