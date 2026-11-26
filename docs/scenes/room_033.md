# Room 033 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] unless (VAR_ROOM == 182) goto 0080;
[000A] RoomScroll(20,20);
[000E] Var[154]++;
[0010] Var[53] = Var[234];
[0013] setBoxFlags(0,128);
[0016] setBoxFlags(3,128);
[0019] setBoxFlags(4,128);
[001C] setBoxFlags(9,64);
[001F] setBoxFlags(12,64);
[0022] setBoxFlags(10,64);
[0025] unless (getState08(537)) goto 002D;
[002A] setBoxFlags(10,5);
[002D] unless (getState08(530)) goto 003B;
[0032] setBoxFlags(9,0);
[0035] setBoxFlags(12,0);
[003B] unless (getState08(536)) goto 0046;
[0040] setBoxFlags(10,5);
[0046] Var[66] = 1;
[004A] VAR_RESULT = getActorRoom(Var[66]);
[004D] unless (VAR_RESULT == 182) goto 0063;
[0053] VAR_RESULT = getActorWalkBox(Var[66]);
[0056] unless (VAR_RESULT == 10) goto 0063;
[005C] putActorInRoom(Var[66],182);
[005F] putActor(Var[66],30,59);
[0063] Var[66]++;
[0065] unless (Var[66] > 4) goto 004A;
[006B] loadSound(92)
[006E] lockSound(92)
[0071] loadSound(91)
[0074] lockSound(91)
[0077] loadSound(90)
[007A] lockSound(90)
[0080] RoomScroll(60,60);
[0084] loadSound(32)
[0087] lockSound(32)
[008A] loadSound(48)
[008D] lockSound(48)
[0090] unless (!getState04(558)) goto 0097;
[0095] Var[154]++;
[0097] setBoxFlags(8,128);
[009A] animateActor(VAR_EGO,251);
[009D] clearState08(517);
[00A0] Var[49] = 563;
[00A4] unless (VAR_ROOM == 189) goto 00B6;
[00AA] Var[48] = 508;
[00AE] Var[54] = 508;
[00B2] Var[50] = 198;
[00B6] unless (VAR_ROOM == 190) goto 00D1;
[00BC] Var[48] = 509;
[00C0] Var[54] = 509;
[00C4] setState08(519);
[00C7] setState02(520);
[00CA] Var[50] = 197;
[00D1] clearState08(519);
[00D4] clearState02(520);
[00D7] unless (VAR_ROOM == 191) goto 00E9;
[00DD] Var[48] = 510;
[00E1] Var[50] = 196;
[00E5] Var[54] = 510;
[00E9] doSentence(253,521,0,1);
[00F0] setBoxFlags(11,64);
[00F3] unless (getState04(Var[54])) goto 0100;
[00F7] setState08(535);
[00FA] clearState02(535);
[00FD] setBoxFlags(11,5);
[0100] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/EXv2.txt); entry `0000`.

```text
[0000] Var[154] = Var[234];
[0003] clearState08(535);
[0006] setState02(535);
[0009] setBoxFlags(8,0);
[000C] setBoxFlags(0,0);
[000F] setBoxFlags(3,0);
[0012] setBoxFlags(4,0);
[0015] unlockSound(92)
[0018] unlockSound(91)
[001B] unlockSound(90)
[001E] unlockSound(32)
[0021] unlockSound(48)
[0024] stopObjectCode();
```

## OCv2_0515 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0515.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0515.txt); entry `0020`.

```text
[0020] loadRoomWithEgo(Var[48],32,255,255);
[0025] stopObjectCode();
```

## OCv2_0516 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0516.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0516.txt); entry `0020`.

```text
[0020] doSentence(13,515,0,1);
[0027] stopObjectCode();
```

## OCv2_0517 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0517.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0517.txt); entry `0027`.

```text
[0027] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0046;
[002B] printEgo("I can't do it! It's too big!");
[0046] printEgo("It's already open.");
[0058] stopObjectCode();
```

## OCv2_0517 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0517.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0517.txt); entry `0059`.

```text
[0059] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 007A;
[005D] printEgo("The door's too heavy to move.");
[007A] printEgo("It's already closed.");
[008E] stopObjectCode();
```

## OCv2_0517 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0517.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0517.txt); entry `0027`.

```text
[0027] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0046;
[002B] printEgo("I can't do it! It's too big!");
[0046] printEgo("It's already open.");
[0058] stopObjectCode();
```

## OCv2_0517 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0517.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0517.txt); entry `0059`.

```text
[0059] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 007A;
[005D] printEgo("The door's too heavy to move.");
[007A] printEgo("It's already closed.");
[008E] stopObjectCode();
```

## OCv2_0517 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0517.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0517.txt); entry `008F`.

```text
[008F] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0098;
[0093] loadRoomWithEgo(Var[49],Var[50],255,255);
[0098] stopObjectCode();
```

## OCv2_0518 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0518.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0518.txt); entry `001B`.

```text
[001B] unless (VAR_ACTIVE_OBJECT2 == 70) goto 0033;
[0021] setOwnerOf(70,14);
[0025] setBoxFlags(11,5);
[0028] setState08(535);
[002B] clearState02(535);
[002E] setState04(Var[54]);
[0033] startScript(3);
[0035] stopObjectCode();
```

## OCv2_0520 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0520.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0520.txt); entry `002B`.

```text
[002B] cursorCommand(15, 2);
[002E] Var[66] = 1;
[0032] VAR_RESULT = getActorRoom(Var[66]);
[0035] unless (VAR_RESULT == VAR_ROOM) goto 004A;
[003A] VAR_RESULT = getActorWalkBox(Var[66]);
[003D] unless (VAR_RESULT == 7) goto 004A;
[0043] Var[67] = getActorX(Var[66]);
[0046] walkActorTo(Var[66],Var[67],52);
[004A] Var[66]++;
[004C] unless (Var[66] > 4) goto 0032;
[0052] startSound(32);
[0054] unless (getState04(71)) goto 006E;
[0059] stopScript(55);
[005B] Var[158] = 32;
[005F] clearState04(71);
[0062] setObjectName(71,"boom box");
[006E] Var[46] = 521;
[0072] Var[47] = 526;
[0076] unless (!getState08(517)) goto 007F;
[007B] drawObject(Var[47],255,255);
[007F] unless (VAR_ROOM != 190) goto 009B;
[0085] unless (Var[158] == 32) goto 0097;
[008B] VAR_RESULT = getBitVar(1440,0);
[0090] unless (VAR_RESULT) goto 0097;
[0097] drawObject(Var[46],255,255);
[009B] breakHere();
[009C] Var[46]++;
[009E] Var[47]++;
[00A0] unless (Var[46] > 524) goto 0076;
[00A6] VAR_RESULT = isSoundRunning(32);
[00A9] unless (!VAR_RESULT) goto 006E;
[00AD] clearState08(524);
[00B0] clearState08(529);
[00B3] stopSound(32);
[00B5] delay(60);
[00B9] startSound(48);
[00BB] unless (!getState08(517)) goto 00C8;
[00C0] setState02(525);
[00C3] setState08(Var[48]);
[00C8] clearState02(525);
[00CB] clearState08(Var[48]);
[00CD] doSentence(253,521,0,1);
[00D4] delay(60);
[00D8] unless (Var[158] == 32) goto 00EC;
[00DE] VAR_RESULT = getBitVar(1440,0);
[00E3] unless (VAR_RESULT) goto 00EC;
[00E7] setBitVar(1440,0,Var[234]);
[00EC] VAR_RESULT = getBitVar(1558,0);
[00F1] unless (!VAR_RESULT) goto 0134;
[00F5] printEgo("Waycool earstuff! Those old aliens\x01\x01sure played herenow noizbop!");
[012F] setBitVar(1558,0,Var[235]);
[0134] cursorCommand(247, 1);
[0137] stopObjectCode();
```

## OCv2_0520 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0520.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0520.txt); entry `002B`.

```text
[002B] cursorCommand(15, 2);
[002E] Var[66] = 1;
[0032] VAR_RESULT = getActorRoom(Var[66]);
[0035] unless (VAR_RESULT == VAR_ROOM) goto 004A;
[003A] VAR_RESULT = getActorWalkBox(Var[66]);
[003D] unless (VAR_RESULT == 7) goto 004A;
[0043] Var[67] = getActorX(Var[66]);
[0046] walkActorTo(Var[66],Var[67],52);
[004A] Var[66]++;
[004C] unless (Var[66] > 4) goto 0032;
[0052] startSound(32);
[0054] unless (getState04(71)) goto 006E;
[0059] stopScript(55);
[005B] Var[158] = 32;
[005F] clearState04(71);
[0062] setObjectName(71,"boom box");
[006E] Var[46] = 521;
[0072] Var[47] = 526;
[0076] unless (!getState08(517)) goto 007F;
[007B] drawObject(Var[47],255,255);
[007F] unless (VAR_ROOM != 190) goto 009B;
[0085] unless (Var[158] == 32) goto 0097;
[008B] VAR_RESULT = getBitVar(1440,0);
[0090] unless (VAR_RESULT) goto 0097;
[0097] drawObject(Var[46],255,255);
[009B] breakHere();
[009C] Var[46]++;
[009E] Var[47]++;
[00A0] unless (Var[46] > 524) goto 0076;
[00A6] VAR_RESULT = isSoundRunning(32);
[00A9] unless (!VAR_RESULT) goto 006E;
[00AD] clearState08(524);
[00B0] clearState08(529);
[00B3] stopSound(32);
[00B5] delay(60);
[00B9] startSound(48);
[00BB] unless (!getState08(517)) goto 00C8;
[00C0] setState02(525);
[00C3] setState08(Var[48]);
[00C8] clearState02(525);
[00CB] clearState08(Var[48]);
[00CD] doSentence(253,521,0,1);
[00D4] delay(60);
[00D8] unless (Var[158] == 32) goto 00EC;
[00DE] VAR_RESULT = getBitVar(1440,0);
[00E3] unless (VAR_RESULT) goto 00EC;
[00E7] setBitVar(1440,0,Var[234]);
[00EC] VAR_RESULT = getBitVar(1558,0);
[00F1] unless (!VAR_RESULT) goto 0134;
[00F5] printEgo("Waycool earstuff! Those old aliens\x01\x01sure played herenow noizbop!");
[012F] setBitVar(1558,0,Var[235]);
[0134] cursorCommand(247, 1);
[0137] stopObjectCode();
```

## OCv2_0520 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0520.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0520.txt); entry `002B`.

```text
[002B] cursorCommand(15, 2);
[002E] Var[66] = 1;
[0032] VAR_RESULT = getActorRoom(Var[66]);
[0035] unless (VAR_RESULT == VAR_ROOM) goto 004A;
[003A] VAR_RESULT = getActorWalkBox(Var[66]);
[003D] unless (VAR_RESULT == 7) goto 004A;
[0043] Var[67] = getActorX(Var[66]);
[0046] walkActorTo(Var[66],Var[67],52);
[004A] Var[66]++;
[004C] unless (Var[66] > 4) goto 0032;
[0052] startSound(32);
[0054] unless (getState04(71)) goto 006E;
[0059] stopScript(55);
[005B] Var[158] = 32;
[005F] clearState04(71);
[0062] setObjectName(71,"boom box");
[006E] Var[46] = 521;
[0072] Var[47] = 526;
[0076] unless (!getState08(517)) goto 007F;
[007B] drawObject(Var[47],255,255);
[007F] unless (VAR_ROOM != 190) goto 009B;
[0085] unless (Var[158] == 32) goto 0097;
[008B] VAR_RESULT = getBitVar(1440,0);
[0090] unless (VAR_RESULT) goto 0097;
[0097] drawObject(Var[46],255,255);
[009B] breakHere();
[009C] Var[46]++;
[009E] Var[47]++;
[00A0] unless (Var[46] > 524) goto 0076;
[00A6] VAR_RESULT = isSoundRunning(32);
[00A9] unless (!VAR_RESULT) goto 006E;
[00AD] clearState08(524);
[00B0] clearState08(529);
[00B3] stopSound(32);
[00B5] delay(60);
[00B9] startSound(48);
[00BB] unless (!getState08(517)) goto 00C8;
[00C0] setState02(525);
[00C3] setState08(Var[48]);
[00C8] clearState02(525);
[00CB] clearState08(Var[48]);
[00CD] doSentence(253,521,0,1);
[00D4] delay(60);
[00D8] unless (Var[158] == 32) goto 00EC;
[00DE] VAR_RESULT = getBitVar(1440,0);
[00E3] unless (VAR_RESULT) goto 00EC;
[00E7] setBitVar(1440,0,Var[234]);
[00EC] VAR_RESULT = getBitVar(1558,0);
[00F1] unless (!VAR_RESULT) goto 0134;
[00F5] printEgo("Waycool earstuff! Those old aliens\x01\x01sure played herenow noizbop!");
[012F] setBitVar(1558,0,Var[235]);
[0134] cursorCommand(247, 1);
[0137] stopObjectCode();
```

## OCv2_0520 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0520.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0520.txt); entry `002B`.

```text
[002B] cursorCommand(15, 2);
[002E] Var[66] = 1;
[0032] VAR_RESULT = getActorRoom(Var[66]);
[0035] unless (VAR_RESULT == VAR_ROOM) goto 004A;
[003A] VAR_RESULT = getActorWalkBox(Var[66]);
[003D] unless (VAR_RESULT == 7) goto 004A;
[0043] Var[67] = getActorX(Var[66]);
[0046] walkActorTo(Var[66],Var[67],52);
[004A] Var[66]++;
[004C] unless (Var[66] > 4) goto 0032;
[0052] startSound(32);
[0054] unless (getState04(71)) goto 006E;
[0059] stopScript(55);
[005B] Var[158] = 32;
[005F] clearState04(71);
[0062] setObjectName(71,"boom box");
[006E] Var[46] = 521;
[0072] Var[47] = 526;
[0076] unless (!getState08(517)) goto 007F;
[007B] drawObject(Var[47],255,255);
[007F] unless (VAR_ROOM != 190) goto 009B;
[0085] unless (Var[158] == 32) goto 0097;
[008B] VAR_RESULT = getBitVar(1440,0);
[0090] unless (VAR_RESULT) goto 0097;
[0097] drawObject(Var[46],255,255);
[009B] breakHere();
[009C] Var[46]++;
[009E] Var[47]++;
[00A0] unless (Var[46] > 524) goto 0076;
[00A6] VAR_RESULT = isSoundRunning(32);
[00A9] unless (!VAR_RESULT) goto 006E;
[00AD] clearState08(524);
[00B0] clearState08(529);
[00B3] stopSound(32);
[00B5] delay(60);
[00B9] startSound(48);
[00BB] unless (!getState08(517)) goto 00C8;
[00C0] setState02(525);
[00C3] setState08(Var[48]);
[00C8] clearState02(525);
[00CB] clearState08(Var[48]);
[00CD] doSentence(253,521,0,1);
[00D4] delay(60);
[00D8] unless (Var[158] == 32) goto 00EC;
[00DE] VAR_RESULT = getBitVar(1440,0);
[00E3] unless (VAR_RESULT) goto 00EC;
[00E7] setBitVar(1440,0,Var[234]);
[00EC] VAR_RESULT = getBitVar(1558,0);
[00F1] unless (!VAR_RESULT) goto 0134;
[00F5] printEgo("Waycool earstuff! Those old aliens\x01\x01sure played herenow noizbop!");
[012F] setBitVar(1558,0,Var[235]);
[0134] cursorCommand(247, 1);
[0137] stopObjectCode();
```

## OCv2_0520 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0520.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0520.txt); entry `002B`.

```text
[002B] cursorCommand(15, 2);
[002E] Var[66] = 1;
[0032] VAR_RESULT = getActorRoom(Var[66]);
[0035] unless (VAR_RESULT == VAR_ROOM) goto 004A;
[003A] VAR_RESULT = getActorWalkBox(Var[66]);
[003D] unless (VAR_RESULT == 7) goto 004A;
[0043] Var[67] = getActorX(Var[66]);
[0046] walkActorTo(Var[66],Var[67],52);
[004A] Var[66]++;
[004C] unless (Var[66] > 4) goto 0032;
[0052] startSound(32);
[0054] unless (getState04(71)) goto 006E;
[0059] stopScript(55);
[005B] Var[158] = 32;
[005F] clearState04(71);
[0062] setObjectName(71,"boom box");
[006E] Var[46] = 521;
[0072] Var[47] = 526;
[0076] unless (!getState08(517)) goto 007F;
[007B] drawObject(Var[47],255,255);
[007F] unless (VAR_ROOM != 190) goto 009B;
[0085] unless (Var[158] == 32) goto 0097;
[008B] VAR_RESULT = getBitVar(1440,0);
[0090] unless (VAR_RESULT) goto 0097;
[0097] drawObject(Var[46],255,255);
[009B] breakHere();
[009C] Var[46]++;
[009E] Var[47]++;
[00A0] unless (Var[46] > 524) goto 0076;
[00A6] VAR_RESULT = isSoundRunning(32);
[00A9] unless (!VAR_RESULT) goto 006E;
[00AD] clearState08(524);
[00B0] clearState08(529);
[00B3] stopSound(32);
[00B5] delay(60);
[00B9] startSound(48);
[00BB] unless (!getState08(517)) goto 00C8;
[00C0] setState02(525);
[00C3] setState08(Var[48]);
[00C8] clearState02(525);
[00CB] clearState08(Var[48]);
[00CD] doSentence(253,521,0,1);
[00D4] delay(60);
[00D8] unless (Var[158] == 32) goto 00EC;
[00DE] VAR_RESULT = getBitVar(1440,0);
[00E3] unless (VAR_RESULT) goto 00EC;
[00E7] setBitVar(1440,0,Var[234]);
[00EC] VAR_RESULT = getBitVar(1558,0);
[00F1] unless (!VAR_RESULT) goto 0134;
[00F5] printEgo("Waycool earstuff! Those old aliens\x01\x01sure played herenow noizbop!");
[012F] setBitVar(1558,0,Var[235]);
[0134] cursorCommand(247, 1);
[0137] stopObjectCode();
```

## OCv2_0520 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0520.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0520.txt); entry `002B`.

```text
[002B] cursorCommand(15, 2);
[002E] Var[66] = 1;
[0032] VAR_RESULT = getActorRoom(Var[66]);
[0035] unless (VAR_RESULT == VAR_ROOM) goto 004A;
[003A] VAR_RESULT = getActorWalkBox(Var[66]);
[003D] unless (VAR_RESULT == 7) goto 004A;
[0043] Var[67] = getActorX(Var[66]);
[0046] walkActorTo(Var[66],Var[67],52);
[004A] Var[66]++;
[004C] unless (Var[66] > 4) goto 0032;
[0052] startSound(32);
[0054] unless (getState04(71)) goto 006E;
[0059] stopScript(55);
[005B] Var[158] = 32;
[005F] clearState04(71);
[0062] setObjectName(71,"boom box");
[006E] Var[46] = 521;
[0072] Var[47] = 526;
[0076] unless (!getState08(517)) goto 007F;
[007B] drawObject(Var[47],255,255);
[007F] unless (VAR_ROOM != 190) goto 009B;
[0085] unless (Var[158] == 32) goto 0097;
[008B] VAR_RESULT = getBitVar(1440,0);
[0090] unless (VAR_RESULT) goto 0097;
[0097] drawObject(Var[46],255,255);
[009B] breakHere();
[009C] Var[46]++;
[009E] Var[47]++;
[00A0] unless (Var[46] > 524) goto 0076;
[00A6] VAR_RESULT = isSoundRunning(32);
[00A9] unless (!VAR_RESULT) goto 006E;
[00AD] clearState08(524);
[00B0] clearState08(529);
[00B3] stopSound(32);
[00B5] delay(60);
[00B9] startSound(48);
[00BB] unless (!getState08(517)) goto 00C8;
[00C0] setState02(525);
[00C3] setState08(Var[48]);
[00C8] clearState02(525);
[00CB] clearState08(Var[48]);
[00CD] doSentence(253,521,0,1);
[00D4] delay(60);
[00D8] unless (Var[158] == 32) goto 00EC;
[00DE] VAR_RESULT = getBitVar(1440,0);
[00E3] unless (VAR_RESULT) goto 00EC;
[00E7] setBitVar(1440,0,Var[234]);
[00EC] VAR_RESULT = getBitVar(1558,0);
[00F1] unless (!VAR_RESULT) goto 0134;
[00F5] printEgo("Waycool earstuff! Those old aliens\x01\x01sure played herenow noizbop!");
[012F] setBitVar(1558,0,Var[235]);
[0134] cursorCommand(247, 1);
[0137] stopObjectCode();
```

## OCv2_0521 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0521.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0521.txt); entry `0013`.

```text
[0013] clearState08(517);
[0016] setBoxFlags(7,128);
[0019] setObjectName(517,"massive door");
[0029] unless (getState08(Var[48])) goto 003E;
[002D] setState08(517);
[0030] setBoxFlags(7,0);
[0033] setObjectName(517,"doorway");
[003E] stopObjectCode();
```

## OCv2_0525 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0525.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0525.txt); entry `0018`.

```text
[0018] printEgo("It's already open.");
[002A] stopObjectCode();
```

## OCv2_0530 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0530.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0530.txt); entry `0019`.

```text
[0019] unless (VAR_ACTIVE_OBJECT2 == 70) goto 0039;
[001F] walkActorTo(VAR_EGO,30,56);
[0023] waitForActor(VAR_EGO);
[0025] animateActor(VAR_EGO,247);
[0028] breakHere();
[0029] setOwnerOf(70,14);
[002D] setBoxFlags(10,5);
[0030] setState08(536);
[0033] clearState02(536);
[0039] startScript(3);
[003B] stopObjectCode();
```

## OCv2_0530 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0530.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0530.txt); entry `003C`.

```text
[003C] Var[52] = VAR_ACTIVE_OBJECT1;
[003F] setState08(Var[52]);
[0041] breakHere();
[0042] breakHere();
[0043] clearState08(Var[52]);
[0045] breakHere();
[0046] Var[14] = Var[53];
[0049] Var[14] += 131;
[004D] unless (Var[14] != Var[52]) goto 0064;
[0052] Var[53] = Var[234];
[0055] Var[14] = Var[53];
[0058] Var[14] += 131;
[005C] unless (Var[14] != Var[52]) goto 0064;
[0064] Var[53]++;
[0066] unless (Var[53] == 6) goto 009B;
[006C] delay(60);
[0070] startSound(48);
[0072] setState08(530);
[0075] setState02(530);
[0078] setState08(441);
[007B] unless (getState08(536)) goto 008C;
[0080] clearState08(536);
[0083] setState02(536);
[0086] setState08(537);
[0089] clearState02(537);
[008C] setBoxFlags(9,0);
[008F] setBoxFlags(12,0);
[0092] setState02(531);
[0095] setState02(532);
[0098] setState02(533);
[009B] stopObjectCode();
```

## OCv2_0531 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0531.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0531.txt); entry `001B`.

```text
[001B] startSound(90);
[001D] doSentence(253,530,0,1);
[0024] stopObjectCode();
```

## OCv2_0531 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0531.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0531.txt); entry `001B`.

```text
[001B] startSound(90);
[001D] doSentence(253,530,0,1);
[0024] stopObjectCode();
```

## OCv2_0532 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0532.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0532.txt); entry `001B`.

```text
[001B] startSound(91);
[001D] doSentence(253,530,0,1);
[0024] stopObjectCode();
```

## OCv2_0532 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0532.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0532.txt); entry `001B`.

```text
[001B] startSound(91);
[001D] doSentence(253,530,0,1);
[0024] stopObjectCode();
```

## OCv2_0533 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0533.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0533.txt); entry `001B`.

```text
[001B] startSound(92);
[001D] doSentence(253,530,0,1);
[0024] stopObjectCode();
```

## OCv2_0533 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0533.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0533.txt); entry `001B`.

```text
[001B] startSound(92);
[001D] doSentence(253,530,0,1);
[0024] stopObjectCode();
```

## OCv2_0534 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0534.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0534.txt); entry `001F`.

```text
[001F] loadRoomWithEgo(444,185,255,255);
[0025] stopObjectCode();
```

## OCv2_0535 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0535.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0535.txt); entry `0019`.

```text
[0019] Var[60] = 11;
[001D] startScript(83);
[001F] doSentence(253,537,0,1);
[0026] unless (!getState04(70)) goto 002D;
[002B] clearState04(Var[54]);
[002D] stopObjectCode();
```

## OCv2_0536 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0536.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0536.txt); entry `0019`.

```text
[0019] Var[60] = 10;
[001D] startScript(83);
[001F] doSentence(253,537,0,1);
[0026] stopObjectCode();
```

## OCv2_0537 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0537.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0537.txt); entry `001B`.

```text
[001B] Var[60] = 10;
[001F] startScript(83);
[0025] unless (!getState04(70)) goto 0035;
[002A] setBoxFlags(Var[60],64);
[002D] clearState08(VAR_ACTIVE_OBJECT1);
[002F] setState02(VAR_ACTIVE_OBJECT1);
[0031] setOwnerOf(70,VAR_EGO);
[0035] stopObjectCode();
```

## OCv2_0537 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0537.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0537.txt); entry `0025`.

```text
[0025] unless (!getState04(70)) goto 0035;
[002A] setBoxFlags(Var[60],64);
[002D] clearState08(VAR_ACTIVE_OBJECT1);
[002F] setState02(VAR_ACTIVE_OBJECT1);
[0031] setOwnerOf(70,VAR_EGO);
[0035] stopObjectCode();
```

## OCv2_0538 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0538.txt](../../zak/converted/scripts_flat/LFv2_0033/ROv2/OCv2_0538.txt); entry `0020`.

```text
[0020] loadRoomWithEgo(507,32,4,52);
[0026] stopObjectCode();
```
