# Room 008 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] loadScript(115)
[0007] Var[45] = VAR_ROOM;
[000A] Var[60] = 194;
[000E] doSentence(253,190,0,1);
[0015] VAR_RESULT = getRandomNr(1);
[0018] unless (VAR_RESULT) goto 0022;
[001C] clearState08(195);
[001F] clearState02(195);
[0022] doSentence(250,204,0,1);
[0029] Var[66] = 196;
[002D] clearState08(Var[66]);
[002F] Var[66]++;
[0031] unless (Var[66] > 200) goto 002D;
[0037] unless (VAR_MACHINE_SPEED > 40) goto 004B;
[003D] doSentence(250,202,0,1);
[0044] doSentence(250,203,0,1);
[004B] drawObject(215,6,1);
[0050] setState08(192);
[0053] setState02(192);
[0056] clearState08(214);
[0059] setState02(214);
[005C] Var[66] = 2;
[0060] unless (VAR_EGO == Var[66]) goto 0069;
[0065] Var[66] = 1;
[0069] VAR_RESULT = getBitVar(1572,0);
[006E] unless (VAR_RESULT) goto 007A;
[0072] setBitVar(1572,0,Var[234]);
[007A] clearState08(191);
[007D] VAR_RESULT = getBitVar(1569,0);
[0082] unless (VAR_RESULT) goto 008E;
[0086] setBitVar(1569,0,Var[234]);
[008E] VAR_RESULT = getActorX(VAR_EGO);
[0091] unless (VAR_RESULT > 25) goto 009A;
[009A] VAR_RESULT = getActorRoom(Var[66]);
[009D] unless (VAR_RESULT == VAR_ROOM) goto 00AE;
[00A2] VAR_RESULT = getActorX(Var[66]);
[00A5] unless (VAR_RESULT > 25) goto 00AE;
[00AB] setState08(191);
[00AE] unless (VAR_ROOM == 141) goto 00DF;
[00B4] Var[46] = 4;
[00B8] setVarRange(Var[68],5,[664,666,660,661,663]);
[00C5] setVarRange(Var[73],5,[795,1589,779,511,808]);
[00D2] drawObject(198,255,255);
[00D7] Var[47] = 639;
[00DB] Var[48] = 133;
[00DF] unless (VAR_ROOM == 142) goto 0148;
[00E5] Var[46] = 3;
[00E9] setVarRange(Var[68],4,[667,659,661,663]);
[00F4] setVarRange(Var[73],4,[691,779,271,295]);
[00FF] drawObject(200,255,255);
[0104] clearState08(192);
[0107] clearState02(192);
[010A] Var[47] = 572;
[010E] Var[48] = 168;
[0112] Var[117] = getRandomNr(1);
[0115] unless (Var[117]) goto 0127;
[0119] Var[14] = VAR_EGO;
[011C] Var[14] += 219;
[0120] Var[Var[14]] = 593;
[0127] Var[14] = VAR_EGO;
[012A] Var[14] += 219;
[012E] Var[Var[14]] = 595;
[0132] Var[14] = VAR_EGO;
[0135] Var[14] += 222;
[0139] Var[Var[14]] = 39;
[013D] Var[14] = VAR_EGO;
[0140] Var[14] += 216;
[0144] Var[Var[14]] = 4;
[0148] unless (VAR_ROOM == 143) goto 01CB;
[014E] Var[46] = 4;
[0152] setVarRange(Var[68],5,[664,659,660,663,668]);
[015F] setVarRange(Var[73],5,[1316,511,271,305,99]);
[016C] drawObject(199,255,255);
[0171] clearState08(191);
[0174] setState08(214);
[0177] clearState02(214);
[017A] VAR_RESULT = getObjectOwner(46);
[017E] unless (VAR_RESULT == 15) goto 01B3;
[0184] ActorOps(10,[Costume(23)]);
[0188] ActorOps(10,[TalkColor(12)]);
[018C] ActorOps(10,[Sound(6)]);
[0190] ActorOps(10,[Name("bum")]);
[0198] putActorInRoom(10,143);
[019B] putActor(10,30,46);
[019F] Var[44] = Var[234];
[01A2] doSentence(250,211,0,1);
[01A9] doSentence(253,210,0,1);
[01B3] Var[44] = -1;
[01B7] VAR_RESULT = getActorRoom(10);
[01BA] unless (VAR_RESULT == VAR_ROOM) goto 01C9;
[01BF] doSentence(253,206,0,1);
[01C9] stopSound(96);
[01CB] unless (VAR_ROOM == 145) goto 024F;
[01D1] Var[46] = 4;
[01D5] setVarRange(Var[68],5,[667,659,660,661,662]);
[01E2] setVarRange(Var[73],5,[937,808,295,305,260]);
[01EF] drawObject(196,255,255);
[01F4] Var[47] = 144;
[01F8] Var[48] = 3;
[01FC] VAR_RESULT = getObjectOwner(45);
[0200] unless (VAR_RESULT == 15) goto 0234;
[0206] ActorOps(10,[Costume(25)]);
[020A] ActorOps(10,[TalkColor(12)]);
[020E] ActorOps(10,[Sound(Var[234])]);
[0212] ActorOps(10,[Name("devotee")]);
[021E] VAR_RESULT = isScriptRunning(40);
[0221] unless (!VAR_RESULT) goto 0231;
[0225] putActorInRoom(10,145);
[0228] putActor(10,10,46);
[022C] Var[44] = Var[234];
[022F] startScript(40);
[0234] Var[44] = -1;
[0238] VAR_RESULT = getActorRoom(10);
[023B] unless (VAR_RESULT == VAR_ROOM) goto 024D;
[0240] doSentence(253,205,0,1);
[0247] loadScript(43)
[024D] stopSound(96);
[024F] unless (VAR_ROOM == 144) goto 0284;
[0255] Var[46] = Var[235];
[0258] setVarRange(Var[68],2,[661,663]);
[025F] setVarRange(Var[73],2,[407,260]);
[0266] drawObject(197,255,255);
[026B] clearState08(192);
[026E] clearState02(192);
[0271] Var[47] = 266;
[0275] Var[48] = 12;
[0279] VAR_RESULT = getBitVar(1557,0);
[027E] unless (!VAR_RESULT) goto 0284;
[0282] startScript(140);
[0284] unless (VAR_ROOM != 143) goto 0291;
[028A] doSentence(250,201,0,1);
[0291] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/EXv2.txt); entry `0000`.

```text
[0000] stopSound(19);
[0002] Var[203] = Var[234];
[0005] stopSound(87);
[0007] stopSound(96);
[0009] VAR_RESULT = isScriptRunning(30);
[000C] unless (!VAR_RESULT) goto 001D;
[0010] setState08(195);
[0013] setState02(195);
[0016] stopScript(43);
[0018] stopScript(40);
[001A] putActorInRoom(10,0);
[001D] stopObjectCode();
```

## OCv2_0045 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0045.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0045.txt); entry `0017`.

```text
[0017] startScript(138);
[0019] stopObjectCode();
```

## OCv2_0046 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0046.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0046.txt); entry `001C`.

```text
[001C] startScript(138);
[001E] stopObjectCode();
```

## OCv2_0046 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0046.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0046.txt); entry `001C`.

```text
[001C] startScript(138);
[001E] stopObjectCode();
```

## OCv2_0190 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0190.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0190.txt); entry `0023`.

```text
[0023] startScript(115);
[0025] stopObjectCode();
```

## OCv2_0190 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0190.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0190.txt); entry `0026`.

```text
[0026] doSentence(254,212,0,1);
[002D] doSentence(254,216,0,1);
[0034] stopSound(96);
[0036] VAR_RESULT = isSoundRunning(87);
[0039] unless (!VAR_RESULT) goto 003F;
[003D] startSound(87);
[003F] Var[59] = Var[234];
[0042] stopObjectCode();
```

## OCv2_0191 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0191.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0191.txt); entry `0046`.

```text
[0046] unless (VAR_ROOM == 143) goto 0062;
[004C] printEgo("Looks like it's broken.");
[0062] stopObjectCode();
```

## OCv2_0191 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0191.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0191.txt); entry `0019`.

```text
[0019] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0042;
[001D] clearState08(191);
[0020] unless (VAR_ROOM == 142) goto 0031;
[0026] Var[58] = 572;
[002A] Var[59] = 191;
[002E] Var[255] = VAR_ROOM;
[0031] unless (VAR_ROOM == 146) goto 003A;
[0037] loadCostume(9)
[003A] clearState04(219);
[003D] loadRoomWithEgo(Var[47],Var[48],255,255);
[0046] unless (VAR_ROOM == 143) goto 0062;
[004C] printEgo("Looks like it's broken.");
[0062] stopObjectCode();
```

## OCv2_0192 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0192.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0192.txt); entry `0018`.

```text
[0018] startScript(46);
[001A] stopObjectCode();
```

## OCv2_0193 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0193.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0193.txt); entry `001E`.

```text
[001E] breakHere();
[001F] VAR_RESULT = isSoundRunning(19);
[0022] unless (!VAR_RESULT) goto 001E;
[0026] startScript(80);
[0028] stopObjectCode();
```

## OCv2_0193 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0193.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0193.txt); entry `001E`.

```text
[001E] breakHere();
[001F] VAR_RESULT = isSoundRunning(19);
[0022] unless (!VAR_RESULT) goto 001E;
[0026] startScript(80);
[0028] stopObjectCode();
```

## OCv2_0194 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0194.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0194.txt); entry `0028`.

```text
[0028] breakHere();
[0029] VAR_RESULT = isSoundRunning(19);
[002C] unless (!VAR_RESULT) goto 0028;
[0030] Var[78] = 213;
[0034] startScript(30);
[0036] stopObjectCode();
```

## OCv2_0201 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0201.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0201.txt); entry `0013`.

```text
[0013] breakHere();
[0014] Var[66] = getClosestObjActor(191);
[0018] unless (!getState08(191)) goto 0038;
[001D] VAR_RESULT = getActorX(Var[66]);
[0020] unless (VAR_RESULT > 25) goto 0035;
[0026] startSound(19);
[0028] delay(30);
[002C] setState08(191);
[002F] delay(60);
[0033] stopSound(19);
[0038] VAR_RESULT = getActorX(Var[66]);
[003B] unless (VAR_RESULT <= 25) goto 0050;
[0041] startSound(19);
[0043] delay(30);
[0047] clearState08(191);
[004A] delay(60);
[004E] stopSound(19);
```

## OCv2_0202 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0202.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0202.txt); entry `0013`.

```text
[0013] Var[66] = getRandomNr(255);
[0016] delayVariable(Var[66]);
[0018] unless (Var[58]) goto 0026;
[001C] unless (Var[242] != 208) goto 0026;
[0022] breakHere();
[0026] Var[57] = 6;
[002A] Var[241] = 201;
[002E] unless (Var[241] == 201) goto 0044;
[0034] Var[66] = Var[57];
[0037] Var[66]--;
[0039] unless (Var[66] >= 6) goto 0044;
[003F] drawObject(215,Var[66],1);
[0044] drawObject(Var[241],Var[57],1);
[0048] breakHere();
[0049] Var[241]++;
[004B] unless (Var[241] > 204) goto 002E;
[0051] Var[57]++;
[0053] unless (Var[57] > 33) goto 002A;
[0059] unless (Var[58] != 33) goto 0064;
[005F] drawObject(215,33,1);
```

## OCv2_0203 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0203.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0203.txt); entry `0013`.

```text
[0013] Var[58] = Var[234];
[0016] Var[66] = getRandomNr(255);
[0019] Var[67] = getRandomNr(255);
[001C] Var[66] += Var[67];
[001F] Var[66] += 120;
[0023] delayVariable(Var[66]);
[0025] unless (Var[241] != 201) goto 002F;
[002B] breakHere();
[002F] Var[58] = 33;
[0033] Var[242] = 205;
[0037] unless (Var[242] == 205) goto 0052;
[003D] Var[66] = Var[58];
[0040] Var[66]++;
[0042] unless (Var[66] <= 33) goto 0052;
[0048] unless (Var[66] != Var[57]) goto 0052;
[004D] drawObject(216,Var[66],1);
[0052] unless (Var[58] == Var[57]) goto 0065;
[0057] Var[66] = Var[242];
[005A] Var[66] += 4;
[005E] drawObject(Var[66],Var[58],1);
[0065] drawObject(Var[242],Var[58],1);
[0069] breakHere();
[006A] Var[242]++;
[006C] unless (Var[242] > 208) goto 0037;
[0072] Var[58]--;
[0074] unless (Var[58] < 6) goto 0033;
[007A] unless (Var[57] != 6) goto 0085;
[0080] drawObject(216,6,1);
```

## OCv2_0204 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0204.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0204.txt); entry `0013`.

```text
[0013] Var[66] = getRandomNr(255);
[0016] breakHere();
```

## OCv2_0205 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0205.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0205.txt); entry `0013`.

```text
[0013] Var[203] = Var[235];
[0016] breakHere();
[0017] unless (VAR_ACTIVE_VERB == 3) goto 002A;
[001D] waitForActor(VAR_EGO);
[001F] unless (VAR_ACTIVE_OBJECT2 == 10) goto 002A;
[0025] startScript(43);
[0027] VAR_ACTIVE_OBJECT2 = Var[234];
```

## OCv2_0206 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0206.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0206.txt); entry `0013`.

```text
[0013] Var[203] = Var[235];
[0016] breakHere();
[0017] unless (VAR_ACTIVE_VERB == 3) goto 0049;
[001D] waitForActor(VAR_EGO);
[001F] unless (VAR_ACTIVE_OBJECT2 == 10) goto 0049;
[0025] print(10,"I don't need anything! Let me dance!");
[0046] VAR_ACTIVE_OBJECT2 = Var[234];
```

## OCv2_0207 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0207.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0207.txt); entry `0013`.

```text
[0013] walkActorToActor(10,VAR_EGO,2);
[0017] breakHere();
[0018] breakHere();
[0019] breakHere();
[001A] VAR_RESULT = getDist(VAR_EGO,10);
[001F] unless (VAR_RESULT < 3) goto 0013;
[0025] print(10,"Can y'spare a debit?");
[0039] Var[54] = 80;
[003D] stopObjectCode();
```

## OCv2_0208 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0208.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0208.txt); entry `0013`.

```text
[0013] cutscene();
[0014] beginOverride();
[0018] print(10,"I've heard of dis guru. Lemme see what\x01\x01he has t'say.");
[0046] waitForMessage();
[0047] animateActor(10,247);
[004A] Var[117] = Var[235];
[004D] delay(180);
[0051] print(10,"Ah!");
[0057] Var[117]++;
[0059] unless (Var[117] > 3) goto 004D;
[005F] delay(180);
[0063] faceActor(10,VAR_EGO);
[0066] waitForActor(10);
[0068] print(10,"I UNDERSTAND now! I don't need this\x01\x01whiskey any longer! Here, and thank you!");
[00AB] waitForMessage();
[00AC] unless (getState04(45)) goto 00B5;
[00B1] setOwnerOf(45,0);
[00B5] Var[67] = Var[234];
[00B8] Var[66] = 14;
[00BC] VAR_RESULT = getObjectOwner(Var[66]);
[00BF] unless (VAR_RESULT == 10) goto 00CA;
[00C5] setOwnerOf(Var[66],VAR_EGO);
[00C8] Var[67]++;
[00CA] Var[66]++;
[00CC] unless (Var[66] > 83) goto 00BC;
[00D2] unless (Var[67]) goto 00FB;
[00D6] print(10,"And here're all my earthly possessions.");
[00FB] ActorOps(10,[Name("devotee")]);
[0107] pickupObject(46);
[010A] endCutscene();
[010B] Var[44] = -1;
[010F] walkActorTo(10,10,46);
[0113] waitForActor(10);
[0115] startScript(40);
[0117] doSentence(253,206,0,1);
[011E] stopObjectCode();
```

## OCv2_0209 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0209.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0209.txt); entry `0013`.

```text
[0013] Var[66] = 2;
[0017] unless (VAR_ACTIVE_OBJECT1 == 18) goto 0021;
[001D] Var[66] = 1;
[0021] Var[14] = Var[66];
[0024] Var[14] += 61;
[0028] unless (Var[14] >= Var[118]) goto 0055;
[002D] cutscene();
[002E] Var[14] = Var[66];
[0031] Var[14] += 61;
[0035] Var[Var[14]] -= Var[118];
[0038] beginOverride();
[003C] animateActor(10,255);
[003F] animateActor(10,247);
[0042] delay(60);
[0046] startSound(84);
[0048] delay(120);
[004C] faceActor(10,VAR_EGO);
[004F] waitForActor(10);
[0051] endCutscene();
[0055] Var[66] = Var[234];
[0058] stopObjectCode();
```

## OCv2_0210 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0210.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0210.txt); entry `0013`.

```text
[0013] VAR_ACTIVE_OBJECT2 = Var[234];
[0016] Var[203] = Var[235];
[0019] Var[54] = 80;
[001D] breakHere();
[001E] Var[54]--;
[0020] unless (!Var[54]) goto 002B;
[0024] doSentence(250,207,0,1);
[002B] unless (VAR_ACTIVE_VERB == 3) goto 00FB;
[0031] unless (VAR_ACTIVE_OBJECT2 == 10) goto 00FB;
[0037] waitForActor(VAR_EGO);
[0039] faceActor(VAR_EGO,10);
[003C] stopObjectCode();
```

## OCv2_0211 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0211.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0211.txt); entry `0013`.

```text
[0013] Var[55] = getRandomNr(2);
[0016] Var[56] = getRandomNr(2);
[0019] Var[66] = getActorX(10);
[001C] Var[55] += Var[66];
[001F] Var[55]--;
[0021] Var[66] = getActorY(10);
[0024] Var[56] += Var[66];
[0027] Var[56]--;
[0029] walkActorTo(10,Var[55],Var[56]);
[002D] waitForActor(10);
```

## OCv2_0212 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0212.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0212.txt); entry `0013`.

```text
[0013] Var[59]++;
[0015] VAR_RESULT = isSoundRunning(96);
[0018] unless (!VAR_RESULT) goto 001E;
[001C] startSound(96);
[001E] Var[53] = Var[234];
[0021] Var[14] = Var[53];
[0024] Var[14] += 49;
[0028] animateActor(10,Var[14]);
[002B] breakHere();
[002C] Var[14] = Var[53];
[002F] Var[14] += 49;
[0033] animateActor(10,Var[14]);
[0036] breakHere();
[0037] Var[53]++;
[0039] unless (Var[53] > 3) goto 0021;
```

## OCv2_0214 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0214.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0214.txt); entry `0017`.

```text
[0017] printEgo("Miami closed for repairs.");
[002F] stopObjectCode();
```

## OCv2_0216 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0216.txt](../../zak/converted/scripts_flat/LFv2_0008/ROv2/OCv2_0216.txt); entry `0013`.

```text
[0013] breakHere();
[0014] walkActorTo(10,12,46);
[0018] breakHere();
[0019] waitForActor(10);
[001B] walkActorTo(10,8,46);
[001F] breakHere();
[0020] waitForActor(10);
```

## SCv2_0040 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0008/SCv2_0040.txt](../../zak/converted/scripts_flat/LFv2_0008/SCv2_0040.txt); entry `0000`.

```text
[0000] unless (!Var[59]) goto 0019;
[0004] setVarRange(Var[49],4,[250,248,251,249]);
[000B] doSentence(250,212,0,1);
[0012] doSentence(250,216,0,1);
[0019] breakHere();
[001A] VAR_RESULT = getDist(10,VAR_EGO);
[001F] unless (VAR_RESULT < 9) goto 0019;
[0025] VAR_RESULT = getBitVar(704,VAR_EGO);
[002A] unless (VAR_RESULT) goto 0031;
[0031] doSentence(253,190,0,1);
[0038] animateActor(10,255);
[003B] animateActor(10,246);
[003E] waitForActor(10);
[0040] Var[54] = 120;
[0044] unless (VAR_ACTIVE_VERB == 3) goto 006A;
[004A] unless (VAR_ACTIVE_OBJECT2 == 10) goto 006A;
[0050] print(10,"You want my last book?");
[0065] waitForActor(VAR_EGO);
[006A] VAR_RESULT = getObjectOwner(45);
[006E] unless (VAR_RESULT == 15) goto 0095;
[0074] print(10,"Want to buy a book on enlightenment?");
[0095] walkActorToActor(10,VAR_EGO,4);
[0099] breakHere();
[009A] breakHere();
[009B] Var[54]--;
[009D] unless (!Var[54]) goto 00A4;
[00A4] VAR_RESULT = getDist(10,VAR_EGO);
[00A9] unless (VAR_RESULT <= 4) goto 00B7;
[00AF] waitForActor(10);
[00B1] faceActor(10,VAR_EGO);
```

## SCv2_0043 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0008/SCv2_0043.txt](../../zak/converted/scripts_flat/LFv2_0008/SCv2_0043.txt); entry `0000`.

```text
[0000] VAR_RESULT = getObjectOwner(45);
[0004] unless (VAR_RESULT != 15) goto 002B;
[000A] print(10,"No more books, just let me dance.");
[002B] unless (classOfIs(VAR_ACTIVE_OBJECT1,128)) goto 00DD;
[0030] cursorCommand(15, 2);
[0033] doSentence(253,190,0,1);
[003A] waitForActor(VAR_EGO);
[003C] waitForActor(10);
[003E] walkActorToActor(10,VAR_EGO,4);
[0042] waitForActor(10);
[0044] faceActor(10,VAR_EGO);
[0047] faceActor(VAR_EGO,10);
[004A] stopObjectCode();
[00DD] print(10,"Sorry, CashCards only.");
[00F4] stopObjectCode();
```
