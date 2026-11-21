"""Validate generated asset integrity and write truthful coverage, never infer completion."""
from pathlib import Path
from PIL import Image
import json,hashlib,subprocess,shutil
from export_objects import ROOT,SOURCE
OUT=ROOT/'zak/converted'
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def main():
    baseline=json.loads((ROOT/'docs/evidence/source-baseline.json').read_text())
    changed=[p for p,h in baseline.items() if sha(ROOT/p)!=h]
    assert not changed,changed
    objects=json.loads((OUT/'images/objects/objects.json').read_text(encoding='utf-8'))
    for o in objects['objects']:
        assert o['code_matches_lfl'],(o['room'],o['object_id'])
        for key in ('png','zplane'):
            p=OUT/'images/objects'/o[key]
            assert sha(p)==o[key+'_sha256']
            with Image.open(p) as im: assert im.size==(o['width'],o['height']);im.verify()
    rooms=json.loads((OUT/'metadata/rooms.json').read_text(encoding='utf-8'))
    assert len(rooms)==58
    for r in rooms:
        assert (ROOT/r['background']).exists()
        for p in r['scripts']: assert (ROOT/p).is_file(),p
    refs=json.loads((OUT/'metadata/references.json').read_text(encoding='utf-8'));cache={}
    for r in refs:
        if r['script'] not in cache: cache[r['script']]=(ROOT/r['script']).read_text(encoding='utf-8').splitlines()
        assert cache[r['script']][r['line']-1]==r['instruction']
    event_coverage=json.loads((OUT/'metadata/event_coverage.json').read_text())
    assert event_coverage['scripts']==1011 and event_coverage['unresolved_edges']==0
    aliases=json.loads((OUT/'metadata/logical_room_map.json').read_text())
    assert len(aliases)==88 and all(a['raw_verified'] for a in aliases)
    assert next(a for a in aliases if a['logical_room']==131)['resource_room']==40
    assert all((ROOT/f'docs/scenes/room_{r:03}.md').exists() for r in range(1,59))
    for p in OUT.rglob('*.json'):
        if p.name!='delivery_manifest.json': json.loads(p.read_text(encoding='utf-8-sig'))
    from export_walkboxes import decode
    walkboxes=json.loads((OUT/'metadata/walkboxes.json').read_text())
    assert len(walkboxes)==58 and sum(r['box_count'] for r in walkboxes)==323
    for row in walkboxes:
        raw=ROOT/row['raw'];assert sha(raw)==row['sha256']
        for key,value in decode(raw.read_bytes()).items():assert row[key]==value
    inventory=json.loads((OUT/'metadata/inventory_catalog.json').read_text())
    for entry in inventory['objects']:
        for op in entry['ownership_operations']:
            assert (ROOT/op['source']).read_text(encoding='utf-8').splitlines()[op['line']-1]==op['instruction']
    for op in inventory['dynamic_operations']:
        assert op['association']=='unresolved dynamic object expression'
        assert (ROOT/op['source']).read_text(encoding='utf-8').splitlines()[op['line']-1]==op['instruction']
    tasks=[]
    for r in rooms:
        files=sorted((OUT/f"poc/backgrounds/room_{r['room']:03}").glob('*.png'));versions=[]
        for p in files:
            with Image.open(p) as im:
                w,h=im.size;im.verify()
            versions.append(dict(file=p.relative_to(ROOT).as_posix(),sha256=sha(p),width=w,height=h,aspect_ratio_matches=abs(w/h-r['width']/r['height'])<0.02,status='concept; placement and visual QA pending'))
        tasks.append(dict(id=f"room_{r['room']:03}",kind='background',reference=r['background'],reference_sha256=sha(ROOT/r['background']),source_width=r['width'],source_height=r['height'],status='concept_generated' if versions else 'pending',versions=versions))
    for o in objects['objects']:
        folder=OUT/f"poc/objects/room_{o['room']:03}/object_{o['object_id']:04}";files=sorted(folder.glob('*.png'));versions=[]
        for p in files:
            with Image.open(p) as im:
                w,h=im.size;has_alpha='A' in im.getbands();alpha=im.getextrema()[-1] if has_alpha else None
            with Image.open(p) as check: check.verify()
            versions.append(dict(file=p.relative_to(ROOT).as_posix(),sha256=sha(p),width=w,height=h,has_alpha=has_alpha,alpha_extrema=alpha,status='proposed state patch; visual geometry and placement require review'))
        ref=(OUT/'images/objects'/o['png']).relative_to(ROOT).as_posix()
        tasks.append(dict(id=f"room_{o['room']:03}_object_{o['object_id']:04}",kind='object',name=o['name'],reference=ref,reference_sha256=sha(ROOT/ref),source_rectangle=[o['x'],o['y'],o['width'],o['height']],classification='state patch; semantic classification required before cutout production',status='concept_generated' if versions else 'pending',versions=versions))
    (OUT/'poc/asset_queue.json').write_text(json.dumps(tasks,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    audio=[]
    for p in sorted((OUT/'poc/audio').rglob('*')):
        if p.suffix not in ('.wav','.mp3'):continue
        if shutil.which('ffmpeg'):
            result=subprocess.run(['ffmpeg','-v','error','-i',str(p),'-f','null','-'],capture_output=True)
            assert result.returncode==0,(str(p),result.stderr.decode(errors='replace'))
        audio.append(p.relative_to(ROOT).as_posix())
    report=dict(source_files_unchanged=len(baseline),objects=objects['summary'],backgrounds_original=58,
        references_checked=len(refs),event_coverage=event_coverage,logical_room_aliases=len(aliases),walkboxes=sum(r['box_count'] for r in json.loads((OUT/'metadata/walkboxes.json').read_text())),poc_backgrounds_generated=sum(t['kind']=='background' and bool(t['versions']) for t in tasks),
        poc_object_concepts_generated=sum(t['kind']=='object' and bool(t['versions']) for t in tasks),
        poc_backgrounds_pending=sum(t['kind']=='background' and not t['versions'] for t in tasks),
        poc_object_concepts_pending=sum(t['kind']=='object' and not t['versions'] for t in tasks),
        poc_approved_replacements=0,audio_files=audio,
        limitations=['Two original zplane boundaries require runtime comparison','AI concepts are not approved perspective/placement matches','COv2/SOv2 decoding and full runtime puzzle replay remain'])
    (OUT/'metadata/verification.json').write_text(json.dumps(report,indent=2)+'\n')
    # Snapshot every generated file except this manifest itself.
    manifest={p.relative_to(ROOT).as_posix():sha(p) for p in sorted(OUT.rglob('*')) if p.is_file() and p.name!='delivery_manifest.json'}
    (OUT/'delivery_manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
    print(json.dumps(report,indent=2))
if __name__=='__main__': main()
