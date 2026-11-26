"""Index generated art with original-reference hashes and preserved prompt provenance."""
import json,re,hashlib
from pathlib import Path
from export_objects import ROOT
POC=ROOT/'zak/converted/poc'
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def build():
 logs=[]
 def collect(obj,source):
  if isinstance(obj,list):
   for x in obj:collect(x,source)
  elif isinstance(obj,dict):
   if 'prompt' in obj:logs.append((obj,source))
   else:
    for x in obj.values():collect(x,source)
 for p in POC.glob('generation_log*.json'):collect(json.loads(p.read_text(encoding='utf-8-sig')),p)
 for p in POC.rglob('request_*.json'):collect(json.loads(p.read_text(encoding='utf-8-sig')),p)
 hashes={}
 for log,p in logs:
  hint=log.get('hint','');m=re.search(r'as (C:\\[^\r\n]+?\.png) by default',hint)
  generated=log.get('generated_source') or (m[1] if m else None)
  if generated and Path(generated).is_file():hashes.setdefault(sha(Path(generated)),[]).append((log,p))
 rows=[]
 for kind in ('backgrounds','objects'):
  for p in sorted((POC/kind).rglob('*.png')):
   digest=sha(p);matches=hashes.get(digest,[]);refs=[]
   for log,source in matches:
    for ref in log.get('references',[]):
     rp=Path(ref)
     if rp.is_file():refs.append(dict(file=str(rp),sha256=sha(rp)))
   rows.append(dict(file=p.relative_to(ROOT).as_posix(),sha256=digest,prompt_logs=sorted(set(source.relative_to(ROOT).as_posix() for log,source in matches)),reference_files=refs,status='prompt provenance recovered' if matches else 'prompt provenance unavailable; image preserved'))
 (POC/'provenance.json').write_text(json.dumps(rows,indent=2)+'\n')
 print(dict(images=len(rows),with_prompt=sum(bool(r['prompt_logs']) for r in rows),without_prompt=[r['file'] for r in rows if not r['prompt_logs']]))
if __name__=='__main__':build()
