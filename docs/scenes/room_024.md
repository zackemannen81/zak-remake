# Room 024 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0024/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0024/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(Var[234],0,0);
[0004] clearState08(420);
[0007] setState02(420);
[000A] setBoxFlags(9,128);
[000D] clearState08(416);
[0010] unless (VAR_ROOM == 155) goto 0059;
[0016] doSentence(253,419,0,1);
[001D] Var[46] = 25;
[0021] Var[47] = 422;
[0025] Var[48] = 206;
[0029] Var[49] = 408;
[002D] setState02(413);
[0030] clearState08(414);
[0033] setState02(414);
[0036] setBoxFlags(6,0);
[0039] clearState08(415);
[003C] unless (getState04(416)) goto 0048;
[0041] doSentence(250,417,0,1);
[0048] unless (getState08(423)) goto 0056;
[004D] setState08(420);
[0050] clearState02(420);
[0053] setBoxFlags(9,0);
[0059] Var[154]++;
[005B] loadSound(67)
[005E] lockSound(67)
[0061] RoomColor(12,14);
[0065] RoomColor(6,12);
[0069] RoomColor(4,6);
[006D] RoomColor(1,4);
[0071] Var[46] = 188;
[0075] Var[47] = 311;
[0079] Var[48] = 187;
[007D] Var[49] = 408;
[0081] clearState02(413);
[0084] setState08(414);
[0087] clearState02(414);
[008A] setBoxFlags(6,64);
[008D] unless (getState08(415)) goto 00A5;
[0092] setState08(420);
[0095] clearState02(420);
[0098] setBoxFlags(9,0);
[009B] setState08(415);
[009E] doSentence(253,415,0,1);
[00A5] unless (!getState08(420)) goto 00C6;
[00AA] Var[66] = 1;
[00AE] VAR_RESULT = getActorWalkBox(Var[66]);
[00B1] unless (VAR_RESULT == 9) goto 00BE;
[00B7] putActor(Var[66],6,46);
[00BB] animateActor(Var[66],250);
[00BE] Var[66]++;
[00C0] unless (Var[66] > 4) goto 00AE;
[00C6] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0024/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0024/ROv2/EXv2.txt); entry `0000`.

```text
[0000] unlockSound(67)
[0003] clearState08(417);
[0006] clearState08(418);
[0009] clearState08(419);
[000C] Var[154] = Var[234];
[000F] stopObjectCode();
```

## OCv2_0413 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0413.txt](../../zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0413.txt); entry `001E`.

```text
[001E] unless (VAR_ROOM == 155) goto 0036;
[0024] printEgo("I can't move it.");
[0036] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 0070;
[003A] setState04(VAR_ACTIVE_OBJECT1);
[003C] printEgo("Nothing happens when I push here,\x01\x01maybe if I push its feet.");
[006F] waitForMessage();
[0070] doSentence(9,414,0,0);
[0077] stopObjectCode();
```

## OCv2_0414 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0414.txt](../../zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0414.txt); entry `0023`.

```text
[0023] unless (!getState08(415)) goto 0046;
[0028] startSound(67);
[002A] setState08(415);
[002D] setState08(420);
[0030] clearState02(420);
[0033] setBoxFlags(9,0);
[0036] setState08(311);
[0039] clearState02(311);
[003C] Var[202] = VAR_EGO;
[003F] doSentence(253,415,0,1);
[0046] stopObjectCode();
```

## OCv2_0415 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0415.txt](../../zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0415.txt); entry `0013`.

```text
[0013] breakHere();
[0014] VAR_RESULT = getDist(Var[202],414);
[0019] unless (VAR_RESULT > 0) goto 0013;
[001F] startSound(67);
[0021] clearState08(415);
[0024] clearState08(420);
[0027] setState02(420);
[002A] setBoxFlags(9,128);
[002D] clearState08(311);
[0030] setState02(311);
[0033] stopObjectCode();
```

## OCv2_0416 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0416.txt](../../zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0416.txt); entry `0018`.

```text
[0018] unless (VAR_ACTIVE_OBJECT2 == 49) goto 006D;
[001E] unless (VAR_ROOM == 155) goto 0048;
[0024] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 0034;
[0028] setState04(VAR_ACTIVE_OBJECT1);
[002A] doSentence(250,417,0,1);
[0034] printEgo("It's already lit.");
[0048] printEgo("There's not enough oxygen to light it!");
[006D] unless (VAR_ACTIVE_OBJECT2 == 48) goto 0092;
[0073] doSentence(254,417,0,1);
[007A] clearState08(417);
[007D] clearState08(418);
[0080] clearState08(419);
[0083] clearState08(416);
[0086] doSentence(253,419,0,1);
[008D] clearState04(VAR_ACTIVE_OBJECT1);
[0092] startScript(3);
[0094] stopObjectCode();
```

## OCv2_0417 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0417.txt](../../zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0417.txt); entry `0013`.

```text
[0013] doSentence(253,418,0,1);
[001A] setState08(416);
[001D] Var[45] = getRandomNr(2);
[0020] Var[45] += 417;
[0024] drawObject(Var[45],255,255);
[0028] breakHere();
```

## OCv2_0418 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0418.txt](../../zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0418.txt); entry `0013`.

```text
[0013] RoomColor(4,4);
[0017] RoomColor(14,14);
[001B] RoomColor(12,12);
[001F] RoomColor(6,6);
[0023] lights(11,0,0);
[0027] stopObjectCode();
```

## OCv2_0419 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0419.txt](../../zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0419.txt); entry `0013`.

```text
[0013] RoomColor(0,4);
[0017] RoomColor(7,14);
[001B] RoomColor(7,12);
[001F] RoomColor(8,6);
[0023] lights(Var[234],0,0);
[0027] stopObjectCode();
```

## OCv2_0420 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0420.txt](../../zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0420.txt); entry `0019`.

```text
[0019] unless (Var[46] == 25) goto 0027;
[001F] loadRoomWithEgo(Var[47],Var[46],2,60);
[0027] loadRoomWithEgo(Var[47],Var[46],42,60);
[002C] stopObjectCode();
```

## OCv2_0421 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0421.txt](../../zak/converted/scripts_flat/LFv2_0024/ROv2/OCv2_0421.txt); entry `0017`.

```text
[0017] loadRoomWithEgo(Var[49],Var[48],255,255);
[001C] stopObjectCode();
```
