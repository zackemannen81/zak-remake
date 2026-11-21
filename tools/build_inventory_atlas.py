"""Build an evidence-indexed inventory atlas without guessing dynamic owners."""
import json,re
from collections import defaultdict
from export_objects import ROOT
META=ROOT/'zak/converted/metadata'
def build():
 actions=json.loads((META/'inventory_actions.json').read_text());interactions=json.loads((META/'interactions.json').read_text());by_id=defaultdict(list);evidence=defaultdict(list);dynamic=[]
 for row in interactions:by_id[row['object_id']].append(row)
 for a in actions:
  m=re.search(r'(pickupObject|setOwnerOf)\(([^,)]+)',a['instruction'])
  if not m:continue
  arg=m[2].strip();ident=int(arg) if arg.isdigit() else None;kind='literal object ID' if ident is not None else 'unresolved dynamic object expression'
  if ident is None and arg=='VAR_ACTIVE_OBJECT1':
   owner=re.search(r'OCv2_(\d+)\.txt$',a['source'])
   if owner:ident=int(owner[1]);kind='contextual object program; runtime active object must still be checked'
  item=dict(a,object_expression=arg,association=kind)
  if ident is None:dynamic.append(item)
  else:evidence[ident].append(item)
 rows=[];lines=['# Inventory and ownership atlas','','[V] Literal pickup/owner operations are indexed below. [H] VAR_ACTIVE_OBJECT1 inside an object program is a contextual association, not proof of runtime identity. Owner changes include hiding/removal and do not by themselves prove player inventory membership. Dynamic/global operations remain explicit in the JSON. Names and event tables are original metadata; use conditions and effects are in the linked per-room contracts.','']
 for oid,ops in sorted(evidence.items()):
  programs=by_id[oid];names=sorted(set(p['name'] for p in programs if p['name']));row=dict(object_id=oid,names=names,programs=[dict(room=p['room'],source=p['source'],events=p['events']) for p in programs],ownership_operations=ops);rows.append(row)
  lines += [f"## Object {oid}: {' / '.join(names) or '(unnamed)'}",'']
  for p in programs:
   verbs=', '.join(str(int(e['verb_hex'],16)) for e in p['events']) or 'none'
   lines.append(f"- Resource room {p['room']}; verbs {verbs}; [program](../{p['source']}), [conditions/effects](scenes/room_{p['room']:03}.md).")
  for op in ops:lines.append(f"- [{op['source'].split('/')[-1]}:{op['line']}](../{op['source']}): `{op['instruction']}` — {op['association']}.")
  lines.append('')
 (META/'inventory_catalog.json').write_text(json.dumps(dict(objects=rows,dynamic_operations=dynamic),ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 (ROOT/'docs/INVENTORY_ATLAS.md').write_text('\n'.join(lines),encoding='utf-8')
 print(dict(indexed_objects=len(rows),dynamic_operations=len(dynamic)))
if __name__=='__main__':build()
