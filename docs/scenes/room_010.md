# Room 010 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] lockSound(72)
[0007] lockSound(73)
[000A] lockSound(74)
[000D] lockSound(75)
[0010] lockSound(76)
[0013] lockSound(77)
[0016] lockSound(45)
[0019] Var[51] = 230;
[001D] clearState08(Var[51]);
[001F] Var[51]++;
[0021] unless (Var[51] > 235) goto 001D;
[0027] loadScript(64)
[002A] lockScript(64)
[002D] unless (!getState08(229)) goto 003E;
[0032] setBoxFlags(1,0);
[0035] setBoxFlags(2,0);
[0038] setBoxFlags(0,128);
[003E] setBoxFlags(1,128);
[0041] setBoxFlags(2,128);
[0044] setBoxFlags(0,0);
[0047] unless (!getState08(238)) goto 0068;
[004C] clearState02(238);
[004F] setBoxFlags(4,128);
[0052] setBoxFlags(5,128);
[0055] RoomScroll(20,20);
[0059] loadScript(100)
[005C] loadSound(23)
[005F] lockSound(23)
[0062] loadCostume(28)
[0068] doSentence(253,240,0,1);
[006F] VAR_RESULT = getBitVar(1573,0);
[0074] unless (VAR_RESULT) goto 007F;
[0078] doSentence(250,231,0,1);
[007F] VAR_RESULT = isScriptRunning(64);
[0082] unless (VAR_RESULT) goto 008B;
[0086] startSound(45);
[008B] setVarRange(Var[49],3,[0,0,0]);
[0091] setBitVar(1571,0,Var[234]);
[0096] setBitVar(1570,0,Var[234]);
[009B] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/EXv2.txt); entry `0000`.

```text
[0000] unlockSound(23)
[0003] unlockScript(64)
[0006] unlockSound(72)
[0009] unlockSound(73)
[000C] unlockSound(74)
[000F] unlockSound(75)
[0012] unlockSound(76)
[0015] unlockSound(77)
[0018] unlockSound(45)
[001B] stopSound(45);
[001D] Var[203] = Var[234];
[0020] ActorOps(7,[Name("representative")]);
[0033] VAR_RESULT = getActorRoom(1);
[0036] unless (VAR_RESULT != 10) goto 004C;
[003C] stopScript(100);
[003E] stopScript(101);
[0040] stopScript(95);
[0042] stopScript(103);
[0044] Var[199] = Var[235];
[0047] setBitVar(1573,0,Var[234]);
[004C] stopObjectCode();
```

## OCv2_0229 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0229.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0229.txt); entry `001E`.

```text
[001E] Var[233] = VAR_EGO;
[0021] doSentence(253,230,0,1);
[0028] stopObjectCode();
```

## OCv2_0229 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0229.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0229.txt); entry `001E`.

```text
[001E] Var[233] = VAR_EGO;
[0021] doSentence(253,230,0,1);
[0028] stopObjectCode();
```

## OCv2_0229 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0229.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0229.txt); entry `0029`.

```text
[0029] unless (Var[47]) goto 0031;
[002D] delay(420);
[0031] Var[49] = Var[234];
[0034] setBitVar(1570,0,Var[234]);
[0039] setBitVar(1571,0,Var[234]);
[003E] Var[51] = 230;
[0042] setState08(Var[51]);
[0044] Var[51]++;
[0046] unless (Var[51] > 235) goto 0042;
[004C] Var[53] = 77;
[0050] startSound(Var[53]);
[0052] breakHere();
[0053] Var[53]--;
[0055] unless (Var[53] < 72) goto 0050;
[005B] Var[51] = 230;
[005F] clearState08(Var[51]);
[0061] Var[51]++;
[0063] unless (Var[51] > 235) goto 005F;
[0069] stopObjectCode();
```

## OCv2_0230 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0230.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0230.txt); entry `0025`.

```text
[0025] unless (!Var[50]) goto 0039;
[0029] VAR_RESULT = isScriptRunning(64);
[002C] unless (!VAR_RESULT) goto 0039;
[0030] startSound(72);
[0032] doSentence(253,239,0,1);
[0039] stopObjectCode();
```

## OCv2_0230 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0230.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0230.txt); entry `0025`.

```text
[0025] unless (!Var[50]) goto 0039;
[0029] VAR_RESULT = isScriptRunning(64);
[002C] unless (!VAR_RESULT) goto 0039;
[0030] startSound(72);
[0032] doSentence(253,239,0,1);
[0039] stopObjectCode();
```

## OCv2_0230 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0230.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0230.txt); entry `0025`.

```text
[0025] unless (!Var[50]) goto 0039;
[0029] VAR_RESULT = isScriptRunning(64);
[002C] unless (!VAR_RESULT) goto 0039;
[0030] startSound(72);
[0032] doSentence(253,239,0,1);
[0039] stopObjectCode();
```

## OCv2_0230 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0230.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0230.txt); entry `0025`.

```text
[0025] unless (!Var[50]) goto 0039;
[0029] VAR_RESULT = isScriptRunning(64);
[002C] unless (!VAR_RESULT) goto 0039;
[0030] startSound(72);
[0032] doSentence(253,239,0,1);
[0039] stopObjectCode();
```

## OCv2_0230 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0230.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0230.txt); entry `003A`.

```text
[003A] Var[56] = 12;
[003E] setActorElevation(Var[233],Var[56]);
[0041] breakHere();
[0042] Var[56]++;
[0044] unless (Var[56] > 17) goto 003E;
[004A] print(Var[233],"I'm on!");
[0053] breakHere();
[0054] VAR_RESULT = getDist(Var[233],229);
[0059] unless (VAR_RESULT > 0) goto 0053;
[005F] setActorElevation(Var[233],0);
[0062] Var[233] = Var[234];
[0065] stopObjectCode();
```

## OCv2_0231 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0231.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0231.txt); entry `0026`.

```text
[0026] unless (!Var[50]) goto 003A;
[002A] VAR_RESULT = isScriptRunning(64);
[002D] unless (!VAR_RESULT) goto 003A;
[0031] startSound(73);
[0033] doSentence(253,239,0,1);
[003A] stopObjectCode();
```

## OCv2_0231 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0231.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0231.txt); entry `0026`.

```text
[0026] unless (!Var[50]) goto 003A;
[002A] VAR_RESULT = isScriptRunning(64);
[002D] unless (!VAR_RESULT) goto 003A;
[0031] startSound(73);
[0033] doSentence(253,239,0,1);
[003A] stopObjectCode();
```

## OCv2_0231 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0231.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0231.txt); entry `0026`.

```text
[0026] unless (!Var[50]) goto 003A;
[002A] VAR_RESULT = isScriptRunning(64);
[002D] unless (!VAR_RESULT) goto 003A;
[0031] startSound(73);
[0033] doSentence(253,239,0,1);
[003A] stopObjectCode();
```

## OCv2_0231 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0231.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0231.txt); entry `0026`.

```text
[0026] unless (!Var[50]) goto 003A;
[002A] VAR_RESULT = isScriptRunning(64);
[002D] unless (!VAR_RESULT) goto 003A;
[0031] startSound(73);
[0033] doSentence(253,239,0,1);
[003A] stopObjectCode();
```

## OCv2_0231 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0231.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0231.txt); entry `003B`.

```text
[003B] setBitVar(1573,0,Var[235]);
[0040] walkActorTo(7,68,56);
[0044] waitForActor(7);
[0046] animateActor(7,247);
[0049] setBitVar(1573,0,Var[234]);
[004E] stopObjectCode();
```

## OCv2_0232 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0232.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0232.txt); entry `0027`.

```text
[0027] unless (!Var[50]) goto 003B;
[002B] VAR_RESULT = isScriptRunning(64);
[002E] unless (!VAR_RESULT) goto 003B;
[0032] startSound(74);
[0034] doSentence(253,239,0,1);
[003B] stopObjectCode();
```

## OCv2_0232 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0232.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0232.txt); entry `0027`.

```text
[0027] unless (!Var[50]) goto 003B;
[002B] VAR_RESULT = isScriptRunning(64);
[002E] unless (!VAR_RESULT) goto 003B;
[0032] startSound(74);
[0034] doSentence(253,239,0,1);
[003B] stopObjectCode();
```

## OCv2_0232 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0232.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0232.txt); entry `0027`.

```text
[0027] unless (!Var[50]) goto 003B;
[002B] VAR_RESULT = isScriptRunning(64);
[002E] unless (!VAR_RESULT) goto 003B;
[0032] startSound(74);
[0034] doSentence(253,239,0,1);
[003B] stopObjectCode();
```

## OCv2_0232 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0232.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0232.txt); entry `0027`.

```text
[0027] unless (!Var[50]) goto 003B;
[002B] VAR_RESULT = isScriptRunning(64);
[002E] unless (!VAR_RESULT) goto 003B;
[0032] startSound(74);
[0034] doSentence(253,239,0,1);
[003B] stopObjectCode();
```

## OCv2_0232 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0232.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0232.txt); entry `003C`.

```text
[003C] breakHere();
[003D] VAR_RESULT = isScriptRunning(64);
[0040] unless (!VAR_RESULT) goto 003C;
[0044] VAR_RESULT = getActorRoom(1);
[0047] unless (VAR_RESULT == 10) goto 008A;
[004D] setBitVar(1568,0,Var[235]);
[0052] setBitVar(1559,6,Var[235]);
[0057] animateActor(1,246);
[005A] waitForActor(1);
[005C] printEgo("REPORTER BECOMES `SPACE CADET`\x01\x01IN SPACE CADILLAC!");
[008A] stopObjectCode();
```

## OCv2_0233 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0233.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0233.txt); entry `002C`.

```text
[002C] unless (!Var[50]) goto 0040;
[0030] VAR_RESULT = isScriptRunning(64);
[0033] unless (!VAR_RESULT) goto 0040;
[0037] startSound(75);
[0039] doSentence(253,239,0,1);
[0040] stopObjectCode();
```

## OCv2_0233 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0233.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0233.txt); entry `002C`.

```text
[002C] unless (!Var[50]) goto 0040;
[0030] VAR_RESULT = isScriptRunning(64);
[0033] unless (!VAR_RESULT) goto 0040;
[0037] startSound(75);
[0039] doSentence(253,239,0,1);
[0040] stopObjectCode();
```

## OCv2_0233 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0233.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0233.txt); entry `002C`.

```text
[002C] unless (!Var[50]) goto 0040;
[0030] VAR_RESULT = isScriptRunning(64);
[0033] unless (!VAR_RESULT) goto 0040;
[0037] startSound(75);
[0039] doSentence(253,239,0,1);
[0040] stopObjectCode();
```

## OCv2_0233 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0233.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0233.txt); entry `002C`.

```text
[002C] unless (!Var[50]) goto 0040;
[0030] VAR_RESULT = isScriptRunning(64);
[0033] unless (!VAR_RESULT) goto 0040;
[0037] startSound(75);
[0039] doSentence(253,239,0,1);
[0040] stopObjectCode();
```

## OCv2_0233 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0233.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0233.txt); entry `0041`.

```text
[0041] walkActorTo(11,66,36);
[0045] waitForActor(11);
[0047] animateActor(11,247);
[004A] stopObjectCode();
```

## OCv2_0234 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0234.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0234.txt); entry `0028`.

```text
[0028] unless (!Var[50]) goto 003C;
[002C] VAR_RESULT = isScriptRunning(64);
[002F] unless (!VAR_RESULT) goto 003C;
[0033] startSound(76);
[0035] doSentence(253,239,0,1);
[003C] stopObjectCode();
```

## OCv2_0234 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0234.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0234.txt); entry `0028`.

```text
[0028] unless (!Var[50]) goto 003C;
[002C] VAR_RESULT = isScriptRunning(64);
[002F] unless (!VAR_RESULT) goto 003C;
[0033] startSound(76);
[0035] doSentence(253,239,0,1);
[003C] stopObjectCode();
```

## OCv2_0234 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0234.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0234.txt); entry `0028`.

```text
[0028] unless (!Var[50]) goto 003C;
[002C] VAR_RESULT = isScriptRunning(64);
[002F] unless (!VAR_RESULT) goto 003C;
[0033] startSound(76);
[0035] doSentence(253,239,0,1);
[003C] stopObjectCode();
```

## OCv2_0234 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0234.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0234.txt); entry `0028`.

```text
[0028] unless (!Var[50]) goto 003C;
[002C] VAR_RESULT = isScriptRunning(64);
[002F] unless (!VAR_RESULT) goto 003C;
[0033] startSound(76);
[0035] doSentence(253,239,0,1);
[003C] stopObjectCode();
```

## OCv2_0234 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0234.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0234.txt); entry `003D`.

```text
[003D] Var[167] = 52;
[0041] Var[164] = 44;
[0045] setOwnerOf(40,7);
[0049] setOwnerOf(43,7);
[004D] setState04(328);
[0050] startScript(5);
[0052] stopObjectCode();
```

## OCv2_0235 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0235.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0235.txt); entry `0028`.

```text
[0028] unless (!Var[50]) goto 003C;
[002C] VAR_RESULT = isScriptRunning(64);
[002F] unless (!VAR_RESULT) goto 003C;
[0033] startSound(77);
[0035] doSentence(253,239,0,1);
[003C] stopObjectCode();
```

## OCv2_0235 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0235.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0235.txt); entry `0028`.

```text
[0028] unless (!Var[50]) goto 003C;
[002C] VAR_RESULT = isScriptRunning(64);
[002F] unless (!VAR_RESULT) goto 003C;
[0033] startSound(77);
[0035] doSentence(253,239,0,1);
[003C] stopObjectCode();
```

## OCv2_0235 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0235.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0235.txt); entry `0028`.

```text
[0028] unless (!Var[50]) goto 003C;
[002C] VAR_RESULT = isScriptRunning(64);
[002F] unless (!VAR_RESULT) goto 003C;
[0033] startSound(77);
[0035] doSentence(253,239,0,1);
[003C] stopObjectCode();
```

## OCv2_0235 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0235.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0235.txt); entry `0028`.

```text
[0028] unless (!Var[50]) goto 003C;
[002C] VAR_RESULT = isScriptRunning(64);
[002F] unless (!VAR_RESULT) goto 003C;
[0033] startSound(77);
[0035] doSentence(253,239,0,1);
[003C] stopObjectCode();
```

## OCv2_0235 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0235.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0235.txt); entry `003D`.

```text
[003D] breakHere();
[003E] VAR_RESULT = getActorX(VAR_EGO);
[0041] unless (VAR_RESULT > 50) goto 003D;
[0047] cutscene();
[0048] animateActor(VAR_EGO,255);
[004B] walkActorToActor(11,VAR_EGO,4);
[004F] waitForActor(11);
[0051] faceActor(VAR_EGO,11);
[0054] stopObjectCode();
```

## OCv2_0236 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0236.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0236.txt); entry `001F`.

```text
[001F] printEgo("It looks like Earth!");
[0032] stopObjectCode();
```

## OCv2_0236 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0236.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0236.txt); entry `0033`.

```text
[0033] Var[203]++;
[0035] breakHere();
[0036] unless (VAR_ACTIVE_VERB == 3) goto 01BD;
[003C] waitForActor(VAR_EGO);
[003E] faceActor(VAR_EGO,11);
[0041] stopObjectCode();
```

## OCv2_0237 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0237.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0237.txt); entry `0022`.

```text
[0022] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 0040;
[0026] setState04(VAR_ACTIVE_OBJECT1);
[0028] Var[66] = Var[234];
[002B] Var[67] = getRandomNr(9);
[002E] Var[14] = Var[66];
[0031] Var[14] += 212;
[0035] Var[Var[14]] = Var[67];
[0038] Var[66]++;
[003A] unless (Var[66] > 3) goto 002B;
[0040] printEgo("Tomorrow's Winning Lotto Number: \x02\x02");
[0060] Var[67] = Var[234];
[0063] Var[14] = Var[67];
[0066] Var[14] += 212;
[006A] Var[66] = Var[14];
[006D] printEgo("\x04\x42\x04 \x02\x02");
[0073] Var[67]++;
[0075] unless (Var[67] > 3) goto 0063;
[007B] printEgo("");
[007D] stopObjectCode();
```

## OCv2_0237 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0237.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0237.txt); entry `007E`.

```text
[007E] Var[45] = Var[235];
[0081] walkActorTo(11,57,36);
[0085] waitForActor(11);
[0087] walkActorTo(11,74,36);
[008B] waitForActor(11);
```

## OCv2_0238 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0238.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0238.txt); entry `0019`.

```text
[0019] printEgo("It doesn't seem to open.");
[002F] stopObjectCode();
```

## OCv2_0238 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0238.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0238.txt); entry `0030`.

```text
[0030] breakHere();
[0031] Var[54] = Var[234];
[0034] unless (Var[167] == 48) goto 00C3;
[003A] unless (Var[164] == 40) goto 00C3;
[0040] Var[54]++;
[0042] VAR_RESULT = isScriptRunning(100);
[0045] unless (!VAR_RESULT) goto 00C3;
[0049] stopScript(101);
[004B] animateActor(11,255);
[004E] stopScript(95);
[0050] animateActor(7,255);
[0053] setBitVar(1505,0,Var[234]);
[0058] loadScript(95)
[005B] print(11,"Hey! What's THAT ah see?");
[0072] walkActorToActor(11,VAR_EGO,2);
[0076] breakHere();
[0077] breakHere();
[0078] VAR_RESULT = getDist(VAR_EGO,11);
[007D] unless (VAR_RESULT <= 2) goto 0072;
[0083] setBitVar(1441,0,Var[235]);
[0088] animateActor(1,255);
[008B] faceActor(1,11);
[008E] stopObjectCode();
```

## OCv2_0239 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0239.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0239.txt); entry `0013`.

```text
[0013] Var[51] = VAR_ACTIVE_OBJECT1;
[0016] Var[50] = Var[235];
[0019] unless (!Var[49]) goto 0027;
[001D] setBitVar(1570,0,Var[234]);
[0022] setBitVar(1571,0,Var[234]);
[0027] drawObject(Var[51],255,255);
[002B] delay(36);
[002F] clearState08(Var[51]);
[0031] Var[47] = Var[235];
[0034] doSentence(253,229,0,1);
[003B] Var[14] = Var[49];
[003E] Var[14] += 113;
[0042] Var[66] = Var[14];
[0045] unless (Var[66] != Var[51]) goto 004F;
[004A] setBitVar(1570,0,Var[235]);
[004F] Var[49]++;
[0051] Var[66] += Var[49];
[0054] unless (Var[66] > 235) goto 0062;
[005A] Var[66] -= 235;
[005E] Var[66] += 229;
[0062] unless (Var[66] != Var[51]) goto 006C;
[0067] setBitVar(1571,0,Var[235]);
[006C] unless (Var[49] == 4) goto 00BF;
[0072] doSentence(254,229,0,1);
[0079] VAR_RESULT = getBitVar(1571,0);
[007E] unless (!VAR_RESULT) goto 0085;
[0085] VAR_RESULT = getBitVar(1570,0);
[008A] unless (!VAR_RESULT) goto 0093;
[008E] startScript(64);
[0093] Var[47] = Var[234];
[0096] doSentence(253,229,0,1);
[009D] delay(60);
[00A1] printEgo("I must have played the wrong tune.");
[00BF] Var[50] = Var[234];
[00C2] stopObjectCode();
```

## OCv2_0240 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0240.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0240.txt); entry `001D`.

```text
[001D] VAR_RESULT = isScriptRunning(64);
[0020] unless (!VAR_RESULT) goto 003A;
[0024] startSound(23);
[0026] unless (!getState08(238)) goto 003A;
[002B] breakHere();
[002C] unless (getState08(229)) goto 002B;
[0031] VAR_RESULT = isScriptRunning(100);
[0034] unless (!VAR_RESULT) goto 003A;
[0038] startScript(100);
[003A] stopObjectCode();
```

## OCv2_0240 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0240.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0240.txt); entry `001D`.

```text
[001D] VAR_RESULT = isScriptRunning(64);
[0020] unless (!VAR_RESULT) goto 003A;
[0024] startSound(23);
[0026] unless (!getState08(238)) goto 003A;
[002B] breakHere();
[002C] unless (getState08(229)) goto 002B;
[0031] VAR_RESULT = isScriptRunning(100);
[0034] unless (!VAR_RESULT) goto 003A;
[0038] startScript(100);
[003A] stopObjectCode();
```

## OCv2_0240 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0240.txt](../../zak/converted/scripts_flat/LFv2_0010/ROv2/OCv2_0240.txt); entry `003B`.

```text
[003B] ActorOps(11,[Costume(27)]);
[003F] ActorOps(11,[Sound(6)]);
[0043] ActorOps(11,[TalkColor(15)]);
[0047] ActorOps(11,[Name("The King")]);
[0054] ActorOps(7,[Name("Caponian")]);
[0061] VAR_RESULT = getActorRoom(11);
[0064] unless (VAR_RESULT != VAR_ROOM) goto 0073;
[0069] putActorInRoom(11,10);
[006C] putActor(11,66,36);
[0070] animateActor(11,251);
[0073] VAR_RESULT = getActorRoom(7);
[0076] unless (VAR_RESULT != VAR_ROOM) goto 0082;
[007B] putActorInRoom(7,10);
[007E] putActor(7,44,56);
[0082] Var[245] = 28;
[0086] startScript(5);
[0088] animateActor(11,24);
[008B] setBoxFlags(4,0);
[008E] setBoxFlags(5,0);
[0091] RoomScroll(20,100);
[0095] doSentence(250,238,0,1);
[009C] doSentence(253,236,0,1);
[00A3] Var[45] = Var[234];
[00A6] VAR_RESULT = isScriptRunning(101);
[00A9] unless (VAR_RESULT) goto 00B4;
[00AD] doSentence(253,237,0,1);
[00B4] stopObjectCode();
```

## SCv2_0064 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0010/SCv2_0064.txt](../../zak/converted/scripts_flat/LFv2_0010/SCv2_0064.txt); entry `0000`.

```text
[0000] Var[49] = Var[234];
[0003] delay(60);
[0007] startSound(45);
[0009] VAR_RESULT = getBitVar(1568,0);
[000E] unless (!VAR_RESULT) goto 001D;
[0012] doSentence(253,232,0,1);
[0019] delay(240);
[001D] delay(480);
[0021] Var[66] = Var[234];
[0024] unless (VAR_ROOM != 10) goto 003A;
[002A] VAR_RESULT = getActorRoom(1);
[002D] unless (VAR_RESULT != 10) goto 0038;
[0033] stopScript(0);
[0038] Var[66]++;
[003A] cutscene();
[003B] unless (Var[66]) goto 0047;
[003F] actorFollowCamera(1);
[0041] startSound(45);
[0043] delay(120);
[0047] RoomColor(15,7);
[004B] RoomColor(7,8);
[004F] RoomColor(7,0);
[0053] RoomColor(12,4);
[0057] RoomColor(15,12);
[005B] RoomColor(14,6);
[005F] RoomColor(15,14);
[0063] RoomColor(11,3);
[0067] RoomColor(15,11);
[006B] RoomColor(13,5);
[006F] RoomColor(15,13);
[0073] RoomColor(10,2);
[0077] RoomColor(15,10);
[007B] RoomColor(9,1);
[007F] RoomColor(15,9);
[0083] breakHere();
[0084] breakHere();
[0085] unless (!getState08(229)) goto 00B1;
[008A] doSentence(254,230,0,1);
[0091] setState08(229);
[0094] setState02(229);
[0097] setState08(239);
[009A] setBoxFlags(1,128);
[009D] setBoxFlags(2,128);
[00A0] setBoxFlags(0,0);
[00A3] lockCostume(11)
[00A6] putActorInRoom(11,0);
[00A9] setActorElevation(11,0);
[00AC] setBitVar(1510,0,Var[234]);
[00B1] Var[118] = Var[234];
[00B4] VAR_RESULT = getActorRoom(1);
[00B7] unless (VAR_RESULT == 10) goto 00DB;
[00BD] VAR_RESULT = getActorWalkBox(1);
[00C0] unless (VAR_RESULT <= 2) goto 00DB;
[00C6] VAR_EGO = 1;
[00CA] Var[118]++;
[00CC] lockCostume(1)
[00CF] ActorOps(1,[Costume(0)]);
[00D3] setCameraAt(VAR_CAMERA_POS_X);
[00D5] setActorElevation(1,0);
[00D8] putActorInRoom(1,0);
[00DB] breakHere();
[00DC] breakHere();
[00DD] RoomColor(7,7);
[00E1] RoomColor(8,8);
[00E5] RoomColor(0,0);
[00E9] RoomColor(4,4);
[00ED] RoomColor(12,12);
[00F1] RoomColor(6,6);
[00F5] RoomColor(14,14);
[00F9] RoomColor(3,3);
[00FD] RoomColor(11,11);
[0101] RoomColor(5,5);
[0105] RoomColor(13,13);
[0109] RoomColor(2,2);
[010D] RoomColor(10,10);
[0111] RoomColor(1,1);
[0115] RoomColor(9,9);
[0119] delay(30);
[011D] stopSound(45);
[011F] delay(120);
[0123] unless (Var[118]) goto 0184;
[0127] unless (Var[233]) goto 0184;
[012B] putActorInRoom(VAR_EGO,143);
[012E] putActor(VAR_EGO,2,60);
[0132] animateActor(VAR_EGO,248);
[0135] putActorInRoom(11,143);
[0138] putActor(11,5,60);
[013C] animateActor(11,248);
[013F] ActorOps(VAR_EGO,[Costume(Var[172])]);
[0143] setOwnerOf(77,0);
[0147] setOwnerOf(77,15);
[014B] loadRoom(143);
[014D] unlockCostume(1)
[0150] walkActorTo(11,22,60);
[0154] walkActorTo(1,18,60);
[0158] delay(120);
[015C] waitForActor(11);
[015E] animateActor(11,244);
[0161] waitForActor(11);
[0163] print(11,"Hope you had a nice ride!");
[017A] waitForMessage();
[017B] walkActorToObject(11,190);
[017F] waitForActor(11);
[0181] putActorInRoom(11,0);
[0184] unlockCostume(11)
[0187] endCutscene();
[0188] Var[199] = Var[235];
[018B] unless (Var[118]) goto 01C1;
[018F] unless (!Var[233]) goto 01C1;
[0193] VAR_RESULT = getBitVar(1571,0);
[0198] unless (!VAR_RESULT) goto 01BF;
[019C] cutscene();
[019D] putActorInRoom(1,1);
[01A0] putActor(1,20,60);
[01A4] actorFollowCamera(1);
[01A6] loadSound(89)
[01A9] animateActor(1,250);
[01AC] delay(120);
[01B0] startSound(89);
[01B2] ActorOps(VAR_EGO,[Costume(Var[172])]);
[01B6] startScript(5);
[01B8] unlockCostume(1)
[01BB] endCutscene();
[01BF] startScript(50);
[01C1] Var[233] = Var[234];
[01C4] stopObjectCode();
```

## SCv2_0100 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0010/SCv2_0100.txt](../../zak/converted/scripts_flat/LFv2_0010/SCv2_0100.txt); entry `0000`.

```text
[0000] cutscene();
[0001] delay(120);
[0005] doSentence(253,240,0,1);
[000C] startSound(25);
[000E] setState08(238);
[0011] setState02(238);
[0014] delay(60);
[0018] walkActorToActor(7,VAR_EGO,6);
[001C] waitForActor(7);
[001E] RoomScroll(20,100);
[0022] VAR_EGO = 7;
[0026] actorFollowCamera(VAR_EGO);
[0028] VAR_RESULT = getBitVar(1556,0);
[002D] unless (!VAR_RESULT) goto 0034;
[0031] animateActor(11,28);
[0034] VAR_RESULT = getBitVar(1505,0);
[0039] unless (VAR_RESULT) goto 0059;
[003D] printEgo("You again? Oh well, come in.");
[0059] unless (Var[54]) goto 0082;
[005D] printEgo("Hello! Here to visit The King? Come in!");
[0082] printEgo("A captive!\x03\x03Follow me to The King.");
[00A0] waitForMessage();
[00A1] doSentence(250,231,0,1);
[00A8] walkActorTo(1,64,56);
[00AC] waitForActor(1);
[00AE] animateActor(1,247);
[00B1] printEgo("Oh King, I have brought you a \x02\x02");
[00CB] unless (Var[54]) goto 00DC;
[00CF] printEgo("visitor.");
[00DC] printEgo("captive.");
[00E6] waitForMessage();
[00E7] animateActor(11,246);
[00EA] delay(120);
[00EE] VAR_RESULT = getBitVar(1556,0);
[00F3] unless (!VAR_RESULT) goto 0117;
[00F7] print(11,"Ooops!");
[0100] waitForMessage();
[0101] animateActor(11,247);
[0104] delay(60);
[0108] animateActor(11,24);
[010B] setBitVar(1556,0,Var[235]);
[0110] delay(60);
[0117] loadScript(101)
[011A] unless (Var[54]) goto 015F;
[011E] walkActorTo(11,64,50);
[0122] waitForActor(11);
[0124] doSentence(254,238,0,1);
[012B] doSentence(253,234,0,1);
[0132] delay(60);
[0136] walkActorTo(11,68,50);
[013A] print(11,"Tuna head! This isn't one of us!");
[0157] waitForActor(11);
[0159] animateActor(11,246);
[015F] print(11,"Ah see.");
[0168] VAR_EGO = 1;
[016C] waitForMessage();
[016D] endCutscene();
[016E] VAR_RESULT = getBitVar(1505,0);
[0173] unless (VAR_RESULT) goto 0188;
[0177] doSentence(253,235,0,1);
[017E] doSentence(250,231,0,1);
[0188] chainScript(101);
[018A] stopObjectCode();
```

## SCv2_0101 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0010/SCv2_0101.txt](../../zak/converted/scripts_flat/LFv2_0010/SCv2_0101.txt); entry `0000`.

```text
[0000] Var[199] = Var[234];
[0003] doSentence(253,237,0,1);
[000A] print(11,"Now what shall we do with him?");
[0025] Var[55] = Var[235];
[0028] waitForMessage();
[0029] unless (Var[55] == 1) goto 005B;
[002F] print(11,"Make him clean the meteor slime off\x01\x01our hull?");
[005B] unless (Var[55] == 2) goto 008B;
[0061] print(11,"Make him listen to New Age elevator\x01\x01music?");
[008B] unless (Var[55] == 3) goto 00B7;
[0091] print(11,"Make him play Ballblazer with Droid 9?");
[00B7] unless (Var[55] == 4) goto 00F2;
[00BD] print(11,"Glue money to him and toss him into a\x01\x01pit full of lawyers?");
[00EF] /* goto 00F2; */
[00F2] delay(240);
[00F6] waitForMessage();
[00F7] delay(120);
[00FB] waitForMessage();
[00FC] print(11,"Naw^");
[0103] Var[55]++;
[0105] unless (Var[55] > 4) goto 0028;
[010B] delay(300);
[010F] loadScript(95)
[0112] doSentence(254,237,0,1);
[0119] animateActor(11,255);
[011C] animateActor(11,246);
[011F] breakHere();
[0120] waitForMessage();
[0121] print(11,"Ah know, let's use the Mindbender.\x03\x03Get him!");
[0149] waitForMessage();
[014A] startScript(95);
[014C] delay(60);
[0150] doSentence(250,233,0,1);
[0157] stopObjectCode();
```

## SCv2_0103 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0010/SCv2_0103.txt](../../zak/converted/scripts_flat/LFv2_0010/SCv2_0103.txt); entry `0000`.

```text
[0000] cutscene();
[0001] stopScript(95);
[0003] animateActor(1,255);
[0006] waitForMessage();
[0007] unless (VAR_ACTIVE_OBJECT1 == 41) goto 0066;
[000D] loadSound(113)
[0010] animateActor(11,246);
[0013] print(11,"Ooo! Ah think ah feel a song comin' on!");
[0035] waitForMessage();
[0036] delay(60);
[003A] startSound(113);
[003C] animateActor(11,12);
[003F] delay(120);
[0043] animateActor(11,16);
[0046] delay(60);
[004A] print(11,"Nope. Just an upset stomach.");
[0065] waitForMessage();
[0066] Var[199] = Var[235];
[0069] VAR_RESULT = isScriptRunning(101);
[006C] unless (!VAR_RESULT) goto 0073;
[0073] stopScript(101);
[0075] print(11,"Ma friend will show ya how to leave.\x01\x01Come back'n visit any time, ya hear?");
[00B4] waitForMessage();
[00B5] doSentence(253,233,0,1);
[00BC] VAR_EGO = 7;
[00C0] walkActorToActor(7,1,3);
[00C4] waitForActor(7);
[00C6] printEgo("Come with me.");
[00D3] walkActorTo(7,30,50);
[00D7] delay(60);
[00DB] walkActorTo(1,32,54);
[00DF] waitForActor(7);
[00E1] animateActor(7,246);
[00E4] waitForActor(1);
[00E6] printEgo("Enter this sequence to return home.");
[0106] waitForMessage();
[0107] Var[56] = 0;
[010B] Var[14] = Var[56];
[010E] Var[14] += 113;
[0112] Var[66] = Var[14];
[0115] Var[66] += Var[56];
[0118] Var[66]++;
[011A] unless (Var[66] > 235) goto 0128;
[0120] Var[66] -= 235;
[0124] Var[66] += 229;
[0128] doSentence(9,Var[66],0,0);
[012E] waitForSentence();
[012F] breakHere();
[0130] unless (!Var[50]) goto 012F;
[0134] delay(30);
[0138] Var[56]++;
[013A] unless (Var[56] > 3) goto 010B;
[0140] printEgo("See ya.");
[0148] VAR_EGO = 1;
[014C] endCutscene();
[014D] doSentence(250,231,0,1);
[0154] stopObjectCode();
```
