"""Build static control flow and per-event contracts; not a runtime proof."""
import json,re,subprocess
from export_objects import ROOT,SOURCE,sha
OUT=ROOT/'zak/converted'; META=OUT/'metadata'; EXE=SOURCE.parent/'descumm.exe'
FLAGS=['-2','-i','-e','-f','-w','-b']
def build():
    scripts=json.loads((META/'scripts.json').read_text(encoding='utf-8'))
    graphs=[]; contracts=[]; problems=[]; exe_hash=sha(EXE.read_bytes())
    for s in scripts:
        raw=ROOT/s['raw'] if 'raw' in s else SOURCE/'dump'/(ROOT/s['path']).relative_to(SOURCE/'converted/scripts').with_suffix('')
        data=raw.read_bytes(); dst=OUT/'scripts_flat'/raw.relative_to(SOURCE/'dump').with_suffix('.txt');dst.parent.mkdir(parents=True,exist_ok=True)
        fingerprint=sha(data+(exe_hash+' '.join(FLAGS)).encode());stamp=dst.with_suffix('.sha256')
        if not (dst.exists() and stamp.exists() and stamp.read_text()==fingerprint+':'+sha(dst.read_bytes())):
            if raw.name.startswith('OCv2_') and data[15]==0: text='Events: none\n'
            else:
                wrapped=raw.name in ('ENv2','EXv2'); inp=dst.with_suffix('.input') if wrapped else raw
                if wrapped:inp.write_bytes(bytes(4)+data)
                try:
                    result=subprocess.run([str(EXE),*FLAGS,str(inp)],capture_output=True,check=True)
                    text=result.stdout.decode('cp1252').replace('\r\n','\n')
                finally:
                    if wrapped: inp.unlink(missing_ok=True)
            dst.write_text(text,encoding='utf-8');stamp.write_text(fingerprint+':'+sha(dst.read_bytes()))
        text=dst.read_text(encoding='utf-8');nodes=[]
        for ln,line in enumerate(text.splitlines(),1):
            m=re.match(r'\[([0-9A-F]+)\]\s+\(([^)]+)\)\s*(.*)',line)
            if m:nodes.append(dict(offset=int(m[1],16),opcode=m[2],instruction=m[3],line=ln))
        by_offset={n['offset']:n for n in nodes};source=dst.relative_to(ROOT).as_posix()
        for i,n in enumerate(nodes):
            ins=n['instruction'];target=re.search(r'goto\s+([0-9A-F]+)',ins);n['successors']=[]
            if target:n['successors'].append(dict(target=int(target[1],16),kind='condition_false' if ins.startswith('unless') else 'jump'))
            terminal=bool(re.match(r'(?:stopObjectCode|chainScript|stopScript\(0\))',ins));unconditional=bool(re.match(r'goto\b',ins))
            if i+1<len(nodes) and not terminal and not unconditional:n['successors'].append(dict(target=nodes[i+1]['offset'],kind='condition_true' if ins.startswith('unless') else 'next'))
            if ins.startswith('beginOverride(') and i+2<len(nodes) and nodes[i+1]['instruction'].startswith('goto '):
                n['successors'].append(dict(target=nodes[i+2]['offset'],kind='normal_skip_override_jump'))
                n['successors'][0]['kind']='override_handler'
            for e in n['successors']:
                if e['target'] not in by_offset:problems.append(dict(source=source,offset=n['offset'],missing_target=e['target']))
        graphs.append(dict(source=source,raw=raw.relative_to(ROOT).as_posix(),room=s['room'],tag=s['tag'],nodes=nodes))
        entries=[(int(m[1],16),int(m[2],16)) for m in re.finditer(r'^\s+([0-9A-F]+) - ([0-9A-F]+)',text,re.M)]
        if not raw.name.startswith('OCv2_') and nodes:entries=[(None,nodes[0]['offset'])]
        for verb,entry in entries:
            seen=set();todo=[entry]
            while todo:
                at=todo.pop()
                if at in seen or at not in by_offset:continue
                seen.add(at);todo.extend(e['target'] for e in by_offset[at]['successors'])
            reachable=[n for n in nodes if n['offset'] in seen]
            contracts.append(dict(room=s['room'],tag=s['tag'],verb=verb,entry=entry,source=source,reachable_offsets=sorted(seen),conditions=[n for n in reachable if n['instruction'].startswith('unless')],effects=[n for n in reachable if not re.match(r'(?:unless|goto)\b',n['instruction'])],interpretation='Static possible paths. Scheduler, override, calls and values require runtime execution.'))
    for name,obj in [('instruction_graphs',graphs),('event_contracts',contracts),('graph_diagnostics',problems)]:
        (META/(name+'.json')).write_text(json.dumps(obj,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    scene_dir=ROOT/'docs/scenes';scene_dir.mkdir(exist_ok=True)
    for room in range(1,59):
        lines=[f'# Room {room:03} — verb and script contracts','','Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.','']
        for c in contracts:
            if c['room']!=room:continue
            lines += [f"## {c['tag']} / verb {c['verb'] if c['verb'] is not None else 'entry'}",f"Source: [{c['source']}](../../{c['source']}); entry `{c['entry']:04X}`.",'','```text']
            lines += [f"[{n['offset']:04X}] {n['instruction']}" for n in sorted(c['conditions']+c['effects'],key=lambda n:n['offset'])];lines+=['```','']
        (scene_dir/f'room_{room:03}.md').write_text(re.sub(r'[\x00-\x08\x0b-\x1f]',lambda m:'\\x'+format(ord(m[0]),'02x'),'\n'.join(lines)),encoding='utf-8')
    summary=dict(scripts=len(graphs),instructions=sum(len(g['nodes']) for g in graphs),events=len(contracts),unresolved_edges=len(problems))
    (META/'event_coverage.json').write_text(json.dumps(summary,indent=2)+'\n');print(json.dumps(summary))
if __name__=='__main__':build()
