# Room 022 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0022/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0022/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] unless (VAR_EGO <= 2) goto 0023;
[000A] Var[66] = VAR_EGO;
[000D] Var[66] += 4;
[0011] Var[14] = Var[66];
[0014] Var[14] += 171;
[0018] ActorOps(VAR_EGO,[Costume(Var[14])]);
[001C] ActorOps(VAR_EGO,[Sound(7)]);
[0020] loadSound(7)
[0023] setBoxFlags(2,128);
[0026] setState08(402);
[0029] unless (VAR_ROOM == 139) goto 0049;
[002F] Var[45] = 387;
[0033] setState08(401);
[0036] unless (getState04(387)) goto 0046;
[003B] clearState08(402);
[003E] unless (getState08(400)) goto 0046;
[0043] setBoxFlags(2,0);
[0049] Var[45] = 388;
[004D] clearState08(401);
[0050] unless (getState04(388)) goto 0058;
[0058] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0022/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0022/ROv2/EXv2.txt); entry `0000`.

```text
[0000] unless (VAR_EGO <= 2) goto 0015;
[0006] Var[14] = VAR_EGO;
[0009] Var[14] += 171;
[000D] ActorOps(VAR_EGO,[Costume(Var[14])]);
[0011] ActorOps(VAR_EGO,[Sound(6)]);
[0015] stopObjectCode();
```

## OCv2_0398 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0022/ROv2/OCv2_0398.txt](../../zak/converted/scripts_flat/LFv2_0022/ROv2/OCv2_0398.txt); entry `001D`.

```text
[001D] loadRoomWithEgo(Var[45],20,255,255);
[0022] stopObjectCode();
```

## OCv2_0399 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0022/ROv2/OCv2_0399.txt](../../zak/converted/scripts_flat/LFv2_0022/ROv2/OCv2_0399.txt); entry `0025`.

```text
[0025] unless (VAR_ACTIVE_OBJECT2 == 25) goto 0030;
[002B] startScript(28);
[0030] startScript(3);
[0032] stopObjectCode();
```

## OCv2_0399 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0022/ROv2/OCv2_0399.txt](../../zak/converted/scripts_flat/LFv2_0022/ROv2/OCv2_0399.txt); entry `0033`.

```text
[0033] startScript(68);
[0035] stopObjectCode();
```

## OCv2_0400 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0022/ROv2/OCv2_0400.txt](../../zak/converted/scripts_flat/LFv2_0022/ROv2/OCv2_0400.txt); entry `0024`.

```text
[0024] printEgo("It's already opened.");
[0038] stopObjectCode();
```

## OCv2_0400 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0022/ROv2/OCv2_0400.txt](../../zak/converted/scripts_flat/LFv2_0022/ROv2/OCv2_0400.txt); entry `0039`.

```text
[0039] loadRoomWithEgo(403,207,255,255);
[003F] stopObjectCode();
```
