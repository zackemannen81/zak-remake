# Room 054 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0054/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0054/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] doSentence(253,754,0,1);
[000B] startSound(110);
[000D] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0054/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0054/ROv2/EXv2.txt); entry `0000`.

```text
[0000] stopSound(110);
[0002] stopObjectCode();
```

## OCv2_0754 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0054/ROv2/OCv2_0754.txt](../../zak/converted/scripts_flat/LFv2_0054/ROv2/OCv2_0754.txt); entry `0013`.

```text
[0013] delay(30);
[0017] drawObject(755,24,1);
[001C] drawObject(754,38,1);
[0021] delay(30);
[0025] drawObject(754,24,1);
[002A] drawObject(755,38,1);
```
