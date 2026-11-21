# Room 013 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/ENv2.txt); entry `0000`.

```text
[0000] doSentence(253,282,0,1);
[0007] clearState04(289);
[000A] unless (Var[147] == Var[235]) goto 0029;
[000F] loadSound(93)
[0012] unless (Var[247] == 285) goto 0022;
[0018] doSentence(253,287,0,1);
[0022] doSentence(250,286,0,1);
[0029] unless (Var[153] == 4) goto 003D;
[002F] doSentence(250,277,0,1);
[0036] doSentence(253,281,0,1);
[003D] unless (getState08(281)) goto 0049;
[0042] doSentence(250,283,0,1);
[0049] doSentence(253,291,0,1);
[0050] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/EXv2.txt); entry `0000`.

```text
[0000] stopSound(80);
[0002] unless (Var[153] == 3) goto 0017;
[0008] unless (getState04(289)) goto 0017;
[000D] clearState08(276);
[0010] setState08(275);
[0013] Var[153] = 4;
[0017] VAR_RESULT = isScriptRunning(35);
[001A] unless (VAR_RESULT) goto 0027;
[001E] stopScript(35);
[0020] doSentence(253,290,0,1);
[0027] stopObjectCode();
```

## OCv2_0053 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0053.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0053.txt); entry `0030`.

```text
[0030] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[0033] unless (VAR_RESULT == 15) goto 0043;
[0039] doSentence(253,275,0,1);
[0043] unless (VAR_ACTIVE_OBJECT2 == 49) goto 005B;
[0049] printEgo("Not in my hands!");
[005B] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0060] stopObjectCode();
```

## OCv2_0053 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0053.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0053.txt); entry `0028`.

```text
[0028] doSentence(253,275,0,1);
[002F] stopObjectCode();
```

## OCv2_0054 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0054.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0054.txt); entry `002A`.

```text
[002A] unless (VAR_ACTIVE_OBJECT2 == 49) goto 0042;
[0030] printEgo("Not in my hands!");
[0042] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0047] stopObjectCode();
```

## OCv2_0054 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0054.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0054.txt); entry `0022`.

```text
[0022] doSentence(253,276,0,1);
[0029] stopObjectCode();
```

## OCv2_0272 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0272.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0272.txt); entry `001C`.

```text
[001C] loadRoomWithEgo(267,12,255,255);
[0022] stopObjectCode();
```

## OCv2_0273 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0273.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0273.txt); entry `0028`.

```text
[0028] unless (Var[153] == 2) goto 004A;
[002E] printEgo("I'd rather start it on fire.");
[004A] unless (Var[153] == Var[235]) goto 006B;
[004F] printEgo("I'll leave it for kindling.");
[006B] unless (Var[153] == 3) goto 008A;
[0071] printEgo("I just need to burn them.");
[008A] unless (Var[153] == 4) goto 00A9;
[0090] printEgo("No way! I'd burn myself!");
[00A9] startScript(3);
[00AB] stopObjectCode();
```

## OCv2_0273 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0273.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0273.txt); entry `0028`.

```text
[0028] unless (Var[153] == 2) goto 004A;
[002E] printEgo("I'd rather start it on fire.");
[004A] unless (Var[153] == Var[235]) goto 006B;
[004F] printEgo("I'll leave it for kindling.");
[006B] unless (Var[153] == 3) goto 008A;
[0071] printEgo("I just need to burn them.");
[008A] unless (Var[153] == 4) goto 00A9;
[0090] printEgo("No way! I'd burn myself!");
[00A9] startScript(3);
[00AB] stopObjectCode();
```

## OCv2_0273 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0273.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0273.txt); entry `00AC`.

```text
[00AC] unless (classOfIs(VAR_ACTIVE_OBJECT2,1)) goto 00E1;
[00B1] setOwnerOf(VAR_ACTIVE_OBJECT2,0);
[00B4] unless (Var[153] != 4) goto 00D1;
[00BA] setState08(288);
[00BD] clearState02(288);
[00C0] VAR_RESULT = isScriptRunning(35);
[00C3] unless (VAR_RESULT) goto 00CE;
[00C7] doSentence(253,280,0,1);
[00D1] printEgo("It burned up.");
[00E1] unless (VAR_ACTIVE_OBJECT2 == 53) goto 00EA;
[00EA] unless (VAR_ACTIVE_OBJECT2 == 54) goto 016B;
[00F0] unless (Var[153] == 3) goto 00FC;
[00FC] unless (Var[153] != 2) goto 0115;
[0102] printEgo("Now I need some wood!");
[0115] unless (Var[153] == Var[235]) goto 013F;
[011A] printEgo("I'll put it behind the first nest.");
[0138] Var[47] += 20;
[013C] setState04(290);
[013F] setOwnerOf(VAR_ACTIVE_OBJECT2,0);
[0142] unless (Var[153] == 4) goto 014B;
[014B] unless (Var[153] == 2) goto 0154;
[0154] unless (Var[153] == 3) goto 0160;
[0160] Var[153] = Var[235];
[0163] drawObject(274,255,255);
[016B] unless (VAR_ACTIVE_OBJECT2 == 52) goto 0192;
[0171] setOwnerOf(52,0);
[0175] unless (Var[153] == Var[235]) goto 0186;
[017A] Var[153] = 3;
[017E] drawObject(276,255,255);
[0186] Var[153] = 2;
[018A] drawObject(275,255,255);
[0192] unless (VAR_ACTIVE_OBJECT2 == 49) goto 01A2;
[0198] doSentence(253,288,0,1);
[01A2] printEgo("I don't want to put that in the pit.");
[01C0] doSentence(253,291,0,1);
[01C7] stopObjectCode();
```

## OCv2_0273 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0273.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0273.txt); entry `0028`.

```text
[0028] unless (Var[153] == 2) goto 004A;
[002E] printEgo("I'd rather start it on fire.");
[004A] unless (Var[153] == Var[235]) goto 006B;
[004F] printEgo("I'll leave it for kindling.");
[006B] unless (Var[153] == 3) goto 008A;
[0071] printEgo("I just need to burn them.");
[008A] unless (Var[153] == 4) goto 00A9;
[0090] printEgo("No way! I'd burn myself!");
[00A9] startScript(3);
[00AB] stopObjectCode();
```

## OCv2_0274 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0274.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0274.txt); entry `0013`.

```text
[0013] pickupObject(VAR_ACTIVE_OBJECT1);
[0015] printEgo("Got it!");
[001D] setObjectName(VAR_ACTIVE_OBJECT1,"bird nest");
[0029] stopObjectCode();
```

## OCv2_0275 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0275.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0275.txt); entry `0013`.

```text
[0013] unless (VAR_ACTIVE_VERB == 14) goto 002E;
[0019] printEgo("I can't reach it.");
[0029] doSentence(STOP);
[002E] unless (VAR_ACTIVE_VERB == 11) goto 0064;
[0034] unless (VAR_ACTIVE_OBJECT2 == 49) goto 003D;
[003D] unless (classOfIs(VAR_ACTIVE_OBJECT2,2)) goto 004C;
[0042] doSentence(253,274,0,1);
[004C] printEgo("I can't reach it with that.");
[0064] stopObjectCode();
```

## OCv2_0276 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0276.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0276.txt); entry `0013`.

```text
[0013] unless (Var[147] == 2) goto 0042;
[0019] unless (VAR_EGO == 1) goto 003D;
[001F] printEgo("Too bad I had to kill the squirrel.");
[003D] pickupObject(VAR_ACTIVE_OBJECT1);
[0042] printEgo("The two-headed squirrel is guarding it.");
[0066] doSentence(STOP);
[0068] stopObjectCode();
```

## OCv2_0277 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0277.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0277.txt); entry `0013`.

```text
[0013] startSound(80);
[0015] Var[46] = getRandomNr(3);
[0018] Var[46] += 277;
[001C] drawObject(Var[46],255,255);
[0020] breakHere();
```

## OCv2_0280 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0280.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0280.txt); entry `0013`.

```text
[0013] delay(60);
[0017] doSentence(253,281,0,1);
[001E] startSound(80);
[0020] Var[44] = 1;
[0024] Var[46] = getRandomNr(2);
[0027] Var[46] += 289;
[002B] drawObject(Var[46],28,11);
[002F] breakHere();
[0030] Var[44]++;
[0032] unless (Var[44] > 8) goto 0024;
[0038] clearState08(288);
[003B] setState02(288);
[003E] clearState08(289);
[0041] clearState08(290);
[0044] clearState08(291);
[0047] VAR_RESULT = isScriptRunning(35);
[004A] unless (!VAR_RESULT) goto 005E;
[004E] unless (Var[153] != 4) goto 005E;
[0054] stopSound(80);
[0056] breakHere();
[0057] doSentence(253,282,0,1);
[005E] stopObjectCode();
```

## OCv2_0281 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0281.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0281.txt); entry `001E`.

```text
[001E] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0028;
[0022] loadRoomWithEgo(297,129,255,255);
[0028] stopObjectCode();
```

## OCv2_0281 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0281.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0281.txt); entry `0029`.

```text
[0029] RoomColor(1,1);
[002D] RoomColor(9,9);
[0031] RoomColor(4,4);
[0035] RoomColor(6,6);
[0039] RoomColor(12,12);
[003D] lights(11,0,0);
[0041] stopObjectCode();
```

## OCv2_0282 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0282.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0282.txt); entry `0027`.

```text
[0027] unless (VAR_CURRENT_LIGHTS == 11) goto 0087;
[002D] unless (VAR_ACTIVE_OBJECT2 == 25) goto 006D;
[0033] cursorCommand(15, 2);
[0036] clearState08(VAR_ACTIVE_OBJECT1);
[0038] setState02(VAR_ACTIVE_OBJECT1);
[003A] printEgo("Connect the dots^ la, la, la-la.");
[0057] delay(120);
[005B] setState08(281);
[005E] startSound(78);
[0060] doSentence(250,283,0,1);
[0067] cursorCommand(247, 1);
[006D] printEgo("Hmmm, nothing happened.");
[0087] printEgo("I need more light in here.");
[009E] stopObjectCode();
```

## OCv2_0282 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0282.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0282.txt); entry `009F`.

```text
[009F] printEgo("It looks like an unfinished drawing made\x01\x01of yellow dots.");
[00D1] stopObjectCode();
```

## OCv2_0282 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0282.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0282.txt); entry `00D2`.

```text
[00D2] RoomColor(0,1);
[00D6] RoomColor(0,9);
[00DA] RoomColor(8,4);
[00DE] RoomColor(7,6);
[00E2] RoomColor(8,12);
[00E6] lights(Var[234],0,0);
[00EA] stopObjectCode();
```

## OCv2_0283 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0283.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0283.txt); entry `0013`.

```text
[0013] unless (!getState08(55)) goto 0027;
[0018] breakHere();
[0019] drawObject(283,255,255);
[001E] breakHere();
[001F] drawObject(284,255,255);
[0027] stopObjectCode();
```

## OCv2_0284 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0284.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0284.txt); entry `0013`.

```text
[0013] doSentence(253,282,0,1);
[001A] delay(60);
[001E] walkActorToObject(VAR_EGO,273);
[0022] printEgo("Oh no! The fire has gone out!");
[003B] stopObjectCode();
```

## OCv2_0285 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0285.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0285.txt); entry `0030`.

```text
[0030] printEgo("I don't want to get bit.");
[0045] stopObjectCode();
```

## OCv2_0285 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0285.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0285.txt); entry `0030`.

```text
[0030] printEgo("I don't want to get bit.");
[0045] stopObjectCode();
```

## OCv2_0285 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0285.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0285.txt); entry `0046`.

```text
[0046] unless (classOfIs(VAR_ACTIVE_OBJECT2,2)) goto 007E;
[004B] unless (VAR_EGO == 1) goto 0069;
[0051] doSentence(254,286,0,1);
[0058] clearState08(285);
[005B] clearState08(286);
[005E] clearState08(287);
[0061] clearState02(54);
[0064] startScript(144);
[0069] printEgo("That would kill it!");
[007E] unless (VAR_ACTIVE_OBJECT2 == 55) goto 008C;
[0084] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[008F] stopObjectCode();
[0090] printEgo("It just wants to be left alone.");
[00AB] stopObjectCode();
```

## OCv2_0285 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0285.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0285.txt); entry `0030`.

```text
[0030] printEgo("I don't want to get bit.");
[0045] stopObjectCode();
```

## OCv2_0285 / verb 19
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0285.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0285.txt); entry `0090`.

```text
[0090] printEgo("It just wants to be left alone.");
[00AB] stopObjectCode();
```

## OCv2_0285 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0285.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0285.txt); entry `00AC`.

```text
[00AC] clearState02(285);
[00AF] Var[48] = getRandomNr(2);
[00B2] Var[48] += 285;
[00B6] unless (Var[48] == 286) goto 00BE;
[00BC] startSound(93);
[00BE] drawObject(Var[48],255,255);
[00C2] breakHere();
[00C3] stopObjectCode();
```

## OCv2_0286 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0286.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0286.txt); entry `0013`.

```text
[0013] breakHere();
[0014] Var[45] = getClosestObjActor(54);
[0018] VAR_RESULT = getDist(Var[45],54);
[001D] unless (VAR_RESULT < 6) goto 002D;
[0023] doSentence(250,285,0,1);
[002D] unless (!getState02(285)) goto 004B;
[0032] VAR_RESULT = isScriptRunning(67);
[0035] unless (!VAR_RESULT) goto 004B;
[0039] setState02(285);
[003C] setState02(286);
[003F] setState02(287);
[0042] clearState08(285);
[0045] clearState08(286);
[0048] clearState08(287);
```

## OCv2_0287 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0287.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0287.txt); entry `0013`.

```text
[0013] doSentence(254,286,0,1);
[001A] VerbOps(New-31(0,19,0,0,"  Left head@@"));
[002E] VerbOps(New-33(13,19,2,0,"   Chatter@@@"));
[0042] VerbOps(New-32(26,19,3,0,"  Right head@@"));
[0057] breakHere();
[0058] unless (VAR_ACTIVE_VERB) goto 0057;
[005C] drawObject(286,255,255);
[0061] breakHere();
[0062] unless (VAR_ACTIVE_VERB == 31) goto 0070;
[0068] drawObject(287,255,255);
[006D] VAR_ACTIVE_VERB = Var[234];
[0070] unless (VAR_ACTIVE_VERB == 32) goto 007E;
[0076] drawObject(285,255,255);
[007B] VAR_ACTIVE_VERB = Var[234];
[007E] unless (VAR_ACTIVE_VERB == 33) goto 00A1;
[0084] VAR_ACTIVE_VERB = Var[234];
[0087] Var[49] = 1;
[008B] doSentence(253,285,0,1);
[0092] breakHere();
[0093] breakHere();
[0094] Var[49]++;
[0096] unless (Var[49] > 12) goto 008B;
[009C] drawObject(286,255,255);
```

## OCv2_0288 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0288.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0288.txt); entry `0035`.

```text
[0035] unless (VAR_ACTIVE_OBJECT2 == 49) goto 0045;
[003B] doSentence(253,288,0,1);
[0045] startScript(3);
[0047] stopObjectCode();
```

## OCv2_0288 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0288.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0288.txt); entry `001C`.

```text
[001C] printEgo("No way, it's all dirty now!");
[0034] stopObjectCode();
```

## OCv2_0288 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0288.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0288.txt); entry `0048`.

```text
[0048] unless (getState08(288)) goto 0054;
[004D] doSentence(253,280,0,1);
[0054] unless (Var[153] == Var[234]) goto 007F;
[0059] unless (!getState08(288)) goto 007C;
[005E] printEgo("There's nothing in there to burn.");
[007F] unless (Var[153] == 2) goto 00BB;
[0085] breakHere();
[0086] unless (!getState08(288)) goto 0085;
[008B] delay(60);
[008F] printEgo("The branch won't catch. I need some\x01\x01kindling.");
[00BB] unless (Var[153] == Var[235]) goto 00C6;
[00C6] unless (Var[153] == 3) goto 00D8;
[00CC] VAR_RESULT = isScriptRunning(35);
[00CF] unless (!VAR_RESULT) goto 00D5;
[00D3] startScript(35);
[00D8] unless (Var[153] == 4) goto 00F2;
[00DE] printEgo("It's already lit.");
[00EF] /* goto 00F2; */
[00F2] stopObjectCode();
```

## OCv2_0289 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0289.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0289.txt); entry `0013`.

```text
[0013] doSentence(253,281,0,1);
[001A] startSound(80);
[001C] Var[46] = getRandomNr(2);
[001F] Var[46] += 289;
[0023] drawObject(Var[46],25,11);
[0027] breakHere();
```

## OCv2_0290 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0290.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0290.txt); entry `0013`.

```text
[0013] stopSound(80);
[0015] clearState08(274);
[0018] clearState08(289);
[001B] clearState08(290);
[001E] clearState08(291);
[0021] unless (Var[153] == Var[235]) goto 0029;
[0026] Var[153] = Var[234];
[0029] stopObjectCode();
```

## OCv2_0291 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0291.txt](../../zak/converted/scripts_flat/LFv2_0013/ROv2/OCv2_0291.txt); entry `0013`.

```text
[0013] unless (Var[153] == 2) goto 002D;
[0019] setObjectName(273,"branch in pit");
[002D] unless (Var[153] == Var[235]) goto 0044;
[0032] setObjectName(273,"nest in pit");
[0044] unless (Var[153] == 3) goto 0060;
[004A] setObjectName(273,"nest and branch");
[0060] unless (Var[153] == 4) goto 0078;
[0066] setObjectName(273,"pit of fire");
[0078] setObjectName(273,"fire pit");
[0084] stopObjectCode();
```

## SCv2_0035 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0013/SCv2_0035.txt](../../zak/converted/scripts_flat/LFv2_0013/SCv2_0035.txt); entry `0000`.

```text
[0000] Var[47] = 20;
[0004] unless (getState04(290)) goto 000D;
[0009] Var[47] = 40;
[000D] doSentence(250,289,0,1);
[0014] setState04(289);
[0017] delay(60);
[001B] Var[47]--;
[001D] unless (!Var[47]) goto 0017;
[0021] clearState04(289);
[0024] doSentence(254,289,0,1);
[002B] doSentence(253,290,0,1);
[0032] unless (Var[153] == 3) goto 0053;
[0038] clearState08(276);
[003B] setState08(275);
[003E] Var[153] = 4;
[0042] breakHere();
[0043] doSentence(253,291,0,1);
[004A] doSentence(250,277,0,1);
[0051] stopScript(0);
[0053] unless (VAR_ROOM == 13) goto 0067;
[0059] doSentence(253,284,0,1);
[0060] doSentence(253,291,0,1);
[0067] stopObjectCode();
```
