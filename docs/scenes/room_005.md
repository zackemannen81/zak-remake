# Room 005 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] unless (!getState04(169)) goto 000C;
[0009] loadScript(62)
[000C] setBoxFlags(14,128);
[000F] unless (getState08(162)) goto 0017;
[0014] setBoxFlags(14,0);
[0017] doSentence(250,170,0,1);
[001E] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/EXv2.txt); entry `0000`.

```text
[0000] VAR_RESULT = getActorRoom(1);
[0003] unless (VAR_RESULT != 7) goto 0018;
[0009] VAR_RESULT = getActorRoom(2);
[000C] unless (VAR_RESULT != 7) goto 0018;
[0012] clearState08(161);
[0015] clearState08(180);
[0018] stopSound(19);
[001A] stopObjectCode();
```

## OCv2_0031 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0031.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0031.txt); entry `002B`.

```text
[002B] unless (VAR_ACTIVE_OBJECT2 == 38) goto 003F;
[0031] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 003F;
[0035] doSentence(253,167,0,1);
[003F] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0044] stopObjectCode();
```

## OCv2_0031 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0031.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0031.txt); entry `0023`.

```text
[0023] doSentence(253,165,0,1);
[002A] stopObjectCode();
```

## OCv2_0160 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0160.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0160.txt); entry `001E`.

```text
[001E] VAR_RESULT = isScriptRunning(62);
[0021] unless (!VAR_RESULT) goto 002E;
[0025] loadRoomWithEgo(141,3,93,46);
[002E] putActorInRoom(1,3);
[0031] putActor(1,85,56);
[0035] animateActor(1,248);
[0038] stopObjectCode();
```

## OCv2_0161 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0161.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0161.txt); entry `001B`.

```text
[001B] startScript(10);
[001D] setState08(180);
[0020] stopObjectCode();
```

## OCv2_0161 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0161.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0161.txt); entry `0021`.

```text
[0021] startScript(11);
[0023] clearState08(180);
[0026] stopObjectCode();
```

## OCv2_0161 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0161.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0161.txt); entry `0027`.

```text
[0027] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0048;
[002B] VAR_RESULT = isScriptRunning(62);
[002E] unless (!VAR_RESULT) goto 003E;
[0032] setState04(180);
[0035] loadRoomWithEgo(180,7,255,255);
[003E] putActorInRoom(1,7);
[0041] putActor(1,31,56);
[0045] animateActor(1,251);
[0048] stopObjectCode();
```

## OCv2_0162 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0162.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0162.txt); entry `0019`.

```text
[0019] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 002D;
[001D] printEgo("It's locked.");
[002D] startScript(10);
[002F] setState08(172);
[0032] setBoxFlags(14,0);
[0035] stopObjectCode();
```

## OCv2_0162 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0162.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0162.txt); entry `0036`.

```text
[0036] startScript(11);
[0038] clearState08(172);
[003B] setBoxFlags(14,128);
[003E] stopObjectCode();
```

## OCv2_0163 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0163.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0163.txt); entry `0017`.

```text
[0017] printEgo("It's locked.");
[0024] stopObjectCode();
```

## OCv2_0164 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0164.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0164.txt); entry `0017`.

```text
[0017] printEgo("We Buy Almost Anything^\x01\x01^From Almost Anyone");
[003F] stopObjectCode();
```

## OCv2_0165 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0165.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0165.txt); entry `0019`.

```text
[0019] printEgo("Society for Ancient Wisdom\x01\x01Deposit artifacts in slot.");
[004A] stopObjectCode();
```

## OCv2_0165 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0165.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0165.txt); entry `004B`.

```text
[004B] unless (VAR_EGO == 1) goto 006D;
[0051] printEgo("It's connected with wires.");
[006D] printEgo("That would be stealing.");
[0083] stopObjectCode();
```

## OCv2_0166 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0166.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0166.txt); entry `0016`.

```text
[0016] VAR_RESULT = isScriptRunning(62);
[0019] unless (!VAR_RESULT) goto 0026;
[001D] loadRoomWithEgo(141,3,93,52);
[0026] putActorInRoom(1,3);
[0029] putActor(1,93,60);
[002D] animateActor(1,249);
[0030] stopObjectCode();
```

## OCv2_0167 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0167.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0167.txt); entry `0019`.

```text
[0019] printEgo("CLOSED PERMANENTLY\x03\x03Owner `locked` out.");
[003E] stopObjectCode();
```

## OCv2_0167 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0167.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0167.txt); entry `003F`.

```text
[003F] unless (VAR_EGO == 1) goto 0057;
[0045] startSound(2);
[0047] delay(30);
[004B] startSound(2);
[004D] delay(18);
[0051] pickupObject(31);
[0057] printEgo("I'm not into vandalism!");
[006D] stopObjectCode();
```

## OCv2_0168 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0168.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0168.txt); entry `0019`.

```text
[0019] loadRoomWithEgo(172,6,255,255);
[001F] stopObjectCode();
```

## OCv2_0169 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0169.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0169.txt); entry `0022`.

```text
[0022] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 002B;
[0026] startScript(10);
[002B] printEgo("It's locked.");
[0038] stopObjectCode();
```

## OCv2_0169 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0169.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0169.txt); entry `0039`.

```text
[0039] startScript(11);
[003B] stopObjectCode();
```

## OCv2_0169 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0169.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0169.txt); entry `008B`.

```text
[008B] unless (VAR_EGO == 1) goto 00F1;
[0091] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 00A5;
[0095] printEgo("It's closed.");
[00A5] unless (classOfIs(VAR_ACTIVE_OBJECT2,8)) goto 00BA;
[00AA] printEgo("It's too big.");
[00BA] unless (VAR_ACTIVE_OBJECT2 == 18) goto 00C3;
[00C3] unless (VAR_ACTIVE_OBJECT2 == 82) goto 00CC;
[00CC] unless (VAR_ACTIVE_OBJECT2 == 42) goto 00D8;
[00D8] setOwnerOf(VAR_ACTIVE_OBJECT2,2);
[00DB] unless (classOfIs(VAR_ACTIVE_OBJECT2,32)) goto 00EE;
[00E0] setState04(VAR_ACTIVE_OBJECT1);
[00E2] Var[199] = Var[235];
[00E5] doSentence(2,169,0,0);
[00EC] startScript(62);
[00F1] printEgo("No, I'll hold on to this.");
[0107] stopObjectCode();
```

## OCv2_0169 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0169.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0169.txt); entry `003C`.

```text
[003C] printEgo("Artifact Drop Slot:\x01\x01\x02\x02");
[0051] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 006F;
[0055] printEgo("Deposit artifacts here.");
[006F] printEgo("Locked until further notice.");
[008A] stopObjectCode();
```

## OCv2_0170 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0170.txt](../../zak/converted/scripts_flat/LFv2_0005/ROv2/OCv2_0170.txt); entry `0013`.

```text
[0013] delay(30);
[0017] drawObject(170,255,255);
[001C] startSound(19);
[001E] delay(60);
[0022] drawObject(171,255,255);
[0027] stopSound(19);
```

## SCv2_0062 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0005/SCv2_0062.txt](../../zak/converted/scripts_flat/LFv2_0005/SCv2_0062.txt); entry `0000`.

```text
[0000] stopScript(147);
[0002] cursorCommand(255, 1);
[0005] Var[119] = VAR_ACTIVE_OBJECT2;
[0008] Var[45] = Var[234];
[000B] breakHere();
[000C] VAR_RESULT = getActorRoom(1);
[000F] unless (VAR_RESULT != 5) goto 0018;
[0018] Var[45]++;
[001A] unless (Var[45] > 80) goto 000B;
[0020] animateActor(1,255);
[0023] cursorCommand(134, 0);
[0026] cutscene();
[0027] clearState04(162);
[002A] beginOverride();
[002E] Var[120] = getActorRoom(1);
[0031] delay(30);
[0035] panCameraTo(45);
[0037] breakHere();
[0038] unless (VAR_CAMERA_POS_X == 45) goto 0037;
[003E] loadCostume(2)
[0041] delay(60);
[0045] setBoxFlags(14,0);
[0048] putActorInRoom(2,5);
[004B] putActor(2,46,36);
[004F] animateActor(2,250);
[0052] VAR_EGO = 2;
[0056] actorFollowCamera(2);
[0058] doSentence(1,162,0,1);
[005F] delay(60);
[0063] Var[117] = 168;
[0067] unless (Var[120] != 5) goto 00B4;
[006D] walkActorTo(2,46,40);
[0071] waitForActor(2);
[0073] animateActor(2,245);
[0076] delay(60);
[007A] animateActor(2,244);
[007D] delay(60);
[0081] unless (Var[120] == 7) goto 0092;
[0087] Var[118] = 161;
[008B] Var[117] = 180;
[0092] unless (Var[120] == 3) goto 00A3;
[0098] Var[118] = 160;
[009C] Var[117] = 141;
[00A0] /* goto 00A3; */
[00A3] walkActorToObject(2,Var[118]);
[00A6] waitForActor(2);
[00A8] loadRoomWithEgo(Var[117],Var[120],50,56);
[00AD] delay(60);
[00B4] VAR_RESULT = getActorX(1);
[00B7] unless (VAR_RESULT < 24) goto 00C3;
[00BD] putActor(1,5,56);
[00C1] startScript(5);
[00C3] VAR_RESULT = getDist(2,1);
[00C9] unless (VAR_RESULT > 4) goto 00EE;
[00CF] walkActorToActor(2,1,4);
[00D3] printEgo("Hey you!");
[00DC] waitForMessage();
[00DD] faceActor(1,2);
[00E0] stopObjectCode();
[00EE] unless (Var[120] == 5) goto 0103;
[00F4] VAR_RESULT = getActorWalkBox(1);
[00F7] unless (VAR_RESULT != 9) goto 0103;
[00FD] walkActorTo(1,46,40);
[0101] waitForActor(1);
[0103] animateActor(1,247);
[0106] printEgo("Where did you get that artifact?");
[0123] waitForMessage();
[0124] print(1,"Never mind that! You're the woman who\x01\x01was in my dream!");
[0154] waitForMessage();
[0155] printEgo("What a line!\x03\x03Wait a second^ I had a dream too. I was\x01\x01in a strange room with a strange man.");
[019F] waitForMessage();
[01A0] unless (Var[164] != 44) goto 01D3;
[01A6] animateActor(1,246);
[01A9] VAR_EGO = 1;
[01AD] printEgo("Hold on!");
[01B6] waitForMessage();
[01B7] doSentence(7,40,0,1);
[01BE] doSentence(7,50,0,1);
[01C5] delay(60);
[01C9] faceActor(1,2);
[01CC] stopObjectCode();
[01D3] printEgo("IT WAS YOU!\x03\x03Come with me.");
[01EA] waitForMessage();
[01EB] walkActorToObject(2,Var[117]);
[01EE] VAR_RESULT = getDist(1,Var[117]);
[01F3] unless (VAR_RESULT > 7) goto 0209;
[01F9] breakHere();
[01FA] VAR_RESULT = getDist(2,1);
[0200] unless (VAR_RESULT > 6) goto 01F9;
[0209] delay(30);
[020D] walkActorToObject(1,Var[117]);
[0210] waitForActor(2);
[0212] putActorInRoom(2,6);
[0215] putActor(2,10,56);
[0219] putActorInRoom(1,6);
[021C] putActor(1,3,56);
[0220] animateActor(2,248);
[0223] animateActor(1,249);
[0226] loadRoom(6);
[0228] delay(60);
[022C] printEgo("My two friends and I had special dreams\x01\x01sent to us by the Ancient Ones.\x03\x03You're the one they told us about.");
[0285] waitForMessage();
[0286] animateActor(1,246);
[0289] breakHere();
[028A] print(1,"Give me a break!");
[029A] waitForMessage();
[029B] animateActor(1,245);
[029E] printEgo("I see you're skeptical. You'll soon\x01\x01change your mind.");
[02CE] waitForMessage();
[02CF] doSentence(10,178,0,0);
[02D6] printEgo("In the dream we shared, we saw a strange\x01\x01device which we must build.");
[0310] waitForSentence();
[0311] walkActorTo(2,26,51);
[0315] waitForActor(2);
[0317] animateActor(2,244);
[031A] breakHere();
[031B] waitForMessage();
[031C] printEgo("Here's a drawing of it.");
[0331] walkActorToObject(1,178);
[0335] waitForActor(1);
[0337] print(1,"Hey! That's it!");
[0347] waitForMessage();
[0348] printEgo("The \x06\x77\x06 you brought me is\x01\x01\x02\x02");
[0360] unless (Var[119] == 79) goto 0386;
[0366] printEgo("very important to our mission.");
[0382] waitForMessage();
[0386] printEgo("a part of this device.");
[039A] waitForMessage();
[039B] printEgo("This is another part of it.");
[03B3] doSentence(3,33,1,0);
[03BA] waitForSentence();
[03BB] printEgo("Here.\x03\x03When whole, this yellow crystal shard\x01\x01will let you join my friends on Mars.\x03\x03Of course, you'll need a spacesuit.");
[0421] waitForMessage();
[0422] animateActor(1,246);
[0425] print(1,"A spacesuit?");
[0433] delay(60);
[0437] walkActorToObject(2,173);
[043B] delay(60);
[043F] doSentence(3,Var[119],1,0);
[0445] printEgo("Oh yes, here's your artifact back.");
[0464] waitForMessage();
[0465] printEgo("From now on, we will all share knowledge\x01\x01through our dreams.\x03\x03Be careful! If one of us dies, it will\x01\x01be impossible to complete our mission!");
[04DB] waitForMessage();
[04DC] VAR_EGO = 1;
[04E0] unless (VAR_OVERRIDE) goto 052A;
[04E4] print(255,"");
[04E7] putActorInRoom(2,6);
[04EA] putActor(2,27,52);
[04EE] putActorInRoom(1,6);
[04F1] putActor(1,23,52);
[04F5] doSentence(7,40,0,1);
[04FC] doSentence(7,50,0,1);
[0503] startScript(5);
[0505] animateActor(1,249);
[0508] animateActor(2,248);
[050B] loadRoom(6);
[050D] setState08(162);
[0510] setState08(172);
[0513] setState08(178);
[0516] VAR_RESULT = getObjectOwner(33);
[051A] unless (VAR_RESULT == 15) goto 0523;
[0520] pickupObject(33);
[0523] setOwnerOf(33,1);
[0527] setOwnerOf(Var[119],1);
[052A] Var[66] = Var[234];
[052D] VerbOps(Delete(Var[66]););
[0530] Var[66]++;
[0532] unless (Var[66] > 13) goto 052D;
[0538] cursorCommand(0, 0);
[053B] endCutscene();
[053C] Var[117] = Var[235];
[053F] delay(15);
[0543] VerbOps(Delete(14));
[0546] cursorCommand(0, 0);
[0549] delay(15);
[054D] VerbOps(New-45(32,21,14,0,"Switch@@"));
[055C] cursorCommand(0, 0);
[055F] Var[117]++;
[0561] unless (Var[117] > 6) goto 053F;
[0567] Var[199] = Var[235];
[056A] startScript(19);
[056C] cursorCommand(247, 1);
[056F] stopObjectCode();
```

## SCv2_0147 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0005/SCv2_0147.txt](../../zak/converted/scripts_flat/LFv2_0005/SCv2_0147.txt); entry `0000`.

```text
[0000] delay(108000);
[0004] delay(300);
[0008] VAR_RESULT = getActorRoom(1);
[000B] unless (VAR_RESULT == 5) goto 0014;
[0014] chainScript(148);
```

## SCv2_0148 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0005/SCv2_0148.txt](../../zak/converted/scripts_flat/LFv2_0005/SCv2_0148.txt); entry `0000`.

```text
[0000] cutscene();
[0001] loadRoom(5);
[0003] setCameraAt(45);
[0005] loadCostume(2)
[0008] delay(120);
[000C] setBoxFlags(14,0);
[000F] putActorInRoom(2,5);
[0012] putActor(2,46,36);
[0016] animateActor(2,250);
[0019] clearState04(162);
[001C] doSentence(1,162,0,1);
[0023] delay(60);
[0027] walkActorTo(2,45,40);
[002B] waitForActor(2);
[002D] Var[121] = Var[234];
[0030] animateActor(2,244);
[0033] delay(60);
[0037] animateActor(2,245);
[003A] delay(60);
[003E] animateActor(2,246);
[0041] delay(30);
[0045] unless (!Var[121]) goto 006B;
[0049] print(2,"What could be keeping him?");
[0062] waitForMessage();
[0063] Var[121]++;
[006B] print(2,"He should have been here by now!");
[0088] waitForMessage();
[0089] delay(60);
[008D] walkActorTo(2,46,36);
[0091] waitForActor(2);
[0093] animateActor(2,246);
[0096] delay(30);
[009A] startSound(11);
[009C] clearState08(162);
[009F] setState04(162);
[00A2] putActorInRoom(2,6);
[00A5] putActor(2,20,16);
[00A9] delay(120);
[00AD] endCutscene();
[00AE] stopObjectCode();
```
