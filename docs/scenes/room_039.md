# Room 039 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0039/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0039/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] unless (VAR_EGO <= 2) goto 0020;
[000A] Var[45] = VAR_EGO;
[000D] Var[45] += 8;
[0011] Var[14] = Var[45];
[0014] Var[14] += 171;
[0018] ActorOps(VAR_EGO,[Costume(Var[14])]);
[001C] ActorOps(VAR_EGO,[Sound(7)]);
[0020] loadSound(7)
[0023] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0039/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0039/ROv2/EXv2.txt); entry `0000`.

```text
[0000] unless (VAR_EGO <= 2) goto 0015;
[0006] Var[14] = VAR_EGO;
[0009] Var[14] += 171;
[000D] ActorOps(VAR_EGO,[Costume(Var[14])]);
[0011] ActorOps(VAR_EGO,[Sound(6)]);
[0015] stopObjectCode();
```

## OCv2_0593 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0039/ROv2/OCv2_0593.txt](../../zak/converted/scripts_flat/LFv2_0039/ROv2/OCv2_0593.txt); entry `001B`.

```text
[001B] doSentence(253,593,0,1);
[0022] Var[58] = 573;
[0026] Var[59] = 593;
[002A] loadRoomWithEgo(Var[58],171,255,255);
[002F] stopObjectCode();
```

## OCv2_0593 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0039/ROv2/OCv2_0593.txt](../../zak/converted/scripts_flat/LFv2_0039/ROv2/OCv2_0593.txt); entry `0030`.

```text
[0030] Var[255] = VAR_ROOM;
[0033] Var[14] = VAR_EGO;
[0036] Var[14] += 219;
[003A] Var[Var[14]] = 191;
[003E] Var[14] = VAR_EGO;
[0041] Var[14] += 222;
[0045] Var[Var[14]] = 142;
[0049] Var[14] = VAR_EGO;
[004C] Var[14] += 216;
[0050] Var[Var[14]] = 4;
[0054] stopObjectCode();
```

## OCv2_0594 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0039/ROv2/OCv2_0594.txt](../../zak/converted/scripts_flat/LFv2_0039/ROv2/OCv2_0594.txt); entry `0022`.

```text
[0022] loadRoomWithEgo(745,156,255,255);
[0028] stopObjectCode();
```

## OCv2_0595 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0039/ROv2/OCv2_0595.txt](../../zak/converted/scripts_flat/LFv2_0039/ROv2/OCv2_0595.txt); entry `0019`.

```text
[0019] doSentence(253,593,0,1);
[0020] Var[58] = 574;
[0024] Var[59] = 595;
[0028] loadRoomWithEgo(Var[58],169,255,255);
[002D] stopObjectCode();
```

## OCv2_0596 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0039/ROv2/OCv2_0596.txt](../../zak/converted/scripts_flat/LFv2_0039/ROv2/OCv2_0596.txt); entry `0022`.

```text
[0022] loadRoomWithEgo(745,157,255,255);
[0028] stopObjectCode();
```

## OCv2_0597 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0039/ROv2/OCv2_0597.txt](../../zak/converted/scripts_flat/LFv2_0039/ROv2/OCv2_0597.txt); entry `0022`.

```text
[0022] loadRoomWithEgo(745,158,255,255);
[0028] stopObjectCode();
```
