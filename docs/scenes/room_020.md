# Room 020 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0020/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0020/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] unless (VAR_EGO <= 2) goto 003B;
[000A] ActorOps(VAR_EGO,[Sound(7)]);
[000E] loadSound(7)
[0011] lockSound(7)
[0014] Var[66] = VAR_EGO;
[0017] Var[66] += 8;
[001B] Var[14] = Var[66];
[001E] Var[14] += 171;
[0022] ActorOps(VAR_EGO,[Costume(Var[14])]);
[0026] unless (VAR_EGO == 2) goto 003B;
[002C] ActorOps(2,[Color(3, 5)]);
[0031] ActorOps(2,[Color(11, 13)]);
[0036] ActorOps(2,[Color(15, 13)]);
[003B] unless (getState08(400)) goto 0050;
[0040] unless (getState04(388)) goto 004B;
[0045] setState08(389);
[004B] drawObject(389,77,10);
[0050] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0020/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0020/ROv2/EXv2.txt); entry `0000`.

```text
[0000] unless (VAR_EGO <= 2) goto 0018;
[0006] unlockSound(7)
[0009] Var[14] = VAR_EGO;
[000C] Var[14] += 171;
[0010] ActorOps(VAR_EGO,[Costume(Var[14])]);
[0014] ActorOps(VAR_EGO,[Sound(6)]);
[0018] stopObjectCode();
```

## OCv2_0386 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0020/ROv2/OCv2_0386.txt](../../zak/converted/scripts_flat/LFv2_0020/ROv2/OCv2_0386.txt); entry `001F`.

```text
[001F] loadRoomWithEgo(397,135,255,255);
[0025] stopObjectCode();
```

## OCv2_0387 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0020/ROv2/OCv2_0387.txt](../../zak/converted/scripts_flat/LFv2_0020/ROv2/OCv2_0387.txt); entry `0016`.

```text
[0016] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 001D;
[001A] setState04(388);
[001D] loadRoomWithEgo(398,139,255,255);
[0023] stopObjectCode();
```

## OCv2_0388 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0020/ROv2/OCv2_0388.txt](../../zak/converted/scripts_flat/LFv2_0020/ROv2/OCv2_0388.txt); entry `0016`.

```text
[0016] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 001D;
[001A] setState04(387);
[001D] loadRoomWithEgo(398,140,255,255);
[0023] stopObjectCode();
```

## OCv2_0389 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0020/ROv2/OCv2_0389.txt](../../zak/converted/scripts_flat/LFv2_0020/ROv2/OCv2_0389.txt); entry `0022`.

```text
[0022] loadRoomWithEgo(403,207,255,255);
[0028] stopObjectCode();
```

## OCv2_0390 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0020/ROv2/OCv2_0390.txt](../../zak/converted/scripts_flat/LFv2_0020/ROv2/OCv2_0390.txt); entry `0018`.

```text
[0018] loadRoomWithEgo(218,146,34,60);
[001E] stopObjectCode();
```
