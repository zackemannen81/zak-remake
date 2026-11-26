import unittest,json,tempfile,hashlib,struct
from pathlib import Path
from PIL import Image
from export_objects import ROOT,SOURCE,records,run,mask_decode,decode_v2_bitmap,EGA_PALETTE

class PipelineTests(unittest.TestCase):
    def test_source_baseline(self):
        baseline=json.loads((ROOT/'docs/evidence/source-baseline.json').read_text())
        for path,digest in baseline.items():
            self.assertEqual(hashlib.sha256((ROOT/path).read_bytes()).hexdigest(),digest,path)
    def test_color_literal_bleed_and_extended(self):
        pixels,end=decode_v2_bitmap(bytes([0x21,0x82,0x02,4]),4,2)
        self.assertEqual(list(pixels),[1,1,2,2,1,1,2,2]);self.assertEqual(end,4)
        with self.assertRaises(EOFError): decode_v2_bitmap(bytes([0x01]),8,8)
    def test_zplane_bit_order_and_terminal_run(self):
        p,end=mask_decode(bytes([0x84,0x81]),0,8,2)
        self.assertEqual(list(p),[255,0,0,0,0,0,0,255]*2);self.assertEqual(end,2)
        with self.assertRaises(EOFError): mask_decode(bytes([2,1]),0,8,2)
        with self.assertRaises(ValueError): mask_decode(bytes([0]),0,8,2)
    def test_all_table_dimensions_and_pixel_values(self):
        manifest=json.loads((ROOT/'zak/converted/images/objects/objects.json').read_text(encoding='utf-8'))
        self.assertEqual(len(manifest['objects']),578)
        table={(r['room'],r['slot']):(r,b) for r,b in records()}
        for row in manifest['objects']:
            original,b=table[(row['room'],row['slot'])]
            self.assertEqual((row['width'],row['height']),(original['width'],original['height']))
            # Independent expansion in column order, then transpose to row order.
            raw=(ROOT/row['raw_image']).read_bytes();h=row['height'];w=row['width'];col=[];pos=0
            while len(col)<w*h:
                code=raw[pos];pos+=1;n=(code&127) if code&128 else code>>4
                if n==0: n=raw[pos];pos+=1
                self.assertGreater(n,0)
                for _ in range(min(n,w*h-len(col))):
                    col.append((col[len(col)-h] if len(col)>=h else 0) if code&128 else code&15)
            with Image.open(ROOT/'zak/converted/images/objects'/row['png']) as img:
                self.assertEqual(img.mode,'RGBA'); self.assertEqual(img.size,(w,h))
                expected=bytes(channel for y in range(h) for x in range(w) for channel in (*EGA_PALETTE[col[x*h+y]*3:col[x*h+y]*3+3],255))
                self.assertEqual(img.tobytes(),expected)
    def test_reproducibility(self):
        with tempfile.TemporaryDirectory(prefix='zak-test-') as d:
            out=Path(d);run(out)
            expected=ROOT/'zak/converted/images/objects'
            for p in out.rglob('*'):
                if p.is_file(): self.assertEqual(p.read_bytes(),(expected/p.relative_to(out)).read_bytes(),str(p))
    def test_protected_output(self):
        with self.assertRaises(ValueError): run(SOURCE/'dump')
if __name__=='__main__': unittest.main(verbosity=2)
