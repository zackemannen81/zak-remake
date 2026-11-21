# Room 044 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] ActorOps(VAR_EGO,[Sound(Var[234])]);
[0008] loadSound(27)
[000B] loadSound(19)
[000E] unless (VAR_ROOM == 133) goto 0082;
[0014] RoomScroll(20,20);
[0018] setBoxFlags(4,128);
[001B] unless (!getState08(642)) goto 0025;
[0020] startSound(19);
[0025] startSound(28);
[0027] unless (getState08(643)) goto 0035;
[002C] setBoxFlags(2,0);
[002F] setBoxFlags(3,0);
[0035] setBoxFlags(2,64);
[0038] setBoxFlags(3,128);
[003B] ActorOps(10,[Costume(24)]);
[003F] ActorOps(10,[Sound(Var[234])]);
[0043] ActorOps(10,[TalkColor(12)]);
[0047] Var[203] = Var[235];
[004A] unless (getState02(642)) goto 0071;
[004F] ActorOps(10,[Name("sentry")]);
[005A] putActorInRoom(10,133);
[005D] putActor(10,5,56);
[0061] animateActor(10,250);
[0064] doSentence(253,655,0,1);
[006B] setBoxFlags(1,96);
[0071] doSentence(253,656,0,1);
[0078] doSentence(253,649,0,1);
[0082] RoomScroll(60,60);
[0086] startSound(28);
[0088] ActorOps(12,[Name()]);
[008D] ActorOps(12,[Costume(35)]);
[0091] putActorInRoom(12,VAR_ROOM);
[0094] putActor(12,0,0);
[0098] doSentence(250,650,0,1);
[009F] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/EXv2.txt); entry `0000`.

```text
[0000] stopSound(28);
[0002] stopSound(19);
[0004] ActorOps(VAR_EGO,[Sound(6)]);
[0008] putActorInRoom(12,0);
[000B] putActorInRoom(10,0);
[000E] Var[203] = Var[234];
[0011] setBoxFlags(4,0);
[0014] stopObjectCode();
```

## OCv2_0081 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0081.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0081.txt); entry `0023`.

```text
[0023] VAR_RESULT = getObjPreposition(81);
[0027] unless (!VAR_RESULT) goto 0030;
[002B] startScript(60);
[0030] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0035] stopObjectCode();
```

## OCv2_0081 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0081.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0081.txt); entry `0036`.

```text
[0036] pickupObject(VAR_ACTIVE_OBJECT1);
[0038] clearState08(VAR_ACTIVE_OBJECT1);
[003A] stopObjectCode();
```

## OCv2_0639 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0639.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0639.txt); entry `001A`.

```text
[001A] setBitVar(1572,0,Var[235]);
[001F] loadRoomWithEgo(191,141,255,255);
[0025] stopObjectCode();
```

## OCv2_0640 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0640.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0640.txt); entry `0019`.

```text
[0019] unless (getState08(642)) goto 0080;
[001E] unless (VAR_ACTIVE_OBJECT2 == 38) goto 006B;
[0024] unless (!getState08(643)) goto 0052;
[0029] walkActorToObject(VAR_EGO,643);
[002D] waitForActor(VAR_EGO);
[002F] printEgo("This looks like a good spot.");
[0048] doSentence(11,38,643,0);
[0052] printEgo("There already is a hole.");
[006B] printEgo("That doesn't work.");
[0083] stopObjectCode();
[0099] doSentence(255,643,0,1);
[00A0] stopObjectCode();
```

## OCv2_0640 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0640.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0640.txt); entry `0084`.

```text
[0084] unless (getState08(642)) goto 0099;
[0089] printEgo("It's locked.");
[0099] doSentence(255,643,0,1);
[00A0] stopObjectCode();
```

## OCv2_0641 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0641.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0641.txt); entry `0017`.

```text
[0017] printEgo("WARNING: Fence is electrified.");
[0034] stopObjectCode();
```

## OCv2_0642 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt); entry `002D`.

```text
[002D] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0034;
[0034] stopObjectCode();
[0039] setState08(VAR_ACTIVE_OBJECT1);
[0040] startSound(27);
[0042] stopSound(28);
[0044] breakHere();
[0045] stopSound(19);
[0047] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 004D;
[004B] startSound(19);
[004D] stopObjectCode();
```

## OCv2_0642 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt); entry `0025`.

```text
[0025] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 002C;
[002C] stopObjectCode();
[003E] clearState08(VAR_ACTIVE_OBJECT1);
[0040] startSound(27);
[0042] stopSound(28);
[0044] breakHere();
[0045] stopSound(19);
[0047] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 004D;
[004B] startSound(19);
[004D] stopObjectCode();
```

## OCv2_0642 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt); entry `0025`.

```text
[0025] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 002C;
[002C] stopObjectCode();
[003E] clearState08(VAR_ACTIVE_OBJECT1);
[0040] startSound(27);
[0042] stopSound(28);
[0044] breakHere();
[0045] stopSound(19);
[0047] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 004D;
[004B] startSound(19);
[004D] stopObjectCode();
```

## OCv2_0642 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt); entry `002D`.

```text
[002D] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0034;
[0034] stopObjectCode();
[0039] setState08(VAR_ACTIVE_OBJECT1);
[0040] startSound(27);
[0042] stopSound(28);
[0044] breakHere();
[0045] stopSound(19);
[0047] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 004D;
[004B] startSound(19);
[004D] stopObjectCode();
```

## OCv2_0642 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt); entry `0035`.

```text
[0035] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 003E;
[0039] setState08(VAR_ACTIVE_OBJECT1);
[003E] clearState08(VAR_ACTIVE_OBJECT1);
[0040] startSound(27);
[0042] stopSound(28);
[0044] breakHere();
[0045] stopSound(19);
[0047] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 004D;
[004B] startSound(19);
[004D] stopObjectCode();
```

## OCv2_0642 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt); entry `0035`.

```text
[0035] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 003E;
[0039] setState08(VAR_ACTIVE_OBJECT1);
[003E] clearState08(VAR_ACTIVE_OBJECT1);
[0040] startSound(27);
[0042] stopSound(28);
[0044] breakHere();
[0045] stopSound(19);
[0047] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 004D;
[004B] startSound(19);
[004D] stopObjectCode();
```

## OCv2_0642 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0642.txt); entry `0035`.

```text
[0035] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 003E;
[0039] setState08(VAR_ACTIVE_OBJECT1);
[003E] clearState08(VAR_ACTIVE_OBJECT1);
[0040] startSound(27);
[0042] stopSound(28);
[0044] breakHere();
[0045] stopSound(19);
[0047] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 004D;
[004B] startSound(19);
[004D] stopObjectCode();
```

## OCv2_0643 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0643.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0643.txt); entry `0018`.

```text
[0018] unless (!getState08(642)) goto 0034;
[001D] startSound(29);
[001F] doSentence(STOP);
[0021] delay(30);
[0025] animateActor(VAR_EGO,246);
[0028] printEgo("YOWL!!!");
[0034] unless (VAR_ACTIVE_VERB == 11) goto 0066;
[003A] unless (VAR_ACTIVE_OBJECT2 == 38) goto 0066;
[0040] cursorCommand(15, 2);
[0043] Var[50] = Var[234];
[0046] startSound(2);
[0048] delay(18);
[004C] Var[50]++;
[004E] unless (Var[50] > 6) goto 0046;
[0054] setState08(643);
[0057] setState02(643);
[005A] setBoxFlags(2,0);
[005D] setBoxFlags(3,0);
[0060] cursorCommand(247, 1);
[0066] unless (VAR_ACTIVE_VERB != 13) goto 006E;
[006C] startScript(3);
[006E] stopObjectCode();
```

## OCv2_0644 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0644.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0644.txt); entry `001D`.

```text
[001D] unless (!getState08(643)) goto 0036;
[0022] printEgo("I can't get there!");
[0036] loadRoomWithEgo(652,134,62,12);
[003C] stopObjectCode();
```

## OCv2_0645 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0645.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0645.txt); entry `0020`.

```text
[0020] setOwnerOf(33,VAR_EGO);
[0024] clearState08(VAR_ACTIVE_OBJECT1);
[0026] setState02(VAR_ACTIVE_OBJECT1);
[0028] stopObjectCode();
```

## OCv2_0646 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0646.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0646.txt); entry `0020`.

```text
[0020] setOwnerOf(56,VAR_EGO);
[0024] clearState08(VAR_ACTIVE_OBJECT1);
[0026] setState02(VAR_ACTIVE_OBJECT1);
[0028] stopObjectCode();
```

## OCv2_0647 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0647.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0647.txt); entry `001D`.

```text
[001D] printEgo("It seems to be stuck in the stone!");
[003A] stopObjectCode();
```

## OCv2_0647 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0647.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0647.txt); entry `001D`.

```text
[001D] printEgo("It seems to be stuck in the stone!");
[003A] stopObjectCode();
```

## OCv2_0648 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0648.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0648.txt); entry `001E`.

```text
[001E] unless (VAR_ACTIVE_OBJECT2 == 59) goto 0031;
[0024] setOwnerOf(59,0);
[0028] clearState08(647);
[002B] clearState02(647);
[0031] unless (VAR_ACTIVE_OBJECT2 == 33) goto 0055;
[0037] setOwnerOf(33,14);
[003B] unless (getState08(646)) goto 004C;
[0040] clearState08(646);
[0043] setState02(646);
[004C] setState08(645);
[004F] clearState02(645);
[0055] unless (VAR_ACTIVE_OBJECT2 == 56) goto 007C;
[005B] setOwnerOf(56,14);
[005F] unless (getState08(645)) goto 0073;
[0064] clearState08(645);
[0067] setState02(645);
[006A] setState08(653);
[006D] clearState02(653);
[0073] setState08(646);
[0076] clearState02(646);
[007C] printEgo("Nope, doesn't work.");
[008F] stopObjectCode();
```

## OCv2_0649 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0649.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0649.txt); entry `0013`.

```text
[0013] Var[66] = getActorWalkBox(VAR_EGO);
[0016] clearState02(640);
[0019] unless (Var[66] != 9) goto 0028;
[001F] unless (Var[66] >= 2) goto 0028;
[0025] setState02(640);
[0028] breakHere();
```

## OCv2_0650 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0650.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0650.txt); entry `0013`.

```text
[0013] breakHere();
[0014] breakHere();
[0015] VAR_RESULT = isSoundRunning(19);
[0018] unless (!VAR_RESULT) goto 0014;
[001C] breakHere();
[001D] VAR_RESULT = isSoundRunning(28);
[0020] unless (!VAR_RESULT) goto 001C;
[0024] delay(480);
[0028] startSound(28);
```

## OCv2_0651 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0651.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0651.txt); entry `0013`.

```text
[0013] Var[199] = Var[234];
[0016] waitForMessage();
[0017] unless (!getState08(647)) goto 00CA;
[001C] stopSound(28);
[001E] startSound(30);
[0020] drawObject(649,255,255);
[0025] breakHere();
[0026] drawObject(650,255,255);
[002B] drawObject(656,255,255);
[0030] breakHere();
[0031] drawObject(651,255,255);
[0036] breakHere();
[0037] drawObject(654,255,255);
[003C] breakHere();
[003D] breakHere();
[003E] unless (getState08(653)) goto 00C7;
[0043] stopSound(30);
[0045] cursorCommand(15, 2);
[0048] startSound(31);
[004A] setState02(653);
[004D] drawObject(655,255,255);
[0052] breakHere();
[0053] drawObject(653,255,255);
[0058] breakHere();
[0059] VAR_RESULT = isSoundRunning(31);
[005C] unless (!VAR_RESULT) goto 004D;
[0060] drawObject(81,255,255);
[0065] breakHere();
[0066] clearState02(81);
[0069] clearState08(653);
[006C] clearState08(655);
[006F] setOwnerOf(33,0);
[0073] setOwnerOf(56,0);
[0077] setOwnerOf(79,0);
[007B] breakHere();
[007C] walkActorToObject(2,81);
[0080] VAR_RESULT = getActorRoom(1);
[0083] unless (VAR_RESULT == VAR_ROOM) goto 008C;
[0088] walkActorToObject(1,649);
[008C] waitForActor(2);
[008E] printEgo("Wow! The crystal's fused and the scroll\x01\x01burned up in my hands!");
[00C4] cursorCommand(247, 1);
[00CA] Var[45] = getActorX(VAR_EGO);
[00CD] Var[46] = getActorY(VAR_EGO);
[00D0] Var[47] = 64;
[00D4] putActor(12,Var[45],Var[46]);
[00D8] stopSound(28);
[00DA] startSound(30);
[00DC] setActorElevation(12,Var[47]);
[00DF] breakHere();
[00E0] unless (VAR_MACHINE_SPEED > 40) goto 00ED;
[00E6] Var[47] -= 8;
[00ED] Var[47] -= 16;
[00F1] unless (Var[47] < 8) goto 00DC;
[00F7] setActorElevation(12,80);
[00FA] delay(30);
[00FE] print(2,"WHOA!");
[0106] Var[199] = Var[235];
[0109] stopObjectCode();
```

## OCv2_0652 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0652.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0652.txt); entry `0020`.

```text
[0020] loadRoomWithEgo(644,133,22,52);
[0026] stopObjectCode();
```

## OCv2_0652 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0652.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0652.txt); entry `0027`.

```text
[0027] VAR_ACTIVE_OBJECT2 = Var[48];
[002A] breakHere();
[002B] unless (VAR_ACTIVE_VERB == 3) goto 0050;
[0031] waitForActor(VAR_EGO);
[0033] unless (VAR_ACTIVE_OBJECT2 == 10) goto 0050;
[0039] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[003C] unless (VAR_RESULT == VAR_EGO) goto 0050;
[0041] printEgo("He's drunk!");
[004D] VAR_ACTIVE_OBJECT2 = Var[234];
```

## OCv2_0653 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0653.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0653.txt); entry `0023`.

```text
[0023] clearState08(VAR_ACTIVE_OBJECT1);
[0025] setState02(VAR_ACTIVE_OBJECT1);
[0027] setOwnerOf(33,VAR_EGO);
[002B] setOwnerOf(56,VAR_EGO);
[002F] stopObjectCode();
```

## OCv2_0653 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0653.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0653.txt); entry `0030`.

```text
[0030] delay(3600);
[0034] waitForMessage();
[0035] print(10,"It's COLD out here tonight!");
```

## OCv2_0654 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0654.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0654.txt); entry `0013`.

```text
[0013] Var[49] = getRandomNr(30);
[0016] Var[49] += 20;
[001A] delay(60);
[001E] Var[49]--;
[0020] unless (!Var[49]) goto 001A;
[0024] animateActor(10,31);
[0027] print(10,"Ohhhh.");
```

## OCv2_0655 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0655.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0655.txt); entry `0013`.

```text
[0013] doSentence(253,653,0,1);
[001A] Var[48] = Var[234];
[001D] VAR_ACTIVE_OBJECT2 = Var[234];
[0020] breakHere();
[0021] unless (VAR_ACTIVE_VERB == 3) goto 0118;
[0027] unless (VAR_ACTIVE_OBJECT2 == 10) goto 0118;
[002D] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[0030] unless (VAR_RESULT == VAR_EGO) goto 0118;
[0035] animateActor(VAR_EGO,255);
[0038] walkActorToActor(VAR_EGO,10,2);
[003C] waitForActor(VAR_EGO);
[003E] animateActor(VAR_EGO,247);
[0041] waitForActor(VAR_EGO);
[0043] unless (VAR_ACTIVE_OBJECT1 == 46) goto 0075;
[0049] unless (VAR_EGO == 1) goto 0070;
[004F] print(10,"Sorry, mate, you're not my type!");
[0070] startScript(76);
[0075] unless (VAR_EGO == 1) goto 009C;
[007B] print(10,"Don't bother me, I'm on DUTY now.");
[009C] Var[48]++;
[009E] unless (Var[48] == 1) goto 00C8;
[00A4] print(10,"Sorry, luv, I mustn't accept gifts.");
[00C8] unless (Var[48] == 2) goto 00EF;
[00CE] print(10,"Have you anything else to offer?");
[00EF] print(10,"You are very attractive!");
[0107] waitForMessage();
[0108] animateActor(2,246);
[010B] waitForActor(2);
[010D] printEgo("Yuck!");
[0114] VAR_ACTIVE_OBJECT2 = Var[234];
[0117] waitForMessage();
```

## OCv2_0656 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0656.txt](../../zak/converted/scripts_flat/LFv2_0044/ROv2/OCv2_0656.txt); entry `0013`.

```text
[0013] ActorOps(10,[Name("drunken sentry")]);
[0026] putActorInRoom(10,133);
[0029] putActor(10,0,63);
[002D] animateActor(10,251);
[0030] animateActor(10,24);
[0033] setBoxFlags(1,0);
[0036] doSentence(253,652,0,1);
[003D] doSentence(253,654,0,1);
[0044] stopObjectCode();
```

## SCv2_0076 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0044/SCv2_0076.txt](../../zak/converted/scripts_flat/LFv2_0044/SCv2_0076.txt); entry `0000`.

```text
[0000] doSentence(254,653,0,1);
[0007] cutscene();
[0008] setBitVar(1559,3,Var[235]);
[000D] clearState02(642);
[0010] print(10,"I'd be HAPPY to join you in a drink.");
[002F] beginOverride();
[0033] waitForMessage();
[0034] loadRoom(0);
[0036] dummy(EE);
[0037] delay(60);
[003B] print(255,"Half a bottle later^");
[004F] waitForMessage();
[0050] setOwnerOf(46,0);
[0054] endCutscene();
[0055] VAR_RESULT = getActorX(10);
[0058] unless (VAR_RESULT) goto 0063;
[005C] doSentence(253,656,0,1);
[0063] delay(60);
[0067] animateActor(2,246);
[006A] print(2,"That was MOST unpleasant.");
[0083] stopObjectCode();
```
