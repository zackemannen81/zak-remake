# Room 053 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(Var[234],0,0);
[0004] Var[44] = 739;
[0008] clearState08(Var[44]);
[000A] Var[44]++;
[000C] unless (Var[44] > 752) goto 0008;
[0012] Var[44] = 742;
[0016] setState02(Var[44]);
[0018] Var[44]++;
[001A] unless (Var[44] > 746) goto 0016;
[0020] Var[58] = VAR_ROOM;
[0023] Var[58] -= 156;
[0027] setObjectName(745,"doorway");
[0032] setObjectName(741,"tunnel");
[003C] unless (VAR_ROOM <= 159) goto 016D;
[0042] RoomScroll(20,100);
[0046] RoomColor(10,11);
[004A] RoomColor(2,3);
[004E] drawObject(748,38,1);
[0053] drawObject(749,82,1);
[0058] drawObject(747,104,1);
[005D] drawObject(741,30,4);
[0062] drawObject(742,52,4);
[0067] drawObject(743,74,4);
[006C] drawObject(744,0,0);
[0071] drawObject(745,115,0);
[0076] clearState02(742);
[0079] clearState02(743);
[007C] clearState02(744);
[007F] clearState02(745);
[0082] Var[56] = 39;
[0086] Var[57] = 83;
[008A] Var[44] = 747;
[008E] Var[54] = 744;
[0092] unless (VAR_ROOM == 156) goto 00CD;
[0098] drawObject(739,22,9);
[009D] drawObject(740,99,9);
[00A2] Var[45] = 157;
[00A6] Var[55] = 159;
[00AA] Var[48] = 741;
[00AE] Var[49] = 158;
[00B2] Var[50] = 742;
[00B6] Var[51] = 162;
[00BA] Var[52] = 743;
[00BE] Var[53] = 158;
[00C2] Var[46] = 594;
[00C6] Var[47] = 39;
[00CD] unless (VAR_ROOM == 157) goto 00FE;
[00D3] Var[45] = 158;
[00D7] Var[55] = 156;
[00DB] Var[48] = 743;
[00DF] Var[49] = 159;
[00E3] Var[50] = 742;
[00E7] Var[51] = 159;
[00EB] Var[52] = 741;
[00EF] Var[53] = 163;
[00F3] Var[46] = 596;
[00F7] Var[47] = 39;
[00FE] unless (VAR_ROOM == 158) goto 012F;
[0104] Var[45] = 159;
[0108] Var[55] = 157;
[010C] Var[48] = 741;
[0110] Var[49] = 156;
[0114] Var[50] = 742;
[0118] Var[51] = 160;
[011C] Var[52] = 743;
[0120] Var[53] = 156;
[0124] Var[46] = 597;
[0128] Var[47] = 39;
[012F] unless (VAR_ROOM == 159) goto 016A;
[0135] setObjectName(745,"tunnel");
[013F] Var[45] = 156;
[0143] Var[55] = 158;
[0147] Var[48] = 741;
[014B] Var[49] = 161;
[014F] Var[50] = 742;
[0153] Var[51] = 157;
[0157] Var[52] = 741;
[015B] Var[53] = 157;
[015F] Var[46] = 741;
[0163] Var[47] = 164;
[0167] /* goto 016A; */
[016D] unless (VAR_ROOM <= 163) goto 0244;
[0173] RoomScroll(20,56);
[0177] setBoxFlags(3,64);
[017A] drawObject(748,27,1);
[017F] drawObject(749,49,1);
[0184] drawObject(747,60,1);
[0189] drawObject(741,19,4);
[018E] drawObject(742,41,4);
[0193] drawObject(744,0,0);
[0198] drawObject(746,71,0);
[019D] clearState02(742);
[01A0] clearState02(744);
[01A3] Var[56] = 28;
[01A7] Var[57] = 50;
[01AB] Var[44] = 747;
[01AF] Var[54] = 744;
[01B3] unless (VAR_ROOM == 160) goto 01DE;
[01B9] drawObject(739,22,9);
[01BE] drawObject(740,44,9);
[01C3] Var[45] = 161;
[01C7] Var[55] = 163;
[01CB] Var[48] = 741;
[01CF] Var[49] = 162;
[01D3] Var[50] = 742;
[01D7] Var[51] = 158;
[01DE] unless (VAR_ROOM == 161) goto 01FF;
[01E4] Var[45] = 162;
[01E8] Var[55] = 160;
[01EC] Var[48] = 741;
[01F0] Var[49] = 159;
[01F4] Var[50] = 741;
[01F8] Var[51] = 165;
[01FF] unless (VAR_ROOM == 162) goto 0220;
[0205] Var[45] = 163;
[0209] Var[55] = 161;
[020D] Var[48] = 741;
[0211] Var[49] = 160;
[0215] Var[50] = 742;
[0219] Var[51] = 156;
[0220] unless (VAR_ROOM == 163) goto 0241;
[0226] Var[45] = 160;
[022A] Var[55] = 162;
[022E] Var[48] = 743;
[0232] Var[49] = 157;
[0236] Var[50] = 741;
[023A] Var[51] = 167;
[023E] /* goto 0241; */
[0244] RoomScroll(20,23);
[0248] setBoxFlags(1,128);
[024B] drawObject(748,16,1);
[0250] drawObject(749,27,1);
[0255] drawObject(747,5,1);
[025A] drawObject(741,30,4);
[025F] drawObject(745,38,0);
[0264] clearState02(745);
[0267] Var[56] = 17;
[026B] Var[57] = 28;
[026F] Var[46] = 747;
[0273] Var[54] = 745;
[0277] unless (VAR_ROOM == 164) goto 0295;
[027D] drawObject(739,22,9);
[0282] Var[47] = 167;
[0286] Var[55] = 165;
[028A] Var[48] = 745;
[028E] Var[49] = 159;
[0295] unless (VAR_ROOM == 165) goto 02AE;
[029B] Var[47] = 164;
[029F] Var[55] = 166;
[02A3] Var[48] = 742;
[02A7] Var[49] = 161;
[02AE] unless (VAR_ROOM == 166) goto 02D2;
[02B4] setObjectName(741,"doorway");
[02BF] Var[47] = 165;
[02C3] Var[55] = 167;
[02C7] Var[48] = 297;
[02CB] Var[49] = 130;
[02D2] unless (VAR_ROOM == 167) goto 02EB;
[02D8] Var[47] = 166;
[02DC] Var[55] = 164;
[02E0] Var[48] = 742;
[02E4] Var[49] = 163;
[02E8] /* goto 02EB; */
[02EB] VAR_RESULT = getBitVar(1481,Var[58]);
[02F0] unless (VAR_RESULT) goto 02FB;
[02F4] doSentence(250,750,0,1);
[02FB] VAR_RESULT = getBitVar(1493,Var[58]);
[0300] unless (VAR_RESULT) goto 030B;
[0304] doSentence(250,751,0,1);
[030B] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/EXv2.txt); entry `0000`.

```text
[0000] Var[154] = Var[234];
[0003] setBoxFlags(1,0);
[0006] setBoxFlags(3,0);
[0009] stopObjectCode();
```

## OCv2_0741 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0741.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0741.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[48],Var[49],255,255);
[001F] stopObjectCode();
```

## OCv2_0742 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0742.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0742.txt); entry `0019`.

```text
[0019] loadRoomWithEgo(Var[50],Var[51],255,255);
[001E] stopObjectCode();
```

## OCv2_0743 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0743.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0743.txt); entry `0019`.

```text
[0019] loadRoomWithEgo(Var[52],Var[53],255,255);
[001E] stopObjectCode();
```

## OCv2_0744 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0744.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0744.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[44],Var[45],255,255);
[001F] stopObjectCode();
```

## OCv2_0745 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0745.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0745.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[46],Var[47],255,255);
[001F] stopObjectCode();
```

## OCv2_0746 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0746.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0746.txt); entry `0013`.

```text
[0013] loadRoomWithEgo(Var[46],Var[47],255,255);
[0018] stopObjectCode();
```

## OCv2_0747 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0747.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0747.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[54],Var[55],255,255);
[001F] stopObjectCode();
```

## OCv2_0748 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0748.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0748.txt); entry `0018`.

```text
[0018] unless (VAR_ACTIVE_OBJECT2 == 49) goto 002D;
[001E] setBitVar(1481,Var[58],Var[235]);
[0023] doSentence(250,750,0,1);
[002D] unless (VAR_ACTIVE_OBJECT2 == 48) goto 0058;
[0033] setBitVar(1481,Var[58],Var[234]);
[0038] doSentence(254,750,0,1);
[003F] clearState08(750);
[0042] clearState08(751);
[0045] clearState08(752);
[0048] VAR_RESULT = getBitVar(1493,Var[58]);
[004D] unless (!VAR_RESULT) goto 0055;
[0051] lights(Var[234],0,0);
[0058] startScript(3);
[005A] stopObjectCode();
```

## OCv2_0749 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0749.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0749.txt); entry `0018`.

```text
[0018] unless (VAR_ACTIVE_OBJECT2 == 49) goto 002D;
[001E] setBitVar(1493,Var[58],Var[235]);
[0023] doSentence(250,751,0,1);
[002D] unless (VAR_ACTIVE_OBJECT2 == 48) goto 0058;
[0033] setBitVar(1493,Var[58],Var[234]);
[0038] doSentence(254,751,0,1);
[003F] clearState08(750);
[0042] clearState08(751);
[0045] clearState08(752);
[0048] VAR_RESULT = getBitVar(1481,Var[58]);
[004D] unless (!VAR_RESULT) goto 0055;
[0051] lights(Var[234],0,0);
[0058] startScript(3);
[005A] stopObjectCode();
```

## OCv2_0750 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0750.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0750.txt); entry `0013`.

```text
[0013] lights(11,0,0);
[0017] breakHere();
[0018] Var[59] = getRandomNr(2);
[001B] Var[59] += 750;
[001F] drawObject(Var[59],Var[56],3);
```

## OCv2_0751 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0751.txt](../../zak/converted/scripts_flat/LFv2_0053/ROv2/OCv2_0751.txt); entry `0013`.

```text
[0013] lights(11,0,0);
[0017] breakHere();
[0018] Var[60] = getRandomNr(2);
[001B] Var[60] += 750;
[001F] drawObject(Var[60],Var[57],3);
```
