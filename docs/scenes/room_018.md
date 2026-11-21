# Room 018 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] VAR_RESULT = isScriptRunning(135);
[0007] unless (VAR_RESULT) goto 000E;
[000E] VAR_RESULT = isScriptRunning(113);
[0011] unless (!VAR_RESULT) goto 0078;
[0015] VAR_RESULT = isScriptRunning(112);
[0018] unless (!VAR_RESULT) goto 0078;
[001C] VAR_RESULT = isScriptRunning(114);
[001F] unless (!VAR_RESULT) goto 0078;
[0023] VAR_RESULT = isScriptRunning(124);
[0026] unless (!VAR_RESULT) goto 0078;
[002A] VAR_RESULT = isScriptRunning(118);
[002D] unless (!VAR_RESULT) goto 0078;
[0031] putActorInRoom(8,18);
[0034] putActor(8,10,60);
[0038] animateActor(8,248);
[003B] clearState08(368);
[003E] VAR_RESULT = getActorRoom(1);
[0041] unless (VAR_RESULT == 18) goto 0053;
[0047] VAR_RESULT = getActorWalkBox(1);
[004A] unless (VAR_RESULT == 7) goto 0053;
[0053] VAR_RESULT = getActorRoom(2);
[0056] unless (VAR_RESULT == 18) goto 0068;
[005C] VAR_RESULT = getActorWalkBox(2);
[005F] unless (VAR_RESULT == 7) goto 0068;
[0068] clearState08(366);
[006B] unless (VAR_ACTIVE_OBJECT1 == 350) goto 0078;
[0071] doSentence(253,364,0,1);
[0078] unless (!getState08(366)) goto 0083;
[007D] setBoxFlags(5,64);
[0083] setBoxFlags(5,0);
[0086] doSentence(253,371,0,1);
[008D] doSentence(250,372,0,1);
[0094] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/EXv2.txt); entry `0000`.

```text
[0000] Var[203] = Var[234];
[0003] stopObjectCode();
```

## OCv2_0060 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0060.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0060.txt); entry `002B`.

```text
[002B] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0030] stopObjectCode();
```

## OCv2_0060 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0060.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0060.txt); entry `001D`.

```text
[001D] doSentence(253,370,0,1);
[0024] unless (Var[47]) goto 002A;
[0028] pickupObject(VAR_ACTIVE_OBJECT1);
[002A] stopObjectCode();
```

## OCv2_0363 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0363.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0363.txt); entry `001B`.

```text
[001B] startScript(10);
[001D] setState08(350);
[0020] stopObjectCode();
```

## OCv2_0363 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0363.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0363.txt); entry `0021`.

```text
[0021] startScript(11);
[0023] clearState08(350);
[0026] stopObjectCode();
```

## OCv2_0363 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0363.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0363.txt); entry `0027`.

```text
[0027] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0031;
[002B] loadRoomWithEgo(350,17,255,255);
[0031] stopObjectCode();
```

## OCv2_0364 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0364.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0364.txt); entry `0019`.

```text
[0019] unless (VAR_EGO == 1) goto 0042;
[001F] printEgo("I think it's the name of a cigarette.");
[0042] printEgo("It says `JAIL` in Nepali.");
[0059] stopObjectCode();
```

## OCv2_0364 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0364.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0364.txt); entry `005A`.

```text
[005A] delay(60);
[005E] unless (VAR_EGO == 1) goto 0088;
[0064] unless (getState04(372)) goto 0088;
[0069] print(8,"Better not cause any trouble!");
[0088] print(8,"Hello\x02\x02");
[0091] VAR_RESULT = getBitVar(1541,VAR_EGO);
[0096] unless (!VAR_RESULT) goto 00BB;
[009A] setBitVar(1541,VAR_EGO,Var[235]);
[009F] print(8,", and welcome to Katmandu!");
[00BB] print(8," again.");
[00C5] VAR_RESULT = getBitVar(1475,0);
[00CA] unless (VAR_RESULT) goto 00E9;
[00CE] waitForMessage();
[00CF] print(8,"Here to visit the prisoner?");
[00E9] stopObjectCode();
```

## OCv2_0365 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0365.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0365.txt); entry `001A`.

```text
[001A] setOwnerOf(Var[50],0);
[001D] setOwnerOf(Var[50],15);
[0020] clearState08(Var[50]);
[0022] clearState02(Var[50]);
[0024] stopObjectCode();
```

## OCv2_0366 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0366.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0366.txt); entry `0022`.

```text
[0022] doSentence(253,370,0,1);
[0029] unless (Var[47]) goto 0053;
[002D] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0041;
[0031] printEgo("It's locked.");
[0041] printEgo("It's already open.");
[0053] stopObjectCode();
```

## OCv2_0366 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0366.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0366.txt); entry `0054`.

```text
[0054] doSentence(253,370,0,1);
[005B] unless (Var[47]) goto 0070;
[005F] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0070;
[0063] unless (!VAR_OVERRIDE) goto 006A;
[0067] startSound(94);
[0069] breakHere();
[006A] clearState08(366);
[006D] setBoxFlags(5,64);
[0070] stopObjectCode();
```

## OCv2_0366 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0366.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0366.txt); entry `0071`.

```text
[0041] printEgo("It's already open.");
[0053] stopObjectCode();
[0071] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 007E;
[0075] doSentence(11,370,VAR_ACTIVE_OBJECT2,0);
[0081] stopObjectCode();
```

## OCv2_0366 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0366.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0366.txt); entry `0082`.

```text
[0082] Var[46] = Var[234];
[0085] setOwnerOf(60,0);
[0089] setOwnerOf(60,15);
[008D] walkActorToObject(8,60);
[0091] waitForActor(8);
[0093] clearState08(60);
[0096] clearState02(60);
[0099] breakHere();
[009A] Var[46]++;
[009C] stopObjectCode();
```

## OCv2_0367 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0367.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0367.txt); entry `0022`.

```text
[0022] doSentence(1,368,0,0);
[0029] stopObjectCode();
```

## OCv2_0367 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0367.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0367.txt); entry `002A`.

```text
[002A] doSentence(2,368,0,0);
[0031] stopObjectCode();
```

## OCv2_0367 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0367.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0367.txt); entry `002A`.

```text
[002A] doSentence(2,368,0,0);
[0031] stopObjectCode();
```

## OCv2_0367 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0367.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0367.txt); entry `0022`.

```text
[0022] doSentence(1,368,0,0);
[0029] stopObjectCode();
```

## OCv2_0367 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0367.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0367.txt); entry `0032`.

```text
[0032] walkActorTo(8,10,60);
[0036] waitForActor(8);
[0038] animateActor(8,244);
[003B] stopObjectCode();
```

## OCv2_0368 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0368.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0368.txt); entry `0027`.

```text
[0027] doSentence(253,370,0,1);
[002E] unless (Var[47]) goto 0041;
[0032] startScript(10);
[0034] unless (VAR_EGO != 8) goto 0041;
[003A] doSentence(253,368,0,1);
[0041] stopObjectCode();
```

## OCv2_0368 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0368.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0368.txt); entry `0042`.

```text
[0042] doSentence(253,370,0,1);
[0049] unless (Var[47]) goto 004F;
[004D] startScript(11);
[004F] stopObjectCode();
```

## OCv2_0368 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0368.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0368.txt); entry `0042`.

```text
[0042] doSentence(253,370,0,1);
[0049] unless (Var[47]) goto 004F;
[004D] startScript(11);
[004F] stopObjectCode();
```

## OCv2_0368 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0368.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0368.txt); entry `0027`.

```text
[0027] doSentence(253,370,0,1);
[002E] unless (Var[47]) goto 0041;
[0032] startScript(10);
[0034] unless (VAR_EGO != 8) goto 0041;
[003A] doSentence(253,368,0,1);
[0041] stopObjectCode();
```

## OCv2_0368 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0368.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0368.txt); entry `0050`.

```text
[0050] cursorCommand(15, 2);
[0053] delay(60);
[0057] unless (getState04(368)) goto 00BB;
[005C] clearState04(368);
[005F] printEgo("Here's the stuff he took from \x02\x02");
[007A] unless (VAR_EGO == 1) goto 0088;
[0080] printEgo("me!");
[0088] printEgo("Zak!\x01\x01I'll take it for him.");
[00A0] Var[66] = 14;
[00A4] VAR_RESULT = getObjectOwner(Var[66]);
[00A7] unless (VAR_RESULT == 8) goto 00B0;
[00AD] setOwnerOf(Var[66],VAR_EGO);
[00B0] Var[66]++;
[00B2] unless (Var[66] > 83) goto 00A4;
[00BB] printEgo("It's empty.");
[00C7] cursorCommand(247, 1);
[00CA] stopObjectCode();
```

## OCv2_0369 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0369.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0369.txt); entry `0022`.

```text
[0022] unless (VAR_EGO == 1) goto 005F;
[0028] printEgo("I can't read the words, but there's a\x01\x01photo of a meteor on it!");
[005F] printEgo("WANTED: For gobs of terrible things,\x01\x01one murderous purple slimy meteor.");
[009F] stopObjectCode();
```

## OCv2_0369 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0369.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0369.txt); entry `00A0`.

```text
[00A0] Var[46] = Var[234];
[00A3] walkActorTo(8,2,54);
[00A7] waitForActor(8);
[00A9] animateActor(8,244);
[00AC] breakHere();
[00AD] ActorOps(8,[Costume(0)]);
[00B1] delay(120);
[00B5] Var[50] = 59;
[00B9] doSentence(253,365,0,1);
[00C0] animateActor(8,249);
[00C3] ActorOps(8,[Costume(26)]);
[00C7] ActorOps(8,[Color(9, 1)]);
[00CC] ActorOps(8,[Color(3, 0)]);
[00D1] Var[46]++;
[00D3] stopObjectCode();
```

## OCv2_0370 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0370.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0370.txt); entry `001D`.

```text
[001D] doSentence(253,370,0,1);
[0024] unless (Var[47]) goto 003C;
[0028] unless (VAR_ACTIVE_OBJECT2 == 60) goto 003A;
[002E] startSound(94);
[0030] breakHere();
[0031] setState08(366);
[0034] setBoxFlags(5,0);
[003A] startScript(3);
[003C] stopObjectCode();
```

## OCv2_0370 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0370.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0370.txt); entry `003D`.

```text
[003D] Var[47] = Var[234];
[0040] unless (VAR_EGO == 8) goto 0049;
[0049] VAR_RESULT = getActorRoom(8);
[004C] unless (VAR_RESULT != 18) goto 0057;
[0052] Var[47]++;
[0057] faceActor(8,VAR_EGO);
[005A] doSentence(STOP);
[005C] waitForActor(8);
[005E] print(8,"Don't touch that!");
[0070] waitForMessage();
[0071] doSentence(253,367,0,1);
[0078] stopObjectCode();
```

## OCv2_0371 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0371.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0371.txt); entry `001A`.

```text
[001A] unless (VAR_EGO == 1) goto 0052;
[0020] printEgo("It's a picture of a flagpole, but I\x01\x01can't read Nepali.");
[0052] printEgo("Bulletin: Because of termite problems,\x01\x01all wooden flagpoles have been replaced.");
[009A] stopObjectCode();
```

## OCv2_0371 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0371.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0371.txt); entry `009B`.

```text
[009B] Var[203] = Var[235];
[009E] breakHere();
[009F] unless (VAR_ACTIVE_VERB == 3) goto 019A;
[00A5] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[00A8] unless (VAR_RESULT == VAR_EGO) goto 019A;
[00AD] waitForActor(VAR_EGO);
[00AF] unless (VAR_ACTIVE_OBJECT2 == 8) goto 012D;
[00B5] faceActor(8,VAR_EGO);
[00B8] unless (VAR_ACTIVE_OBJECT1 == 59) goto 00E4;
[00BE] print(8,"Our flag! Thank you!");
[00D2] waitForMessage();
[00D3] cutscene();
[00D4] doSentence(253,369,0,1);
[00DB] breakHere();
[00DC] unless (Var[46]) goto 00DB;
[00E0] endCutscene();
[00E4] unless (VAR_ACTIVE_OBJECT1 == 60) goto 010E;
[00EA] print(8,"You found the key!");
[00FC] waitForMessage();
[00FD] cutscene();
[00FE] doSentence(253,366,0,1);
[0105] breakHere();
[0106] unless (Var[46]) goto 0105;
[010A] endCutscene();
[010E] print(8,"I don't take bribes!");
[0122] waitForMessage();
[0123] doSentence(253,367,0,1);
[012A] VAR_ACTIVE_OBJECT2 = Var[234];
[012D] VAR_RESULT = getActorWalkBox(1);
[0130] unless (VAR_RESULT == 7) goto 019A;
[0136] unless (VAR_ACTIVE_OBJECT2 == 1) goto 0179;
[013C] VAR_RESULT = getActorRoom(8);
[013F] unless (VAR_RESULT == VAR_ROOM) goto 0179;
[0144] faceActor(8,VAR_EGO);
[0147] print(8,"Don't give anything to the prisoner!");
[0169] breakHere();
[016A] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[016D] unless (VAR_RESULT == 1) goto 0176;
[0173] setOwnerOf(VAR_ACTIVE_OBJECT1,2);
[0179] unless (VAR_ACTIVE_OBJECT2 == 2) goto 019A;
[017F] Var[66] = getActorX(1);
[0182] walkActorTo(2,Var[66],49);
[0186] waitForActor(2);
[0188] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[018B] unless (VAR_RESULT == 1) goto 0197;
[0191] doSentence(3,VAR_ACTIVE_OBJECT1,2,0);
```

## OCv2_0372 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0372.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0372.txt); entry `0039`.

```text
[0039] doSentence(VAR_ACTIVE_VERB,366,0,0);
[0040] stopObjectCode();
```

## OCv2_0372 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0372.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0372.txt); entry `0039`.

```text
[0039] doSentence(VAR_ACTIVE_VERB,366,0,0);
[0040] stopObjectCode();
```

## OCv2_0372 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0372.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0372.txt); entry `001D`.

```text
[001D] unless (VAR_EGO == 2) goto 0038;
[0023] printEgo("Let me outta here!");
[0034] walkActorTo(2,22,58);
[0038] stopObjectCode();
```

## OCv2_0372 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0372.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0372.txt); entry `0041`.

```text
[0041] breakHere();
[0042] VAR_RESULT = getActorWalkBox(1);
[0045] unless (VAR_RESULT == 7) goto 0053;
[004B] setBitVar(1475,0,Var[235]);
[0053] setBitVar(1475,0,Var[234]);
```

## OCv2_0373 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0373.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0373.txt); entry `0013`.

```text
[0013] walkActorTo(8,16,52);
[0017] waitForActor(8);
[0019] animateActor(8,245);
[001C] delay(60);
[0020] walkActorTo(8,29,52);
[0024] waitForActor(8);
[0026] animateActor(8,244);
[0029] delay(60);
```

## OCv2_0374 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0374.txt](../../zak/converted/scripts_flat/LFv2_0018/ROv2/OCv2_0374.txt); entry `0013`.

```text
[0013] walkActorTo(8,14,62);
[0017] waitForActor(8);
[0019] animateActor(8,246);
[001C] waitForMessage();
[001D] walkActorTo(8,29,62);
[0021] waitForActor(8);
[0023] animateActor(8,246);
[0026] waitForMessage();
```

## SCv2_0113 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0018/SCv2_0113.txt](../../zak/converted/scripts_flat/LFv2_0018/SCv2_0113.txt); entry `0000`.

```text
[0000] cutscene();
[0001] VAR_EGO = 8;
[0005] Var[45] = Var[234];
[0008] unless (getState08(59)) goto 0029;
[000D] VAR_RESULT = getObjectOwner(59);
[0011] unless (VAR_RESULT == 2) goto 0029;
[0017] printEgo("Where's the flag?");
[0028] waitForMessage();
[0029] setOwnerOf(82,14);
[002D] Var[48] = Var[234];
[0030] Var[49] = Var[234];
[0033] unless (!getState04(169)) goto 0047;
[0038] unless (!getState04(372)) goto 0042;
[003D] Var[48]++;
[0042] Var[49]++;
[0047] setBitVar(1541,0,Var[235]);
[004C] Var[66] = 14;
[0050] unless (Var[66] != 49) goto 0080;
[0056] unless (Var[66] != 61) goto 0080;
[005C] VAR_RESULT = getObjectOwner(Var[66]);
[005F] unless (VAR_RESULT == 1) goto 0080;
[0065] setOwnerOf(Var[66],8);
[0068] unless (Var[66] != 59) goto 0073;
[006E] Var[45]++;
[0070] setState04(368);
[0073] unless (Var[66] == 50) goto 0080;
[0079] doSentence(7,50,0,1);
[0080] Var[66]++;
[0082] unless (Var[66] > 81) goto 0050;
[0088] beginOverride();
[008C] unless (VAR_ROOM != 18) goto 00C2;
[0092] printEgo("You're coming with me!");
[00A7] waitForMessage();
[00A8] putActorInRoom(1,18);
[00AB] putActor(1,15,48);
[00AF] animateActor(1,248);
[00B2] putActorInRoom(8,18);
[00B5] putActor(8,5,48);
[00B9] actorFollowCamera(VAR_EGO);
[00BB] delay(60);
[00C2] printEgo("Don't move!");
[00CE] waitForMessage();
[00CF] faceActor(1,8);
[00D2] stopObjectCode();
[02A1] unless (VAR_OVERRIDE) goto 031E;
[02A5] doSentence(STOP);
[02A7] putActorInRoom(1,18);
[02AA] putActor(1,22,40);
[02AE] putActorInRoom(8,18);
[02B1] putActor(8,10,60);
[02B5] animateActor(1,250);
[02B8] animateActor(8,248);
[02BB] loadRoom(18);
[02BD] Var[167] = 52;
[02C1] Var[164] = 44;
[02C5] unless (getState04(39)) goto 02DD;
[02CA] clearState04(39);
[02CD] ActorOps(1,[Costume(1)]);
[02D1] Var[172] = 1;
[02D5] Var[176] = 5;
[02D9] Var[180] = 9;
[02DD] startScript(5);
[02DF] VAR_RESULT = getObjectOwner(59);
[02E3] unless (VAR_RESULT == 8) goto 02F4;
[02E9] Var[50] = 59;
[02ED] doSentence(253,365,0,1);
[02F4] VAR_RESULT = getObjectOwner(60);
[02F8] unless (VAR_RESULT == 8) goto 0309;
[02FE] Var[50] = 60;
[0302] doSentence(253,365,0,1);
[0309] doSentence(2,368,0,1);
[0310] doSentence(2,363,0,1);
[0317] doSentence(2,366,0,1);
[031E] unless (Var[48]) goto 03A8;
[0322] VAR_RESULT = getObjectOwner(59);
[0326] unless (VAR_RESULT == 1) goto 0337;
[032C] Var[50] = 59;
[0330] doSentence(253,365,0,1);
[0337] beginOverride();
[033B] Var[48] = Var[234];
[033E] loadRoom(0);
[0340] dummy(EE);
[0341] print(255,"A LONG time later^");
[0353] waitForMessage();
[0354] loadRoom(18);
[0356] beginOverride();
[035A] setState08(60);
[035D] setState08(366);
[0360] setBoxFlags(5,0);
[0363] putActorAtObject(8,366);
[0367] delay(60);
[036B] printEgo("OK, you can go. But don't EVER steal\x01\x01our flag again!");
[0398] walkActorToObject(8,60);
[039C] waitForActor(8);
[039E] clearState08(60);
[03A1] doSentence(253,367,0,1);
[03A8] setState04(372);
[03AB] VAR_EGO = 1;
[03AF] startScript(19);
[03B1] endCutscene();
[03B2] unless (Var[49]) goto 03BC;
[03B6] Var[166] = 4;
[03BA] chainScript(78);
[03BC] stopObjectCode();
```

## SCv2_0135 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0018/SCv2_0135.txt](../../zak/converted/scripts_flat/LFv2_0018/SCv2_0135.txt); entry `0000`.

```text
[0000] cutscene();
[0001] stopSound(87);
[0003] stopSound(96);
[0005] beginOverride();
[0009] setState08(364);
[000C] setState08(373);
[000F] setState08(60);
[0012] clearState08(363);
[0015] clearState08(368);
[0018] setState08(366);
[001B] Var[51] = 2;
[001F] unless (VAR_EGO == 2) goto 0029;
[0025] Var[51] = 1;
[0029] putActorInRoom(Var[51],0);
[002C] ActorOps(8,[Color(9, 6)]);
[0031] ActorOps(8,[Color(3, 4)]);
[0036] ActorOps(8,[TalkColor(12)]);
[003A] putActorInRoom(8,18);
[003D] putActor(8,26,52);
[0041] animateActor(8,251);
[0044] putActorInRoom(VAR_EGO,18);
[0047] putActor(VAR_EGO,22,40);
[004B] animateActor(VAR_EGO,250);
[004E] loadRoom(18);
[0050] delay(60);
[0054] startSound(94);
[0056] breakHere();
[0057] clearState08(366);
[005A] delay(60);
[005E] doSentence(253,373,0,1);
[0065] print(8,"I just can't understand it. A nice \x02\x02");
[0085] unless (Var[51] == 2) goto 0096;
[008B] print(8,"boy\x01\x01\x02\x02");
[0096] print(8,"girl\x01\x01\x02\x02");
[009F] print(8,"like you flagrantly breaking the law!");
[00C2] waitForMessage();
[00C3] delay(60);
[00C7] doSentence(254,373,0,1);
[00CE] delay(60);
[00D2] walkActorToObject(8,366);
[00D6] waitForActor(8);
[00D8] print(8,"I hope you ROT in there!");
[00EE] waitForMessage();
[00EF] animateActor(8,246);
[00F2] delay(60);
[00F6] print(8,"As for you^");
[0102] walkActorTo(8,21,62);
[0106] waitForActor(8);
[0108] delay(60);
[010C] doSentence(253,374,0,1);
[0113] print(8,"I'll assume your finger slipped while\x01\x01entering the Exit Visa Code.");
[014F] waitForMessage();
[0150] breakHere();
[0151] print(8,"But if not, I think it's high time you\x01\x01bought a legitimate copy of this game!");
[0193] waitForMessage();
[0194] breakHere();
[0195] print(8,"The Designers worked long and hard to\x01\x01bring `Zak McKracken` to life^");
[01D2] waitForMessage();
[01D3] breakHere();
[01D4] printEgo("YEAH!");
[01DB] waitForMessage();
[01DC] doSentence(254,374,0,1);
[01E3] animateActor(8,255);
[01E6] animateActor(8,247);
[01E9] waitForActor(8);
[01EB] print(8,"Keep quiet, prisoner!");
[0201] waitForMessage();
[0202] animateActor(8,246);
[0205] delay(60);
[0209] doSentence(253,374,0,1);
[0210] print(8,"And we want to encourage them to create\x01\x01more exciting adventures, don't we?");
[0253] waitForMessage();
[0254] breakHere();
[0255] printEgo("YEAH!");
[025C] waitForMessage();
[025D] doSentence(254,374,0,1);
[0264] animateActor(8,255);
[0267] animateActor(8,247);
[026A] delay(60);
[026E] printEgo("Ooops!\x03\x03Sorry!");
[027D] waitForMessage();
[027E] delay(60);
[0282] animateActor(8,246);
[0285] delay(60);
[0289] doSentence(253,374,0,1);
[0290] print(8,"So hurry on down to your local software\x01\x01store and buy your very own copy.");
[02CF] waitForMessage();
[02D0] doSentence(254,374,0,1);
[02D7] animateActor(8,255);
[02DA] animateActor(8,246);
[02DD] delay(30);
[02E1] print(8,"Remember^");
[02ED] waitForMessage();
[02EE] delay(30);
[02F2] print(8,"Only YOU can stop worldwide stupidity!");
[0316] waitForMessage();
[0317] VAR_EGO = 8;
[031B] doSentence(1,363,0,0);
[0322] waitForSentence();
[0323] delay(60);
[0327] animateActor(8,246);
[032A] print(8,"See ya!");
[0333] waitForMessage();
[0334] walkActorTo(8,2,56);
[0338] waitForActor(8);
[033A] putActorInRoom(8,0);
[033D] delay(60);
[0341] doSentence(2,363,0,1);
[0348] delay(30);
[034C] loadSound(103)
[034F] lockSound(103)
[0352] loadSound(104)
[0355] lockSound(104)
[0358] startMusic(103);
[035A] startScript(128);
[035C] delay(240);
[0360] ActorOps(0,[TalkColor(15)]);
[0364] print(255,"            THE GAME IS OVER");
[037A] setState08(374);
[037D] delay(6);
[0381] clearState08(374);
[0384] delay(6);
[0388] unless (!VAR_HAVE_MSG) goto 037A;
[038C] delay(300);
[0390] print(255,"      Press ESCAPE to play again.");
[03B0] stopScript(128);
[03B2] stopMusic();
[03B3] restart();
[03B4] endCutscene();
[03B5] stopObjectCode();
```
