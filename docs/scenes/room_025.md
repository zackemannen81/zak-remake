# Room 025 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] unless (getState08(423)) goto 0012;
[0009] setBoxFlags(1,64);
[000C] setBoxFlags(3,1);
[0012] setBoxFlags(1,0);
[0015] setBoxFlags(3,128);
[0018] VAR_RESULT = isScriptRunning(149);
[001B] unless (!VAR_RESULT) goto 0044;
[001F] startScript(65);
[0021] Var[66] = getObjectOwner(81);
[0025] unless (Var[66]) goto 0036;
[0029] unless (Var[66] != 15) goto 0036;
[002F] doSentence(253,429,0,1);
[0036] unless (getState04(433)) goto 0044;
[003B] doSentence(250,433,0,1);
[0042] startSound(98);
[0044] unless (!getState08(427)) goto 0050;
[0049] doSentence(250,427,0,1);
[0050] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/EXv2.txt); entry `0000`.

```text
[0000] stopScript(65);
[0002] Var[66] = getObjectOwner(81);
[0006] unless (Var[66]) goto 0014;
[000A] unless (Var[66] != 15) goto 0014;
[0010] setObjPreposition(81,0);
[0014] stopSound(98);
[0016] clearState08(433);
[0019] clearState08(434);
[001C] clearState08(435);
[001F] clearState08(436);
[0022] stopObjectCode();
```

## OCv2_0422 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0422.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0422.txt); entry `0019`.

```text
[0019] loadRoomWithEgo(420,155,8,44);
[001F] stopObjectCode();
```

## OCv2_0423 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0423.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0423.txt); entry `001C`.

```text
[001C] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0033;
[0020] clearState08(VAR_ACTIVE_OBJECT1);
[0022] startSound(78);
[0024] clearState08(422);
[0027] setState02(422);
[002A] setBoxFlags(1,0);
[002D] setBoxFlags(3,128);
[0033] Var[49] = 2;
[0037] unless (VAR_EGO == 2) goto 0041;
[003D] Var[49] = 1;
[0041] VAR_RESULT = getActorRoom(Var[49]);
[0044] unless (VAR_RESULT == VAR_ROOM) goto 007D;
[0049] VAR_RESULT = getActorWalkBox(Var[49]);
[004C] unless (VAR_RESULT == 1) goto 007D;
[0052] walkActorTo(Var[49],22,60);
[0056] print(Var[49],"Not with me standing there you don't!");
[0078] waitForActor(Var[49]);
[007A] animateActor(Var[49],244);
[007D] setState08(VAR_ACTIVE_OBJECT1);
[007F] startSound(78);
[0081] setState08(422);
[0084] clearState02(422);
[0087] setBoxFlags(1,64);
[008A] setBoxFlags(3,1);
[008D] stopObjectCode();
```

## OCv2_0423 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0423.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0423.txt); entry `001C`.

```text
[001C] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0033;
[0020] clearState08(VAR_ACTIVE_OBJECT1);
[0022] startSound(78);
[0024] clearState08(422);
[0027] setState02(422);
[002A] setBoxFlags(1,0);
[002D] setBoxFlags(3,128);
[0033] Var[49] = 2;
[0037] unless (VAR_EGO == 2) goto 0041;
[003D] Var[49] = 1;
[0041] VAR_RESULT = getActorRoom(Var[49]);
[0044] unless (VAR_RESULT == VAR_ROOM) goto 007D;
[0049] VAR_RESULT = getActorWalkBox(Var[49]);
[004C] unless (VAR_RESULT == 1) goto 007D;
[0052] walkActorTo(Var[49],22,60);
[0056] print(Var[49],"Not with me standing there you don't!");
[0078] waitForActor(Var[49]);
[007A] animateActor(Var[49],244);
[007D] setState08(VAR_ACTIVE_OBJECT1);
[007F] startSound(78);
[0081] setState08(422);
[0084] clearState02(422);
[0087] setBoxFlags(1,64);
[008A] setBoxFlags(3,1);
[008D] stopObjectCode();
```

## OCv2_0423 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0423.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0423.txt); entry `001C`.

```text
[001C] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0033;
[0020] clearState08(VAR_ACTIVE_OBJECT1);
[0022] startSound(78);
[0024] clearState08(422);
[0027] setState02(422);
[002A] setBoxFlags(1,0);
[002D] setBoxFlags(3,128);
[0033] Var[49] = 2;
[0037] unless (VAR_EGO == 2) goto 0041;
[003D] Var[49] = 1;
[0041] VAR_RESULT = getActorRoom(Var[49]);
[0044] unless (VAR_RESULT == VAR_ROOM) goto 007D;
[0049] VAR_RESULT = getActorWalkBox(Var[49]);
[004C] unless (VAR_RESULT == 1) goto 007D;
[0052] walkActorTo(Var[49],22,60);
[0056] print(Var[49],"Not with me standing there you don't!");
[0078] waitForActor(Var[49]);
[007A] animateActor(Var[49],244);
[007D] setState08(VAR_ACTIVE_OBJECT1);
[007F] startSound(78);
[0081] setState08(422);
[0084] clearState02(422);
[0087] setBoxFlags(1,64);
[008A] setBoxFlags(3,1);
[008D] stopObjectCode();
```

## OCv2_0424 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0424.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0424.txt); entry `0021`.

```text
[0021] Var[200] = VAR_EGO;
[0024] startSound(27);
[0026] setState08(VAR_ACTIVE_OBJECT1);
[0028] stopObjectCode();
```

## OCv2_0424 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0424.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0424.txt); entry `0029`.

```text
[0029] Var[200] = Var[234];
[002C] startSound(27);
[002E] clearState08(VAR_ACTIVE_OBJECT1);
[0030] clearState04(433);
[0033] doSentence(254,433,0,1);
[003A] stopSound(98);
[003C] clearState08(433);
[003F] clearState08(435);
[0042] stopObjectCode();
```

## OCv2_0424 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0424.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0424.txt); entry `0043`.

```text
[0043] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0051;
[0047] doSentence(5,424,0,0);
[0051] doSentence(4,424,0,0);
[0058] stopObjectCode();
```

## OCv2_0424 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0424.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0424.txt); entry `0043`.

```text
[0043] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0051;
[0047] doSentence(5,424,0,0);
[0051] doSentence(4,424,0,0);
[0058] stopObjectCode();
```

## OCv2_0424 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0424.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0424.txt); entry `0043`.

```text
[0043] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0051;
[0047] doSentence(5,424,0,0);
[0051] doSentence(4,424,0,0);
[0058] stopObjectCode();
```

## OCv2_0425 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0425.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0425.txt); entry `0021`.

```text
[0021] Var[201] = VAR_EGO;
[0024] startSound(27);
[0026] setState08(VAR_ACTIVE_OBJECT1);
[0028] stopObjectCode();
```

## OCv2_0425 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0425.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0425.txt); entry `0029`.

```text
[0029] Var[201] = Var[234];
[002C] startSound(27);
[002E] clearState08(VAR_ACTIVE_OBJECT1);
[0030] clearState04(433);
[0033] doSentence(254,433,0,1);
[003A] stopSound(98);
[003C] clearState08(433);
[003F] clearState08(435);
[0042] stopObjectCode();
```

## OCv2_0425 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0425.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0425.txt); entry `0043`.

```text
[0043] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0051;
[0047] doSentence(5,425,0,0);
[0051] doSentence(4,425,0,0);
[0058] stopObjectCode();
```

## OCv2_0425 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0425.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0425.txt); entry `0043`.

```text
[0043] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0051;
[0047] doSentence(5,425,0,0);
[0051] doSentence(4,425,0,0);
[0058] stopObjectCode();
```

## OCv2_0425 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0425.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0425.txt); entry `0043`.

```text
[0043] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0051;
[0047] doSentence(5,425,0,0);
[0051] doSentence(4,425,0,0);
[0058] stopObjectCode();
```

## OCv2_0426 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0426.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0426.txt); entry `0017`.

```text
[0017] unless (VAR_ACTIVE_OBJECT2 == 78) goto 0031;
[001D] setOwnerOf(78,0);
[0021] clearState08(427);
[0024] clearState02(427);
[0027] doSentence(250,427,0,1);
[0031] startScript(3);
[0033] stopObjectCode();
```

## OCv2_0427 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0427.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0427.txt); entry `003F`.

```text
[003F] printEgo("It's stuck on the base.");
[0054] stopObjectCode();
```

## OCv2_0427 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0427.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0427.txt); entry `003F`.

```text
[003F] printEgo("It's stuck on the base.");
[0054] stopObjectCode();
```

## OCv2_0427 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0427.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0427.txt); entry `0029`.

```text
[0029] unless (VAR_ACTIVE_OBJECT2 == 80) goto 003C;
[002F] setOwnerOf(80,0);
[0033] clearState08(428);
[0036] clearState02(428);
[003C] startScript(3);
[003E] stopObjectCode();
```

## OCv2_0427 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0427.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0427.txt); entry `003F`.

```text
[003F] printEgo("It's stuck on the base.");
[0054] stopObjectCode();
```

## OCv2_0427 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0427.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0427.txt); entry `0055`.

```text
[0055] drawObject(438,255,255);
[005A] delay(6);
[005E] drawObject(439,255,255);
[0063] delay(6);
[0067] drawObject(440,255,255);
[006C] delay(6);
[0070] drawObject(439,255,255);
[0075] delay(6);
```

## OCv2_0428 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0428.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0428.txt); entry `0067`.

```text
[0067] printEgo("It's stuck in the glowing object.");
[0085] stopObjectCode();
```

## OCv2_0428 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0428.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0428.txt); entry `0067`.

```text
[0067] printEgo("It's stuck in the glowing object.");
[0085] stopObjectCode();
```

## OCv2_0428 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0428.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0428.txt); entry `0024`.

```text
[0024] unless (VAR_ACTIVE_OBJECT2 == 81) goto 0037;
[002A] setOwnerOf(81,14);
[002E] clearState08(429);
[0031] clearState02(429);
[0037] unless (VAR_ACTIVE_OBJECT2 == 58) goto 0051;
[003D] setOwnerOf(58,0);
[0041] clearState08(430);
[0044] clearState02(430);
[0047] doSentence(250,430,0,1);
[0051] unless (VAR_ACTIVE_OBJECT2 == 55) goto 0064;
[0057] setOwnerOf(55,14);
[005B] clearState08(431);
[005E] clearState02(431);
[0064] startScript(3);
[0066] stopObjectCode();
```

## OCv2_0428 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0428.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0428.txt); entry `0067`.

```text
[0067] printEgo("It's stuck in the glowing object.");
[0085] stopObjectCode();
```

## OCv2_0429 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0429.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0429.txt); entry `0023`.

```text
[0023] setState08(429);
[0026] setState02(429);
[0029] setOwnerOf(81,VAR_EGO);
[002D] stopObjectCode();
```

## OCv2_0429 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0429.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0429.txt); entry `002E`.

```text
[002E] breakHere();
[002F] unless (!getState08(428)) goto 004E;
[0034] Var[66] = getObjectOwner(81);
[0038] VAR_RESULT = getDist(Var[66],428);
[003D] unless (VAR_RESULT > 9) goto 004A;
[0043] setObjPreposition(81,0);
[004A] setObjPreposition(81,1);
```

## OCv2_0430 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0430.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0430.txt); entry `0024`.

```text
[0024] printEgo("It's stuck in the crystalabra.");
[0040] stopObjectCode();
```

## OCv2_0430 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0430.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0430.txt); entry `0024`.

```text
[0024] printEgo("It's stuck in the crystalabra.");
[0040] stopObjectCode();
```

## OCv2_0430 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0430.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0430.txt); entry `0024`.

```text
[0024] printEgo("It's stuck in the crystalabra.");
[0040] stopObjectCode();
```

## OCv2_0431 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0431.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0431.txt); entry `001F`.

```text
[001F] setState08(431);
[0022] setState02(431);
[0025] setOwnerOf(55,VAR_EGO);
[0029] stopObjectCode();
```

## OCv2_0432 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0432.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0432.txt); entry `0017`.

```text
[0017] breakHere();
[0018] VAR_RESULT = isSoundRunning(102);
[001B] unless (!VAR_RESULT) goto 0017;
[001F] startMusic(104);
[0021] breakHere();
[0022] VAR_RESULT = isSoundRunning(104);
[0025] unless (!VAR_RESULT) goto 0021;
```

## OCv2_0433 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0433.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0433.txt); entry `0013`.

```text
[0013] Var[47] = 20;
[0017] Var[48] = 27;
[001B] Var[46] = 9;
[001F] doSentence(250,435,0,1);
[0026] delay(24);
[002A] doSentence(250,436,0,1);
[0031] Var[47]--;
[0033] Var[48]++;
[0035] Var[46]--;
[0037] doSentence(250,435,0,1);
[003E] delay(24);
[0042] doSentence(250,436,0,1);
[0049] unless (Var[46] == 4) goto 0035;
[004F] Var[47]++;
[0051] Var[48]--;
[0053] Var[46]--;
[0055] doSentence(250,435,0,1);
[005C] delay(24);
[0060] doSentence(250,436,0,1);
```

## OCv2_0435 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0435.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0435.txt); entry `0013`.

```text
[0013] drawObject(433,Var[47],Var[46]);
[0018] drawObject(435,Var[48],Var[46]);
[001D] stopObjectCode();
```

## OCv2_0436 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0436.txt](../../zak/converted/scripts_flat/LFv2_0025/ROv2/OCv2_0436.txt); entry `0013`.

```text
[0013] drawObject(434,Var[47],Var[46]);
[0018] drawObject(436,Var[48],Var[46]);
[001D] stopObjectCode();
```

## SCv2_0065 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0025/SCv2_0065.txt](../../zak/converted/scripts_flat/LFv2_0025/SCv2_0065.txt); entry `0000`.

```text
[0000] breakHere();
[0001] unless (Var[200]) goto 0017;
[0005] VAR_RESULT = getDist(Var[200],424);
[000A] unless (VAR_RESULT) goto 0017;
[000E] clearState08(424);
[0011] Var[200] = Var[234];
[0017] unless (Var[201]) goto 0043;
[001B] VAR_RESULT = getDist(Var[201],425);
[0020] unless (VAR_RESULT) goto 0043;
[0024] clearState08(425);
[0027] Var[201] = Var[234];
[002A] startSound(27);
[002C] unless (getState04(433)) goto 0043;
[0031] clearState04(433);
[0034] doSentence(254,433,0,1);
[003B] stopSound(98);
[003D] clearState08(433);
[0040] clearState08(435);
[0043] unless (getState08(424)) goto 0082;
[0048] unless (getState08(425)) goto 0082;
[004D] unless (!getState08(427)) goto 0071;
[0052] unless (!getState08(428)) goto 0071;
[0057] unless (!getState08(429)) goto 0071;
[005C] unless (!getState08(430)) goto 0071;
[0061] unless (!getState08(431)) goto 0071;
[0066] panCameraTo(24);
[0068] breakHere();
[0069] unless (VAR_CAMERA_POS_X == 24) goto 0068;
[006F] chainScript(66);
[0071] unless (!getState04(433)) goto 0082;
[0076] setState04(433);
[0079] doSentence(250,433,0,1);
[0080] startSound(98);
```

## SCv2_0066 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0025/SCv2_0066.txt](../../zak/converted/scripts_flat/LFv2_0025/SCv2_0066.txt); entry `0000`.

```text
[0000] cursorCommand(15, 2);
[0003] Var[66] = 14;
[0007] VAR_RESULT = getObjectOwner(Var[66]);
[000A] unless (VAR_RESULT != 15) goto 0013;
[0010] setOwnerOf(Var[66],0);
[0013] Var[66]++;
[0015] unless (Var[66] > 83) goto 0007;
[001B] unlockCostume(37)
[001E] unlockCostume(39)
[0021] lockCostume(Var[172])
[0024] lockCostume(2)
[0027] unlockScript(2)
[002A] unlockScript(3)
[002D] unlockScript(4)
[0030] unlockScript(10)
[0033] unlockScript(11)
[0036] unlockScript(20)
[0039] stopScript(9);
[003B] stopScript(84);
[003D] stopScript(77);
[003F] unlockSound(10)
[0042] unlockSound(11)
[0045] unlockSound(84)
[0048] unlockSound(89)
[004B] unlockSound(27)
[004E] unlockSound(29)
[0051] unlockSound(78)
[0054] unlockSound(19)
[0057] unlockSound(38)
[005A] unlockSound(44)
[005D] unlockSound(25)
[0060] unlockSound(2)
[0063] unlockScript(59)
[0066] unlockScript(19)
[0069] unlockUnkResType0(0)
[006C] loadSound(99)
[006F] lockSound(99)
[0072] loadSound(100)
[0075] lockSound(100)
[0078] loadSound(101)
[007B] lockSound(101)
[007E] loadRoom(51)
[0081] loadRoom(57)
[0084] loadRoom(16)
[0087] loadSound(83)
[008A] lockSound(83)
[008D] loadCostume(28)
[0090] lockCostume(28)
[0093] doSentence(250,433,0,1);
[009A] startSound(99);
[009C] delay(480);
[00A0] unless (VAR_MACHINE_SPEED > 40) goto 0166;
[00A6] Var[44] = Var[234];
[00A9] RoomColor(15,7);
[00AD] RoomColor(7,8);
[00B1] RoomColor(7,0);
[00B5] RoomColor(12,4);
[00B9] RoomColor(15,12);
[00BD] RoomColor(14,6);
[00C1] RoomColor(15,14);
[00C5] RoomColor(11,3);
[00C9] RoomColor(15,11);
[00CD] RoomColor(13,5);
[00D1] RoomColor(15,13);
[00D5] RoomColor(10,2);
[00D9] RoomColor(15,10);
[00DD] RoomColor(9,1);
[00E1] RoomColor(15,9);
[00E5] breakHere();
[00E6] RoomColor(8,7);
[00EA] RoomColor(0,8);
[00EE] RoomColor(0,0);
[00F2] RoomColor(0,4);
[00F6] RoomColor(4,12);
[00FA] RoomColor(0,6);
[00FE] RoomColor(6,14);
[0102] RoomColor(0,3);
[0106] RoomColor(3,11);
[010A] RoomColor(0,5);
[010E] RoomColor(5,13);
[0112] RoomColor(0,2);
[0116] RoomColor(2,10);
[011A] RoomColor(0,1);
[011E] RoomColor(1,9);
[0122] breakHere();
[0123] Var[44]++;
[0125] unless (Var[44] > Var[235]) goto 00A9;
[012A] RoomColor(7,7);
[012E] RoomColor(8,8);
[0132] RoomColor(0,0);
[0136] RoomColor(4,4);
[013A] RoomColor(12,12);
[013E] RoomColor(6,6);
[0142] RoomColor(14,14);
[0146] RoomColor(3,3);
[014A] RoomColor(11,11);
[014E] RoomColor(5,5);
[0152] RoomColor(13,13);
[0156] RoomColor(2,2);
[015A] RoomColor(10,10);
[015E] RoomColor(1,1);
[0162] RoomColor(9,9);
[0166] clearState08(432);
[0169] startSound(100);
[016B] delay(240);
[016F] loadRoom(57);
[0171] delay(120);
[0175] startSound(100);
[0177] drawObject(762,255,255);
[017C] breakHere();
[017D] drawObject(763,255,255);
[0182] breakHere();
[0183] drawObject(764,255,255);
[0188] breakHere();
[0189] drawObject(765,255,255);
[018E] delay(120);
[0192] loadRoom(51);
[0194] setCameraAt(60);
[0196] delay(30);
[019A] startSound(100);
[019C] drawObject(709,255,255);
[01A1] delay(20);
[01A5] drawObject(710,255,255);
[01AA] delay(20);
[01AE] drawObject(711,255,255);
[01B3] delay(20);
[01B7] drawObject(771,255,255);
[01BC] delay(20);
[01C0] drawObject(772,255,255);
[01C5] delay(120);
[01C9] stopSound(100);
[01CB] clearState08(332);
[01CE] loadRoom(16);
[01D0] doSentence(253,341,0,1);
[01D7] putActor(7,59,50);
[01DB] putActor(12,40,50);
[01DF] animateActor(12,249);
[01E2] setCameraAt(58);
[01E4] breakHere();
[01E5] walkActorTo(12,54,50);
[01E9] delay(60);
[01ED] print(12,"HEY! WHAT'S HAPPENING?");
[0204] waitForMessage();
[0205] delay(30);
[0209] animateActor(7,244);
[020C] print(7,"SOMETHING'S VERY, VERY WRONG!");
[0229] waitForMessage();
[022A] animateActor(7,247);
[022D] animateActor(12,247);
[0230] delay(120);
[0234] stopSound(83);
[0236] doSentence(254,342,0,1);
[023D] doSentence(254,339,0,1);
[0244] delay(30);
[0248] animateActor(7,244);
[024B] animateActor(12,245);
[024E] print(12,"SEE YA^");
[0257] delay(30);
[025B] startSound(101);
[025D] setState08(344);
[0260] delay(30);
[0264] animateActor(7,246);
[0267] animateActor(12,246);
[026A] breakHere();
[026B] unless (VAR_MACHINE_SPEED < 40) goto 0274;
[0274] putActor(7,63,58);
[0278] putActor(12,52,58);
[027C] breakHere();
[027D] putActor(7,69,63);
[0281] putActor(12,44,63);
[0285] breakHere();
[0286] putActorInRoom(7,0);
[0289] putActorInRoom(12,0);
[028C] breakHere();
[028D] breakHere();
[028E] drawObject(345,255,255);
[0293] delay(180);
[0297] loadRoom(0);
[0299] chainScript(149);
```

## SCv2_0149 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0025/SCv2_0149.txt](../../zak/converted/scripts_flat/LFv2_0025/SCv2_0149.txt); entry `0000`.

```text
[0000] unlockUnkResType0(0)
[0003] loadSound(102)
[0006] lockSound(102)
[0009] loadSound(104)
[000C] lockSound(104)
[000F] clearState08(423);
[0012] clearState08(422);
[0015] Var[167] = 52;
[0019] Var[164] = 44;
[001D] loadRoom(25);
[001F] setCameraAt(24);
[0021] doSentence(250,433,0,1);
[0028] ActorOps(1,[Sound(Var[234])]);
[002C] ActorOps(2,[Sound(Var[234])]);
[0030] breakHere();
[0031] startMusic(102);
[0033] doSentence(253,432,0,1);
[003A] walkActorTo(Var[200],21,53);
[003E] breakHere();
[003F] breakHere();
[0040] walkActorTo(Var[201],24,53);
[0044] waitForActor(Var[200]);
[0046] waitForActor(Var[201]);
[0048] animateActor(Var[200],245);
[004B] animateActor(Var[201],244);
[004E] delay(60);
[0052] animateActor(1,24);
[0055] animateActor(2,24);
[0058] delay(420);
[005C] walkActorTo(Var[201],23,53);
[0060] animateActor(Var[200],12);
[0063] delay(120);
[0067] animateActor(Var[200],24);
[006A] print(255,"            CONGRATULATIONS!\x01\x01YOU HAVE SAVED THE WORLD FROM STUPIDITY!");
[00A6] delay(420);
[00AA] walkActorTo(Var[201],24,63);
[00AE] breakHere();
[00AF] breakHere();
[00B0] walkActorTo(Var[200],21,63);
[00B4] waitForActor(Var[200]);
[00B6] animateActor(Var[200],246);
[00B9] delay(120);
[00BD] animateActor(Var[200],245);
[00C0] animateActor(Var[201],244);
[00C3] VAR_TIMER_NEXT = Var[234];
[00C6] delay(120);
[00CA] print(255,"                EPILOGUE");
[00DD] waitForMessage();
[00DE] delay(60);
[00E2] print(255,"The King and his Caponian gang left\x01\x01Earth for good^\x03\x03^and continued their galactic search for\x01\x01`stupider` life forms.");
[0149] waitForMessage();
[014A] delay(30);
[014E] print(255,"The people of Earth rapidly regained\x01\x01their former level of intelligence^\x03\x03^and traded in good karma for the latest\x01\x01food fad, two-headed squirrel burgers.");
[01D5] waitForMessage();
[01D6] delay(30);
[01DA] print(255,"No one trusted The Phone Company\x01\x01anymore^\x03\x03^so telepathic conversations and\x01\x01dream-sharing became the norm^\x03\x03^at $2.50 for the first 3 minutes\x01\x01after 11:00 PM.");
[0265] waitForMessage();
[0266] delay(30);
[026A] Var[117] = Var[234];
[026D] VAR_RESULT = getBitVar(1473,0);
[0272] unless (!VAR_RESULT) goto 027C;
[0276] Var[117]++;
[0278] Var[118] = 3;
[027C] VAR_RESULT = getBitVar(1474,0);
[0281] unless (!VAR_RESULT) goto 028B;
[0285] Var[117]++;
[0287] Var[118] = 4;
[028B] unless (Var[117]) goto 034A;
[028F] unless (Var[117] == Var[235]) goto 029F;
[0294] print(255,"\x06\x76\x06's\x02\x02");
[029F] print(255,"The coeds'\x02\x02");
[02AC] print(255," Spring Break became \x02\x02");
[02C2] unless (Var[117] == Var[235]) goto 02D2;
[02C7] print(255,"her\x01\x01\x02\x02");
[02D2] print(255,"their\x01\x01\x02\x02");
[02DC] print(255,"Big Break.\x03\x03A famous movie producer starred \x02\x02");
[0305] waitForMessage();
[0306] unless (Var[117] == Var[235]) goto 0315;
[030B] print(255,"her\x02\x02");
[0315] print(255,"them\x02\x02");
[031D] print(255," in\x01\x01the box office smash, `Mars Needs Men`.");
[0345] waitForMessage();
[0346] delay(30);
[034A] waitForMessage();
[034B] delay(30);
[034F] print(255,"Zak won the Nobel Peace Prize for saving\x01\x01the world.\x03\x03Then he won the Pulitzer for writing a\x01\x01book about it.");
[03AA] waitForMessage();
[03AB] delay(30);
[03AF] animateActor(Var[200],246);
[03B2] animateActor(Var[201],246);
[03B5] breakHere();
[03B6] print(255,"Zak and Annie fell in love.\x03\x03And their life together was even better\x01\x01than their wildest dreams.");
[0409] waitForMessage();
[040A] delay(60);
[040E] animateActor(Var[200],245);
[0411] animateActor(Var[201],244);
[0414] delay(30);
[0418] print(255,"                THE  END");
[042A] waitForMessage();
[042B] delay(180);
[042F] print(255,"                SEE  YA!");
[0441] stopObjectCode();
```
