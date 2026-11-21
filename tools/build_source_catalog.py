"""Index original evidence; static references are not proven runtime reachability."""
from pathlib import Path
import json,re,subprocess,hashlib,struct
from export_objects import ROOT,SOURCE,sha
OUT=ROOT/'zak/converted'; META=OUT/'metadata'; META.mkdir(parents=True,exist_ok=True)
EXE=SOURCE.parent/'descumm.exe'

def build():
    index=json.loads((OUT/'images/objects/objects.json').read_text(encoding='utf-8'))
    scripts=[]
    # Preserve previously verified SCv2 disassemblies. Add missing object/entry/exit logic.
    for p in sorted((SOURCE/'dump').rglob('*')):
        if not p.is_file() or not (p.name.startswith('OCv2_') or p.name in ('ENv2','EXv2')): continue
        rel=p.relative_to(SOURCE/'dump'); dst=OUT/'scripts'/rel.with_suffix('.txt');dst.parent.mkdir(parents=True,exist_ok=True)
        payload=p.read_bytes()
        if p.name.startswith('OCv2_'):
            input_path=p
            # No verb entries means data-only name/header, not a decompiler failure.
            if len(payload)>15 and payload[15]==0:
                text='Events: none (object header has zero verb terminator)\n';rc=0
            else:
                result=subprocess.run([str(EXE),'-2',str(p)],capture_output=True)
                text=result.stdout.decode('cp1252',errors='replace');rc=result.returncode
        else:
            # descumm -2 expects a four-byte unblocked script header; raw EN/EX lack it.
            input_path=dst.with_suffix('.input');input_path.write_bytes(bytes(4)+payload)
            result=subprocess.run([str(EXE),'-2',str(input_path)],capture_output=True)
            text=result.stdout.decode('cp1252',errors='replace');rc=result.returncode
            input_path.unlink()
        dst.write_text('# Source: '+p.relative_to(ROOT).as_posix()+'\n'+text.replace('\r\n','\n'),encoding='utf-8')
        scripts.append(dict(path=dst.relative_to(ROOT).as_posix(),raw=p.relative_to(ROOT).as_posix(),sha256=sha(payload),room=int(rel.parts[0][-4:]),tag=p.name,exit_code=rc,status='review' if rc or re.search(r'ERROR|Unknown opcode|invalid opcode',text,re.I) else 'disassembled'))
    for p in sorted((SOURCE/'converted/scripts').rglob('SCv2_*.txt')):
        rel=p.relative_to(SOURCE/'converted/scripts')
        scripts.append(dict(path=p.relative_to(ROOT).as_posix(),room=int(rel.parts[0][-4:]),tag=p.stem,status='previously_disassembled',sha256=sha(p.read_bytes())))
    references=[];variables={};opcounts={}
    for s in scripts:
        for ln,line in enumerate((ROOT/s['path']).read_text(encoding='utf-8').splitlines(),1):
            m=re.match(r'\[([0-9A-F]+)\]',line)
            if not m: continue
            ref=dict(script=s['path'],line=ln,offset=m[1],room=s['room'],instruction=line)
            calls=re.findall(r'\b([A-Za-z][A-Za-z0-9_]*)\(([^;]*)',line)
            for name,args in calls: opcounts[name]=opcounts.get(name,0)+1
            if re.search(r'loadRoom|startScript|chainScript|doSentence|pickupObject|setOwner|setState|putActor|print|if \(|unless',line): references.append(ref)
            for var in set(re.findall(r'Var\[(\d+)\]|\b(VAR_[A-Z0-9_]+)\b',line)):
                key=var[0] or var[1];variables.setdefault(key,[]).append(ref)
    dialogue=[]
    candidates=list((SOURCE/'converted/dialogue').glob('*utf*'))
    for p in candidates:
        for ln,line in enumerate(p.read_text(encoding='utf-8-sig').splitlines(),1):
            m=re.match(r'\[(\d+):([^#]+)#(\d+)\](.*)',line)
            if m: dialogue.append(dict(id=f'dialogue_{ln:05}',room=int(m[1]),tag=m[2],resource_id=int(m[3]),text=m[4],source=p.relative_to(ROOT).as_posix(),line=ln,speaker='unresolved; resolve from print/printEgo runtime actor'))
    interactions=[]; transitions=[]; actors=[]; inventory=[]; animations=[]; actor_bindings=[]
    names={o['object_id']:o['name'] for o in index['room_objects'] if o['name']}
    for s in scripts:
        text=(ROOT/s['path']).read_text(encoding='utf-8')
        instructions=[dict(line=i,instruction=line) for i,line in enumerate(text.splitlines(),1) if re.match(r'\[[0-9A-F]+\]',line)]
        if s['tag'].startswith('OCv2_'):
            oid=int(s['tag'].split('_')[1])
            events=[dict(verb_hex=m[1],entry_offset=m[2]) for m in re.finditer(r'^\s+([0-9A-F]+) - ([0-9A-F]+)',text,re.M)]
            interactions.append(dict(room=s['room'],object_id=oid,name=names.get(oid,''),source=s['path'],events=events,instructions=instructions))
        for ref in instructions:
            if 'ActorOps(' in ref['instruction'] and ('Name(' in ref['instruction'] or 'Costume(' in ref['instruction']):
                actor_bindings.append(dict(ref,source=s['path'],room=s['room']))
        draws=[ref for ref in instructions if 'drawObject(' in ref['instruction']]
        if draws:
            animations.append(dict(source=s['path'],room=s['room'],draw_commands=draws,classification='ordered static draw sites; branch and timer semantics preserved in script, not inferred frame playback'))
        for ref in instructions:
            ref=dict(ref,source=s['path'],room=s['room'])
            if re.search(r'loadRoom|loadRoomWithEgo',ref['instruction']): transitions.append(ref)
            if re.search(r'pickupObject|setOwner',ref['instruction']): inventory.append(ref)
            if re.search(r'Actor|actor|VAR_EGO|VAR_TALK_ACTOR',ref['instruction']): actors.append(ref)
    for name,value in [('actor_bindings',actor_bindings),('animations',animations),('interactions',interactions),('transitions',transitions),('inventory_actions',inventory),('actor_actions',actors)]:
        (META/(name+'.json')).write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    rooms=[]
    for room in range(1,59):
        ro=SOURCE/f'dump/LFv2_{room:04}/ROv2'; w,h=struct.unpack('<HH',(ro/'HDv2').read_bytes())
        slots=[o for o in index['room_objects'] if o['room']==room]
        rooms.append(dict(room=room,width=w,height=h,background=(SOURCE/f'converted/images/backgrounds/LFv2_{room:04}.png').relative_to(ROOT).as_posix(),objects=slots,scripts=[s['path'] for s in scripts if s['room']==room],dialogue_ids=[d['id'] for d in dialogue if d['room']==room],walkboxes=(ro/'BXv2').relative_to(ROOT).as_posix(),name_status='numeric source identity; human scene label requires evidence'))
    for name,value in [('rooms',rooms),('scripts',scripts),('references',references),('variables',variables),('dialogue',dialogue),('opcodes',opcounts)]:
        (META/(name+'.json')).write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    lines=['# Source scene atlas','', 'Generated by tools/build_source_catalog.py. Verified resource identities; static code references do not prove reachability. Names come from original LFL object names.','']
    for r in rooms:
        lines += [f"## Room {r['room']:03}",f"Background: `{r['background']}` ({r['width']} Ã— {r['height']}).",f"{len(r['objects'])} table slots, {len(r['scripts'])} disassemblies, {len(r['dialogue_ids'])} dialogue/name records.",'','| Slot | Object ID | Name | Rectangle x,y,w,h | Parent slot/state |','|---|---|---|---|---|']
        for o in r['objects']: lines.append(f"| {o['slot']} | {o['object_id']} | {o['name'].replace('|','/')} | {o['x']},{o['y']},{o['width']},{o['height']} | {o['parent_slot']}/{o['parent_state']} |")
        lines+=['','Scripts: '+', '.join('`'+s+'`' for s in r['scripts']),'']
    (ROOT/'docs/SCENE_ATLAS.md').write_text('\n'.join(lines),encoding='utf-8')
    summary=dict(rooms=len(rooms),scripts=len(scripts),script_reviews=[s['path'] for s in scripts if s['status']=='review'],dialogue_records=len(dialogue),variable_keys=len(variables),static_references=len(references))
    (META/'coverage.json').write_text(json.dumps(summary,indent=2)+'\n');print(json.dumps(summary,indent=2))
if __name__=='__main__': build()
