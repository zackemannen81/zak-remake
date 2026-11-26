# Room 014 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] setBoxFlags(12,128);
[0007] setBoxFlags(13,128);
[000A] setState02(56);
[000D] clearState08(56);
[0010] setState02(57);
[0013] clearState08(57);
[0016] Var[45] = 292;
[001A] setState02(Var[45]);
[001C] unless (Var[45] >= 294) goto 0024;
[0022] clearState08(Var[45]);
[0024] Var[45]++;
[0026] unless (Var[45] > 309) goto 001A;
[002C] unless (VAR_ROOM == 129) goto 006D;
[0032] clearState02(297);
[0035] Var[46] = 281;
[0039] Var[47] = 13;
[003D] clearState02(292);
[0040] clearState02(295);
[0043] unless (!getState04(298)) goto 004B;
[0048] setState08(298);
[004B] VAR_RESULT = getObjectOwner(55);
[004F] unless (VAR_RESULT != 15) goto 0064;
[0055] lights(Var[234],0,0);
[0059] RoomColor(9,3);
[005D] RoomColor(9,11);
[0064] clearState02(55);
[0067] setState08(309);
[006A] clearState02(309);
[006D] unless (VAR_ROOM == 192) goto 00AE;
[0073] unless (!getState04(558)) goto 007A;
[0078] Var[154]++;
[007A] RoomColor(4,1);
[007E] RoomColor(6,8);
[0082] RoomColor(14,7);
[0086] RoomColor(12,9);
[008A] Var[46] = 568;
[008E] Var[47] = 197;
[0092] setState08(306);
[0095] VAR_RESULT = getObjectOwner(57);
[0099] unless (VAR_RESULT == 15) goto 00A8;
[009F] setState08(57);
[00A2] clearState02(57);
[00A8] setState08(308);
[00AE] unless (VAR_ROOM == 130) goto 00F8;
[00B4] RoomColor(4,1);
[00B8] RoomColor(6,9);
[00BC] unless (!getState04(307)) goto 00C4;
[00C1] setState08(307);
[00C4] VAR_RESULT = getObjectOwner(56);
[00C8] unless (VAR_RESULT == 15) goto 00D4;
[00CE] clearState02(56);
[00D4] setState08(56);
[00D7] lights(Var[234],0,0);
[00DB] setState08(309);
[00DE] clearState02(309);
[00E1] Var[46] = 741;
[00E5] Var[47] = 166;
[00E9] clearState02(294);
[00EC] setState08(294);
[00EF] clearState02(297);
[00F2] setState08(305);
[00F5] clearState02(305);
[00F8] unless (VAR_ROOM == 193) goto 0160;
[00FE] RoomColor(4,1);
[0102] RoomColor(6,9);
[0106] RoomColor(7,3);
[010A] RoomColor(12,7);
[010E] unless (!getState04(558)) goto 0115;
[0113] Var[154]++;
[0115] setState08(297);
[0118] setState08(299);
[011B] unless (getState04(299)) goto 0126;
[0120] clearState02(299);
[0126] setState08(300);
[0129] clearState02(300);
[012C] setState08(301);
[012F] unless (getState04(301)) goto 013D;
[0134] clearState02(301);
[0137] clearState02(293);
[013D] setState08(302);
[0140] clearState02(302);
[0143] setState08(303);
[0146] unless (getState04(303)) goto 0151;
[014B] clearState02(303);
[0151] setState08(304);
[0154] clearState02(304);
[0157] clearState02(296);
[015A] setBoxFlags(12,0);
[015D] setBoxFlags(13,0);
[0160] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/EXv2.txt); entry `0000`.

```text
[0000] Var[154] = Var[234];
[0003] unless (VAR_ROOM == 193) goto 0015;
[0009] loadCostume(39)
[000C] lockCostume(39)
[000F] loadCostume(37)
[0012] lockCostume(37)
[0015] stopObjectCode();
```

## OCv2_0055 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0055.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0055.txt); entry `0029`.

```text
[0029] unless (VAR_ACTIVE_OBJECT2 == 169) goto 0032;
[0032] unless (VAR_ACTIVE_OBJECT2 == 428) goto 003B;
[003B] unless (VAR_EGO == 1) goto 0046;
[0041] startScript(67);
[0046] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[004B] stopObjectCode();
```

## OCv2_0055 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0055.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0055.txt); entry `0021`.

```text
[0021] doSentence(253,298,0,1);
[0028] stopObjectCode();
```

## OCv2_0056 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0056.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0056.txt); entry `002A`.

```text
[002A] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002F] stopObjectCode();
```

## OCv2_0056 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0056.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0056.txt); entry `0022`.

```text
[0022] doSentence(253,307,0,1);
[0029] stopObjectCode();
```

## OCv2_0057 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0057.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0057.txt); entry `0021`.

```text
[0021] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0026] stopObjectCode();
```

## OCv2_0057 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0057.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0057.txt); entry `0019`.

```text
[0019] pickupObject(VAR_ACTIVE_OBJECT1);
[001B] clearState08(VAR_ACTIVE_OBJECT1);
[001D] setState08(308);
[0020] stopObjectCode();
```

## OCv2_0293 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0293.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0293.txt); entry `0027`.

```text
[0027] unless (VAR_ACTIVE_OBJECT2 == 25) goto 003C;
[002D] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 0036;
[0031] startScript(28);
[003C] startScript(3);
[003E] stopObjectCode();
[0042] printEgo("It looks fine the way it is.");
[005A] stopObjectCode();
```

## OCv2_0293 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0293.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0293.txt); entry `003F`.

```text
[003F] startScript(68);
[0041] stopObjectCode();
```

## OCv2_0293 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0293.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0293.txt); entry `0042`.

```text
[0042] printEgo("It looks fine the way it is.");
[005A] stopObjectCode();
```

## OCv2_0294 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0294.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0294.txt); entry `0025`.

```text
[0025] unless (VAR_ACTIVE_OBJECT2 == 25) goto 003F;
[002B] unless (!getState08(307)) goto 0035;
[0030] startScript(28);
[0035] doSentence(253,293,0,1);
[003F] startScript(3);
[0041] stopObjectCode();
```

## OCv2_0294 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0294.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0294.txt); entry `0042`.

```text
[0042] startScript(68);
[0044] stopObjectCode();
```

## OCv2_0297 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0297.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0297.txt); entry `0017`.

```text
[0017] loadRoomWithEgo(Var[46],Var[47],255,255);
[001C] stopObjectCode();
```

## OCv2_0298 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0298.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0298.txt); entry `0013`.

```text
[0013] unless (getState08(298)) goto 0031;
[0018] lights(Var[234],0,0);
[001C] RoomColor(9,3);
[0020] RoomColor(9,11);
[0024] clearState08(283);
[0027] clearState08(284);
[002A] startScript(147);
[002C] startScript(119);
[0031] printEgo("It's locked into the pedestal.");
[004D] doSentence(STOP);
[004F] stopObjectCode();
```

## OCv2_0299 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0299.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0299.txt); entry `001B`.

```text
[001B] unless (!getState04(293)) goto 002D;
[0020] startSound(10);
[0022] clearState02(300);
[0025] setState08(300);
[0028] clearState04(VAR_ACTIVE_OBJECT1);
[0030] stopObjectCode();
[0046] printEgo("It seems to be locked.");
[005A] stopObjectCode();
```

## OCv2_0299 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0299.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0299.txt); entry `0031`.

```text
[0031] printEgo("It's already closed.");
[0045] stopObjectCode();
```

## OCv2_0299 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0299.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0299.txt); entry `0046`.

```text
[0046] printEgo("It seems to be locked.");
[005A] stopObjectCode();
```

## OCv2_0300 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0300.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0300.txt); entry `0022`.

```text
[0022] printEgo("It's already open.");
[0034] stopObjectCode();
```

## OCv2_0300 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0300.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0300.txt); entry `001B`.

```text
[001B] loadRoomWithEgo(564,202,255,255);
[0021] stopObjectCode();
```

## OCv2_0301 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0301.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0301.txt); entry `0019`.

```text
[0019] unless (!getState04(293)) goto 002E;
[001E] startSound(10);
[0020] clearState02(302);
[0023] setState08(302);
[0026] setState02(293);
[0029] clearState04(VAR_ACTIVE_OBJECT1);
[002E] doSentence(253,299,0,1);
[0035] stopObjectCode();
```

## OCv2_0301 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0301.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0301.txt); entry `0036`.

```text
[0036] doSentence(2,299,0,1);
[003D] stopObjectCode();
```

## OCv2_0302 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0302.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0302.txt); entry `0022`.

```text
[0022] doSentence(1,300,0,1);
[0029] stopObjectCode();
```

## OCv2_0302 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0302.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0302.txt); entry `001B`.

```text
[001B] loadRoomWithEgo(565,199,255,255);
[0021] stopObjectCode();
```

## OCv2_0303 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0303.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0303.txt); entry `0019`.

```text
[0019] unless (!getState04(293)) goto 002B;
[001E] startSound(10);
[0020] clearState02(304);
[0023] setState08(304);
[0026] clearState04(VAR_ACTIVE_OBJECT1);
[002B] doSentence(253,299,0,1);
[0032] stopObjectCode();
```

## OCv2_0303 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0303.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0303.txt); entry `0033`.

```text
[0033] doSentence(2,299,0,1);
[003A] stopObjectCode();
```

## OCv2_0304 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0304.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0304.txt); entry `0022`.

```text
[0022] doSentence(1,300,0,1);
[0029] stopObjectCode();
```

## OCv2_0304 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0304.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0304.txt); entry `001B`.

```text
[001B] loadRoomWithEgo(564,204,255,255);
[0021] stopObjectCode();
```

## OCv2_0307 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0307.txt](../../zak/converted/scripts_flat/LFv2_0014/ROv2/OCv2_0307.txt); entry `0013`.

```text
[0013] unless (getState08(307)) goto 0026;
[0018] lights(Var[234],0,0);
[001C] setBitVar(1559,7,Var[235]);
[0021] startScript(119);
[0026] printEgo("I can't get it out.");
[0037] doSentence(STOP);
[0039] stopObjectCode();
```

## SCv2_0049 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0014/SCv2_0049.txt](../../zak/converted/scripts_flat/LFv2_0014/SCv2_0049.txt); entry `0000`.

```text
[0000] unless (VAR_ROOM == 42) goto 0030;
[0006] setState02(630);
[0009] VAR_EGO = 6;
[000D] doSentence(254,629,0,1);
[0014] doSentence(253,627,0,1);
[001B] actorFollowCamera(VAR_EGO);
[001D] VerbOps(New-13(13,19,2,0,"Fly to@@@"));
[0030] unless (VAR_ROOM == 31) goto 0077;
[0036] VAR_RESULT = getObjectOwner(48);
[003A] unless (VAR_RESULT != VAR_EGO) goto 005E;
[003F] doSentence(253,503,0,1);
[0046] printEgo("Glug!");
[004D] delay(240);
[0051] doSentence(253,497,0,1);
[0058] cursorCommand(15, 2);
[005E] setState02(504);
[0061] VAR_EGO = 5;
[0065] Var[43] = 5;
[0069] delay(60);
[006D] animateActor(5,246);
[0070] Var[171] = 3;
[0077] unless (VAR_ROOM == 17) goto 0087;
[007D] doSentence(253,362,0,1);
[0087] unless (VAR_ROOM == 1) goto 0097;
[008D] doSentence(253,99,0,1);
[0097] unless (VAR_ROOM == 13) goto 00A7;
[009D] doSentence(253,287,0,1);
[00A4] /* goto 00A7; */
[00A7] Var[199] = Var[234];
[00AA] startScript(6);
[00AC] VerbOps(New-30(32,21,14,0,"To Zak@@"));
[00BB] unless (Var[247]) goto 00D2;
[00BF] cursorCommand(150, 3);
[00C2] VerbOps(New-34(0,200,1,0,));
[00C9] VAR_BACKUP_VERB = 34;
[00CD] doSentence(RESET);
[00D2] cursorCommand(247, 1);
[00D5] breakHere();
[00D6] unless (VAR_ACTIVE_VERB == 30) goto 00D5;
[00DC] VAR_RESULT = getDist(1,VAR_EGO);
[00E1] unless (VAR_RESULT > 40) goto 0102;
[00E7] printEgo("My body is too far away.");
[00FC] VAR_ACTIVE_VERB = Var[234];
[0102] cursorCommand(15, 2);
[0105] VAR_EGO = 1;
[0109] unless (VAR_ROOM == 42) goto 0121;
[010F] delay(60);
[0113] doSentence(253,627,0,1);
[011A] doSentence(250,629,0,1);
[0121] Var[199]++;
[0123] actorFollowCamera(VAR_EGO);
[0125] unless (VAR_ROOM != 31) goto 01A2;
[012B] VerbOps(New-13(13,19,2,0,"Walk to@@"));
[013B] delay(60);
[013F] animateActor(1,250);
[0142] animateActor(1,16);
[0145] animateActor(1,32);
[0148] Var[163] = Var[234];
[014B] startScript(150);
[014D] delay(60);
[0151] printEgo("Whew!");
[0158] waitForMessage();
[0159] animateActor(1,6);
[015C] animateActor(1,10);
[015F] breakHere();
[0160] unless (!getState04(630)) goto 0185;
[0165] printEgo("That was some experience!");
[017D] setBitVar(1559,2,Var[235]);
[0182] setState04(630);
[0185] waitForMessage();
[0186] unless (VAR_ROOM == 42) goto 0193;
[018C] doSentence(253,622,0,1);
[0193] unless (Var[247]) goto 019F;
[0197] startScript(19);
[0199] unless (Var[247]) goto 019F;
[019D] startScript(130);
[01A2] unless (Var[171] == 3) goto 01BB;
[01A8] walkActorTo(5,28,86);
[01AC] waitForActor(5);
[01AE] animateActor(5,244);
[01B1] clearState02(504);
[01B4] Var[43] = 4;
[01BB] unless (Var[171] == 4) goto 01E2;
[01C1] walkActorTo(5,41,86);
[01C5] doSentence(254,498,0,1);
[01CC] doSentence(250,501,0,1);
[01D3] Var[171]++;
[01D5] breakHere();
[01D6] unless (Var[47] < 12) goto 01D5;
[01DC] putActorInRoom(5,0);
[01DF] /* goto 01E2; */
[01E2] delay(60);
[01E6] animateActor(1,246);
[01E9] doSentence(33,502,0,1);
[01F0] delay(60);
[01F4] cursorCommand(247, 1);
[01F7] stopObjectCode();
```

## SCv2_0067 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0014/SCv2_0067.txt](../../zak/converted/scripts_flat/LFv2_0014/SCv2_0067.txt); entry `0000`.

```text
[0000] VAR_RESULT = isScriptRunning(82);
[0003] unless (VAR_RESULT) goto 0009;
[0007] stopScript(0);
[0009] VAR_RESULT = isScriptRunning(124);
[000C] unless (VAR_RESULT) goto 0013;
[0013] VAR_RESULT = isScriptRunning(112);
[0016] unless (VAR_RESULT) goto 0042;
[001A] unless (VAR_ROOM == 17) goto 0042;
[0020] printEgo("Not now! The policeman might get me!");
[0040] stopScript(0);
[0042] unless (VAR_ROOM == 16) goto 004B;
[004B] unless (VAR_ROOM == 19) goto 0054;
[0054] unless (VAR_ROOM == 220) goto 0074;
[005A] printEgo("Not with a monster in here!");
[0072] stopScript(0);
[0074] unless (VAR_ROOM_RESOURCE != 40) goto 0089;
[007A] unless (VAR_ROOM != 11) goto 0089;
[0080] unless (VAR_ROOM != 10) goto 0089;
[0089] unless (getState04(55)) goto 00B3;
[008E] printEgo("It won't work, I'm not on Mother Earth.");
[00B3] delay(120);
[00B7] printEgo("Nothing's happening.");
[00CC] stopScript(0);
[00CE] Var[247] = Var[234];
[00D1] unless (getState04(55)) goto 01A1;
[00D6] unless (VAR_ACTIVE_OBJECT2 == 14) goto 0131;
[00DC] unless (Var[138] != Var[234]) goto 00E4;
[00E4] unless (VAR_ROOM == 1) goto 010D;
[00EA] doSentence(11,VAR_ACTIVE_OBJECT2,91,0);
[00F0] printEgo("Oops! Better put her down.");
[0108] waitForSentence();
[0109] waitForMessage();
[010D] printEgo("First I'd better put her on my dresser.");
[012F] stopScript(0);
[0131] unless (VAR_ACTIVE_OBJECT2 == 103) goto 014D;
[0137] unless (Var[138] == Var[235]) goto 014D;
[013C] printEgo("I can't see her.");
[014B] stopScript(0);
[014D] unless (VAR_ACTIVE_OBJECT2 != 630) goto 019E;
[0153] unless (VAR_ACTIVE_OBJECT2 != 504) goto 019E;
[0159] unless (VAR_ACTIVE_OBJECT2 != 352) goto 0186;
[015F] unless (VAR_ACTIVE_OBJECT2 != 285) goto 0183;
[0165] printEgo("It will only work with animals.");
[0181] stopScript(0);
[0186] loadSound(18)
[0189] lockSound(18)
[018C] Var[247] = VAR_ACTIVE_OBJECT2;
[018F] Var[66] = 0;
[0193] VerbOps(Delete(Var[66]););
[0196] Var[66]++;
[0198] unless (Var[66] > 13) goto 0193;
[019E] cursorCommand(15, 2);
[01A1] cutscene();
[01A2] loadScript(123)
[01A5] loadSound(21)
[01A8] lockSound(21)
[01AB] startSound(53);
[01AD] delay(120);
[01B1] unless (!getState04(55)) goto 01CC;
[01B6] beginOverride();
[01BA] printEgo("Oooh! I feel dizzy!");
[01CC] startScript(123);
[01CE] delay(120);
[01D2] unless (VAR_ROOM != 31) goto 0228;
[01D8] unless (VAR_ROOM == 42) goto 01E5;
[01DE] walkActorTo(1,18,52);
[01E5] Var[66] = getActorX(1);
[01E8] Var[66] -= 3;
[01EC] Var[67] = getActorY(1);
[01EF] Var[67] += 10;
[01F3] walkActorTo(1,Var[66],Var[67]);
[01F7] unless (Var[117] > 10) goto 0203;
[01FD] animateActor(1,255);
[0203] breakHere();
[0204] VAR_RESULT = getActorMoving(1);
[0207] unless (VAR_RESULT == 0) goto 01F7;
[020D] waitForMessage();
[020E] stopScript(123);
[0210] animateActor(1,246);
[0213] waitForActor(1);
[0215] startSound(21);
[0217] animateActor(1,32);
[021A] breakHere();
[021B] startSound(21);
[021D] animateActor(1,36);
[0220] Var[163] = 36;
[0224] breakHere();
[0228] waitForMessage();
[0229] stopScript(123);
[022B] animateActor(1,247);
[022E] waitForActor(1);
[0230] unlockSound(21)
[0233] unless (VAR_ROOM == 4) goto 0265;
[0239] VAR_RESULT = getActorRoom(7);
[023C] unless (VAR_RESULT == VAR_ROOM) goto 0265;
[0241] Var[120] = Var[234];
[0244] stopScript(77);
[0246] clearState08(159);
[0249] print(7,"An artifact!");
[0257] faceActor(7,1);
[025A] stopObjectCode();
[0265] startScript(97);
[0267] unless (!getState04(55)) goto 02B6;
[026C] unless (VAR_OVERRIDE) goto 0273;
[0273] beginOverride();
[0277] delay(1200);
[027B] stopScript(123);
[027D] unless (VAR_ROOM == 31) goto 0289;
[0283] animateActor(1,246);
[0289] animateActor(1,250);
[028C] animateActor(1,32);
[028F] Var[163] = Var[234];
[0292] startScript(150);
[0294] delay(60);
[0298] print(1,"What happened?");
[02A8] waitForMessage();
[02A9] animateActor(1,6);
[02AC] animateActor(1,10);
[02AF] animateActor(1,16);
[02B2] delay(60);
[02B6] endCutscene();
[02B7] unless (Var[239] == 4) goto 02C8;
[02BD] VAR_RESULT = getActorRoom(7);
[02C0] unless (VAR_RESULT == 4) goto 02C8;
[02C6] chainScript(98);
[02C8] unless (!getState04(344)) goto 02CF;
[02CD] chainScript(96);
[02CF] unless (getState04(55)) goto 02D6;
[02D4] chainScript(49);
[02D6] stopObjectCode();
```

## SCv2_0123 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0014/SCv2_0123.txt](../../zak/converted/scripts_flat/LFv2_0014/SCv2_0123.txt); entry `0000`.

```text
[0000] Var[117] = Var[234];
[0003] animateActor(1,249);
[0006] breakHere();
[0007] animateActor(1,251);
[000A] breakHere();
[000B] animateActor(1,248);
[000E] breakHere();
[000F] animateActor(1,250);
[0012] breakHere();
[0013] Var[117]++;
```

## SCv2_0130 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0014/SCv2_0130.txt](../../zak/converted/scripts_flat/LFv2_0014/SCv2_0130.txt); entry `0000`.

```text
[0000] Var[66] = isScriptRunning(98);
[0003] unless (Var[247] == 352) goto 0041;
[0009] doSentence(254,362,0,1);
[0010] doSentence(253,353,0,1);
[0017] unlockSound(18)
[001A] unless (!Var[66]) goto 0041;
[001E] VAR_RESULT = getBitVar(1548,0);
[0023] unless (!VAR_RESULT) goto 0041;
[0027] printEgo("ZAK YAKKETY-YAKS YAK.");
[003C] setBitVar(1548,0,Var[235]);
[0041] unless (Var[247] == 285) goto 00AB;
[0047] doSentence(254,287,0,1);
[004E] clearState02(285);
[0051] doSentence(250,286,0,1);
[0058] unless (!Var[66]) goto 00AB;
[005C] VAR_RESULT = getBitVar(1552,0);
[0061] unless (!VAR_RESULT) goto 00AB;
[0065] printEgo("MAN TRADES MINDS WITH TWO-HEADED\x01\x01SQUIRREL; DEVELOPS SPLIT PERSONALITY.");
[00A6] setBitVar(1552,0,Var[235]);
[00AB] unless (Var[247] == 14) goto 0114;
[00B1] doSentence(254,99,0,1);
[00B8] doSentence(254,100,0,1);
[00BF] doSentence(254,102,0,1);
[00C6] doSentence(253,101,0,1);
[00CD] unless (!Var[66]) goto 0114;
[00D1] VAR_RESULT = getBitVar(1551,0);
[00D6] unless (!VAR_RESULT) goto 0114;
[00DA] printEgo("MAN EXCHANGES MINDS WITH GOLDFISH;\x01\x01BORES HIMSELF TO DEATH.");
[010F] setBitVar(1551,0,Var[235]);
[0114] Var[247] = Var[234];
[0117] stopObjectCode();
```
