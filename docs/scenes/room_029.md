# Room 029 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0029/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0029/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] VAR_SENTENCE_OBJECT1 = Var[234];
[0007] setState08(485);
[000A] setState02(485);
[000D] setState08(486);
[0010] setState02(486);
[0013] setState08(487);
[0016] unless (VAR_ROOM == 153) goto 0028;
[001C] unless (Var[193] == 2) goto 0025;
[0028] RoomColor(7,6);
[002C] unless (Var[194] == 2) goto 0041;
[0032] clearState08(485);
[0035] clearState02(485);
[0038] clearState08(486);
[003B] clearState02(486);
[003E] clearState08(487);
[0041] doSentence(253,480,0,1);
[0048] Var[66] = Var[234];
[004B] VerbOps(Delete(Var[66]););
[004E] Var[66]++;
[0050] unless (Var[66] > 14) goto 004B;
[0056] VerbOps(New-30(32,21,14,0,"Done@@@@"));
[0065] VAR_RESULT = isScriptRunning(60);
[0068] unless (VAR_RESULT) goto 0081;
[006C] VerbOps(New-9(0,200,0,0,"Teleport to"));
[0081] VerbOps(New-9(0,200,12,0,"@"));
[0089] VAR_BACKUP_VERB = 9;
[008D] doSentence(RESET);
[008F] cursorCommand(0, 0);
[0092] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0029/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0029/ROv2/EXv2.txt); entry `0000`.

```text
[0000] startScript(19);
[0002] stopObjectCode();
```

## OCv2_0480 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0480.txt](../../zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0480.txt); entry `0025`.

```text
[0025] VAR_RESULT = isScriptRunning(60);
[0028] unless (VAR_RESULT) goto 0036;
[002C] Var[81] = 309;
[0030] Var[195] = 129;
[0034] setState04(VAR_ACTIVE_OBJECT1);
[0036] stopObjectCode();
```

## OCv2_0480 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0480.txt](../../zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0480.txt); entry `0037`.

```text
[0037] Var[45] = 480;
[003B] unless (getState04(Var[45])) goto 00C4;
[003F] unless (Var[45] == 480) goto 005B;
[0045] setObjectName(Var[45],"Mt. Rainier cave");
[005B] unless (Var[45] == 481) goto 0074;
[0061] setObjectName(Var[45],"Mayan pyramid");
[0074] unless (Var[45] == 482) goto 0091;
[007A] setObjectName(Var[45],"Peruvian eye cave");
[0091] unless (Var[45] == 483) goto 00A5;
[0097] setObjectName(Var[45],"Atlantis");
[00A5] unless (Var[45] == 484) goto 00C1;
[00AB] setObjectName(Var[45],"Egyptian pyramid");
[00BE] /* goto 00C1; */
[00C4] setObjectName(Var[45],"???");
[00CA] Var[45]++;
[00CC] unless (Var[45] > 484) goto 003B;
[00D2] stopObjectCode();
```

## OCv2_0481 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0481.txt](../../zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0481.txt); entry `0020`.

```text
[0020] VAR_RESULT = isScriptRunning(60);
[0023] unless (VAR_RESULT) goto 0031;
[0027] Var[81] = 309;
[002B] Var[195] = 130;
[002F] setState04(VAR_ACTIVE_OBJECT1);
[0031] stopObjectCode();
```

## OCv2_0482 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0482.txt](../../zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0482.txt); entry `0024`.

```text
[0024] VAR_RESULT = isScriptRunning(60);
[0027] unless (VAR_RESULT) goto 0035;
[002B] Var[81] = 632;
[002F] Var[195] = 137;
[0033] setState04(VAR_ACTIVE_OBJECT1);
[0035] stopObjectCode();
```

## OCv2_0483 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0483.txt](../../zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0483.txt); entry `0027`.

```text
[0027] Var[195] = 1;
[002B] stopObjectCode();
```

## OCv2_0484 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0484.txt](../../zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0484.txt); entry `0023`.

```text
[0023] VAR_RESULT = isScriptRunning(60);
[0026] unless (VAR_RESULT) goto 0034;
[002A] Var[81] = 437;
[002E] Var[195] = 25;
[0032] setState04(VAR_ACTIVE_OBJECT1);
[0034] stopObjectCode();
```

## OCv2_0485 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0485.txt](../../zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0485.txt); entry `001F`.

```text
[001F] Var[195] = 1;
[0023] stopObjectCode();
```

## OCv2_0486 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0486.txt](../../zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0486.txt); entry `0024`.

```text
[0024] Var[81] = 296;
[0028] Var[195] = 193;
[002C] stopObjectCode();
```

## OCv2_0487 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0487.txt](../../zak/converted/scripts_flat/LFv2_0029/ROv2/OCv2_0487.txt); entry `0013`.

```text
[0013] unless (VAR_VIRT_MOUSE_Y < 67) goto 0026;
[0019] VAR_CLICK_OBJECT = findObject(VAR_VIRT_MOUSE_X,VAR_VIRT_MOUSE_Y);
[001D] unless (VAR_CLICK_OBJECT != VAR_SENTENCE_OBJECT1) goto 0026;
[0022] VAR_SENTENCE_OBJECT1 = VAR_CLICK_OBJECT;
[0025] drawSentence();
[0026] stopObjectCode();
```

## SCv2_0041 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0029/SCv2_0041.txt](../../zak/converted/scripts_flat/LFv2_0029/SCv2_0041.txt); entry `0000`.

```text
[0000] unless (VAR_ROOM == 132) goto 0011;
[0006] printEgo("NOT NOW!");
[000F] stopScript(0);
[0011] unless (VAR_ACTIVE_OBJECT1 == 17) goto 0035;
[0017] unless (!Var[193]) goto 0032;
[001B] printEgo("There's nothing on it.");
[0030] stopScript(0);
[0035] unless (!Var[194]) goto 006E;
[0039] printEgo("$1138! \x02\x02");
[0042] unless (VAR_EGO == 1) goto 0051;
[0048] printEgo("I'd\x02\x02");
[0051] printEgo("Zak\x02\x02");
[0057] printEgo(" better pay this soon!");
[006C] stopScript(0);
[006E] cutscene();
[006F] cursorCommand(191, 3);
[0072] unless (VAR_ACTIVE_OBJECT1 == 17) goto 007D;
[0078] loadRoom(153);
[007D] loadRoom(154);
[007F] doSentence(253,487,0,1);
[0086] beginOverride();
[008A] breakHere();
[008B] unless (VAR_ACTIVE_VERB != 30) goto 0094;
[0094] endCutscene();
[0095] stopObjectCode();
```

## SCv2_0060 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0029/SCv2_0060.txt](../../zak/converted/scripts_flat/LFv2_0029/SCv2_0060.txt); entry `0000`.

```text
[0000] unless (VAR_EGO != 1) goto 0009;
[0009] unless (!getState04(81)) goto 0035;
[000E] delay(120);
[0012] printEgo("It doesn't seem to be doing anything.");
[0033] stopScript(0);
[0035] unless (VAR_ROOM == 19) goto 005B;
[003B] delay(120);
[003F] printEgo("It doesn't seem to work here.");
[0059] stopScript(0);
[005B] VAR_RESULT = getObjectOwner(17);
[005F] unless (VAR_RESULT == 1) goto 0070;
[0065] unless (Var[193]) goto 0070;
[0069] Var[118] = 153;
[0070] VAR_RESULT = getObjectOwner(15);
[0074] unless (VAR_RESULT == 1) goto 0085;
[007A] unless (Var[194]) goto 0085;
[007E] Var[118] = 154;
[0085] printEgo("I need a map to focus on.");
[009A] stopScript(0);
[009C] cutscene();
[009D] beginOverride();
[00A1] loadRoom(Var[118]);
[00A3] Var[195] = Var[234];
[00A6] cursorCommand(191, 3);
[00A9] breakHere();
[00AA] unless (VAR_ACTIVE_VERB == 30) goto 00B3;
[00B3] doSentence(253,487,0,1);
[00BA] unless (!Var[195]) goto 00C1;
[00C1] beginOverride();
[00C2] /* goto 00C5; */
[00C5] cursorCommand(4, 0);
[00C8] actorFollowCamera(VAR_EGO);
[00CA] cursorCommand(15, 2);
[00CD] breakHere();
[00CE] animateActor(1,246);
[00D1] unless (Var[195] == 1) goto 00F7;
[00D7] beginOverride();
[00DB] delay(300);
[00DF] printEgo("Nothing's happening!");
[00F7] lockCostume(Var[172])
[00FA] loadSound(62)
[00FD] lockSound(62)
[0100] ActorOps(1,[Sound(6)]);
[0104] Var[199] = Var[235];
[0107] setState02(504);
[010A] stopScript(85);
[010C] stopScript(86);
[010E] setBitVar(1475,VAR_EGO,Var[234]);
[0113] unless (VAR_ROOM == 131) goto 0120;
[0119] setBitVar(1510,0,Var[234]);
[011E] stopScript(69);
[0120] stopScript(50);
[0122] beginOverride();
[0126] startSound(61);
[0128] delay(240);
[012C] startSound(89);
[012E] unless (VAR_ROOM == 11) goto 0137;
[0134] setState08(263);
[0137] ActorOps(1,[Costume(0)]);
[013B] setActorElevation(1,0);
[013E] delay(120);
[0142] unless (VAR_ROOM == 11) goto 014A;
[0148] startScript(120);
[014A] loadRoomWithEgo(Var[81],Var[195],255,255);
[014F] breakHere();
[0150] startSound(62);
[0152] animateActor(1,250);
[0155] delay(240);
[0159] startSound(89);
[015B] ActorOps(1,[Costume(Var[172])]);
[015F] startScript(5);
[0161] delay(60);
[0165] unless (VAR_OVERRIDE) goto 018B;
[0169] unless (VAR_ROOM == 11) goto 0171;
[016F] startScript(120);
[0171] stopSound(61);
[0173] stopSound(62);
[0175] loadRoom(Var[195]);
[0177] putActorInRoom(1,Var[195]);
[017A] putActorAtObject(1,Var[81]);
[017D] animateActor(1,250);
[0180] setActorElevation(1,0);
[0183] ActorOps(1,[Costume(Var[172])]);
[0187] startScript(5);
[0189] startSound(89);
[018B] setBitVar(1440,VAR_EGO,Var[234]);
[0190] unlockCostume(Var[172])
[0193] unlockSound(62)
[0196] endCutscene();
[0197] stopObjectCode();
```
