# Room 016 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] Var[56] = Var[234];
[0007] unless (getState04(328)) goto 000F;
[000C] clearState08(328);
[000F] unless (getState08(332)) goto 001E;
[0014] doSentence(253,332,0,1);
[001E] setBoxFlags(1,0);
[0021] doSentence(250,339,0,1);
[0028] Var[49] = 53;
[002C] Var[58] = Var[234];
[002F] VAR_RESULT = isScriptRunning(66);
[0032] unless (!VAR_RESULT) goto 0053;
[0036] unless (getState08(343)) goto 0045;
[003B] doSentence(250,336,0,1);
[0045] Var[49] = 60;
[0049] doSentence(250,335,0,1);
[0053] doSentence(253,342,0,1);
[005A] unless (VAR_ACTIVE_OBJECT1 == 108) goto 006C;
[0060] unless (!getState08(333)) goto 006C;
[0065] doSentence(250,334,0,1);
[006C] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/EXv2.txt); entry `0000`.

```text
[0000] stopSound(83);
[0002] stopSound(19);
[0004] setActorElevation(VAR_EGO,0);
[0007] unless (Var[56]) goto 0012;
[000B] doSentence(253,343,0,1);
[0012] stopObjectCode();
```

## OCv2_0328 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0328.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0328.txt); entry `001C`.

```text
[001C] startScript(10);
[001E] unless (VAR_EGO != 7) goto 009C;
[0024] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 008C;
[0028] cursorCommand(15, 2);
[002B] delay(60);
[002F] clearState04(VAR_ACTIVE_OBJECT1);
[0031] Var[52] = Var[234];
[0034] Var[50] = 33;
[0038] VAR_RESULT = getObjectOwner(Var[50]);
[003B] unless (VAR_RESULT == 7) goto 0046;
[0041] setOwnerOf(Var[50],VAR_EGO);
[0044] Var[52]++;
[0046] Var[50]++;
[0048] unless (Var[50] > 81) goto 0038;
[004E] printEgo("Yay! Here's the \x02\x02");
[005E] unless (Var[52] > 1) goto 006F;
[0064] printEgo("stuff\x02\x02");
[006F] printEgo("artifact\x02\x02");
[007A] printEgo(" they took!");
[0086] cursorCommand(247, 1);
[008C] delay(30);
[0090] printEgo("It's empty.");
[009C] stopObjectCode();
```

## OCv2_0328 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0328.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0328.txt); entry `009D`.

```text
[009D] startScript(11);
[009F] stopObjectCode();
```

## OCv2_0329 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0329.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0329.txt); entry `001B`.

```text
[001B] startScript(10);
[001D] setState08(155);
[0020] stopObjectCode();
```

## OCv2_0329 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0329.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0329.txt); entry `0021`.

```text
[0021] startScript(11);
[0023] clearState08(155);
[0026] stopObjectCode();
```

## OCv2_0329 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0329.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0329.txt); entry `0027`.

```text
[0027] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 003F;
[002B] unless (Var[56]) goto 0039;
[002F] doSentence(253,343,0,1);
[0039] loadRoomWithEgo(155,4,26,51);
[003F] stopObjectCode();
```

## OCv2_0330 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0330.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0330.txt); entry `0018`.

```text
[0018] printEgo("It's a map of Earth.");
[002A] stopObjectCode();
```

## OCv2_0330 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0330.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0330.txt); entry `002B`.

```text
[002B] Var[58] = Var[235];
[002E] startSound(27);
[0030] clearState08(338);
[0033] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0044;
[0037] setState08(VAR_ACTIVE_OBJECT1);
[0039] breakHere();
[003A] doSentence(250,336,0,1);
[0044] clearState08(VAR_ACTIVE_OBJECT1);
[0046] breakHere();
[0047] doSentence(250,335,0,1);
[004E] Var[56]++;
[0050] delay(120);
[0054] Var[58] = Var[234];
[0057] animateActor(VAR_EGO,246);
[005A] breakHere();
[005B] breakHere();
[005C] printEgo("Oooh! I just felt real stupid.");
[0077] waitForMessage();
[0078] doSentence(253,343,0,1);
[007F] stopObjectCode();
```

## OCv2_0331 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0331.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0331.txt); entry `0021`.

```text
[0021] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0062;
[0025] startSound(27);
[0027] setState08(VAR_ACTIVE_OBJECT1);
[0029] unless (VAR_EGO == 7) goto 0031;
[002F] setState04(VAR_ACTIVE_OBJECT1);
[0031] doSentence(253,332,0,1);
[0038] setState08(332);
[003B] setState02(332);
[003E] VAR_RESULT = getActorWalkBox(1);
[0041] unless (VAR_RESULT == 6) goto 0050;
[0047] VAR_RESULT = isScriptRunning(88);
[004A] unless (!VAR_RESULT) goto 0050;
[004E] startScript(88);
[0050] VAR_RESULT = getActorWalkBox(2);
[0053] unless (VAR_RESULT == 6) goto 0062;
[0059] VAR_RESULT = isScriptRunning(90);
[005C] unless (!VAR_RESULT) goto 0062;
[0060] startScript(90);
[0062] stopObjectCode();
```

## OCv2_0331 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0331.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0331.txt); entry `0063`.

```text
[0063] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 007F;
[0067] startSound(27);
[0069] clearState08(VAR_ACTIVE_OBJECT1);
[006B] clearState04(VAR_ACTIVE_OBJECT1);
[006D] stopSound(19);
[006F] clearState08(332);
[0072] setBoxFlags(1,0);
[0075] clearState02(332);
[0078] doSentence(254,332,0,1);
[007F] stopObjectCode();
```

## OCv2_0331 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0331.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0331.txt); entry `0080`.

```text
[0080] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 008E;
[0084] doSentence(5,331,0,0);
[008E] doSentence(4,331,0,0);
[0095] stopObjectCode();
```

## OCv2_0331 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0331.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0331.txt); entry `0080`.

```text
[0080] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 008E;
[0084] doSentence(5,331,0,0);
[008E] doSentence(4,331,0,0);
[0095] stopObjectCode();
```

## OCv2_0331 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0331.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0331.txt); entry `0080`.

```text
[0080] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 008E;
[0084] doSentence(5,331,0,0);
[008E] doSentence(4,331,0,0);
[0095] stopObjectCode();
```

## OCv2_0332 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0332.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0332.txt); entry `0024`.

```text
[0024] startSound(19);
[0026] setBoxFlags(1,96);
[0029] unless (!getState04(331)) goto 0031;
[0031] breakHere();
[0032] unless (getState08(332)) goto 0045;
[0037] doSentence(253,344,0,1);
[003E] unless (Var[66]) goto 0045;
[0048] VAR_RESULT = isScriptRunning(93);
[004B] unless (!VAR_RESULT) goto 0051;
[004F] startScript(93);
[0051] stopObjectCode();
```

## OCv2_0333 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0333.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0333.txt); entry `001F`.

```text
[001F] printEgo("It's securely tied upstairs.");
[003A] stopObjectCode();
```

## OCv2_0333 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0333.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0333.txt); entry `003B`.

```text
[003B] printEgo("Up we go!!!");
[0046] doSentence(253,333,0,1);
[004D] stopObjectCode();
```

## OCv2_0333 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0333.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0333.txt); entry `003B`.

```text
[003B] printEgo("Up we go!!!");
[0046] doSentence(253,333,0,1);
[004D] stopObjectCode();
```

## OCv2_0333 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0333.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0333.txt); entry `001F`.

```text
[001F] printEgo("It's securely tied upstairs.");
[003A] stopObjectCode();
```

## OCv2_0333 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0333.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0333.txt); entry `004E`.

```text
[004E] cursorCommand(15, 2);
[0051] ActorOps(VAR_EGO,[Sound(Var[234])]);
[0055] animateActor(VAR_EGO,3);
[0058] Var[51] = Var[234];
[005B] setActorElevation(VAR_EGO,Var[51]);
[005E] breakHere();
[005F] Var[51]++;
[0061] unless (Var[51] > 48) goto 005B;
[0067] ActorOps(VAR_EGO,[Sound(6)]);
[006B] cursorCommand(247, 1);
[006E] setState08(107);
[0071] setState08(109);
[0074] setState02(109);
[0077] loadRoomWithEgo(108,1,255,255);
[007D] stopObjectCode();
```

## OCv2_0334 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0334.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0334.txt); entry `0019`.

```text
[0019] unless (getState08(333)) goto 0028;
[001E] doSentence(11,333,0,0);
[0028] printEgo("I can't reach it.");
[0038] stopObjectCode();
```

## OCv2_0334 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0334.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0334.txt); entry `0039`.

```text
[0039] VAR_ACTIVE_OBJECT1 = Var[234];
[003C] Var[56]++;
[003E] breakHere();
[003F] animateActor(1,32);
[0042] animateActor(1,28);
[0045] setBitVar(1440,1,Var[235]);
[004A] delay(60);
[004E] printEgo("Ouch!");
[0055] delay(120);
[0059] animateActor(1,6);
[005C] animateActor(1,10);
[005F] animateActor(1,16);
[0062] setBitVar(1440,1,Var[234]);
[0067] doSentence(253,343,0,1);
[006E] stopObjectCode();
```

## OCv2_0335 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0335.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0335.txt); entry `0013`.

```text
[0013] doSentence(254,338,0,1);
[001A] unless (Var[49] < 61) goto 0035;
[0020] drawObject(335,Var[49],5);
[0025] Var[49]++;
[0027] drawObject(336,Var[49],5);
[002C] startSound(83);
[002E] breakHere();
[002F] unless (Var[49] == 61) goto 0020;
[0035] doSentence(250,337,0,1);
[003C] stopObjectCode();
```

## OCv2_0336 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0336.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0336.txt); entry `0013`.

```text
[0013] doSentence(254,337,0,1);
[001A] unless (Var[49] > 52) goto 0035;
[0020] drawObject(335,Var[49],5);
[0025] Var[49]--;
[0027] drawObject(336,Var[49],5);
[002C] startSound(83);
[002E] breakHere();
[002F] unless (Var[49] == 52) goto 0020;
[0035] doSentence(250,338,0,1);
[003C] stopObjectCode();
```

## OCv2_0337 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0337.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0337.txt); entry `0013`.

```text
[0013] Var[48] = 61;
[0017] drawObject(338,Var[48],7);
[001C] breakHere();
[001D] breakHere();
[001E] drawObject(337,Var[48],7);
[0023] Var[48]--;
[0025] unless (Var[48] < 51) goto 0017;
[002B] breakHere();
[002C] breakHere();
```

## OCv2_0338 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0338.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0338.txt); entry `0013`.

```text
[0013] Var[48] = 51;
[0017] drawObject(338,Var[48],7);
[001C] breakHere();
[001D] breakHere();
[001E] drawObject(337,Var[48],7);
[0023] Var[48]++;
[0025] unless (Var[48] > 61) goto 0017;
[002B] breakHere();
[002C] breakHere();
```

## OCv2_0339 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0339.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0339.txt); entry `0013`.

```text
[0013] Var[45] = 53;
[0017] VAR_RESULT = isScriptRunning(66);
[001A] unless (!VAR_RESULT) goto 002F;
[001E] Var[46] = getRandomNr(16);
[0021] Var[46] += 4;
[0025] breakHere();
[0026] Var[46]--;
[0028] unless (!Var[46]) goto 0025;
[002F] breakHere();
[0030] breakHere();
[0031] Var[47] = 339;
[0035] stopSound(83);
[0037] startSound(83);
[0039] drawObject(Var[47],Var[45],9);
[003D] breakHere();
[003E] Var[47]++;
[0040] unless (Var[47] > 342) goto 0039;
[0046] unless (Var[45] == 53) goto 0053;
[004C] Var[45] = 57;
```

## OCv2_0340 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0340.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0340.txt); entry `0013`.

```text
[0013] print(Var[66],"I can't stand the noise! It's MUCH\x01\x01louder in here!");
[0040] stopObjectCode();
```

## OCv2_0341 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0341.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0341.txt); entry `0013`.

```text
[0013] VAR_EGO = 7;
[0017] ActorOps(12,[Costume(28)]);
[001B] ActorOps(12,[Color(14, 9)]);
[0020] ActorOps(12,[Color(6, 1)]);
[0025] ActorOps(12,[Sound(6)]);
[0029] ActorOps(12,[TalkColor(9)]);
[002D] Var[245] = 28;
[0031] putActorInRoom(7,16);
[0034] putActor(7,28,48);
[0038] animateActor(7,251);
[003B] putActorInRoom(12,16);
[003E] putActor(12,50,48);
[0042] setActorElevation(12,0);
[0045] startScript(5);
[0047] clearState08(328);
[004A] clearState08(329);
[004D] clearState08(155);
[0050] stopObjectCode();
```

## OCv2_0342 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0342.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0342.txt); entry `0013`.

```text
[0013] Var[55] = Var[49];
[0016] Var[48] = getRandomNr(10);
[0019] Var[48] += 51;
[001D] drawObject(338,Var[48],7);
[0022] breakHere();
[0023] drawObject(337,Var[48],7);
[0028] unless (Var[55] == Var[49]) goto 0034;
[002D] Var[55] = getRandomNr(7);
[0030] Var[55] += 53;
[0034] unless (Var[55] != Var[49]) goto 004F;
[0039] drawObject(335,Var[49],5);
[003E] unless (Var[55] > Var[49]) goto 0048;
[0043] Var[49]++;
[0048] Var[49]--;
[004A] drawObject(336,Var[49],5);
```

## OCv2_0343 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0343.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0343.txt); entry `0023`.

```text
[0023] unless (!Var[58]) goto 002E;
[0027] doSentence(253,330,0,1);
[002E] stopObjectCode();
```

## OCv2_0343 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0343.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0343.txt); entry `002F`.

```text
[002F] printEgo("There isn't any way to turn it off!");
[004D] stopObjectCode();
```

## OCv2_0343 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0343.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0343.txt); entry `0023`.

```text
[0023] unless (!Var[58]) goto 002E;
[0027] doSentence(253,330,0,1);
[002E] stopObjectCode();
```

## OCv2_0343 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0343.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0343.txt); entry `0023`.

```text
[0023] unless (!Var[58]) goto 002E;
[0027] doSentence(253,330,0,1);
[002E] stopObjectCode();
```

## OCv2_0343 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0343.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0343.txt); entry `0023`.

```text
[0023] unless (!Var[58]) goto 002E;
[0027] doSentence(253,330,0,1);
[002E] stopObjectCode();
```

## OCv2_0343 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0343.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0343.txt); entry `004E`.

```text
[004E] Var[56] = Var[234];
[0051] unless (VAR_EGO <= 2) goto 0069;
[0057] VAR_RESULT = isScriptRunning(94);
[005A] unless (!VAR_RESULT) goto 0069;
[005E] VAR_RESULT = getActorRoom(7);
[0061] unless (VAR_RESULT == 4) goto 0069;
[0067] startScript(94);
[0069] stopObjectCode();
```

## OCv2_0344 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0344.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0344.txt); entry `001C`.

```text
[001C] printEgo("It's set to 60.");
[002A] stopObjectCode();
```

## OCv2_0344 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0344.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0344.txt); entry `002B`.

```text
[002B] Var[66] = Var[234];
[002E] VAR_RESULT = getActorWalkBox(1);
[0031] unless (VAR_RESULT == 6) goto 0047;
[0037] unless (Var[167] == 48) goto 0047;
[003D] unless (Var[164] == 40) goto 0047;
[0043] Var[66] = 1;
[0047] VAR_RESULT = getActorWalkBox(2);
[004A] unless (VAR_RESULT == 6) goto 0060;
[0050] unless (Var[168] == 48) goto 0060;
[0056] unless (Var[165] == 40) goto 0060;
[005C] Var[66] = 2;
[0060] stopObjectCode();
```

## OCv2_0345 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0345.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0345.txt); entry `0013`.

```text
[0013] Var[121] -= 3;
[0017] walkActorTo(7,Var[121],Var[122]);
[001B] waitForActor(7);
[001D] Var[53] = Var[234];
[0020] doSentence(253,346,0,1);
[0027] breakHere();
[0028] unless (Var[53]) goto 0027;
[002C] Var[121] -= 2;
[0030] Var[122]--;
[0032] walkActorTo(7,Var[121],Var[122]);
[0036] waitForActor(7);
[0038] Var[53] = Var[234];
[003B] doSentence(253,346,0,1);
[0042] breakHere();
[0043] unless (Var[53]) goto 0042;
[0047] Var[121] += 4;
[004B] walkActorTo(7,Var[121],Var[122]);
[004F] waitForActor(7);
[0051] Var[53] = Var[234];
[0054] doSentence(253,346,0,1);
[005B] breakHere();
[005C] unless (Var[53]) goto 005B;
[0060] Var[121]--;
[0062] Var[122] -= 2;
[0066] walkActorTo(7,Var[121],Var[122]);
[006A] waitForActor(7);
```

## OCv2_0346 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0346.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0346.txt); entry `0013`.

```text
[0013] Var[50] = Var[234];
[0016] Var[54] = getRandomNr(3);
[0019] unless (Var[54] == Var[234]) goto 0024;
[001E] animateActor(7,246);
[0024] unless (Var[54] == Var[235]) goto 002F;
[0029] animateActor(7,245);
[002F] unless (Var[54] == 2) goto 003B;
[0035] animateActor(7,247);
[003B] unless (Var[54] == 3) goto 0047;
[0041] animateActor(7,244);
[0044] /* goto 0047; */
[0047] breakHere();
[0048] breakHere();
[0049] Var[50]++;
[004B] unless (Var[50] > 2) goto 0016;
[0051] Var[53] = Var[235];
[0054] stopObjectCode();
```

## OCv2_0347 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0347.txt](../../zak/converted/scripts_flat/LFv2_0016/ROv2/OCv2_0347.txt); entry `0013`.

```text
[0013] delay(18);
[0017] startSound(38);
[0019] drawObject(347,255,255);
[001E] delay(30);
[0022] drawObject(346,255,255);
```

## SCv2_0088 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0016/SCv2_0088.txt](../../zak/converted/scripts_flat/LFv2_0016/SCv2_0088.txt); entry `0000`.

```text
[0000] stopScript(89);
[0002] Var[250] += 300;
[0006] breakHere();
[0007] unless (Var[21] == 1) goto 0006;
[000D] delay(120);
[0011] Var[66] = 1;
[0015] doSentence(253,340,0,1);
[001C] delay(300);
[0020] unless (Var[236] == 2) goto 0028;
[0026] Var[236]++;
[0028] VAR_RESULT = getActorRoom(1);
[002B] unless (VAR_RESULT != 16) goto 0033;
[0031] chainScript(89);
[0033] setBitVar(1513,Var[236],Var[235]);
[0038] unless (VAR_ROOM == 16) goto 0174;
[003E] VAR_RESULT = getActorWalkBox(1);
[0041] unless (VAR_RESULT != 6) goto 0049;
[0047] chainScript(89);
[0049] VAR_RESULT = getBitVar(1547,0);
[004E] unless (VAR_RESULT) goto 0070;
[0052] unless (!Var[236]) goto 0065;
[0056] print(1,"Not again!");
[0065] print(1,"Ohhh^");
[0070] unless (Var[236] == Var[234]) goto 008B;
[0075] print(1,"I'm losing my mind!");
[008B] unless (Var[236] == Var[235]) goto 00C2;
[0090] print(1,"SLEAZY TABLOID REPORTER\x01\x01ABDUCTED BY SPACE ALIENS.");
[00C2] unless (Var[236] == 4) goto 0104;
[00C8] print(1,"TEASING SLABOID, uh, PORTER AB, AB,\x01\x01er, TAKEN BY SPACE ALIASES.");
[0104] unless (Var[236] == 6) goto 0135;
[010A] print(1,"TEDING SLOBORT, uh, TABES\x01\x01SPADES ALIABUH.");
[0135] unless (Var[236] == 8) goto 0168;
[013B] setBitVar(1547,0,Var[235]);
[0140] print(1,"SLEEBLE DEEDOB, uh,\x01\x01PACEALOO BALEAZZ.");
[0165] /* goto 0168; */
[0168] unless (VAR_EGO == 1) goto 0174;
[016E] VerbOps(Delete(Var[236]););
[0171] cursorCommand(0, 0);
[0174] Var[236]++;
[0176] unless (Var[236] > 13) goto 001C;
[017C] startScript(92);
[017E] breakHere();
[017F] VAR_RESULT = getActorRoom(1);
[0182] unless (VAR_RESULT != 16) goto 017E;
[0188] startScript(89);
[018A] stopObjectCode();
```

## SCv2_0089 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0016/SCv2_0089.txt](../../zak/converted/scripts_flat/LFv2_0016/SCv2_0089.txt); entry `0000`.

```text
[0000] Var[236]++;
[0002] unless (Var[236] > 14) goto 000C;
[0008] Var[236] = 14;
[000C] delay(900);
[0010] print(1,"I'm feeling better now.");
[0027] delayVariable(Var[250]);
[0029] unless (Var[236]) goto 002F;
[002D] Var[236]--;
[002F] unless (Var[236] == 2) goto 0037;
[0035] Var[236]--;
[0037] setBitVar(1513,Var[236],Var[234]);
[003C] VAR_RESULT = getActorRoom(1);
[003F] unless (VAR_RESULT == VAR_ROOM) goto 004C;
[0044] unless (VAR_EGO == 1) goto 004C;
[004A] startScript(19);
[004C] unless (!Var[236]) goto 0027;
[0050] waitForMessage();
[0051] print(1,"Ah, back to normal!");
[0064] stopObjectCode();
```

## SCv2_0090 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0016/SCv2_0090.txt](../../zak/converted/scripts_flat/LFv2_0016/SCv2_0090.txt); entry `0000`.

```text
[0000] stopScript(91);
[0002] Var[251] += 300;
[0006] breakHere();
[0007] unless (Var[21] == 1) goto 0006;
[000D] delay(120);
[0011] Var[66] = 2;
[0015] doSentence(253,340,0,1);
[001C] delay(300);
[0020] unless (Var[237] == 2) goto 0028;
[0026] Var[237]++;
[0028] VAR_RESULT = getActorRoom(2);
[002B] unless (VAR_RESULT != 16) goto 0033;
[0031] chainScript(91);
[0033] setBitVar(1527,Var[237],Var[235]);
[0038] unless (VAR_ROOM == 16) goto 0074;
[003E] VAR_RESULT = getActorWalkBox(2);
[0041] unless (VAR_RESULT != 6) goto 0049;
[0047] chainScript(91);
[0049] unless (!Var[237]) goto 0061;
[004D] print(2,"My mind is going!");
[0061] print(2,"Ooo^");
[0068] unless (VAR_EGO == 2) goto 0074;
[006E] VerbOps(Delete(Var[237]););
[0071] cursorCommand(0, 0);
[0074] Var[237]++;
[0076] unless (Var[237] > 13) goto 001C;
[007C] startScript(92);
[007E] breakHere();
[007F] VAR_RESULT = getActorRoom(2);
[0082] unless (VAR_RESULT != 16) goto 007E;
[0088] startScript(91);
[008A] stopObjectCode();
```

## SCv2_0091 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0016/SCv2_0091.txt](../../zak/converted/scripts_flat/LFv2_0016/SCv2_0091.txt); entry `0000`.

```text
[0000] Var[237]++;
[0002] unless (Var[237] > 14) goto 000C;
[0008] Var[237] = 14;
[000C] delay(900);
[0010] print(2,"I'm feeling better now.");
[0027] delayVariable(Var[251]);
[0029] unless (Var[237]) goto 002F;
[002D] Var[237]--;
[002F] unless (Var[237] == 2) goto 0037;
[0035] Var[237]--;
[0037] setBitVar(1527,Var[237],Var[234]);
[003C] VAR_RESULT = getActorRoom(2);
[003F] unless (VAR_RESULT == VAR_ROOM) goto 004C;
[0044] unless (VAR_EGO == 2) goto 004C;
[004A] startScript(19);
[004C] unless (!Var[237]) goto 0027;
[0050] waitForMessage();
[0051] print(2,"Ah, back to normal!");
[0064] stopObjectCode();
```

## SCv2_0096 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0016/SCv2_0096.txt](../../zak/converted/scripts_flat/LFv2_0016/SCv2_0096.txt); entry `0000`.

```text
[0000] cutscene();
[0001] Var[117] = VAR_EGO;
[0004] setState04(344);
[0007] beginOverride();
[000B] loadRoom(0);
[000D] dummy(EE);
[000E] print(255,"At that very instant in the secret room^");
[0032] waitForMessage();
[0033] loadRoom(16);
[0035] VAR_RESULT = getActorRoom(2);
[0038] unless (VAR_RESULT == VAR_ROOM) goto 004D;
[003D] VAR_RESULT = getActorWalkBox(2);
[0040] unless (VAR_RESULT != 6) goto 004D;
[0046] putActor(2,90,48);
[004A] animateActor(2,248);
[004D] setCameraAt(28);
[004F] doSentence(253,341,0,1);
[0056] doSentence(253,347,0,1);
[005D] delay(120);
[0061] actorFollowCamera(7);
[0063] printEgo("It's happened!");
[0072] waitForMessage();
[0073] animateActor(7,249);
[0076] breakHere();
[0077] breakHere();
[0078] printEgo("IT'S HAPPENED!");
[0087] waitForMessage();
[0088] walkActorToActor(12,7,5);
[008C] delay(60);
[0090] print(12,"WHAT happened?");
[00A0] waitForMessage();
[00A1] printEgo("A part of THE DEVICE has been\x01\x01discovered and tested!");
[00CF] waitForMessage();
[00D0] print(12,"We must recover the artifact at ONCE!");
[00F2] waitForMessage();
[00F3] printEgo("Yes, at ONCE!");
[0100] waitForMessage();
[0101] doSentence(1,329,0,0);
[0108] waitForSentence();
[0109] walkActorToActor(12,7,5);
[010D] print(12,"WAIT!");
[0115] waitForMessage();
[0116] animateActor(7,245);
[0119] waitForActor(7);
[011B] print(12,"Your disguise!");
[012B] waitForMessage();
[012C] printEgo("My disguise?\x03\x03OH! Almost forgot!");
[014A] waitForMessage();
[014B] doSentence(1,328,0,0);
[0152] waitForSentence();
[0153] delay(60);
[0157] Var[245] = 24;
[015B] startScript(5);
[015D] printEgo("My hat. \x02\x02");
[0166] delay(60);
[016A] printEgo("My nose glasses.");
[017A] delay(60);
[017E] doSentence(2,328,0,0);
[0185] breakHere();
[0186] walkActorToActor(7,12,4);
[018A] waitForActor(7);
[018C] printEgo("How do I look?");
[0199] delay(60);
[019D] animateActor(7,247);
[01A0] delay(30);
[01A4] animateActor(7,244);
[01A7] delay(30);
[01AB] animateActor(7,246);
[01AE] delay(30);
[01B2] animateActor(7,245);
[01B5] delay(60);
[01B9] print(12,"Ugly.\x02\x02");
[01C2] delay(120);
[01C6] print(12," Just like a human!");
[01D9] waitForMessage();
[01DA] printEgo("Good!\x03\x03See ya!");
[01E8] waitForMessage();
[01E9] walkActorToObject(7,329);
[01ED] waitForActor(7);
[01EF] delay(30);
[01F3] setCameraAt(VAR_CAMERA_POS_X);
[01F5] putActorInRoom(7,0);
[01F8] delay(30);
[01FC] clearState08(329);
[01FF] clearState08(155);
[0202] clearState08(328);
[0205] unless (!VAR_OVERRIDE) goto 020F;
[0209] startSound(11);
[020B] delay(30);
[020F] doSentence(254,347,0,1);
[0216] drawObject(346,255,255);
[021B] putActorInRoom(12,0);
[021E] putActorInRoom(7,4);
[0221] putActor(7,22,52);
[0225] Var[245] = 24;
[0229] VAR_EGO = Var[117];
[022C] VAR_RESULT = getActorRoom(2);
[022F] unless (VAR_RESULT == 16) goto 0241;
[0235] actorFollowCamera(2);
[0237] breakHere();
[0238] print(2,"Whew!");
[0240] waitForMessage();
[0241] doSentence(STOP);
[0243] endCutscene();
[0244] unless (getState04(55)) goto 024B;
[0249] chainScript(49);
[024B] stopObjectCode();
```

## SCv2_0097 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0016/SCv2_0097.txt](../../zak/converted/scripts_flat/LFv2_0016/SCv2_0097.txt); entry `0000`.

```text
[0000] Var[239] = VAR_ROOM;
[0003] Var[102] = VAR_CAMERA_POS_X;
[0006] unless (VAR_ROOM_RESOURCE == 22) goto 000F;
[000F] unless (Var[239] == 20) goto 0019;
[0015] Var[239] = 135;
[0019] unless (Var[239] == 39) goto 0023;
[001F] Var[239] = 156;
[0023] unless (VAR_ROOM_RESOURCE == 40) goto 002D;
[0029] Var[239] = 143;
[002D] unless (Var[239] != 32) goto 0042;
[0033] unless (Var[239] != 30) goto 0042;
[0039] unless (Var[239] != 151) goto 0042;
[0042] stopScript(0);
[0044] unless (Var[239] >= 180) goto 0052;
[004A] unless (Var[239] <= 205) goto 0052;
[0050] stopScript(0);
[0052] delay(1800);
[0056] unless (getState04(55)) goto 005F;
[005B] delay(2700);
[005F] unless (!getState04(344)) goto 0067;
[0067] unless (Var[239] == 17) goto 0079;
[006D] VAR_RESULT = getActorRoom(8);
[0070] unless (VAR_RESULT == 17) goto 0079;
[0079] VAR_RESULT = isScriptRunning(82);
[007C] unless (VAR_RESULT) goto 0083;
[0083] stopScript(112);
[0085] VAR_RESULT = isScriptRunning(49);
[0088] unless (VAR_RESULT) goto 009A;
[008C] unless (VAR_EGO == 1) goto 009A;
[0092] unless (!Var[247]) goto 009A;
[0096] breakHere();
[009A] chainScript(98);
```

## SCv2_0098 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0016/SCv2_0098.txt](../../zak/converted/scripts_flat/LFv2_0016/SCv2_0098.txt); entry `0000`.

```text
[0000] cutscene();
[0001] Var[238] = Var[234];
[0004] Var[118] = isScriptRunning(49);
[0007] unless (Var[239] == 4) goto 0050;
[000D] VAR_RESULT = getActorRoom(7);
[0010] unless (VAR_RESULT == 4) goto 0050;
[0016] Var[118] = 2;
[001A] VAR_EGO = 7;
[001E] VAR_RESULT = getActorWalkBox(7);
[0021] unless (VAR_RESULT != 3) goto 0033;
[0027] VAR_RESULT = getActorWalkBox(1);
[002A] unless (VAR_RESULT == 3) goto 0033;
[0033] VAR_RESULT = getActorWalkBox(1);
[0036] unless (VAR_RESULT != 3) goto 004D;
[003C] VAR_RESULT = getActorWalkBox(7);
[003F] unless (VAR_RESULT == 3) goto 004D;
[0045] doSentence(1,157,0,0);
[004C] waitForSentence();
[0050] loadCostume(28)
[0053] loadRoom(Var[239]);
[0055] setCameraAt(Var[102]);
[0057] ActorOps(7,[Costume(0)]);
[005B] breakHere();
[005C] unless (Var[239] != 134) goto 0066;
[0062] Var[102] += 6;
[0066] putActorInRoom(7,Var[239]);
[0069] putActor(7,Var[102],64);
[006D] actorFollowCamera(7);
[006F] unless (Var[118]) goto 0096;
[0073] unless (VAR_EGO >= 5) goto 0092;
[0079] unless (VAR_EGO <= 6) goto 0092;
[007F] VAR_RESULT = getActorRoom(VAR_EGO);
[0082] unless (VAR_RESULT != Var[239]) goto 0092;
[0087] ActorOps(VAR_EGO,[Costume(0)]);
[008B] putActorInRoom(VAR_EGO,Var[239]);
[008E] putActor(VAR_EGO,0,0);
[0092] VAR_EGO = 7;
[0096] startScript(5);
[0098] delay(120);
[009C] startSound(89);
[009E] ActorOps(7,[Costume(28)]);
[00A2] animateActor(7,250);
[00A5] startScript(5);
[00A7] delay(120);
[00AB] VAR_RESULT = getActorRoom(1);
[00AE] unless (VAR_RESULT == VAR_ROOM) goto 00BA;
[00B3] Var[238] = 1;
[00BA] VAR_RESULT = getActorRoom(2);
[00BD] unless (VAR_RESULT == VAR_ROOM) goto 00C6;
[00C2] Var[238] = 2;
[00C6] unless (!Var[238]) goto 010F;
[00CA] animateActor(7,245);
[00CD] delay(120);
[00D1] animateActor(7,244);
[00D4] delay(120);
[00D8] animateActor(7,246);
[00DB] breakHere();
[00DC] print(7,"ZLORFIK! I missed him!");
[00F2] waitForMessage();
[00F3] delay(120);
[00F7] unless (VAR_ROOM != 4) goto 010C;
[00FD] startSound(89);
[00FF] setCameraAt(VAR_CAMERA_POS_X);
[0101] putActorInRoom(7,4);
[0104] putActor(7,22,52);
[0108] delay(120);
[010F] unless (Var[118]) goto 01B1;
[0113] walkActorToActor(7,1,4);
[0117] waitForActor(7);
[0119] faceActor(7,1);
[011C] stopObjectCode();
[01B1] VAR_EGO = Var[238];
[01B4] endCutscene();
[01B5] Var[120] = Var[234];
[01B8] unless (Var[118]) goto 01BE;
[01BC] chainScript(75);
[01BE] unless (Var[238]) goto 01C4;
[01C2] chainScript(95);
[01C4] stopObjectCode();
```

## SCv2_0126 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0016/SCv2_0126.txt](../../zak/converted/scripts_flat/LFv2_0016/SCv2_0126.txt); entry `0000`.

```text
[0000] delay(600);
[0004] cutscene();
[0005] Var[117] = VAR_EGO;
[0008] setBitVar(1546,0,Var[235]);
[000D] beginOverride();
[0011] loadRoom(0);
[0013] dummy(EE);
[0014] print(255,"Meanwhile, in a secret room^");
[002F] waitForMessage();
[0030] loadRoom(16);
[0032] setCameraAt(57);
[0034] doSentence(253,341,0,1);
[003B] putActorAtObject(7,344);
[003F] putActor(12,30,52);
[0043] breakHere();
[0044] walkActorToActor(12,7,4);
[0048] waitForActor(12);
[004A] print(12,"Ahem.");
[0052] waitForMessage();
[0053] animateActor(7,244);
[0056] delay(30);
[005A] print(12,"I just talked to The King. He said the\x01\x01machine is working perfectly.");
[0096] waitForMessage();
[0097] printEgo("Yeah^ working perfectly.");
[00AF] waitForMessage();
[00B0] print(12,"He said in just a few more days all\x01\x01earthlings will be stupider than we are.");
[00F1] waitForMessage();
[00F2] printEgo("Yeah^ stupider than we are.");
[010B] waitForMessage();
[010C] animateActor(12,246);
[010F] delay(120);
[0113] animateActor(12,245);
[0116] breakHere();
[0117] print(12,"I think you've been hanging around the\x01\x01machine too long.");
[014A] waitForMessage();
[014B] printEgo("Yeah^ too long.");
[015A] waitForMessage();
[015B] walkActorTo(12,34,52);
[015F] breakHere();
[0160] print(12,"I think I need a new partner.");
[017A] waitForActor(12);
[017C] animateActor(7,246);
[017F] delay(60);
[0183] printEgo("Yeah^ new partner.");
[0195] delay(120);
[0199] startSound(11);
[019B] waitForMessage();
[019C] delay(60);
[01A0] animateActor(7,244);
[01A3] breakHere();
[01A4] printEgo("See ya.");
[01AC] waitForMessage();
[01AD] animateActor(7,247);
[01B0] delay(120);
[01B4] print(255,"");
[01B7] doSentence(STOP);
[01B9] putActorInRoom(12,0);
[01BC] putActorInRoom(7,4);
[01BF] putActor(7,22,52);
[01C3] Var[245] = 24;
[01C7] VAR_EGO = Var[117];
[01CA] endCutscene();
[01CB] stopObjectCode();
```

## SCv2_0140 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0016/SCv2_0140.txt](../../zak/converted/scripts_flat/LFv2_0016/SCv2_0140.txt); entry `0000`.

```text
[0000] delay(240);
[0004] cutscene();
[0005] Var[117] = VAR_EGO;
[0008] setBitVar(1557,0,Var[235]);
[000D] beginOverride();
[0011] loadRoom(0);
[0013] dummy(EE);
[0014] print(255,"Meanwhile, back in the secret room^");
[0035] waitForMessage();
[0036] loadRoom(16);
[0038] setCameraAt(57);
[003A] doSentence(253,341,0,1);
[0041] putActor(7,64,60);
[0045] putActor(12,30,54);
[0049] Var[121] = 64;
[004D] Var[122] = 60;
[0051] doSentence(253,345,0,1);
[0058] delay(60);
[005C] setState08(329);
[005F] printEgo("O BABY - I'M A JAILHOUND DOG LOVIN' MEAT\x01\x01TENDERIZIN' ROCKER IN MY BLUE SUEDE^");
[00A1] delay(60);
[00A5] startSound(10);
[00A7] delay(120);
[00AB] walkActorTo(12,43,54);
[00AF] waitForMessage();
[00B0] delay(30);
[00B4] print(12,"And WHAT do you think you're doing?");
[00D4] waitForMessage();
[00D5] printEgo("Grooveling to The King!");
[00EB] waitForMessage();
[00EC] print(12,"STOP IT THIS INSTANT!");
[0101] delay(60);
[0105] doSentence(254,345,0,1);
[010C] delay(60);
[0110] walkActorTo(7,48,54);
[0114] print(12,"You're SUPPOSED to be watching the\x01\x01machine, not dancing like a gloon!");
[0152] waitForActor(7);
[0154] animateActor(7,244);
[0157] waitForMessage();
[0158] printEgo("Sorry.");
[0160] waitForMessage();
[0161] VAR_EGO = 12;
[0165] actorFollowCamera(VAR_EGO);
[0167] walkActorTo(12,36,52);
[016B] printEgo("There is still a chance^");
[0181] delay(30);
[0185] walkActorTo(7,40,52);
[0189] waitForMessage();
[018A] animateActor(12,255);
[018D] animateActor(12,245);
[0190] printEgo("a very SMALL chance^");
[01A3] breakHere();
[01A4] breakHere();
[01A5] animateActor(7,255);
[01A8] waitForMessage();
[01A9] walkActorTo(12,36,56);
[01AD] printEgo("^that someone will discover and activate\x01\x01the Skolarian Device.");
[01E6] delay(60);
[01EA] walkActorTo(7,40,52);
[01EE] waitForActor(12);
[01F0] animateActor(12,245);
[01F3] waitForActor(7);
[01F5] animateActor(7,246);
[01F8] waitForMessage();
[01F9] walkActorTo(12,60,56);
[01FD] panCameraTo(56);
[01FF] printEgo("It's the only thing that could stop us!");
[0221] breakHere();
[0222] VAR_RESULT = getActorX(12);
[0225] unless (VAR_RESULT > 43) goto 0221;
[022B] walkActorTo(7,54,56);
[022F] waitForMessage();
[0230] printEgo("Of course, we will soon be in control\x01\x01and won't have to worry.");
[0265] waitForMessage();
[0266] waitForActor(12);
[0268] animateActor(12,244);
[026B] printEgo("But until then^");
[027A] waitForMessage();
[027B] walkActorTo(12,57,56);
[027F] printEgo("KEEP YOUR MIND ON THE JOB!");
[0296] waitForMessage();
[0297] VAR_EGO = 7;
[029B] walkActorTo(12,30,50);
[029F] printEgo("Whatever you say, boss.");
[02B5] breakHere();
[02B6] VAR_RESULT = getActorX(12);
[02B9] unless (VAR_RESULT < 55) goto 02B5;
[02BF] animateActor(7,247);
[02C2] breakHere();
[02C3] VAR_RESULT = getActorX(12);
[02C6] unless (VAR_RESULT < 53) goto 02C2;
[02CC] animateActor(7,244);
[02CF] waitForMessage();
[02D0] breakHere();
[02D1] VAR_RESULT = getActorX(12);
[02D4] unless (VAR_RESULT < 32) goto 02D0;
[02DA] delay(120);
[02DE] startSound(11);
[02E0] delay(120);
[02E4] printEgo("See ya.");
[02EC] waitForMessage();
[02ED] delay(30);
[02F1] animateActor(7,246);
[02F4] delay(120);
[02F8] Var[121] = 54;
[02FC] Var[122] = 56;
[0300] doSentence(253,345,0,1);
[0307] delay(30);
[030B] print(7,"DON'T BE COOL TO MY HEARTACHE HOVEL JUST\x01\x01TREAT MY LICE CUZ I'M ALL SHAKEN UP^");
[034D] waitForMessage();
[034E] VAR_EGO = Var[117];
[0351] print(255,"");
[0354] doSentence(254,345,0,1);
[035B] clearState08(329);
[035E] putActorInRoom(12,0);
[0361] putActorInRoom(7,4);
[0364] putActor(7,22,52);
[0368] Var[245] = 24;
[036C] doSentence(STOP);
[036E] endCutscene();
[036F] stopObjectCode();
```
