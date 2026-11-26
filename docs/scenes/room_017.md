# Room 017 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] ActorOps(8,[Name("policeman")]);
[0012] unless (Var[247] == 352) goto 0022;
[0018] doSentence(253,362,0,1);
[0022] doSentence(253,353,0,1);
[0029] loadScript(117)
[002C] unless (!getState08(59)) goto 0038;
[0031] doSentence(250,357,0,1);
[0038] unless (getState04(359)) goto 0054;
[003D] doSentence(250,360,0,1);
[0044] VAR_RESULT = getActorRoom(8);
[0047] unless (VAR_RESULT == 17) goto 0054;
[004D] doSentence(250,361,0,1);
[0054] ActorOps(10,[TalkColor(5)]);
[0058] ActorOps(10,[Costume(26)]);
[005C] ActorOps(10,[Color(9, 5)]);
[0061] ActorOps(10,[Color(3, 1)]);
[0066] ActorOps(10,[Sound(6)]);
[006A] ActorOps(10,[Name("guard")]);
[0074] putActorInRoom(10,17);
[0077] putActor(10,80,11);
[007B] doSentence(253,356,0,1);
[0082] animateActor(10,250);
[0085] Var[203]++;
[0087] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/EXv2.txt); entry `0000`.

```text
[0000] ActorOps(10,[Name()]);
[0005] Var[203] = Var[234];
[0008] setState08(362);
[000B] setState02(362);
[000E] stopSound(80);
[0010] stopObjectCode();
```

## OCv2_0059 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0059.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0059.txt); entry `001D`.

```text
[001D] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0022] stopObjectCode();
```

## OCv2_0059 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0059.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0059.txt); entry `0023`.

```text
[0023] doSentence(253,358,0,1);
[002A] stopObjectCode();
```

## OCv2_0348 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0348.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0348.txt); entry `0017`.

```text
[0017] unless (VAR_EGO == 1) goto 0040;
[001D] printEgo("I think it's the name of a cigarette.");
[0040] printEgo("It obviously says `JAIL.`");
[0058] stopObjectCode();
```

## OCv2_0349 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0349.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0349.txt); entry `0017`.

```text
[0017] VAR_RESULT = getBitVar(1478,VAR_EGO);
[001C] unless (VAR_RESULT) goto 002A;
[0020] doSentence(253,351,0,1);
[002A] doSentence(253,354,0,1);
[0031] unless (Var[45]) goto 0041;
[0035] VAR_RESULT = getBitVar(1478,Var[45]);
[003A] unless (VAR_RESULT) goto 0041;
[0041] print(10,"Only devotees of Guru may enter.");
[005F] stopObjectCode();
```

## OCv2_0350 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0350.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0350.txt); entry `001B`.

```text
[001B] startScript(10);
[001D] setState08(363);
[0020] stopObjectCode();
```

## OCv2_0350 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0350.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0350.txt); entry `0021`.

```text
[0021] startScript(11);
[0023] clearState08(363);
[0026] stopObjectCode();
```

## OCv2_0350 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0350.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0350.txt); entry `0027`.

```text
[0027] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0052;
[002B] unless (VAR_EGO == 1) goto 004C;
[0031] VAR_RESULT = getBitVar(1541,0);
[0036] unless (VAR_RESULT) goto 004C;
[003A] VAR_RESULT = getActorRoom(8);
[003D] unless (VAR_RESULT == 18) goto 004C;
[0043] VAR_RESULT = isScriptRunning(112);
[0046] unless (!VAR_RESULT) goto 004C;
[004A] startScript(112);
[004C] loadRoomWithEgo(363,18,255,255);
[0052] stopObjectCode();
```

## OCv2_0351 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0351.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0351.txt); entry `001D`.

```text
[001D] printEgo("It's already open.");
[002F] stopObjectCode();
```

## OCv2_0351 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0351.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0351.txt); entry `0030`.

```text
[0030] startScript(11);
[0032] setState02(VAR_ACTIVE_OBJECT1);
[0034] stopObjectCode();
```

## OCv2_0351 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0351.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0351.txt); entry `0035`.

```text
[0035] VAR_RESULT = isScriptRunning(112);
[0038] unless (VAR_RESULT) goto 004C;
[003C] unless (VAR_EGO == 1) goto 004C;
[0042] putActorInRoom(8,17);
[0045] putActor(8,83,60);
[0049] animateActor(8,251);
[004C] cursorCommand(9, 0);
[004F] loadRoomWithEgo(375,19,5,56);
[0055] stopObjectCode();
```

## OCv2_0351 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0351.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0351.txt); entry `0056`.

```text
[0056] print(10,"You may enter.");
[0065] waitForMessage();
[0066] unless (!getState08(351)) goto 0082;
[006B] walkActorTo(10,83,11);
[006F] waitForActor(10);
[0071] animateActor(10,247);
[0074] breakHere();
[0075] startSound(10);
[0077] setState08(351);
[007A] clearState02(351);
[007D] breakHere();
[007E] walkActorTo(10,80,11);
[0082] waitForActor(10);
[0084] animateActor(10,246);
[0087] doSentence(253,354,0,1);
[008E] unless (Var[45]) goto 00D5;
[0092] waitForMessage();
[0093] print(10,"Or, if you wish, your friend may enter.\x01\x01But only one may visit Guru at a time.");
[00D5] stopObjectCode();
```

## OCv2_0352 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0352.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0352.txt); entry `001A`.

```text
[001A] unless (classOfIs(VAR_ACTIVE_OBJECT2,128)) goto 0024;
[001F] startScript(31);
[0024] unless (VAR_ACTIVE_OBJECT2 == 55) goto 0032;
[002A] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0032] startScript(3);
[0034] stopObjectCode();
```

## OCv2_0352 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0352.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0352.txt); entry `0035`.

```text
[0035] doSentence(12,356,0,0);
[003C] stopObjectCode();
```

## OCv2_0352 / verb 19
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0352.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0352.txt); entry `003D`.

```text
[003D] unless (classOfIs(VAR_ACTIVE_OBJECT2,128)) goto 0047;
[0042] startScript(31);
[0047] printEgo("It doesn't want that.");
[005B] stopObjectCode();
```

## OCv2_0353 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0353.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0353.txt); entry `0013`.

```text
[0013] Var[47] = Var[234];
[0016] drawObject(353,255,255);
[001B] delay(27);
[001F] drawObject(354,255,255);
[0024] breakHere();
[0025] breakHere();
[0026] drawObject(355,255,255);
[002B] delay(25);
[002F] drawObject(354,255,255);
[0034] breakHere();
[0035] breakHere();
[0036] Var[47]++;
```

## OCv2_0354 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0354.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0354.txt); entry `0013`.

```text
[0013] Var[45] = 1;
[0017] unless (VAR_EGO == 1) goto 0021;
[001D] Var[45] = 2;
[0021] VAR_RESULT = getDist(Var[45],10);
[0026] unless (VAR_RESULT > 20) goto 002F;
[002C] Var[45] = Var[234];
[002F] stopObjectCode();
```

## OCv2_0356 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0356.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0356.txt); entry `004D`.

```text
[004D] doSentence(11,352,VAR_ACTIVE_OBJECT2,0);
[0053] stopObjectCode();
```

## OCv2_0356 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0356.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0356.txt); entry `0024`.

```text
[0024] printEgo("Y A K - 1\x01\x01Insert CashCard for airport transit.");
[004C] stopObjectCode();
```

## OCv2_0356 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0356.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0356.txt); entry `0054`.

```text
[0054] breakHere();
[0055] unless (VAR_ACTIVE_VERB == 3) goto 0065;
[005B] unless (VAR_ACTIVE_OBJECT2 > 2) goto 0065;
[0061] waitForActor(VAR_EGO);
[0063] startScript(139);
```

## OCv2_0357 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0357.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0357.txt); entry `0013`.

```text
[0016] Var[66] = getRandomNr(120);
[0019] delayVariable(Var[66]);
[001B] drawObject(357,255,255);
[0020] Var[66] = getRandomNr(120);
[0023] delayVariable(Var[66]);
[0025] drawObject(358,255,255);
```

## OCv2_0358 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0358.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0358.txt); entry `0013`.

```text
[0013] unless (VAR_EGO == 1) goto 0034;
[0019] pickupObject(VAR_ACTIVE_OBJECT1);
[001B] doSentence(254,357,0,1);
[0022] clearState08(357);
[0025] clearState08(358);
[0028] VAR_RESULT = isScriptRunning(124);
[002B] unless (!VAR_RESULT) goto 0031;
[002F] startScript(112);
[0034] printEgo("That would be stealing!");
[004A] doSentence(STOP);
[004C] stopObjectCode();
```

## OCv2_0359 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0359.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0359.txt); entry `0016`.

```text
[0016] unless (VAR_ACTIVE_OBJECT2 == 49) goto 00B1;
[001C] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 0037;
[0020] printEgo("It's already on fire.");
[0037] unless (VAR_EGO == 2) goto 00A3;
[003D] VAR_RESULT = getBitVar(1475,0);
[0042] unless (VAR_RESULT) goto 0077;
[0046] printEgo("I shouldn't do this, but I have to get\x01\x01Zak out of jail!");
[0077] printEgo("I'd need a REALLY good reason to commit\x01\x01arson!");
[00A3] setState04(VAR_ACTIVE_OBJECT1);
[00A5] doSentence(250,360,0,1);
[00AC] startScript(114);
[00B1] startScript(3);
[00B3] stopObjectCode();
```

## OCv2_0360 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0360.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0360.txt); entry `0013`.

```text
[0013] startSound(80);
[0015] drawObject(360,255,255);
[001A] breakHere();
[001B] drawObject(361,255,255);
[0020] breakHere();
```

## OCv2_0361 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0361.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0361.txt); entry `0013`.

```text
[0013] walkActorTo(8,108,56);
[0017] waitForActor(8);
[0019] animateActor(8,247);
[001C] delay(60);
[0020] walkActorTo(8,111,56);
[0024] waitForActor(8);
[0026] animateActor(8,247);
[0029] delay(60);
```

## OCv2_0362 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0362.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0362.txt); entry `001C`.

```text
[001C] animateActor(VAR_EGO,246);
[001F] breakHere();
[0020] printEgo("Yeah, sure!");
[002C] stopObjectCode();
```

## OCv2_0362 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0362.txt](../../zak/converted/scripts_flat/LFv2_0017/ROv2/OCv2_0362.txt); entry `002D`.

```text
[002D] VerbOps(New-31(0,19,0,0,"Chew@@@@@@@@@"));
[0041] Var[46] = Var[234];
[0044] doSentence(254,353,0,1);
[004B] breakHere();
[004C] unless (VAR_ACTIVE_VERB) goto 004B;
[0050] unless (VAR_ACTIVE_VERB == 31) goto 0086;
[0056] VAR_ACTIVE_VERB = Var[234];
[0059] doSentence(253,353,0,1);
[0060] breakHere();
[0061] unless (Var[47]) goto 0060;
[0065] Var[46]++;
[0067] unless (Var[46] == 16) goto 0086;
[006D] unless (getState08(362)) goto 0086;
[0072] VerbOps(New-32(16,19,2,0,"   Poop@@@"));
[0083] cursorCommand(0, 0);
[0086] unless (VAR_ACTIVE_VERB == 32) goto 00A1;
[008C] VAR_ACTIVE_VERB = Var[234];
[008F] startSound(18);
[0091] breakHere();
[0092] clearState08(362);
[0095] clearState02(362);
[0098] breakHere();
[0099] stopSound(18);
[009B] VerbOps(Delete(2));
[009E] cursorCommand(0, 0);
```

## SCv2_0031 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0017/SCv2_0031.txt](../../zak/converted/scripts_flat/LFv2_0017/SCv2_0031.txt); entry `0000`.

```text
[0000] Var[14] = VAR_EGO;
[0003] Var[14] += 61;
[0007] unless (Var[14] < 100) goto 0029;
[000D] printEgo("I must not have enough money.");
[0027] stopScript(0);
[0029] cutscene();
[002A] Var[14] = VAR_EGO;
[002D] Var[14] += 61;
[0031] Var[Var[14]] -= 100;
[0035] startSound(84);
[0037] breakHere();
[0038] VAR_RESULT = isSoundRunning(84);
[003B] unless (!VAR_RESULT) goto 0037;
[003F] unless (VAR_EGO == 1) goto 006B;
[0045] VAR_RESULT = getDist(VAR_EGO,8);
[004A] unless (VAR_RESULT <= 4) goto 006B;
[0050] print(8,"You're not getting away!");
[006B] loadRoom(0);
[006D] ActorOps(8,[Name()]);
[0072] dummy(EE);
[0073] print(255,"A long dusty ride later^");
[008A] waitForMessage();
[008B] loadRoomWithEgo(218,148,34,60);
[0091] endCutscene();
[0092] stopObjectCode();
```

## SCv2_0112 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0017/SCv2_0112.txt](../../zak/converted/scripts_flat/LFv2_0017/SCv2_0112.txt); entry `0000`.

```text
[0000] VAR_RESULT = isScriptRunning(124);
[0003] unless (VAR_RESULT) goto 0009;
[0007] stopScript(0);
[0009] unless (VAR_ACTIVE_OBJECT1 == 59) goto 0034;
[000F] Var[66] = 24;
[0013] unless (VAR_MACHINE_SPEED > 40) goto 001D;
[0019] Var[66] = 16;
[001D] Var[246] = Var[235];
[0020] delay(15);
[0024] unless (VAR_ROOM == 18) goto 002D;
[002D] Var[246]++;
[002F] unless (Var[246] > Var[66]) goto 0020;
[0034] stopScript(118);
[0036] delay(60);
[003A] Var[66] = getActorRoom(VAR_EGO);
[003D] VAR_RESULT = getActorRoom(8);
[0040] unless (VAR_RESULT == Var[66]) goto 0066;
[0045] unless (VAR_ROOM == 18) goto 0060;
[004B] VAR_RESULT = getActorRoom(1);
[004E] unless (VAR_RESULT == 18) goto 0057;
[0057] walkActorToObject(8,363);
[005B] waitForActor(8);
[0066] unless (VAR_ROOM == 17) goto 006F;
[006F] unless (VAR_ROOM == 18) goto 009B;
[0075] startScript(117);
[0077] breakHere();
[0078] VAR_RESULT = getActorRoom(1);
[007B] unless (VAR_RESULT == 18) goto 008E;
[0081] putActorInRoom(8,18);
[0084] putActor(8,2,54);
[0088] animateActor(8,249);
[008E] putActorInRoom(8,17);
[0091] putActor(8,17,56);
[0095] actorFollowCamera(1);
[0097] animateActor(8,250);
[009A] breakHere();
[009B] VAR_RESULT = getActorRoom(1);
[009E] unless (VAR_RESULT == VAR_ROOM) goto 00D2;
[00A3] VAR_RESULT = getBitVar(1541,0);
[00A8] unless (VAR_RESULT) goto 00C4;
[00AC] print(8,"There's my prisoner!");
[00C4] print(8,"Stop, thief!");
[00D2] breakHere();
[00D3] Var[66] = getActorRoom(1);
[00D6] VAR_RESULT = getActorRoom(8);
[00D9] unless (VAR_RESULT != Var[66]) goto 011C;
[00DE] unless (Var[66] == 18) goto 0101;
[00E4] delay(120);
[00E8] VAR_RESULT = getActorRoom(1);
[00EB] unless (VAR_RESULT == 18) goto 00FE;
[00F1] startScript(117);
[00F3] breakHere();
[00F4] putActorInRoom(8,18);
[00F7] putActor(8,2,54);
[00FB] animateActor(8,249);
[0101] unless (Var[66] == 19) goto 010A;
[010A] unless (Var[66] == 17) goto 0113;
[0113] putActorInRoom(8,18);
[0116] putActor(8,15,60);
[011A] stopScript(0);
[011C] unless (VAR_ROOM != Var[66]) goto 0135;
[0121] Var[67] = getActorX(1);
[0124] Var[67] -= 2;
[0128] Var[61] = getActorY(1);
[012B] putActorInRoom(8,Var[66]);
[012E] putActor(8,Var[67],Var[61]);
[0135] walkActorToActor(8,1,0);
[0139] breakHere();
[013A] VAR_RESULT = getDist(8,1);
[0140] unless (VAR_RESULT <= 2) goto 0149;
[0149] breakHere();
[014A] VAR_RESULT = getDist(8,1);
[0150] unless (VAR_RESULT <= 2) goto 00D2;
[0156] animateActor(1,255);
[0159] animateActor(8,255);
[015C] faceActor(8,1);
[015F] stopObjectCode();
```

## SCv2_0114 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0017/SCv2_0114.txt](../../zak/converted/scripts_flat/LFv2_0017/SCv2_0114.txt); entry `0000`.

```text
[0000] VAR_RESULT = isScriptRunning(112);
[0003] unless (!VAR_RESULT) goto 000B;
[0007] delay(180);
[000B] stopScript(112);
[000D] breakHere();
[000E] VAR_RESULT = getActorRoom(7);
[0011] unless (VAR_RESULT != 17) goto 000D;
[0017] stopScript(118);
[0019] cutscene();
[001A] Var[117] = VAR_EGO;
[001D] loadRoom(17);
[001F] actorFollowCamera(10);
[0021] walkActorTo(10,100,58);
[0025] waitForActor(10);
[0027] animateActor(10,244);
[002A] print(10,"FIRE! FIRE!");
[0037] waitForMessage();
[0038] VAR_EGO = 8;
[003C] actorFollowCamera(8);
[003E] delay(60);
[0042] animateActor(8,255);
[0045] animateActor(8,246);
[0048] waitForActor(8);
[004A] printEgo("A fire?");
[0052] waitForMessage();
[0053] unless (VAR_ROOM == 18) goto 008B;
[0059] doSentence(1,363,0,0);
[0060] waitForSentence();
[0061] breakHere();
[0062] VAR_RESULT = isSoundRunning(10);
[0065] unless (!VAR_RESULT) goto 0061;
[0069] VAR_RESULT = getActorRoom(Var[117]);
[006C] unless (VAR_RESULT == 17) goto 007E;
[0072] putActorInRoom(8,17);
[0075] putActor(8,17,56);
[0079] actorFollowCamera(VAR_EGO);
[007E] putActorInRoom(8,17);
[0081] putActor(8,110,56);
[0085] animateActor(8,251);
[008B] walkActorTo(10,80,11);
[008F] waitForActor(10);
[0091] animateActor(10,246);
[0094] VAR_EGO = Var[117];
[0097] endCutscene();
[0098] chainScript(124);
```

## SCv2_0117 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0017/SCv2_0117.txt](../../zak/converted/scripts_flat/LFv2_0017/SCv2_0117.txt); entry `0000`.

```text
[0000] unless (!getState08(350)) goto 001B;
[0005] setState08(350);
[0008] setState08(363);
[000B] unless (VAR_ROOM == 18) goto 0013;
[0011] startSound(10);
[0013] unless (VAR_ROOM == 17) goto 001B;
[0019] startSound(10);
[001B] stopObjectCode();
```

## SCv2_0118 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0017/SCv2_0118.txt](../../zak/converted/scripts_flat/LFv2_0017/SCv2_0118.txt); entry `0000`.

```text
[0000] clearState04(359);
[0003] doSentence(254,361,0,1);
[000A] doSentence(254,360,0,1);
[0011] clearState08(360);
[0014] clearState08(361);
[0017] stopSound(80);
[0019] delay(120);
[001D] print(8,"Finally!");
[0028] VAR_RESULT = getBitVar(1541,0);
[002D] unless (VAR_RESULT) goto 004D;
[0031] VAR_RESULT = getBitVar(1475,0);
[0036] unless (!VAR_RESULT) goto 004D;
[003A] Var[66] = getActorRoom(1);
[003D] unless (Var[66] == 17) goto 0045;
[0043] chainScript(112);
[0045] unless (Var[66] == 18) goto 004D;
[004B] chainScript(112);
[004D] unless (VAR_ROOM == 17) goto 0059;
[0053] walkActorToObject(8,350);
[0057] waitForActor(8);
[0059] startScript(117);
[005B] breakHere();
[005C] putActorInRoom(8,18);
[005F] putActor(8,2,54);
[0063] doSentence(253,367,0,1);
[006A] stopObjectCode();
```

## SCv2_0124 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0017/SCv2_0124.txt](../../zak/converted/scripts_flat/LFv2_0017/SCv2_0124.txt); entry `0000`.

```text
[0000] setState08(359);
[0003] doSentence(250,361,0,1);
[000A] delay(18000);
[000E] chainScript(118);
```

## SCv2_0139 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0017/SCv2_0139.txt](../../zak/converted/scripts_flat/LFv2_0017/SCv2_0139.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_OBJECT2 == 10) goto 0085;
[0006] VAR_ACTIVE_OBJECT2 = Var[234];
[0009] unless (VAR_ACTIVE_OBJECT1 == 45) goto 006F;
[000F] VAR_RESULT = getBitVar(1478,VAR_EGO);
[0014] unless (VAR_RESULT) goto 002E;
[0018] print(10,"Welcome, devotee!");
[002E] setBitVar(1478,VAR_EGO,Var[235]);
[0033] VAR_RESULT = getObjectOwner(46);
[0037] unless (VAR_RESULT != 15) goto 0041;
[003D] setOwnerOf(45,0);
[0041] print(10,"Oh! I see you are a follower of Guru!");
[0061] setState04(45);
[0064] waitForMessage();
[0065] doSentence(253,351,0,1);
[006F] print(10,"No, thank you.");
[007E] waitForMessage();
[007F] animateActor(10,246);
[0085] unless (VAR_ACTIVE_OBJECT2 == 8) goto 00EC;
[008B] VAR_ACTIVE_OBJECT2 = Var[234];
[008E] VAR_RESULT = isScriptRunning(124);
[0091] unless (VAR_RESULT) goto 00A2;
[0095] print(8,"NOT NOW!");
[00A2] unless (VAR_ACTIVE_OBJECT1 == 59) goto 00C7;
[00A8] print(8,"The law was still broken.");
[00C0] setOwnerOf(59,8);
[00C7] unless (VAR_ACTIVE_OBJECT1 == 60) goto 00E0;
[00CD] print(8,"Thank you.");
[00D9] setOwnerOf(60,8);
[00E0] print(8,"No bribes!");
[00EC] stopObjectCode();
```
