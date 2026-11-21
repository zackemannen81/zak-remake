"""Distinguish physical resources, logical room identities and resource preloads."""
import json,re
from export_objects import ROOT,SOURCE
OUT=ROOT/'zak/converted';META=OUT/'metadata'
def build():
    graphs=json.loads((META/'instruction_graphs.json').read_text(encoding='utf-8'));maps=[];transitions=[]
    for g in graphs:
        for n in g['nodes']:
            ins=n['instruction'];base=dict(source=g['source'],line=n['line'],offset=n['offset'],storage_room=g['room'])
            m=re.match(r'PseudoRoom\(([^)]+)\)',ins)
            if m:
                values=[int(x) for x in m[1].split(',')];data=(ROOT/g['raw']).read_bytes();at=n['offset']+4
                assert data[at]==0xCC and data[at+1]==values[0]
                raw_ids=[];pos=at+2
                while data[pos]:raw_ids.append(data[pos]);pos+=1
                assert raw_ids==[128+x for x in values[1:]]
                for logical in raw_ids:maps.append(dict(base,logical_room=logical,mapper_index=logical&127,resource_room=values[0],raw_verified=True))
    lookup={m['logical_room']:m['resource_room'] for m in maps};assert len(lookup)==len(maps)
    for g in graphs:
        for n in g['nodes']:
            ins=n['instruction'];m=re.match(r'(loadRoom|loadRoomWithEgo)\((.*)\)',ins)
            if not m:continue
            args=m[2].split(',');expr=args[0].strip() if m[1]=='loadRoom' else args[1].strip()
            target=int(expr) if expr.isdigit() else None
            op=int(n['opcode'],16);kind='resource_preload' if op in (0x0C,0x8C) else 'scene_transition'
            transitions.append(dict(source=g['source'],line=n['line'],offset=n['offset'],storage_room=g['room'],instruction=ins,kind=kind,target_expression=expr,logical_target=target,resource_target=(lookup.get(target) if target and target>=128 else target),origin='runtime current room; storage room is not necessarily origin'))
    for name,obj in [('logical_room_map',maps),('room_transitions',transitions)]: (META/(name+'.json')).write_text(json.dumps(obj,indent=2)+'\n')
    lines=['# Logical rooms and resource reuse','','[V] PseudoRoom arguments are byte-verified against SC108. descumm prints mapper indexes without bit 7; actual logical room IDs below include it. ScummVM resource.cpp ensureResourceLoaded maps IDs >127 through resourceMapper. Keeping these IDs distinct is required for game state.','', '| Logical room | Graphic resource | Init source / offset |','|---|---|---|']
    for m in sorted(maps,key=lambda x:x['logical_room']):lines.append(f"| {m['logical_room']} | {m['resource_room']} | SC108 / {m['offset']:04X} |")
    lines+=['','The 58 resource rooms plus these aliases are an identity inventory, not a count of independently reachable playable rooms. Room 0 is a special unloaded/transition state. Initialization mappings must be applied by the VM, not discarded after import.','', '## Transitions','`zak/converted/metadata/room_transitions.json` distinguishes resource preload opcodes 0C/8C from actual scene changes. Dynamic expressions remain unresolved; the source storage room must not be treated as a runtime origin.']
    (ROOT/'docs/ROOM_GRAPH.md').write_text('\n'.join(lines),encoding='utf-8')
    print(dict(logical_aliases=len(maps),references=len(transitions),scene_change_sites=sum(t['kind']=='scene_transition' for t in transitions)))
if __name__=='__main__':build()
