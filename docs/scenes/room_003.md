# Room 003 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] Var[53] = Var[234];
[0007] Var[46] = Var[234];
[000A] loadSound(26)
[000D] setBoxFlags(6,0);
[0010] unless (getState08(144)) goto 0018;
[0015] setBoxFlags(6,64);
[0018] unless (!getState08(143)) goto 0025;
[001D] unless (!getState08(142)) goto 0025;
[0022] clearState02(142);
[0025] unless (Var[159]) goto 0038;
[0029] clearState02(28);
[002C] setState08(28);
[002F] setState02(139);
[0032] clearState08(139);
[0038] setState02(28);
[003B] clearState08(28);
[003E] doSentence(253,144,0,1);
[0045] doSentence(253,139,0,1);
[004C] unless (VAR_ACTIVE_OBJECT1 == 191) goto 0059;
[0052] doSentence(253,146,0,1);
[0059] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/EXv2.txt); entry `0000`.

```text
[0000] VAR_RESULT = getActorRoom(1);
[0003] unless (VAR_RESULT != 4) goto 001B;
[0009] VAR_RESULT = getActorRoom(2);
[000C] unless (VAR_RESULT != 4) goto 001B;
[0012] clearState08(135);
[0015] clearState08(151);
[0018] clearState08(156);
[001B] unless (Var[159] > 10) goto 0023;
[0021] startScript(12);
[0023] clearState08(143);
[0026] setState08(144);
[0029] setBoxFlags(6,64);
[002C] Var[48] = 1;
[0030] doSentence(253,149,0,1);
[0037] unless (Var[47]) goto 0048;
[003B] VAR_RESULT = getBitVar(1464,Var[48]);
[0040] unless (!VAR_RESULT) goto 0048;
[0044] putActor(Var[48],90,60);
[0048] Var[48] = 2;
[004C] doSentence(253,149,0,1);
[0053] unless (Var[47]) goto 0064;
[0057] VAR_RESULT = getBitVar(1464,Var[48]);
[005C] unless (!VAR_RESULT) goto 0064;
[0060] putActor(Var[48],86,60);
[0064] VAR_RESULT = isScriptRunning(52);
[0067] unless (VAR_RESULT) goto 006F;
[006B] stopScript(52);
[006D] startScript(54);
[006F] stopObjectCode();
```

## OCv2_0027 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0027.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0027.txt); entry `0025`.

```text
[0025] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002A] stopObjectCode();
```

## OCv2_0027 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0027.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0027.txt); entry `0022`.

```text
[0022] startScript(61);
[0024] stopObjectCode();
```

## OCv2_0028 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0028.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0028.txt); entry `0020`.

```text
[0020] unless (Var[159] <= 10) goto 003F;
[0026] printEgo("A letter! I need the key.");
[003F] printEgo("I'll leave it for the mailman.");
[005A] stopObjectCode();
```

## OCv2_0028 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0028.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0028.txt); entry `0090`.

```text
[0090] printEgo("It's already closed.");
[00A4] stopObjectCode();
```

## OCv2_0028 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0028.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0028.txt); entry `005B`.

```text
[003F] printEgo("I'll leave it for the mailman.");
[005A] stopObjectCode();
[005B] unless (VAR_ACTIVE_OBJECT2 == 24) goto 007C;
[0061] unless (Var[159] > 10) goto 006D;
[006D] startSound(26);
[006F] clearState08(VAR_ACTIVE_OBJECT1);
[0071] setState02(VAR_ACTIVE_OBJECT1);
[0073] setState08(139);
[0076] clearState02(139);
[007C] printEgo("That didn't open it.");
[008F] stopObjectCode();
```

## OCv2_0028 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0028.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0028.txt); entry `00A5`.

```text
[00A5] doSentence(12,138,0,1);
[00AC] stopObjectCode();
```

## OCv2_0029 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0029.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0029.txt); entry `0023`.

```text
[0023] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0028] stopObjectCode();
```

## OCv2_0029 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0029.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0029.txt); entry `0020`.

```text
[0020] pickupObject(VAR_ACTIVE_OBJECT1);
[0022] stopObjectCode();
```

## OCv2_0134 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0134.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0134.txt); entry `0019`.

```text
[0019] setState08(112);
[001C] loadRoomWithEgo(112,2,255,255);
[0022] stopObjectCode();
```

## OCv2_0135 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0135.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0135.txt); entry `001B`.

```text
[001B] startScript(10);
[001D] setState08(151);
[0020] stopObjectCode();
```

## OCv2_0135 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0135.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0135.txt); entry `0021`.

```text
[0021] startScript(11);
[0023] clearState08(151);
[0026] stopObjectCode();
```

## OCv2_0135 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0135.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0135.txt); entry `0027`.

```text
[0027] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0031;
[002B] loadRoomWithEgo(151,4,255,255);
[0031] stopObjectCode();
```

## OCv2_0138 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0138.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0138.txt); entry `0020`.

```text
[0020] printEgo("It's \x02\x02");
[0027] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0037;
[002B] printEgo("locked.");
[0037] printEgo("already opened.");
[0047] stopObjectCode();
```

## OCv2_0138 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0138.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0138.txt); entry `0048`.

```text
[0048] startScript(11);
[004A] stopObjectCode();
```

## OCv2_0138 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0138.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0138.txt); entry `004B`.

```text
[004B] unless (VAR_ACTIVE_OBJECT2 == 24) goto 005C;
[0051] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0059;
[0055] setState08(VAR_ACTIVE_OBJECT1);
[0057] startSound(26);
[005C] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 00AB;
[0060] unless (VAR_ACTIVE_OBJECT2 == 30) goto 0097;
[0066] unless (!Var[160]) goto 0080;
[006A] printEgo("It's not filled out.");
[0080] clearState08(VAR_ACTIVE_OBJECT1);
[0082] doSentence(2,139,0,1);
[0089] Var[159] = Var[160];
[008C] Var[159] += 10;
[0090] setOwnerOf(30,0);
[0097] printEgo("I can't mail that!");
[00AB] printEgo("It's locked.");
[00B8] stopObjectCode();
```

## OCv2_0138 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0138.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0138.txt); entry `00B9`.

```text
[00B9] printEgo("Zachary McKracken, 5858 13th Ave.");
[00D8] stopObjectCode();
```

## OCv2_0139 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0139.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0139.txt); entry `005A`.

```text
[005A] clearState08(VAR_ACTIVE_OBJECT1);
[005C] setState02(VAR_ACTIVE_OBJECT1);
[005E] setState08(28);
[0061] clearState02(28);
[0064] startSound(11);
[0066] stopObjectCode();
```

## OCv2_0139 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0139.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0139.txt); entry `001F`.

```text
[001F] pickupObject(27);
[0022] printEgo("It's THE KING FAN CLUB card! Wow, that\x01\x01was fast!");
[004C] Var[159] = Var[234];
[004F] clearState08(VAR_ACTIVE_OBJECT1);
[0051] setState02(VAR_ACTIVE_OBJECT1);
[0053] setState08(138);
[0056] clearState02(138);
[0059] stopObjectCode();
```

## OCv2_0139 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0139.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0139.txt); entry `001F`.

```text
[001F] pickupObject(27);
[0022] printEgo("It's THE KING FAN CLUB card! Wow, that\x01\x01was fast!");
[004C] Var[159] = Var[234];
[004F] clearState08(VAR_ACTIVE_OBJECT1);
[0051] setState02(VAR_ACTIVE_OBJECT1);
[0053] setState08(138);
[0056] clearState02(138);
[0059] stopObjectCode();
```

## OCv2_0139 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0139.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0139.txt); entry `0067`.

```text
[0067] breakHere();
[0068] unless (VAR_ACTIVE_VERB == 3) goto 00F6;
[006E] unless (VAR_ACTIVE_OBJECT2 <= 2) goto 00F6;
[0074] unless (VAR_CAMERA_POS_X < 69) goto 007D;
[007D] Var[50] = VAR_ACTIVE_OBJECT1;
[0080] VAR_RESULT = getActorY(2);
[0083] unless (VAR_RESULT < 57) goto 008C;
[008C] VAR_RESULT = getActorY(1);
[008F] unless (VAR_RESULT < 57) goto 00F3;
[0095] doSentence(STOP);
[0097] animateActor(2,255);
[009A] animateActor(1,255);
[009D] Var[66] = getActorX(1);
[00A0] VAR_RESULT = getActorX(2);
[00A3] unless (VAR_RESULT > Var[66]) goto 00B0;
[00A8] setVarRange(Var[51],2,[1,2]);
[00B0] setVarRange(Var[51],2,[2,1]);
[00B5] walkActorTo(Var[51],88,57);
[00B9] walkActorTo(Var[52],92,57);
[00BD] waitForActor(1);
[00BF] waitForActor(2);
[00C1] VAR_RESULT = getObjectOwner(Var[50]);
[00C4] unless (VAR_RESULT != VAR_ACTIVE_OBJECT2) goto 00F0;
[00C9] unless (VAR_ACTIVE_OBJECT1 != Var[50]) goto 00D1;
[00D1] unless (VAR_ACTIVE_VERB != 3) goto 00DA;
[00DA] faceActor(1,2);
[00DD] stopObjectCode();
[00F0] doSentence(RESET);
[00F2] drawSentence();
[00F3] VAR_ACTIVE_VERB = Var[234];
```

## OCv2_0140 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0140.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0140.txt); entry `0027`.

```text
[0027] printEgo("That's a bit too far!");
[003A] walkActorTo(VAR_EGO,92,48);
[003E] stopObjectCode();
```

## OCv2_0140 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0140.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0140.txt); entry `003F`.

```text
[003F] print(255,"Hey! I'm a busy guy! Just put your\x01\x01CashCard in the card reader.");
[0076] doSentence(253,148,0,1);
[007D] stopObjectCode();
```

## OCv2_0141 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0141.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0141.txt); entry `0027`.

```text
[0027] cursorCommand(15, 2);
[002A] doSentence(253,148,0,1);
[0031] delay(60);
[0035] Var[66] = 90;
[0039] unless (Var[48] == 2) goto 0043;
[003F] Var[66] = 86;
[0043] walkActorTo(Var[48],Var[66],60);
[0047] waitForActor(Var[48]);
[0049] cursorCommand(247, 1);
[004C] stopObjectCode();
```

## OCv2_0141 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0141.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0141.txt); entry `0020`.

```text
[0020] loadRoomWithEgo(160,5,5,58);
[0026] stopObjectCode();
```

## OCv2_0142 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0142.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0142.txt); entry `001A`.

```text
[001A] unless (getState08(144)) goto 0059;
[001F] printEgo("The door won't open from the outside,\x01\x01and the bus driver's asleep.");
[0059] stopObjectCode();
```

## OCv2_0142 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0142.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0142.txt); entry `005A`.

```text
[005A] unless (classOfIs(VAR_ACTIVE_OBJECT2,2)) goto 0062;
[0062] unless (classOfIs(VAR_ACTIVE_OBJECT2,16)) goto 0076;
[0067] unless (getState08(144)) goto 0073;
[006C] doSentence(253,147,0,1);
[0076] startScript(3);
[0078] stopObjectCode();
```

## OCv2_0142 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0142.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0142.txt); entry `0079`.

```text
[0079] breakHere();
[007A] VAR_RESULT = getDist(VAR_EGO,142);
[007F] unless (VAR_RESULT > 20) goto 0079;
[0085] Var[48] = 1;
[0089] unless (VAR_EGO == 1) goto 0093;
[008F] Var[48] = 2;
[0093] doSentence(253,149,0,1);
[009A] unless (Var[47]) goto 00A1;
[00A1] doSentence(254,143,0,1);
[00A8] unless (getState02(142)) goto 00B4;
[00AD] doSentence(253,145,0,1);
[00B4] stopObjectCode();
```

## OCv2_0143 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0143.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0143.txt); entry `0013`.

```text
[0013] delay(900);
[0017] print(255,"Well? This ain't a free ride y'know.");
[0038] doSentence(253,148,0,1);
[003F] waitForMessage();
[0040] delay(420);
[0044] doSentence(253,140,0,1);
[004B] waitForMessage();
[004C] delay(420);
[0050] Var[48] = VAR_EGO;
[0053] Var[49] = Var[234];
[0056] doSentence(253,149,0,1);
[005D] unless (Var[47]) goto 0079;
[0061] print(255,"OK, off ya go!");
[006F] Var[49]++;
[0071] doSentence(253,141,0,1);
[0078] breakHere();
[0079] Var[48] = 1;
[007D] unless (VAR_EGO == 1) goto 0087;
[0083] Var[48] = 2;
[0087] doSentence(253,149,0,1);
[008E] unless (Var[47]) goto 00B7;
[0092] unless (Var[49]) goto 00A3;
[0096] print(255,"You too!");
[00A3] print(255,"Off my bus!");
[00AF] doSentence(253,141,0,1);
[00B6] breakHere();
[00B7] doSentence(254,142,0,1);
[00BE] unless (getState02(142)) goto 00CA;
[00C3] doSentence(253,145,0,1);
[00CA] stopObjectCode();
```

## OCv2_0144 / verb 19
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0144.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0144.txt); entry `001F`.

```text
[001F] unless (classOfIs(VAR_ACTIVE_OBJECT2,128)) goto 003B;
[0024] Var[66] = 150;
[0028] print(255,"Use it in the \x06\x42\x06.");
[003B] print(255,"I don't want it!");
[004B] doSentence(253,148,0,1);
[0052] stopObjectCode();
```

## OCv2_0144 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0144.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0144.txt); entry `0053`.

```text
[0053] breakHere();
[0054] VAR_RESULT = getActorRoom(VAR_EGO);
[0057] unless (VAR_RESULT == VAR_ROOM) goto 0053;
[005C] unless (getState08(142)) goto 0064;
[0064] unless (Var[46] != VAR_EGO) goto 0070;
[0069] Var[46] = VAR_EGO;
[006C] Var[44] = 3;
[0070] VAR_RESULT = getActorX(VAR_EGO);
[0073] unless (VAR_RESULT > 82) goto 0086;
[0079] unless (Var[44] != Var[234]) goto 0083;
[007E] panCameraTo(100);
[0080] Var[44] = Var[234];
[0086] unless (Var[44] != Var[235]) goto 0099;
[008B] VAR_RESULT = getActorRoom(VAR_EGO);
[008E] unless (VAR_RESULT == 3) goto 0096;
[0094] actorFollowCamera(VAR_EGO);
[0096] Var[44] = Var[235];
```

## OCv2_0145 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0145.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0145.txt); entry `0013`.

```text
[0013] clearState02(142);
[0016] setBoxFlags(6,64);
[0019] startSound(47);
[001B] delay(40);
[001F] clearState08(143);
[0022] cursorCommand(247, 1);
[0025] delay(120);
[0029] setState08(144);
[002C] stopObjectCode();
```

## OCv2_0146 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0146.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0146.txt); entry `0013`.

```text
[0013] stopScript(63);
[0015] cursorCommand(15, 2);
[0018] clearState08(142);
[001B] clearState08(166);
[001E] clearState02(166);
[0021] clearState08(144);
[0024] clearState02(144);
[0027] clearState02(150);
[002A] delay(60);
[002E] startSound(47);
[0030] delay(40);
[0034] setState08(143);
[0037] setBoxFlags(6,0);
[003A] walkActorTo(VAR_EGO,90,60);
[003E] waitForActor(VAR_EGO);
[0040] doSentence(253,145,0,1);
[0047] stopObjectCode();
```

## OCv2_0147 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0147.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0147.txt); entry `001F`.

```text
[001F] unless (VAR_EGO == 2) goto 0050;
[0025] printEgo("I don't want to bother them, they're\x01\x01closed.");
[0050] startSound(23);
[0052] unless (Var[152] < 3) goto 0069;
[0058] VAR_RESULT = isScriptRunning(39);
[005B] unless (!VAR_RESULT) goto 0069;
[005F] VAR_RESULT = getActorRoom(7);
[0062] unless (VAR_RESULT != VAR_ROOM) goto 0069;
[0067] startScript(39);
[0069] stopObjectCode();
```

## OCv2_0147 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0147.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0147.txt); entry `001F`.

```text
[001F] unless (VAR_EGO == 2) goto 0050;
[0025] printEgo("I don't want to bother them, they're\x01\x01closed.");
[0050] startSound(23);
[0052] unless (Var[152] < 3) goto 0069;
[0058] VAR_RESULT = isScriptRunning(39);
[005B] unless (!VAR_RESULT) goto 0069;
[005F] VAR_RESULT = getActorRoom(7);
[0062] unless (VAR_RESULT != VAR_ROOM) goto 0069;
[0067] startScript(39);
[0069] stopObjectCode();
```

## OCv2_0147 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0147.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0147.txt); entry `006A`.

```text
[006A] unless (getState08(144)) goto 012C;
[006F] unless (VAR_ACTIVE_OBJECT1 != 16) goto 007B;
[0075] startSound(46);
[0077] delay(120);
[007B] clearState08(144);
[007E] delay(60);
[0082] VAR_RESULT = getBitVar(1467,VAR_EGO);
[0087] unless (!VAR_RESULT) goto 00D8;
[008B] setBitVar(1467,VAR_EGO,Var[235]);
[0090] doSentence(253,148,0,1);
[0097] print(255,"Hey! Wadda ya doin' wakin' me up?");
[00B5] waitForMessage();
[00B6] print(255,"I guess ya wanna go to the airport.");
[00D8] breakHere();
[00D9] print(255,"Oh, it's you again.");
[00EC] doSentence(253,148,0,1);
[00F3] waitForMessage();
[00F4] print(255,"Well, climb aboard.");
[0108] doSentence(253,148,0,1);
[010F] startSound(47);
[0111] delay(40);
[0115] setState08(143);
[0118] setBoxFlags(6,0);
[011B] setState02(142);
[011E] doSentence(253,143,0,1);
[0125] doSentence(253,142,0,1);
[012C] stopObjectCode();
```

## OCv2_0148 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0148.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0148.txt); entry `0013`.

```text
[0013] drawObject(145,255,255);
[0018] drawObject(146,255,255);
[001D] breakHere();
[001E] breakHere();
[001F] drawObject(145,255,255);
[0024] breakHere();
[0025] unless (VAR_TALK_ACTOR != 255) goto 002E;
[002E] unless (!VAR_HAVE_MSG) goto 0018;
[0032] clearState08(146);
[0035] clearState08(145);
[0038] stopObjectCode();
```

## OCv2_0149 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0149.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0149.txt); entry `0019`.

```text
[0019] printEgo("CLOSED\x01\x01For service, push doorbell.");
[003A] stopObjectCode();
```

## OCv2_0149 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0149.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0149.txt); entry `003B`.

```text
[003B] Var[47] = Var[234];
[003E] VAR_RESULT = getActorWalkBox(Var[48]);
[0041] unless (VAR_RESULT == 6) goto 0049;
[0047] Var[47]++;
[0049] VAR_RESULT = getActorWalkBox(Var[48]);
[004C] unless (VAR_RESULT == 7) goto 0054;
[0052] Var[47]++;
[0054] stopObjectCode();
```

## OCv2_0150 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0150.txt](../../zak/converted/scripts_flat/LFv2_0003/ROv2/OCv2_0150.txt); entry `0022`.

```text
[0022] unless (classOfIs(VAR_ACTIVE_OBJECT2,128)) goto 00EC;
[0027] startSound(84);
[0029] doSentence(254,143,0,1);
[0030] doSentence(254,142,0,1);
[0037] print(255,"");
[003A] Var[14] = VAR_EGO;
[003D] Var[14] += 61;
[0041] unless (Var[14] >= 8) goto 00A5;
[0047] Var[14] = VAR_EGO;
[004A] Var[14] += 61;
[004E] Var[Var[14]] -= 8;
[0052] setBitVar(1440,VAR_EGO,Var[235]);
[0057] setBitVar(1464,VAR_EGO,Var[235]);
[005C] VAR_RESULT = isScriptRunning(52);
[005F] unless (VAR_RESULT) goto 00A0;
[0063] Var[48] = 1;
[0067] unless (VAR_EGO == Var[48]) goto 0070;
[006C] Var[48] = 2;
[0070] doSentence(253,149,0,1);
[0077] unless (!Var[47]) goto 0094;
[007B] cursorCommand(15, 2);
[007E] print(255,"C'mon!");
[0087] doSentence(253,148,0,1);
[008E] walkActorToObject(Var[48],150);
[0092] waitForActor(Var[48]);
[0094] setBitVar(1464,Var[48],Var[235]);
[0099] stopScript(52);
[009B] startScript(54);
[00A0] startScript(52);
[00A5] VAR_RESULT = getBitVar(848,VAR_EGO);
[00AA] unless (VAR_RESULT) goto 00C4;
[00AE] print(255,"Hey! No free rides!");
[00C4] print(255,"Sorry bud, but you're low on dough!");
[00E4] setBitVar(848,VAR_EGO,Var[235]);
[00EC] startScript(3);
[00EE] stopObjectCode();
```

## SCv2_0012 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0003/SCv2_0012.txt](../../zak/converted/scripts_flat/LFv2_0003/SCv2_0012.txt); entry `0000`.

```text
[0000] delay(60);
[0004] unless (VAR_ROOM != 3) goto 0000;
[000A] Var[159] = Var[234];
[000D] delay(18000);
[0011] delay(60);
[0015] VAR_RESULT = getDist(VAR_EGO,138);
[001A] unless (VAR_RESULT < 25) goto 0011;
[0020] delay(60);
[0024] unless (VAR_ROOM != 3) goto 0020;
[002A] Var[159] = Var[160];
[002D] stopObjectCode();
```

## SCv2_0039 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0003/SCv2_0039.txt](../../zak/converted/scripts_flat/LFv2_0003/SCv2_0039.txt); entry `0000`.

```text
[0000] cutscene();
[0001] Var[152]++;
[0003] beginOverride();
[0007] loadSound(24)
[000A] lockSound(24)
[000D] loadSound(69)
[0010] loadCostume(17)
[0013] loadCostume(18)
[0016] lockCostume(18)
[0019] ActorOps(10,[Name("baker")]);
[0023] ActorOps(10,[TalkColor(7)]);
[0027] ActorOps(10,[Costume(17)]);
[002B] ActorOps(12,[Costume(0)]);
[002F] putActorInRoom(10,3);
[0032] putActor(10,18,22);
[0036] Var[45] = 30;
[003A] delay(120);
[003E] walkActorTo(10,23,22);
[0042] waitForActor(10);
[0044] animateActor(10,246);
[0047] waitForActor(10);
[0049] delay(60);
[004D] unless (VAR_OVERRIDE) goto 0058;
[0051] putActor(10,23,22);
[0055] animateActor(10,250);
[0058] unless (!getState08(137)) goto 0066;
[005D] setState08(137);
[0060] startSound(69);
[0062] delay(120);
[0066] beginOverride();
[006A] unless (Var[152] == 1) goto 00A1;
[0070] print(10,"We're closed, and we're out of fresh\x01\x01bread anyway.");
[00A1] unless (Var[152] == 2) goto 00DB;
[00A7] print(10,"Listen, you DON'T want the bread we have\x01\x01left! Go away!");
[00DB] unless (Var[152] == 3) goto 0139;
[00E1] putActorInRoom(12,3);
[00E4] putActor(12,23,56);
[00E8] print(10,"OK, you asked for it!");
[00FC] unless (VAR_OVERRIDE) goto 0103;
[0103] waitForMessage();
[0104] ActorOps(12,[Costume(18)]);
[0108] startSound(60);
[010A] setActorElevation(12,Var[45]);
[010D] breakHere();
[010E] Var[45] -= 5;
[0112] unless (!Var[45]) goto 010A;
[0116] stopSound(60);
[0118] drawObject(148,255,255);
[011D] setActorElevation(12,65);
[0120] startSound(24);
[0122] breakHere();
[0123] putActorInRoom(12,0);
[0126] unless (!VAR_OVERRIDE) goto 012E;
[012A] delay(90);
[012E] clearState08(137);
[0131] startSound(69);
[0133] setActorElevation(12,0);
[0136] /* goto 0139; */
[0139] unlockSound(24)
[013C] unlockCostume(18)
[013F] unless (!VAR_OVERRIDE) goto 014A;
[0143] waitForMessage();
[0144] walkActorTo(10,18,22);
[0148] waitForActor(10);
[014A] print(255,"");
[014D] putActorInRoom(10,0);
[0150] unless (Var[152] == 3) goto 015E;
[0156] unless (getState08(137)) goto 015E;
[015E] endCutscene();
[015F] stopObjectCode();
```

## SCv2_0052 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0003/SCv2_0052.txt](../../zak/converted/scripts_flat/LFv2_0003/SCv2_0052.txt); entry `0000`.

```text
[0000] Var[198] = 1;
[0004] unless (VAR_EGO == 1) goto 000E;
[000A] Var[198] = 2;
[000E] Var[48] = Var[198];
[0011] VAR_RESULT = getActorRoom(Var[198]);
[0014] unless (VAR_RESULT == 3) goto 00F7;
[001A] VAR_RESULT = getActorX(Var[198]);
[001D] unless (VAR_RESULT > 78) goto 00A1;
[0023] VAR_RESULT = getBitVar(848,Var[198]);
[0028] unless (!VAR_RESULT) goto 00A1;
[002C] doSentence(253,149,0,1);
[0033] unless (Var[47]) goto 005D;
[0037] print(255,"Don't just stand there. Pay your fare.");
[005D] print(255,"Hey, does your friend wanna come?\x01\x01I'll be leaving in 15 seconds!");
[0096] doSentence(253,148,0,1);
[009D] delay(900);
[00A1] doSentence(253,149,0,1);
[00A8] unless (Var[47]) goto 00F7;
[00AC] print(255,"Are ya gonna pay or what?");
[00C3] doSentence(253,148,0,1);
[00CA] waitForMessage();
[00CB] delay(300);
[00CF] doSentence(253,149,0,1);
[00D6] unless (Var[47]) goto 00F7;
[00DA] print(255,"OK, outta here ya bum!");
[00EF] doSentence(253,141,0,1);
[00F6] breakHere();
[00F7] chainScript(54);
```

## SCv2_0054 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0003/SCv2_0054.txt](../../zak/converted/scripts_flat/LFv2_0003/SCv2_0054.txt); entry `0000`.

```text
[0000] breakHere();
[0001] unless (VAR_ROOM == 3) goto 004D;
[0007] cursorCommand(15, 2);
[000A] breakHere();
[000B] VAR_RESULT = isSoundRunning(84);
[000E] unless (!VAR_RESULT) goto 000A;
[0012] startSound(47);
[0014] breakHere();
[0015] print(255,"All right, let's go!");
[0029] doSentence(253,148,0,1);
[0030] delay(40);
[0034] clearState08(143);
[0037] startSound(65);
[0039] setBoxFlags(6,64);
[003C] delay(180);
[0040] print(255,"");
[0043] doSentence(254,148,0,1);
[004A] cursorCommand(247, 1);
[004D] startScript(63);
[004F] VAR_RESULT = getBitVar(1464,1);
[0054] unless (VAR_RESULT) goto 006C;
[0058] putActorInRoom(1,145);
[005B] putActor(1,33,60);
[005F] animateActor(1,248);
[0062] setBitVar(1464,1,Var[234]);
[0067] setBitVar(1440,1,Var[234]);
[006C] VAR_RESULT = getBitVar(1464,2);
[0071] unless (VAR_RESULT) goto 0089;
[0075] putActorInRoom(2,145);
[0078] putActor(2,36,60);
[007C] animateActor(2,248);
[007F] setBitVar(1464,2,Var[234]);
[0084] setBitVar(1440,2,Var[234]);
[0089] actorFollowCamera(VAR_EGO);
[008B] setState08(166);
[008E] setState02(166);
[0091] setState08(142);
[0094] setState02(142);
[0097] setState02(144);
[009A] setState02(150);
[009D] stopObjectCode();
```

## SCv2_0063 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0003/SCv2_0063.txt](../../zak/converted/scripts_flat/LFv2_0003/SCv2_0063.txt); entry `0000`.

```text
[0000] setState08(191);
[0003] delay(10800);
[0007] delay(30);
[000B] unless (VAR_ROOM != 3) goto 0007;
[0011] unless (VAR_ROOM == 5) goto 001A;
[001A] clearState08(142);
[001D] clearState02(142);
[0020] clearState08(166);
[0023] clearState02(166);
[0026] clearState02(144);
[0029] clearState02(150);
[002C] stopObjectCode();
```
