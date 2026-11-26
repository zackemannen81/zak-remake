# Room 031 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] ActorOps(VAR_EGO,[Sound(Var[234])]);
[0008] VerbOps(New-13(13,19,2,0,"Swim to@@"));
[0018] cursorCommand(0, 0);
[001B] ActorOps(5,[Costume(13)]);
[001F] loadCostume(12)
[0022] lockCostume(12)
[0025] VAR_RESULT = getObjectOwner(77);
[0029] unless (VAR_RESULT == VAR_EGO) goto 0036;
[002E] setOwnerOf(77,0);
[0032] setOwnerOf(77,15);
[0036] unless (getState04(504)) goto 0042;
[003B] doSentence(250,504,0,1);
[0042] VAR_RESULT = isScriptRunning(50);
[0045] unless (!VAR_RESULT) goto 0080;
[0049] unless (Var[171] > Var[234]) goto 006E;
[004E] unless (Var[171] < 4) goto 006B;
[0054] Var[47] = Var[234];
[0057] unless (!getState02(504)) goto 0060;
[005C] Var[47] = 30;
[0060] doSentence(250,498,0,1);
[0067] ActorOps(5,[Costume(12)]);
[006E] doSentence(250,499,0,1);
[0075] Var[46] = 12;
[0079] doSentence(250,497,0,1);
[0080] setActorElevation(7,10);
[0083] ActorOps(7,[Sound(Var[234])]);
[0087] doSentence(253,506,0,1);
[008E] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/EXv2.txt); entry `0000`.

```text
[0000] VAR_RESULT = getActorRoom(1);
[0003] unless (VAR_RESULT != 31) goto 0014;
[0009] ActorOps(1,[Sound(6)]);
[000D] setActorElevation(1,0);
[0010] stopScript(85);
[0012] stopScript(86);
[0014] unlockCostume(1)
[0017] unlockCostume(12)
[001A] Var[203] = Var[234];
[001D] VerbOps(New-13(13,19,2,0,"Walk to@@"));
[002D] cursorCommand(0, 0);
[0030] setActorElevation(7,0);
[0033] ActorOps(7,[Sound(6)]);
[0037] stopObjectCode();
```

## OCv2_0497 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0497.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0497.txt); entry `0013`.

```text
[0013] Var[46]++;
[0015] setActorElevation(1,Var[46]);
[0018] breakHere();
[0019] unless (Var[46] > 14) goto 0013;
[001F] Var[46]--;
[0021] setActorElevation(1,Var[46]);
[0024] breakHere();
[0025] unless (Var[46] == 9) goto 001F;
```

## OCv2_0498 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0498.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0498.txt); entry `0013`.

```text
[0013] ActorOps(5,[Name("dolphin")]);
[001F] Var[47] = Var[234];
[0022] Var[47]++;
[0024] setActorElevation(5,Var[47]);
[0027] breakHere();
[0028] unless (Var[47] > 33) goto 0022;
[002E] Var[47]--;
[0030] setActorElevation(5,Var[47]);
[0033] breakHere();
[0034] unless (Var[47] == 28) goto 002E;
```

## OCv2_0499 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0499.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0499.txt); entry `0013`.

```text
[0013] Var[171] = Var[234];
[0016] walkActorTo(5,38,35);
[001A] waitForActor(5);
[001C] walkActorTo(5,0,35);
[0020] waitForActor(5);
```

## OCv2_0500 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0500.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0500.txt); entry `0013`.

```text
[0013] cutscene();
[0014] doSentence(254,499,0,1);
[001B] animateActor(5,255);
[001E] beginOverride();
[0022] delay(20);
[0026] animateActor(5,246);
[0029] delay(120);
[002D] walkActorTo(5,44,35);
[0031] waitForActor(5);
[0033] putActor(5,37,90);
[0037] delay(300);
[003B] unless (VAR_OVERRIDE) goto 0043;
[003F] putActor(5,37,90);
[0043] ActorOps(5,[Costume(12)]);
[0047] setState08(506);
[004A] Var[47] = Var[234];
[004D] doSentence(250,498,0,1);
[0054] Var[171] = 2;
[0058] endCutscene();
[0059] walkActorTo(5,28,90);
[005D] waitForActor(5);
[005F] clearState02(504);
[0062] stopObjectCode();
```

## OCv2_0501 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0501.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0501.txt); entry `0013`.

```text
[0013] Var[47] -= 2;
[0017] setActorElevation(5,Var[47]);
[001A] breakHere();
[001B] unless (Var[47] < 12) goto 0013;
[0021] stopObjectCode();
```

## OCv2_0502 / verb 33
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0502.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0502.txt); entry `0015`.

```text
[0015] VAR_RESULT = getBitVar(1550,0);
[001A] unless (!VAR_RESULT) goto 0056;
[001E] printEgo("MAN TRADES MINDS WITH DOLPHIN;\x01\x01DESTROYS TUNA BOAT FLEET.");
[0051] setBitVar(1550,0,Var[235]);
[0056] stopObjectCode();
```

## OCv2_0502 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0502.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0502.txt); entry `0057`.

```text
[0057] VAR_TIMER_NEXT = 6;
[005B] Var[45] = 497;
[005F] startSound(43);
[0061] drawObject(Var[45],255,255);
[0065] breakHere();
[0066] Var[45]++;
[0068] unless (Var[45] > 503) goto 0061;
[006E] clearState08(506);
[0071] clearState08(500);
[0074] clearState08(503);
[0077] stopObjectCode();
```

## OCv2_0503 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0503.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0503.txt); entry `0013`.

```text
[0013] doSentence(254,497,0,1);
[001A] Var[46] -= 2;
[001E] unless (Var[46] > 30) goto 0027;
[0024] Var[46] = Var[234];
[0027] setActorElevation(1,Var[46]);
[002A] breakHere();
[002B] unless (Var[46] < 2) goto 001A;
[0031] stopObjectCode();
```

## OCv2_0504 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0504.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0504.txt); entry `001C`.

```text
[001C] unless (VAR_ACTIVE_OBJECT2 == 55) goto 0046;
[0022] VAR_RESULT = isScriptRunning(86);
[0025] unless (VAR_RESULT) goto 003E;
[0029] printEgo("I'm too exhausted!");
[003E] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0046] startScript(3);
[0048] stopObjectCode();
```

## OCv2_0504 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0504.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0504.txt); entry `0049`.

```text
[0049] setState04(504);
[004C] breakHere();
[004D] unless (getState02(504)) goto 0055;
[0055] stopScript(86);
[0057] startScript(87);
[0059] stopObjectCode();
```

## OCv2_0505 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0505.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0505.txt); entry `001D`.

```text
[001D] unless (VAR_EGO == 5) goto 0041;
[0023] doSentence(254,498,0,1);
[002A] doSentence(250,501,0,1);
[0031] breakHere();
[0032] unless (Var[47] < 12) goto 0031;
[0038] loadRoomWithEgo(605,41,26,9);
[0041] doSentence(253,503,0,1);
[0048] breakHere();
[0049] unless (Var[46] < 2) goto 0048;
[004F] delay(300);
[0053] doSentence(250,497,0,1);
[005A] breakHere();
[005B] unless (Var[46] > 10) goto 005A;
[0061] unless (Var[167] == 64) goto 00A8;
[0067] unless (getState04(39)) goto 00A5;
[006C] unless (Var[164] == 60) goto 00A2;
[0072] printEgo("Wow! It's pretty down there but I can't\x01\x01swim very deep.");
[00A8] unless (Var[167] == 56) goto 00C7;
[00AE] printEgo("The water's leaking in.");
[00C7] unless (Var[164] == 60) goto 00D0;
[00D0] printEgo("I can't hold my breath long enough.");
[00EF] stopObjectCode();
```

## OCv2_0506 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0506.txt](../../zak/converted/scripts_flat/LFv2_0031/ROv2/OCv2_0506.txt); entry `0013`.

```text
[0013] Var[203] = Var[235];
[0016] breakHere();
[0017] unless (VAR_ACTIVE_VERB == 3) goto 0055;
[001D] unless (VAR_ACTIVE_OBJECT2 == 5) goto 0055;
[0023] VAR_RESULT = getActorCostume(5);
[0026] unless (VAR_RESULT == 12) goto 0041;
[002C] waitForActor(VAR_EGO);
[002E] printEgo("It won't take it.");
[0041] printEgo("It's too far away.");
[0052] VAR_ACTIVE_OBJECT2 = Var[234];
```

## SCv2_0050 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0031/SCv2_0050.txt](../../zak/converted/scripts_flat/LFv2_0031/SCv2_0050.txt); entry `0000`.

```text
[0000] cursorCommand(15, 2);
[0003] loadRoom(0);
[0005] Var[199] = Var[234];
[0008] breakHere();
[0009] setBitVar(1441,0,Var[235]);
[000E] loadRoom(31)
[0011] loadCostume(9)
[0014] ActorOps(5,[Name()]);
[0019] ActorOps(5,[Sound(Var[234])]);
[001D] ActorOps(5,[TalkColor(10)]);
[0021] lockCostume(1)
[0024] unless (getState04(39)) goto 0030;
[0029] ActorOps(1,[Costume(39)]);
[0030] ActorOps(1,[Costume(9)]);
[0034] putActorInRoom(5,31);
[0037] putActor(5,1,90);
[003B] putActorInRoom(1,132);
[003E] putActor(1,19,90);
[0042] animateActor(1,250);
[0045] ActorOps(1,[Sound(Var[234])]);
[0049] loadRoom(132);
[004B] setCameraAt(20);
[004D] cursorCommand(255, 1);
[0050] breakHere();
[0051] Var[49] = 6;
[0055] unless (getState04(77)) goto 0073;
[005A] printEgo("Geronimo!!!");
[0067] Var[48] = Var[235];
[006A] animateActor(1,72);
[006D] Var[49] = Var[235];
[0073] printEgo("OH NO\x02\x02");
[007A] Var[48] = 2;
[007E] animateActor(1,76);
[0081] startSound(59);
[0083] Var[46] = 100;
[0087] VAR_TIMER_NEXT = 4;
[008B] setActorElevation(1,Var[46]);
[008E] Var[46] -= Var[48];
[0091] unless (Var[48] == 2) goto 00BC;
[0097] unless (Var[49] == 6) goto 00A1;
[009D] printEgo("O\x02\x02");
[00A1] unless (getState04(77)) goto 00BC;
[00A6] Var[48] = Var[235];
[00A9] animateActor(1,72);
[00AC] animateActor(1,6);
[00AF] printEgo("");
[00B1] printEgo("Ahhh!");
[00B8] Var[49] = 2;
[00BC] breakHere();
[00BD] unless (Var[46] > 100) goto 0087;
[00C3] Var[49]--;
[00C5] unless (Var[49]) goto 00CC;
[00CC] cursorCommand(15, 2);
[00CF] breakHere();
[00D0] VAR_RESULT = isSoundRunning(59);
[00D3] unless (!VAR_RESULT) goto 00CF;
[00D7] loadRoom(0);
[00D9] putActorInRoom(1,31);
[00DC] putActor(1,20,90);
[00E0] Var[46] = 100;
[00E4] setState08(506);
[00E7] loadRoom(31);
[00E9] delay(30);
[00ED] ActorOps(1,[Costume(Var[172])]);
[00F1] animateActor(1,12);
[00F4] animateActor(1,250);
[00F7] startScript(5);
[00F9] setActorElevation(1,Var[46]);
[00FC] Var[46] -= 9;
[0100] unless (Var[46] == Var[235]) goto 010C;
[0105] doSentence(253,502,0,1);
[010C] breakHere();
[010D] unless (Var[46] > 100) goto 00F9;
[0113] Var[46] = Var[234];
[0116] setActorElevation(1,Var[46]);
[0119] breakHere();
[011A] unless (Var[45] > 503) goto 0119;
[0120] unless (Var[171] != 4) goto 0137;
[0126] putActorInRoom(5,31);
[0129] putActor(5,0,35);
[012D] setActorElevation(5,0);
[0130] doSentence(250,499,0,1);
[0137] delay(60);
[013B] print(255,"");
[013E] unless (!getState04(77)) goto 0149;
[0143] Var[166] = 1;
[0147] chainScript(78);
[0149] actorFollowCamera(1);
[014B] setBitVar(1441,0,Var[234]);
[0150] animateActor(1,16);
[0153] delay(300);
[0157] doSentence(250,497,0,1);
[015E] breakHere();
[015F] unless (Var[46] > 12) goto 015E;
[0165] printEgo("Whew!");
[016C] waitForMessage();
[016D] VAR_RESULT = getObjectOwner(48);
[0171] unless (VAR_RESULT == VAR_EGO) goto 01BB;
[0176] printEgo("I'm glad I have this flotation seat! I\x01\x01should be able to last at least an hour.");
[01BB] printEgo("I don't know how long I can tread water!");
[01DD] waitForMessage();
[01DE] cursorCommand(247, 1);
[01E1] Var[199] = Var[235];
[01E4] chainScript(85);
```

## SCv2_0078 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0031/SCv2_0078.txt](../../zak/converted/scripts_flat/LFv2_0031/SCv2_0078.txt); entry `0000`.

```text
[0000] cutscene();
[0001] setBitVar(1470,VAR_EGO,Var[235]);
[0006] setBitVar(1505,VAR_EGO,Var[234]);
[000B] unless (Var[166] != 4) goto 0016;
[0011] setCameraAt(VAR_CAMERA_POS_X);
[0013] putActorInRoom(VAR_EGO,0);
[0016] Var[66] = 14;
[001A] VAR_RESULT = getObjectOwner(Var[66]);
[001D] unless (VAR_RESULT == VAR_EGO) goto 003D;
[0022] unless (Var[66] != 65) goto 003D;
[0028] setOwnerOf(Var[66],0);
[002B] unless (Var[66] == 49) goto 0034;
[0031] clearState04(49);
[0034] unless (Var[66] == 71) goto 003D;
[003A] clearState04(71);
[003D] Var[66]++;
[003F] unless (Var[66] > 83) goto 001A;
[0045] unless (VAR_ROOM == 31) goto 006A;
[004B] doSentence(254,499,0,1);
[0052] doSentence(254,501,0,1);
[0059] doSentence(254,504,0,1);
[0060] doSentence(254,498,0,1);
[0067] putActorInRoom(5,0);
[006A] print(255,"\x06\x00\x06 \x02\x02");
[0071] unless (Var[166] == 1) goto 008C;
[0077] print(255,"fell to his death!");
[008C] unless (Var[166] == 2) goto 00A0;
[0092] print(255,"drowned.");
[00A0] unless (Var[166] == 3) goto 00C7;
[00A6] print(255,"suffocated from lack of oxygen!");
[00C7] unless (Var[166] == 4) goto 0110;
[00CD] print(255,"spent his remaining years in jail\x01\x01for crimes against the Nepalese flag.");
[0110] unless (Var[166] == 5) goto 0150;
[0116] print(255,"was viciously ripped to shreds by\x01\x01The Guardian of the Sphinx!");
[0150] unless (Var[166] == 6) goto 0184;
[0156] print(255,"died a horrible death as his blood\x01\x01boiled away.");
[0181] /* goto 0184; */
[0184] waitForMessage();
[0185] unless (getState04(169)) goto 01C1;
[018A] VAR_EGO = 1;
[018E] VAR_RESULT = getBitVar(1505,VAR_EGO);
[0193] unless (VAR_RESULT) goto 019A;
[019A] VAR_EGO++;
[019C] unless (VAR_EGO > 4) goto 018E;
[01A2] VAR_EGO = 1;
[01A6] VAR_RESULT = getBitVar(1470,VAR_EGO);
[01AB] unless (!VAR_RESULT) goto 01B9;
[01AF] Var[199] = Var[235];
[01B2] startScript(19);
[01B4] actorFollowCamera(VAR_EGO);
[01B9] VAR_EGO++;
[01BB] unless (VAR_EGO > 4) goto 01A6;
[01C1] beginOverride();
[01C5] loadSound(103)
[01C8] lockSound(103)
[01CB] loadSound(104)
[01CE] lockSound(104)
[01D1] startMusic(103);
[01D3] startScript(128);
[01D5] print(255,"            THE GAME IS OVER");
[01EB] delay(300);
[01EF] print(255,"      Press ESCAPE to start again.");
[020D] delay(300);
[0214] stopScript(128);
[0216] stopMusic();
[0217] restart();
[0218] endCutscene();
[0219] cursorCommand(247, 1);
[021C] stopObjectCode();
```

## SCv2_0085 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0031/SCv2_0085.txt](../../zak/converted/scripts_flat/LFv2_0031/SCv2_0085.txt); entry `0000`.

```text
[0000] VAR_RESULT = getObjectOwner(48);
[0004] unless (VAR_RESULT == VAR_EGO) goto 002D;
[0009] unless (getState04(169)) goto 0015;
[000E] delay(208800);
[0015] cutscene();
[0016] loadRoom(0);
[0018] dummy(EE);
[0019] print(255,"58 minutes later^");
[002B] waitForMessage();
[002C] endCutscene();
[002D] delay(7200);
[0031] VAR_RESULT = isScriptRunning(49);
[0034] unless (VAR_RESULT) goto 003B;
[003B] chainScript(86);
```

## SCv2_0086 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0031/SCv2_0086.txt](../../zak/converted/scripts_flat/LFv2_0031/SCv2_0086.txt); entry `0000`.

```text
[0000] unless (VAR_ROOM != 31) goto 000E;
[0006] VAR_EGO = 1;
[000A] startScript(19);
[000C] actorFollowCamera(VAR_EGO);
[000E] Var[199] = Var[234];
[0011] delay(120);
[0015] animateActor(1,246);
[0018] breakHere();
[0019] printEgo("I can't last much longer!");
[0030] delay(1800);
[0034] printEgo("This is the end!");
[0043] doSentence(253,503,0,1);
[004A] delay(480);
[004E] doSentence(253,497,0,1);
[0055] breakHere();
[0056] unless (Var[46] > 10) goto 0055;
[005C] printEgo("HELP!");
[0063] doSentence(250,504,0,1);
[006A] delay(600);
[006E] doSentence(253,503,0,1);
[0075] delay(300);
[0079] doSentence(254,504,0,1);
[0080] Var[166] = 2;
[0084] clearState04(504);
[0087] startScript(78);
[0089] stopObjectCode();
```

## SCv2_0087 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0031/SCv2_0087.txt](../../zak/converted/scripts_flat/LFv2_0031/SCv2_0087.txt); entry `0000`.

```text
[0000] cutscene();
[0001] clearState04(504);
[0004] beginOverride();
[0008] doSentence(253,497,0,1);
[000F] walkActorToActor(5,1,2);
[0013] waitForActor(5);
[0015] faceActor(5,1);
[0018] stopObjectCode();
[0090] setState08(90);
[0093] putActorInRoom(1,1);
[0096] putActor(1,9,52);
[009A] loadRoom(1);
[009C] doSentence(11,85,0,1);
[00A3] unless (Var[62] > 750) goto 00B0;
[00A9] Var[62] -= 750;
[00B0] Var[62] = Var[234];
[00B3] Var[66] = Var[234];
[00B6] Var[67] = getRandomNr(9);
[00B9] Var[14] = Var[66];
[00BC] Var[14] += 212;
[00C0] Var[Var[14]] = Var[67];
[00C3] Var[66]++;
[00C5] unless (Var[66] > 3) goto 00B6;
[00CB] clearState04(237);
[00CE] Var[167] = 52;
[00D2] Var[164] = 44;
[00D6] unless (getState04(39)) goto 00E2;
[00DB] doSentence(7,39,0,1);
[00E2] delay(120);
[00E6] printEgo("Ohhhhh!");
[00EF] Var[199] = Var[235];
[00F2] endCutscene();
[00F3] stopObjectCode();
```

## SCv2_0128 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0031/SCv2_0128.txt](../../zak/converted/scripts_flat/LFv2_0031/SCv2_0128.txt); entry `0000`.

```text
[0000] VAR_TIMER_NEXT = Var[234];
[0003] breakHere();
[0004] VAR_RESULT = isSoundRunning(103);
[0007] unless (!VAR_RESULT) goto 0003;
[000B] startMusic(104);
[000D] breakHere();
[000E] VAR_RESULT = isSoundRunning(104);
[0011] unless (!VAR_RESULT) goto 000D;
```
