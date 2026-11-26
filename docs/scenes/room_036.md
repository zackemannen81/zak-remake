# Room 036 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0036/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0036/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(Var[234],0,0);
[0004] Var[44] = 563;
[0008] clearState08(Var[44]);
[000A] setState02(Var[44]);
[000C] Var[44]++;
[000E] unless (Var[44] > 569) goto 0008;
[0014] setObjectName(565,"doorway");
[001F] setObjectName(564,"doorway");
[002A] unless (!getState04(558)) goto 0031;
[002F] Var[154]++;
[0031] unless (VAR_ROOM == 196) goto 0066;
[0037] RoomScroll(20,34);
[003B] drawObject(566,41,0);
[0040] drawObject(569,49,0);
[0045] setBoxFlags(1,64);
[0048] drawObject(563,0,0);
[004D] clearState02(563);
[0050] clearState02(566);
[0053] Var[44] = 517;
[0057] Var[45] = 191;
[005B] Var[50] = 543;
[005F] Var[51] = 195;
[0066] unless (VAR_ROOM == 197) goto 009B;
[006C] RoomScroll(20,34);
[0070] drawObject(568,41,0);
[0075] drawObject(569,49,0);
[007A] setBoxFlags(1,64);
[007D] drawObject(563,0,0);
[0082] clearState02(563);
[0085] clearState02(568);
[0088] Var[44] = 517;
[008C] Var[45] = 190;
[0090] Var[54] = 297;
[0094] Var[55] = 192;
[009B] unless (VAR_ROOM == 198) goto 0110;
[00A1] RoomScroll(20,56);
[00A5] setBoxFlags(3,128);
[00A8] unless (getState08(508)) goto 00BD;
[00AD] drawObject(563,0,0);
[00B2] clearState02(563);
[00B5] Var[44] = 517;
[00B9] Var[45] = 189;
[00BD] drawObject(565,19,0);
[00C2] drawObject(566,30,0);
[00C7] drawObject(567,52,0);
[00CC] drawObject(568,63,0);
[00D1] drawObject(564,71,0);
[00D6] clearState02(565);
[00D9] clearState02(566);
[00DC] clearState02(567);
[00DF] clearState02(568);
[00E2] clearState02(564);
[00E5] Var[48] = 564;
[00E9] Var[49] = 199;
[00ED] Var[50] = 563;
[00F1] Var[51] = 203;
[00F5] Var[52] = 566;
[00F9] Var[53] = 202;
[00FD] Var[54] = 567;
[0101] Var[55] = 202;
[0105] Var[46] = 566;
[0109] Var[47] = 201;
[0110] unless (VAR_ROOM == 199) goto 017C;
[0116] RoomScroll(20,100);
[011A] unless (getState08(302)) goto 0139;
[011F] drawObject(565,41,0);
[0124] clearState02(565);
[0127] Var[48] = 302;
[012B] Var[49] = 193;
[012F] setObjectName(565,"tunnel");
[0139] drawObject(568,8,0);
[013E] drawObject(566,63,0);
[0143] drawObject(567,96,0);
[0148] drawObject(564,115,0);
[014D] clearState02(568);
[0150] clearState02(566);
[0153] clearState02(567);
[0156] clearState02(564);
[0159] Var[54] = 564;
[015D] Var[55] = 200;
[0161] Var[50] = 568;
[0165] Var[51] = 203;
[0169] Var[52] = 565;
[016D] Var[53] = 203;
[0171] Var[46] = 565;
[0175] Var[47] = 198;
[017C] unless (VAR_ROOM == 200) goto 01DC;
[0182] RoomScroll(20,56);
[0186] setBoxFlags(3,128);
[0189] drawObject(567,8,0);
[018E] drawObject(568,19,0);
[0193] drawObject(565,41,0);
[0198] drawObject(566,52,0);
[019D] drawObject(564,71,0);
[01A2] clearState02(567);
[01A5] clearState02(568);
[01A8] clearState02(565);
[01AB] clearState02(566);
[01AE] clearState02(564);
[01B1] Var[52] = 564;
[01B5] Var[53] = 201;
[01B9] Var[54] = 563;
[01BD] Var[55] = 205;
[01C1] Var[48] = 555;
[01C5] Var[49] = 194;
[01C9] Var[50] = 567;
[01CD] Var[51] = 204;
[01D1] Var[46] = 568;
[01D5] Var[47] = 199;
[01DC] unless (VAR_ROOM == 201) goto 0239;
[01E2] RoomScroll(20,100);
[01E6] drawObject(566,19,0);
[01EB] drawObject(567,30,0);
[01F0] drawObject(568,63,0);
[01F5] drawObject(565,85,0);
[01FA] drawObject(564,115,0);
[01FF] clearState02(566);
[0202] clearState02(567);
[0205] clearState02(568);
[0208] clearState02(565);
[020B] clearState02(564);
[020E] Var[50] = 564;
[0212] Var[51] = 198;
[0216] Var[52] = 563;
[021A] Var[53] = 202;
[021E] Var[54] = 565;
[0222] Var[55] = 205;
[0226] Var[48] = 566;
[022A] Var[49] = 205;
[022E] Var[46] = 567;
[0232] Var[47] = 200;
[0239] unless (VAR_ROOM == 202) goto 02A3;
[023F] RoomScroll(20,34);
[0243] unless (getState08(304)) goto 0268;
[0248] drawObject(564,49,0);
[024D] clearState02(564);
[0250] Var[46] = 300;
[0254] Var[47] = 193;
[0258] setObjectName(564,"tunnel");
[0262] setBoxFlags(1,128);
[0268] drawObject(569,49,0);
[026D] setBoxFlags(1,64);
[0270] drawObject(563,0,0);
[0275] drawObject(567,8,0);
[027A] drawObject(566,19,0);
[027F] clearState02(563);
[0282] clearState02(567);
[0285] clearState02(566);
[0288] Var[44] = 567;
[028C] Var[45] = 201;
[0290] Var[52] = 568;
[0294] Var[53] = 198;
[0298] Var[50] = 567;
[029C] Var[51] = 198;
[02A3] unless (VAR_ROOM == 203) goto 02E8;
[02A9] RoomScroll(20,56);
[02AD] setBoxFlags(3,64);
[02B0] drawObject(569,71,0);
[02B5] drawObject(563,0,0);
[02BA] drawObject(565,19,0);
[02BF] drawObject(568,52,0);
[02C4] clearState02(563);
[02C7] clearState02(565);
[02CA] clearState02(568);
[02CD] Var[44] = 566;
[02D1] Var[45] = 198;
[02D5] Var[48] = 567;
[02D9] Var[49] = 199;
[02DD] Var[54] = 566;
[02E1] Var[55] = 199;
[02E8] unless (VAR_ROOM == 204) goto 0332;
[02EE] RoomScroll(20,34);
[02F2] unless (getState08(300)) goto 0317;
[02F7] drawObject(564,49,0);
[02FC] clearState02(564);
[02FF] Var[46] = 304;
[0303] Var[47] = 193;
[0307] setObjectName(564,"tunnel");
[0311] setBoxFlags(1,128);
[0317] drawObject(569,49,0);
[031C] setBoxFlags(1,64);
[031F] drawObject(567,19,0);
[0324] clearState02(567);
[0327] Var[52] = 566;
[032B] Var[53] = 200;
[0332] unless (VAR_ROOM == 205) goto 0382;
[0338] RoomScroll(20,56);
[033C] setBoxFlags(3,128);
[033F] drawObject(563,0,0);
[0344] drawObject(566,30,0);
[0349] drawObject(565,52,0);
[034E] drawObject(564,71,0);
[0353] clearState02(563);
[0356] clearState02(566);
[0359] clearState02(565);
[035C] clearState02(564);
[035F] Var[44] = 568;
[0363] Var[45] = 200;
[0367] Var[50] = 565;
[036B] Var[51] = 201;
[036F] Var[48] = 568;
[0373] Var[49] = 201;
[0377] Var[46] = 542;
[037B] Var[47] = 34;
[037F] /* goto 0382; */
[0382] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0036/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0036/ROv2/EXv2.txt); entry `0000`.

```text
[0000] setBoxFlags(1,0);
[0003] setBoxFlags(3,0);
[0006] Var[154] = Var[234];
[0009] stopObjectCode();
```

## OCv2_0563 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0036/ROv2/OCv2_0563.txt](../../zak/converted/scripts_flat/LFv2_0036/ROv2/OCv2_0563.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[44],Var[45],255,255);
[001F] stopObjectCode();
```

## OCv2_0564 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0036/ROv2/OCv2_0564.txt](../../zak/converted/scripts_flat/LFv2_0036/ROv2/OCv2_0564.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[46],Var[47],255,255);
[001F] stopObjectCode();
```

## OCv2_0565 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0036/ROv2/OCv2_0565.txt](../../zak/converted/scripts_flat/LFv2_0036/ROv2/OCv2_0565.txt); entry `001A`.

```text
[001A] unless (VAR_ROOM == 200) goto 004C;
[0020] unless (VAR_EGO == 3) goto 004C;
[0026] unless (getState04(555)) goto 004C;
[002B] animateActor(3,246);
[002E] printEgo("No way! I'm SCARED of heights!");
[004C] loadRoomWithEgo(Var[48],Var[49],255,255);
[0051] stopObjectCode();
```

## OCv2_0566 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0036/ROv2/OCv2_0566.txt](../../zak/converted/scripts_flat/LFv2_0036/ROv2/OCv2_0566.txt); entry `001A`.

```text
[001A] unless (VAR_ROOM == 187) goto 0028;
[0020] loadRoomWithEgo(Var[54],Var[55],55,48);
[0028] loadRoomWithEgo(Var[50],Var[51],255,255);
[002D] stopObjectCode();
```

## OCv2_0567 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0036/ROv2/OCv2_0567.txt](../../zak/converted/scripts_flat/LFv2_0036/ROv2/OCv2_0567.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[52],Var[53],255,255);
[001F] stopObjectCode();
```

## OCv2_0568 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0036/ROv2/OCv2_0568.txt](../../zak/converted/scripts_flat/LFv2_0036/ROv2/OCv2_0568.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[54],Var[55],255,255);
[001F] stopObjectCode();
```

## SCv2_0133 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0036/SCv2_0133.txt](../../zak/converted/scripts_flat/LFv2_0036/SCv2_0133.txt); entry `0000`.

```text
[0000] breakHere();
[0001] VAR_RESULT = isScriptRunning(82);
[0004] unless (!VAR_RESULT) goto 0000;
[0008] cutscene();
[0009] Var[121] = VAR_EGO;
[000C] VAR_EGO = 1;
[0010] beginOverride();
[0014] Var[119] = Var[234];
[0017] Var[120] = getActorRoom(3);
[001A] VAR_RESULT = getActorRoom(4);
[001D] unless (VAR_RESULT == VAR_ROOM) goto 0035;
[0022] setVarRange(Var[117],2,[4,3]);
[0027] unless (Var[120] == VAR_ROOM) goto 0032;
[002C] walkActorToActor(3,1,6);
[0030] Var[119]++;
[0035] setVarRange(Var[117],2,[3,4]);
[003A] walkActorToActor(Var[117],1,4);
[003E] delay(60);
[0042] print(Var[117],"Hey!");
[0049] waitForActor(Var[117]);
[004B] faceActor(Var[117],1);
[004E] stopObjectCode();
[01DD] print(255,"");
[01E0] VAR_EGO = Var[121];
[01E3] endCutscene();
[01E4] stopObjectCode();
```
