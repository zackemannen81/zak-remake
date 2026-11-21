# Room 048 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/ENv2.txt); entry `0000`.

```text
[0000] setCameraAt(20);
[0002] lights(11,0,0);
[0006] unless (Var[149] == 32) goto 0021;
[000C] Var[119] = Var[106];
[000F] Var[120] = Var[107];
[0012] RoomColor(6,0);
[0016] RoomColor(6,7);
[001A] RoomColor(6,8);
[0021] unless (Var[149] == 34) goto 0038;
[0027] Var[119] = Var[104];
[002A] Var[120] = Var[105];
[002D] RoomColor(6,7);
[0031] RoomColor(6,8);
[0038] unless (Var[149] == 152) goto 0053;
[003E] Var[119] = Var[108];
[0041] Var[120] = Var[109];
[0044] RoomColor(4,0);
[0048] RoomColor(6,7);
[004C] RoomColor(6,8);
[0053] unless (Var[149] == 130) goto 0068;
[0059] Var[119] = Var[106];
[005C] Var[120] = Var[107];
[005F] Var[121] = Var[127];
[0062] Var[122] = Var[128];
[0068] unless (Var[149] == 139) goto 0074;
[0074] unless (Var[149] == 140) goto 008D;
[007A] Var[119] = Var[104];
[007D] Var[120] = Var[105];
[0080] Var[121] = Var[125];
[0083] Var[122] = Var[126];
[0086] RoomColor(8,7);
[008D] unless (Var[149] == 193) goto 00AE;
[0093] Var[119] = Var[108];
[0096] Var[120] = Var[109];
[0099] Var[121] = Var[129];
[009C] Var[122] = Var[130];
[009F] RoomColor(12,0);
[00A3] RoomColor(4,7);
[00A7] RoomColor(12,8);
[00AB] /* goto 00AE; */
[00AE] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/EXv2.txt); entry `0000`.

```text
[0000] setBitVar(1545,0,Var[235]);
[0005] stopObjectCode();
```

## OCv2_0672 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0672.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0672.txt); entry `0019`.

```text
[0019] Var[117] = VAR_ACTIVE_OBJECT1;
[001C] unless (!getState08(Var[117])) goto 0025;
[0020] setState08(Var[117]);
[0025] clearState08(Var[117]);
[0027] stopObjectCode();
```

## OCv2_0672 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0672.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0672.txt); entry `0015`.

```text
[0019] Var[117] = VAR_ACTIVE_OBJECT1;
[001C] unless (!getState08(Var[117])) goto 0025;
[0020] setState08(Var[117]);
[0025] clearState08(Var[117]);
[0027] stopObjectCode();
```

## OCv2_0673 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0673.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0673.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0674 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0674.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0674.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0675 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0675.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0675.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0676 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0676.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0676.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0677 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0677.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0677.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0678 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0678.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0678.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0679 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0679.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0679.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0680 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0680.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0680.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0681 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0681.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0681.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0682 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0682.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0682.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0683 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0683.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0683.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0684 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0684.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0684.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0685 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0685.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0685.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0686 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0686.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0686.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0687 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0687.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0687.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0688 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0688.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0688.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0689 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0689.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0689.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0690 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0690.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0690.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0691 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0691.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0691.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0692 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0692.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0692.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0693 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0693.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0693.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0694 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0694.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0694.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## OCv2_0695 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0695.txt](../../zak/converted/scripts_flat/LFv2_0048/ROv2/OCv2_0695.txt); entry `0013`.

```text
[0013] doSentence(253,672,0,1);
[001A] stopObjectCode();
```

## SCv2_0028 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0048/SCv2_0028.txt](../../zak/converted/scripts_flat/LFv2_0048/SCv2_0028.txt); entry `0000`.

```text
[0000] breakHere();
[0001] Var[149] = VAR_ROOM;
[0004] cursorCommand(159, 3);
[0007] loadRoom(48);
[0009] Var[66] = Var[234];
[000C] VerbOps(Delete(Var[66]););
[000F] Var[66]++;
[0011] unless (Var[66] > 14) goto 000C;
[0017] VerbOps(New-30(24,21,14,0,"Finished drawing"));
[002E] VerbOps(New-13(0,200,12,0,"@"));
[0036] cursorCommand(0, 0);
[0039] Var[118] = 672;
[003D] Var[66] = Var[234];
[0040] VAR_RESULT = getBitVar(1936,Var[66]);
[0045] unless (VAR_RESULT) goto 004E;
[0049] setState08(Var[118]);
[004E] clearState08(Var[118]);
[0050] Var[118]++;
[0052] Var[66]++;
[0054] unless (Var[118] > 695) goto 0040;
[005A] breakHere();
[005B] unless (VAR_ACTIVE_VERB == 30) goto 005A;
[0061] loadRoom(0);
[0063] setBitVar(1467,0,Var[234]);
[0068] Var[118] = 672;
[006C] Var[66] = Var[234];
[006F] unless (!getState08(Var[118])) goto 0089;
[0073] setBitVar(1936,Var[66],Var[234]);
[0078] VAR_RESULT = getBitVar(1904,Var[66]);
[007D] unless (VAR_RESULT) goto 0086;
[0081] setBitVar(1467,0,Var[235]);
[0089] setBitVar(1936,Var[66],Var[235]);
[008E] VAR_RESULT = getBitVar(1904,Var[66]);
[0093] unless (!VAR_RESULT) goto 009C;
[0097] setBitVar(1467,0,Var[235]);
[009C] Var[66]++;
[009E] Var[118]++;
[00A0] unless (Var[118] > 695) goto 006F;
[00A6] unless (Var[149] == 130) goto 00B5;
[00AC] Var[127] = Var[121];
[00AF] Var[128] = Var[122];
[00B5] unless (Var[149] == 139) goto 00C1;
[00C1] unless (Var[149] == 140) goto 00D0;
[00C7] Var[125] = Var[121];
[00CA] Var[126] = Var[122];
[00D0] unless (Var[149] == 193) goto 00DF;
[00D6] Var[129] = Var[121];
[00D9] Var[130] = Var[122];
[00DC] /* goto 00DF; */
[00DF] startScript(19);
[00E1] cursorCommand(15, 2);
[00E4] actorFollowCamera(VAR_EGO);
[00E6] delay(120);
[00EA] VAR_RESULT = getBitVar(1467,0);
[00EF] unless (!VAR_RESULT) goto 013E;
[00F3] unless (VAR_ROOM_RESOURCE == 22) goto 010A;
[00F9] setState08(400);
[00FC] clearState02(400);
[00FF] setState02(399);
[0102] clearState02(389);
[0105] setBoxFlags(2,0);
[0108] startSound(78);
[010A] unless (VAR_ROOM == 130) goto 011B;
[0110] startSound(25);
[0112] clearState04(307);
[0115] setState02(307);
[0118] setState08(307);
[011B] unless (VAR_ROOM == 193) goto 013B;
[0121] startScript(132);
[0123] clearState04(293);
[0126] doSentence(1,301,0,1);
[012D] doSentence(1,299,0,1);
[0134] doSentence(1,303,0,1);
[013E] printEgo("I guess it didn't work.");
[0153] cursorCommand(247, 1);
[0156] stopObjectCode();
```

## SCv2_0068 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0048/SCv2_0068.txt](../../zak/converted/scripts_flat/LFv2_0048/SCv2_0068.txt); entry `0000`.

```text
[0000] breakHere();
[0001] Var[149] = VAR_ROOM;
[0004] cutscene();
[0005] Var[122] = -1;
[0009] loadRoom(48);
[000B] unless (Var[122] != -1) goto 0017;
[0011] Var[119] = Var[121];
[0014] Var[120] = Var[122];
[0017] Var[118] = 672;
[001B] Var[66] = Var[234];
[001E] VAR_RESULT = getBitVar(1904,Var[66]);
[0023] unless (VAR_RESULT) goto 002C;
[0027] setState08(Var[118]);
[002C] clearState08(Var[118]);
[002E] Var[118]++;
[0030] Var[66]++;
[0032] unless (Var[118] > 695) goto 001E;
[0038] beginOverride();
[003C] delay(600);
[0040] endCutscene();
[0041] stopObjectCode();
```

## SCv2_0132 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0048/SCv2_0132.txt](../../zak/converted/scripts_flat/LFv2_0048/SCv2_0132.txt); entry `0000`.

```text
[0000] breakHere();
[0001] VAR_RESULT = getActorRoom(1);
[0004] unless (VAR_RESULT == VAR_ROOM) goto 001E;
[0009] VAR_RESULT = getActorRoom(3);
[000C] unless (VAR_RESULT == VAR_ROOM) goto 0014;
[0014] VAR_RESULT = getActorRoom(4);
[0017] unless (VAR_RESULT == VAR_ROOM) goto 001E;
[001C] chainScript(133);
```
