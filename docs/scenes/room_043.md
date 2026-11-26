# Room 043 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] RoomScroll(20,20);
[0008] setBoxFlags(4,128);
[000B] setBoxFlags(3,128);
[000E] unless (VAR_EGO == 6) goto 0017;
[0014] setBoxFlags(3,0);
[0017] unless (VAR_ROOM == 137) goto 0046;
[001D] clearState08(633);
[0020] clearState08(635);
[0023] setState08(634);
[0026] clearState08(632);
[0029] clearState02(632);
[002C] setState02(79);
[002F] setState08(79);
[0032] Var[45] = 637;
[0036] VAR_RESULT = getObjectOwner(80);
[003A] unless (VAR_RESULT == 15) goto 0046;
[0040] clearState02(80);
[0043] clearState08(80);
[0046] unless (VAR_ROOM == 136) goto 0075;
[004C] setState08(633);
[004F] setState08(635);
[0052] clearState08(634);
[0055] setState08(632);
[0058] setState02(632);
[005B] setState02(80);
[005E] setState08(80);
[0061] Var[45] = 636;
[0065] VAR_RESULT = getObjectOwner(79);
[0069] unless (VAR_RESULT == 15) goto 0075;
[006F] clearState02(79);
[0072] clearState08(79);
[0075] unless (VAR_ROOM == 138) goto 0082;
[007B] RoomScroll(60,60);
[007F] setBoxFlags(4,0);
[0082] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/EXv2.txt); entry `0000`.

```text
[0000] unless (VAR_EGO != 6) goto 000E;
[0006] setActorElevation(1,0);
[0009] setBitVar(1440,1,Var[234]);
[000E] stopObjectCode();
```

## OCv2_0079 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0079.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0079.txt); entry `001E`.

```text
[001E] startScript(136);
[0020] stopObjectCode();
```

## OCv2_0079 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0079.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0079.txt); entry `001B`.

```text
[001B] startScript(119);
[001D] stopObjectCode();
```

## OCv2_0080 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0080.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0080.txt); entry `0027`.

```text
[0027] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002C] stopObjectCode();
```

## OCv2_0080 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0080.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0080.txt); entry `001F`.

```text
[001F] doSentence(253,632,0,1);
[0026] stopObjectCode();
```

## OCv2_0631 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0631.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0631.txt); entry `001D`.

```text
[001D] unless (VAR_EGO == 1) goto 0036;
[0023] VAR_RESULT = getBitVar(1440,1);
[0028] unless (!VAR_RESULT) goto 0033;
[002C] doSentence(253,631,0,1);
[0036] loadRoomWithEgo(Var[45],138,255,255);
[003B] stopObjectCode();
```

## OCv2_0631 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0631.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0631.txt); entry `001D`.

```text
[001D] unless (VAR_EGO == 1) goto 0036;
[0023] VAR_RESULT = getBitVar(1440,1);
[0028] unless (!VAR_RESULT) goto 0033;
[002C] doSentence(253,631,0,1);
[0036] loadRoomWithEgo(Var[45],138,255,255);
[003B] stopObjectCode();
```

## OCv2_0631 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0631.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0631.txt); entry `003C`.

```text
[003C] setBitVar(1440,1,Var[235]);
[0041] setActorElevation(1,4);
[0044] breakHere();
[0045] setActorElevation(1,8);
[0048] breakHere();
[0049] setActorElevation(1,4);
[004C] breakHere();
[004D] setActorElevation(1,0);
[0050] startSound(6);
[0052] printEgo("I see a valley and a river far below.");
[0071] breakHere();
[0072] setBitVar(1440,1,Var[234]);
[0077] stopObjectCode();
```

## OCv2_0632 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0632.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0632.txt); entry `001B`.

```text
[001B] unless (VAR_EGO == 6) goto 0033;
[0021] printEgo("It's too heavy.");
[0033] startScript(119);
[0035] stopObjectCode();
```

## OCv2_0636 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0636.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0636.txt); entry `0016`.

```text
[0016] loadRoomWithEgo(631,136,255,255);
[001C] stopObjectCode();
```

## OCv2_0637 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0637.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0637.txt); entry `0016`.

```text
[0016] loadRoomWithEgo(631,137,255,255);
[001C] stopObjectCode();
```

## OCv2_0638 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0638.txt](../../zak/converted/scripts_flat/LFv2_0043/ROv2/OCv2_0638.txt); entry `0019`.

```text
[0019] loadRoomWithEgo(620,42,255,255);
[001F] stopObjectCode();
```

## SCv2_0136 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0043/SCv2_0136.txt](../../zak/converted/scripts_flat/LFv2_0043/SCv2_0136.txt); entry `0000`.

```text
[0000] unless (VAR_EGO == 2) goto 008C;
[0006] cutscene();
[0007] animateActor(VAR_EGO,246);
[000A] beginOverride();
[000E] waitForActor(VAR_EGO);
[0010] unless (!getState04(79)) goto 004F;
[0015] printEgo("Hm. This is difficult.\x03\x03One moment^\x03\x03It has `words of power` on it:");
[004E] waitForMessage();
[004F] setState04(79);
[0052] printEgo("`Gnik Sisi Vle`");
[0061] endCutscene();
[0062] unless (VAR_ROOM == 134) goto 0072;
[0068] doSentence(253,651,0,1);
[0072] delay(180);
[0076] print(2,"Nothing happened!");
[008C] printEgo("I can't read it. It's written in a\x01\x01bizarre language.");
[00BA] stopObjectCode();
```
