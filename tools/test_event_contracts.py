import json,re
from pathlib import Path
root=Path.cwd();meta=root/'zak/converted/metadata'
graphs=json.loads((meta/'instruction_graphs.json').read_text());events=json.loads((meta/'event_contracts.json').read_text());look={g['source']:g for g in graphs}
assert len(graphs)==1011 and len(events)==1475
assert not json.loads((meta/'graph_diagnostics.json').read_text())
for g in graphs:
    lines=(root/g['source']).read_text(encoding='utf-8').splitlines();offsets={n['offset'] for n in g['nodes']}
    assert len(offsets)==len(g['nodes']),g['source']
    for n in g['nodes']:
        assert n['instruction'] in lines[n['line']-1]
        assert all(e['target'] in offsets for e in n['successors'])
for c in events:
    offsets={n['offset'] for n in look[c['source']]['nodes']}
    assert c['entry'] in offsets,(c['source'],c['entry'])
    assert set(c['reachable_offsets'])<=offsets
case=next(c for c in events if c['room']==1 and c['tag']=='OCv2_0014' and c['verb']==6)
assert any('VAR_EGO != 1' in n['instruction'] for n in case['conditions'])
assert any('Var[167] = 56' in n['instruction'] for n in case['effects'])
assert any('startScript(150)' in n['instruction'] for n in case['effects'])
print('Graph source/line, unique offset, edge, entry, reachability and fishbowl branch checks passed.')

case=next(c for c in events if c["room"]==8 and c["tag"]=="OCv2_0208" and c["verb"]==253)
assert any("I UNDERSTAND" in n["instruction"] for n in case["effects"])
assert any("pickupObject(46)" in n["instruction"] for n in case["effects"])
print("Cutscene normal and override paths checked.")
