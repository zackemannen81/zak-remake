# Room 026 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0026/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0026/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] ActorOps(12,[Costume(20)]);
[0008] setActorElevation(12,0);
[000B] VAR_RESULT = getActorRoom(VAR_EGO);
[000E] unless (VAR_RESULT == 26) goto 0025;
[0014] ActorOps(3,[Costume(0)]);
[0018] ActorOps(4,[Costume(0)]);
[001C] putActorInRoom(12,26);
[001F] putActor(12,76,49);
[0023] startScript(81);
[0025] stopObjectCode();
```

## OCv2_0065 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0026/ROv2/OCv2_0065.txt](../../zak/converted/scripts_flat/LFv2_0026/ROv2/OCv2_0065.txt); entry `008E`.

```text
[008E] printEgo("It only fits me.");
[009D] stopObjectCode();
```

## OCv2_0065 / verb 6
Source: [zak/converted/scripts_flat/LFv2_0026/ROv2/OCv2_0065.txt](../../zak/converted/scripts_flat/LFv2_0026/ROv2/OCv2_0065.txt); entry `001F`.

```text
[001F] Var[14] = VAR_EGO;
[0022] Var[14] += 203;
[0026] unless (Var[14]) goto 004F;
[002A] Var[14] = VAR_EGO;
[002D] Var[14] += 166;
[0031] unless (Var[14] == 36) goto 004C;
[0037] Var[14] = VAR_EGO;
[003A] Var[14] += 166;
[003E] Var[Var[14]] = 32;
[0042] Var[14] = VAR_EGO;
[0045] Var[14] += 166;
[0049] animateActor(VAR_EGO,Var[14]);
[004F] printEgo("I'm out of air!");
[005D] stopObjectCode();
```

## OCv2_0065 / verb 7
Source: [zak/converted/scripts_flat/LFv2_0026/ROv2/OCv2_0065.txt](../../zak/converted/scripts_flat/LFv2_0026/ROv2/OCv2_0065.txt); entry `005E`.

```text
[005E] unless (Var[154]) goto 0078;
[0062] printEgo("There's no air here!");
[0078] Var[14] = VAR_EGO;
[007B] Var[14] += 166;
[007F] Var[Var[14]] = 36;
[0083] Var[14] = VAR_EGO;
[0086] Var[14] += 166;
[008A] animateActor(VAR_EGO,Var[14]);
[008D] stopObjectCode();
```

## OCv2_0065 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0026/ROv2/OCv2_0065.txt](../../zak/converted/scripts_flat/LFv2_0026/ROv2/OCv2_0065.txt); entry `009E`.

```text
[009E] Var[66] = Var[206];
[00A1] startScript(71);
[00A3] stopObjectCode();
```

## OCv2_0066 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0026/ROv2/OCv2_0066.txt](../../zak/converted/scripts_flat/LFv2_0026/ROv2/OCv2_0066.txt); entry `001B`.

```text
[001B] Var[66] = Var[207];
[001E] startScript(71);
[0020] stopObjectCode();
```

## OCv2_0066 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0026/ROv2/OCv2_0066.txt](../../zak/converted/scripts_flat/LFv2_0026/ROv2/OCv2_0066.txt); entry `0021`.

```text
[0021] unless (Var[170] == 32) goto 005C;
[0027] VAR_RESULT = getActorCostume(4);
[002A] unless (VAR_RESULT == 4) goto 005C;
[0030] Var[196] = getRandomNr(15);
[0033] unless (Var[196] == 12) goto 003C;
[003C] unless (Var[196] == 7) goto 0045;
[0045] unless (Var[196] == 8) goto 004E;
[004E] unless (Var[196] == 15) goto 0057;
[0057] ActorOps(4,[Color(9, Var[196])]);
[005C] doSentence(VAR_ACTIVE_VERB,65,0,1);
[0063] stopObjectCode();
```

## SCv2_0081 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0026/SCv2_0081.txt](../../zak/converted/scripts_flat/LFv2_0026/SCv2_0081.txt); entry `0000`.

```text
[0000] startScript(84);
[0002] startSound(112);
[0004] breakHere();
[0005] cutscene();
[0006] pickupObject(66);
[0009] pickupObject(65);
[000C] setOwnerOf(65,3);
[0010] setOwnerOf(66,4);
[0014] ActorOps(3,[Sound(7)]);
[0018] ActorOps(4,[Sound(7)]);
[001C] beginOverride();
[0020] VAR_TIMER_NEXT = 10;
[0024] delay(140);
[0028] panCameraTo(90);
[002A] print(255,"The landing site on Mars^");
[0042] breakHere();
[0043] unless (VAR_CAMERA_POS_X == 90) goto 0042;
[0049] breakHere();
[004A] VAR_RESULT = isSoundRunning(112);
[004D] unless (!VAR_RESULT) goto 0049;
[0051] unless (VAR_OVERRIDE) goto 005A;
[0055] stopSound(112);
[0057] loadRoom(0);
[0059] breakHere();
[005A] ActorOps(3,[Costume(7)]);
[005E] ActorOps(4,[Costume(36)]);
[0062] putActorInRoom(3,185);
[0065] putActor(3,102,36);
[0069] animateActor(3,250);
[006C] putActorInRoom(4,185);
[006F] putActor(4,106,36);
[0073] animateActor(4,250);
[0076] actorFollowCamera(VAR_EGO);
[0078] unless (VAR_OVERRIDE) goto 007F;
[007F] beginOverride();
[0083] delay(60);
[0087] print(3,"I'm getting a little tired of waiting\x01\x01here for instructions.");
[00BE] animateActor(3,245);
[00C1] waitForMessage();
[00C2] animateActor(4,244);
[00C5] print(4,"Yeah, this place is boring.");
[00DF] waitForMessage();
[00E0] print(4,"It's got a great beach, but no water^\x01\x01and no guys!");
[010C] walkActorTo(4,106,50);
[0110] delay(60);
[0114] animateActor(3,246);
[0117] waitForActor(4);
[0119] delay(30);
[011D] walkActorTo(4,92,48);
[0121] waitForActor(4);
[0123] animateActor(4,245);
[0126] waitForMessage();
[0127] print(3,"We should have gone to Ft. Lauderdale\x01\x01for Spring break like everyone else.");
[0169] walkActorTo(3,94,48);
[016D] waitForActor(3);
[016F] animateActor(3,244);
[0172] waitForMessage();
[0173] print(3,"It would have taken us two days instead\x01\x01of two months,");
[01A3] delay(180);
[01A7] walkActorTo(3,108,48);
[01AB] waitForActor(3);
[01AD] waitForMessage();
[01AE] animateActor(3,244);
[01B1] delay(30);
[01B5] print(3,"and I wouldn't have gotten sick every\x01\x01time I looked out the window!");
[01F0] delay(240);
[01F4] walkActorTo(3,102,36);
[01F8] waitForActor(3);
[01FA] animateActor(3,246);
[01FD] waitForMessage();
[01FE] print(4,"Yeah, and in zero gravity, that sure was\x01\x01a mess!");
[0229] walkActorTo(4,106,36);
[022D] waitForActor(4);
[022F] animateActor(4,244);
[0232] waitForMessage();
[0233] unless (VAR_OVERRIDE) goto 0244;
[0237] print(255,"");
[023A] putActor(3,102,36);
[023E] putActor(4,106,36);
[0242] startScript(5);
[0244] animateActor(3,246);
[0247] animateActor(4,246);
[024A] print(255,"");
[024D] pickupObject(61);
[0250] setOwnerOf(61,14);
[0254] pickupObject(62);
[0257] setOwnerOf(62,14);
[025B] pickupObject(63);
[025E] setOwnerOf(63,14);
[0262] endCutscene();
[0263] stopObjectCode();
```

## SCv2_0084 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0026/SCv2_0084.txt](../../zak/converted/scripts_flat/LFv2_0026/SCv2_0084.txt); entry `0000`.

```text
[0000] delay(900);
[0004] unless (Var[169] == 32) goto 001E;
[000A] unless (Var[206]) goto 001E;
[000E] Var[206]--;
[0010] unless (Var[206] == Var[254]) goto 001E;
[0015] Var[118] = 3;
[0019] Var[206]--;
[001B] startScript(146);
[001D] breakHere();
[001E] unless (Var[170] == 32) goto 0037;
[0024] unless (Var[207]) goto 0037;
[0028] Var[207]--;
[002A] unless (Var[207] == Var[254]) goto 0037;
[002F] Var[207]--;
[0031] Var[118] = 4;
[0035] startScript(146);
```
