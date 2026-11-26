"""Deterministic proposed UI/mechanical POC effects, not decoded SOv2 audio."""
import math,wave,struct,json,hashlib,random
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def main():
    out=ROOT/'zak/converted/poc/audio/sfx';out.mkdir(parents=True,exist_ok=True);manifest=[]
    for name,duration,freq in [('ui_select',0.09,880),('drawer_click',0.16,180),('switch_click',0.07,330)]:
        rate=44100;rng=random.Random(name);samples=[]
        for i in range(int(rate*duration)):
            t=i/rate;env=math.exp(-8*t/duration)*min(1,t/0.002)
            value=(0.35*math.sin(2*math.pi*freq*t)+0.15*rng.uniform(-1,1))*env
            samples.append(struct.pack('<h',int(value*32767)))
        p=out/(name+'.wav')
        with wave.open(str(p),'wb') as w:w.setnchannels(1);w.setsampwidth(2);w.setframerate(rate);w.writeframes(b''.join(samples))
        with wave.open(str(p)) as w: assert w.getnframes()==len(samples) and w.getnchannels()==1
        manifest.append(dict(id=name,file=p.relative_to(ROOT).as_posix(),status='proposed POC effect; no original sound-ID mapping',sha256=hashlib.sha256(p.read_bytes()).hexdigest(),rate=rate,frames=len(samples)))
    (out/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n');print('Generated and verified 3 mono PCM effects')
if __name__=='__main__':main()
