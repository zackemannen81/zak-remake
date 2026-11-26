# Room 034 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0034/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0034/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] Var[154] = Var[234];
[0007] unless (!getState04(558)) goto 000E;
[000C] Var[154]++;
[000E] doSentence(253,539,0,1);
[0015] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0034/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0034/ROv2/EXv2.txt); entry `0000`.

```text
[0000] Var[154] = Var[234];
[0003] stopObjectCode();
```

## OCv2_0539 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0034/ROv2/OCv2_0539.txt](../../zak/converted/scripts_flat/LFv2_0034/ROv2/OCv2_0539.txt); entry `0018`.

```text
[0018] printEgo("It looks like a map of ancient Earth!");
[0038] stopObjectCode();
```

## OCv2_0539 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0034/ROv2/OCv2_0539.txt](../../zak/converted/scripts_flat/LFv2_0034/ROv2/OCv2_0539.txt); entry `0039`.

```text
[0039] unless (VAR_EGO == 1) goto 006E;
[003F] unless (!getState04(539)) goto 006E;
[0044] delay(120);
[0048] walkActorToObject(1,539);
[004C] waitForActor(1);
[004E] print(1,"Hey! It's the map from my dream!");
[006B] setState04(539);
[006E] stopObjectCode();
```

## OCv2_0540 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0034/ROv2/OCv2_0540.txt](../../zak/converted/scripts_flat/LFv2_0034/ROv2/OCv2_0540.txt); entry `001A`.

```text
[001A] printEgo("It looks like the Egyptian Sphinx!");
[0039] stopObjectCode();
```

## OCv2_0541 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0034/ROv2/OCv2_0541.txt](../../zak/converted/scripts_flat/LFv2_0034/ROv2/OCv2_0541.txt); entry `0023`.

```text
[0023] startScript(68);
[0025] stopObjectCode();
```

## OCv2_0542 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0034/ROv2/OCv2_0542.txt](../../zak/converted/scripts_flat/LFv2_0034/ROv2/OCv2_0542.txt); entry `0017`.

```text
[0017] loadRoomWithEgo(564,205,255,255);
[001D] stopObjectCode();
```
