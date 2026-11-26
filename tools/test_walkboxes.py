import unittest
from export_walkboxes import decode,SOURCE
class WalkboxTests(unittest.TestCase):
 def test_known_single_box(self):
  raw=bytes([1,2,7,3,8,4,9,1,128,0,0]);r=decode(raw)
  self.assertEqual(r['boxes'][0]['pixel_coordinates'],[[24,4],[64,4],[72,14],[32,14]])
  self.assertEqual(r['next_hop'],[[0]])
 def test_empty(self):self.assertEqual(decode(b'\x00')['boxes'],[])
 def test_reject_truncated(self):
  with self.assertRaises(AssertionError):decode(bytes([1,2,7]))
 def test_all_original_matrices(self):
  count=0
  for room in range(1,59):
   r=decode((SOURCE/f'dump/LFv2_{room:04}/ROv2/BXv2').read_bytes());count+=r['box_count']
   self.assertEqual([r['next_hop'][i][i] for i in range(r['box_count'])],list(range(r['box_count'])))
  self.assertEqual(count,323)
if __name__=='__main__':unittest.main()
