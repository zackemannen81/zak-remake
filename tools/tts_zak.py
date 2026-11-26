"""Resumable Zak POC speech. Does not infer speakers from storage room IDs."""
import argparse,asyncio,hashlib,json,re,shutil,subprocess
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def clean(text):
    if re.search(r'\\[0-9]{3}',text): raise ValueError('control codes require reviewed normalization')
    return text.rstrip('@^').strip()
async def main(args):
    import edge_tts
    rows=json.loads((ROOT/'zak/converted/metadata/dialogue.json').read_text(encoding='utf-8'))
    out=ROOT/'zak/converted/poc/audio/voice';out.mkdir(parents=True,exist_ok=True)
    manifest=[]; rendered=0
    for r in rows:
        if r['tag']=='ONv2': continue
        if args.limit and rendered>=args.limit: break
        item=dict(id=r['id'],source=r['source'],line=r['line'],voice=args.voice,speaker='unresolved',role='temporary POC voice; not canonical casting')
        try:
            text=clean(r['text'])
            if not text: continue
            digest=hashlib.sha256((args.voice+'\0'+text).encode()).hexdigest()
            path=out/(r['id']+'_'+digest[:12]+'.mp3')
            if not path.exists():
                temp=path.with_suffix('.partial.mp3')
                await edge_tts.Communicate(text,args.voice).save(str(temp))
                if not temp.stat().st_size: raise ValueError('empty TTS response')
                temp.replace(path)
            item.update(status='generated',text=text,file=path.relative_to(ROOT).as_posix(),sha256=hashlib.sha256(path.read_bytes()).hexdigest(),request_sha256=digest)
            rendered+=1
        except Exception as e:
            item.update(status='pending',reason=f'{type(e).__name__}: {e}')
        manifest.append(item)
        (out/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
        # Network/provider failure does not cause an uncontrolled full-batch retry.
        if item['status']=='pending' and not item['reason'].startswith('ValueError: control'): break
    print(json.dumps(dict(generated=rendered,records=len(manifest))))
if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--limit',type=int,default=1);p.add_argument('--voice',default='en-US-AriaNeural')
    asyncio.run(main(p.parse_args()))
