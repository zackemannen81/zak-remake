# Room 002 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] doSentence(253,131,0,1);
[000B] unless (getState08(129)) goto 0019;
[0010] startSound(17);
[0012] unless (getState08(126)) goto 0019;
[0017] startScript(22);
[0019] unless (getState04(122)) goto 0020;
[001E] startScript(21);
[0020] loadScript(29)
[0023] VAR_RESULT = getObjectOwner(20);
[0027] unless (VAR_RESULT != 15) goto 0034;
[002D] doSentence(250,127,0,1);
[0034] unless (getState04(21)) goto 0040;
[0039] drawObject(115,255,255);
[003E] startScript(102);
[0040] VAR_RESULT = getBitVar(1546,0);
[0045] unless (!VAR_RESULT) goto 004B;
[0049] startScript(126);
[004B] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/EXv2.txt); entry `0000`.

```text
[0000] stopSound(17);
[0002] stopScript(21);
[0004] stopScript(22);
[0006] stopSound(18);
[0008] clearState08(119);
[000B] doSentence(253,128,0,1);
[0012] unless (getState04(21)) goto 001E;
[0017] doSentence(253,118,0,1);
[001E] stopObjectCode();
```

## OCv2_0020 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0020.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0020.txt); entry `0033`.

```text
[0033] stopObjectCode();
```

## OCv2_0020 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0020.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0020.txt); entry `0023`.

```text
[0023] doSentence(VAR_ACTIVE_VERB,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0028] stopObjectCode();
```

## OCv2_0020 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0020.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0020.txt); entry `0023`.

```text
[0023] doSentence(VAR_ACTIVE_VERB,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0028] stopObjectCode();
```

## OCv2_0020 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0020.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0020.txt); entry `0029`.

```text
[0029] pickupObject(VAR_ACTIVE_OBJECT1);
[002B] doSentence(250,127,0,1);
[0032] stopObjectCode();
```

## OCv2_0021 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0021.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0021.txt); entry `0026`.

```text
[0026] startScript(23);
[0028] stopObjectCode();
```

## OCv2_0021 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0021.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0021.txt); entry `0023`.

```text
[0023] pickupObject(VAR_ACTIVE_OBJECT1);
[0025] stopObjectCode();
```

## OCv2_0022 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0022.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0022.txt); entry `001B`.

```text
[001B] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0020] stopObjectCode();
```

## OCv2_0022 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0022.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0022.txt); entry `0018`.

```text
[0018] pickupObject(VAR_ACTIVE_OBJECT1);
[001A] stopObjectCode();
```

## OCv2_0023 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0023.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0023.txt); entry `0028`.

```text
[0028] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002D] stopObjectCode();
```

## OCv2_0023 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0023.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0023.txt); entry `0021`.

```text
[0021] pickupObject(VAR_ACTIVE_OBJECT1);
[0023] clearState08(VAR_ACTIVE_OBJECT1);
[0025] clearState04(VAR_ACTIVE_OBJECT1);
[0027] stopObjectCode();
```

## OCv2_0024 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0024.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0024.txt); entry `0021`.

```text
[0021] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0026] stopObjectCode();
```

## OCv2_0024 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0024.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0024.txt); entry `001E`.

```text
[001E] pickupObject(VAR_ACTIVE_OBJECT1);
[0020] stopObjectCode();
```

## OCv2_0025 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0025.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0025.txt); entry `002B`.

```text
[002B] unless (VAR_ACTIVE_OBJECT2 != 17) goto 003F;
[0031] unless (VAR_ACTIVE_OBJECT2 != 15) goto 003F;
[0037] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[003F] startScript(61);
[0041] stopObjectCode();
```

## OCv2_0025 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0025.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0025.txt); entry `0023`.

```text
[0023] doSentence(253,117,0,1);
[002A] stopObjectCode();
```

## OCv2_0026 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0026.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0026.txt); entry `0029`.

```text
[0029] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002E] stopObjectCode();
```

## OCv2_0026 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0026.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0026.txt); entry `0026`.

```text
[0026] pickupObject(VAR_ACTIVE_OBJECT1);
[0028] stopObjectCode();
```

## OCv2_0111 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0111.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0111.txt); entry `001B`.

```text
[001B] startScript(10);
[001D] setState08(84);
[0020] stopObjectCode();
```

## OCv2_0111 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0111.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0111.txt); entry `0021`.

```text
[0021] startScript(11);
[0023] clearState08(84);
[0026] stopObjectCode();
```

## OCv2_0111 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0111.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0111.txt); entry `0027`.

```text
[0027] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0031;
[002B] loadRoomWithEgo(84,1,255,255);
[0031] stopObjectCode();
```

## OCv2_0112 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0112.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0112.txt); entry `001B`.

```text
[001B] startScript(10);
[001D] stopObjectCode();
```

## OCv2_0112 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0112.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0112.txt); entry `001E`.

```text
[001E] startScript(11);
[0020] stopObjectCode();
```

## OCv2_0112 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0112.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0112.txt); entry `0021`.

```text
[0021] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0040;
[0025] unless (VAR_EGO == 1) goto 0030;
[002B] startScript(29);
[0030] VAR_RESULT = getActorRoom(1);
[0033] unless (VAR_RESULT != VAR_ROOM) goto 003A;
[0038] clearState08(VAR_ACTIVE_OBJECT1);
[003A] loadRoomWithEgo(134,3,41,53);
[0040] stopObjectCode();
```

## OCv2_0113 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0113.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0113.txt); entry `0017`.

```text
[0017] VAR_RESULT = getObjectOwner(21);
[001B] unless (VAR_RESULT == VAR_EGO) goto 0040;
[0020] printEgo("I have to use the remote control.");
[0040] printEgo("It doesn't have any controls on it.");
[005F] stopObjectCode();
```

## OCv2_0113 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0113.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0113.txt); entry `0017`.

```text
[0017] VAR_RESULT = getObjectOwner(21);
[001B] unless (VAR_RESULT == VAR_EGO) goto 0040;
[0020] printEgo("I have to use the remote control.");
[0040] printEgo("It doesn't have any controls on it.");
[005F] stopObjectCode();
```

## OCv2_0114 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0114.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0114.txt); entry `0013`.

```text
[0013] Var[66] = getRandomNr(5);
[0016] Var[66] += 2;
[001A] Var[47] = Var[234];
[001D] animateActor(10,12);
[0020] breakHere();
[0021] breakHere();
[0022] animateActor(10,16);
[0025] breakHere();
[0026] breakHere();
[0027] Var[47]++;
[0029] unless (Var[47] > Var[66]) goto 001D;
[002E] delay(30);
```

## OCv2_0115 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0115.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0115.txt); entry `0013`.

```text
[0013] ActorOps(10,[Costume(34)]);
[0017] ActorOps(10,[TalkColor(15)]);
[001B] drawObject(115,255,255);
[0020] putActorInRoom(10,2);
[0023] putActor(10,16,48);
[0027] animateActor(10,250);
[002A] stopObjectCode();
```

## OCv2_0117 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0117.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0117.txt); entry `0022`.

```text
[0022] pickupObject(VAR_ACTIVE_OBJECT1);
[0024] clearState02(126);
[0027] setObjectName(25,"yellow crayon");
[0038] delay(120);
[003C] printEgo("Hmm. Only one yellow crayon left.");
[005A] stopObjectCode();
```

## OCv2_0118 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0118.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0118.txt); entry `008E`.

```text
[008E] clearState08(VAR_ACTIVE_OBJECT1);
[0090] doSentence(253,131,0,1);
[0097] clearState08(20);
[009A] clearState02(20);
[009D] unless (getState04(21)) goto 00AC;
[00A2] clearState04(21);
[00A5] doSentence(253,118,0,1);
[00AC] stopObjectCode();
```

## OCv2_0118 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0118.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0118.txt); entry `0023`.

```text
[0023] unless (VAR_ACTIVE_OBJECT2 == 20) goto 0039;
[0029] setState08(VAR_ACTIVE_OBJECT1);
[002B] walkActorTo(VAR_EGO,27,57);
[002F] doSentence(253,131,0,1);
[0039] unless (VAR_ACTIVE_OBJECT2 == 24) goto 0042;
[0042] unless (classOfIs(VAR_ACTIVE_OBJECT2,16)) goto 008B;
[0047] unless (VAR_EGO == 1) goto 0071;
[004D] startSound(29);
[004F] delay(30);
[0053] animateActor(1,246);
[0056] printEgo("YOWL!!!");
[005F] unless (getState04(122)) goto 006E;
[0064] breakHere();
[0065] VAR_RESULT = isSoundRunning(29);
[0068] unless (!VAR_RESULT) goto 0064;
[006C] startScript(21);
[0071] animateActor(2,246);
[0074] printEgo("That would be stupid!");
[008B] startScript(3);
[008D] stopObjectCode();
```

## OCv2_0118 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0118.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0118.txt); entry `00AD`.

```text
[00AD] stopScript(102);
[00AF] print(255,"");
[00B2] putActorInRoom(10,0);
[00B5] putActorInRoom(11,0);
[00B8] clearState08(133);
[00BB] clearState08(120);
[00BE] clearState08(114);
[00C1] clearState08(115);
[00C4] clearState08(116);
[00C7] stopObjectCode();
```

## OCv2_0119 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0119.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0119.txt); entry `0033`.

```text
[0033] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0040;
[0037] setState08(VAR_ACTIVE_OBJECT1);
[0039] doSentence(250,119,0,1);
[0040] stopObjectCode();
```

## OCv2_0119 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0119.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0119.txt); entry `0029`.

```text
[0029] clearState08(VAR_ACTIVE_OBJECT1);
[002B] doSentence(254,119,0,1);
[0032] stopObjectCode();
```

## OCv2_0119 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0119.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0119.txt); entry `0041`.

```text
[0029] clearState08(VAR_ACTIVE_OBJECT1);
[002B] doSentence(254,119,0,1);
[0032] stopObjectCode();
[0037] setState08(VAR_ACTIVE_OBJECT1);
[0039] doSentence(250,119,0,1);
[0040] stopObjectCode();
[0041] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 004B;
```

## OCv2_0119 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0119.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0119.txt); entry `0041`.

```text
[0029] clearState08(VAR_ACTIVE_OBJECT1);
[002B] doSentence(254,119,0,1);
[0032] stopObjectCode();
[0037] setState08(VAR_ACTIVE_OBJECT1);
[0039] doSentence(250,119,0,1);
[0040] stopObjectCode();
[0041] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 004B;
```

## OCv2_0119 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0119.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0119.txt); entry `0033`.

```text
[0033] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0040;
[0037] setState08(VAR_ACTIVE_OBJECT1);
[0039] doSentence(250,119,0,1);
[0040] stopObjectCode();
```

## OCv2_0119 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0119.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0119.txt); entry `004F`.

```text
[004F] breakHere();
[0050] VAR_RESULT = getDist(VAR_EGO,119);
[0055] unless (VAR_RESULT > 0) goto 004F;
[005B] clearState08(119);
[005E] stopObjectCode();
```

## OCv2_0121 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0121.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0121.txt); entry `0020`.

```text
[0020] startScript(10);
[0022] stopObjectCode();
```

## OCv2_0121 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0121.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0121.txt); entry `0023`.

```text
[0023] startScript(11);
[0025] stopObjectCode();
```

## OCv2_0121 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0121.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0121.txt); entry `0023`.

```text
[0023] startScript(11);
[0025] stopObjectCode();
```

## OCv2_0121 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0121.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0121.txt); entry `0020`.

```text
[0020] startScript(10);
[0022] stopObjectCode();
```

## OCv2_0122 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0122.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0122.txt); entry `001B`.

```text
[001B] setState04(122);
[001E] startScript(21);
[0020] stopObjectCode();
```

## OCv2_0122 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0122.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0122.txt); entry `0021`.

```text
[0021] clearState04(122);
[0024] stopScript(21);
[0026] stopSound(18);
[0028] stopObjectCode();
```

## OCv2_0123 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0123.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0123.txt); entry `001B`.

```text
[001B] doSentence(VAR_ACTIVE_VERB,129,0,0);
[0022] stopObjectCode();
```

## OCv2_0123 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0123.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0123.txt); entry `001B`.

```text
[001B] doSentence(VAR_ACTIVE_VERB,129,0,0);
[0022] stopObjectCode();
```

## OCv2_0124 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0124.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0124.txt); entry `001E`.

```text
[001E] printEgo("I don't feel like cooking.");
[0036] stopObjectCode();
```

## OCv2_0124 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0124.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0124.txt); entry `001E`.

```text
[001E] printEgo("I don't feel like cooking.");
[0036] stopObjectCode();
```

## OCv2_0124 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0124.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0124.txt); entry `001E`.

```text
[001E] printEgo("I don't feel like cooking.");
[0036] stopObjectCode();
```

## OCv2_0124 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0124.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0124.txt); entry `001E`.

```text
[001E] printEgo("I don't feel like cooking.");
[0036] stopObjectCode();
```

## OCv2_0125 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0125.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0125.txt); entry `0025`.

```text
[0025] startScript(10);
[0027] stopObjectCode();
```

## OCv2_0125 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0125.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0125.txt); entry `0028`.

```text
[0028] startScript(11);
[002A] stopObjectCode();
```

## OCv2_0125 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0125.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0125.txt); entry `0028`.

```text
[0028] startScript(11);
[002A] stopObjectCode();
```

## OCv2_0125 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0125.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0125.txt); entry `0025`.

```text
[0025] startScript(10);
[0027] stopObjectCode();
```

## OCv2_0126 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0126.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0126.txt); entry `001B`.

```text
[001B] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 003D;
[001F] printEgo("I'll need some tools for that.");
[003D] printEgo("It's already open.");
[004F] stopObjectCode();
```

## OCv2_0126 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0126.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0126.txt); entry `0050`.

```text
[001F] printEgo("I'll need some tools for that.");
[004F] stopObjectCode();
[0050] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0057;
[0057] printEgo("It's already closed.");
[006B] stopObjectCode();
```

## OCv2_0126 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0126.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0126.txt); entry `006C`.

```text
[006C] unless (VAR_ACTIVE_OBJECT2 == 35) goto 00AB;
[0072] startSound(35);
[0074] cursorCommand(15, 2);
[0077] breakHere();
[0078] VAR_RESULT = isSoundRunning(35);
[007B] unless (!VAR_RESULT) goto 0077;
[007F] cursorCommand(247, 1);
[0082] unless (!getState08(126)) goto 00A2;
[0087] setState08(126);
[008A] unless (getState04(23)) goto 0098;
[008F] setState08(23);
[0092] clearState02(23);
[0095] clearState04(23);
[0098] unless (getState08(129)) goto 009F;
[009D] startScript(22);
[00A2] clearState08(126);
[00A5] Var[44] = Var[234];
[00AB] startScript(3);
[00AD] stopObjectCode();
```

## OCv2_0127 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0127.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0127.txt); entry `0013`.

```text
[0013] breakHere();
[0014] VAR_RESULT = getDist(VAR_EGO,118);
[0019] unless (VAR_RESULT > 0) goto 0013;
[001F] doSentence(253,128,0,1);
[0026] stopObjectCode();
```

## OCv2_0128 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0128.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0128.txt); entry `0013`.

```text
[0013] setOwnerOf(20,0);
[0017] setOwnerOf(20,15);
[001B] unless (!getState08(118)) goto 0026;
[0020] clearState08(20);
[0023] clearState02(20);
[0026] stopObjectCode();
```

## OCv2_0129 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0129.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0129.txt); entry `001B`.

```text
[001B] setState08(VAR_ACTIVE_OBJECT1);
[001D] setState08(123);
[0020] startSound(17);
[0022] unless (getState08(126)) goto 0029;
[0027] startScript(22);
[0029] clearState04(23);
[002C] stopObjectCode();
```

## OCv2_0129 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0129.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0129.txt); entry `002D`.

```text
[002D] clearState08(VAR_ACTIVE_OBJECT1);
[002F] clearState08(123);
[0032] stopSound(17);
[0034] Var[44] = Var[234];
[0037] stopObjectCode();
```

## OCv2_0129 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0129.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0129.txt); entry `0038`.

```text
[0038] unless (VAR_ACTIVE_OBJECT2 == 29) goto 004B;
[003E] setOwnerOf(29,14);
[0042] setState08(130);
[0045] clearState02(130);
[004B] unless (VAR_ACTIVE_OBJECT2 == 14) goto 00F0;
[0051] unless (Var[138] == Var[234]) goto 00A4;
[0056] setObjectName(14,"fish bowl");
[0063] unless (getState04(14)) goto 007B;
[0068] setObjectName(14,"taped fish bowl");
[007B] Var[138] = 2;
[007F] startSound(36);
[0081] printEgo("Hey Sushi, hope you're happy there.");
[00A4] unless (Var[138] == 2) goto 00DC;
[00AA] setObjectName(14,"Sushi in fish bowl");
[00C0] startSound(36);
[00C2] Var[138] = Var[234];
[00C5] printEgo("Welcome home, Sushi!");
[00DC] printEgo("Sushi's not here.");
[00F0] unless (VAR_ACTIVE_OBJECT2 == 22) goto 0111;
[00F6] printEgo("It's a perfectly good egg.");
[0111] printEgo("I don't want to put that in the \x06\x09\x06.");
[012E] stopObjectCode();
```

## OCv2_0130 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0130.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0130.txt); entry `001E`.

```text
[001E] clearState08(VAR_ACTIVE_OBJECT1);
[0020] setState02(VAR_ACTIVE_OBJECT1);
[0022] setOwnerOf(29,VAR_EGO);
[0026] stopObjectCode();
```

## OCv2_0131 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0131.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0131.txt); entry `0023`.

```text
[0023] cursorCommand(15, 2);
[0026] setState08(VAR_ACTIVE_OBJECT1);
[0028] setState02(VAR_ACTIVE_OBJECT1);
[002A] printEgo("Good idea! This place is a mess!");
[0046] breakHere();
[0047] walkActorToObject(VAR_EGO,132);
[004B] waitForActor(VAR_EGO);
[004D] clearState08(132);
[0050] cursorCommand(247, 1);
[0053] stopObjectCode();
```

## OCv2_0131 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0131.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0131.txt); entry `0023`.

```text
[0023] cursorCommand(15, 2);
[0026] setState08(VAR_ACTIVE_OBJECT1);
[0028] setState02(VAR_ACTIVE_OBJECT1);
[002A] printEgo("Good idea! This place is a mess!");
[0046] breakHere();
[0047] walkActorToObject(VAR_EGO,132);
[004B] waitForActor(VAR_EGO);
[004D] clearState08(132);
[0050] cursorCommand(247, 1);
[0053] stopObjectCode();
```

## OCv2_0131 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0131.txt](../../zak/converted/scripts_flat/LFv2_0002/ROv2/OCv2_0131.txt); entry `0054`.

```text
[0054] unless (getState08(118)) goto 006A;
[0059] setObjectName(118,"power cord");
[006A] setObjectName(118,"power outlet");
[007A] stopObjectCode();
```

## SCv2_0021 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0002/SCv2_0021.txt](../../zak/converted/scripts_flat/LFv2_0002/SCv2_0021.txt); entry `0000`.

```text
[0000] startSound(18);
[0002] delay(22);
[0006] unless (getState08(130)) goto 0053;
[000B] clearState08(130);
[000E] setState02(130);
[0011] setOwnerOf(29,0);
[0015] unless (getState08(126)) goto 004B;
[001A] VAR_RESULT = isScriptRunning(22);
[001D] unless (!VAR_RESULT) goto 002A;
[0021] setState08(23);
[0024] clearState02(23);
[002A] printEgo("Oh no! The crumbs got washed away!");
[004B] unless (!getState08(129)) goto 0053;
[0050] setState04(23);
[0053] unless (Var[138] == 2) goto 0079;
[0059] Var[138] = 3;
[005D] waitForMessage();
[005E] printEgo("WHOOPS! Shredded Sushi.");
[0075] Var[225] += 10;
```

## SCv2_0022 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0002/SCv2_0022.txt](../../zak/converted/scripts_flat/LFv2_0002/SCv2_0022.txt); entry `0000`.

```text
[0000] unless (getState08(23)) goto 002C;
[0005] clearState08(23);
[0008] setState02(23);
[000B] printEgo("Whoops! That washed away the crumbs!");
[002C] Var[44] = Var[235];
[002F] unless (getState08(121)) goto 0039;
[0034] drawObject(127,255,255);
[0039] breakHere();
[003A] unless (getState08(121)) goto 0044;
[003F] drawObject(128,255,255);
[0044] breakHere();
[0045] unless (!Var[44]) goto 002F;
[0049] setState08(127);
[004C] setState08(128);
[004F] stopObjectCode();
```

## SCv2_0023 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0002/SCv2_0023.txt](../../zak/converted/scripts_flat/LFv2_0002/SCv2_0023.txt); entry `0000`.

```text
[0000] unless (VAR_ROOM == 129) goto 003D;
[0006] unless (!getState08(298)) goto 0038;
[000B] startSound(25);
[000D] setState08(298);
[0010] clearState04(298);
[0013] delay(120);
[0017] printEgo("I guess I chose the right channel!");
[0038] startScript(3);
[003D] unless (VAR_ROOM == 2) goto 00A5;
[0043] VAR_RESULT = getActorX(VAR_EGO);
[0046] unless (VAR_RESULT < 45) goto 0089;
[004C] unless (getState08(118)) goto 006B;
[0051] unless (getState04(21)) goto 0063;
[0056] clearState04(21);
[0059] doSentence(253,118,0,1);
[0063] setState04(21);
[0066] startScript(102);
[006B] printEgo("I wonder why it's not working?");
[0089] printEgo("I'm too far away from the TV.");
[00A5] printEgo("It doesn't seem to work here.");
[00BF] stopObjectCode();
```

## SCv2_0029 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0002/SCv2_0029.txt](../../zak/converted/scripts_flat/LFv2_0002/SCv2_0029.txt); entry `0000`.

```text
[0000] unless (!getState04(89)) goto 0018;
[0005] setState04(89);
[0008] setState04(87);
[000B] unless (getState08(88)) goto 0018;
[0010] unless (!getState08(19)) goto 0018;
[0015] setState04(88);
[0018] unless (!getState04(122)) goto 0034;
[001D] unless (!getState08(129)) goto 0034;
[0022] unless (!getState08(125)) goto 0034;
[0027] unless (!getState04(21)) goto 0034;
[002C] unless (!getState04(112)) goto 0034;
[0034] cutscene();
[0035] beginOverride();
[0039] delay(30);
[003D] animateActor(1,244);
[0040] delay(60);
[0044] Var[45] = Var[234];
[0047] unless (getState04(21)) goto 008A;
[004C] printEgo("I need to turn the TV off.");
[0062] VAR_RESULT = getObjectOwner(21);
[0066] unless (VAR_RESULT == 1) goto 007C;
[006C] walkActorTo(1,32,56);
[0070] waitForActor(1);
[0072] doSentence(11,21,0,0);
[007C] doSentence(10,118,0,0);
[0083] waitForSentence();
[0084] delay(60);
[0088] Var[45]++;
[008A] unless (getState04(122)) goto 00BE;
[008F] printEgo("I don't want to leave the disposal on.");
[00B0] doSentence(5,122,0,0);
[00B7] waitForSentence();
[00B8] delay(60);
[00BC] Var[45]++;
[00BE] unless (getState08(129)) goto 00F2;
[00C3] printEgo("I can't leave with the water running.");
[00E4] doSentence(5,129,0,0);
[00EB] waitForSentence();
[00EC] delay(60);
[00F0] Var[45]++;
[00F2] unless (getState08(125)) goto 011F;
[00F7] printEgo("I forgot to close the fridge.");
[0111] doSentence(2,125,0,0);
[0118] waitForSentence();
[0119] delay(60);
[011D] Var[45]++;
[011F] unless (!Var[45]) goto 013D;
[0123] printEgo("Looks good to me.");
[0133] clearState04(112);
[0136] waitForMessage();
[0137] animateActor(1,245);
[013D] walkActorToObject(1,112);
[0141] setState04(112);
[0144] waitForActor(1);
[0146] breakHere();
[0147] unless (VAR_OVERRIDE) goto 017A;
[014B] clearState04(122);
[014E] clearState08(129);
[0151] clearState08(123);
[0154] clearState08(125);
[0157] unless (getState04(21)) goto 017A;
[015C] VAR_RESULT = getObjectOwner(21);
[0160] unless (VAR_RESULT == 1) goto 0173;
[0166] clearState04(21);
[0169] doSentence(253,118,0,1);
[0173] doSentence(10,118,0,1);
[017A] endCutscene();
[017B] VAR_RESULT = getActorRoom(2);
[017E] unless (VAR_RESULT != VAR_ROOM) goto 0186;
[0183] clearState08(112);
[0186] loadRoomWithEgo(134,3,41,53);
[018C] stopObjectCode();
```

## SCv2_0061 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0002/SCv2_0061.txt](../../zak/converted/scripts_flat/LFv2_0002/SCv2_0061.txt); entry `0000`.

```text
[0000] unless (VAR_CURRENT_LIGHTS == Var[234]) goto 001C;
[0005] printEgo("It's too dark in here.");
[001C] unless (VAR_ACTIVE_OBJECT1 == 27) goto 0053;
[0022] printEgo("THE KING FAN CLUB\x01\x01Member in good standing since 1997.");
[0051] stopScript(0);
[0053] unless (VAR_ACTIVE_OBJECT1 == 30) goto 00E4;
[0059] unless (VAR_ACTIVE_OBJECT2 == 25) goto 0095;
[005F] Var[160] = VAR_EGO;
[0062] delay(60);
[0066] printEgo("Well, it's all filled out and the\x01\x01postage is prepaid.");
[0095] unless (VAR_ACTIVE_VERB == 12) goto 00E2;
[009B] printEgo("   THE KING FAN CLUB\x01\x01DON'T DELAY - JOIN TODAY");
[00C2] unless (Var[160]) goto 00E2;
[00C6] waitForMessage();
[00C7] printEgo("And it's filled out in crayon.");
[00E2] stopScript(0);
[00E4] unless (VAR_ACTIVE_OBJECT2 == 17) goto 0101;
[00EA] Var[66] = Var[234];
[00ED] setObjectName(17,"wallpaper map");
[0101] Var[66] = Var[235];
[0104] setObjectName(15,"phone bill map");
[0116] Var[14] = Var[66];
[0119] Var[14] += 193;
[011D] unless (Var[14] == Var[234]) goto 0182;
[0122] VAR_RESULT = getBitVar(1455,VAR_EGO);
[0127] unless (!VAR_RESULT) goto 0155;
[012B] printEgo("I drew the map from my dream on it.");
[0148] Var[14] = Var[66];
[014B] Var[14] += 193;
[014F] Var[Var[14]] = Var[235];
[0155] printEgo("I drew my dream map and the Mars map.");
[0174] Var[14] = Var[66];
[0177] Var[14] += 193;
[017B] Var[Var[14]] = 2;
[0182] Var[14] = Var[66];
[0185] Var[14] += 193;
[0189] unless (Var[14] != 2) goto 01B8;
[018F] VAR_RESULT = getBitVar(1455,VAR_EGO);
[0194] unless (VAR_RESULT) goto 01B8;
[0198] printEgo("I drew the Mars map.");
[01AA] Var[14] = Var[66];
[01AD] Var[14] += 193;
[01B1] Var[Var[14]] = 2;
[01B8] printEgo("It already has a map on it.");
[01CF] stopObjectCode();
```

## SCv2_0102 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0002/SCv2_0102.txt](../../zak/converted/scripts_flat/LFv2_0002/SCv2_0102.txt); entry `0000`.

```text
[0000] ActorOps(10,[Name()]);
[0005] doSentence(253,115,0,1);
[000C] unless (!getState04(113)) goto 001C;
[0011] unless (!getState04(169)) goto 001C;
[0016] loadCostume(2)
[0019] loadCostume(3)
[001C] delay(60);
[0020] unless (!getState04(116)) goto 0055;
[0025] setState04(116);
[0028] print(10,"Good morning San Francisco,\x01\x01this is Lori Amore.");
[0054] waitForMessage();
[0055] unless (getState04(169)) goto 005D;
[005A] setState04(113);
[005D] print(10,"We'll continue with today's top story\x01\x01about the \x02\x02");
[008A] unless (!getState04(113)) goto 00D0;
[008F] unless (!getState04(169)) goto 00CD;
[0094] print(10,"Yale coeds' mission to Mars,");
[00AF] waitForMessage();
[00B0] print(10,"after this important message:");
[00D0] print(10,"universal stupidity epidemic,");
[00EE] waitForMessage();
[00EF] Var[46] = 1;
[00F3] print(10,"after this^");
[0100] waitForMessage();
[0101] delay(30);
[0105] print(10,"uhh^");
[010C] waitForMessage();
[010D] delay(60);
[0111] Var[46]++;
[0113] unless (Var[46] > 2) goto 00F3;
[0119] print(10,"after this story about the universal\x01\x01stupidity epidemic.");
[014E] waitForMessage();
[014F] unless (!getState04(113)) goto 060C;
[0154] unless (!getState04(169)) goto 0609;
[0159] drawObject(114,255,255);
[015E] ActorOps(10,[Costume(2)]);
[0162] ActorOps(10,[TalkColor(13)]);
[0166] putActorInRoom(10,2);
[0169] putActor(10,18,48);
[016D] delay(60);
[0171] print(10,"Hello, I'm Annie Larris from The Society\x01\x01for Ancient Wisdom in San Francisco.");
[01B6] unless (!getState04(114)) goto 0234;
[01BB] setState04(114);
[01BE] cutscene();
[01BF] beginOverride();
[01C3] delay(60);
[01C7] walkActorTo(1,18,60);
[01CB] waitForActor(1);
[01CD] animateActor(1,247);
[01D0] delay(180);
[01D4] walkActorToObject(1,113);
[01D8] printEgo("Gosh, she looks VERY familiar.");
[01F4] delay(30);
[01F8] doSentence(253,114,0,1);
[01FF] waitForMessage();
[0200] animateActor(1,246);
[0203] printEgo("Where have I seen her before?");
[021D] waitForMessage();
[021E] delay(30);
[0222] animateActor(1,247);
[0225] unless (VAR_OVERRIDE) goto 022C;
[0229] print(255,"");
[022C] doSentence(254,114,0,1);
[0233] endCutscene();
[0234] waitForMessage();
[0235] delay(30);
[0239] print(10,"Our quest for a greater understanding of\x01\x01the past can make a better world today.");
[027F] waitForMessage();
[0280] delay(30);
[0284] print(10,"But we need your help! Please deposit\x01\x01artifacts in our 14th Avenue drop slot.");
[02C8] waitForMessage();
[02C9] delay(30);
[02CD] print(10,"I promise they will be returned\x01\x01undamaged. Thank you for your time.");
[0309] waitForMessage();
[030A] delay(60);
[030E] doSentence(253,115,0,1);
[0315] delay(60);
[0319] drawObject(133,255,255);
[031E] print(10,"Now from Mars, one of the women who made\x01\x01this dangerous journey, Melissa China.");
[0364] waitForMessage();
[0365] delay(30);
[0369] ActorOps(11,[Costume(3)]);
[036D] ActorOps(11,[Name()]);
[0372] ActorOps(11,[Color(5, 3)]);
[0377] ActorOps(11,[Color(9, 11)]);
[037C] ActorOps(11,[Color(3, 1)]);
[0381] ActorOps(11,[Color(11, 9)]);
[0386] ActorOps(11,[TalkColor(3)]);
[038A] putActorInRoom(10,0);
[038D] drawObject(116,255,255);
[0392] putActorInRoom(11,2);
[0395] putActor(11,19,48);
[0399] animateActor(11,250);
[039C] animateActor(11,32);
[039F] delay(30);
[03A3] print(11,"Hi there!");
[03AE] waitForMessage();
[03AF] delay(30);
[03B3] putActorInRoom(11,0);
[03B6] drawObject(115,255,255);
[03BB] drawObject(133,255,255);
[03C0] putActorInRoom(10,2);
[03C3] putActor(10,16,48);
[03C7] print(10,"Melissa, why have you and your friend\x01\x01Leslie traveled all the way to Mars?");
[0408] waitForMessage();
[0409] delay(30);
[040D] putActorInRoom(10,0);
[0410] drawObject(116,255,255);
[0415] putActorInRoom(11,2);
[0418] putActor(11,19,48);
[041C] animateActor(11,32);
[041F] print(11,"We had dreams in which an alien told us\x01\x01how to convert our van into a spaceship.\x03\x03We were told to fly to Mars and await\x01\x01further instructions.");
[0496] waitForMessage();
[0497] delay(18);
[049B] animateActor(11,244);
[049E] delay(60);
[04A2] animateActor(11,245);
[04A5] delay(60);
[04A9] animateActor(11,246);
[04AC] delay(30);
[04B0] print(11,"So here we are!");
[04BF] waitForMessage();
[04C0] delay(30);
[04C4] putActorInRoom(11,0);
[04C7] drawObject(115,255,255);
[04CC] drawObject(133,255,255);
[04D1] putActorInRoom(10,2);
[04D4] putActor(10,16,48);
[04D8] delay(30);
[04DC] print(10,"I see.");
[04E4] delay(180);
[04E8] print(10,"And have you received your, um,\x01\x01`instructions?`");
[0515] waitForMessage();
[0516] delay(30);
[051A] putActorInRoom(10,0);
[051D] drawObject(116,255,255);
[0522] putActorInRoom(11,2);
[0525] putActor(11,19,48);
[0529] animateActor(11,32);
[052C] delay(30);
[0530] print(11,"No. We haven't talked to ANY\x01\x01`intelligent beings` since we landed.\x03\x03But we're willing to wait!");
[0583] waitForMessage();
[0584] delay(30);
[0588] print(11,"Oops. My helmet says my oxygen level\x01\x01is low. I have to go refill it.");
[05C2] waitForMessage();
[05C3] delay(30);
[05C7] putActorInRoom(11,0);
[05CA] drawObject(115,255,255);
[05CF] drawObject(133,255,255);
[05D4] putActorInRoom(10,2);
[05D7] putActor(10,16,48);
[05DB] delay(30);
[05DF] print(10,"OK, Melissa. Thank you, and good luck!");
[0602] waitForMessage();
[0603] clearState08(133);
[0606] setState04(113);
[060C] delay(60);
[0610] drawObject(120,255,255);
[0615] print(10,"If you've been feeling increasingly\x01\x01stupid lately, you're not alone!\x03\x03Scientists are baffled by a mysterious\x01\x01buzz that is affecting people worldwide.");
[069A] waitForMessage();
[069B] print(10,"The 60-cycle hum seems to come from\x01\x01every telephone line on the planet.");
[06DA] waitForMessage();
[06DB] delay(30);
[06DF] print(10,"A spokesperson for The Phone Company\x01\x01refused to comment.");
[0713] waitForMessage();
[0714] clearState08(120);
```
