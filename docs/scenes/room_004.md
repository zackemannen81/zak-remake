# Room 004 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] Var[245] = 24;
[0008] VAR_RESULT = isScriptRunning(75);
[000B] unless (!VAR_RESULT) goto 004A;
[000F] VAR_RESULT = isScriptRunning(95);
[0012] unless (!VAR_RESULT) goto 004A;
[0016] doSentence(253,155,0,1);
[001D] doSentence(253,152,0,1);
[0024] unless (!getState08(159)) goto 0036;
[0029] putActorInRoom(7,4);
[002C] putActor(7,22,52);
[0030] animateActor(7,250);
[0036] putActorInRoom(7,4);
[0039] putActor(7,38,56);
[003D] animateActor(7,249);
[0040] Var[203] = Var[235];
[0043] doSentence(253,159,0,1);
[004A] setBoxFlags(4,64);
[004D] unless (getState08(155)) goto 0055;
[0052] setBoxFlags(4,0);
[0055] doSentence(250,158,0,1);
[005C] doSentence(250,154,0,1);
[0063] unless (!getState08(156)) goto 006E;
[0068] setBoxFlags(2,64);
[006E] setBoxFlags(2,0);
[0071] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/EXv2.txt); entry `0000`.

```text
[0000] stopSound(66);
[0002] stopSound(13);
[0004] Var[203] = Var[234];
[0007] stopObjectCode();
```

## OCv2_0030 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0030.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0030.txt); entry `0025`.

```text
[0025] unless (VAR_ACTIVE_OBJECT2 == 25) goto 0030;
[002B] startScript(61);
[0030] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0035] stopObjectCode();
```

## OCv2_0030 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0030.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0030.txt); entry `0036`.

```text
[0036] startScript(61);
[0038] stopObjectCode();
```

## OCv2_0030 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0030.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0030.txt); entry `0022`.

```text
[0022] pickupObject(VAR_ACTIVE_OBJECT1);
[0024] stopObjectCode();
```

## OCv2_0151 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0151.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0151.txt); entry `001D`.

```text
[001D] startScript(10);
[001F] setState08(135);
[0022] stopObjectCode();
```

## OCv2_0151 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0151.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0151.txt); entry `0023`.

```text
[0023] startScript(11);
[0025] clearState08(135);
[0028] stopObjectCode();
```

## OCv2_0151 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0151.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0151.txt); entry `0029`.

```text
[0029] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0050;
[002D] VAR_RESULT = getActorWalkBox(7);
[0030] unless (VAR_RESULT == 3) goto 004A;
[0036] cursorCommand(15, 2);
[0039] faceActor(7,VAR_EGO);
[003C] breakHere();
[003D] print(7,"See ya.");
[0046] waitForMessage();
[0047] cursorCommand(247, 1);
[004A] loadRoomWithEgo(135,3,255,255);
[0050] stopObjectCode();
```

## OCv2_0151 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0151.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0151.txt); entry `0051`.

```text
[0051] Var[66] = Var[234];
[0054] Var[14] = VAR_EGO;
[0057] Var[14] += 163;
[005B] unless (Var[14] == 40) goto 0070;
[0061] Var[14] = VAR_EGO;
[0064] Var[14] += 166;
[0068] unless (Var[14] == 48) goto 0070;
[006E] Var[66]++;
[0070] stopObjectCode();
```

## OCv2_0152 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0152.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0152.txt); entry `002C`.

```text
[002C] printEgo("It's already on.");
[003C] stopObjectCode();
```

## OCv2_0152 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0152.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0152.txt); entry `003D`.

```text
[003D] printEgo("There's no off switch.");
[0052] stopObjectCode();
```

## OCv2_0152 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0152.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0152.txt); entry `0074`.

```text
[0074] doSentence(253,153,0,1);
[007B] stopObjectCode();
```

## OCv2_0152 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0152.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0152.txt); entry `0053`.

```text
[0053] printEgo("It lists what everyone in town owes.");
[0073] stopObjectCode();
```

## OCv2_0152 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0152.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0152.txt); entry `007C`.

```text
[007C] Var[47] = 100;
[0080] breakHere();
[0081] Var[47]--;
[0083] unless (!Var[47]) goto 00A9;
[0087] waitForMessage();
[0088] unless (!getState08(159)) goto 009C;
[008D] print(7,"Tum de dum.");
[009C] print(7,"Hello?");
[00A5] Var[47] = 100;
```

## OCv2_0153 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0153.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0153.txt); entry `001A`.

```text
[001A] startScript(46);
[001C] stopObjectCode();
```

## OCv2_0153 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0153.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0153.txt); entry `001D`.

```text
[001D] unless (VAR_EGO == 1) goto 00DA;
[0023] unless (!getState04(152)) goto 00B8;
[0028] VAR_RESULT = getObjectOwner(15);
[002C] unless (VAR_RESULT == 1) goto 0095;
[0032] startSound(66);
[0034] Var[45] = Var[234];
[0037] breakHere();
[0038] VAR_RESULT = getDist(1,152);
[003E] unless (VAR_RESULT > 0) goto 0047;
[0047] Var[45]++;
[0049] unless (Var[45] > 30) goto 0037;
[004F] setState04(152);
[0052] printEgo("There, now my bill is zero. I'll stamp\x01\x01it paid and leave it here.");
[0089] setOwnerOf(15,0);
[008D] clearState04(87);
[0090] startScript(134);
[0095] printEgo("I don't remember my account number!");
[00B8] printEgo("I've already taken care of my bill.");
[00DA] printEgo("I don't know a thing about computers.");
[00FB] stopSound(66);
[00FD] stopObjectCode();
```

## OCv2_0154 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0154.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0154.txt); entry `0019`.

```text
[0019] printEgo("THE PHONE COMPANY\x01\x01Please pay bills here.");
[003E] stopObjectCode();
```

## OCv2_0154 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0154.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0154.txt); entry `003F`.

```text
[003F] VAR_RESULT = getActorWalkBox(VAR_EGO);
[0042] unless (VAR_RESULT == 3) goto 0051;
[0048] setState02(156);
[004B] clearState02(157);
[0051] setState02(157);
[0054] clearState02(156);
[0057] breakHere();
```

## OCv2_0155 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0155.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0155.txt); entry `001D`.

```text
[001D] startScript(10);
[001F] setState08(329);
[0022] stopObjectCode();
```

## OCv2_0155 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0155.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0155.txt); entry `0023`.

```text
[0023] startScript(11);
[0025] clearState08(329);
[0028] stopObjectCode();
```

## OCv2_0155 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0155.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0155.txt); entry `0029`.

```text
[0029] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0069;
[002D] setBoxFlags(4,0);
[0030] walkActorTo(VAR_EGO,30,48);
[0034] waitForActor(VAR_EGO);
[0036] VAR_RESULT = getActorX(VAR_EGO);
[0039] unless (VAR_RESULT != 30) goto 0042;
[0042] VAR_RESULT = getActorY(VAR_EGO);
[0045] unless (VAR_RESULT != 48) goto 004E;
[004E] doSentence(253,151,0,1);
[0055] unless (Var[66]) goto 0063;
[0059] VAR_RESULT = isScriptRunning(77);
[005C] unless (!VAR_RESULT) goto 0063;
[0060] setState04(330);
[0063] loadRoomWithEgo(329,16,255,255);
[0069] stopObjectCode();
```

## OCv2_0155 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0155.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0155.txt); entry `006A`.

```text
[006A] breakHere();
[006B] VAR_RESULT = isScriptRunning(77);
[006E] unless (!VAR_RESULT) goto 006A;
[0072] VAR_RESULT = getActorWalkBox(1);
[0075] unless (VAR_RESULT == 3) goto 008D;
[007B] unless (Var[167] == 48) goto 008A;
[0081] unless (Var[164] == 40) goto 008A;
[008D] VAR_RESULT = getActorWalkBox(2);
[0090] unless (VAR_RESULT == 3) goto 00B5;
[0096] unless (Var[168] == 48) goto 00A5;
[009C] unless (Var[165] == 40) goto 00A5;
[00A5] VAR_RESULT = isScriptRunning(95);
[00A8] unless (!VAR_RESULT) goto 00B5;
[00AC] VAR_RESULT = isScriptRunning(75);
[00AF] unless (!VAR_RESULT) goto 00B5;
[00B3] startScript(95);
```

## OCv2_0156 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0156.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0156.txt); entry `0023`.

```text
[0023] VAR_RESULT = isScriptRunning(77);
[0026] unless (!VAR_RESULT) goto 0087;
[002A] VAR_RESULT = getActorWalkBox(VAR_EGO);
[002D] unless (VAR_RESULT != 3) goto 0087;
[0033] unless (VAR_EGO <= 2) goto 0087;
[0039] faceActor(7,VAR_EGO);
[003C] breakHere();
[003D] Var[14] = VAR_EGO;
[0040] Var[14] += 163;
[0044] unless (Var[14] == 40) goto 0068;
[004A] Var[14] = VAR_EGO;
[004D] Var[14] += 166;
[0051] unless (Var[14] == 48) goto 0068;
[0057] print(7,"Hello.");
[0060] startScript(10);
[0062] setBoxFlags(2,0);
[0068] print(7,"You can't come back here!");
[0080] waitForMessage();
[0081] animateActor(7,246);
[0087] startScript(10);
[0089] setBoxFlags(2,0);
[008C] stopObjectCode();
```

## OCv2_0156 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0156.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0156.txt); entry `008D`.

```text
[008D] startScript(11);
[008F] setBoxFlags(2,64);
[0092] stopObjectCode();
```

## OCv2_0156 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0156.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0156.txt); entry `0093`.

```text
[0093] Var[48] = Var[234];
[0096] stopScript(77);
[0098] clearState08(159);
[009B] breakHere();
[009C] VAR_RESULT = getActorWalkBox(VAR_EGO);
[009F] unless (VAR_RESULT != 3) goto 00AD;
[00A5] doSentence(1,156,0,0);
[00AC] waitForSentence();
[00AD] unless (getState08(156)) goto 00BA;
[00B2] doSentence(2,157,0,0);
[00B9] waitForSentence();
[00BA] doSentence(1,155,0,0);
[00C1] waitForSentence();
[00C2] setBoxFlags(4,0);
[00C5] walkActorTo(7,30,48);
[00C9] waitForActor(7);
[00CB] putActorInRoom(7,0);
[00CE] delay(30);
[00D2] Var[48]++;
[00D4] stopObjectCode();
```

## OCv2_0157 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0157.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0157.txt); entry `0029`.

```text
[0029] Var[48] = Var[234];
[002C] unless (getState08(87)) goto 0033;
[0031] stopScript(77);
[0033] clearState08(159);
[0036] breakHere();
[0037] doSentence(1,156,0,0);
[003E] waitForSentence();
[003F] doSentence(2,157,0,0);
[0046] waitForSentence();
[0047] walkActorTo(7,22,52);
[004B] waitForActor(7);
[004D] animateActor(7,246);
[0050] delay(60);
[0054] Var[48]++;
[0056] stopObjectCode();
```

## OCv2_0157 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0157.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0157.txt); entry `0021`.

```text
[0021] doSentence(VAR_ACTIVE_VERB,156,0,1);
[0028] stopObjectCode();
```

## OCv2_0158 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0158.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0158.txt); entry `001A`.

```text
[001A] breakHere();
[001B] VAR_RESULT = getActorWalkBox(VAR_EGO);
[001E] unless (VAR_RESULT == 4) goto 0027;
[0027] setBoxFlags(4,64);
[002A] stopObjectCode();
```

## OCv2_0159 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0159.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0159.txt); entry `0020`.

```text
[0020] printEgo("I don't have any change.");
[0036] stopObjectCode();
```

## OCv2_0159 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0159.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0159.txt); entry `0037`.

```text
[0037] Var[67] = Var[234];
[003A] Var[14] = Var[67];
[003D] Var[14] += 143;
[0041] Var[66] = Var[14];
[0044] printEgo("\x04\x42\x04\x02\x02");
[0049] Var[67]++;
[004B] unless (Var[67] > 3) goto 003A;
[0051] printEgo("");
[0053] stopObjectCode();
```

## OCv2_0159 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0159.txt](../../zak/converted/scripts_flat/LFv2_0004/ROv2/OCv2_0159.txt); entry `0054`.

```text
[0054] breakHere();
[0055] unless (VAR_ACTIVE_VERB == 3) goto 01A3;
[005B] unless (VAR_ACTIVE_OBJECT2 == 7) goto 01A3;
[0061] VAR_ACTIVE_OBJECT2 = Var[234];
[0064] Var[47] = 100;
[0068] Var[49] = VAR_ACTIVE_OBJECT1;
[006B] VAR_RESULT = getActorWalkBox(7);
[006E] unless (VAR_RESULT == 3) goto 0087;
[0074] VAR_RESULT = getActorWalkBox(VAR_EGO);
[0077] unless (VAR_RESULT != 3) goto 0084;
[007D] animateActor(VAR_EGO,255);
[0080] walkActorToObject(VAR_EGO,158);
[0087] waitForActor(VAR_EGO);
[0089] walkActorToObject(VAR_EGO,158);
[008D] cutscene();
[008E] Var[117] = VAR_EGO;
[0091] VAR_EGO = 7;
[0095] doSentence(253,157,0,1);
[009C] printEgo("One moment^");
[00A8] breakHere();
[00A9] unless (Var[48]) goto 00A8;
[00AD] VAR_EGO = Var[117];
[00B0] endCutscene();
[00B1] waitForActor(VAR_EGO);
[00B3] VAR_ACTIVE_OBJECT1 = Var[49];
[00B6] unless (VAR_ACTIVE_OBJECT1 == 15) goto 00C1;
[00BC] startScript(74);
[00C1] unless (classOfIs(VAR_ACTIVE_OBJECT1,32)) goto 0136;
[00C6] print(7,"Look what you found! How interesting!");
[00E9] Var[118] = Var[234];
[00EC] Var[66] = 33;
[00F0] VAR_RESULT = getObjectOwner(Var[66]);
[00F3] unless (VAR_RESULT == VAR_EGO) goto 00FF;
[00F8] unless (classOfIs(Var[66],32)) goto 00FF;
[00FD] Var[118]++;
[00FF] Var[66]++;
[0101] unless (Var[66] > 81) goto 00F0;
[0107] unless (Var[118] > Var[235]) goto 0126;
[010C] waitForMessage();
[010D] print(7,"OH! You have MORE than one!");
[0126] Var[238] = VAR_EGO;
[0129] Var[120] = Var[234];
[012C] setBitVar(1544,0,Var[234]);
[0131] startScript(75);
[0136] Var[14] = VAR_EGO;
[0139] Var[14] += 163;
[013D] unless (Var[14] == 40) goto 015F;
[0143] Var[14] = VAR_EGO;
[0146] Var[14] += 166;
[014A] unless (Var[14] == 48) goto 015F;
[0150] print(7,"No thanks.");
[015F] unless (classOfIs(VAR_ACTIVE_OBJECT1,128)) goto 017E;
[0164] print(7,"Do you have a bill to pay?");
[017E] print(7,"We can't accept your \x06\x09\x06\x01\x01as payment.");
[019F] waitForMessage();
[01A0] VAR_ACTIVE_OBJECT2 = Var[234];
```

## SCv2_0074 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0004/SCv2_0074.txt](../../zak/converted/scripts_flat/LFv2_0004/SCv2_0074.txt); entry `0000`.

```text
[0000] cutscene();
[0001] walkActorToObject(VAR_EGO,158);
[0005] walkActorToObject(7,152);
[0009] doSentence(253,151,0,1);
[0010] unless (Var[66]) goto 002E;
[0014] print(7,"No charge for Brothers!");
[002E] Var[46] = 1138;
[0032] print(7,"You owe $\x04\x2E\x04. You calling Mars or\x01\x01something?\x03\x03CashCard please.");
[006A] waitForMessage();
[006B] unless (VAR_EGO == 1) goto 0081;
[0071] VAR_RESULT = getObjectOwner(18);
[0075] unless (VAR_RESULT != 1) goto 007E;
[0081] VAR_RESULT = getObjectOwner(32);
[0085] unless (VAR_RESULT != 2) goto 00C2;
[008B] printEgo("I don't have it here.");
[009E] waitForMessage();
[009F] print(7,"How silly of you. Here's your bill.");
[00C2] startSound(66);
[00C4] unless (Var[194]) goto 0126;
[00C8] print(7,"Tsk tsk! Scribbling on your phone bill!\x03\x03An extra $10 charge for defacing phone\x01\x01company property!");
[011E] waitForMessage();
[011F] Var[46] += 10;
[0123] Var[194] = Var[234];
[0126] delay(240);
[012A] stopSound(66);
[012C] breakHere();
[012D] startSound(84);
[012F] breakHere();
[0130] VAR_RESULT = isSoundRunning(84);
[0133] unless (!VAR_RESULT) goto 012F;
[0137] Var[14] = VAR_EGO;
[013A] Var[14] += 61;
[013E] unless (Var[14] < Var[46]) goto 0161;
[0143] print(7,"You don't have enough money!");
[0161] Var[14] = VAR_EGO;
[0164] Var[14] += 61;
[0168] Var[Var[14]] -= Var[46];
[016B] print(7,"Next time be prompt with your payment!");
[018E] setOwnerOf(15,0);
[0192] setState04(152);
[0195] clearState04(87);
[0198] startScript(134);
[019A] walkActorTo(7,22,52);
[019E] waitForActor(7);
[01A0] animateActor(7,246);
[01A3] endCutscene();
[01A4] stopObjectCode();
```

## SCv2_0075 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0004/SCv2_0075.txt](../../zak/converted/scripts_flat/LFv2_0004/SCv2_0075.txt); entry `0000`.

```text
[0000] VAR_RESULT = isScriptRunning(67);
[0003] unless (VAR_RESULT) goto 000B;
[0007] breakHere();
[000B] unless (!Var[238]) goto 0011;
[000F] stopScript(0);
[0011] unless (Var[238] > 2) goto 0019;
[0017] stopScript(0);
[0019] doSentence(254,155,0,1);
[0020] cutscene();
[0021] loadScript(142)
[0024] loadScript(143)
[0027] Var[119] = Var[234];
[002A] startScript(141);
[002C] breakHere();
[002D] VAR_RESULT = isScriptRunning(141);
[0030] unless (!VAR_RESULT) goto 002C;
[0034] unless (Var[119]) goto 003B;
[003B] clearState04(330);
[003E] beginOverride();
[0042] startScript(142);
[0044] breakHere();
[0045] VAR_RESULT = isScriptRunning(142);
[0048] unless (!VAR_RESULT) goto 0044;
[004C] startScript(143);
[004E] breakHere();
[004F] VAR_RESULT = isScriptRunning(143);
[0052] unless (!VAR_RESULT) goto 004E;
[0056] unless (VAR_OVERRIDE) goto 00A6;
[005A] stopScript(143);
[005C] stopScript(142);
[005E] setBitVar(1464,Var[117],Var[234]);
[0063] putActorInRoom(Var[117],16);
[0066] putActor(Var[117],81,44);
[006A] animateActor(Var[117],250);
[006D] loadRoom(16);
[006F] doSentence(STOP);
[0071] doSentence(253,344,0,1);
[0078] unless (Var[66]) goto 0083;
[007C] putActor(Var[66],45,52);
[0080] animateActor(Var[66],248);
[0083] startScript(5);
[0085] putActorInRoom(7,4);
[0088] putActor(7,22,52);
[008C] doSentence(4,331,0,1);
[0093] doSentence(2,328,0,1);
[009A] unless (!getState04(330)) goto 00A6;
[009F] doSentence(2,329,0,1);
[00A6] VAR_EGO = Var[117];
[00A9] actorFollowCamera(VAR_EGO);
[00AB] startScript(19);
[00AD] delay(60);
[00B1] endCutscene();
[00B2] cursorCommand(247, 1);
[00B5] stopObjectCode();
```

## SCv2_0077 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0004/SCv2_0077.txt](../../zak/converted/scripts_flat/LFv2_0004/SCv2_0077.txt); entry `0000`.

```text
[0000] delay(420);
[0004] cutscene();
[0005] Var[117] = VAR_EGO;
[0008] loadRoom(4);
[000A] unless (getState08(159)) goto 0015;
[000F] clearState08(159);
[0015] startScript(17);
[0017] Var[47] = 5000;
[001B] delay(120);
[001F] VAR_EGO = 7;
[0023] VAR_RESULT = getActorWalkBox(VAR_EGO);
[0026] unless (VAR_RESULT == 3) goto 0039;
[002C] unless (!getState08(156)) goto 0039;
[0031] doSentence(1,157,0,0);
[0038] waitForSentence();
[0039] walkActorToObject(7,159);
[003D] waitForActor(7);
[003F] setState08(159);
[0042] stopScript(17);
[0044] stopSound(13);
[0046] delay(60);
[004A] printEgo("Hello?\x03\x03Hello, who's there?\x03\x03Is this Edna again?");
[0075] waitForMessage();
[0076] delay(120);
[007A] VAR_EGO = Var[117];
[007D] endCutscene();
[007E] breakHere();
[007F] unless (!getState08(87)) goto 007E;
[0084] cutscene();
[0085] Var[117] = VAR_EGO;
[0088] delay(60);
[008C] loadRoom(4);
[008E] delay(120);
[0092] VAR_EGO = 7;
[0096] printEgo("They hung up!");
[00A3] waitForMessage();
[00A4] doSentence(253,157,0,1);
[00AB] breakHere();
[00AC] unless (Var[48]) goto 00AB;
[00B0] VAR_EGO = Var[117];
[00B3] endCutscene();
[00B4] stopObjectCode();
```

## SCv2_0092 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0004/SCv2_0092.txt](../../zak/converted/scripts_flat/LFv2_0004/SCv2_0092.txt); entry `0000`.

```text
[0000] delay(600);
[0004] breakHere();
[0005] VAR_RESULT = getActorRoom(7);
[0008] unless (VAR_RESULT == 4) goto 0004;
[000E] cutscene();
[000F] VAR_EGO = 7;
[0013] actorFollowCamera(7);
[0015] delay(60);
[0019] animateActor(7,246);
[001C] Var[119] = Var[234];
[001F] printEgo("Hmm. The prisoner's probably lost h\x02\x02");
[0040] unless (Var[236] > 13) goto 005D;
[0046] Var[118] = 1;
[004A] unless (Var[237] > 13) goto 0054;
[0050] Var[119] = 2;
[0054] printEgo("is\x01\x01\x02\x02");
[005D] Var[118] = 2;
[0061] printEgo("er\x01\x01\x02\x02");
[0067] printEgo("mind by now.");
[0073] waitForMessage();
[0074] doSentence(253,156,0,1);
[007B] breakHere();
[007C] unless (Var[48]) goto 007B;
[0080] putActorInRoom(7,16);
[0083] putActor(7,55,60);
[0087] loadRoom(16);
[0089] setCameraAt(80);
[008B] unless (getState08(331)) goto 0098;
[0090] doSentence(5,331,0,0);
[0097] waitForSentence();
[0098] walkActorTo(7,84,53);
[009C] waitForActor(7);
[009E] printEgo("You are free to go now. Don't come back!");
[00C0] walkActorToObject(7,329);
[00C4] delay(60);
[00C8] walkActorToObject(Var[118],329);
[00CC] unless (Var[119]) goto 00D8;
[00D0] delay(60);
[00D4] walkActorToObject(Var[119],329);
[00D8] breakHere();
[00D9] VAR_RESULT = getActorX(Var[118]);
[00DC] unless (VAR_RESULT < 55) goto 00D8;
[00E2] putActorInRoom(Var[118],3);
[00E5] putActor(Var[118],59,56);
[00E9] putActorInRoom(7,4);
[00EC] putActor(7,22,52);
[00F0] animateActor(Var[118],250);
[00F3] unless (Var[119]) goto 0101;
[00F7] putActorInRoom(Var[119],3);
[00FA] putActor(Var[119],63,56);
[00FE] animateActor(Var[119],250);
[0101] VAR_EGO = Var[118];
[0104] startScript(19);
[0106] actorFollowCamera(VAR_EGO);
[0108] endCutscene();
[0109] stopObjectCode();
```

## SCv2_0093 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0004/SCv2_0093.txt](../../zak/converted/scripts_flat/LFv2_0004/SCv2_0093.txt); entry `0000`.

```text
[0000] breakHere();
[0001] cutscene();
[0002] Var[117] = VAR_EGO;
[0005] VAR_EGO = 7;
[0009] actorFollowCamera(7);
[000B] beginOverride();
[000F] delay(60);
[0013] unless (VAR_ROOM == 4) goto 0048;
[0019] animateActor(7,246);
[001C] printEgo("I think I'll check on the prisoner.");
[003B] waitForMessage();
[003C] doSentence(253,156,0,1);
[0043] breakHere();
[0044] unless (Var[48]) goto 0043;
[0048] putActorInRoom(7,16);
[004B] putActor(7,55,60);
[004F] loadRoom(16);
[0051] startScript(5);
[0053] setCameraAt(80);
[0055] walkActorToActor(7,Var[117],4);
[0059] waitForActor(7);
[005B] printEgo("How'd you get in here?");
[006F] waitForMessage();
[0070] unless (getState08(331)) goto 007D;
[0075] doSentence(5,331,0,0);
[007C] waitForSentence();
[007D] walkActorToActor(7,Var[117],4);
[0081] waitForActor(7);
[0083] printEgo("Don't you know the Mindbender's not good\x01\x01for your health!");
[00B6] waitForMessage();
[00B7] walkActorToObject(7,329);
[00BB] breakHere();
[00BC] VAR_RESULT = getActorX(7);
[00BF] unless (VAR_RESULT < 58) goto 00BB;
[00C5] unless (VAR_OVERRIDE) goto 00D2;
[00C9] actorFollowCamera(Var[117]);
[00CB] doSentence(5,331,0,1);
[00D2] doSentence(1,329,0,1);
[00D9] VAR_EGO = Var[117];
[00DC] actorFollowCamera(VAR_EGO);
[00DE] setState04(330);
[00E1] endCutscene();
[00E2] putActorInRoom(7,4);
[00E5] putActor(7,22,52);
[00E9] stopObjectCode();
```

## SCv2_0094 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0004/SCv2_0094.txt](../../zak/converted/scripts_flat/LFv2_0004/SCv2_0094.txt); entry `0000`.

```text
[0000] breakHere();
[0001] cutscene();
[0002] setBitVar(1544,0,Var[234]);
[0007] actorFollowCamera(7);
[0009] Var[117] = VAR_EGO;
[000C] VAR_EGO = 7;
[0010] delay(60);
[0014] animateActor(7,247);
[0017] delay(60);
[001B] animateActor(7,246);
[001E] waitForActor(7);
[0020] printEgo("What was that!");
[002E] waitForMessage();
[002F] unless (getState04(330)) goto 0065;
[0034] animateActor(7,245);
[0037] printEgo("Oh, it must be the Brother in the back.");
[0058] waitForMessage();
[0059] animateActor(7,246);
[005C] waitForActor(7);
[005E] Var[238] = 255;
[0065] doSentence(253,156,0,1);
[006C] breakHere();
[006D] unless (Var[48]) goto 006C;
[0071] putActorInRoom(7,16);
[0074] putActor(7,17,48);
[0078] actorFollowCamera(7);
[007A] animateActor(7,250);
[007D] delay(30);
[0081] Var[238] = getClosestObjActor(7);
[0085] unless (Var[238] == 255) goto 00D2;
[008B] animateActor(7,244);
[008E] delay(60);
[0092] animateActor(7,245);
[0095] delay(60);
[0099] printEgo("I THOUGHT I heard something!");
[00B3] waitForMessage();
[00B4] animateActor(7,247);
[00B7] waitForActor(7);
[00B9] putActorInRoom(7,4);
[00BC] putActor(7,22,52);
[00C0] delay(30);
[00C4] doSentence(2,329,0,1);
[00CB] delay(30);
[00D2] faceActor(7,Var[238]);
[00D5] printEgo("An intruder!");
[00E2] setBitVar(1544,0,Var[235]);
[00E7] waitForMessage();
[00E8] Var[117] = Var[238];
[00EB] VAR_EGO = Var[117];
[00EE] startScript(19);
[00F0] endCutscene();
[00F1] unless (Var[238] != 255) goto 00F9;
[00F7] chainScript(95);
[00F9] stopObjectCode();
```

## SCv2_0095 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0004/SCv2_0095.txt](../../zak/converted/scripts_flat/LFv2_0004/SCv2_0095.txt); entry `0000`.

```text
[0000] Var[238] = VAR_EGO;
[0003] Var[199] = Var[235];
[0006] Var[120] = Var[234];
[0009] unless (VAR_ROOM == 10) goto 0014;
[000F] Var[120]++;
[0014] Var[245] = 24;
[0018] breakHere();
[0019] Var[66] = getActorRoom(Var[238]);
[001C] VAR_RESULT = getActorRoom(7);
[001F] unless (VAR_RESULT != Var[66]) goto 0099;
[0024] unless (Var[66] == 4) goto 0050;
[002A] delay(120);
[002E] VAR_RESULT = getActorRoom(Var[238]);
[0031] unless (VAR_RESULT == 4) goto 0050;
[0037] actorFollowCamera(Var[238]);
[0039] doSentence(1,155,0,1);
[0040] breakHere();
[0041] putActorInRoom(7,4);
[0044] putActor(7,28,52);
[0048] animateActor(7,250);
[004B] startScript(5);
[0050] delay(60);
[0054] cutscene();
[0055] actorFollowCamera(7);
[0057] delay(60);
[005B] animateActor(7,246);
[005E] print(7,"Where'd \x02\x02");
[0069] unless (Var[238] == 2) goto 0074;
[006F] print(7,"s\x02\x02");
[0074] print(7,"he go?");
[007C] waitForMessage();
[007D] delay(120);
[0081] unless (VAR_ROOM != 4) goto 0096;
[0087] startSound(89);
[0089] setCameraAt(VAR_CAMERA_POS_X);
[008B] putActorInRoom(7,4);
[008E] putActor(7,22,52);
[0092] delay(120);
[0096] endCutscene();
[0097] stopScript(0);
[0099] unless (VAR_ROOM != Var[66]) goto 00B6;
[009E] loadRoom(Var[66]);
[00A0] Var[67] = getActorX(Var[238]);
[00A3] Var[67] -= 2;
[00A7] Var[61] = getActorY(Var[238]);
[00AA] putActorInRoom(7,VAR_ROOM);
[00AD] putActor(7,Var[67],Var[61]);
[00B1] startScript(5);
[00B6] walkActorToActor(7,Var[238],0);
[00BA] breakHere();
[00BB] VAR_RESULT = getDist(7,Var[238]);
[00C0] unless (VAR_RESULT <= 2) goto 00C9;
[00C9] breakHere();
[00CA] VAR_RESULT = getDist(7,Var[238]);
[00CF] unless (VAR_RESULT <= 2) goto 0018;
[00D5] doSentence(STOP);
[00D7] animateActor(7,255);
[00DA] animateActor(Var[238],255);
[00DD] setBitVar(1440,Var[238],Var[235]);
[00E2] faceActor(Var[238],7);
[00E5] stopObjectCode();
```

## SCv2_0141 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0004/SCv2_0141.txt](../../zak/converted/scripts_flat/LFv2_0004/SCv2_0141.txt); entry `0000`.

```text
[0000] setBitVar(1440,Var[238],Var[234]);
[0005] Var[117] = Var[238];
[0008] VAR_EGO = 7;
[000C] actorFollowCamera(VAR_EGO);
[000E] Var[118] = Var[234];
[0011] Var[66] = 33;
[0015] VAR_RESULT = getObjectOwner(Var[66]);
[0018] unless (VAR_RESULT == Var[117]) goto 0027;
[001D] unless (classOfIs(Var[66],32)) goto 0027;
[0022] setOwnerOf(Var[66],7);
[0025] Var[118]++;
[0027] Var[66]++;
[0029] unless (Var[66] > 81) goto 0015;
[002F] unless (Var[118]) goto 0036;
[0033] setState04(328);
[0036] waitForMessage();
[0037] Var[14] = Var[117];
[003A] Var[14] += 163;
[003E] unless (Var[14] == 40) goto 017C;
[0044] Var[14] = Var[117];
[0047] Var[14] += 166;
[004B] unless (Var[14] == 48) goto 017C;
[0051] VAR_RESULT = getBitVar(1544,0);
[0056] unless (VAR_RESULT) goto 007C;
[005A] printEgo("Sorry! I thought you were an intruder!");
[007C] waitForMessage();
[007D] unless (Var[118]) goto 00B3;
[0081] printEgo("I'll put your artifact\x02\x02");
[0097] unless (Var[118] > Var[235]) goto 00A0;
[009C] printEgo("s\x02\x02");
[00A0] printEgo(" in a safe place!");
[00B3] printEgo("I didn't know there was a Brother here.");
[00D5] waitForMessage();
[00D6] waitForActor(7);
[00D8] faceActor(7,Var[117]);
[00DB] faceActor(Var[117],7);
[00DE] stopObjectCode();
[017C] Var[66] = 1;
[0180] unless (Var[66] == Var[117]) goto 0189;
[0185] Var[66] = 2;
[0189] unless (VAR_ROOM != 4) goto 01BB;
[018F] VAR_RESULT = getActorRoom(Var[66]);
[0192] unless (VAR_RESULT == VAR_ROOM) goto 01BB;
[0197] Var[14] = Var[66];
[019A] Var[14] += 163;
[019E] unless (Var[14] == 40) goto 01BB;
[01A4] Var[14] = Var[66];
[01A7] Var[14] += 166;
[01AB] unless (Var[14] == 48) goto 01BB;
[01B1] Var[117] = Var[66];
[01B4] walkActorToActor(7,Var[117],4);
[01BB] stopObjectCode();
```

## SCv2_0142 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0004/SCv2_0142.txt](../../zak/converted/scripts_flat/LFv2_0004/SCv2_0142.txt); entry `0000`.

```text
[0000] unless (!Var[118]) goto 0046;
[0004] unless (!Var[120]) goto 0043;
[0008] unless (VAR_ROOM == 4) goto 0011;
[0011] unless (VAR_ROOM == 16) goto 002E;
[0017] printEgo("How'd you get in here?");
[002E] printEgo("Where's the artifact?");
[0046] printEgo("Where'd you get the artifact\x02\x02");
[0061] unless (Var[118] > 1) goto 006B;
[0067] printEgo("s\x02\x02");
[006B] printEgo("?");
[006E] waitForActor(7);
[0070] waitForMessage();
[0071] unless (Var[120]) goto 008D;
[0075] printEgo("You're coming with me.");
[008D] printEgo("Not talking? I know what to do with you!");
[00AF] unless (VAR_ROOM == 16) goto 00BC;
[00B5] walkActorTo(7,80,54);
[00BC] waitForMessage();
[00BD] unless (VAR_ROOM != 4) goto 00C7;
[00C3] setCameraAt(VAR_CAMERA_POS_X);
[00C5] startSound(89);
[00C7] setBitVar(1464,Var[117],Var[234]);
[00CC] putActorInRoom(7,16);
[00CF] putActor(7,73,58);
[00D3] putActorInRoom(Var[117],16);
[00D6] putActor(Var[117],72,53);
[00DA] stopScript(64);
[00DC] ActorOps(Var[117],[Sound(6)]);
[00E0] unless (VAR_ROOM != 4) goto 00EA;
[00E6] delay(120);
[00EA] actorFollowCamera(7);
[00EC] delay(30);
[00F0] walkActorTo(7,81,55);
[00F4] printEgo("Get in!");
[00FC] delay(60);
[0100] walkActorToObject(Var[117],332);
[0104] doSentence(253,344,0,1);
[010B] unless (Var[66]) goto 0113;
[010F] walkActorTo(Var[66],45,52);
[0113] waitForActor(7);
[0115] animateActor(7,247);
[0118] waitForActor(Var[117]);
[011A] printEgo("Stay!");
[0121] unless (getState08(331)) goto 0134;
[0126] doSentence(5,331,0,0);
[012D] waitForSentence();
[012E] animateActor(7,244);
[0134] doSentence(4,331,0,0);
[013B] waitForSentence();
[013C] walkActorToActor(7,Var[117],2);
[0140] waitForActor(7);
[0142] animateActor(7,247);
[0145] waitForActor(7);
[0147] unless (Var[118]) goto 0175;
[014B] setState04(328);
[014E] printEgo("Oh, thanks for the artifact\x02\x02");
[0168] unless (Var[118] > 1) goto 0172;
[016E] printEgo("s\x02\x02");
[0172] printEgo(".");
[0175] waitForMessage();
[0176] printEgo("See ya.");
[017E] stopObjectCode();
```

## SCv2_0143 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0004/SCv2_0143.txt](../../zak/converted/scripts_flat/LFv2_0004/SCv2_0143.txt); entry `0000`.

```text
[0000] waitForMessage();
[0001] unless (VAR_ROOM == 4) goto 002A;
[0007] doSentence(253,156,0,1);
[000E] breakHere();
[000F] unless (Var[48]) goto 000E;
[0013] delay(180);
[0017] putActorInRoom(7,4);
[001A] putActor(7,30,48);
[001E] animateActor(7,248);
[0021] startScript(5);
[0023] breakHere();
[0024] walkActorToObject(7,152);
[0028] stopScript(0);
[002A] unless (VAR_ROOM == 16) goto 0091;
[0030] unless (Var[118]) goto 0048;
[0034] doSentence(1,328,0,0);
[003B] waitForSentence();
[003C] delay(60);
[0040] doSentence(2,328,0,0);
[0047] waitForSentence();
[0048] unless (Var[120]) goto 0065;
[004C] unless (getState08(329)) goto 0059;
[0051] doSentence(2,329,0,0);
[0058] waitForSentence();
[0059] animateActor(7,246);
[005C] delay(60);
[0060] startSound(89);
[0065] doSentence(1,329,0,0);
[006C] waitForSentence();
[006D] delay(30);
[0071] setCameraAt(VAR_CAMERA_POS_X);
[0073] putActorInRoom(7,4);
[0076] putActor(7,22,52);
[007A] delay(30);
[007E] unless (!getState04(330)) goto 008A;
[0083] doSentence(2,329,0,1);
[008A] delay(60);
[0094] stopObjectCode();
```
