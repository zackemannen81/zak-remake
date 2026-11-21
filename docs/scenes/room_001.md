# Room 001 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/ENv2.txt); entry `0000`.

```text
[0000] unless (!getState08(14)) goto 000C;
[0005] doSentence(250,101,0,1);
[000C] unless (getState08(85)) goto 0018;
[0011] doSentence(250,85,0,1);
[0018] loadSound(27)
[001B] doSentence(253,104,0,1);
[0022] unless (!getState04(95)) goto 002E;
[0027] doSentence(250,95,0,1);
[002E] doSentence(253,108,0,1);
[0035] unless (getState04(88)) goto 0041;
[003A] doSentence(250,89,0,1);
[0041] unless (getState08(110)) goto 004D;
[0046] doSentence(2,84,0,1);
[004D] doSentence(253,109,0,1);
[0054] doSentence(250,107,0,1);
[005B] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/EXv2.txt); entry `0000`.

```text
[0000] stopSound(15);
[0002] stopSound(14);
[0004] stopSound(12);
[0006] VAR_RESULT = isScriptRunning(107);
[0009] unless (VAR_RESULT) goto 0016;
[000D] stopScript(107);
[000F] doSentence(253,88,0,1);
[0016] unless (Var[138] == Var[235]) goto 002E;
[001B] unless (getState08(103)) goto 002E;
[0020] Var[138] = 3;
[0024] Var[225] += 8;
[0028] setState04(103);
[002B] clearState08(103);
[002E] unless (!Var[131]) goto 0034;
[0032] startScript(48);
[0034] stopObjectCode();
```

## OCv2_0014 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0014.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0014.txt); entry `00A0`.

```text
[00A0] unless (Var[167] == 64) goto 00A9;
[00A9] unless (Var[167] == 56) goto 00B5;
[00AF] Var[167] = 52;
[00B3] startScript(150);
[00B5] unless (VAR_ACTIVE_VERB == 3) goto 00BD;
[00BB] startScript(20);
[00BD] stopObjectCode();
```

## OCv2_0014 / verb 6
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0014.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0014.txt); entry `003B`.

```text
[003B] unless (VAR_EGO != 1) goto 004F;
[0041] printEgo("Forget it!");
[004F] unless (Var[138] == Var[234]) goto 0077;
[0054] printEgo("I have to put Sushi somewhere first.");
[0077] unless (Var[167] == 48) goto 0090;
[007D] printEgo("Gotta remove my hat.");
[0090] Var[167] = 56;
[0094] unless (getState04(14)) goto 009D;
[0099] Var[167] = 64;
[009D] startScript(150);
[009F] stopObjectCode();
```

## OCv2_0014 / verb 7
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0014.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0014.txt); entry `00A0`.

```text
[00A0] unless (Var[167] == 64) goto 00A9;
[00A9] unless (Var[167] == 56) goto 00B5;
[00AF] Var[167] = 52;
[00B3] startScript(150);
[00B5] unless (VAR_ACTIVE_VERB == 3) goto 00BD;
[00BB] startScript(20);
[00BD] stopObjectCode();
```

## OCv2_0014 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0014.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0014.txt); entry `0035`.

```text
[0035] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[003A] stopObjectCode();
```

## OCv2_0014 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0014.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0014.txt); entry `002D`.

```text
[002D] doSentence(253,98,0,1);
[0034] stopObjectCode();
```

## OCv2_0015 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0015.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0015.txt); entry `002B`.

```text
[002B] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0030] stopObjectCode();
```

## OCv2_0015 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0015.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0015.txt); entry `0028`.

```text
[0028] startScript(41);
[002A] stopObjectCode();
```

## OCv2_0015 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0015.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0015.txt); entry `0025`.

```text
[0025] pickupObject(VAR_ACTIVE_OBJECT1);
[0027] stopObjectCode();
```

## OCv2_0016 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0016.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0016.txt); entry `001F`.

```text
[001F] startScript(137);
[0021] stopObjectCode();
```

## OCv2_0016 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0016.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0016.txt); entry `001F`.

```text
[001F] startScript(137);
[0021] stopObjectCode();
```

## OCv2_0016 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0016.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0016.txt); entry `001C`.

```text
[001C] pickupObject(VAR_ACTIVE_OBJECT1);
[001E] stopObjectCode();
```

## OCv2_0017 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0017.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0017.txt); entry `0027`.

```text
[0027] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[002A] unless (VAR_RESULT == 15) goto 0037;
[0030] doSentence(253,97,0,1);
[0037] stopObjectCode();
```

## OCv2_0017 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0017.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0017.txt); entry `0038`.

```text
[0038] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[003D] stopObjectCode();
```

## OCv2_0017 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0017.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0017.txt); entry `003E`.

```text
[003E] startScript(41);
[0040] stopObjectCode();
```

## OCv2_0017 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0017.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0017.txt); entry `0027`.

```text
[0027] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[002A] unless (VAR_RESULT == 15) goto 0037;
[0030] doSentence(253,97,0,1);
[0037] stopObjectCode();
```

## OCv2_0018 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0018.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0018.txt); entry `0029`.

```text
[0029] unless (VAR_ACTIVE_OBJECT2 == 1) goto 0035;
[002F] setOwnerOf(VAR_ACTIVE_OBJECT1,1);
[0035] startScript(53);
[0037] stopObjectCode();
```

## OCv2_0018 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0018.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0018.txt); entry `001F`.

```text
[001F] startScript(131);
[0021] stopObjectCode();
```

## OCv2_0018 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0018.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0018.txt); entry `0022`.

```text
[0022] Var[67] = 1;
[0026] startScript(53);
[0028] stopObjectCode();
```

## OCv2_0019 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0019.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0019.txt); entry `001F`.

```text
[001F] unless (VAR_ACTIVE_OBJECT2 == 87) goto 0028;
[002C] unless (getState08(19)) goto 0037;
[0031] walkActorToObject(VAR_EGO,19);
[0035] waitForActor(VAR_EGO);
[0037] printEgo("I'll hang it up.");
[0046] clearState08(VAR_ACTIVE_OBJECT1);
[0048] setState02(VAR_ACTIVE_OBJECT1);
[004A] unless (getState08(88)) goto 005C;
[004F] clearState04(88);
[0052] clearState08(88);
[0055] doSentence(4,88,0,1);
[005C] doSentence(STOP);
[005E] drawSentence();
[005F] doSentence(253,19,0,1);
[0066] stopObjectCode();
```

## OCv2_0019 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0019.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0019.txt); entry `002C`.

```text
[002C] unless (getState08(19)) goto 0037;
[0031] walkActorToObject(VAR_EGO,19);
[0035] waitForActor(VAR_EGO);
[0037] printEgo("I'll hang it up.");
[0046] clearState08(VAR_ACTIVE_OBJECT1);
[0048] setState02(VAR_ACTIVE_OBJECT1);
[004A] unless (getState08(88)) goto 005C;
[004F] clearState04(88);
[0052] clearState08(88);
[0055] doSentence(4,88,0,1);
[005C] doSentence(STOP);
[005E] drawSentence();
[005F] doSentence(253,19,0,1);
[0066] stopObjectCode();
```

## OCv2_0019 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0019.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0019.txt); entry `0067`.

```text
[0067] stopScript(14);
[0069] breakHere();
[006A] walkActorToObject(VAR_EGO,87);
[006E] waitForActor(VAR_EGO);
[0070] startSound(27);
[0072] startScript(18);
[0074] stopObjectCode();
```

## OCv2_0084 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0084.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0084.txt); entry `001D`.

```text
[001D] unless (getState08(110)) goto 0056;
[0022] printEgo("I'll remove the rope first.");
[003B] doSentence(14,110,0,0);
[0042] waitForSentence();
[0043] delay(60);
[0047] unless (!getState08(110)) goto 0053;
[004C] doSentence(1,84,0,0);
[0056] startScript(10);
[0058] setState08(111);
[005B] stopObjectCode();
```

## OCv2_0084 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0084.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0084.txt); entry `005C`.

```text
[005C] startScript(11);
[005E] clearState08(111);
[0061] stopObjectCode();
```

## OCv2_0084 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0084.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0084.txt); entry `006D`.

```text
[006D] unless (VAR_ACTIVE_OBJECT2 == 37) goto 008E;
[0073] unless (getState08(108)) goto 0082;
[0078] doSentence(11,108,37,0);
[0082] printEgo("Not yet.");
[008E] startScript(3);
[0090] stopObjectCode();
```

## OCv2_0084 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0084.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0084.txt); entry `0062`.

```text
[0062] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 006C;
[0066] loadRoomWithEgo(111,2,255,255);
[006C] stopObjectCode();
```

## OCv2_0085 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0085.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0085.txt); entry `0018`.

```text
[0018] unless (VAR_EGO == 1) goto 002A;
[001E] setState08(VAR_ACTIVE_OBJECT1);
[0020] doSentence(250,85,0,1);
[002A] printEgo("I'll pass.");
[0035] stopObjectCode();
```

## OCv2_0085 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0085.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0085.txt); entry `0036`.

```text
[0036] setActorElevation(1,210);
[0039] breakHere();
[003A] VAR_RESULT = getDist(1,85);
[0040] unless (VAR_RESULT) goto 0039;
[0044] clearState08(85);
[0047] setActorElevation(1,0);
[004A] stopObjectCode();
```

## OCv2_0086 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0086.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0086.txt); entry `0018`.

```text
[0018] startScript(46);
[001A] stopObjectCode();
```

## OCv2_0087 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0087.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0087.txt); entry `0020`.

```text
[0020] startScript(18);
[0022] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 002C;
[0026] breakHere();
[0027] startScript(13);
[002C] doSentence(253,87,0,1);
[0033] stopObjectCode();
```

## OCv2_0087 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0087.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0087.txt); entry `0020`.

```text
[0020] startScript(18);
[0022] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 002C;
[0026] breakHere();
[0027] startScript(13);
[002C] doSentence(253,87,0,1);
[0033] stopObjectCode();
```

## OCv2_0087 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0087.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0087.txt); entry `0034`.

```text
[0034] startScript(14);
[0036] delay(120);
[003A] printEgo("It seems to be out of order.");
[0052] stopObjectCode();
```

## OCv2_0088 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0088.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0088.txt); entry `002A`.

```text
[002A] unless (VAR_EGO == 1) goto 0076;
[0030] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 0042;
[0034] clearState04(VAR_ACTIVE_OBJECT1);
[0036] doSentence(254,89,0,1);
[003D] startScript(107);
[0042] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0064;
[0046] animateActor(1,246);
[0049] waitForActor(1);
[004B] printEgo("There aren't any messages.");
[0064] setState08(VAR_ACTIVE_OBJECT1);
[0066] unless (Var[240]) goto 0073;
[006A] VAR_RESULT = isScriptRunning(134);
[006D] unless (!VAR_RESULT) goto 0073;
[0071] startScript(134);
[0076] animateActor(2,246);
[0079] waitForActor(2);
[007B] printEgo("It wouldn't be polite to listen to Zak's\x01\x01messages.");
[00A8] stopObjectCode();
```

## OCv2_0088 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0088.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0088.txt); entry `00A9`.

```text
[00A9] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 00EF;
[00AD] unless (VAR_EGO == 1) goto 00C9;
[00B3] clearState04(VAR_ACTIVE_OBJECT1);
[00B5] doSentence(254,89,0,1);
[00BC] stopScript(107);
[00BE] print(255,"");
[00C1] clearState08(89);
[00C4] clearState08(VAR_ACTIVE_OBJECT1);
[00C9] animateActor(2,246);
[00CC] waitForActor(2);
[00CE] printEgo("I don't want Zak to miss his messages.");
[00EF] stopObjectCode();
```

## OCv2_0088 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0088.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0088.txt); entry `002A`.

```text
[002A] unless (VAR_EGO == 1) goto 0076;
[0030] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 0042;
[0034] clearState04(VAR_ACTIVE_OBJECT1);
[0036] doSentence(254,89,0,1);
[003D] startScript(107);
[0042] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0064;
[0046] animateActor(1,246);
[0049] waitForActor(1);
[004B] printEgo("There aren't any messages.");
[0064] setState08(VAR_ACTIVE_OBJECT1);
[0066] unless (Var[240]) goto 0073;
[006A] VAR_RESULT = isScriptRunning(134);
[006D] unless (!VAR_RESULT) goto 0073;
[0071] startScript(134);
[0076] animateActor(2,246);
[0079] waitForActor(2);
[007B] printEgo("It wouldn't be polite to listen to Zak's\x01\x01messages.");
[00A8] stopObjectCode();
```

## OCv2_0088 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0088.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0088.txt); entry `00F0`.

```text
[00F0] ActorOps(0,[TalkColor(9)]);
[00F4] clearState08(89);
[00F7] setState08(88);
[00FA] stopObjectCode();
```

## OCv2_0089 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0089.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0089.txt); entry `0013`.

```text
[0013] breakHere();
[0014] drawObject(89,255,255);
[0019] breakHere();
[001A] breakHere();
[001B] drawObject(88,255,255);
```

## OCv2_0090 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0090.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0090.txt); entry `003A`.

```text
[002E] startSound(63);
[0030] setState08(VAR_ACTIVE_OBJECT1);
[0032] doSentence(253,104,0,1);
[0039] stopObjectCode();
[003A] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0041;
[0041] stopObjectCode();
```

## OCv2_0090 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0090.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0090.txt); entry `0042`.

```text
[0027] startSound(64);
[0029] clearState08(VAR_ACTIVE_OBJECT1);
[0032] doSentence(253,104,0,1);
[0039] stopObjectCode();
[0042] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0049;
[0049] stopObjectCode();
```

## OCv2_0090 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0090.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0090.txt); entry `0023`.

```text
[0023] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 002E;
[0027] startSound(64);
[0029] clearState08(VAR_ACTIVE_OBJECT1);
[002E] startSound(63);
[0030] setState08(VAR_ACTIVE_OBJECT1);
[0032] doSentence(253,104,0,1);
[0039] stopObjectCode();
```

## OCv2_0091 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0091.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0091.txt); entry `0022`.

```text
[0022] doSentence(VAR_ACTIVE_VERB,92,VAR_ACTIVE_OBJECT2,1);
[0028] stopObjectCode();
```

## OCv2_0091 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0091.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0091.txt); entry `0022`.

```text
[0022] doSentence(VAR_ACTIVE_VERB,92,VAR_ACTIVE_OBJECT2,1);
[0028] stopObjectCode();
```

## OCv2_0091 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0091.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0091.txt); entry `0022`.

```text
[0022] doSentence(VAR_ACTIVE_VERB,92,VAR_ACTIVE_OBJECT2,1);
[0028] stopObjectCode();
```

## OCv2_0091 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0091.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0091.txt); entry `0022`.

```text
[0022] doSentence(VAR_ACTIVE_VERB,92,VAR_ACTIVE_OBJECT2,1);
[0028] stopObjectCode();
```

## OCv2_0091 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0091.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0091.txt); entry `0029`.

```text
[0029] unless (VAR_ACTIVE_OBJECT2 == 14) goto 006D;
[002F] unless (Var[138] == Var[234]) goto 0054;
[0034] clearState08(14);
[0037] clearState02(14);
[003A] doSentence(250,101,0,1);
[0041] setOwnerOf(14,0);
[0045] setOwnerOf(14,15);
[0049] unless (getState04(14)) goto 0051;
[004E] setState08(93);
[0054] printEgo("Not without Sushi in it!");
[006D] startScript(3);
[006F] stopObjectCode();
```

## OCv2_0092 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0092.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0092.txt); entry `0027`.

```text
[0027] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 002F;
[002B] startSound(68);
[002D] setState08(VAR_ACTIVE_OBJECT1);
[002F] stopObjectCode();
```

## OCv2_0092 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0092.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0092.txt); entry `0030`.

```text
[0030] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0038;
[0034] startSound(69);
[0036] clearState08(VAR_ACTIVE_OBJECT1);
[0038] stopObjectCode();
```

## OCv2_0092 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0092.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0092.txt); entry `0030`.

```text
[0030] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0038;
[0034] startSound(69);
[0036] clearState08(VAR_ACTIVE_OBJECT1);
[0038] stopObjectCode();
```

## OCv2_0092 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0092.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0092.txt); entry `0027`.

```text
[0027] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 002F;
[002B] startSound(68);
[002D] setState08(VAR_ACTIVE_OBJECT1);
[002F] stopObjectCode();
```

## OCv2_0093 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0093.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0093.txt); entry `0013`.

```text
[0013] unless (classOfIs(VAR_ACTIVE_OBJECT2,1)) goto 001E;
[001E] unless (classOfIs(VAR_ACTIVE_OBJECT2,2)) goto 004B;
[0023] setState08(106);
[0026] setState02(106);
[0029] pickupObject(18);
[002C] clearState08(18);
[002F] delay(60);
[0033] printEgo("Yay, it's my CashCard.");
[004B] printEgo("I can't reach it with that.");
[0063] stopObjectCode();
```

## OCv2_0094 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0094.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0094.txt); entry `0024`.

```text
[0024] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 002C;
[0028] startSound(68);
[002A] setState08(VAR_ACTIVE_OBJECT1);
[002C] stopObjectCode();
```

## OCv2_0094 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0094.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0094.txt); entry `002D`.

```text
[002D] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0035;
[0031] startSound(69);
[0033] clearState08(VAR_ACTIVE_OBJECT1);
[0035] stopObjectCode();
```

## OCv2_0094 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0094.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0094.txt); entry `002D`.

```text
[002D] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0035;
[0031] startSound(69);
[0033] clearState08(VAR_ACTIVE_OBJECT1);
[0035] stopObjectCode();
```

## OCv2_0094 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0094.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0094.txt); entry `0024`.

```text
[0024] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 002C;
[0028] startSound(68);
[002A] setState08(VAR_ACTIVE_OBJECT1);
[002C] stopObjectCode();
```

## OCv2_0095 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0095.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0095.txt); entry `007D`.

```text
[007D] clearState04(VAR_ACTIVE_OBJECT1);
[007F] doSentence(250,95,0,1);
[0086] stopObjectCode();
```

## OCv2_0095 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0095.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0095.txt); entry `0073`.

```text
[0073] setState04(VAR_ACTIVE_OBJECT1);
[0075] doSentence(254,95,0,1);
[007C] stopObjectCode();
```

## OCv2_0095 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0095.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0095.txt); entry `005C`.

```text
[005C] printEgo("It's nailed to the wall.");
[0072] stopObjectCode();
```

## OCv2_0095 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0095.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0095.txt); entry `0026`.

```text
[0026] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 0044;
[002A] printEgo("Gosh, it's getting late.");
[0044] printEgo("It seems to have stopped.");
[005B] stopObjectCode();
```

## OCv2_0095 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0095.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0095.txt); entry `005C`.

```text
[005C] printEgo("It's nailed to the wall.");
[0072] stopObjectCode();
```

## OCv2_0095 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0095.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0095.txt); entry `0087`.

```text
[0087] drawObject(95,255,255);
[008C] startSound(2);
[008E] delay(60);
[0092] drawObject(96,255,255);
[0097] startSound(2);
[0099] delay(60);
```

## OCv2_0097 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0097.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0097.txt); entry `0013`.

```text
[0013] startSound(34);
[0015] pickupObject(17);
[0018] delay(30);
[001C] printEgo("Whoops!");
[0025] stopObjectCode();
```

## OCv2_0098 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0098.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0098.txt); entry `0013`.

```text
[0013] printEgo("Come with me, Sushi.");
[0026] doSentence(254,101,0,1);
[002D] pickupObject(14);
[0030] clearState08(93);
[0033] stopObjectCode();
```

## OCv2_0099 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0099.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0099.txt); entry `0013`.

```text
[0013] doSentence(254,101,0,1);
[001A] VerbOps(New-31(0,19,0,0,"Swim forward@@"));
[002F] VerbOps(New-33(14,19,2,0,"   Smile@@@"));
[0041] VerbOps(New-32(25,19,3,0,"  Swim backward"));
[0057] Var[44] = 97;
[005B] breakHere();
[005C] unless (VAR_ACTIVE_VERB) goto 005B;
[0060] unless (VAR_ACTIVE_VERB == 31) goto 0077;
[0066] VAR_ACTIVE_VERB = Var[234];
[0069] doSentence(254,102,0,1);
[0070] doSentence(253,100,0,1);
[0077] unless (VAR_ACTIVE_VERB == 33) goto 009C;
[007D] VAR_ACTIVE_VERB = Var[234];
[0080] doSentence(254,102,0,1);
[0087] doSentence(253,100,0,1);
[008E] breakHere();
[008F] unless (Var[44] == 97) goto 008E;
[0095] doSentence(254,100,0,1);
[009C] unless (VAR_ACTIVE_VERB == 32) goto 00B3;
[00A2] VAR_ACTIVE_VERB = Var[234];
[00A5] doSentence(254,100,0,1);
[00AC] doSentence(253,102,0,1);
```

## OCv2_0100 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0100.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0100.txt); entry `0013`.

```text
[0013] drawObject(Var[44],255,255);
[0017] breakHere();
[0018] breakHere();
[0019] Var[44]++;
[001B] unless (Var[44] > 102) goto 0013;
[0021] Var[44] = 97;
```

## OCv2_0101 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0101.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0101.txt); entry `0013`.

```text
[0013] Var[46] = getRandomNr(6);
[0016] Var[46]++;
[0018] Var[44] = 97;
[001C] drawObject(Var[44],255,255);
[0020] breakHere();
[0021] breakHere();
[0022] unless (Var[44] == 99) goto 0034;
[0028] breakHere();
[0029] VAR_RESULT = getDist(VAR_EGO,14);
[002E] unless (VAR_RESULT > 3) goto 0028;
[0034] Var[44]++;
[0036] unless (Var[44] > 102) goto 001C;
[003C] Var[46]--;
[003E] unless (!Var[46]) goto 0018;
[0042] drawObject(97,255,255);
[0047] delay(120);
```

## OCv2_0102 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0102.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0102.txt); entry `0013`.

```text
[0013] drawObject(Var[44],255,255);
[0017] breakHere();
[0018] breakHere();
[0019] Var[44]--;
[001B] unless (Var[44] < 97) goto 0013;
[0021] Var[44] = 102;
```

## OCv2_0103 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0103.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0103.txt); entry `0024`.

```text
[0024] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 005C;
[0028] startSound(27);
[002A] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 0046;
[002E] setState08(VAR_ACTIVE_OBJECT1);
[0030] doSentence(253,104,0,1);
[0037] unless (Var[138] == Var[235]) goto 0043;
[003C] doSentence(250,105,0,1);
[0046] delay(60);
[004A] animateActor(VAR_EGO,246);
[004D] waitForActor(VAR_EGO);
[004F] printEgo("It's broken.");
[005C] stopObjectCode();
```

## OCv2_0103 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0103.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0103.txt); entry `005D`.

```text
[005D] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0073;
[0061] clearState08(VAR_ACTIVE_OBJECT1);
[0063] doSentence(254,105,0,1);
[006A] startSound(27);
[006C] doSentence(253,104,0,1);
[0073] stopObjectCode();
```

## OCv2_0103 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0103.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0103.txt); entry `0074`.

```text
[0074] unless (VAR_ACTIVE_OBJECT2 == 14) goto 00FA;
[007A] unless (Var[138] == Var[234]) goto 00B1;
[007F] Var[138] = Var[235];
[0082] startSound(36);
[0084] printEgo("Hope you're happy in there, Sushi.");
[00A3] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 00AE;
[00A7] doSentence(250,105,0,1);
[00B1] unless (Var[138] == Var[235]) goto 00EE;
[00B6] doSentence(254,105,0,1);
[00BD] doSentence(7,14,0,1);
[00C4] startSound(36);
[00C6] Var[138] = Var[234];
[00C9] printEgo("Isn't it nice to be home, Sushi?");
[00E5] clearState08(104);
[00E8] clearState08(105);
[00EE] startScript(3);
[00F0] doSentence(253,109,0,1);
[00FA] startScript(3);
[00FC] stopObjectCode();
```

## OCv2_0104 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0104.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0104.txt); entry `0013`.

```text
[0013] lights(11,0,0);
[0017] unless (!getState08(103)) goto 0025;
[001C] unless (!getState08(90)) goto 0025;
[0021] lights(Var[234],0,0);
[0025] stopObjectCode();
```

## OCv2_0105 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0105.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0105.txt); entry `0013`.

```text
[0013] breakHere();
[0014] VAR_RESULT = isSoundRunning(36);
[0017] unless (!VAR_RESULT) goto 0013;
[001B] Var[46] = Var[234];
[001E] drawObject(104,255,255);
[0023] breakHere();
[0024] startSound(29);
[0026] drawObject(105,255,255);
[002B] breakHere();
[002C] breakHere();
[002D] startSound(29);
[002F] Var[46]++;
[0031] unless (Var[46] > 11) goto 001E;
[0037] clearState08(104);
[003A] clearState08(105);
[003D] Var[138] = 3;
[0041] Var[225] += 8;
[0045] setState04(103);
[0048] clearState08(103);
[004B] doSentence(253,104,0,1);
[0052] doSentence(253,109,0,1);
[0059] delay(60);
[005D] animateActor(VAR_EGO,246);
[0060] printEgo("Uh oh. Goldfish chowder.");
[0077] stopObjectCode();
```

## OCv2_0106 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0106.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0106.txt); entry `006A`.

```text
[006A] doSentence(253,93,0,1);
[0071] stopObjectCode();
```

## OCv2_0106 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0106.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0106.txt); entry `0072`.

```text
[0072] printEgo("I can't make out what it says.");
[008C] stopObjectCode();
```

## OCv2_0106 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0106.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0106.txt); entry `0023`.

```text
[0023] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0053;
[0027] setState08(VAR_ACTIVE_OBJECT1);
[0029] setState08(18);
[002C] delay(30);
[0030] printEgo("Oh no, I pushed it way under the desk!");
[0053] printEgo("It's way under the desk.");
[0069] stopObjectCode();
```

## OCv2_0107 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0107.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0107.txt); entry `0027`.

```text
[0027] unless (getState08(108)) goto 0030;
[002C] animateActor(VAR_EGO,250);
[002F] breakHere();
[0030] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 003F;
[0034] setState08(VAR_ACTIVE_OBJECT1);
[0036] setState08(109);
[0039] setState02(109);
[003F] clearState08(VAR_ACTIVE_OBJECT1);
[0041] clearState08(109);
[0044] clearState02(109);
[0047] stopObjectCode();
```

## OCv2_0107 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0107.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0107.txt); entry `0027`.

```text
[0027] unless (getState08(108)) goto 0030;
[002C] animateActor(VAR_EGO,250);
[002F] breakHere();
[0030] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 003F;
[0034] setState08(VAR_ACTIVE_OBJECT1);
[0036] setState08(109);
[0039] setState02(109);
[003F] clearState08(VAR_ACTIVE_OBJECT1);
[0041] clearState08(109);
[0044] clearState02(109);
[0047] stopObjectCode();
```

## OCv2_0107 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0107.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0107.txt); entry `0048`.

```text
[0048] stopObjectCode();
```

## OCv2_0107 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0107.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0107.txt); entry `0027`.

```text
[0027] unless (getState08(108)) goto 0030;
[002C] animateActor(VAR_EGO,250);
[002F] breakHere();
[0030] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 003F;
[0034] setState08(VAR_ACTIVE_OBJECT1);
[0036] setState08(109);
[0039] setState02(109);
[003F] clearState08(VAR_ACTIVE_OBJECT1);
[0041] clearState08(109);
[0044] clearState02(109);
[0047] stopObjectCode();
```

## OCv2_0107 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0107.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0107.txt); entry `0054`.

```text
[0054] Var[66] = getRandomNr(1);
[0057] breakHere();
```

## OCv2_0107 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0107.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0107.txt); entry `0049`.

```text
[0049] unless (getState08(108)) goto 0051;
[004E] animateActor(VAR_EGO,250);
[0051] startScript(3);
[0053] stopObjectCode();
```

## OCv2_0108 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0108.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0108.txt); entry `0083`.

```text
[0083] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 00AF;
[0087] printEgo("They're not THAT loose. I'll need some\x01\x01help.");
[00AF] stopObjectCode();
```

## OCv2_0108 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0108.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0108.txt); entry `0083`.

```text
[0083] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 00AF;
[0087] printEgo("They're not THAT loose. I'll need some\x01\x01help.");
[00AF] stopObjectCode();
```

## OCv2_0108 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0108.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0108.txt); entry `00B0`.

```text
[00B0] startScript(37);
[00B2] stopObjectCode();
```

## OCv2_0108 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0108.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0108.txt); entry `0029`.

```text
[0029] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0082;
[002D] unless (getState08(110)) goto 003C;
[0032] doSentence(11,110,0,0);
[003C] unless (VAR_EGO == 1) goto 006B;
[0042] startSound(60);
[0044] printEgo("AHHHHHHEEEEEEEEeeeeeee^");
[005D] Var[49] = 5;
[0061] doSentence(253,110,0,1);
[006B] printEgo("I'm not going down there!");
[0082] stopObjectCode();
```

## OCv2_0108 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0108.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0108.txt); entry `0083`.

```text
[0083] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 00AF;
[0087] printEgo("They're not THAT loose. I'll need some\x01\x01help.");
[00AF] stopObjectCode();
```

## OCv2_0108 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0108.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0108.txt); entry `00B3`.

```text
[00B3] unless (!getState08(108)) goto 00D4;
[00B8] setObjectName(108,"loose boards");
[00C8] setBoxFlags(3,0);
[00CB] clearState08(334);
[00CE] setState02(334);
[00D4] setObjectName(108,"hole");
[00DC] setBoxFlags(3,128);
[00DF] setState08(334);
[00E2] clearState02(334);
[00E5] loadSound(60)
[00E8] stopObjectCode();
```

## OCv2_0109 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0109.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0109.txt); entry `0027`.

```text
[0027] unless (Var[138] == Var[235]) goto 006D;
[002C] setObjectName(103,"Sushi in lamp");
[003D] VAR_RESULT = getObjectOwner(14);
[0041] unless (VAR_RESULT) goto 006A;
[0045] setObjectName(14,"fish bowl");
[0052] unless (getState04(14)) goto 006A;
[0057] setObjectName(14,"taped fish bowl");
[006D] setObjectName(103,"lamp");
[0075] unless (Var[138] == Var[234]) goto 0098;
[007A] VAR_RESULT = getObjectOwner(14);
[007E] unless (VAR_RESULT) goto 0098;
[0082] setObjectName(14,"Sushi in fish bowl");
[0098] stopObjectCode();
```

## OCv2_0109 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0109.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0109.txt); entry `001F`.

```text
[001F] doSentence(VAR_ACTIVE_VERB,107,0,0);
[0026] stopObjectCode();
```

## OCv2_0110 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0110.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0110.txt); entry `002C`.

```text
[002C] printEgo("Down we go!");
[0037] Var[49] = Var[235];
[003A] animateActor(VAR_EGO,245);
[003D] doSentence(253,110,0,1);
[0044] stopObjectCode();
```

## OCv2_0110 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0110.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0110.txt); entry `002C`.

```text
[002C] printEgo("Down we go!");
[0037] Var[49] = Var[235];
[003A] animateActor(VAR_EGO,245);
[003D] doSentence(253,110,0,1);
[0044] stopObjectCode();
```

## OCv2_0110 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0110.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0110.txt); entry `001D`.

```text
[001D] setOwnerOf(37,VAR_EGO);
[0021] setState02(VAR_ACTIVE_OBJECT1);
[0023] clearState08(VAR_ACTIVE_OBJECT1);
[0025] clearState08(333);
[0028] setState02(333);
[002B] stopObjectCode();
```

## OCv2_0110 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0110.txt](../../zak/converted/scripts_flat/LFv2_0001/ROv2/OCv2_0110.txt); entry `0045`.

```text
[0045] cursorCommand(15, 2);
[0048] unless (!getState08(107)) goto 0055;
[004D] doSentence(9,107,0,0);
[0054] waitForSentence();
[0055] Var[48] = 255;
[0059] setActorElevation(VAR_EGO,Var[48]);
[005C] Var[48] -= Var[49];
[005F] breakHere();
[0060] unless (Var[48] < 200) goto 0059;
[0066] setActorElevation(VAR_EGO,0);
[0069] cursorCommand(247, 1);
[006C] loadRoomWithEgo(334,16,255,255);
[0072] stopObjectCode();
```

## SCv2_0013 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0013.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0013.txt); entry `0000`.

```text
[0000] unless (!Var[131]) goto 0006;
[0004] startScript(48);
[0006] startScript(14);
[0008] startSound(15);
[000A] delay(120);
[000E] stopSound(15);
[0010] Var[66] = Var[234];
[0013] Var[14] = Var[66];
[0016] Var[14] += 139;
[001A] Var[15] = Var[66];
[001D] Var[15] += 143;
[0021] Var[Var[14]] = Var[15];
[0024] Var[66]++;
[0026] unless (Var[66] > 3) goto 0013;
[002C] Var[119] = 1;
[0030] startScript(15);
[0032] breakHere();
[0033] VAR_RESULT = getBitVar(1470,0);
[0038] unless (!VAR_RESULT) goto 0032;
[003C] VAR_RESULT = getBitVar(1467,0);
[0041] unless (!VAR_RESULT) goto 0049;
[0045] startScript(17);
[0047] chainScript(77);
[0049] chainScript(16);
```

## SCv2_0014 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0014.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0014.txt); entry `0000`.

```text
[0000] pickupObject(19);
[0003] clearState08(19);
[0006] setState08(87);
[0009] loadScript(18)
[000C] Var[157] = VAR_EGO;
[000F] breakHere();
[0010] VAR_RESULT = getDist(Var[157],87);
[0015] unless (VAR_RESULT) goto 000F;
[0019] unless (VAR_ROOM == 1) goto 0021;
[001F] startSound(27);
[0021] VAR_RESULT = isScriptRunning(13);
[0024] unless (VAR_RESULT) goto 002A;
[0028] chainScript(18);
[002A] setState08(19);
[002D] clearState02(19);
[0030] setOwnerOf(19,0);
[0034] setOwnerOf(19,15);
[0038] stopObjectCode();
```

## SCv2_0016 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0016.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0016.txt); entry `0000`.

```text
[0000] unless (VAR_ROOM == 1) goto 0008;
[0006] startSound(12);
[0008] delay(30);
```

## SCv2_0017 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0017.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0017.txt); entry `0000`.

```text
[0000] unless (VAR_ROOM == 1) goto 0008;
[0006] startSound(14);
[0008] unless (VAR_ROOM == 4) goto 0010;
[000E] startSound(13);
[0010] delay(240);
```

## SCv2_0018 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0018.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0018.txt); entry `0000`.

```text
[0000] setOwnerOf(19,0);
[0004] setOwnerOf(19,15);
[0008] clearState08(87);
[000B] stopScript(13);
[000D] stopSound(15);
[000F] stopScript(16);
[0011] stopScript(17);
[0013] stopSound(14);
[0015] stopSound(13);
[0017] stopSound(12);
[0019] stopObjectCode();
```

## SCv2_0019 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0019.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0019.txt); entry `0000`.

```text
[0000] VerbOps(New-9(0,19,0,0,"Push@@"));
[000D] VerbOps(New-10(0,20,5,0,"Pull@@"));
[001A] VerbOps(New-3(0,21,10,4,"Give@@"));
[0027] VerbOps(New-1(6,19,1,0,"Open@@@"));
[0035] VerbOps(New-2(6,20,6,0,"Close@@"));
[0043] VerbOps(New-12(6,21,11,0,"Read@@@"));
[0051] VerbOps(New-13(13,19,2,0,"Walk to@@"));
[0061] VerbOps(New-14(13,20,7,0,"Pick up@@"));
[0071] VerbOps(New-15(13,21,12,0,"What is@@"));
[0081] VerbOps(New-6(22,19,3,0,"Put on@@@@"));
[0092] VerbOps(New-7(22,20,8,0,"Take off@@"));
[00A3] VerbOps(New-11(22,21,13,255,"Use@@@@@@@"));
[00B4] VerbOps(New-4(32,19,4,0,"Turn on@"));
[00C3] VerbOps(New-5(32,20,9,0,"Turn off"));
[00D2] VerbOps(Delete(14));
[00D5] unless (Var[199]) goto 00ED;
[00D9] unless (getState04(169)) goto 00ED;
[00DE] VerbOps(New-45(32,21,14,0,"Switch@@"));
[00ED] VAR_RESULT = getBitVar(1445,0);
[00F2] unless (VAR_RESULT) goto 00FD;
[00F6] doSentence(253,183,0,1);
[00FD] VAR_RESULT = isScriptRunning(49);
[0100] unless (VAR_RESULT) goto 0129;
[0104] VerbOps(New-30(32,21,14,0,"To Zak@@"));
[0113] unless (VAR_EGO == 6) goto 0129;
[0119] VerbOps(New-13(13,19,2,0,"Fly to@@@"));
[0129] unless (VAR_EGO == 1) goto 0146;
[012F] Var[66] = Var[234];
[0132] VAR_RESULT = getBitVar(1513,Var[66]);
[0137] unless (VAR_RESULT) goto 013E;
[013B] VerbOps(Delete(Var[66]););
[013E] Var[66]++;
[0140] unless (Var[66] > 13) goto 0132;
[0146] unless (VAR_EGO == 2) goto 0163;
[014C] Var[66] = Var[234];
[014F] VAR_RESULT = getBitVar(1527,Var[66]);
[0154] unless (VAR_RESULT) goto 015B;
[0158] VerbOps(Delete(Var[66]););
[015B] Var[66]++;
[015D] unless (Var[66] > 13) goto 014F;
[0163] VAR_BACKUP_VERB = 13;
[0167] doSentence(RESET);
[0169] drawSentence();
[016A] cursorCommand(0, 0);
[016D] stopObjectCode();
```

## SCv2_0032 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0032.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0032.txt); entry `0000`.

```text
[0000] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[0003] unless (VAR_RESULT == 15) goto 001B;
[0009] unless (getState01(VAR_ACTIVE_OBJECT1)) goto 001B;
[000D] doSentence(VAR_ACTIVE_VERB,VAR_ACTIVE_OBJECT1,VAR_ACTIVE_OBJECT2,0);
[0012] doSentence(14,VAR_ACTIVE_OBJECT1,0,0);
[0018] drawSentence();
[0019] stopScript(0);
[001B] VAR_RESULT = getBitVar(1440,Var[137]);
[0020] unless (!VAR_RESULT) goto 0027;
[0024] walkActorToObject(Var[137],VAR_ACTIVE_OBJECT2);
[0027] waitForActor(Var[137]);
[0029] VAR_RESULT = getDist(Var[137],VAR_ACTIVE_OBJECT2);
[002D] unless (VAR_RESULT <= 4) goto 0038;
[0033] doSentence(19,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,1);
[0038] stopObjectCode();
```

## SCv2_0037 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0037.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0037.txt); entry `0000`.

```text
[0000] unless (!getState08(108)) goto 008B;
[0005] unless (VAR_ACTIVE_OBJECT2 == 26) goto 0049;
[000B] unless (getState04(26)) goto 001E;
[0010] printEgo("It's bent.");
[001E] setState04(26);
[0021] setObjectName(26,"bent butter knife");
[0036] printEgo("Ooops! I bent it!");
[0049] unless (VAR_ACTIVE_OBJECT2 == 35) goto 0055;
[0055] unless (VAR_ACTIVE_OBJECT2 == 38) goto 006D;
[005B] loadSound(60)
[005E] startSound(97);
[0060] setState08(108);
[0063] doSentence(253,108,0,1);
[006D] printEgo("I can't remove them with that.");
[008B] unless (VAR_ACTIVE_OBJECT2 == 37) goto 00B8;
[0091] unless (getState08(84)) goto 00A5;
[0096] doSentence(2,84,0,0);
[009D] waitForSentence();
[009E] delay(60);
[00A5] setOwnerOf(37,14);
[00A9] setState08(110);
[00AC] clearState02(110);
[00AF] setState08(333);
[00B2] clearState02(333);
[00B8] chainScript(3);
[00BA] stopObjectCode();
```

## SCv2_0046 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0046.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0046.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_OBJECT2 == 14) goto 008C;
[0006] unless (Var[138] == Var[234]) goto 008C;
[000B] unless (VAR_EGO == 1) goto 0078;
[0011] Var[138] = 3;
[0015] startSound(36);
[0017] setObjectName(14,"fish bowl");
[0024] unless (getState04(14)) goto 003C;
[0029] setObjectName(14,"taped fish bowl");
[003C] printEgo("Sorry, Sushi, but you're fertilizer now.");
[0061] Var[225] += 5;
[0065] unless (VAR_ROOM_RESOURCE == 8) goto 0075;
[006B] breakHere();
[006C] VAR_RESULT = isSoundRunning(36);
[006F] unless (!VAR_RESULT) goto 006B;
[0073] startSound(87);
[0078] printEgo("That would kill it!");
[008A] stopScript(0);
[008C] startScript(3);
[008E] stopObjectCode();
```

## SCv2_0048 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0048.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0048.txt); entry `0000`.

```text
[0000] Var[66] = Var[234];
[0003] Var[67] = getRandomNr(9);
[0006] Var[14] = Var[66];
[0009] Var[14] += 212;
[000D] Var[Var[14]] = Var[67];
[0010] Var[67] = getRandomNr(9);
[0013] unless (!Var[66]) goto 001E;
[0017] unless (!Var[67]) goto 001E;
[001E] Var[14] = Var[66];
[0021] Var[14] += 143;
[0025] Var[Var[14]] = Var[67];
[0028] Var[67] = getRandomNr(5);
[002B] Var[67] += 230;
[002F] Var[14] = Var[66];
[0032] Var[14] += 113;
[0036] Var[Var[14]] = Var[67];
[0039] Var[66]++;
[003B] unless (Var[66] > 3) goto 0003;
[0041] Var[66] = Var[234];
[0044] Var[67] = getRandomNr(2);
[0047] Var[67] += 531;
[004B] Var[14] = Var[66];
[004E] Var[14] += 131;
[0052] Var[Var[14]] = Var[67];
[0055] Var[66]++;
[0057] unless (Var[66] > 5) goto 0044;
[005D] Var[67] = Var[234];
[0060] Var[61] = 531;
[0064] Var[66] = Var[234];
[0067] Var[14] = Var[66];
[006A] Var[14] += 131;
[006E] unless (Var[14] == Var[61]) goto 0078;
[0073] Var[67]++;
[0078] Var[66]++;
[007A] unless (Var[66] > 5) goto 0067;
[0080] Var[61]++;
[0082] unless (Var[61] > 533) goto 0064;
[0088] unless (Var[67] != 3) goto 0091;
[0091] Var[66] = getRandomNr(5);
[0094] unless (Var[66] == 0) goto 00A6;
[009A] setVarRange(Var[110],3,[316,317,318]);
[00A6] unless (Var[66] == 1) goto 00B8;
[00AC] setVarRange(Var[110],3,[316,318,317]);
[00B8] unless (Var[66] == 2) goto 00CA;
[00BE] setVarRange(Var[110],3,[317,318,316]);
[00CA] unless (Var[66] == 3) goto 00DC;
[00D0] setVarRange(Var[110],3,[317,316,318]);
[00DC] unless (Var[66] == 4) goto 00EE;
[00E2] setVarRange(Var[110],3,[318,317,316]);
[00EE] unless (Var[66] == 5) goto 0100;
[00F4] setVarRange(Var[110],3,[318,316,317]);
[00FD] /* goto 0100; */
[0100] Var[66] = Var[234];
[0103] Var[61] = getRandomNr(32);
[0106] Var[14] = Var[66];
[0109] Var[14] += 50;
[010D] Var[Var[14]] = Var[61];
[0110] unless (!Var[61]) goto 011B;
[0114] setVarRange(Var[53],2,[-21169,227]);
[011B] unless (Var[61] == Var[235]) goto 0127;
[0120] setVarRange(Var[53],2,[-25656,12]);
[0127] unless (Var[61] == 2) goto 0134;
[012D] setVarRange(Var[53],2,[23175,225]);
[0134] unless (Var[61] == 3) goto 0141;
[013A] setVarRange(Var[53],2,[-17073,242]);
[0141] unless (Var[61] == 4) goto 014E;
[0147] setVarRange(Var[53],2,[15487,254]);
[014E] unless (Var[61] == 5) goto 015B;
[0154] setVarRange(Var[53],2,[15467,214]);
[015B] unless (Var[61] == 6) goto 0168;
[0161] setVarRange(Var[53],2,[-26801,243]);
[0168] unless (Var[61] == 7) goto 0175;
[016E] setVarRange(Var[53],2,[-9219,191]);
[0175] unless (Var[61] == 8) goto 0182;
[017B] setVarRange(Var[53],2,[32509,191]);
[0182] unless (Var[61] == 9) goto 018F;
[0188] setVarRange(Var[53],2,[-6193,243]);
[018F] unless (Var[61] == 10) goto 019C;
[0195] setVarRange(Var[53],2,[-121,225]);
[019C] unless (Var[61] == 11) goto 01A9;
[01A2] setVarRange(Var[53],2,[-19001,242]);
[01A9] unless (Var[61] == 12) goto 01B6;
[01AF] setVarRange(Var[53],2,[-32003,76]);
[01B6] unless (Var[61] == 13) goto 01C3;
[01BC] setVarRange(Var[53],2,[765,242]);
[01C3] unless (Var[61] == 14) goto 01D0;
[01C9] setVarRange(Var[53],2,[-15619,255]);
[01D0] unless (Var[61] == 15) goto 01DD;
[01D6] setVarRange(Var[53],2,[7741,46]);
[01DD] unless (Var[61] == 16) goto 01EA;
[01E3] setVarRange(Var[53],2,[9597,18]);
[01EA] unless (Var[61] == 17) goto 01F7;
[01F0] setVarRange(Var[53],2,[26290,77]);
[01F7] unless (Var[61] == 18) goto 0204;
[01FD] setVarRange(Var[53],2,[-161,250]);
[0204] unless (Var[61] == 19) goto 0211;
[020A] setVarRange(Var[53],2,[-78,77]);
[0211] unless (Var[61] == 20) goto 021E;
[0217] setVarRange(Var[53],2,[23247,243]);
[021E] unless (Var[61] == 21) goto 022B;
[0224] setVarRange(Var[53],2,[-2817,242]);
[022B] unless (Var[61] == 22) goto 0238;
[0231] setVarRange(Var[53],2,[32463,225]);
[0238] unless (Var[61] == 23) goto 0245;
[023E] setVarRange(Var[53],2,[3855,159]);
[0245] unless (Var[61] == 24) goto 0252;
[024B] setVarRange(Var[53],2,[26980,242]);
[0252] unless (Var[61] == 25) goto 025F;
[0258] setVarRange(Var[53],2,[-154,102]);
[025F] unless (Var[61] == 26) goto 026C;
[0265] setVarRange(Var[53],2,[-222,68]);
[026C] unless (Var[61] == 27) goto 0279;
[0272] setVarRange(Var[53],2,[-17511,21]);
[0279] unless (Var[61] == 28) goto 0286;
[027F] setVarRange(Var[53],2,[-213,212]);
[0286] unless (Var[61] == 29) goto 0293;
[028C] setVarRange(Var[53],2,[-29671,243]);
[0293] unless (Var[61] == 30) goto 02A0;
[0299] setVarRange(Var[53],2,[23295,255]);
[02A0] unless (Var[61] == 31) goto 02AD;
[02A6] setVarRange(Var[53],2,[-24753,191]);
[02AD] unless (Var[61] == 32) goto 02BA;
[02B3] setVarRange(Var[53],2,[-17073,190]);
[02BA] unless (!Var[66]) goto 02C4;
[02BE] Var[104] = Var[53];
[02C1] Var[105] = Var[54];
[02C4] unless (Var[66] == Var[235]) goto 02CF;
[02C9] Var[106] = Var[53];
[02CC] Var[107] = Var[54];
[02CF] unless (Var[66] == 2) goto 02DB;
[02D5] Var[108] = Var[53];
[02D8] Var[109] = Var[54];
[02DB] Var[66]++;
[02DD] unless (Var[66] > 2) goto 0103;
[02E3] unless (Var[50] == Var[51]) goto 02EB;
[02EB] unless (Var[50] == Var[52]) goto 02F3;
[02F3] unless (Var[51] == Var[52]) goto 02FB;
[02FB] stopObjectCode();
```

## SCv2_0053 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0053.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0053.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_VERB == 12) goto 00A6;
[0006] unless (Var[67] == 1) goto 0022;
[000C] printEgo("Zachary McKracken\x02\x02");
[0022] unless (Var[67] == 2) goto 0039;
[0028] printEgo("Annie Larris\x02\x02");
[0039] unless (Var[67] == 3) goto 0071;
[003F] VAR_RESULT = getObjectOwner(74);
[0043] unless (VAR_RESULT == 15) goto 005F;
[0049] printEgo("The one in front says:\x01\x01\x02\x02");
[005F] printEgo("Melissa China\x02\x02");
[0071] unless (Var[67] == 4) goto 008A;
[0077] printEgo("Leslie Bennett\x02\x02");
[0087] /* goto 008A; */
[008A] Var[14] = Var[67];
[008D] Var[14] += 61;
[0091] Var[66] = Var[14];
[0094] printEgo(", balance is $\x04\x42\x04");
[00A6] unless (VAR_ACTIVE_VERB == 3) goto 0113;
[00AC] unless (VAR_ACTIVE_OBJECT2 <= 4) goto 00D6;
[00B2] printEgo("That's useless - it only works for me.");
[00D6] unless (VAR_ACTIVE_OBJECT2 == 352) goto 00E4;
[00DC] doSentence(11,VAR_ACTIVE_OBJECT1,VAR_ACTIVE_OBJECT2,0);
[00E4] unless (VAR_ACTIVE_OBJECT2 == 144) goto 0108;
[00EA] Var[66] = 150;
[00EE] print(255,"Put it in the \x06\x42\x06.");
[00FE] doSentence(253,148,0,1);
[0108] printEgo("No way!");
[0113] unless (VAR_ACTIVE_VERB == 11) goto 0136;
[0119] printEgo("It won't work. It's not mine.");
[0133] /* goto 0136; */
[0136] stopObjectCode();
```

## SCv2_0059 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0059.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0059.txt); entry `0000`.

```text
[0000] unless (Var[21] == 1) goto 008F;
[0006] cursorCommand(191, 3);
[0009] Var[66] = Var[234];
[000C] VerbOps(Delete(Var[66]););
[000F] Var[66]++;
[0011] unless (Var[66] > 14) goto 000C;
[0017] VAR_RESULT = getBitVar(1471,0);
[001C] unless (!VAR_RESULT) goto 0031;
[0020] VerbOps(New-46(0,20,10,0,"Zak@@@@@@@"));
[0031] VAR_RESULT = getBitVar(1472,0);
[0036] unless (!VAR_RESULT) goto 004B;
[003A] VerbOps(New-47(10,20,11,0,"Annie@@@@@"));
[004B] VAR_RESULT = getBitVar(1473,0);
[0050] unless (!VAR_RESULT) goto 0065;
[0054] VerbOps(New-48(20,20,12,0,"Melissa@@@"));
[0065] VAR_RESULT = getBitVar(1474,0);
[006A] unless (!VAR_RESULT) goto 007F;
[006E] VerbOps(New-49(30,20,13,0,"Leslie@@@@"));
[007F] VerbOps(New-45(0,200,14,0,"Switch"));
[008C] cursorCommand(0, 0);
[008F] stopObjectCode();
```

## SCv2_0107 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0107.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0107.txt); entry `0000`.

```text
[0000] setState08(89);
[0003] unless (Var[240]) goto 004C;
[0007] unless (Var[240] < 6) goto 004C;
[000D] ActorOps(0,[TalkColor(5)]);
[0011] print(255,"Zachary darling, this is your mother.\x01\x01Why don't you ever call me?");
[004B] waitForMessage();
[004C] unless (Var[240] == 0) goto 00C9;
[0052] ActorOps(0,[TalkColor(14)]);
[0056] print(255,"This is The Phone Company calling.\x01\x01Your telephone has been disconnected.\x03\x03Please stop by our office to settle your\x01\x01bill. See ya.");
[00C9] unless (Var[240] == 1) goto 0160;
[00CF] print(255,"Have you seen that girl on TV looking\x01\x01for artifacts?\x03\x03She looks like your type, Zachary, and\x01\x01lives so close to you!\x03\x03Why don't you ever bring home nice girls\x01\x01like her?");
[0160] unless (Var[240] == 2) goto 01E2;
[0166] print(255,"So, did you see those cute girls on Mars\x01\x01with their darling little spaceship?\x03\x03You're a smart boy, Zachary, why don't\x01\x01YOU build a spaceship?");
[01E2] unless (Var[240] == 3) goto 028B;
[01E8] print(255,"I just loved your `Vegetarian Vampire`\x01\x01article! Did you REALLY get to meet one?\x03\x03My good friend Jayne was just telling me\x01\x01about a Golfing Guru in Katmandu!\x03\x03You should do a story about him!");
[028B] unless (Var[240] == 4) goto 0351;
[0291] print(255,"My friend Jayne told me that Space\x01\x01Aliens are running The Phone Company!\x03\x03She said they wear big cowboy hats\x01\x01and don't have knees^or was that noses?\x03\x03I know you're doing a story on them.\x01\x01Be careful! They could be DANGEROUS!");
[0351] unless (Var[240] == 5) goto 03E6;
[0357] print(255,"My friend Jayne's daughter Sally is home\x01\x01from school, and would like to meet you!\x03\x03She's a nice, polite girl, not like that\x01\x01tramp Sandy you brought home last month!");
[03E6] unless (Var[240] == 6) goto 0467;
[03EC] ActorOps(0,[TalkColor(7)]);
[03F0] print(255,"Zak, this is your boss calling.\x01\x01How's the squirrel story coming?\x03\x03I'd better see some great copy on my\x01\x01desk soon, or you're out of a job!");
[0467] unless (Var[240] == 7) goto 04FC;
[046D] ActorOps(0,[TalkColor(1)]);
[0471] print(255,"This is Ed calling for Sandy. Are we on\x01\x01for the Monster Truck Show tomorrow?\x03\x03I've got the Edsel all polished up and\x01\x01ready to go! I'll pick you up at 7:30.\x03\x03See ya!");
[04F9] /* goto 04FC; */
[04FC] unless (Var[240]) goto 0527;
[0500] startScript(134);
[0502] unless (Var[240] < 6) goto 0527;
[0508] waitForMessage();
[0509] print(255,"Bye dear. Don't forget to call!");
[0526] waitForMessage();
[0527] doSentence(253,88,0,1);
[052E] stopObjectCode();
```

## SCv2_0134 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0134.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0134.txt); entry `0000`.

```text
[0000] unless (Var[240]) goto 0008;
[0004] delay(18000);
[0008] breakHere();
[0009] VAR_RESULT = getActorRoom(1);
[000C] unless (VAR_RESULT <= 2) goto 0015;
[0015] Var[240]++;
[0017] unless (Var[240] < 8) goto 002A;
[001D] unless (getState08(88)) goto 002A;
[0022] unless (!getState08(19)) goto 002A;
[0027] setState04(88);
[002A] stopObjectCode();
```

## SCv2_0137 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0001/SCv2_0137.txt](../../zak/converted/scripts_flat/LFv2_0001/SCv2_0137.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_VERB == 12) goto 0015;
[0006] printEgo("Key of Sea Kazoo");
[0015] unless (VAR_ACTIVE_VERB == 11) goto 00EF;
[001B] unless (VAR_EGO == 1) goto 00DC;
[0021] unless (Var[167] == 64) goto 002A;
[002A] unless (Var[167] == 56) goto 0046;
[0030] printEgo("The bowl's in the way.");
[0044] stopScript(0);
[0046] unless (Var[164] == 60) goto 0068;
[004C] printEgo("The oxygen mask's in the way.");
[0066] stopScript(0);
[0068] VAR_RESULT = isSoundRunning(33);
[006B] unless (!VAR_RESULT) goto 00D9;
[006F] startSound(33);
[0071] breakHere();
[0072] unless (VAR_ACTIVE_OBJECT1 != 16) goto 007C;
[0078] stopSound(33);
[007A] stopScript(0);
[007C] VAR_RESULT = isSoundRunning(33);
[007F] unless (!VAR_RESULT) goto 0071;
[0083] unless (!getState04(16)) goto 00A9;
[0088] setState04(16);
[008B] animateActor(1,246);
[008E] waitForActor(1);
[0090] printEgo("That's the only song I know.");
[00A9] unless (VAR_ROOM == 31) goto 00BB;
[00AF] unless (Var[171] == Var[234]) goto 00BB;
[00B4] doSentence(253,500,0,1);
[00BB] unless (VAR_ROOM == 3) goto 00D9;
[00C1] unless (!getState08(142)) goto 00D9;
[00C6] VAR_RESULT = getDist(1,142);
[00CC] unless (VAR_RESULT <= 20) goto 00D9;
[00D2] doSentence(253,147,0,1);
[00DC] printEgo("I can't carry a tune.");
[00EF] stopObjectCode();
```
