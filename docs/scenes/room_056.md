# Room 056 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0056/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0056/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] stopObjectCode();
```

## SCv2_0002 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0056/SCv2_0002.txt](../../zak/converted/scripts_flat/LFv2_0056/SCv2_0002.txt); entry `0000`.

```text
[0000] unless (Var[123] == VAR_ACTIVE_OBJECT2) goto 001E;
[0005] unless (Var[124] == VAR_ACTIVE_OBJECT1) goto 001E;
[000A] Var[197]++;
[000C] unless (Var[197] > 3) goto 001B;
[0012] Var[197] = Var[234];
[0015] unless (Var[123]) goto 001B;
[0019] chainScript(3);
[001E] Var[197] = Var[234];
[0021] Var[123] = VAR_ACTIVE_OBJECT1;
[0024] Var[124] = VAR_ACTIVE_OBJECT2;
[0027] unless (VAR_ACTIVE_VERB == 18) goto 0039;
[002D] VAR_RESULT = isScriptRunning(26);
[0030] unless (!VAR_RESULT) goto 0039;
[0034] startScript(26);
[0039] unless (VAR_ACTIVE_VERB >= 30) goto 0048;
[003F] unless (VAR_ACTIVE_VERB < 45) goto 0048;
[0048] unless (VAR_ACTIVE_VERB == 45) goto 0070;
[004E] unless (VAR_ACTIVE_OBJECT2 >= 1) goto 0067;
[0054] unless (VAR_ACTIVE_OBJECT2 <= 4) goto 0067;
[005A] VAR_EGO = VAR_ACTIVE_OBJECT2;
[005D] startScript(19);
[005F] actorFollowCamera(VAR_EGO);
[0061] cursorCommand(247, 1);
[0067] startScript(59);
[0069] VAR_SENTENCE_PREPOSITION = 4;
[0070] Var[137] = VAR_EGO;
[0073] unless (VAR_ACTIVE_VERB == 3) goto 00FF;
[0079] unless (VAR_ACTIVE_OBJECT2 > 13) goto 008C;
[007F] unless (classOfIs(VAR_ACTIVE_OBJECT2,4)) goto 0089;
[0084] startScript(32);
[008C] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[008F] unless (VAR_RESULT == 15) goto 0098;
[0098] VAR_RESULT = getBitVar(1440,Var[137]);
[009D] unless (!VAR_RESULT) goto 00BF;
[00A1] unless (VAR_TIMER_NEXT == 6) goto 00AE;
[00A7] walkActorToActor(Var[137],VAR_ACTIVE_OBJECT2,4);
[00AE] unless (VAR_TIMER_NEXT == 8) goto 00BB;
[00B4] walkActorToActor(Var[137],VAR_ACTIVE_OBJECT2,3);
[00BB] walkActorToActor(Var[137],VAR_ACTIVE_OBJECT2,1);
[00BF] waitForActor(Var[137]);
[00C1] VAR_RESULT = getDist(Var[137],VAR_ACTIVE_OBJECT2);
[00C5] unless (VAR_RESULT <= 4) goto 00FC;
[00CB] faceActor(VAR_ACTIVE_OBJECT2,Var[137]);
[00CE] faceActor(Var[137],VAR_ACTIVE_OBJECT2);
[00D1] unless (Var[203]) goto 00DE;
[00D5] unless (VAR_ACTIVE_OBJECT2 > 4) goto 00DE;
[00DE] unless (VAR_VERB_ALLOWED) goto 00EF;
[00E2] doSentence(3,VAR_ACTIVE_OBJECT1,VAR_ACTIVE_OBJECT2,1);
[00E7] doSentence(RESET);
[00EF] unless (VAR_ACTIVE_OBJECT2 <= 12) goto 00FA;
[00F5] startScript(20);
[00FA] chainScript(3);
[00FF] unless (VAR_ACTIVE_VERB == 12) goto 0121;
[0105] unless (VAR_CURRENT_LIGHTS == Var[234]) goto 0121;
[010A] printEgo("It's too dark to read.");
[0121] unless (!VAR_VERB_ALLOWED) goto 015A;
[0125] Var[22] = VAR_ACTIVE_OBJECT1;
[0128] VAR_RESULT = getBitVar(1440,Var[137]);
[012D] unless (!VAR_RESULT) goto 013D;
[0131] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[0134] unless (VAR_RESULT == 15) goto 013D;
[013A] walkActorToObject(Var[137],Var[22]);
[013D] waitForActor(Var[137]);
[013F] VAR_RESULT = getDist(Var[137],Var[22]);
[0143] unless (VAR_RESULT <= 2) goto 0154;
[0149] unless (VAR_ACTIVE_VERB != 13) goto 0151;
[014F] chainScript(3);
[015A] Var[66] = Var[234];
[015D] unless (VAR_ACTIVE_VERB != 12) goto 01B1;
[0163] unless (VAR_ACTIVE_VERB != 14) goto 01B1;
[0169] unless (VAR_ACTIVE_VERB != 17) goto 01B1;
[016F] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[0172] unless (VAR_RESULT == 15) goto 018C;
[0178] unless (getState01(VAR_ACTIVE_OBJECT1)) goto 018A;
[017C] doSentence(VAR_ACTIVE_VERB,VAR_ACTIVE_OBJECT1,VAR_ACTIVE_OBJECT2,0);
[0181] doSentence(14,VAR_ACTIVE_OBJECT1,0,0);
[018A] Var[66]++;
[018C] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT2);
[018F] unless (VAR_RESULT == 15) goto 01A9;
[0195] unless (getState01(VAR_ACTIVE_OBJECT2)) goto 01A7;
[0199] doSentence(VAR_ACTIVE_VERB,VAR_ACTIVE_OBJECT1,VAR_ACTIVE_OBJECT2,0);
[019E] doSentence(14,VAR_ACTIVE_OBJECT2,0,0);
[01A7] Var[66]++;
[01A9] unless (Var[66] == 2) goto 01B1;
[01AF] chainScript(3);
[01B1] unless (Var[21] != 3) goto 0222;
[01B7] Var[22] = VAR_ACTIVE_OBJECT1;
[01BA] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[01BD] unless (VAR_RESULT != 15) goto 01D3;
[01C3] unless (VAR_ACTIVE_OBJECT2) goto 01D3;
[01C7] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT2);
[01CA] unless (VAR_RESULT == 15) goto 01D3;
[01D0] Var[22] = VAR_ACTIVE_OBJECT2;
[01D3] VAR_RESULT = getBitVar(1440,Var[137]);
[01D8] unless (!VAR_RESULT) goto 01EA;
[01DC] VAR_RESULT = getObjectOwner(Var[22]);
[01DF] unless (VAR_RESULT == 15) goto 01EA;
[01E5] walkActorToObject(Var[137],Var[22]);
[01E8] waitForActor(Var[137]);
[01EA] VAR_RESULT = getDist(Var[137],Var[22]);
[01EE] unless (VAR_RESULT > 2) goto 0210;
[01F4] faceActor(Var[137],Var[22]);
[01F7] waitForActor(Var[137]);
[01F9] printEgo("I can't reach it.");
[0209] doSentence(RESET);
[020B] drawSentence();
[020C] doSentence(STOP);
[020E] stopScript(0);
[0210] VAR_RESULT = getBitVar(1440,Var[137]);
[0215] unless (VAR_RESULT) goto 0222;
[0219] unless (VAR_ACTIVE_VERB == 13) goto 0222;
[0222] unless (VAR_ACTIVE_OBJECT2) goto 0235;
[0226] VAR_RESULT = getObjPreposition(VAR_ACTIVE_OBJECT1);
[0229] unless (!VAR_RESULT) goto 0235;
[022D] unless (VAR_ACTIVE_OBJECT2 != 55) goto 0235;
[0233] chainScript(3);
[0235] doSentence(VAR_ACTIVE_VERB,VAR_ACTIVE_OBJECT1,VAR_ACTIVE_OBJECT2,1);
[023A] drawSentence();
[023B] stopObjectCode();
```

## SCv2_0003 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0056/SCv2_0003.txt](../../zak/converted/scripts_flat/LFv2_0056/SCv2_0003.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_VERB == 1) goto 001F;
[0006] printEgo("It doesn't seem to open.");
[001F] unless (VAR_ACTIVE_VERB == 9) goto 002B;
[002B] unless (VAR_ACTIVE_VERB == 10) goto 0043;
[0031] printEgo("I can't move it.");
[0043] unless (VAR_ACTIVE_VERB == 12) goto 0067;
[0049] printEgo("There's nothing to read on it.");
[0067] unless (VAR_ACTIVE_VERB == 14) goto 0083;
[006D] printEgo("I can't pick that up.");
[0083] printEgo("That doesn't seem to work.");
[009B] doSentence(STOP);
[009D] doSentence(RESET);
[009F] drawSentence();
[00A0] stopObjectCode();
```

## SCv2_0004 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0056/SCv2_0004.txt](../../zak/converted/scripts_flat/LFv2_0056/SCv2_0004.txt); entry `0000`.

```text
[0000] Var[34] = Var[234];
[0003] unless (Var[21] == 3) goto 000C;
[0009] Var[34] = Var[235];
[000C] unless (VAR_CLICK_AREA == 4) goto 0049;
[0012] unless (VAR_KEYPRESS == 8) goto 0019;
[0018] restart();
[0019] unless (Var[21] == 1) goto 0049;
[001F] unless (VAR_KEYPRESS == 5) goto 0027;
[0025] chainScript(7);
[0027] unless (VAR_KEYPRESS <= 4) goto 0049;
[002D] unless (Var[199]) goto 0049;
[0031] unless (getState04(169)) goto 0049;
[0036] VAR_RESULT = getBitVar(1470,VAR_KEYPRESS);
[003B] unless (!VAR_RESULT) goto 0049;
[003F] VAR_SENTENCE_VERB = 45;
[0043] VAR_SENTENCE_OBJECT2 = VAR_KEYPRESS;
[0049] unless (VAR_CLICK_AREA == 5) goto 0052;
[004F] Var[34] = Var[235];
[0052] unless (VAR_CLICK_AREA == 1) goto 00E2;
[0058] unless (VAR_SENTENCE_PREPOSITION) goto 0065;
[005C] unless (VAR_SENTENCE_VERB != 45) goto 0065;
[0065] unless (VAR_CLICK_VERB == 30) goto 006E;
[006E] unless (VAR_CLICK_VERB == 45) goto 0077;
[0077] unless (VAR_CLICK_VERB == 3) goto 007F;
[007D] doSentence(RESET);
[007F] unless (VAR_CLICK_VERB == 15) goto 00A1;
[0085] VAR_SENTENCE_VERB = 15;
[0089] drawSentence();
[008A] unless (VAR_VIRT_MOUSE_Y < 67) goto 009D;
[0090] VAR_CLICK_OBJECT = findObject(VAR_VIRT_MOUSE_X,VAR_VIRT_MOUSE_Y);
[0094] unless (VAR_CLICK_OBJECT != VAR_SENTENCE_OBJECT1) goto 009D;
[0099] VAR_SENTENCE_OBJECT1 = VAR_CLICK_OBJECT;
[009C] drawSentence();
[009D] breakHere();
[00A1] unless (VAR_CLICK_VERB >= 46) goto 00BE;
[00A7] unless (VAR_CLICK_VERB <= 49) goto 00BE;
[00AD] VAR_SENTENCE_OBJECT2 = VAR_CLICK_VERB;
[00B0] VAR_SENTENCE_OBJECT2 -= 45;
[00B4] VAR_SENTENCE_VERB = 45;
[00B8] Var[34] = Var[235];
[00BE] unless (VAR_CLICK_VERB >= 30) goto 00D1;
[00C4] unless (VAR_CLICK_VERB == 45) goto 00CE;
[00CA] VAR_SENTENCE_PREPOSITION = 4;
[00CE] VAR_SENTENCE_VERB = VAR_CLICK_VERB;
[00D1] unless (VAR_SENTENCE_VERB == VAR_CLICK_VERB) goto 00DC;
[00D6] Var[34] = Var[235];
[00DC] VAR_SENTENCE_VERB = VAR_CLICK_VERB;
[00E2] unless (VAR_CLICK_AREA == 3) goto 00F1;
[00E8] unless (VAR_SENTENCE_VERB == 3) goto 00F1;
[00EE] VAR_SENTENCE_PREPOSITION = Var[234];
[00F1] unless (VAR_CLICK_AREA == 2) goto 013F;
[00F7] unless (VAR_SENTENCE_VERB != 45) goto 013F;
[00FD] unless (VAR_SENTENCE_VERB == 13) goto 0106;
[0103] Var[34] = Var[235];
[0106] unless (VAR_SENTENCE_VERB == 15) goto 0111;
[010C] doSentence(RESET);
[010E] Var[34] = Var[234];
[0111] unless (VAR_SENTENCE_VERB == 3) goto 013B;
[0117] unless (VAR_SENTENCE_PREPOSITION) goto 013B;
[011B] VAR_CLICK_OBJECT = findObject(VAR_VIRT_MOUSE_X,VAR_VIRT_MOUSE_Y);
[011F] unless (VAR_CLICK_OBJECT) goto 012B;
[0123] unless (classOfIs(VAR_CLICK_OBJECT,4)) goto 012B;
[012B] VAR_CLICK_OBJECT = actorFromPos(VAR_VIRT_MOUSE_X,VAR_VIRT_MOUSE_Y);
[012F] unless (VAR_CLICK_OBJECT >= 12) goto 0138;
[0135] VAR_CLICK_OBJECT = Var[234];
[013B] VAR_CLICK_OBJECT = findObject(VAR_VIRT_MOUSE_X,VAR_VIRT_MOUSE_Y);
[013F] unless (!VAR_CLICK_OBJECT) goto 0151;
[0143] unless (VAR_SENTENCE_VERB == 13) goto 014E;
[0149] doSentence(RESET);
[014B] Var[34] = Var[235];
[0151] unless (VAR_SENTENCE_PREPOSITION) goto 016B;
[0155] unless (VAR_CLICK_OBJECT == VAR_SENTENCE_OBJECT2) goto 015D;
[015A] Var[34] = Var[235];
[015D] unless (VAR_CLICK_OBJECT == VAR_SENTENCE_OBJECT1) goto 0165;
[0162] VAR_CLICK_OBJECT = Var[234];
[0165] VAR_SENTENCE_OBJECT2 = VAR_CLICK_OBJECT;
[016B] VAR_SENTENCE_OBJECT2 = Var[234];
[016E] unless (VAR_CLICK_OBJECT == VAR_SENTENCE_OBJECT1) goto 0176;
[0173] Var[34] = Var[235];
[0176] VAR_SENTENCE_OBJECT1 = VAR_CLICK_OBJECT;
[0179] unless (VAR_SENTENCE_VERB == 14) goto 018B;
[017F] VAR_RESULT = getObjectOwner(VAR_SENTENCE_OBJECT1);
[0182] unless (VAR_RESULT != 15) goto 018B;
[0188] VAR_SENTENCE_OBJECT1 = Var[234];
[018B] unless (VAR_SENTENCE_VERB == 11) goto 019F;
[0191] unless (VAR_SENTENCE_OBJECT1) goto 019F;
[0195] VAR_SENTENCE_PREPOSITION = getObjPreposition(VAR_SENTENCE_OBJECT1);
[0198] unless (!VAR_SENTENCE_PREPOSITION) goto 019F;
[019C] VAR_SENTENCE_OBJECT2 = Var[234];
[019F] unless (VAR_SENTENCE_VERB == 3) goto 01AD;
[01A5] unless (VAR_SENTENCE_OBJECT1) goto 01AD;
[01A9] VAR_SENTENCE_PREPOSITION = 4;
[01AD] unless (!VAR_SENTENCE_VERB) goto 01B4;
[01B1] VAR_SENTENCE_VERB = VAR_BACKUP_VERB;
[01B4] drawSentence();
[01B5] unless (Var[34]) goto 021B;
[01B9] unless (VAR_SENTENCE_VERB >= 30) goto 01C8;
[01BF] unless (VAR_SENTENCE_VERB <= 45) goto 01C8;
[01C8] unless (VAR_SENTENCE_OBJECT1) goto 01E4;
[01CC] unless (VAR_SENTENCE_PREPOSITION) goto 01DA;
[01D0] unless (VAR_SENTENCE_OBJECT2) goto 01D7;
[01DA] doSentence(STOP);
[01DC] doSentence(VAR_SENTENCE_VERB,VAR_SENTENCE_OBJECT1,VAR_SENTENCE_OBJECT2,0);
[01E4] unless (VAR_SENTENCE_VERB == 13) goto 0205;
[01EA] VAR_RESULT = getBitVar(1440,VAR_EGO);
[01EF] unless (!VAR_RESULT) goto 0205;
[01F3] unless (VAR_CLICK_AREA == 2) goto 0205;
[01F9] unless (Var[21] != 3) goto 0205;
[01FF] doSentence(STOP);
[0201] walkActorTo(VAR_EGO,VAR_VIRT_MOUSE_X,VAR_VIRT_MOUSE_Y);
[0205] unless (VAR_SENTENCE_VERB != 13) goto 021B;
[020B] unless (VAR_SENTENCE_VERB != 45) goto 021B;
[0211] Var[66] = VAR_SENTENCE_OBJECT1;
[0214] doSentence(RESET);
[0216] unless (!Var[66]) goto 021B;
[021A] drawSentence();
[021B] VAR_CLICK_VERB = Var[234];
[021E] VAR_CLICK_OBJECT = Var[234];
[0221] stopObjectCode();
```

## SCv2_0005 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0056/SCv2_0005.txt](../../zak/converted/scripts_flat/LFv2_0056/SCv2_0005.txt); entry `0000`.

```text
[0000] ActorOps(4,[Color(9, Var[196])]);
[0005] ActorOps(3,[Color(5, 3)]);
[000A] ActorOps(3,[Color(11, 9)]);
[000F] ActorOps(3,[Color(3, 1)]);
[0014] VAR_RESULT = getActorCostume(3);
[0017] unless (VAR_RESULT == 8) goto 002A;
[001D] ActorOps(3,[Color(13, 11)]);
[0022] ActorOps(3,[Color(9, 6)]);
[002A] ActorOps(3,[Color(9, 11)]);
[002F] startScript(150);
[0031] VAR_TIMER_NEXT = 6;
[0035] Var[66] = getActorCostume(VAR_EGO);
[0038] Var[67] = Var[235];
[003B] Var[14] = Var[67];
[003E] Var[14] += 171;
[0042] unless (Var[66] == Var[14]) goto 004A;
[004A] Var[67]++;
[004C] unless (Var[67] > 12) goto 003B;
[0052] unless (Var[67] >= 5) goto 006F;
[0058] unless (Var[67] <= 8) goto 0065;
[005E] VAR_TIMER_NEXT = 8;
[0065] unless (Var[67] <= 12) goto 006F;
[006B] VAR_TIMER_NEXT = 10;
[006F] startScript(6);
[0071] stopObjectCode();
```

## SCv2_0006 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0056/SCv2_0006.txt](../../zak/converted/scripts_flat/LFv2_0056/SCv2_0006.txt); entry `0000`.

```text
[0000] unless (VAR_CURRENT_LIGHTS != 11) goto 004E;
[0006] Var[66] = Var[234];
[0009] Var[67] = Var[234];
[000C] unless (getState04(49)) goto 001E;
[0011] VAR_RESULT = getObjectOwner(49);
[0015] unless (VAR_RESULT == VAR_EGO) goto 001E;
[001A] Var[66] = 12;
[001E] unless (getState04(69)) goto 0032;
[0023] VAR_RESULT = getObjectOwner(69);
[0027] unless (VAR_RESULT == VAR_EGO) goto 0032;
[002C] Var[67]++;
[002E] Var[66] = 12;
[0032] unless (VAR_CURRENT_LIGHTS != Var[66]) goto 004E;
[0037] unless (Var[66]) goto 004A;
[003B] unless (Var[67]) goto 0046;
[003F] lights(9,7,1);
[0046] lights(3,3,1);
[004A] lights(Var[66],0,0);
[004E] unless (Var[199] != Var[204]) goto 0077;
[0053] Var[204] = Var[199];
[0056] unless (Var[199]) goto 0071;
[005A] unless (getState04(169)) goto 0071;
[005F] VerbOps(New-45(32,21,14,0,"Switch@@"));
[0071] VerbOps(Delete(14));
[0074] cursorCommand(0, 0);
[0077] breakHere();
```

## SCv2_0020 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0056/SCv2_0020.txt](../../zak/converted/scripts_flat/LFv2_0056/SCv2_0020.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_OBJECT2 <= 4) goto 0016;
[0006] setOwnerOf(VAR_ACTIVE_OBJECT1,VAR_ACTIVE_OBJECT2);
[0009] unless (VAR_ACTIVE_OBJECT2 == 2) goto 0016;
[000F] unless (classOfIs(VAR_ACTIVE_OBJECT1,32)) goto 0016;
[0014] startScript(119);
[0016] stopObjectCode();
```

## SCv2_0150 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0056/SCv2_0150.txt](../../zak/converted/scripts_flat/LFv2_0056/SCv2_0150.txt); entry `0000`.

```text
[0000] animateActor(7,Var[245]);
[0003] animateActor(2,Var[165]);
[0006] animateActor(2,Var[168]);
[0009] animateActor(3,Var[169]);
[000C] animateActor(4,Var[170]);
[000F] unless (!Var[163]) goto 0025;
[0013] animateActor(1,Var[164]);
[0016] animateActor(1,Var[167]);
[0019] unless (Var[167] != 64) goto 0022;
[001F] animateActor(1,68);
[0025] animateActor(1,Var[163]);
[0028] stopObjectCode();
```
