# Room 040 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0040/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0040/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] Var[199] = Var[234];
[0007] doSentence(253,604,0,1);
[000E] unless (VAR_ROOM == 131) goto 007A;
[0014] clearState04(77);
[0017] unless (!getState04(602)) goto 002C;
[001C] setState04(602);
[001F] VAR_RESULT = getObjectOwner(77);
[0023] unless (VAR_RESULT == 15) goto 002C;
[0029] pickupObject(77);
[002C] ActorOps(11,[Costume(10)]);
[0030] ActorOps(11,[Sound(6)]);
[0034] ActorOps(11,[TalkColor(12)]);
[0038] ActorOps(11,[Name("pilot")]);
[0042] putActorInRoom(11,131);
[0045] putActor(11,62,48);
[0049] setActorElevation(11,0);
[004C] animateActor(11,249);
[004F] loadCostume(19)
[0052] ActorOps(12,[Costume(19)]);
[0056] loadScript(50)
[0059] doSentence(250,598,0,1);
[0060] RoomScroll(60,60);
[0064] Var[233] = VAR_EGO;
[0067] setBitVar(1440,Var[233],Var[235]);
[006C] startSound(41);
[006E] VAR_RESULT = isScriptRunning(69);
[0071] unless (!VAR_RESULT) goto 0077;
[0075] startScript(69);
[007A] VAR_RESULT = getActorCostume(1);
[007D] unless (VAR_RESULT == 39) goto 0086;
[0086] VAR_RESULT = getActorCostume(1);
[0089] unless (VAR_RESULT == 9) goto 00A2;
[008F] unless (getState04(77)) goto 009A;
[0094] animateActor(1,72);
[009A] animateActor(1,76);
[009D] setBitVar(1441,0,Var[235]);
[00A2] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0040/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0040/ROv2/EXv2.txt); entry `0000`.

```text
[0000] stopSound(41);
[0002] unless (Var[233]) goto 000B;
[0006] setBitVar(1440,Var[233],Var[234]);
[000B] stopObjectCode();
```

## OCv2_0077 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0077.txt](../../zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0077.txt); entry `0075`.

```text
[0075] unless (VAR_EGO == 2) goto 008E;
[007B] printEgo("Are you kidding?");
[008E] unless (VAR_ROOM == 131) goto 00A6;
[0094] setState04(77);
[0097] stopScript(69);
[0099] setBitVar(1510,0,Var[234]);
[009E] clearState04(602);
[00A1] startScript(50);
[00A6] unless (VAR_ROOM == 132) goto 00B2;
[00AC] setState04(77);
[00B2] printEgo("Not here!");
[00BC] stopObjectCode();
```

## OCv2_0077 / verb 6
Source: [zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0077.txt](../../zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0077.txt); entry `0051`.

```text
[0051] printEgo("I'm already wearing it.");
[0067] stopObjectCode();
```

## OCv2_0077 / verb 7
Source: [zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0077.txt](../../zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0077.txt); entry `0068`.

```text
[0068] printEgo("Better not.");
[0074] stopObjectCode();
```

## OCv2_0077 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0077.txt](../../zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0077.txt); entry `0075`.

```text
[0075] unless (VAR_EGO == 2) goto 008E;
[007B] printEgo("Are you kidding?");
[008E] unless (VAR_ROOM == 131) goto 00A6;
[0094] setState04(77);
[0097] stopScript(69);
[0099] setBitVar(1510,0,Var[234]);
[009E] clearState04(602);
[00A1] startScript(50);
[00A6] unless (VAR_ROOM == 132) goto 00B2;
[00AC] setState04(77);
[00B2] printEgo("Not here!");
[00BC] stopObjectCode();
```

## OCv2_0077 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0077.txt](../../zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0077.txt); entry `0075`.

```text
[0075] unless (VAR_EGO == 2) goto 008E;
[007B] printEgo("Are you kidding?");
[008E] unless (VAR_ROOM == 131) goto 00A6;
[0094] setState04(77);
[0097] stopScript(69);
[0099] setBitVar(1510,0,Var[234]);
[009E] clearState04(602);
[00A1] startScript(50);
[00A6] unless (VAR_ROOM == 132) goto 00B2;
[00AC] setState04(77);
[00B2] printEgo("Not here!");
[00BC] stopObjectCode();
```

## OCv2_0077 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0077.txt](../../zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0077.txt); entry `0026`.

```text
[0026] printEgo("Jumpty Dumpty Parachute\x03\x03Lifetime guarantee.");
[0050] stopObjectCode();
```

## OCv2_0598 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0598.txt](../../zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0598.txt); entry `0013`.

```text
[0013] Var[45] = 10;
[0017] Var[46] = 603;
[001B] Var[47] = 598;
[001F] drawObject(Var[47],255,255);
[0023] delay(9);
[0027] Var[47]++;
[0029] unless (Var[47] > 601) goto 001F;
[002F] Var[45]--;
[0031] unless (!Var[45]) goto 005E;
[0035] Var[45] = getRandomNr(10);
[0038] unless (Var[46] != 603) goto 0045;
[003E] Var[46] = 603;
[0045] Var[45] = getRandomNr(5);
[0048] VAR_RESULT = getRandomNr(1);
[004B] unless (VAR_RESULT) goto 0056;
[004F] Var[46] = 602;
[0056] Var[46] = 604;
[005A] Var[45] += 2;
[005E] drawObject(Var[46],255,255);
```

## OCv2_0599 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0599.txt](../../zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0599.txt); entry `0013`.

```text
[0013] startSound(41);
[0015] Var[50] = getRandomNr(60);
[0018] delayVariable(Var[50]);
[001A] stopSound(41);
[001C] Var[50] = getRandomNr(60);
[001F] delayVariable(Var[50]);
```

## OCv2_0604 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0604.txt](../../zak/converted/scripts_flat/LFv2_0040/ROv2/OCv2_0604.txt); entry `0013`.

```text
[0013] Var[203] = Var[235];
[0016] breakHere();
[0017] unless (VAR_ACTIVE_VERB == 3) goto 0086;
[001D] unless (VAR_ACTIVE_OBJECT2 == 11) goto 0086;
[0023] waitForMessage();
[0024] unless (VAR_ACTIVE_OBJECT1 == 77) goto 0048;
[002A] print(11,"You'd better hold on to that!");
[0048] unless (VAR_ACTIVE_OBJECT1 == 46) goto 0067;
[004E] print(11,"Sure! I'll take a swig!");
[0067] print(11,"Not now! I'm flyin' the plane!");
[0083] VAR_ACTIVE_OBJECT2 = Var[234];
```

## SCv2_0069 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0040/SCv2_0069.txt](../../zak/converted/scripts_flat/LFv2_0040/SCv2_0069.txt); entry `0000`.

```text
[0000] cursorCommand(255, 1);
[0003] delay(180);
[0007] print(11,"I love the Triangle.");
[001B] waitForMessage();
[001C] delay(60);
[0020] VAR_RESULT = getBitVar(1510,VAR_EGO);
[0025] unless (!VAR_RESULT) goto 0093;
[0029] print(11,"You never know what to expect.");
[0045] waitForMessage();
[0046] delay(60);
[004A] VAR_RESULT = getObjectOwner(77);
[004E] unless (VAR_RESULT == VAR_EGO) goto 0071;
[0053] print(11,"That's why I gave you a chute.");
[0071] print(11,"Sorry, I'm out of chutes!");
[0089] animateActor(11,246);
[008C] waitForMessage();
[008D] animateActor(11,245);
[0093] print(11,"Looks like you love it too.");
[00AC] VAR_RESULT = getObjectOwner(77);
[00B0] unless (VAR_RESULT != VAR_EGO) goto 00B8;
[00B8] waitForMessage();
[00B9] delay(60);
[00BD] animateActor(11,246);
[00C0] print(11,"Hey, I got a good one for ya.");
[00D9] waitForMessage();
[00DA] delay(30);
[00DE] animateActor(11,245);
[00E1] Var[51] = getRandomNr(2);
[00E4] unless (Var[51] == Var[234]) goto 010D;
[00E9] print(11,"Y'know why this is called a biplane?");
[010D] unless (Var[51] == Var[235]) goto 013E;
[0112] print(11,"What do biplanes have in common with\x01\x01drunks?");
[013E] unless (Var[51] == 2) goto 0175;
[0144] print(11,"Heard about our basketball team for\x01\x01small people?");
[0172] /* goto 0175; */
[0175] waitForMessage();
[0176] delay(120);
[017A] animateActor(11,246);
[017D] unless (Var[51] == Var[234]) goto 01A9;
[0182] print(11,"Cuz ya never know if it's coming back!\x01\x01\x02\x02");
[01A9] unless (Var[51] == Var[235]) goto 01D2;
[01AE] print(11,"They both have to be `propped up`!\x01\x01\x02\x02");
[01D2] unless (Var[51] == 2) goto 0200;
[01D8] print(11,"They're called the `Bermuda Shorts`!\x01\x01\x02\x02");
[01FD] /* goto 0200; */
[0200] delay(180);
[0204] animateActor(11,245);
[0207] print(11,"HA HA HA!");
[0211] waitForMessage();
[0212] animateActor(VAR_EGO,246);
[0215] delay(30);
[0219] animateActor(VAR_EGO,24);
[021C] delay(60);
[0220] animateActor(VAR_EGO,16);
[0223] delay(30);
[0227] animateActor(VAR_EGO,245);
[022A] unless (Var[233] == 2) goto 02AD;
[0230] cutscene();
[0231] delay(60);
[0235] print(11,"Well, time to be heading back. Hope you\x01\x01enjoyed the trip.");
[0268] waitForMessage();
[0269] putActorInRoom(2,143);
[026C] putActor(2,2,60);
[0270] loadRoom(143);
[0272] walkActorTo(2,15,60);
[0276] waitForActor(2);
[0278] animateActor(2,246);
[027B] delay(60);
[027F] print(2,"That was fun.");
[028D] waitForMessage();
[028E] delay(60);
[0292] setBitVar(1510,0,Var[234]);
[0297] setBitVar(1510,Var[233],Var[235]);
[029C] setOwnerOf(77,0);
[02A0] setOwnerOf(77,15);
[02A4] endCutscene();
[02A5] cursorCommand(1, 0);
[02A8] Var[199] = Var[235];
[02AB] stopScript(0);
[02AD] doSentence(250,599,0,1);
[02B4] delay(90);
[02B8] print(11,"Uh oh. Not again!");
[02C9] animateActor(11,246);
[02CC] waitForMessage();
[02CD] animateActor(11,245);
[02D0] delay(360);
[02D4] cursorCommand(247, 1);
[02D7] cutscene();
[02D8] beginOverride();
[02DC] clearState04(602);
[02DF] VAR_RESULT = getBitVar(1510,VAR_EGO);
[02E4] unless (!VAR_RESULT) goto 0334;
[02E8] setBitVar(1510,VAR_EGO,Var[235]);
[02ED] printEgo("Hey! What's happening? Everything's\x01\x01fading. The water below is shimmering!");
[0334] printEgo("Here we go!");
[033F] Var[118] = VAR_EGO;
[0342] VAR_EGO = 11;
[0346] animateActor(Var[118],247);
[0349] delay(60);
[034D] animateActor(Var[118],245);
[0350] breakHere();
[0351] animateActor(Var[118],246);
[0354] delay(60);
[0358] unless (!VAR_HAVE_MSG) goto 0346;
[035C] putActorInRoom(12,132);
[035F] putActor(12,0,18);
[0363] setActorElevation(12,0);
[0366] animateActor(12,249);
[0369] loadRoom(132);
[036B] setCameraAt(20);
[036D] doSentence(250,599,0,1);
[0374] walkActorTo(12,45,18);
[0378] waitForActor(12);
[037A] putActorInRoom(12,54);
[037D] putActor(12,18,80);
[0381] setState08(753);
[0384] loadRoom(54);
[0386] setCameraAt(20);
[0388] delay(120);
[038C] Var[119] = Var[234];
[038F] setActorElevation(12,Var[119]);
[0392] breakHere();
[0393] Var[119]++;
[0395] unless (Var[119] > 50) goto 038F;
[039B] clearState08(753);
[039E] delay(240);
[03A2] unless (VAR_ROOM == 10) goto 03AC;
[03A8] loadRoom(0);
[03AA] stopScript(64);
[03AC] putActorInRoom(12,0);
[03AF] setActorElevation(12,0);
[03B2] clearState08(229);
[03B5] clearState02(229);
[03B8] clearState08(239);
[03BB] clearState08(238);
[03BE] clearState02(238);
[03C1] loadRoom(10);
[03C3] setCameraAt(20);
[03C5] putActorInRoom(Var[118],10);
[03C8] putActor(Var[118],8,50);
[03CC] animateActor(Var[118],249);
[03CF] putActorInRoom(11,10);
[03D2] putActor(11,12,50);
[03D6] startScript(5);
[03D8] walkActorToObject(11,230);
[03DC] delay(120);
[03E0] printEgo("I HATE it when this happens!");
[03F9] waitForActor(11);
[03FB] walkActorTo(Var[118],25,52);
[03FF] waitForActor(Var[118]);
[0401] animateActor(Var[118],247);
[0404] waitForMessage();
[0405] delay(60);
[0409] animateActor(11,246);
[040C] waitForActor(11);
[040E] printEgo("Now, what was the combination?");
[042A] waitForMessage();
[042B] delay(60);
[042F] printEgo("Oh yeah.");
[0438] waitForMessage();
[0439] Var[117] = 0;
[043D] Var[14] = Var[117];
[0440] Var[14] += 113;
[0444] doSentence(9,Var[14],0,0);
[044A] waitForSentence();
[044B] breakHere();
[044C] unless (!Var[50]) goto 044B;
[0450] delay(30);
[0454] Var[117]++;
[0456] unless (Var[117] > 3) goto 043D;
[045C] walkActorTo(11,0,53);
[0460] printEgo("You coming or staying?");
[0475] Var[233] = Var[234];
[0478] breakHere();
[0479] VAR_RESULT = getActorX(11);
[047C] unless (VAR_RESULT < 22) goto 0478;
[0482] animateActor(Var[118],244);
[0485] delay(60);
[0489] waitForMessage();
[048A] animateActor(Var[118],246);
[048D] VAR_EGO = Var[118];
[0490] endCutscene();
[0491] waitForActor(11);
[0493] VAR_RESULT = getActorX(11);
[0496] unless (VAR_RESULT) goto 04A1;
[049A] walkActorTo(11,0,53);
[04A1] Var[117] = 12;
[04A5] setActorElevation(11,Var[117]);
[04A8] breakHere();
[04A9] Var[117]++;
[04AB] unless (Var[117] > 17) goto 04A5;
[04B1] animateActor(11,250);
[04B4] stopObjectCode();
```
