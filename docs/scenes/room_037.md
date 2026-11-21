# Room 037 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0037/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0037/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] loadSound(8)
[0007] ActorOps(VAR_EGO,[Sound(8)]);
[000B] setBoxFlags(0,128);
[000E] setBoxFlags(1,128);
[0011] setBoxFlags(2,128);
[0014] unless (VAR_ROOM < 170) goto 0024;
[001A] setBoxFlags(0,0);
[001D] RoomScroll(20,24);
[0024] unless (VAR_ROOM < 174) goto 0034;
[002A] setBoxFlags(1,0);
[002D] RoomScroll(20,45);
[0034] setBoxFlags(2,0);
[0037] RoomScroll(35,51);
[003B] Var[14] = VAR_EGO;
[003E] Var[14] += 222;
[0042] unless (Var[14] == 150) goto 004B;
[004B] Var[14] = VAR_EGO;
[004E] Var[14] += 222;
[0052] unless (Var[14] == 147) goto 005C;
[0058] RoomColor(14,10);
[005C] Var[14] = VAR_EGO;
[005F] Var[14] += 222;
[0063] unless (Var[14] == 42) goto 006C;
[006C] Var[14] = VAR_EGO;
[006F] Var[14] += 222;
[0073] unless (Var[14] == 149) goto 0085;
[0079] RoomColor(2,6);
[007D] RoomColor(11,10);
[0081] RoomColor(10,2);
[0085] Var[44] = 572;
[0089] setState02(Var[44]);
[008B] clearState08(Var[44]);
[008D] Var[44]++;
[008F] unless (Var[44] > 575) goto 0089;
[0095] unless (!Var[255]) goto 009C;
[0099] Var[58] = Var[56];
[009C] Var[57] = VAR_ROOM;
[009F] doSentence(253,570,0,1);
[00A6] unless (Var[45]) goto 00B5;
[00AA] clearState02(572);
[00AD] drawObject(572,Var[47],0);
[00B5] drawObject(570,Var[47],0);
[00BA] unless (Var[46]) goto 00C9;
[00BE] clearState02(573);
[00C1] drawObject(573,Var[48],0);
[00C9] drawObject(571,Var[48],0);
[00CE] unless (Var[49]) goto 00DA;
[00D2] clearState02(574);
[00D5] drawObject(574,Var[49],0);
[00DA] unless (Var[50]) goto 00E6;
[00DE] clearState02(575);
[00E1] drawObject(575,Var[50],0);
[00E6] unless (getState04(575)) goto 00F2;
[00EB] doSentence(253,575,0,1);
[00F2] doSentence(253,572,0,1);
[00F9] cursorCommand(247, 1);
[00FC] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0037/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0037/ROv2/EXv2.txt); entry `0000`.

```text
[0000] ActorOps(VAR_EGO,[Sound(6)]);
[0004] Var[255] = Var[234];
[0007] setBoxFlags(0,0);
[000A] setBoxFlags(1,0);
[000D] setBoxFlags(2,0);
[0010] stopObjectCode();
```

## OCv2_0570 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0570.txt](../../zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0570.txt); entry `0013`.

```text
[0013] unless (Var[57] == 168) goto 0025;
[0019] setVarRange(Var[45],6,[1,1,0,39,8,0]);
[0025] unless (Var[57] == 169) goto 0037;
[002B] setVarRange(Var[45],6,[1,0,0,39,8,0]);
[0037] unless (Var[57] == 170) goto 0049;
[003D] setVarRange(Var[45],6,[1,1,0,60,8,34]);
[0049] unless (Var[57] == 171) goto 005B;
[004F] setVarRange(Var[45],6,[0,1,0,60,8,34]);
[005B] unless (Var[57] == 172) goto 006D;
[0061] setVarRange(Var[45],6,[1,1,0,60,0,0]);
[006D] unless (Var[57] == 173) goto 007F;
[0073] setVarRange(Var[45],6,[0,0,0,60,8,34]);
[007F] unless (Var[57] == 174) goto 0091;
[0085] setVarRange(Var[45],6,[1,1,15,60,0,34]);
[0091] unless (Var[57] == 175) goto 00A3;
[0097] setVarRange(Var[45],6,[1,1,15,60,0,0]);
[00A0] /* goto 00A3; */
[00A3] stopObjectCode();
```

## OCv2_0571 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0571.txt](../../zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0571.txt); entry `0013`.

```text
[0013] Var[14] = VAR_EGO;
[0016] Var[14] += 216;
[001A] Var[Var[14]] -= Var[235];
[001D] unless (VAR_ACTIVE_OBJECT1 == Var[58]) goto 003F;
[0022] unless (!Var[255]) goto 0036;
[0026] setState04(575);
[0029] Var[14] = VAR_EGO;
[002C] Var[14] += 216;
[0030] Var[Var[14]] += Var[235];
[0036] Var[56] = Var[59];
[0039] Var[57] = Var[255];
[003F] Var[255] = Var[234];
[0042] Var[14] = VAR_EGO;
[0045] Var[14] += 216;
[0049] unless (!Var[14]) goto 0064;
[004D] Var[14] = VAR_EGO;
[0050] Var[14] += 219;
[0054] Var[56] = Var[14];
[0057] Var[14] = VAR_EGO;
[005A] Var[14] += 222;
[005E] Var[57] = Var[14];
[0064] Var[57] = getRandomNr(7);
[0067] Var[57] += 168;
[006B] unless (Var[57] == VAR_ROOM) goto 0073;
[0073] Var[14] = 1;
[0077] Var[14] += 222;
[007B] Var[15] = 2;
[007F] Var[15] += 222;
[0083] unless (Var[14] == Var[15]) goto 008B;
[008B] unless (VAR_EGO == 1) goto 009F;
[0091] VAR_RESULT = getActorRoom(2);
[0094] unless (VAR_RESULT == Var[57]) goto 009C;
[009F] VAR_RESULT = getActorRoom(1);
[00A2] unless (VAR_RESULT == Var[57]) goto 00AA;
[00AA] doSentence(253,570,0,1);
[00B1] Var[56] = Var[234];
[00B4] Var[44] = getRandomNr(3);
[00B7] unless (Var[44] == 0) goto 00C8;
[00BD] unless (Var[45]) goto 00C5;
[00C1] Var[56] = 572;
[00C8] unless (Var[44] == 1) goto 00D9;
[00CE] unless (Var[46]) goto 00D6;
[00D2] Var[56] = 573;
[00D9] unless (Var[44] == 2) goto 00EA;
[00DF] unless (Var[49]) goto 00E7;
[00E3] Var[56] = 574;
[00EA] unless (Var[44] == 3) goto 00FB;
[00F0] unless (Var[50]) goto 00F8;
[00F4] Var[56] = 575;
[00F8] /* goto 00FB; */
[00FB] unless (!Var[56]) goto 0102;
[0102] unless (Var[57] == 142) goto 010D;
[0108] setBitVar(1572,0,Var[235]);
[010D] unless (Var[57] >= 147) goto 0121;
[0113] unless (Var[57] <= 149) goto 0121;
[0119] loadRoomWithEgo(Var[56],Var[57],34,60);
[0121] loadRoomWithEgo(Var[56],Var[57],255,255);
[0126] stopObjectCode();
```

## OCv2_0572 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0572.txt](../../zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0572.txt); entry `0019`.

```text
[0019] doSentence(253,571,0,1);
[0020] stopObjectCode();
```

## OCv2_0572 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0572.txt](../../zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0572.txt); entry `0021`.

```text
[0021] Var[52] = getRandomNr(3);
[0024] Var[52] += 2;
[0028] Var[51] = Var[234];
[002B] delay(60);
[002F] Var[51]++;
[0031] unless (Var[51] > Var[52]) goto 002B;
[0036] Var[52] = getRandomNr(12);
[0039] unless (!Var[52]) goto 0049;
[003D] startSound(108);
[003F] doSentence(253,573,0,1);
[0049] unless (Var[52] < 7) goto 0054;
[004F] startSound(106);
[0054] startSound(107);
```

## OCv2_0573 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0573.txt](../../zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0573.txt); entry `0019`.

```text
[0019] doSentence(253,571,0,1);
[0020] stopObjectCode();
```

## OCv2_0573 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0573.txt](../../zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0573.txt); entry `0021`.

```text
[0021] delay(30);
[0025] cursorCommand(15, 2);
[0028] animateActor(VAR_EGO,255);
[002B] doSentence(STOP);
[002D] delay(60);
[0031] printEgo("Yikes! What was that?");
[0045] animateActor(VAR_EGO,244);
[0048] delay(60);
[004C] animateActor(VAR_EGO,246);
[004F] breakHere();
[0050] animateActor(VAR_EGO,245);
[0053] delay(60);
[0057] animateActor(VAR_EGO,246);
[005A] cursorCommand(247, 1);
[005D] stopObjectCode();
```

## OCv2_0574 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0574.txt](../../zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0574.txt); entry `0017`.

```text
[0017] doSentence(253,571,0,1);
[001E] stopObjectCode();
```

## OCv2_0575 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0575.txt](../../zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0575.txt); entry `0019`.

```text
[0019] doSentence(253,571,0,1);
[0020] stopObjectCode();
```

## OCv2_0575 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0575.txt](../../zak/converted/scripts_flat/LFv2_0037/ROv2/OCv2_0575.txt); entry `0021`.

```text
[0021] clearState04(575);
[0024] delay(60);
[0028] Var[44] = getRandomNr(3);
[002B] unless (!Var[44]) goto 0052;
[002F] printEgo("Will I ever see civilization again?");
[0052] printEgo("Oh no. I'm hopelessly lost.");
[006B] stopObjectCode();
```
