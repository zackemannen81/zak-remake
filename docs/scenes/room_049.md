# Room 049 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0049/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0049/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] stopObjectCode();
```

## SCv2_0001 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0049/SCv2_0001.txt](../../zak/converted/scripts_flat/LFv2_0049/SCv2_0001.txt); entry `0000`.

```text
[0000] VAR_NUM_ACTOR = 13;
[0004] setVarRange(Var[234],2,[0,1]);
[0009] VAR_TIMER_NEXT = 6;
[000D] VAR_EGO = 1;
[0011] ActorOps(1,[Costume(30)]);
[0015] ActorOps(1,[Color(9, 0)]);
[001A] ActorOps(1,[Color(14, 0)]);
[001F] ActorOps(1,[TalkColor(10)]);
[0023] ActorOps(0,[TalkColor(9)]);
[0027] ActorOps(1,[Sound(6)]);
[002B] lockSound(6)
[002E] lockScript(5)
[0031] lockScript(6)
[0034] lockScript(150)
[0037] Var[66] = 0;
[003B] VerbOps(Delete(Var[66]););
[003E] Var[66]++;
[0040] unless (Var[66] > 14) goto 003B;
[0046] VAR_CUTSCENEEXIT_KEY = 27;
[004A] setVarRange(Var[164],2,[44,44]);
[004F] setVarRange(Var[166],5,[0,52,52,32,32]);
[0057] cutscene();
[0058] loadRoom(46);
[005A] setCameraAt(20);
[005C] pickupObject(83);
[005F] setOwnerOf(83,14);
[0063] pickupObject(82);
[0066] beginOverride();
[006A] breakHere();
[006B] cursorCommand(6, 0);
[006E] startScript(122);
[0070] delay(300);
[0074] beginOverride();
[0078] startScript(127);
[007A] breakHere();
[007B] VAR_RESULT = isScriptRunning(127);
[007E] unless (!VAR_RESULT) goto 007A;
[0082] stopScript(127);
[0084] loadRoom(0);
[0086] beginOverride();
[008A] VAR_OVERRIDE = Var[234];
[008D] unlockUnkResType0(0)
[0090] loadSound(95)
[0093] lockSound(95)
[0096] loadCostume(31)
[0099] lockCostume(31)
[009C] loadScript(109)
[009F] lockScript(109)
[00A2] loadScript(111)
[00A5] lockScript(111)
[00A8] loadRoom(55)
[00AB] loadSound(81)
[00AE] lockSound(81)
[00B1] loadRoom(51)
[00B4] loadRoom(49)
[00B7] loadRoom(58)
[00BA] loadRoom(56)
[00BD] dummy(EE);
[00BE] print(255,"Later that night, Zak's in bed^\x02\x02");
[00DC] delay(120);
[00E0] print(255,"alone^\x01\x01\x02\x02");
[00EB] delay(180);
[00EF] print(255,"                                 ^again.");
[010A] ActorOps(10,[Costume(31)]);
[010E] ActorOps(1,[Color(9, 9)]);
[0113] ActorOps(1,[Color(14, 14)]);
[0118] delay(180);
[011C] loadRoom(58);
[011E] startSound(81);
[0120] Var[60] = Var[234];
[0123] startScript(111);
[0125] delay(180);
[0129] drawObject(766,255,255);
[012E] delay(180);
[0132] drawObject(767,255,255);
[0137] delay(240);
[013B] drawObject(768,255,255);
[0140] breakHere();
[0141] VAR_RESULT = isSoundRunning(81);
[0144] unless (!VAR_RESULT) goto 0140;
[0148] startMusic(95);
[014A] breakHere();
[014B] loadRoom(51);
[014D] VAR_TIMER_NEXT = 8;
[0151] setCameraAt(60);
[0153] breakHere();
[0154] panCameraTo(20);
[0156] breakHere();
[0157] unless (VAR_MUSIC_TIMER > 4) goto 0156;
[015D] breakHere();
[015E] unless (VAR_CAMERA_POS_X < 21) goto 015D;
[0164] loadRoom(55);
[0166] Var[46] = 756;
[016A] drawObject(Var[46],255,255);
[016E] Var[60] = Var[235];
[0171] unless (VAR_MACHINE_SPEED > 40) goto 01A8;
[0177] Var[49] = VAR_MUSIC_TIMER;
[017A] breakHere();
[017B] unless (VAR_MUSIC_TIMER != Var[49]) goto 017A;
[0180] unless (Var[46] == 756) goto 018F;
[0186] Var[49] = VAR_MUSIC_TIMER;
[0189] breakHere();
[018A] unless (VAR_MUSIC_TIMER != Var[49]) goto 0189;
[018F] unless (Var[46] == 760) goto 01A5;
[0195] delay(60);
[0199] Var[60] = Var[235];
[019C] Var[49] = VAR_MUSIC_TIMER;
[019F] breakHere();
[01A0] unless (VAR_MUSIC_TIMER != Var[49]) goto 019F;
[01A8] breakHere();
[01A9] breakHere();
[01AA] unless (Var[46] != 760) goto 01B2;
[01B0] clearState08(Var[46]);
[01B2] Var[46]++;
[01B4] unless (Var[46] > 760) goto 016A;
[01BA] unless (VAR_MACHINE_SPEED <= 40) goto 01C8;
[01C0] delay(180);
[01C4] Var[60] = Var[235];
[01C7] breakHere();
[01C8] loadRoom(49);
[01CA] drawObject(701,255,255);
[01CF] unless (VAR_MACHINE_SPEED <= 40) goto 01D8;
[01D8] putActorInRoom(1,49);
[01DB] putActor(1,30,56);
[01DF] putActorInRoom(10,49);
[01E2] putActor(10,0,20);
[01E6] setActorElevation(10,40);
[01E9] animateActor(1,248);
[01EC] breakHere();
[01ED] Var[60] = Var[235];
[01F0] delay(60);
[01F4] printEgo("Hey! That's ME!");
[0203] delay(165);
[0207] animateActor(1,246);
[020A] breakHere();
[020B] printEgo("TABLOID REPORTER `SPACES OUT` IN DREAM.");
[022F] delay(225);
[0233] walkActorTo(1,14,56);
[0237] breakHere();
[0238] VAR_RESULT = getActorX(1);
[023B] unless (VAR_RESULT < 19) goto 0237;
[0241] clearState08(701);
[0244] delay(30);
[0248] drawObject(699,10,2);
[024D] delay(30);
[0251] animateActor(1,12);
[0254] delay(60);
[0258] walkActorTo(1,27,56);
[025C] breakHere();
[025D] VAR_RESULT = getActorX(1);
[0260] unless (VAR_RESULT > 21) goto 025C;
[0266] drawObject(700,10,6);
[026B] breakHere();
[026C] breakHere();
[026D] breakHere();
[026E] drawObject(696,30,3);
[0273] delay(36);
[0277] walkActorTo(1,33,45);
[027B] waitForActor(1);
[027D] animateActor(1,246);
[0280] delay(90);
[0284] clearState08(700);
[0287] clearState08(699);
[028A] clearState08(696);
[028D] delay(60);
[0291] Var[45] = 4;
[0295] breakHere();
[0296] drawObject(697,Var[45],6);
[029B] Var[45] += 3;
[029F] unless (Var[45] > 17) goto 0295;
[02A5] animateActor(1,24);
[02A8] delay(42);
[02AC] walkActorTo(1,27,55);
[02B0] waitForActor(1);
[02B2] animateActor(1,244);
[02B5] breakHere();
[02B6] clearState08(701);
[02B9] walkActorTo(1,25,55);
[02BD] breakHere();
[02BE] breakHere();
[02BF] drawObject(698,19,4);
[02C4] breakHere();
[02C5] animateActor(1,16);
[02C8] delay(120);
[02CC] clearState08(698);
[02CF] breakHere();
[02D0] walkActorTo(1,19,55);
[02D4] animateActor(1,24);
[02D7] waitForActor(1);
[02D9] breakHere();
[02DA] unless (VAR_MUSIC_TIMER >= 24) goto 02D9;
[02E0] clearState08(697);
[02E3] delay(60);
[02E7] animateActor(1,28);
[02EA] setActorElevation(10,0);
[02ED] walkActorTo(10,5,55);
[02F1] VAR_TIMER_NEXT = 9;
[02F5] delay(120);
[02F9] animateActor(1,12);
[02FC] waitForActor(10);
[02FE] animateActor(10,245);
[0301] delay(60);
[0305] printEgo("AIEEEEE!");
[030F] walkActorTo(1,34,55);
[0313] startScript(109);
[0315] waitForActor(1);
[0317] animateActor(1,244);
[031A] breakHere();
[031B] breakHere();
[031C] animateActor(1,12);
[031F] walkActorTo(1,32,56);
[0323] delay(24);
[0327] walkActorTo(1,8,56);
[032B] breakHere();
[032C] VAR_RESULT = getActorX(1);
[032F] unless (VAR_RESULT < 18) goto 032B;
[0335] drawObject(702,255,255);
[033A] delay(30);
[033E] walkActorToObject(1,702);
[0342] waitForActor(1);
[0344] putActorInRoom(1,56);
[0347] putActor(1,0,48);
[034B] stopScript(109);
[034D] putActorInRoom(10,56);
[0350] putActor(10,0,48);
[0354] setActorElevation(10,170);
[0357] loadRoom(56);
[0359] VAR_TIMER_NEXT = 8;
[035D] setCameraAt(20);
[035F] walkActorTo(1,26,48);
[0363] breakHere();
[0364] VAR_RESULT = getActorX(1);
[0367] unless (VAR_RESULT > 19) goto 0363;
[036D] setActorElevation(10,0);
[0370] startScript(109);
[0372] animateActor(10,249);
[0375] waitForActor(1);
[0377] animateActor(1,244);
[037A] breakHere();
[037B] breakHere();
[037C] animateActor(1,12);
[037F] breakHere();
[0380] breakHere();
[0381] walkActorTo(1,47,48);
[0385] stopScript(109);
[0387] walkActorTo(10,0,48);
[038B] breakHere();
[038C] VAR_RESULT = getActorX(10);
[038F] unless (VAR_RESULT < 6) goto 038B;
[0395] breakHere();
[0396] breakHere();
[0397] panCameraTo(60);
[0399] breakHere();
[039A] unless (VAR_CAMERA_POS_X == 60) goto 0399;
[03A0] Var[45] = Var[235];
[03A3] setState08(761);
[03A6] breakHere();
[03A7] breakHere();
[03A8] clearState08(761);
[03AB] breakHere();
[03AC] breakHere();
[03AD] Var[45]++;
[03AF] unless (Var[45] > 2) goto 03A3;
[03B8] putActorInRoom(1,49);
[03BB] putActor(1,30,55);
[03BF] putActorInRoom(10,49);
[03C2] putActor(10,0,20);
[03C6] setActorElevation(10,40);
[03C9] animateActor(1,248);
[03CC] breakHere();
[03CD] Var[60] = Var[235];
[03D0] delay(24);
[03D4] printEgo("Hey! That's ME!");
[03E3] delay(90);
[03E7] animateActor(1,246);
[03EA] breakHere();
[03EB] printEgo("TABLOID REPORTER `SPACES OUT` IN DREAM.");
[040F] delay(60);
[0413] walkActorTo(1,26,55);
[0417] clearState08(701);
[041A] breakHere();
[041B] drawObject(699,10,2);
[0420] breakHere();
[0421] print(255,"");
[0424] breakHere();
[0425] animateActor(1,12);
[0428] waitForActor(1);
[042A] drawObject(700,10,6);
[042F] delay(30);
[0433] animateActor(1,245);
[0436] breakHere();
[0437] drawObject(696,30,3);
[043C] delay(60);
[0440] animateActor(1,246);
[0443] breakHere();
[0444] clearState08(700);
[0447] clearState08(699);
[044A] clearState08(696);
[044D] breakHere();
[044E] Var[45] = 4;
[0452] breakHere();
[0453] drawObject(697,Var[45],6);
[0458] Var[45] += 3;
[045C] unless (Var[45] > 17) goto 0452;
[0462] animateActor(1,244);
[0465] breakHere();
[0466] animateActor(1,24);
[0469] breakHere();
[046A] clearState08(701);
[046D] walkActorTo(1,25,55);
[0471] breakHere();
[0472] breakHere();
[0473] drawObject(698,19,4);
[0478] breakHere();
[0479] animateActor(1,16);
[047C] delay(90);
[0480] clearState08(698);
[0483] breakHere();
[0484] walkActorTo(1,20,55);
[0488] animateActor(1,24);
[048B] waitForActor(1);
[048D] clearState08(697);
[0490] breakHere();
[0491] animateActor(1,28);
[0494] breakHere();
[0495] setActorElevation(10,0);
[0498] walkActorTo(10,5,55);
[049C] delay(180);
[04A0] animateActor(1,12);
[04A3] waitForActor(10);
[04A5] animateActor(10,245);
[04A8] printEgo("AIEEEEE!");
[04B2] walkActorTo(1,34,55);
[04B6] startScript(109);
[04B8] waitForActor(1);
[04BA] animateActor(1,244);
[04BD] breakHere();
[04BE] breakHere();
[04BF] animateActor(1,12);
[04C2] walkActorTo(1,32,58);
[04C6] delay(24);
[04CA] walkActorTo(1,8,58);
[04CE] breakHere();
[04CF] VAR_RESULT = getActorX(1);
[04D2] unless (VAR_RESULT < 18) goto 04CE;
[04D8] drawObject(702,255,255);
[04DD] delay(30);
[04E1] walkActorToObject(1,702);
[04E5] waitForActor(1);
[04E7] putActorInRoom(1,56);
[04EA] putActor(1,39,48);
[04EE] stopScript(109);
[04F0] putActorInRoom(10,0);
[04F3] loadRoom(56);
[04F5] setCameraAt(60);
[04F7] walkActorTo(1,47,48);
[04FB] waitForActor(1);
[04FD] animateActor(1,12);
[0500] setState08(761);
[0503] breakHere();
[0504] drawObject(761,255,255);
[0509] breakHere();
[050A] animateActor(1,246);
[050D] delay(30);
[0511] walkActorTo(1,20,48);
[0515] breakHere();
[0516] VAR_RESULT = isSoundRunning(95);
[0519] unless (!VAR_RESULT) goto 0515;
[051D] breakHere();
[051E] VAR_RESULT = getActorX(1);
[0521] unless (VAR_RESULT < 39) goto 051D;
[0527] VAR_TIMER_NEXT = 6;
[052B] putActorInRoom(VAR_EGO,0);
[052E] Var[122] = VAR_OVERRIDE;
[0531] stopScript(122);
[0533] endCutscene();
[0534] stopSound(81);
[0536] stopMusic();
[0537] loadRoom(0);
[0539] print(255,"");
[053C] print(255,"");
[053F] startScript(108);
[0541] stopObjectCode();
```

## SCv2_0009 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0049/SCv2_0009.txt](../../zak/converted/scripts_flat/LFv2_0049/SCv2_0009.txt); entry `0000`.

```text
[0000] delay(60);
[0004] Var[197] = Var[234];
[0007] Var[66] = 1;
[000B] Var[61] = Var[234];
[000E] unless (Var[66] == 2) goto 0016;
[0014] Var[66]++;
[0016] VAR_RESULT = getBitVar(1470,Var[66]);
[001B] unless (VAR_RESULT) goto 0022;
[0022] unless (Var[66] == 1) goto 0041;
[0028] unless (getState04(39)) goto 003E;
[002D] unless (Var[167] == 64) goto 003E;
[0033] unless (Var[164] == 60) goto 003C;
[003C] Var[61]++;
[0041] Var[14] = Var[66];
[0044] Var[14] += 166;
[0048] unless (Var[14] == 32) goto 005E;
[004E] Var[14] = Var[66];
[0051] Var[14] += 203;
[0055] unless (Var[14]) goto 005C;
[005C] Var[61]++;
[005E] Var[67] = getActorRoom(Var[66]);
[0061] unless (Var[67] == 181) goto 006A;
[006A] unless (Var[67] == 180) goto 007C;
[0070] unless (getState08(472)) goto 007C;
[0075] unless (getState08(465)) goto 007C;
[007A] Var[61]++;
[007C] unless (Var[67] >= 189) goto 008B;
[0082] unless (Var[67] <= 205) goto 008B;
[008B] unless (Var[67] == 30) goto 0098;
[0091] unless (getState08(488)) goto 0098;
[0096] Var[61]++;
[0098] unless (Var[67] == 34) goto 00A1;
[00A1] unless (Var[67] == 32) goto 00AE;
[00A7] unless (!getState04(558)) goto 00AE;
[00AC] Var[61]++;
[00AE] unless (Var[67] >= 182) goto 00BC;
[00B4] unless (Var[67] <= 188) goto 00BC;
[00BA] Var[61]++;
[00BC] unless (Var[61]) goto 00D1;
[00C0] setBitVar(1505,Var[66],Var[235]);
[00C5] VAR_RESULT = isScriptRunning(82);
[00C8] unless (!VAR_RESULT) goto 00CE;
[00CC] startScript(82);
[00D1] setBitVar(1505,Var[66],Var[234]);
[00D6] Var[14] = Var[66];
[00D9] Var[14] += 225;
[00DD] Var[Var[14]] = 15;
[00E1] Var[66]++;
[00E3] unless (Var[66] > 4) goto 000B;
[00E9] unless (getState04(49)) goto 011C;
[00EE] Var[222]++;
[00F0] unless (Var[222] > 45) goto 0119;
[00F6] Var[66] = getObjectOwner(49);
[00FA] print(Var[66],"Ouch! The lighter's hot!");
[0112] doSentence(5,49,0,1);
[011C] unless (Var[222]) goto 0122;
[0120] Var[222]--;
```

## SCv2_0010 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0049/SCv2_0010.txt](../../zak/converted/scripts_flat/LFv2_0049/SCv2_0010.txt); entry `0000`.

```text
[0000] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0008;
[0004] setState08(VAR_ACTIVE_OBJECT1);
[0006] startSound(10);
[0008] stopObjectCode();
```

## SCv2_0011 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0049/SCv2_0011.txt](../../zak/converted/scripts_flat/LFv2_0049/SCv2_0011.txt); entry `0000`.

```text
[0000] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0008;
[0004] clearState08(VAR_ACTIVE_OBJECT1);
[0006] startSound(11);
[0008] stopObjectCode();
```

## SCv2_0108 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0049/SCv2_0108.txt](../../zak/converted/scripts_flat/LFv2_0049/SCv2_0108.txt); entry `0000`.

```text
[0000] loadRoom(0);
[0002] cursorCommand(4, 0);
[0005] stopScript(111);
[0007] stopScript(109);
[0009] stopScript(127);
[000B] unlockSound(81)
[000E] unlockSound(95)
[0011] unlockScript(109)
[0014] unlockCostume(31)
[0017] unlockScript(111)
[001A] setActorElevation(10,0);
[001D] putActorInRoom(10,0);
[0020] VerbOps(Delete(1));
[0023] VerbOps(Delete(2));
[0026] VerbOps(Delete(3));
[0029] loadScript(2)
[002C] lockScript(2)
[002F] loadScript(4)
[0032] lockScript(4)
[0035] lockSound(10)
[0038] lockSound(11)
[003B] loadSound(10)
[003E] loadSound(11)
[0041] lockScript(59)
[0044] lockScript(19)
[0047] loadSound(84)
[004A] lockSound(84)
[004D] loadSound(89)
[0050] lockSound(89)
[0053] loadSound(27)
[0056] lockSound(27)
[0059] loadSound(29)
[005C] lockSound(29)
[005F] loadSound(78)
[0062] lockSound(78)
[0065] loadSound(19)
[0068] lockSound(19)
[006B] loadSound(38)
[006E] lockSound(38)
[0071] loadSound(44)
[0074] lockSound(44)
[0077] loadSound(25)
[007A] lockSound(25)
[007D] loadSound(2)
[0080] lockSound(2)
[0083] loadScript(131)
[0086] lockScript(131)
[0089] loadScript(3)
[008C] lockScript(3)
[008F] loadScript(20)
[0092] lockScript(20)
[0095] loadScript(10)
[0098] lockScript(10)
[009B] loadScript(11)
[009E] lockScript(11)
[00A1] putActorInRoom(2,6);
[00A4] putActor(2,20,16);
[00A8] putActorInRoom(3,26);
[00AB] putActor(3,0,0);
[00AF] putActorInRoom(4,26);
[00B2] putActor(4,0,0);
[00B6] putActorInRoom(7,4);
[00B9] putActor(7,22,52);
[00BD] animateActor(7,250);
[00C0] putActorInRoom(8,18);
[00C3] putActor(8,10,60);
[00C7] animateActor(8,248);
[00CA] ActorOps(8,[Costume(26)]);
[00CE] ActorOps(8,[TalkColor(7)]);
[00D2] ActorOps(8,[Sound(6)]);
[00D6] ActorOps(9,[Costume(11)]);
[00DA] ActorOps(9,[Sound(Var[234])]);
[00DE] ActorOps(1,[Name("Zak")]);
[00E6] ActorOps(2,[Name("Annie")]);
[00F0] ActorOps(3,[Name("Melissa")]);
[00FC] ActorOps(4,[Name("Leslie")]);
[0107] ActorOps(7,[Name("representative")]);
[011A] ActorOps(1,[Costume(1)]);
[011E] ActorOps(2,[Costume(2)]);
[0122] ActorOps(3,[Costume(0)]);
[0126] ActorOps(4,[Costume(0)]);
[012A] ActorOps(7,[Costume(28)]);
[012E] Var[196] = 14;
[0132] ActorOps(9,[Color(5, 1)]);
[0137] ActorOps(8,[Color(9, 1)]);
[013C] ActorOps(8,[Color(3, 0)]);
[0141] ActorOps(2,[TalkColor(13)]);
[0145] ActorOps(3,[TalkColor(3)]);
[0149] ActorOps(4,[TalkColor(13)]);
[014D] ActorOps(9,[TalkColor(9)]);
[0151] ActorOps(7,[TalkColor(14)]);
[0155] ActorOps(6,[TalkColor(10)]);
[0159] ActorOps(2,[Sound(6)]);
[015D] ActorOps(3,[Sound(6)]);
[0161] ActorOps(4,[Sound(6)]);
[0165] ActorOps(7,[Sound(6)]);
[0169] Var[245] = 24;
[016D] setVarRange(Var[171],13,[0,1,2,3,4,5,6,7,36,9,9,8,8]);
[017D] setVarRange(VAR_ACTOR_RANGE_MIN,2,[1,4]);
[0182] setVarRange(Var[42],2,[1,4]);
[0187] PseudoRoom(33,61,62,63,54);
[018E] PseudoRoom(14,1,2,64,65);
[0195] PseudoRoom(40,3,4);
[019A] PseudoRoom(44,5,6);
[019F] PseudoRoom(21,55,7);
[01A4] PseudoRoom(43,8,9,10);
[01AA] PseudoRoom(22,11,12);
[01AF] PseudoRoom(27,56,57);
[01B4] PseudoRoom(35,66,67);
[01B9] PseudoRoom(8,13,14,15,16,17);
[01C1] PseudoRoom(9,18,19,20,21);
[01C8] PseudoRoom(38,22,23);
[01CD] PseudoRoom(15,24,60);
[01D2] PseudoRoom(29,25,26);
[01D7] PseudoRoom(24,27,58);
[01DC] PseudoRoom(53,28,29,30,31,32,33,34,35,36,37,38,39);
[01EB] PseudoRoom(28,52,53);
[01F0] PseudoRoom(37,40,41,42,43,44,45,46,47);
[01FB] PseudoRoom(23,79,80,81,82,83,84,85,86,87,88,89,90,91,92,78,59);
[020E] PseudoRoom(36,70,71,72,73,74,75,76,77,68,69);
[021B] setVarRange(Var[61],5,[0,12250,5405,1138,342]);
[0228] setVarRange(Var[161],2,[57,57]);
[022D] setVarRange(Var[205],3,[60,243,240]);
[0233] Var[254] = 30;
[0237] Var[158] = 49;
[023B] Var[14] = 1;
[023F] Var[14] += 78;
[0243] Var[Var[14]] = 662;
[0247] Var[14] = 1;
[024B] Var[14] += 154;
[024F] Var[Var[14]] = 145;
[0253] Var[14] = 1;
[0257] Var[14] += 81;
[025B] Var[Var[14]] = 260;
[025F] setBitVar(1559,0,Var[235]);
[0264] startScript(9);
[0266] startScript(19);
[0268] unless (Var[122]) goto 0290;
[026C] print(255,"");
[026F] cursorCommand(4, 0);
[0272] putActorInRoom(1,1);
[0275] putActor(1,21,56);
[0279] animateActor(1,250);
[027C] setState08(90);
[027F] VAR_RESULT = isScriptRunning(122);
[0282] unless (VAR_RESULT) goto 028B;
[0286] cursorCommand(247, 1);
[0289] chainScript(7);
[028B] actorFollowCamera(VAR_EGO);
[0290] putActorInRoom(1,1);
[0293] putActor(1,9,52);
[0297] actorFollowCamera(VAR_EGO);
[0299] animateActor(1,250);
[029C] delay(60);
[02A0] printEgo("WOW! What a dream!\x03\x03I should make a drawing of that map I\x01\x01saw.");
[02D4] delay(60);
[02D8] doSentence(1,90,0,0);
[02DF] waitForSentence();
[02E0] walkActorTo(1,21,56);
[02E4] waitForActor(1);
[02E6] doSentence(RESET);
[02E8] drawSentence();
[02E9] cursorCommand(247, 1);
[02EC] stopObjectCode();
```

## SCv2_0109 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0049/SCv2_0109.txt](../../zak/converted/scripts_flat/LFv2_0049/SCv2_0109.txt); entry `0000`.

```text
[0000] Var[47] = getActorX(1);
[0003] Var[48] = getActorY(1);
[0006] walkActorTo(10,Var[47],Var[48]);
[000A] breakHere();
[000B] breakHere();
[000C] breakHere();
[000D] breakHere();
```

## SCv2_0111 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0049/SCv2_0111.txt](../../zak/converted/scripts_flat/LFv2_0049/SCv2_0111.txt); entry `0000`.

```text
[0000] breakHere();
[0001] unless (Var[60]) goto 0000;
[0005] Var[60] = Var[234];
[0008] breakHere();
[0009] cursorCommand(132, 0);
[000C] VerbOps(New-1(9,19,1,0,"Created and designed by"));
[002A] VerbOps(New-2(9,20,2,0,"David Fox, Matthew Kane,"));
[0049] VerbOps(New-3(5,21,3,0,"David Spangler, and Ron Gilbert"));
[006F] cursorCommand(0, 0);
[0072] breakHere();
[0073] unless (Var[60]) goto 0072;
[0077] Var[60] = Var[234];
[007A] VerbOps(Delete(3));
[007D] VerbOps(New-1(7,19,1,0,"Scripted and programmed by"));
[009E] VerbOps(New-2(7,20,2,0,"David Fox and Matthew Kane"));
[00BF] cursorCommand(0, 0);
[00C2] breakHere();
[00C3] unless (Var[60]) goto 00C2;
[00C7] Var[60] = Var[234];
[00CA] VerbOps(New-1(10,19,1,0,"Art and Animation by"));
[00E5] VerbOps(New-2(4,20,2,0,"Mark J. Ferrari, Basilio Amaro,"));
[010B] VerbOps(New-3(4,21,3,0,"Martin Cameron, and Gary Winnick"));
[0132] cursorCommand(0, 0);
[0135] breakHere();
[0136] unless (Var[60]) goto 0135;
[013A] Var[60] = Var[234];
[013D] VerbOps(New-1(7,19,1,0,"Music and Sound Effects by"));
[015E] VerbOps(New-2(0,20,2,0,"Matthew Kane, Dave Hayes, & Dave Warhol"));
[018C] VerbOps(Delete(3));
[018F] cursorCommand(0, 0);
[0192] breakHere();
[0193] unless (Var[60]) goto 0192;
[0197] Var[60] = Var[234];
[019A] breakHere();
[019B] VerbOps(Delete(1));
[019E] VerbOps(New-2(5,20,2,0,"IBM Version by Aric Wilmunder"));
[01C2] cursorCommand(0, 0);
[01C5] breakHere();
[01C6] unless (Var[60]) goto 01C5;
[01CA] Var[60] = Var[234];
[01CD] VerbOps(Delete(1));
[01D0] VerbOps(New-2(5,20,2,0,"Project Directed by David Fox"));
[01F4] cursorCommand(0, 0);
[01F7] breakHere();
[01F8] unless (Var[60]) goto 01F7;
[01FC] Var[60] = Var[234];
[01FF] VerbOps(Delete(2));
[0202] cursorCommand(0, 0);
[0205] cursorCommand(4, 0);
[0208] stopObjectCode();
```

## SCv2_0122 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0049/SCv2_0122.txt](../../zak/converted/scripts_flat/LFv2_0049/SCv2_0122.txt); entry `0000`.

```text
[0000] breakHere();
[0001] unless (VAR_KEYPRESS == 5) goto 0013;
[0007] stopScript(1);
[0009] stopSound(81);
[000B] stopMusic();
[000C] loadRoom(0);
[000E] Var[122] = Var[235];
[0011] startScript(108);
```

## SCv2_0127 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0049/SCv2_0127.txt](../../zak/converted/scripts_flat/LFv2_0049/SCv2_0127.txt); entry `0000`.

```text
[0000] loadRoom(0);
[0002] ActorOps(10,[Costume(32)]);
[0006] ActorOps(10,[TalkColor(7)]);
[000A] putActorInRoom(10,46);
[000D] putActor(10,58,32);
[0011] putActorInRoom(1,46);
[0014] putActor(1,55,58);
[0018] animateActor(10,250);
[001B] animateActor(1,248);
[001E] loadRoom(46);
[0020] setCameraAt(60);
[0022] doSentence(253,671,0,1);
[0029] delay(60);
[002D] print(10,"Zak, Zak, Zak.\x03\x03What am I going to do with you?");
[0055] waitForMessage();
[0056] printEgo("But Boss! I'll NEVER win a Pulitzer\x01\x01working for this sleazy tabloid!");
[0092] waitForMessage();
[0093] animateActor(10,28);
[0096] breakHere();
[0097] VAR_RESULT = getActorX(1);
[009A] unless (VAR_RESULT < 50) goto 0096;
[00A0] doSentence(254,671,0,1);
[00A7] animateActor(1,255);
[00AA] animateActor(1,245);
[00AD] printEgo("I'm SICK of making up STUPID STORIES!");
[00CE] waitForMessage();
[00CF] print(10,"Then make up stories that AREN'T stupid!");
[00F4] waitForMessage();
[00F5] animateActor(1,246);
[00F8] delay(120);
[00FC] print(10,"Look. Just do this last feature, and\x01\x01then you can write your novel.");
[0137] delay(30);
[013B] animateActor(1,245);
[013E] waitForMessage();
[013F] print(10,"Here's your ticket to Seattle.");
[015C] delay(60);
[0160] clearState08(671);
[0163] waitForMessage();
[0164] walkActorTo(1,56,52);
[0168] print(10,"I want more on that vicious two-headed\x01\x01squirrel that's been attacking campers.");
[01AF] waitForActor(1);
[01B1] animateActor(1,247);
[01B4] waitForMessage();
[01B5] setState08(671);
[01B8] printEgo("Oh, all right!");
[01C6] waitForMessage();
[01C7] walkActorTo(1,66,64);
[01CB] print(10,"And while you're there^");
[01E2] breakHere();
[01E3] VAR_RESULT = getActorX(1);
[01E6] unless (VAR_RESULT > 59) goto 01E2;
[01EC] animateActor(1,255);
[01EF] waitForMessage();
[01F0] animateActor(1,28);
[01F3] print(10,"The first UFO sighting happened on Mt.\x01\x01Rainier 50 years ago. Write it up too.");
[0236] delay(120);
[023A] animateActor(1,16);
[023D] waitForMessage();
[023E] printEgo("Hmmm^");
[0245] waitForMessage();
[0246] printEgo("TABLOID REPORTER STRANGLES\x01\x01BOSS OVER LOUSY ASSIGNMENT.");
[0279] walkActorTo(1,60,60);
[027D] waitForMessage();
[027E] print(10,"What was that?");
[028D] waitForMessage();
[028E] animateActor(1,247);
[0291] printEgo("Nothing, Boss.");
[02A0] waitForMessage();
[02A1] walkActorTo(1,60,64);
[02A5] delay(30);
[02A9] stopObjectCode();
```
