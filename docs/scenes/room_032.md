# Room 032 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0032/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0032/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] unless (!getState04(558)) goto 000B;
[0009] Var[154]++;
[000B] unless (getState04(508)) goto 0015;
[0010] drawObject(514,9,9);
[0015] unless (getState04(509)) goto 001F;
[001A] drawObject(514,54,9);
[001F] unless (getState04(510)) goto 0029;
[0024] drawObject(514,99,9);
[0029] Var[66] = 508;
[002D] setObjectName(Var[66],"massive door");
[003C] unless (getState08(Var[66])) goto 004A;
[0040] setObjectName(Var[66],"doorway");
[004A] Var[66]++;
[004C] unless (Var[66] > 510) goto 002D;
[0052] unless (VAR_EGO <= 4) goto 006E;
[0058] Var[46] = VAR_EGO;
[005B] Var[46] += 8;
[005F] Var[14] = Var[46];
[0062] Var[14] += 171;
[0066] ActorOps(VAR_EGO,[Costume(Var[14])]);
[006A] ActorOps(VAR_EGO,[Sound(9)]);
[006E] loadSound(9)
[0071] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0032/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0032/ROv2/EXv2.txt); entry `0000`.

```text
[0000] clearState08(514);
[0003] Var[154] = Var[234];
[0006] unless (VAR_EGO <= 4) goto 001B;
[000C] Var[14] = VAR_EGO;
[000F] Var[14] += 171;
[0013] ActorOps(VAR_EGO,[Costume(Var[14])]);
[0017] ActorOps(VAR_EGO,[Sound(6)]);
[001B] stopObjectCode();
```

## OCv2_0507 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0032/ROv2/OCv2_0507.txt](../../zak/converted/scripts_flat/LFv2_0032/ROv2/OCv2_0507.txt); entry `0017`.

```text
[0017] loadRoomWithEgo(538,182,24,50);
[001D] stopObjectCode();
```

## OCv2_0508 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0032/ROv2/OCv2_0508.txt](../../zak/converted/scripts_flat/LFv2_0032/ROv2/OCv2_0508.txt); entry `0021`.

```text
[0021] loadRoomWithEgo(515,Var[45],65,5);
[0027] stopObjectCode();
```

## OCv2_0508 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0032/ROv2/OCv2_0508.txt](../../zak/converted/scripts_flat/LFv2_0032/ROv2/OCv2_0508.txt); entry `0028`.

```text
[0021] loadRoomWithEgo(515,Var[45],65,5);
[0027] stopObjectCode();
[0028] Var[45] = 189;
```

## OCv2_0509 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0032/ROv2/OCv2_0509.txt](../../zak/converted/scripts_flat/LFv2_0032/ROv2/OCv2_0509.txt); entry `001F`.

```text
[001F] Var[45] = 190;
[0023] doSentence(253,508,0,1);
[002A] stopObjectCode();
```

## OCv2_0510 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0032/ROv2/OCv2_0510.txt](../../zak/converted/scripts_flat/LFv2_0032/ROv2/OCv2_0510.txt); entry `001F`.

```text
[001F] Var[45] = 191;
[0023] doSentence(253,508,0,1);
[002A] stopObjectCode();
```

## OCv2_0513 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0032/ROv2/OCv2_0513.txt](../../zak/converted/scripts_flat/LFv2_0032/ROv2/OCv2_0513.txt); entry `0023`.

```text
[0023] startScript(68);
[0025] stopObjectCode();
```
