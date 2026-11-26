# Room 027 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/ENv2.txt); entry `0000`.

```text
[0000] loadSound(7)
[0003] lockSound(7)
[0006] lights(11,0,0);
[000A] Var[154] = Var[235];
[000D] unless (VAR_EGO <= 4) goto 0029;
[0013] Var[52] = VAR_EGO;
[0016] Var[52] += 4;
[001A] Var[14] = Var[52];
[001D] Var[14] += 171;
[0021] ActorOps(VAR_EGO,[Costume(Var[14])]);
[0025] ActorOps(VAR_EGO,[Sound(7)]);
[0029] loadSound(38)
[002C] clearState08(445);
[002F] clearState02(445);
[0032] doSentence(253,460,0,1);
[0039] unless (VAR_ROOM == 185) goto 00A3;
[003F] RoomScroll(20,100);
[0043] unless (!getState04(454)) goto 0066;
[0048] clearState08(454);
[004B] clearState02(454);
[004E] setBoxFlags(9,0);
[0051] setBoxFlags(10,0);
[0054] setBoxFlags(4,0);
[0057] unless (!getState08(73)) goto 0063;
[005C] doSentence(250,459,0,1);
[0066] setBoxFlags(9,128);
[0069] setBoxFlags(10,128);
[006C] setBoxFlags(4,128);
[006F] unless (getState04(445)) goto 007A;
[0074] setState08(445);
[0077] setState02(445);
[007A] loadSound(37)
[007D] loadSound(25)
[0080] loadSound(2)
[0083] clearState08(446);
[0086] setState02(456);
[0089] clearState08(456);
[008C] setObjectName(451,"sand");
[0094] unless (getState08(451)) goto 00A0;
[0099] doSentence(253,451,0,1);
[00A3] RoomScroll(20,20);
[00A7] setBoxFlags(1,128);
[00AA] setBoxFlags(5,128);
[00AD] setState08(446);
[00B0] clearState02(456);
[00B3] setState08(456);
[00B6] drawObject(454,33,1);
[00BB] setState02(454);
[00BE] unless (!getState04(445)) goto 00C9;
[00C3] setState08(445);
[00C6] setState02(445);
[00C9] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/EXv2.txt); entry `0000`.

```text
[0000] Var[154] = Var[234];
[0003] stopSound(86);
[0005] unless (VAR_EGO <= 4) goto 001A;
[000B] Var[14] = VAR_EGO;
[000E] Var[14] += 171;
[0012] ActorOps(VAR_EGO,[Costume(Var[14])]);
[0016] ActorOps(VAR_EGO,[Sound(6)]);
[001A] setBoxFlags(1,0);
[001D] setBoxFlags(5,0);
[0020] unlockSound(7)
[0023] stopObjectCode();
```

## OCv2_0061 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0061.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0061.txt); entry `001D`.

```text
[001D] unless (VAR_ACTIVE_OBJECT2 > 2) goto 002E;
[0023] unless (VAR_ACTIVE_OBJECT2 <= 4) goto 002E;
[0029] startScript(145);
[002E] printEgo("I'll keep it.");
[003B] stopObjectCode();
```

## OCv2_0061 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0061.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0061.txt); entry `003F`.

```text
[003F] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0044] stopObjectCode();
```

## OCv2_0061 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0061.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0061.txt); entry `003C`.

```text
[003C] startScript(145);
[003E] stopObjectCode();
```

## OCv2_0062 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0062.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0062.txt); entry `001D`.

```text
[001D] startScript(145);
[001F] stopObjectCode();
```

## OCv2_0062 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0062.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0062.txt); entry `0020`.

```text
[0020] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0025] stopObjectCode();
```

## OCv2_0062 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0062.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0062.txt); entry `001D`.

```text
[001D] startScript(145);
[001F] stopObjectCode();
```

## OCv2_0063 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0063.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0063.txt); entry `001D`.

```text
[001D] startScript(145);
[001F] stopObjectCode();
```

## OCv2_0063 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0063.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0063.txt); entry `0020`.

```text
[0020] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0025] stopObjectCode();
```

## OCv2_0063 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0063.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0063.txt); entry `001D`.

```text
[001D] startScript(145);
[001F] stopObjectCode();
```

## OCv2_0444 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0444.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0444.txt); entry `001C`.

```text
[001C] loadRoomWithEgo(534,182,255,255);
[0022] stopObjectCode();
```

## OCv2_0445 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0445.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0445.txt); entry `0019`.

```text
[0019] printEgo("There's no switch. Maybe it's not\x01\x01getting any power.");
[0048] stopObjectCode();
```

## OCv2_0445 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0445.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0445.txt); entry `0049`.

```text
[0049] unless (VAR_ACTIVE_OBJECT2 != 61) goto 0060;
[004F] unless (VAR_ACTIVE_OBJECT2 != 62) goto 0060;
[0055] unless (VAR_ACTIVE_OBJECT2 != 63) goto 0060;
[005B] startScript(3);
[0060] unless (!getState08(451)) goto 0085;
[0065] printEgo("It just spits my token out again!");
[0085] unless (VAR_ACTIVE_OBJECT2 == 61) goto 0093;
[008B] Var[148]--;
[008D] Var[46] = Var[148];
[0093] unless (VAR_ACTIVE_OBJECT2 == 62) goto 00A1;
[0099] Var[150]--;
[009B] Var[46] = Var[150];
[00A1] unless (VAR_ACTIVE_OBJECT2 == 63) goto 00E7;
[00A7] Var[151]--;
[00A9] Var[46] = Var[151];
[00AC] unless (Var[46] == Var[235]) goto 00B9;
[00B1] setObjectName(VAR_ACTIVE_OBJECT2,"token");
[00B9] unless (!Var[46]) goto 00C0;
[00BD] setOwnerOf(VAR_ACTIVE_OBJECT2,14);
[00C0] startSound(44);
[00C2] VAR_RESULT = isScriptRunning(51);
[00C5] unless (!VAR_RESULT) goto 00CB;
[00C9] startScript(51);
[00CB] cursorCommand(15, 2);
[00CE] setBoxFlags(11,0);
[00D1] setBitVar(1440,VAR_EGO,Var[235]);
[00D6] setBitVar(1445,VAR_EGO,Var[235]);
[00DB] walkActorToObject(VAR_EGO,445);
[00DF] waitForActor(VAR_EGO);
[00E1] setBoxFlags(11,128);
[00E4] cursorCommand(247, 1);
[00E7] stopObjectCode();
```

## OCv2_0446 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0446.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0446.txt); entry `001D`.

```text
[001D] doSentence(11,448,VAR_ACTIVE_OBJECT2,0);
[0023] stopObjectCode();
```

## OCv2_0446 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0446.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0446.txt); entry `0024`.

```text
[0024] doSentence(12,447,0,0);
[002B] stopObjectCode();
```

## OCv2_0447 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0447.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0447.txt); entry `0019`.

```text
[0019] doSentence(11,448,VAR_ACTIVE_OBJECT2,0);
[001F] stopObjectCode();
```

## OCv2_0447 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0447.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0447.txt); entry `0020`.

```text
[0020] printEgo("Face Area Rapid Transit:\x01\x01One token each way: $100");
[004C] stopObjectCode();
```

## OCv2_0448 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0448.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0448.txt); entry `0017`.

```text
[0017] unless (!getState08(446)) goto 00E8;
[001C] unless (classOfIs(VAR_ACTIVE_OBJECT2,128)) goto 00E3;
[0021] unless (VAR_EGO == 1) goto 0033;
[0027] unless (VAR_ACTIVE_OBJECT2 != 18) goto 0030;
[0033] unless (VAR_EGO == 3) goto 0045;
[0039] unless (VAR_ACTIVE_OBJECT2 != 74) goto 0042;
[0045] unless (VAR_EGO == 4) goto 0078;
[004B] unless (VAR_ACTIVE_OBJECT2 != 75) goto 0075;
[0051] printEgo("Doesn't work. It knows it's not mine.");
[0075] /* goto 0078; */
[0078] startSound(84);
[007A] breakHere();
[007B] VAR_RESULT = isSoundRunning(84);
[007E] unless (!VAR_RESULT) goto 007A;
[0082] Var[14] = VAR_EGO;
[0085] Var[14] += 61;
[0089] unless (Var[14] < 100) goto 00A6;
[008F] printEgo("My balance is too low.");
[00A6] Var[14] = VAR_EGO;
[00A9] Var[14] += 61;
[00AD] Var[Var[14]] -= 100;
[00B1] VAR_ACTIVE_OBJECT2 = VAR_EGO;
[00B4] startScript(145);
[00B6] cursorCommand(15, 2);
[00B9] clearState08(457);
[00BC] startSound(44);
[00BE] delay(30);
[00C2] printEgo("A token!");
[00CB] waitForMessage();
[00CC] walkActorToObject(VAR_EGO,457);
[00D0] waitForActor(VAR_EGO);
[00D2] setState08(457);
[00D5] breakHere();
[00D6] cursorCommand(247, 1);
[00D9] unless (getState04(445)) goto 00E0;
[00DE] startScript(51);
[00E3] startScript(3);
[00E8] printEgo("The slot's been blown away!");
[0101] stopObjectCode();
```

## OCv2_0449 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0449.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0449.txt); entry `001B`.

```text
[001B] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0029;
[001F] doSentence(9,450,0,0);
[0029] printEgo("The door is already open.");
[0040] stopObjectCode();
```

## OCv2_0449 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0449.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0449.txt); entry `0041`.

```text
[0041] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 004F;
[0045] doSentence(9,450,0,0);
[004F] printEgo("The door is already closed.");
[0068] stopObjectCode();
```

## OCv2_0449 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0449.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0449.txt); entry `0069`.

```text
[0069] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0073;
[006D] loadRoomWithEgo(463,181,255,255);
[0073] stopObjectCode();
```

## OCv2_0450 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0450.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0450.txt); entry `0019`.

```text
[0019] startSound(2);
[001B] delay(30);
[001F] unless (getState08(471)) goto 0085;
[0024] clearState08(464);
[0027] clearState08(472);
[002A] unless (!getState08(463)) goto 007A;
[002F] unless (!getState08(465)) goto 0074;
[0034] cursorCommand(15, 2);
[0037] Var[47] = 3;
[003B] startSound(37);
[003D] clearState08(467);
[0040] clearState08(474);
[0043] clearState08(455);
[0046] startSound(38);
[0048] breakHere();
[0049] setState08(455);
[004C] breakHere();
[004D] Var[47]--;
[004F] unless (!Var[47]) goto 0043;
[0053] setState08(465);
[0056] breakHere();
[0057] VAR_RESULT = isSoundRunning(37);
[005A] unless (!VAR_RESULT) goto 0056;
[005E] delay(30);
[0062] startSound(25);
[0064] setState08(463);
[0067] setState08(449);
[006A] delay(60);
[006E] cursorCommand(247, 1);
[007A] startSound(25);
[007C] clearState08(463);
[007F] clearState08(449);
[0085] printEgo("It seems to be broken.");
[0099] stopObjectCode();
```

## OCv2_0451 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0451.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0451.txt); entry `005B`.

```text
[005B] unless (VAR_ACTIVE_OBJECT2 == 68) goto 0080;
[0061] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 006A;
[0065] startScript(129);
[006A] printEgo("They look fine to me.");
[0080] startScript(3);
[0082] stopObjectCode();
```

## OCv2_0451 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0451.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0451.txt); entry `0023`.

```text
[0023] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 003F;
[0027] printEgo("It's too much to carry.");
[003F] printEgo("Sure, I'll put it in my pocket.");
[005A] stopObjectCode();
```

## OCv2_0451 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0451.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0451.txt); entry `0083`.

```text
[0083] setObjectName(451,"solar panels");
[0093] stopObjectCode();
```

## OCv2_0452 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0452.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0452.txt); entry `001B`.

```text
[001B] startScript(10);
[001D] setState08(488);
[0020] stopObjectCode();
```

## OCv2_0452 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0452.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0452.txt); entry `0021`.

```text
[0021] startScript(11);
[0023] clearState08(488);
[0026] stopObjectCode();
```

## OCv2_0452 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0452.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0452.txt); entry `0027`.

```text
[0027] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0031;
[002B] loadRoomWithEgo(488,30,255,255);
[0031] stopObjectCode();
```

## OCv2_0453 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0453.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0453.txt); entry `0017`.

```text
[0017] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 0052;
[001B] printEgo("Hmm, it's in several alien languages^\x03\x03Ah, here's English:");
[004F] waitForMessage();
[0050] setState04(VAR_ACTIVE_OBJECT1);
[0052] printEgo("Welcome Space Travelers. Please leave\x01\x01The Friendly Hostel as you found it.\x03\x03No gum chewing.");
[00A2] stopObjectCode();
```

## OCv2_0454 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0454.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0454.txt); entry `0020`.

```text
[0020] doSentence(VAR_ACTIVE_VERB,452,0,0);
[0027] stopObjectCode();
```

## OCv2_0454 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0454.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0454.txt); entry `0020`.

```text
[0020] doSentence(VAR_ACTIVE_VERB,452,0,0);
[0027] stopObjectCode();
```

## OCv2_0456 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0456.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0456.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(396,183,255,255);
[0020] stopObjectCode();
```

## OCv2_0458 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0458.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0458.txt); entry `0021`.

```text
[0021] printEgo("We HEART Matt and Ron!");
[0035] stopObjectCode();
```

## OCv2_0459 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0459.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0459.txt); entry `0013`.

```text
[0013] Var[44] = 459;
[0017] breakHere();
[0018] drawObject(Var[44],255,255);
[001C] Var[44]++;
[001E] unless (Var[44] > 462) goto 0017;
```

## OCv2_0460 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0460.txt](../../zak/converted/scripts_flat/LFv2_0027/ROv2/OCv2_0460.txt); entry `0013`.

```text
[0013] breakHere();
[0014] VAR_RESULT = getBitVar(1445,VAR_EGO);
[0019] unless (VAR_RESULT) goto 0023;
[001D] setState02(445);
[0023] unless (!getState08(445)) goto 002B;
[0028] clearState02(445);
```

## SCv2_0051 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0027/SCv2_0051.txt](../../zak/converted/scripts_flat/LFv2_0027/SCv2_0051.txt); entry `0000`.

```text
[0000] unless (getState04(445)) goto 000E;
[0005] unless (VAR_ROOM == 185) goto 000E;
[000E] delay(300);
[0012] startSound(86);
[0014] Var[252] = 20;
[0018] Var[252] -= 5;
[001C] unless (VAR_ROOM_RESOURCE == 27) goto 0058;
[0022] print(255,"Tram leaving in \x04\xFC\x04 seconds.\x02\x02");
[003E] unless (Var[252] > 5) goto 004A;
[0044] print(255,"");
[004A] print(255," All aboard!");
[0058] delay(300);
[005C] unless (Var[252] == 5) goto 0018;
[0062] cutscene();
[0063] VAR_TIMER_NEXT = 10;
[0067] ActorOps(12,[Costume(20)]);
[006B] loadSound(3)
[006E] unless (!getState04(445)) goto 0085;
[0073] Var[48] = 76;
[0077] Var[49] = 26;
[007B] Var[50] = 184;
[007F] setState04(445);
[0085] Var[48] = 26;
[0089] Var[49] = 76;
[008D] Var[50] = 185;
[0091] clearState04(445);
[0094] putActorInRoom(12,26);
[0097] putActor(12,Var[48],49);
[009B] animateActor(12,248);
[009E] unless (Var[48] == 26) goto 00A7;
[00A4] animateActor(12,249);
[00A7] loadRoom(26);
[00A9] actorFollowCamera(12);
[00AB] beginOverride();
[00AF] delay(120);
[00B3] startSound(3);
[00B5] walkActorTo(12,Var[49],49);
[00B9] waitForActor(12);
[00BB] stopSound(3);
[00BD] delay(120);
[00C1] stopSound(3);
[00C3] loadRoom(Var[50]);
[00C5] Var[47] = 1;
[00C9] VAR_RESULT = getBitVar(1445,Var[47]);
[00CE] unless (VAR_RESULT) goto 00EE;
[00D2] putActorInRoom(Var[47],Var[50]);
[00D5] putActor(Var[47],13,63);
[00D9] setBitVar(1445,Var[47],Var[234]);
[00DE] setBitVar(1440,Var[47],Var[234]);
[00E3] Var[51] = 13;
[00E7] Var[51] += Var[47];
[00EA] walkActorTo(Var[47],Var[51],51);
[00EE] Var[47]++;
[00F0] unless (Var[47] > 4) goto 00C9;
[00F6] startScript(5);
[00F8] endCutscene();
[00F9] stopObjectCode();
```

## SCv2_0129 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0027/SCv2_0129.txt](../../zak/converted/scripts_flat/LFv2_0027/SCv2_0129.txt); entry `0000`.

```text
[0000] cutscene();
[0001] setState08(VAR_ACTIVE_OBJECT1);
[0003] setState08(443);
[0006] beginOverride();
[000A] loadRoom(0);
[000C] dummy(EE);
[000D] print(255,"After sweeping for some time^");
[0029] waitForMessage();
[002A] actorFollowCamera(VAR_EGO);
[002C] unless (!VAR_OVERRIDE) goto 0034;
[0030] delay(60);
[0034] printEgo("Ta da! Gee, it looks like solar panels.");
[0056] waitForMessage();
[0057] doSentence(253,451,0,1);
[005E] endCutscene();
[005F] stopObjectCode();
```

## SCv2_0145 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0027/SCv2_0145.txt](../../zak/converted/scripts_flat/LFv2_0027/SCv2_0145.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_VERB == 11) goto 000F;
[0006] unless (VAR_ACTIVE_OBJECT1 == 448) goto 000F;
[000F] unless (VAR_ACTIVE_VERB == 3) goto 0094;
[0015] Var[14] = VAR_EGO;
[0018] Var[14] += 147;
[001C] Var[Var[14]] -= Var[235];
[001F] Var[14] = VAR_EGO;
[0022] Var[14] += 147;
[0026] Var[66] = Var[14];
[0029] printEgo("Here's one token.");
[003A] unless (Var[66]) goto 004E;
[003E] unless (Var[66] == Var[235]) goto 004B;
[0043] setObjectName(VAR_ACTIVE_OBJECT1,"token");
[004E] setOwnerOf(VAR_ACTIVE_OBJECT1,14);
[0051] Var[14] = VAR_ACTIVE_OBJECT2;
[0054] Var[14] += 147;
[0058] Var[Var[14]] += Var[235];
[005B] unless (VAR_ACTIVE_OBJECT2 == 1) goto 0065;
[0061] Var[66] = 61;
[0065] unless (VAR_ACTIVE_OBJECT2 == 3) goto 006F;
[006B] Var[66] = 62;
[006F] unless (VAR_ACTIVE_OBJECT2 == 4) goto 0079;
[0075] Var[66] = 63;
[0079] Var[14] = VAR_ACTIVE_OBJECT2;
[007C] Var[14] += 147;
[0080] unless (Var[14] == Var[235]) goto 008B;
[0085] setOwnerOf(Var[66],VAR_ACTIVE_OBJECT2);
[008B] setObjectName(Var[66],"tokens");
[0094] unless (VAR_ACTIVE_VERB == 12) goto 00C3;
[009A] Var[14] = VAR_EGO;
[009D] Var[14] += 147;
[00A1] Var[66] = Var[14];
[00A4] printEgo("`One way fare.`\x01\x01I have \x04\x42\x04 of them.");
[00C3] stopObjectCode();
```

## SCv2_0146 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0027/SCv2_0146.txt](../../zak/converted/scripts_flat/LFv2_0027/SCv2_0146.txt); entry `0000`.

```text
[0000] cutscene();
[0001] Var[117] = VAR_EGO;
[0004] VAR_EGO = Var[118];
[0007] beginOverride();
[000B] actorFollowCamera(VAR_EGO);
[000D] delay(120);
[0011] animateActor(VAR_EGO,246);
[0014] waitForActor(VAR_EGO);
[0016] Var[66] = getActorX(VAR_EGO);
[0019] walkActorTo(VAR_EGO,Var[66],63);
[001D] printEgo("My helmet reads just \x02\x02");
[0031] unless (Var[254] == 30) goto 003E;
[0037] printEgo("7\x02\x02");
[003E] printEgo("2\x02\x02");
[0042] printEgo(" minutes of oxygen\x01\x01left!");
[005A] waitForMessage();
[005B] unless (Var[254] == 30) goto 009D;
[0061] printEgo("I'd better hurry and refill it or find\x01\x01a place where I can take it off!");
[009C] waitForMessage();
[009D] delay(60);
[00A1] print(255,"");
[00A4] VAR_EGO = Var[117];
[00A7] Var[254] = 10;
[00AB] endCutscene();
[00AC] stopObjectCode();
```
