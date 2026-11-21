# Room 009 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0009/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0009/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] unless (VAR_EGO <= 2) goto 0019;
[000A] Var[14] = VAR_EGO;
[000D] Var[14] += 171;
[0011] ActorOps(VAR_EGO,[Costume(Var[14])]);
[0015] ActorOps(VAR_EGO,[Sound(6)]);
[0019] loadScript(115)
[001C] Var[45] = VAR_ROOM;
[001F] clearState08(222);
[0022] clearState08(221);
[0025] Var[60] = 220;
[0029] Var[66] = 224;
[002D] clearState08(Var[66]);
[002F] Var[66]++;
[0031] unless (Var[66] > 227) goto 002D;
[0037] VAR_RESULT = isSoundRunning(114);
[003A] unless (!VAR_RESULT) goto 004D;
[003E] startSound(114);
[0040] VAR_RESULT = getRandomNr(1);
[0043] unless (VAR_RESULT) goto 004D;
[0047] clearState08(223);
[004A] clearState02(223);
[004D] unless (VAR_ROOM == 146) goto 007D;
[0053] setState08(222);
[0056] Var[46] = 3;
[005A] setVarRange(Var[68],4,[666,665,659,661]);
[0065] setVarRange(Var[73],4,[1033,644,795,1316]);
[0070] drawObject(224,255,255);
[0075] Var[47] = 390;
[0079] Var[48] = 20;
[007D] unless (VAR_ROOM == 148) goto 00A9;
[0083] setState08(221);
[0086] Var[46] = 2;
[008A] setVarRange(Var[68],3,[664,665,659]);
[0093] setVarRange(Var[73],3,[1033,1399,1589]);
[009C] drawObject(227,255,255);
[00A1] Var[47] = 352;
[00A5] Var[48] = 17;
[00A9] unless (VAR_ROOM == 147) goto 00EE;
[00AF] Var[46] = Var[235];
[00B2] setVarRange(Var[68],2,[664,666]);
[00B9] setVarRange(Var[73],2,[644,1399]);
[00C0] drawObject(226,255,255);
[00C5] Var[47] = 572;
[00C9] Var[48] = 170;
[00CD] Var[14] = VAR_EGO;
[00D0] Var[14] += 219;
[00D4] Var[Var[14]] = 576;
[00D8] Var[14] = VAR_EGO;
[00DB] Var[14] += 222;
[00DF] Var[Var[14]] = 150;
[00E3] Var[14] = VAR_EGO;
[00E6] Var[14] += 216;
[00EA] Var[Var[14]] = 5;
[00EE] unless (VAR_ROOM == 149) goto 0136;
[00F4] setState08(221);
[00F7] Var[46] = Var[235];
[00FA] setVarRange(Var[68],2,[660,663]);
[0101] setVarRange(Var[73],2,[691,937]);
[0108] drawObject(225,255,255);
[010D] Var[47] = 572;
[0111] Var[48] = 175;
[0115] Var[14] = VAR_EGO;
[0118] Var[14] += 219;
[011C] Var[Var[14]] = 619;
[0120] Var[14] = VAR_EGO;
[0123] Var[14] += 222;
[0127] Var[Var[14]] = 42;
[012B] Var[14] = VAR_EGO;
[012E] Var[14] += 216;
[0132] Var[Var[14]] = 3;
[0136] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0009/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0009/ROv2/EXv2.txt); entry `0000`.

```text
[0000] stopSound(114);
[0002] VAR_RESULT = isScriptRunning(30);
[0005] unless (!VAR_RESULT) goto 000F;
[0009] setState08(223);
[000C] setState02(223);
[000F] stopObjectCode();
```

## OCv2_0217 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0009/ROv2/OCv2_0217.txt](../../zak/converted/scripts_flat/LFv2_0009/ROv2/OCv2_0217.txt); entry `0021`.

```text
[0021] startScript(115);
[0023] stopObjectCode();
```

## OCv2_0218 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0009/ROv2/OCv2_0218.txt](../../zak/converted/scripts_flat/LFv2_0009/ROv2/OCv2_0218.txt); entry `001A`.

```text
[001A] unless (VAR_ROOM == 147) goto 0023;
[0023] unless (VAR_ROOM == 149) goto 0034;
[0029] Var[58] = 572;
[002D] Var[59] = 218;
[0031] Var[255] = VAR_ROOM;
[0034] clearState04(219);
[0037] loadRoomWithEgo(Var[47],Var[48],255,255);
[003C] stopObjectCode();
```

## OCv2_0219 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0009/ROv2/OCv2_0219.txt](../../zak/converted/scripts_flat/LFv2_0009/ROv2/OCv2_0219.txt); entry `001E`.

```text
[001E] startScript(80);
[0020] stopObjectCode();
```

## OCv2_0219 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0009/ROv2/OCv2_0219.txt](../../zak/converted/scripts_flat/LFv2_0009/ROv2/OCv2_0219.txt); entry `001E`.

```text
[001E] startScript(80);
[0020] stopObjectCode();
```

## OCv2_0220 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0009/ROv2/OCv2_0220.txt](../../zak/converted/scripts_flat/LFv2_0009/ROv2/OCv2_0220.txt); entry `0028`.

```text
[0028] Var[78] = 228;
[002C] startScript(30);
[002E] stopObjectCode();
```

## SCv2_0080 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0009/SCv2_0080.txt](../../zak/converted/scripts_flat/LFv2_0009/SCv2_0080.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_VERB == 11) goto 0047;
[0006] unless (classOfIs(VAR_ACTIVE_OBJECT2,128)) goto 0045;
[000B] printEgo("I don't need to buy one. I can read the\x01\x01headlines from here.");
[003E] waitForMessage();
[0045] chainScript(3);
[0047] unless (!getState04(219)) goto 006E;
[004C] setState04(219);
[004F] Var[66] = Var[234];
[0052] VAR_RESULT = getBitVar(1559,Var[66]);
[0057] unless (VAR_RESULT) goto 0066;
[005B] setBitVar(1559,Var[66],Var[234]);
[0060] Var[216] = Var[66];
[0066] Var[66]++;
[0068] unless (Var[66] > 8) goto 0052;
[006E] unless (Var[216] == 0) goto 009A;
[0074] printEgo("COEDS DISCOVER MILE-LONG FACE ON MARS!");
[009A] unless (Var[216] == 1) goto 011D;
[00A0] unless (Var[147] == 2) goto 00E1;
[00A6] printEgo("LAST OF THE TWO-HEADED SQUIRRELS\x01\x01BLUDGEONED BY BUMBLING FOOL!");
[00E1] printEgo("TWO-HEADED SQUIRREL ON RAVENOUS\x01\x01RAMPAGE IN PACIFIC NORTHWEST!");
[011D] unless (Var[216] == 2) goto 0150;
[0123] printEgo("REAL LIFE DR. DOOLITTLE\x01\x01YAKS WITH THE ANIMALS!");
[0150] unless (Var[216] == 3) goto 017F;
[0156] printEgo("SERIOUS SECURITY SLIPPAGE AT STONEHENGE!");
[017F] unless (Var[216] == 4) goto 01A9;
[0185] printEgo("RIDDLE OF THE SILENT SPHINX, SOLVED!");
[01A9] unless (Var[216] == 5) goto 01D5;
[01AF] printEgo("ANGRY GURU MAKES MAN WAIT -- FOUR YEARS!");
[01D5] unless (Var[216] == 6) goto 0218;
[01DB] printEgo("ALIEN CADILLAC CRUISER CAUSE OF\x01\x01BERMUDA TRIANGLE CATASTROPHES!");
[0218] unless (Var[216] == 7) goto 0251;
[021E] printEgo("A-MAZE-ING MYSTERY OF THE\x01\x01ANCIENT MAYANS, REVEALED!");
[0251] unless (Var[216] == 8) goto 028B;
[0257] printEgo("ISOLATED AFRICAN TRIBE\x01\x01WORSHIPS ANCIENT ASTRONAUTS!");
[0288] /* goto 028B; */
[028B] stopObjectCode();
```

## SCv2_0115 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0009/SCv2_0115.txt](../../zak/converted/scripts_flat/LFv2_0009/SCv2_0115.txt); entry `0000`.

```text
[0000] Var[14] = VAR_EGO;
[0003] Var[14] += 154;
[0007] unless (Var[14] == Var[234]) goto 0026;
[000C] printEgo("I need a ticket first.");
[0020] walkActorToObject(VAR_EGO,Var[60]);
[0026] unless (Var[14] == VAR_ROOM) goto 0153;
[002B] Var[14] = VAR_EGO;
[002E] Var[14] += 78;
[0032] Var[66] = Var[14];
[0035] unless (Var[66] == 668) goto 0078;
[003B] unless (VAR_EGO == 1) goto 004A;
[0041] unless (Var[62] < 3000) goto 004A;
[004A] unless (!getState04(55)) goto 0052;
[0052] VAR_RESULT = getBitVar(1510,0);
[0057] unless (VAR_RESULT) goto 0078;
[005B] printEgo("The plane's not here now.");
[0072] walkActorTo(VAR_EGO,10,60);
[0076] stopScript(0);
[0078] unless (VAR_EGO == 1) goto 0085;
[007E] setOwnerOf(82,14);
[0085] setOwnerOf(83,14);
[0089] Var[14] = VAR_EGO;
[008C] Var[14] += 154;
[0090] Var[Var[14]] = Var[234];
[0093] unless (Var[66] == 668) goto 00AA;
[0099] setBitVar(1510,0,Var[235]);
[009E] clearState04(219);
[00A1] loadRoomWithEgo(604,131,255,255);
[00AA] Var[52] = 1;
[00AE] unless (VAR_EGO == 1) goto 00B8;
[00B4] Var[52] = 2;
[00B8] clearState04(219);
[00BB] VAR_RESULT = getActorRoom(Var[52]);
[00BE] unless (VAR_RESULT == 11) goto 00CD;
[00C4] startScript(120);
[00C6] putActorInRoom(Var[52],Var[44]);
[00C9] putActor(Var[52],10,56);
[00CD] VAR_RESULT = getObjectOwner(49);
[00D1] unless (VAR_RESULT != 15) goto 0147;
[00D7] VAR_RESULT = getObjectOwner(50);
[00DB] unless (VAR_RESULT != 15) goto 0147;
[00E1] cutscene();
[00E2] loadRoom(0);
[00E4] beginOverride();
[00E8] dummy(EE);
[00E9] VAR_RESULT = getRandomNr(11);
[00EC] unless (!VAR_RESULT) goto 0116;
[00F0] print(255,"A completely miserable flight later^");
[0116] print(255,"An enjoyable flight later^");
[0130] waitForMessage();
[0131] Var[52] = VAR_EGO;
[0134] startScript(120);
[0136] putActorInRoom(VAR_EGO,Var[44]);
[0139] putActor(VAR_EGO,0,60);
[013D] animateActor(VAR_EGO,249);
[0140] endCutscene();
[0141] walkActorTo(VAR_EGO,8,60);
[0145] stopScript(0);
[0147] putActorInRoom(VAR_EGO,11);
[014A] putActor(VAR_EGO,87,52);
[014E] actorFollowCamera(VAR_EGO);
[0153] printEgo("Whoops! My ticket's from a different\x01\x01airport.");
[017D] walkActorToObject(VAR_EGO,Var[60]);
[0180] stopObjectCode();
```
