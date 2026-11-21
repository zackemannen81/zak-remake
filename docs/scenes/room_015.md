# Room 015 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] unless (VAR_ROOM == 188) goto 005F;
[000A] Var[154]++;
[000C] setBoxFlags(0,128);
[000F] RoomScroll(60,60);
[0013] unless (getState08(415)) goto 003D;
[0018] setBoxFlags(2,64);
[001B] setBoxFlags(14,1);
[001E] Var[66] = 1;
[0022] VAR_RESULT = getActorWalkBox(Var[66]);
[0025] unless (VAR_RESULT == 2) goto 0032;
[002B] putActor(Var[66],59,60);
[002F] animateActor(Var[66],244);
[0032] Var[66]++;
[0034] unless (Var[66] > 4) goto 0022;
[003D] setBoxFlags(2,0);
[0040] setBoxFlags(14,128);
[0043] clearState08(311);
[0046] setState02(311);
[0049] unless (getState08(58)) goto 0055;
[004E] lights(Var[234],0,0);
[0055] doSentence(250,313,0,1);
[005F] setBoxFlags(1,128);
[0062] setBoxFlags(5,128);
[0065] RoomScroll(20,20);
[0069] VAR_RESULT = getBitVar(1545,0);
[006E] unless (!VAR_RESULT) goto 0079;
[0072] doSentence(253,317,0,1);
[0079] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/EXv2.txt); entry `0000`.

```text
[0000] Var[154] = Var[234];
[0003] stopSound(70);
[0005] stopSound(71);
[0007] unless (!getState08(58)) goto 0012;
[000C] clearState08(312);
[000F] clearState08(326);
[0012] setBoxFlags(0,0);
[0015] setBoxFlags(1,0);
[0018] setBoxFlags(5,0);
[001B] setBitVar(1545,0,Var[234]);
[0020] stopObjectCode();
```

## OCv2_0058 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0058.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0058.txt); entry `002A`.

```text
[002A] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002F] stopObjectCode();
```

## OCv2_0058 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0058.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0058.txt); entry `0022`.

```text
[0022] doSentence(253,314,0,1);
[0029] stopObjectCode();
```

## OCv2_0310 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0310.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0310.txt); entry `0023`.

```text
[0023] startScript(68);
[0025] stopObjectCode();
```

## OCv2_0311 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0311.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0311.txt); entry `0019`.

```text
[0019] loadRoomWithEgo(420,186,8,44);
[001F] stopObjectCode();
```

## OCv2_0312 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0312.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0312.txt); entry `0025`.

```text
[0025] Var[53] = Var[234];
[0028] unless (VAR_MACHINE_SPEED > 40) goto 0035;
[002E] delay(120);
[0035] delay(210);
[0039] Var[53]++;
[003B] stopObjectCode();
```

## OCv2_0313 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0313.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0313.txt); entry `0013`.

```text
[0013] startSound(70);
[0015] drawObject(313,255,255);
[001A] breakHere();
[001B] breakHere();
[001C] drawObject(314,255,255);
[0021] breakHere();
[0022] breakHere();
[0023] drawObject(315,255,255);
[0028] breakHere();
[0029] breakHere();
```

## OCv2_0314 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0314.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0314.txt); entry `0013`.

```text
[0013] unless (getState08(312)) goto 0022;
[0018] pickupObject(58);
[001B] lights(Var[234],0,0);
[0022] printEgo("I can't pick it up, it's being held by\x01\x01a crystalinetic force!");
[0057] doSentence(STOP);
[0059] stopObjectCode();
```

## OCv2_0316 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0316.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0316.txt); entry `001D`.

```text
[001D] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0028;
[0021] doSentence(253,316,0,1);
[0028] stopObjectCode();
```

## OCv2_0316 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0316.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0316.txt); entry `001D`.

```text
[001D] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0028;
[0021] doSentence(253,316,0,1);
[0028] stopObjectCode();
```

## OCv2_0316 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0316.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0316.txt); entry `0029`.

```text
[0029] Var[46] = VAR_ACTIVE_OBJECT1;
[002C] setState08(Var[46]);
[002E] startSound(67);
[0030] Var[14] = Var[192];
[0033] Var[14] += 110;
[0037] unless (Var[14] != Var[46]) goto 0041;
[003C] setBitVar(1450,0,Var[235]);
[0041] Var[192]++;
[0043] unless (Var[192] == 3) goto 0122;
[0049] cursorCommand(15, 2);
[004C] delay(120);
[0050] VAR_RESULT = getBitVar(1450,0);
[0055] unless (!VAR_RESULT) goto 006E;
[0059] startSound(78);
[005B] setState08(322);
[005E] setBitVar(1559,4,Var[235]);
[0063] breakHere();
[0064] doSentence(253,317,0,1);
[006E] setBitVar(1450,0,Var[234]);
[0073] Var[192] = Var[234];
[0076] Var[50] = Var[234];
[0079] Var[51] = 2;
[007D] unless (VAR_EGO == 2) goto 0087;
[0083] Var[51] = 1;
[0087] VAR_RESULT = getActorRoom(Var[51]);
[008A] unless (VAR_RESULT == VAR_ROOM) goto 009B;
[008F] VAR_RESULT = getActorWalkBox(Var[51]);
[0092] unless (VAR_RESULT == 15) goto 009B;
[0098] Var[50] = Var[235];
[009B] printEgo("Hmmm, nothing happened.");
[00B2] waitForMessage();
[00B3] startSound(78);
[00B5] setState08(324);
[00B8] breakHere();
[00B9] animateActor(VAR_EGO,246);
[00BC] unless (Var[50]) goto 00C3;
[00C0] animateActor(Var[51],246);
[00C3] printEgo("OOOOO NOOOOO\x02\x02");
[00D1] Var[48] = 255;
[00D5] printEgo("oo\x02\x02");
[00DA] setActorElevation(VAR_EGO,Var[48]);
[00DD] unless (Var[50]) goto 00E4;
[00E1] setActorElevation(Var[51],Var[48]);
[00E4] Var[48] -= 4;
[00E8] breakHere();
[00E9] unless (Var[48] < 200) goto 00D5;
[00EF] printEgo("");
[00F1] startSound(78);
[00F3] clearState08(324);
[00F6] delay(120);
[00FA] clearState08(316);
[00FD] clearState08(317);
[0100] clearState08(318);
[0103] setState04(408);
[0106] setActorElevation(VAR_EGO,0);
[0109] unless (Var[50]) goto 0117;
[010D] setActorElevation(Var[51],0);
[0110] putActorInRoom(Var[51],220);
[0113] putActor(Var[51],29,44);
[0117] setBitVar(1574,0,Var[235]);
[011C] loadRoomWithEgo(408,220,255,255);
[0122] stopObjectCode();
```

## OCv2_0317 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0317.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0317.txt); entry `001D`.

```text
[001D] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0028;
[0021] doSentence(253,316,0,1);
[0028] stopObjectCode();
```

## OCv2_0317 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0317.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0317.txt); entry `001D`.

```text
[001D] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0028;
[0021] doSentence(253,316,0,1);
[0028] stopObjectCode();
```

## OCv2_0317 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0317.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0317.txt); entry `0029`.

```text
[0029] unless (getState08(322)) goto 0136;
[002E] VAR_RESULT = getActorRoom(1);
[0031] unless (VAR_RESULT == 152) goto 0069;
[0037] VAR_RESULT = getBitVar(1455,1);
[003C] unless (!VAR_RESULT) goto 0069;
[0040] setBitVar(1455,1,Var[235]);
[0045] walkActorToObject(1,321);
[0049] waitForActor(1);
[004B] print(1,"This is a map of the Martian Face!");
[0069] VAR_RESULT = getActorRoom(2);
[006C] unless (VAR_RESULT == 152) goto 00A8;
[0072] VAR_RESULT = getBitVar(1455,2);
[0077] unless (!VAR_RESULT) goto 00A8;
[007B] setBitVar(1455,2,Var[235]);
[0080] walkActorToObject(2,320);
[0084] waitForActor(2);
[0086] waitForMessage();
[0087] print(2,"This is a map of the Martian Pyramid!");
[00A8] unless (Var[194] == 2) goto 00B1;
[00B1] unless (Var[193] == 2) goto 00BA;
[00BA] waitForMessage();
[00BB] delay(120);
[00BF] unless (Var[194] == Var[235]) goto 00CB;
[00C4] Var[49] = getObjectOwner(15);
[00CB] unless (Var[193] == Var[235]) goto 011E;
[00D0] Var[49] = getObjectOwner(17);
[00D4] unless (!Var[49]) goto 00DB;
[00DB] VAR_RESULT = getActorRoom(Var[49]);
[00DE] unless (VAR_RESULT == VAR_ROOM) goto 00E9;
[00E3] Var[66] = Var[49];
[00E9] Var[66] = VAR_EGO;
[00EC] print(Var[66],"I should add this to \x02\x02");
[0100] unless (Var[66] == Var[49]) goto 0111;
[0105] print(Var[66],"my map.");
[0111] printEgo("\x06\x31\x06's map.");
[011E] printEgo("I should draw a map of this.");
[0136] cursorCommand(247, 1);
[0139] stopObjectCode();
```

## OCv2_0318 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0318.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0318.txt); entry `001B`.

```text
[001B] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0026;
[001F] doSentence(253,316,0,1);
[0026] stopObjectCode();
```

## OCv2_0318 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0318.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0318.txt); entry `001B`.

```text
[001B] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0026;
[001F] doSentence(253,316,0,1);
[0026] stopObjectCode();
```

## OCv2_0319 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0319.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0319.txt); entry `0022`.

```text
[0022] unless (VAR_EGO == 2) goto 0065;
[0028] Var[47] = Var[234];
[002B] print(2,"First\x02\x02");
[0034] doSentence(253,319,0,1);
[003B] waitForMessage();
[003C] print(2,"Then\x02\x02");
[0044] doSentence(253,319,0,1);
[004B] waitForMessage();
[004C] print(2,"And finally,\x02\x02");
[005B] doSentence(253,319,0,1);
[0065] printEgo("I can't read those symbols!");
[007E] stopObjectCode();
```

## OCv2_0319 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0319.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0319.txt); entry `007F`.

```text
[007F] print(2," push the \x02\x02");
[008B] Var[14] = Var[47];
[008E] Var[14] += 110;
[0092] unless (Var[14] == 316) goto 00A3;
[0098] print(2,"left\x02\x02");
[00A3] unless (Var[14] == 317) goto 00B6;
[00A9] print(2,"center\x02\x02");
[00B6] unless (Var[14] == 318) goto 00C8;
[00BC] print(2,"right\x02\x02");
[00C5] /* goto 00C8; */
[00C8] print(2," button.");
[00D3] Var[47]++;
[00D5] stopObjectCode();
```

## OCv2_0320 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0320.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0320.txt); entry `001A`.

```text
[001A] printEgo("It looks like there's a special object\x01\x01inside the Martian Pyramid.");
[0055] stopObjectCode();
```

## OCv2_0323 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0323.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0323.txt); entry `0017`.

```text
[0017] loadRoomWithEgo(408,218,255,255);
[001D] stopObjectCode();
```

## OCv2_0325 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0325.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0325.txt); entry `002C`.

```text
[002C] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0045;
[0030] printEgo("I think I'll need a key.");
[0045] stopObjectCode();
```

## OCv2_0325 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0325.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0325.txt); entry `0046`.

```text
[0046] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0059;
[004A] printEgo("It won't close.");
[0059] stopObjectCode();
```

## OCv2_0325 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0325.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0325.txt); entry `001A`.

```text
[001A] unless (VAR_ACTIVE_OBJECT2 == 76) goto 0029;
[0020] startScript(10);
[0022] setOwnerOf(76,0);
[0029] startScript(3);
[002B] stopObjectCode();
```

## OCv2_0326 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0326.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0326.txt); entry `001D`.

```text
[001D] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 002C;
[0021] startSound(27);
[0023] setState08(VAR_ACTIVE_OBJECT1);
[0025] doSentence(253,326,0,1);
[002C] stopObjectCode();
```

## OCv2_0326 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0326.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0326.txt); entry `001D`.

```text
[001D] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 002C;
[0021] startSound(27);
[0023] setState08(VAR_ACTIVE_OBJECT1);
[0025] doSentence(253,326,0,1);
[002C] stopObjectCode();
```

## OCv2_0326 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0326.txt](../../zak/converted/scripts_flat/LFv2_0015/ROv2/OCv2_0326.txt); entry `002D`.

```text
[002D] Var[52] = VAR_EGO;
[0030] breakHere();
[0031] unless (!getState08(58)) goto 0080;
[0036] doSentence(254,313,0,1);
[003D] setState08(313);
[0040] stopSound(70);
[0042] breakHere();
[0043] startSound(71);
[0045] breakHere();
[0046] VAR_RESULT = isSoundRunning(71);
[0049] unless (!VAR_RESULT) goto 0045;
[004D] startSound(111);
[004F] setState08(312);
[0052] doSentence(253,312,0,1);
[0059] breakHere();
[005A] VAR_RESULT = getDist(Var[52],58);
[005F] unless (VAR_RESULT < 3) goto 0068;
[0068] unless (Var[53]) goto 0059;
[006C] unless (!getState08(58)) goto 0080;
[0071] startSound(111);
[0073] clearState08(326);
[0076] clearState08(312);
[0079] doSentence(250,313,0,1);
[0080] stopObjectCode();
```
