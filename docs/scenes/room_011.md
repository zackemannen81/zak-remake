# Room 011 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/ENv2.txt); entry `0000`.

```text
[0000] startScript(121);
[0002] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/EXv2.txt); entry `0000`.

```text
[0000] ActorOps(9,[Name()]);
[0005] stopSound(17);
[0007] stopSound(42);
[0009] stopSound(109);
[000B] stopSound(105);
[000D] stopSound(19);
[000F] VAR_RESULT = getActorRoom(VAR_EGO);
[0012] unless (VAR_RESULT != 11) goto 0021;
[0018] stopScript(36);
[001A] stopScript(116);
[001C] stopScript(106);
[001E] Var[248] = Var[234];
[0021] stopScript(104);
[0023] ActorOps(Var[52],[Sound(6)]);
[0027] Var[203] = Var[234];
[002A] setVarRange(Var[42],2,[1,4]);
[002F] stopObjectCode();
```

## OCv2_0047 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0047.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0047.txt); entry `0024`.

```text
[0024] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0029] stopObjectCode();
```

## OCv2_0047 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0047.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0047.txt); entry `0021`.

```text
[0021] pickupObject(VAR_ACTIVE_OBJECT1);
[0023] stopObjectCode();
```

## OCv2_0048 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0048.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0048.txt); entry `001E`.

```text
[001E] doSentence(253,259,0,1);
[0025] stopObjectCode();
```

## OCv2_0048 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0048.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0048.txt); entry `0026`.

```text
[0026] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002B] stopObjectCode();
```

## OCv2_0048 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0048.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0048.txt); entry `001E`.

```text
[001E] doSentence(253,259,0,1);
[0025] stopObjectCode();
```

## OCv2_0049 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0049.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0049.txt); entry `0054`.

```text
[0046] printEgo("It's too wet!");
[0053] stopObjectCode();
[0054] unless (VAR_ROOM == 31) goto 005D;
[005D] unless (Var[154]) goto 0073;
[0061] printEgo("There's no air!");
[0073] unless (Var[222] < 30) goto 008C;
[0079] setState04(VAR_ACTIVE_OBJECT1);
[007B] setObjectName(VAR_ACTIVE_OBJECT1,"lit lighter");
[008C] printEgo("It's too hot!");
[0099] stopObjectCode();
```

## OCv2_0049 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0049.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0049.txt); entry `009A`.

```text
[009A] clearState04(49);
[009D] setObjectName(49,"lighter");
[00A8] unless (VAR_CURRENT_LIGHTS == 12) goto 00B2;
[00AE] lights(Var[234],0,0);
[00B2] stopObjectCode();
```

## OCv2_0049 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0049.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0049.txt); entry `0027`.

```text
[0027] unless (VAR_ROOM != 31) goto 0046;
[002D] unless (Var[154]) goto 0034;
[0034] unless (classOfIs(VAR_ACTIVE_OBJECT2,1)) goto 003E;
[0039] startScript(138);
[003E] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0046] printEgo("It's too wet!");
[0053] stopObjectCode();
[0061] printEgo("There's no air!");
[0099] stopObjectCode();
```

## OCv2_0049 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0049.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0049.txt); entry `0024`.

```text
[0024] pickupObject(VAR_ACTIVE_OBJECT1);
[0026] stopObjectCode();
```

## OCv2_0050 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt); entry `0076`.

```text
[0076] unless (Var[164] == 60) goto 008A;
[007C] Var[164] = 44;
[0080] animateActor(1,Var[164]);
[0083] doSentence(254,50,0,1);
[008A] unless (VAR_ACTIVE_VERB == 3) goto 0092;
[0090] startScript(20);
[0092] stopObjectCode();
```

## OCv2_0050 / verb 6
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt); entry `0032`.

```text
[0032] unless (VAR_EGO != 1) goto 0043;
[0038] printEgo("No way!");
[0043] unless (!Var[205]) goto 004A;
[004A] unless (Var[164] == 40) goto 0067;
[0050] printEgo("Gotta remove my glasses.");
[0067] Var[164] = 60;
[006B] animateActor(1,Var[164]);
[006E] doSentence(253,50,0,1);
[0075] stopObjectCode();
[0076] unless (Var[164] == 60) goto 008A;
[007C] Var[164] = 44;
[0080] animateActor(1,Var[164]);
[0083] doSentence(254,50,0,1);
[008A] unless (VAR_ACTIVE_VERB == 3) goto 0092;
[0090] startScript(20);
[0092] stopObjectCode();
[00A3] print(1,"I'm out of oxygen!");
```

## OCv2_0050 / verb 7
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt); entry `0076`.

```text
[0076] unless (Var[164] == 60) goto 008A;
[007C] Var[164] = 44;
[0080] animateActor(1,Var[164]);
[0083] doSentence(254,50,0,1);
[008A] unless (VAR_ACTIVE_VERB == 3) goto 0092;
[0090] startScript(20);
[0092] stopObjectCode();
```

## OCv2_0050 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt); entry `0032`.

```text
[0032] unless (VAR_EGO != 1) goto 0043;
[0038] printEgo("No way!");
[0043] unless (!Var[205]) goto 004A;
[004A] unless (Var[164] == 40) goto 0067;
[0050] printEgo("Gotta remove my glasses.");
[0067] Var[164] = 60;
[006B] animateActor(1,Var[164]);
[006E] doSentence(253,50,0,1);
[0075] stopObjectCode();
[0076] unless (Var[164] == 60) goto 008A;
[007C] Var[164] = 44;
[0080] animateActor(1,Var[164]);
[0083] doSentence(254,50,0,1);
[008A] unless (VAR_ACTIVE_VERB == 3) goto 0092;
[0090] startScript(20);
[0092] stopObjectCode();
[00A3] print(1,"I'm out of oxygen!");
```

## OCv2_0050 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt); entry `0093`.

```text
[0093] Var[66] = Var[205];
[0096] startScript(71);
[0098] stopObjectCode();
```

## OCv2_0050 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt); entry `002A`.

```text
[002A] doSentence(253,262,0,1);
[0031] stopObjectCode();
```

## OCv2_0050 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0050.txt); entry `0099`.

```text
[0076] unless (Var[164] == 60) goto 008A;
[007C] Var[164] = 44;
[0080] animateActor(1,Var[164]);
[0083] doSentence(254,50,0,1);
[008A] unless (VAR_ACTIVE_VERB == 3) goto 0092;
[0090] startScript(20);
[0092] stopObjectCode();
[0099] delay(900);
[009D] Var[205]--;
[009F] unless (!Var[205]) goto 0099;
[00A3] print(1,"I'm out of oxygen!");
```

## OCv2_0241 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0241.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0241.txt); entry `0021`.

```text
[0021] printEgo("I'm not cleaning up that mess!");
[003C] stopObjectCode();
```

## OCv2_0241 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0241.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0241.txt); entry `003D`.

```text
[003D] delay(28800);
[0041] Var[53]++;
[0043] stopObjectCode();
```

## OCv2_0242 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0242.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0242.txt); entry `001D`.

```text
[001D] setState08(VAR_ACTIVE_OBJECT1);
[001F] startSound(17);
[0021] doSentence(253,242,0,1);
[0028] stopObjectCode();
```

## OCv2_0242 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0242.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0242.txt); entry `0029`.

```text
[0029] clearState08(VAR_ACTIVE_OBJECT1);
[002B] doSentence(254,242,0,1);
[0032] stopSound(17);
[0034] startSound(42);
[0036] stopObjectCode();
```

## OCv2_0242 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0242.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0242.txt); entry `0037`.

```text
[0037] unless (VAR_ACTIVE_OBJECT2 == 14) goto 005A;
[003D] unless (Var[138] == Var[234]) goto 005A;
[0042] printEgo("I'd never get her back!");
[005A] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 0078;
[005E] printEgo("It's already clogged up.");
[0078] unless (classOfIs(VAR_ACTIVE_OBJECT2,1)) goto 009F;
[007D] setOwnerOf(VAR_ACTIVE_OBJECT2,0);
[0080] setState04(VAR_ACTIVE_OBJECT1);
[0082] printEgo("OK, but that could clog it up.");
[009F] startScript(3);
[00A1] stopObjectCode();
```

## OCv2_0242 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0242.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0242.txt); entry `00A2`.

```text
[00A2] breakHere();
[00A3] unless (getState04(242)) goto 00A2;
[00A8] VAR_RESULT = getActorX(VAR_EGO);
[00AB] unless (VAR_RESULT < 15) goto 00CD;
[00B1] waitForMessage();
[00B2] unless (!getState08(265)) goto 00CD;
[00B7] printEgo("It's going to overflow!");
[00CD] delay(600);
[00D1] setState08(265);
[00D4] clearState02(265);
[00D7] stopObjectCode();
```

## OCv2_0243 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0243.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0243.txt); entry `0019`.

```text
[0019] unless (VAR_EGO == 1) goto 0024;
[001F] startScript(38);
[0024] printEgo("I don't have to!");
[0033] stopObjectCode();
```

## OCv2_0244 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0244.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0244.txt); entry `0024`.

```text
[0024] startSound(22);
[0026] breakHere();
[0027] VAR_RESULT = isSoundRunning(22);
[002A] unless (!VAR_RESULT) goto 0026;
[002E] unless (getState08(242)) goto 0035;
[0033] startSound(17);
[0035] stopObjectCode();
```

## OCv2_0244 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0244.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0244.txt); entry `0024`.

```text
[0024] startSound(22);
[0026] breakHere();
[0027] VAR_RESULT = isSoundRunning(22);
[002A] unless (!VAR_RESULT) goto 0026;
[002E] unless (getState08(242)) goto 0035;
[0033] startSound(17);
[0035] stopObjectCode();
```

## OCv2_0244 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0244.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0244.txt); entry `0024`.

```text
[0024] startSound(22);
[0026] breakHere();
[0027] VAR_RESULT = isSoundRunning(22);
[002A] unless (!VAR_RESULT) goto 0026;
[002E] unless (getState08(242)) goto 0035;
[0033] startSound(17);
[0035] stopObjectCode();
```

## OCv2_0245 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0245.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0245.txt); entry `0022`.

```text
[0022] startSound(38);
[0024] breakHere();
[0025] VAR_RESULT = isSoundRunning(38);
[0028] unless (!VAR_RESULT) goto 0024;
[002C] breakHere();
[002D] unless (!Var[248]) goto 002C;
[0031] VAR_RESULT = isScriptRunning(106);
[0034] unless (!VAR_RESULT) goto 003A;
[0038] startScript(106);
[003A] stopObjectCode();
```

## OCv2_0245 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0245.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0245.txt); entry `0022`.

```text
[0022] startSound(38);
[0024] breakHere();
[0025] VAR_RESULT = isSoundRunning(38);
[0028] unless (!VAR_RESULT) goto 0024;
[002C] breakHere();
[002D] unless (!Var[248]) goto 002C;
[0031] VAR_RESULT = isScriptRunning(106);
[0034] unless (!VAR_RESULT) goto 003A;
[0038] startScript(106);
[003A] stopObjectCode();
```

## OCv2_0245 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0245.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0245.txt); entry `003B`.

```text
[003B] printEgo("In case of emergency, push button.");
[005A] stopObjectCode();
```

## OCv2_0246 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0246.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0246.txt); entry `001D`.

```text
[001D] doSentence(253,246,0,1);
[0024] stopObjectCode();
```

## OCv2_0246 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0246.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0246.txt); entry `0025`.

```text
[0025] doSentence(253,248,0,1);
[002C] stopObjectCode();
```

## OCv2_0246 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0246.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0246.txt); entry `002D`.

```text
[002D] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0039;
[0031] walkActorTo(VAR_EGO,10,60);
[0035] VAR_SENTENCE_OBJECT1 = 247;
[0039] stopObjectCode();
```

## OCv2_0246 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0246.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0246.txt); entry `003A`.

```text
[003A] unless (!getState08(248)) goto 004F;
[003F] unless (!getState08(246)) goto 0049;
[0044] setState08(246);
[0047] startSound(10);
[0049] setBoxFlags(1,0);
[004F] printEgo("It's occupied.");
[005E] stopObjectCode();
```

## OCv2_0247 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0247.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0247.txt); entry `001B`.

```text
[001B] doSentence(253,251,0,1);
[0022] stopObjectCode();
```

## OCv2_0247 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0247.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0247.txt); entry `0023`.

```text
[0023] doSentence(253,252,0,1);
[002A] stopObjectCode();
```

## OCv2_0247 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0247.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0247.txt); entry `002B`.

```text
[002B] Var[203] = Var[235];
[002E] breakHere();
[002F] unless (VAR_ACTIVE_VERB == 3) goto 0079;
[0035] unless (VAR_ACTIVE_OBJECT2 == 9) goto 0079;
[003B] waitForActor(VAR_EGO);
[003D] unless (!getState08(248)) goto 0076;
[0042] unless (VAR_EGO == 1) goto 0069;
[0048] print(9,"There's NOTHING I want from you!");
[0069] print(9,"No, thanks.");
[0076] VAR_ACTIVE_OBJECT2 = Var[234];
```

## OCv2_0248 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0248.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0248.txt); entry `0019`.

```text
[0019] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0028;
[001D] printEgo("Vacant");
[0028] printEgo("Occupied");
[0032] stopObjectCode();
```

## OCv2_0248 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0248.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0248.txt); entry `0033`.

```text
[0033] unless (getState08(246)) goto 003D;
[0038] clearState08(246);
[003B] startSound(11);
[003D] setBoxFlags(1,64);
[0040] stopObjectCode();
```

## OCv2_0249 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0249.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0249.txt); entry `001A`.

```text
[001A] Var[50] = 18;
[002A] Var[51] = VAR_ACTIVE_OBJECT1;
[002D] Var[51] -= 249;
[0031] startScript(10);
[0033] unless (Var[101] < 6) goto 0057;
[0039] Var[14] = Var[51];
[003C] Var[14] += 84;
[0040] unless (!Var[14]) goto 0057;
[0044] Var[14] = Var[51];
[0047] Var[14] += 84;
[004B] Var[15] = Var[101];
[004E] Var[15] += 186;
[0052] Var[Var[14]] = Var[15];
[0055] Var[101]++;
[0057] Var[14] = Var[51];
[005A] Var[14] += 84;
[005E] unless (Var[14] > 1) goto 0078;
[0064] Var[14] = Var[51];
[0067] Var[14] += 84;
[006B] drawObject(Var[14],Var[50],4);
[006F] Var[14] = Var[51];
[0072] Var[14] += 84;
[0076] clearState02(Var[14]);
[0078] delay(60);
[007C] unless (!Var[248]) goto 0089;
[0080] VAR_RESULT = isScriptRunning(105);
[0083] unless (!VAR_RESULT) goto 0089;
[0087] startScript(105);
[0089] stopObjectCode();
```

## OCv2_0249 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0249.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0249.txt); entry `0022`.

```text
[0022] doSentence(253,250,0,1);
[0029] stopObjectCode();
```

## OCv2_0249 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0249.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0249.txt); entry `002A`.

```text
[002A] Var[51] = VAR_ACTIVE_OBJECT1;
[002D] Var[51] -= 249;
[0031] startScript(10);
[0033] unless (Var[101] < 6) goto 0057;
[0039] Var[14] = Var[51];
[003C] Var[14] += 84;
[0040] unless (!Var[14]) goto 0057;
[0044] Var[14] = Var[51];
[0047] Var[14] += 84;
[004B] Var[15] = Var[101];
[004E] Var[15] += 186;
[0052] Var[Var[14]] = Var[15];
[0055] Var[101]++;
[0057] Var[14] = Var[51];
[005A] Var[14] += 84;
[005E] unless (Var[14] > 1) goto 0078;
[0064] Var[14] = Var[51];
[0067] Var[14] += 84;
[006B] drawObject(Var[14],Var[50],4);
[006F] Var[14] = Var[51];
[0072] Var[14] += 84;
[0076] clearState02(Var[14]);
[0078] delay(60);
[007C] unless (!Var[248]) goto 0089;
[0080] VAR_RESULT = isScriptRunning(105);
[0083] unless (!VAR_RESULT) goto 0089;
[0087] startScript(105);
[0089] stopObjectCode();
```

## OCv2_0250 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0250.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0250.txt); entry `001A`.

```text
[001A] Var[50] = 29;
[001E] doSentence(253,249,0,1);
[0025] stopObjectCode();
```

## OCv2_0250 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0250.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0250.txt); entry `0026`.

```text
[0026] doSentence(253,250,0,1);
[002D] stopObjectCode();
```

## OCv2_0250 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0250.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0250.txt); entry `002E`.

```text
[002E] startScript(11);
[0030] Var[51] = VAR_ACTIVE_OBJECT1;
[0033] Var[51] -= 249;
[0037] Var[14] = Var[51];
[003A] Var[14] += 84;
[003E] unless (Var[14] > 1) goto 0056;
[0044] Var[14] = Var[51];
[0047] Var[14] += 84;
[004B] clearState08(Var[14]);
[004D] Var[14] = Var[51];
[0050] Var[14] += 84;
[0054] setState02(Var[14]);
[0056] stopObjectCode();
```

## OCv2_0251 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0251.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0251.txt); entry `001A`.

```text
[001A] Var[50] = 40;
[001E] doSentence(253,249,0,1);
[0025] stopObjectCode();
```

## OCv2_0251 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0251.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0251.txt); entry `0026`.

```text
[0026] doSentence(253,250,0,1);
[002D] stopObjectCode();
```

## OCv2_0251 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0251.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0251.txt); entry `002E`.

```text
[002E] clearState08(248);
[0031] doSentence(253,246,0,1);
[0038] stopObjectCode();
```

## OCv2_0252 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0252.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0252.txt); entry `001A`.

```text
[001A] Var[50] = 51;
[001E] doSentence(253,249,0,1);
[0025] stopObjectCode();
```

## OCv2_0252 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0252.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0252.txt); entry `0026`.

```text
[0026] doSentence(253,250,0,1);
[002D] stopObjectCode();
```

## OCv2_0252 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0252.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0252.txt); entry `002E`.

```text
[002E] setState08(248);
[0031] doSentence(253,248,0,1);
[0038] stopObjectCode();
```

## OCv2_0253 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0253.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0253.txt); entry `001A`.

```text
[001A] Var[50] = 62;
[001E] doSentence(253,249,0,1);
[0025] stopObjectCode();
```

## OCv2_0253 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0253.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0253.txt); entry `0026`.

```text
[0026] doSentence(253,250,0,1);
[002D] stopObjectCode();
```

## OCv2_0253 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0253.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0253.txt); entry `002E`.

```text
[002E] stopScript(36);
[0030] clearState08(261);
[0033] stopSound(19);
[0035] startSound(42);
[0037] unless (getState08(241)) goto 0050;
[003C] printEgo("I think it's too late!");
[0050] stopObjectCode();
```

## OCv2_0254 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0254.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0254.txt); entry `001A`.

```text
[001A] Var[50] = 73;
[001E] doSentence(253,249,0,1);
[0025] stopObjectCode();
```

## OCv2_0254 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0254.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0254.txt); entry `0026`.

```text
[0026] doSentence(253,250,0,1);
[002D] stopObjectCode();
```

## OCv2_0254 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0254.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0254.txt); entry `002E`.

```text
[002E] unless (!getState08(260)) goto 0049;
[0033] stopScript(36);
[0035] stopSound(19);
[0037] startSound(42);
[0039] clearState08(261);
[003C] setState08(260);
[003F] startSound(10);
[0041] unless (getState08(241)) goto 0049;
[0046] clearState02(241);
[0049] stopObjectCode();
```

## OCv2_0255 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0255.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0255.txt); entry `0019`.

```text
[0019] setBoxFlags(4,160);
[001C] putActor(VAR_EGO,63,52);
[0020] setActorElevation(VAR_EGO,252);
[0023] animateActor(VAR_EGO,249);
[0026] clearState08(263);
[0029] unless (VAR_EGO == 2) goto 0035;
[002F] setState08(775);
[0035] unless (getState04(39)) goto 003D;
[003A] setState08(774);
[003D] startScript(150);
[003F] VAR_ACTIVE_OBJECT1 = Var[234];
[0042] stopObjectCode();
```

## OCv2_0255 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0255.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0255.txt); entry `0019`.

```text
[0019] setBoxFlags(4,160);
[001C] putActor(VAR_EGO,63,52);
[0020] setActorElevation(VAR_EGO,252);
[0023] animateActor(VAR_EGO,249);
[0026] clearState08(263);
[0029] unless (VAR_EGO == 2) goto 0035;
[002F] setState08(775);
[0035] unless (getState04(39)) goto 003D;
[003A] setState08(774);
[003D] startScript(150);
[003F] VAR_ACTIVE_OBJECT1 = Var[234];
[0042] stopObjectCode();
```

## OCv2_0256 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0256.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0256.txt); entry `001D`.

```text
[001D] unless (VAR_EGO != 9) goto 0040;
[0023] printEgo("I'd depressurize the plane!");
[0040] startScript(10);
[0042] stopObjectCode();
```

## OCv2_0256 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0256.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0256.txt); entry `0043`.

```text
[0043] startScript(11);
[0045] stopObjectCode();
```

## OCv2_0256 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0256.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0256.txt); entry `0046`.

```text
[0046] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0054;
[004A] Var[52] = VAR_EGO;
[004D] startScript(120);
[004F] loadRoomWithEgo(Var[45],Var[44],8,60);
[0054] stopObjectCode();
```

## OCv2_0256 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0256.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0256.txt); entry `0055`.

```text
[0055] unless (getState08(260)) goto 005F;
[005A] startSound(11);
[005C] clearState08(260);
[005F] setState02(241);
[0062] stopObjectCode();
```

## OCv2_0257 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0257.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0257.txt); entry `0021`.

```text
[0021] printEgo("I'd better not, the owner might get mad.");
[0044] stopObjectCode();
```

## OCv2_0257 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0257.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0257.txt); entry `0021`.

```text
[0021] printEgo("I'd better not, the owner might get mad.");
[0044] stopObjectCode();
```

## OCv2_0257 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0257.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0257.txt); entry `0021`.

```text
[0021] printEgo("I'd better not, the owner might get mad.");
[0044] stopObjectCode();
```

## OCv2_0257 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0257.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0257.txt); entry `0021`.

```text
[0021] printEgo("I'd better not, the owner might get mad.");
[0044] stopObjectCode();
```

## OCv2_0258 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0258.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0258.txt); entry `0023`.

```text
[0023] doSentence(VAR_ACTIVE_VERB,257,0,1);
[002A] stopObjectCode();
```

## OCv2_0258 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0258.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0258.txt); entry `0023`.

```text
[0023] doSentence(VAR_ACTIVE_VERB,257,0,1);
[002A] stopObjectCode();
```

## OCv2_0258 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0258.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0258.txt); entry `0023`.

```text
[0023] doSentence(VAR_ACTIVE_VERB,257,0,1);
[002A] stopObjectCode();
```

## OCv2_0258 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0258.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0258.txt); entry `0023`.

```text
[0023] doSentence(VAR_ACTIVE_VERB,257,0,1);
[002A] stopObjectCode();
```

## OCv2_0258 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0258.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0258.txt); entry `002B`.

```text
[002B] VAR_RESULT = getActorX(Var[52]);
[002E] unless (VAR_RESULT <= 12) goto 0053;
[0034] unless (!getState02(246)) goto 0043;
[0039] setState02(246);
[003C] clearState02(247);
[003F] RoomScroll(20,80);
[0043] unless (!getState08(246)) goto 0050;
[0048] unless (!getState08(248)) goto 0050;
[004D] setState08(248);
[0053] unless (!getState02(247)) goto 0062;
[0058] clearState02(246);
[005B] setState02(247);
[005E] RoomScroll(33,80);
[0062] unless (!getState08(263)) goto 00BB;
[0067] setBoxFlags(4,160);
[006A] breakHere();
[006B] VAR_RESULT = getActorX(Var[52]);
[006E] unless (VAR_RESULT != 63) goto 006A;
[0074] Var[57] = VAR_VIRT_MOUSE_X;
[0077] Var[58] = VAR_VIRT_MOUSE_Y;
[007A] VAR_RESULT = findObject(VAR_VIRT_MOUSE_X,VAR_VIRT_MOUSE_Y);
[007E] unless (!VAR_RESULT) goto 0085;
[0082] VAR_ACTIVE_OBJECT1 = Var[234];
[0085] setState08(263);
[0088] clearState08(774);
[008B] clearState08(775);
[008E] setActorElevation(Var[52],0);
[0091] walkActorTo(Var[52],68,52);
[0095] setBitVar(1440,Var[52],Var[235]);
[009A] doSentence(STOP);
[009C] waitForActor(Var[52]);
[009E] setBitVar(1440,Var[52],Var[234]);
[00A3] setBoxFlags(4,128);
[00A6] unless (VAR_ACTIVE_OBJECT1) goto 00B7;
[00AA] unless (Var[137] == Var[52]) goto 00B7;
[00AF] doSentence(VAR_ACTIVE_VERB,VAR_ACTIVE_OBJECT1,VAR_ACTIVE_OBJECT2,0);
[00B7] walkActorTo(Var[52],Var[57],Var[58]);
[00BB] breakHere();
```

## OCv2_0259 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0259.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0259.txt); entry `0023`.

```text
[0023] doSentence(VAR_ACTIVE_VERB,257,0,1);
[002A] stopObjectCode();
```

## OCv2_0259 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0259.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0259.txt); entry `0023`.

```text
[0023] doSentence(VAR_ACTIVE_VERB,257,0,1);
[002A] stopObjectCode();
```

## OCv2_0259 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0259.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0259.txt); entry `0023`.

```text
[0023] doSentence(VAR_ACTIVE_VERB,257,0,1);
[002A] stopObjectCode();
```

## OCv2_0259 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0259.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0259.txt); entry `0023`.

```text
[0023] doSentence(VAR_ACTIVE_VERB,257,0,1);
[002A] stopObjectCode();
```

## OCv2_0259 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0259.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0259.txt); entry `002B`.

```text
[002B] unless (VAR_EGO == 1) goto 0064;
[0031] unless (Var[248]) goto 0058;
[0035] pickupObject(48);
[0038] clearState08(49);
[003B] clearState02(49);
[003E] delay(60);
[0042] animateActor(VAR_EGO,244);
[0045] waitForActor(VAR_EGO);
[0047] waitForMessage();
[0048] printEgo("What's that?");
[0058] VAR_RESULT = isScriptRunning(105);
[005B] unless (!VAR_RESULT) goto 0061;
[005F] startScript(105);
[0064] printEgo("That's only for emergencies.");
[007F] stopObjectCode();
```

## OCv2_0260 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0260.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0260.txt); entry `0031`.

```text
[0031] unless (Var[248]) goto 00BD;
[0035] unless (VAR_ACTIVE_VERB == 1) goto 0045;
[003B] doSentence(253,254,0,1);
[0045] unless (VAR_ACTIVE_VERB == 11) goto 009F;
[004B] unless (VAR_ACTIVE_OBJECT2 == 22) goto 0074;
[0051] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 005F;
[0055] setOwnerOf(22,14);
[0059] clearState08(262);
[005F] printEgo("The door is closed.");
[0074] unless (VAR_ACTIVE_OBJECT2 == 14) goto 008D;
[007A] unless (Var[138] == Var[234]) goto 008D;
[007F] printEgo("Not Sushi!");
[008D] printEgo("I'd better not.");
[009F] unless (VAR_ACTIVE_VERB == 4) goto 00AA;
[00A5] startScript(36);
[00AA] unless (VAR_ACTIVE_VERB == 5) goto 00BA;
[00B0] doSentence(253,253,0,1);
[00B7] /* goto 00BA; */
[00BD] VAR_RESULT = isScriptRunning(105);
[00C0] unless (!VAR_RESULT) goto 00C6;
[00C4] startScript(105);
[00C6] stopObjectCode();
```

## OCv2_0260 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0260.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0260.txt); entry `0029`.

```text
[0029] doSentence(253,256,0,1);
[0030] stopObjectCode();
```

## OCv2_0260 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0260.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0260.txt); entry `0031`.

```text
[0031] unless (Var[248]) goto 00BD;
[0035] unless (VAR_ACTIVE_VERB == 1) goto 0045;
[003B] doSentence(253,254,0,1);
[0045] unless (VAR_ACTIVE_VERB == 11) goto 009F;
[004B] unless (VAR_ACTIVE_OBJECT2 == 22) goto 0074;
[0051] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 005F;
[0055] setOwnerOf(22,14);
[0059] clearState08(262);
[005F] printEgo("The door is closed.");
[0074] unless (VAR_ACTIVE_OBJECT2 == 14) goto 008D;
[007A] unless (Var[138] == Var[234]) goto 008D;
[007F] printEgo("Not Sushi!");
[008D] printEgo("I'd better not.");
[009F] unless (VAR_ACTIVE_VERB == 4) goto 00AA;
[00A5] startScript(36);
[00AA] unless (VAR_ACTIVE_VERB == 5) goto 00BA;
[00B0] doSentence(253,253,0,1);
[00B7] /* goto 00BA; */
[00BD] VAR_RESULT = isScriptRunning(105);
[00C0] unless (!VAR_RESULT) goto 00C6;
[00C4] startScript(105);
[00C6] stopObjectCode();
```

## OCv2_0260 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0260.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0260.txt); entry `0031`.

```text
[0031] unless (Var[248]) goto 00BD;
[0035] unless (VAR_ACTIVE_VERB == 1) goto 0045;
[003B] doSentence(253,254,0,1);
[0045] unless (VAR_ACTIVE_VERB == 11) goto 009F;
[004B] unless (VAR_ACTIVE_OBJECT2 == 22) goto 0074;
[0051] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 005F;
[0055] setOwnerOf(22,14);
[0059] clearState08(262);
[005F] printEgo("The door is closed.");
[0074] unless (VAR_ACTIVE_OBJECT2 == 14) goto 008D;
[007A] unless (Var[138] == Var[234]) goto 008D;
[007F] printEgo("Not Sushi!");
[008D] printEgo("I'd better not.");
[009F] unless (VAR_ACTIVE_VERB == 4) goto 00AA;
[00A5] startScript(36);
[00AA] unless (VAR_ACTIVE_VERB == 5) goto 00BA;
[00B0] doSentence(253,253,0,1);
[00B7] /* goto 00BA; */
[00BD] VAR_RESULT = isScriptRunning(105);
[00C0] unless (!VAR_RESULT) goto 00C6;
[00C4] startScript(105);
[00C6] stopObjectCode();
```

## OCv2_0260 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0260.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0260.txt); entry `0031`.

```text
[0031] unless (Var[248]) goto 00BD;
[0035] unless (VAR_ACTIVE_VERB == 1) goto 0045;
[003B] doSentence(253,254,0,1);
[0045] unless (VAR_ACTIVE_VERB == 11) goto 009F;
[004B] unless (VAR_ACTIVE_OBJECT2 == 22) goto 0074;
[0051] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 005F;
[0055] setOwnerOf(22,14);
[0059] clearState08(262);
[005F] printEgo("The door is closed.");
[0074] unless (VAR_ACTIVE_OBJECT2 == 14) goto 008D;
[007A] unless (Var[138] == Var[234]) goto 008D;
[007F] printEgo("Not Sushi!");
[008D] printEgo("I'd better not.");
[009F] unless (VAR_ACTIVE_VERB == 4) goto 00AA;
[00A5] startScript(36);
[00AA] unless (VAR_ACTIVE_VERB == 5) goto 00BA;
[00B0] doSentence(253,253,0,1);
[00B7] /* goto 00BA; */
[00BD] VAR_RESULT = isScriptRunning(105);
[00C0] unless (!VAR_RESULT) goto 00C6;
[00C4] startScript(105);
[00C6] stopObjectCode();
```

## OCv2_0261 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0261.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0261.txt); entry `0013`.

```text
[0013] breakHere();
[0014] stopScript(116);
[0016] VAR_RESULT = getActorX(9);
[0019] unless (VAR_RESULT <= 12) goto 002B;
[001F] unless (!getState08(246)) goto 002B;
[0024] doSentence(253,251,0,1);
[002B] Var[55] = 249;
[002F] unless (getState08(Var[55])) goto 0072;
[0033] walkActorToObject(9,Var[55]);
[0036] waitForActor(9);
[0038] VAR_RESULT = getDist(9,Var[55]);
[003D] unless (VAR_RESULT) goto 0044;
[0044] startSound(11);
[0046] clearState08(Var[55]);
[0048] Var[66] = Var[55];
[004B] Var[66] -= 249;
[004F] Var[14] = Var[66];
[0052] Var[14] += 84;
[0056] unless (Var[14] > 1) goto 006E;
[005C] Var[14] = Var[66];
[005F] Var[14] += 84;
[0063] clearState08(Var[14]);
[0065] Var[14] = Var[66];
[0068] Var[14] += 84;
[006C] setState02(Var[14]);
[006E] delay(30);
[0072] Var[55]++;
[0074] unless (Var[55] > 254) goto 002F;
[007A] walkActorToObject(9,260);
[007E] waitForActor(9);
[0080] breakHere();
[0081] VAR_RESULT = getActorX(VAR_EGO);
[0084] unless (VAR_RESULT > 84) goto 00B9;
[008A] cursorCommand(15, 2);
[008D] doSentence(STOP);
[008F] animateActor(VAR_EGO,255);
[0092] animateActor(9,244);
[0095] breakHere();
[0096] print(9,"Back to your seat!");
[00A8] breakHere();
[00A9] walkActorTo(VAR_EGO,80,54);
[00AD] waitForMessage();
[00AE] animateActor(9,247);
[00B1] waitForActor(VAR_EGO);
[00B3] cursorCommand(247, 1);
[00B6] VAR_KEYPRESS = Var[234];
[00B9] VAR_RESULT = getActorX(9);
[00BC] unless (VAR_RESULT < 84) goto 0080;
[00C2] stopObjectCode();
```

## OCv2_0262 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0262.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0262.txt); entry `0018`.

```text
[0018] setState08(VAR_ACTIVE_OBJECT1);
[001A] setOwnerOf(22,VAR_EGO);
[001E] stopObjectCode();
```

## OCv2_0262 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0262.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0262.txt); entry `001F`.

```text
[001F] unless (VAR_EGO == 1) goto 0088;
[0025] unless (Var[248]) goto 007C;
[0029] VAR_RESULT = getDist(9,260);
[002F] unless (VAR_RESULT < 4) goto 005F;
[0035] pickupObject(50);
[0038] clearState08(VAR_ACTIVE_OBJECT1);
[003A] Var[66] = Var[234];
[003D] Var[14] = Var[66];
[0040] Var[14] += 84;
[0044] unless (Var[14] == 50) goto 0054;
[004A] Var[14] = Var[66];
[004D] Var[14] += 84;
[0051] Var[Var[14]] = Var[235];
[0054] Var[66]++;
[0056] unless (Var[66] > 5) goto 003D;
[005F] Var[103] = 26;
[0063] faceActor(1,9);
[0066] stopObjectCode();
[007C] VAR_RESULT = isScriptRunning(105);
[007F] unless (!VAR_RESULT) goto 0085;
[0083] startScript(105);
[0088] printEgo("That's ILLEGAL!!");
[0099] stopObjectCode();
```

## OCv2_0263 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0263.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0263.txt); entry `0013`.

```text
[0013] doSentence(250,258,0,1);
[001A] Var[53] = Var[234];
[001D] startSound(42);
[001F] doSentence(250,241,0,1);
[0026] breakHere();
[0027] unless (VAR_CLICK_AREA == 4) goto 0035;
[002D] unless (VAR_KEYPRESS == VAR_CUTSCENEEXIT_KEY) goto 0035;
[0035] unless (Var[53]) goto 0026;
[0039] breakHere();
[003A] unless (!Var[248]) goto 0039;
[003E] VAR_RESULT = isScriptRunning(36);
[0041] unless (VAR_RESULT) goto 004C;
[0045] delay(3600);
[004C] unless (Var[248]) goto 0053;
[0053] doSentence(254,261,0,1);
[005A] stopScript(105);
[005C] startSound(109);
[005E] delay(60);
[0062] stopSound(42);
[0064] waitForMessage();
[0065] startScript(79);
[0067] stopObjectCode();
```

## OCv2_0264 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0264.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0264.txt); entry `002A`.

```text
[002A] VAR_RESULT = getObjectOwner(47);
[002E] unless (VAR_RESULT == VAR_EGO) goto 0054;
[0033] printEgo("I already have some toilet paper.");
[0054] printEgo("It's empty.");
[0060] stopObjectCode();
```

## OCv2_0264 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0264.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0264.txt); entry `002A`.

```text
[002A] VAR_RESULT = getObjectOwner(47);
[002E] unless (VAR_RESULT == VAR_EGO) goto 0054;
[0033] printEgo("I already have some toilet paper.");
[0054] printEgo("It's empty.");
[0060] stopObjectCode();
```

## OCv2_0264 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0264.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0264.txt); entry `002A`.

```text
[002A] VAR_RESULT = getObjectOwner(47);
[002E] unless (VAR_RESULT == VAR_EGO) goto 0054;
[0033] printEgo("I already have some toilet paper.");
[0054] printEgo("It's empty.");
[0060] stopObjectCode();
```

## OCv2_0265 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0265.txt](../../zak/converted/scripts_flat/LFv2_0011/ROv2/OCv2_0265.txt); entry `0018`.

```text
[0018] setBitVar(1575,0,Var[235]);
[001D] Var[54] = 1;
[0021] breakHere();
[0022] VAR_RESULT = getActorX(VAR_EGO);
[0025] unless (VAR_RESULT > 84) goto 0061;
[002B] cursorCommand(15, 2);
[002E] doSentence(STOP);
[0030] animateActor(VAR_EGO,255);
[0033] animateActor(9,244);
[0036] breakHere();
[0037] print(9,"DID YOU DO THIS? GO SIT DOWN!");
[0051] waitForMessage();
[0052] animateActor(9,247);
[0055] walkActorTo(VAR_EGO,80,54);
[0059] waitForActor(VAR_EGO);
[005B] cursorCommand(247, 1);
[005E] VAR_KEYPRESS = Var[234];
[0061] Var[54]++;
[0063] unless (Var[54] > 100) goto 0021;
[0069] VAR_RESULT = getRandomNr(2);
[006C] unless (VAR_RESULT) goto 0078;
[0070] print(9,"W\x02\x02");
[0078] print(9,"Ohhhh w\x02\x02");
[0082] print(9,"hat a mess!");
```

## SCv2_0036 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0011/SCv2_0036.txt](../../zak/converted/scripts_flat/LFv2_0011/SCv2_0036.txt); entry `0000`.

```text
[0000] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0006;
[0004] clearState08(VAR_ACTIVE_OBJECT1);
[0006] unless (getState08(241)) goto 0022;
[000B] printEgo("It's already cooked!");
[0022] unless (getState08(262)) goto 004D;
[0027] printEgo("I shouldn't turn on an empty microwave.");
[004D] loadSound(19)
[0050] loadSound(21)
[0053] loadSound(20)
[0056] setState08(261);
[0059] breakHere();
[005A] startSound(19);
[005C] delay(600);
[0060] setState08(262);
[0063] setState08(241);
[0066] setOwnerOf(22,0);
[006A] unless (VAR_ROOM == 11) goto 0072;
[0070] startSound(21);
[0072] delay(300);
[0076] clearState08(261);
[0079] breakHere();
[007A] stopSound(19);
[007C] unless (VAR_ROOM == 11) goto 0086;
[0082] startSound(42);
[0084] startSound(20);
[0086] stopObjectCode();
```

## SCv2_0038 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0011/SCv2_0038.txt](../../zak/converted/scripts_flat/LFv2_0011/SCv2_0038.txt); entry `0000`.

```text
[0000] cutscene();
[0001] beginOverride();
[0005] VAR_RESULT = isScriptRunning(116);
[0008] unless (VAR_RESULT) goto 000E;
[000C] startScript(116);
[000E] unless (getState08(246)) goto 0021;
[0013] doSentence(2,247,0,0);
[001A] waitForSentence();
[001B] walkActorToObject(1,243);
[001F] waitForActor(1);
[0021] animateActor(1,246);
[0024] delay(60);
[0028] print(1,"Excuse me!");
[0034] waitForMessage();
[0035] panCameraTo(33);
[0037] breakHere();
[0038] unless (VAR_CAMERA_POS_X == 33) goto 0037;
[003E] delay(180);
[0042] animateActor(1,248);
[0045] startSound(22);
[0047] breakHere();
[0048] VAR_RESULT = isSoundRunning(22);
[004B] unless (!VAR_RESULT) goto 0047;
[004F] unless (getState08(242)) goto 0056;
[0054] startSound(17);
[0056] panCameraTo(20);
[0058] breakHere();
[0059] unless (VAR_CAMERA_POS_X == 20) goto 0058;
[005F] animateActor(1,246);
[0062] waitForActor(1);
[0064] print(1,"Thank you.");
[0070] actorFollowCamera(VAR_EGO);
[0072] unless (VAR_OVERRIDE) goto 0082;
[0076] stopSound(22);
[0078] animateActor(1,250);
[007B] unless (getState08(242)) goto 0082;
[0080] startSound(17);
[0082] endCutscene();
[0083] stopObjectCode();
```

## SCv2_0079 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0011/SCv2_0079.txt](../../zak/converted/scripts_flat/LFv2_0011/SCv2_0079.txt); entry `0000`.

```text
[0000] Var[Var[1]] += 0;
[0004] cutscene();
[0005] unless (VAR_KEYPRESS == VAR_CUTSCENEEXIT_KEY) goto 000D;
[000D] beginOverride();
[0011] VAR_EGO = 9;
[0015] actorFollowCamera(VAR_EGO);
[0017] walkActorTo(9,78,54);
[001B] waitForActor(9);
[001D] animateActor(9,244);
[0020] waitForActor(9);
[0022] printEgo("We are now landing. Prepare to\x01\x01disembark.");
[0048] waitForMessage();
[0049] loadScript(120)
[004C] unless (getState08(248)) goto 0058;
[0051] doSentence(253,251,0,1);
[0058] doSentence(1,256,0,0);
[005F] delay(120);
[0063] unless (!getState08(263)) goto 0075;
[0068] walkActorTo(Var[52],85,54);
[006C] waitForActor(Var[52]);
[006E] doSentence(254,258,0,1);
[0075] walkActorTo(Var[52],85,54);
[0079] waitForSentence();
[007A] unless (!getState08(262)) goto 00CA;
[007F] Var[248]++;
[0081] doSentence(1,260,0,0);
[0088] waitForSentence();
[0089] doSentence(14,262,0,0);
[0090] waitForSentence();
[0091] setOwnerOf(22,Var[52]);
[0095] waitForActor(Var[52]);
[0097] walkActorToActor(9,Var[52],4);
[009B] printEgo("Here's your egg.");
[00AB] waitForMessage();
[00AC] animateActor(Var[52],245);
[00AF] breakHere();
[00B0] printEgo("Next time cook it at home!");
[00CA] walkActorTo(9,91,54);
[00CE] waitForActor(9);
[00D0] animateActor(9,244);
[00D3] waitForActor(Var[52]);
[00D5] animateActor(Var[52],245);
[00D8] printEgo("It's been a JOY having you aboard.\x01\x01Have a nice day.");
[0104] waitForMessage();
[0105] walkActorToObject(Var[52],256);
[0109] waitForActor(Var[52]);
[010B] setState08(256);
[010E] unless (!getState08(262)) goto 0117;
[0113] setOwnerOf(22,Var[52]);
[0117] VAR_EGO = Var[52];
[011A] actorFollowCamera(VAR_EGO);
[011C] cursorCommand(247, 1);
[011F] doSentence(STOP);
[0121] doSentence(13,256,0,1);
[0128] endCutscene();
[0129] stopObjectCode();
```

## SCv2_0104 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0011/SCv2_0104.txt](../../zak/converted/scripts_flat/LFv2_0011/SCv2_0104.txt); entry `0000`.

```text
[0000] setState08(256);
[0003] cutscene();
[0004] loadScript(116)
[0007] loadSound(42)
[000A] loadSound(105)
[000D] animateActor(Var[52],250);
[0010] beginOverride();
[0014] delay(60);
[0018] VAR_EGO = 9;
[001C] printEgo("You're late! I'll show you to your seat.");
[003F] waitForMessage();
[0040] walkActorTo(9,65,54);
[0044] delay(60);
[0048] walkActorToObject(1,255);
[004C] waitForActor(9);
[004E] animateActor(9,245);
[0051] waitForActor(9);
[0053] printEgo("Here it is.");
[005E] VAR_EGO = Var[52];
[0061] doSentence(11,255,0,0);
[0068] waitForSentence();
[0069] walkActorTo(9,78,54);
[006D] waitForActor(9);
[006F] animateActor(9,244);
[0072] waitForActor(9);
[0074] VAR_EGO = 9;
[0078] printEgo("Ladies and gentlemen, you've heard this\x01\x01speech before so I'll cut it short.\x03\x03In the likely event of a water landing,");
[00DB] waitForMessage();
[00DC] walkActorToObject(9,48);
[00E0] printEgo("your seat cushion may be used as a\x01\x01flotation device.");
[010E] waitForActor(9);
[0110] setState08(48);
[0113] delay(60);
[0117] animateActor(9,244);
[011A] delay(120);
[011E] waitForMessage();
[011F] animateActor(9,247);
[0122] clearState08(48);
[0125] delay(60);
[0129] animateActor(9,244);
[012C] breakHere();
[012D] printEgo("If we lose cabin pressure, oxygen masks\x01\x01should appear. But don't count on it.");
[0170] waitForMessage();
[0171] delay(30);
[0175] printEgo("Enjoy your flight^\x01\x01\x02\x02");
[0189] delay(120);
[018D] printEgo("I've a feeling I won't!");
[01A2] waitForMessage();
[01A3] actorFollowCamera(9);
[01A5] doSentence(2,256,0,0);
[01AC] waitForSentence();
[01AD] walkActorToObject(9,260);
[01B1] delay(60);
[01B5] VAR_EGO = Var[52];
[01B8] startSound(105);
[01BA] delay(240);
[01BE] actorFollowCamera(Var[52]);
[01C0] startSound(42);
[01C2] startScript(116);
[01C4] breakHere();
[01C5] VAR_RESULT = getObjectOwner(51);
[01C9] unless (VAR_RESULT != 15) goto 01C4;
[01CF] delay(60);
[01D3] unless (VAR_OVERRIDE) goto 020B;
[01D7] print(255,"");
[01DA] VAR_EGO = Var[52];
[01DD] clearState08(48);
[01E0] VAR_RESULT = isScriptRunning(116);
[01E3] unless (!VAR_RESULT) goto 01EE;
[01E7] doSentence(253,261,0,1);
[01EE] VAR_RESULT = getObjectOwner(51);
[01F2] unless (VAR_RESULT == 15) goto 01FB;
[01F8] pickupObject(51);
[01FB] doSentence(2,256,0,1);
[0202] doSentence(11,255,0,1);
[0209] stopSound(105);
[020B] endCutscene();
[020C] doSentence(253,263,0,1);
[0213] stopObjectCode();
```

## SCv2_0105 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0011/SCv2_0105.txt](../../zak/converted/scripts_flat/LFv2_0011/SCv2_0105.txt); entry `0000`.

```text
[0000] cutscene();
[0001] beginOverride();
[0005] animateActor(VAR_EGO,255);
[0008] VAR_RESULT = getActorX(9);
[000B] unless (VAR_RESULT <= 12) goto 001D;
[0011] unless (!getState08(246)) goto 001D;
[0016] doSentence(253,251,0,1);
[001D] walkActorToActor(9,VAR_EGO,4);
[0021] VAR_RESULT = getDist(9,VAR_EGO);
[0026] unless (VAR_RESULT > 20) goto 0037;
[002C] print(9,"Hey you!");
[0036] waitForMessage();
[0037] breakHere();
[0038] VAR_RESULT = getDist(9,VAR_EGO);
[003D] unless (VAR_RESULT < 15) goto 0037;
[0043] print(9,"You shouldn't be doing that.");
[005E] waitForActor(9);
[0060] faceActor(9,VAR_EGO);
[0063] waitForMessage();
[0064] waitForActor(9);
[0066] print(9,"Get back in your seat right now!");
[0083] waitForMessage();
[0084] walkActorTo(9,65,56);
[0088] delay(30);
[008C] doSentence(11,255,0,0);
[0093] waitForActor(9);
[0095] animateActor(9,245);
[0098] waitForSentence();
[0099] animateActor(9,247);
[009C] waitForMessage();
[009D] breakHere();
[009E] print(9,"Now stay there.");
[00AE] waitForMessage();
[00AF] unless (VAR_OVERRIDE) goto 00C3;
[00B3] doSentence(STOP);
[00B5] doSentence(11,255,0,1);
[00BC] putActor(9,65,56);
[00C0] animateActor(9,251);
[00C3] endCutscene();
[00C4] VAR_RESULT = isScriptRunning(106);
[00C7] unless (!VAR_RESULT) goto 00D2;
[00CB] doSentence(253,261,0,1);
[00D2] stopObjectCode();
```

## SCv2_0106 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0011/SCv2_0106.txt](../../zak/converted/scripts_flat/LFv2_0011/SCv2_0106.txt); entry `0000`.

```text
[0000] doSentence(254,261,0,1);
[0007] stopScript(116);
[0009] Var[248] = Var[234];
[000C] walkActorToObject(9,246);
[0010] waitForActor(9);
[0012] unless (getState08(248)) goto 005A;
[0017] print(9,"Are you all right in there?");
[0030] delay(300);
[0034] unless (!getState08(248)) goto 0017;
[0039] print(9,"Good, now please take your seat.");
[005A] VAR_RESULT = getActorX(VAR_EGO);
[005D] unless (VAR_RESULT > 20) goto 0066;
[0066] print(9,"Please sit down.");
[0077] Var[248] = Var[234];
[007A] cursorCommand(15, 2);
[007D] waitForMessage();
[007E] doSentence(STOP);
[0080] animateActor(VAR_EGO,255);
[0083] walkActorToObject(VAR_EGO,255);
[0087] delay(60);
[008B] unless (!getState08(246)) goto 0097;
[0090] doSentence(253,246,0,1);
[0097] unless (getState08(242)) goto 00BC;
[009C] walkActorToObject(9,242);
[00A0] waitForActor(9);
[00A2] VAR_RESULT = getActorX(9);
[00A5] unless (VAR_RESULT > 8) goto 00AE;
[00AE] clearState08(242);
[00B1] doSentence(254,242,0,1);
[00B8] stopSound(17);
[00BA] startSound(42);
[00BC] unless (getState08(265)) goto 01BE;
[00C1] VAR_RESULT = getActorX(9);
[00C4] unless (VAR_RESULT > 16) goto 00CD;
[00CD] print(9,"Oh no! What a mess!");
[00DF] Var[248]++;
[00E1] walkActorToObject(9,247);
[00E5] waitForActor(9);
[00E7] VAR_RESULT = getActorX(VAR_EGO);
[00EA] unless (VAR_RESULT < 20) goto 00FE;
[00F0] faceActor(9,VAR_EGO);
[00F3] breakHere();
[00F4] doSentence(253,251,0,1);
[00FE] VAR_RESULT = getActorX(9);
[0101] unless (VAR_RESULT > 16) goto 010A;
[010A] doSentence(253,252,0,1);
[0111] clearState08(265);
[0114] setState02(265);
[0117] clearState04(242);
[011A] VAR_RESULT = getObjectOwner(47);
[011E] unless (VAR_RESULT == 0) goto 012E;
[0124] setOwnerOf(47,15);
[0128] clearState02(47);
[012B] clearState08(47);
[012E] VAR_RESULT = getBitVar(1555,0);
[0133] unless (!VAR_RESULT) goto 0193;
[0137] unless (Var[52] == 1) goto 0193;
[013D] delay(60);
[0141] cutscene();
[0142] setBitVar(1555,0,Var[235]);
[0147] beginOverride();
[014B] waitForMessage();
[014C] waitForActor(1);
[014E] Var[66] = getActorX(1);
[0151] walkActorTo(1,Var[66],56);
[0155] printEgo("Hmm^");
[015B] waitForActor(1);
[015D] animateActor(1,246);
[0160] breakHere();
[0161] waitForMessage();
[0162] printEgo("SABOTAGED SINK STIFLES\x01\x01SCREECHING STEWARDESS.");
[018E] waitForMessage();
[018F] print(255,"");
[0192] endCutscene();
[0193] unless (Var[21] == 2) goto 019F;
[0199] cursorCommand(247, 1);
[019C] VAR_KEYPRESS = Var[234];
[019F] unless (VAR_MACHINE_SPEED > 40) goto 01AC;
[01A5] Var[46] = 26;
[01AC] Var[46] = 34;
[01B0] Var[103] = Var[235];
[01B3] delay(60);
[01B7] Var[103]++;
[01B9] unless (Var[103] > Var[46]) goto 01B3;
[01BE] VAR_RESULT = getActorX(Var[52]);
[01C1] unless (VAR_RESULT <= 20) goto 01CA;
[01C7] cursorCommand(15, 2);
[01CA] doSentence(253,251,0,1);
[01D1] delay(60);
[01D5] walkActorToObject(9,246);
[01D9] waitForActor(9);
[01DB] doSentence(253,248,0,1);
[01E2] Var[248] = Var[234];
[01E5] unless (Var[21] == 2) goto 01F1;
[01EB] cursorCommand(247, 1);
[01EE] VAR_KEYPRESS = Var[234];
[01F1] breakHere();
[01F2] unless (getState08(241)) goto 0212;
[01F7] print(9,"What's that awful smell?");
[0212] VAR_RESULT = isScriptRunning(36);
[0215] unless (!VAR_RESULT) goto 0236;
[0219] doSentence(253,261,0,1);
[0220] breakHere();
[0221] waitForActor(9);
[0223] VAR_RESULT = getActorX(9);
[0226] unless (VAR_RESULT < 85) goto 022F;
[022F] doSentence(254,261,0,1);
[0236] walkActorToObject(9,260);
[023A] waitForActor(9);
[023C] VAR_RESULT = getActorX(9);
[023F] unless (VAR_RESULT < 94) goto 0248;
[0248] unless (getState08(241)) goto 02A8;
[024D] print(9,"AIEEEEE! WHO DID THIS!!!");
[0265] Var[248]++;
[0267] doSentence(253,265,0,1);
[026E] delay(60);
[0272] doSentence(253,254,0,1);
[0279] breakHere();
[027A] breakHere();
[027B] walkActorToObject(9,262);
[027F] unless (VAR_MACHINE_SPEED > 40) goto 028C;
[0285] delay(10800);
[028C] delay(18000);
[0290] doSentence(254,265,0,1);
[0297] setBitVar(1575,0,Var[234]);
[029C] Var[248] = Var[234];
[029F] clearState08(241);
[02A2] setState02(241);
[02A8] VAR_RESULT = isScriptRunning(36);
[02AB] unless (VAR_RESULT) goto 02B6;
[02AF] doSentence(253,253,0,1);
[02B6] delay(60);
[02BA] unless (!getState08(262)) goto 0354;
[02BF] breakHere();
[02C0] unless (!getState08(248)) goto 02BF;
[02C5] doSentence(253,254,0,1);
[02CC] cutscene();
[02CD] delay(60);
[02D1] doSentence(14,262,0,1);
[02D8] beginOverride();
[02DC] delay(120);
[02E0] print(9,"Who left this egg in here?");
[02F8] delay(60);
[02FC] doSentence(253,256,0,1);
[0303] animateActor(VAR_EGO,255);
[0306] walkActorToActor(9,VAR_EGO,4);
[030A] waitForActor(9);
[030C] faceActor(9,VAR_EGO);
[030F] faceActor(VAR_EGO,9);
[0312] stopObjectCode();
[0350] print(255,"");
[0353] endCutscene();
[0354] doSentence(253,256,0,1);
[035B] waitForMessage();
[035C] doSentence(253,261,0,1);
[0363] stopObjectCode();
```

## SCv2_0116 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0011/SCv2_0116.txt](../../zak/converted/scripts_flat/LFv2_0011/SCv2_0116.txt); entry `0000`.

```text
[0000] Var[56] = 65;
[0004] walkActorTo(9,Var[56],54);
[0008] waitForActor(9);
[000A] animateActor(9,247);
[000D] breakHere();
[000E] delay(30);
[0012] unless (Var[56] == 65) goto 0028;
[0018] VAR_RESULT = getObjectOwner(51);
[001C] unless (VAR_RESULT != 15) goto 0025;
[0025] pickupObject(51);
[0028] VAR_RESULT = getActorX(9);
[002B] unless (VAR_RESULT != Var[56]) goto 0033;
[0033] print(9,"Here's your meal.");
[0045] waitForMessage();
[0046] Var[56] -= 11;
[004A] unless (Var[56] < 21) goto 0004;
[0050] doSentence(253,261,0,1);
[0057] stopObjectCode();
```

## SCv2_0120 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0011/SCv2_0120.txt](../../zak/converted/scripts_flat/LFv2_0011/SCv2_0120.txt); entry `0000`.

```text
[0000] setState08(262);
[0003] setState02(241);
[0006] clearState08(241);
[0009] setState08(263);
[000C] clearState08(774);
[000F] clearState08(775);
[0012] clearState08(242);
[0015] clearState04(242);
[0018] clearState08(265);
[001B] setState02(265);
[001E] VAR_RESULT = getObjectOwner(47);
[0022] unless (VAR_RESULT == 0) goto 0032;
[0028] setOwnerOf(47,15);
[002C] clearState02(47);
[002F] clearState08(47);
[0032] setActorElevation(Var[52],0);
[0035] setBitVar(1440,Var[52],Var[234]);
[003A] Var[45] = 190;
[003E] Var[14] = Var[52];
[0041] Var[14] += 78;
[0045] Var[66] = Var[14];
[0048] unless (Var[66] == 664) goto 0053;
[004E] setVarRange(Var[44],2,[146,217]);
[0053] unless (Var[66] == 666) goto 005E;
[0059] setVarRange(Var[44],2,[148,217]);
[005E] unless (Var[66] == 665) goto 0069;
[0064] setVarRange(Var[44],2,[147,217]);
[0069] unless (Var[66] == 667) goto 0074;
[006F] setVarRange(Var[44],2,[149,217]);
[0074] unless (Var[66] == 659) goto 007E;
[007A] Var[44] = 141;
[007E] unless (Var[66] == 660) goto 0088;
[0084] Var[44] = 142;
[0088] unless (Var[66] == 661) goto 0092;
[008E] Var[44] = 143;
[0092] unless (Var[66] == 663) goto 009C;
[0098] Var[44] = 145;
[009C] unless (Var[66] == 662) goto 00A6;
[00A2] Var[44] = 144;
[00A6] setBitVar(1475,Var[52],Var[234]);
[00AB] unless (Var[44] <= 145) goto 00B6;
[00B1] setBitVar(1569,0,Var[235]);
[00B6] stopObjectCode();
```

## SCv2_0121 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0011/SCv2_0121.txt](../../zak/converted/scripts_flat/LFv2_0011/SCv2_0121.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] unless (getState08(242)) goto 0012;
[0009] startSound(17);
[000B] doSentence(253,242,0,1);
[0012] setVarRange(Var[42],2,[9,9]);
[0017] Var[52] = VAR_EGO;
[001A] ActorOps(9,[Name("stewardess")]);
[0029] ActorOps(Var[52],[Sound(Var[234])]);
[002D] doSentence(253,247,0,1);
[0034] clearState02(246);
[0037] clearState02(247);
[003A] VAR_RESULT = getBitVar(1475,VAR_EGO);
[003F] unless (!VAR_RESULT) goto 0131;
[0043] putActorInRoom(9,11);
[0046] putActor(9,91,54);
[004A] animateActor(9,248);
[004D] setBitVar(1475,VAR_EGO,Var[235]);
[0052] clearState08(48);
[0055] clearState08(260);
[0058] clearState08(261);
[005B] RoomScroll(33,80);
[005F] clearState08(246);
[0062] clearState08(248);
[0065] setBoxFlags(4,128);
[0068] Var[248] = Var[234];
[006B] setBitVar(1575,0,Var[234]);
[0070] Var[101] = 249;
[0074] Var[47] = Var[234];
[0077] clearState08(Var[101]);
[0079] clearState02(Var[101]);
[007B] Var[14] = Var[47];
[007E] Var[14] += 84;
[0082] Var[Var[14]] = Var[234];
[0085] Var[14] = Var[47];
[0088] Var[14] += 186;
[008C] Var[Var[14]] = Var[234];
[008F] Var[47]++;
[0091] Var[101]++;
[0093] unless (Var[101] > 254) goto 0077;
[0099] Var[101] = Var[234];
[009C] Var[47] = 257;
[00A0] clearState08(Var[47]);
[00A2] setState02(Var[47]);
[00A4] Var[47]++;
[00A6] unless (Var[47] > 259) goto 00A0;
[00AC] clearState08(50);
[00AF] setState02(50);
[00B2] Var[49] = 257;
[00B6] Var[48] = getRandomNr(4);
[00B9] Var[14] = Var[48];
[00BC] Var[14] += 186;
[00C0] unless (Var[14]) goto 00C7;
[00C7] Var[14] = Var[48];
[00CA] Var[14] += 186;
[00CE] Var[Var[14]] = Var[49];
[00D1] Var[49]++;
[00D3] unless (Var[49] > 259) goto 00B6;
[00D9] Var[47] = Var[234];
[00DC] Var[14] = Var[47];
[00DF] Var[14] += 186;
[00E3] unless (!Var[14]) goto 00F1;
[00E7] Var[14] = Var[47];
[00EA] Var[14] += 186;
[00EE] Var[Var[14]] = Var[235];
[00F1] Var[47]++;
[00F3] unless (Var[47] > 5) goto 00DC;
[00F9] VAR_RESULT = getObjectOwner(50);
[00FD] unless (VAR_RESULT == 15) goto 010F;
[0103] Var[14] = 5;
[0107] Var[14] += 186;
[010B] Var[Var[14]] = 50;
[010F] VAR_RESULT = getObjectOwner(51);
[0113] unless (VAR_RESULT == 15) goto 011B;
[0119] chainScript(104);
[011B] clearState08(256);
[011E] doSentence(11,255,0,1);
[0125] actorFollowCamera(VAR_EGO);
[0127] doSentence(253,261,0,1);
[0131] Var[47] = 257;
[0135] clearState08(Var[47]);
[0137] Var[47]++;
[0139] unless (Var[47] > 259) goto 0135;
[013F] clearState08(50);
[0142] Var[50] = 18;
[0146] Var[47] = 249;
[014A] unless (getState08(Var[47])) goto 016D;
[014E] Var[51] = Var[47];
[0151] Var[51] -= 249;
[0155] Var[14] = Var[51];
[0158] Var[14] += 84;
[015C] unless (Var[14] > 1) goto 016D;
[0162] Var[14] = Var[51];
[0165] Var[14] += 84;
[0169] drawObject(Var[14],Var[50],4);
[016D] Var[50] += 11;
[0171] Var[47]++;
[0173] unless (Var[47] > 254) goto 014A;
[0179] VAR_RESULT = isScriptRunning(106);
[017C] unless (!VAR_RESULT) goto 018A;
[0180] doSentence(253,261,0,1);
[018A] VAR_RESULT = getBitVar(1575,0);
[018F] unless (VAR_RESULT) goto 019A;
[0193] doSentence(253,265,0,1);
[019A] unless (!getState08(263)) goto 01A6;
[019F] doSentence(11,255,0,1);
[01A6] setBoxFlags(1,64);
[01A9] unless (getState08(246)) goto 01B1;
[01AE] setBoxFlags(1,0);
[01B1] doSentence(253,263,0,1);
[01B8] stopObjectCode();
```
