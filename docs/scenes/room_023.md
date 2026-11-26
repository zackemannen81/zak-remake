# Room 023 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] Var[44] = 403;
[0008] clearState08(Var[44]);
[000A] setState02(Var[44]);
[000C] Var[44]++;
[000E] unless (Var[44] > 411) goto 0008;
[0014] clearState08(412);
[0017] unless (VAR_ROOM == 206) goto 002B;
[001D] Var[45] = 135;
[0021] Var[55] = 155;
[002B] unless (VAR_ROOM == 187) goto 0082;
[0031] RoomColor(12,4);
[0035] RoomColor(4,12);
[0039] RoomColor(5,3);
[003D] RoomColor(13,11);
[0041] RoomColor(8,6);
[0045] RoomColor(7,8);
[0049] RoomColor(1,9);
[004D] Var[154]++;
[004F] Var[45] = 183;
[0053] Var[55] = 186;
[0057] lights(Var[234],0,0);
[005B] RoomScroll(20,34);
[005F] setBoxFlags(1,128);
[0062] drawObject(408,27,1);
[0067] drawObject(409,49,0);
[006C] drawObject(403,0,0);
[0071] clearState02(403);
[0074] clearState02(408);
[0077] Var[44] = 392;
[007B] Var[54] = 421;
[0082] unless (VAR_ROOM == 207) goto 00CE;
[0088] RoomScroll(20,100);
[008C] setState08(411);
[008F] clearState02(411);
[0092] drawObject(403,0,0);
[0097] drawObject(407,41,1);
[009C] drawObject(406,74,1);
[00A1] clearState02(403);
[00A4] clearState02(407);
[00A7] clearState02(406);
[00AA] Var[44] = 400;
[00AE] Var[45] = 139;
[00B2] unless (getState04(388)) goto 00BB;
[00B7] Var[45] = 140;
[00BB] Var[52] = 404;
[00BF] Var[53] = 208;
[00C3] Var[50] = 403;
[00C7] Var[51] = 211;
[00CE] unless (VAR_ROOM == 208) goto 010B;
[00D4] RoomScroll(20,100);
[00D8] drawObject(407,8,1);
[00DD] drawObject(405,52,1);
[00E2] drawObject(404,115,0);
[00E7] clearState02(407);
[00EA] clearState02(405);
[00ED] clearState02(404);
[00F0] Var[52] = 405;
[00F4] Var[53] = 209;
[00F8] Var[48] = 407;
[00FC] Var[49] = 209;
[0100] Var[46] = 407;
[0104] Var[47] = 207;
[010B] unless (VAR_ROOM == 209) goto 0150;
[0111] RoomScroll(20,56);
[0115] setBoxFlags(3,64);
[0118] drawObject(409,71,0);
[011D] drawObject(403,0,0);
[0122] drawObject(407,19,1);
[0127] drawObject(405,63,1);
[012C] clearState02(403);
[012F] clearState02(407);
[0132] clearState02(405);
[0135] Var[44] = 405;
[0139] Var[45] = 210;
[013D] Var[52] = 405;
[0141] Var[53] = 208;
[0145] Var[48] = 407;
[0149] Var[49] = 208;
[0150] unless (VAR_ROOM == 210) goto 0190;
[0156] RoomScroll(20,34);
[015A] setBoxFlags(1,128);
[015D] drawObject(405,19,1);
[0162] drawObject(406,30,1);
[0167] drawObject(404,49,0);
[016C] clearState02(405);
[016F] clearState02(406);
[0172] clearState02(404);
[0175] Var[48] = 403;
[0179] Var[49] = 209;
[017D] Var[50] = 404;
[0181] Var[51] = 213;
[0185] Var[46] = 406;
[0189] Var[47] = 211;
[0190] unless (VAR_ROOM == 211) goto 01D0;
[0196] RoomScroll(20,34);
[019A] setBoxFlags(1,128);
[019D] drawObject(403,0,0);
[01A2] drawObject(406,30,1);
[01A7] drawObject(404,49,0);
[01AC] clearState02(403);
[01AF] clearState02(406);
[01B2] clearState02(404);
[01B5] Var[44] = 406;
[01B9] Var[45] = 207;
[01BD] Var[50] = 404;
[01C1] Var[51] = 210;
[01C5] Var[46] = 403;
[01C9] Var[47] = 212;
[01D0] unless (VAR_ROOM == 212) goto 0215;
[01D6] RoomScroll(20,34);
[01DA] setBoxFlags(1,64);
[01DD] drawObject(409,49,0);
[01E2] drawObject(403,0,0);
[01E7] drawObject(407,19,1);
[01EC] drawObject(405,41,1);
[01F1] clearState02(403);
[01F4] clearState02(407);
[01F7] clearState02(405);
[01FA] Var[44] = 404;
[01FE] Var[45] = 211;
[0202] Var[52] = 405;
[0206] Var[53] = 213;
[020A] Var[48] = 407;
[020E] Var[49] = 213;
[0215] unless (VAR_ROOM == 213) goto 0265;
[021B] RoomScroll(20,56);
[021F] setBoxFlags(3,128);
[0222] drawObject(406,8,1);
[0227] drawObject(407,30,1);
[022C] drawObject(405,52,1);
[0231] drawObject(404,71,0);
[0236] clearState02(406);
[0239] clearState02(407);
[023C] clearState02(405);
[023F] clearState02(404);
[0242] Var[50] = 404;
[0246] Var[51] = 214;
[024A] Var[52] = 405;
[024E] Var[53] = 212;
[0252] Var[48] = 407;
[0256] Var[49] = 212;
[025A] Var[46] = 406;
[025E] Var[47] = 210;
[0265] unless (VAR_ROOM == 214) goto 02A5;
[026B] RoomScroll(20,56);
[026F] setBoxFlags(3,128);
[0272] drawObject(406,8,1);
[0277] drawObject(407,41,1);
[027C] drawObject(404,71,0);
[0281] clearState02(406);
[0284] clearState02(407);
[0287] clearState02(404);
[028A] Var[50] = 404;
[028E] Var[51] = 215;
[0292] Var[52] = 404;
[0296] Var[53] = 219;
[029A] Var[46] = 406;
[029E] Var[47] = 213;
[02A5] unless (VAR_ROOM == 215) goto 02D8;
[02AB] RoomScroll(20,56);
[02AF] setState08(410);
[02B2] setBoxFlags(3,128);
[02B5] drawObject(403,0,0);
[02BA] drawObject(404,71,0);
[02BF] clearState02(403);
[02C2] clearState02(404);
[02C5] Var[44] = 404;
[02C9] Var[45] = 216;
[02CD] Var[46] = 406;
[02D1] Var[47] = 214;
[02D8] unless (VAR_ROOM == 216) goto 0318;
[02DE] RoomScroll(20,56);
[02E2] setBoxFlags(3,128);
[02E5] drawObject(406,30,1);
[02EA] drawObject(405,41,1);
[02EF] drawObject(404,71,0);
[02F4] clearState02(406);
[02F7] clearState02(405);
[02FA] clearState02(404);
[02FD] Var[50] = 404;
[0301] Var[51] = 218;
[0305] Var[48] = 403;
[0309] Var[49] = 217;
[030D] Var[46] = 403;
[0311] Var[47] = 215;
[0318] unless (VAR_ROOM == 217) goto 034D;
[031E] RoomScroll(20,34);
[0322] setBoxFlags(1,64);
[0325] drawObject(409,49,0);
[032A] drawObject(403,0,0);
[032F] drawObject(407,19,1);
[0334] clearState02(403);
[0337] clearState02(407);
[033A] Var[44] = 405;
[033E] Var[45] = 216;
[0342] Var[52] = 405;
[0346] Var[53] = 218;
[034D] unless (VAR_ROOM == 218) goto 038A;
[0353] RoomScroll(20,100);
[0357] drawObject(408,5,1);
[035C] drawObject(405,96,1);
[0361] drawObject(404,115,0);
[0366] clearState02(408);
[0369] clearState02(405);
[036C] clearState02(404);
[036F] Var[54] = 323;
[0373] Var[55] = 152;
[0377] Var[48] = 407;
[037B] Var[49] = 217;
[037F] Var[46] = 406;
[0383] Var[47] = 216;
[038A] unless (VAR_ROOM == 219) goto 03BF;
[0390] RoomScroll(20,56);
[0394] setBoxFlags(3,128);
[0397] drawObject(408,19,1);
[039C] drawObject(412,19,1);
[03A1] drawObject(404,71,0);
[03A6] clearState02(408);
[03A9] clearState02(404);
[03AC] Var[54] = 408;
[03B0] Var[55] = 220;
[03B4] Var[46] = 407;
[03B8] Var[47] = 214;
[03BF] unless (VAR_ROOM == 220) goto 041D;
[03C5] lights(Var[234],0,0);
[03C9] RoomScroll(20,100);
[03CD] drawObject(409,115,0);
[03D2] drawObject(408,27,1);
[03D7] clearState02(408);
[03DA] Var[54] = 408;
[03DE] Var[55] = 219;
[03E2] VAR_RESULT = getBitVar(1574,0);
[03E7] unless (VAR_RESULT) goto 03F2;
[03EB] setBitVar(1574,0,Var[234]);
[03F0] Var[249]++;
[03F2] unless (Var[249] < 3) goto 0413;
[03F8] startSound(88);
[03FA] unless (getState04(408)) goto 0409;
[03FF] doSentence(253,408,0,1);
[0409] doSentence(253,409,0,1);
[0413] doSentence(253,410,0,1);
[041A] /* goto 041D; */
[041D] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/EXv2.txt); entry `0000`.

```text
[0000] unless (VAR_ROOM == 220) goto 0024;
[0006] VAR_RESULT = getActorRoom(1);
[0009] unless (VAR_RESULT == VAR_ROOM) goto 0015;
[000E] putActorInRoom(1,219);
[0011] putActor(1,21,44);
[0015] VAR_RESULT = getActorRoom(2);
[0018] unless (VAR_RESULT == VAR_ROOM) goto 0024;
[001D] putActorInRoom(2,219);
[0020] putActor(2,25,44);
[0024] stopSound(88);
[0026] stopSound(82);
[0028] setBoxFlags(1,0);
[002B] setBoxFlags(3,0);
[002E] Var[154] = Var[234];
[0031] stopObjectCode();
```

## OCv2_0403 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0403.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0403.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[44],Var[45],255,255);
[001F] stopObjectCode();
```

## OCv2_0404 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0404.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0404.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[46],Var[47],255,255);
[001F] stopObjectCode();
```

## OCv2_0405 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0405.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0405.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[48],Var[49],255,255);
[001F] stopObjectCode();
```

## OCv2_0406 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0406.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0406.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[50],Var[51],255,255);
[001F] stopObjectCode();
```

## OCv2_0407 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0407.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0407.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(Var[52],Var[53],255,255);
[001F] stopObjectCode();
```

## OCv2_0408 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0408.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0408.txt); entry `001C`.

```text
[001C] unless (Var[55] == 220) goto 0027;
[0022] setBitVar(1574,0,Var[235]);
[0027] loadRoomWithEgo(Var[54],Var[55],255,255);
[002C] stopObjectCode();
```

## OCv2_0408 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0408.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0408.txt); entry `002D`.

```text
[002D] cursorCommand(247, 1);
[0030] clearState04(408);
[0033] delay(30);
[0037] printEgo("Owwwwww. That hurt!");
[004A] waitForMessage();
[004B] doSentence(253,409,0,1);
[0052] stopObjectCode();
```

## OCv2_0409 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0409.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0409.txt); entry `0013`.

```text
[0013] delay(120);
[0017] waitForMessage();
[0018] unless (Var[249] == Var[235]) goto 003B;
[001D] printEgo("I don't like the sound of this.");
[003B] printEgo("It sounds like a vicious sleeping beast.\x01\x01I wouldn't want to wake it.");
[0076] waitForMessage();
[0077] delay(180);
[007B] cursorCommand(15, 2);
[007E] waitForMessage();
[007F] printEgo("I'm getting out of here!");
[0095] delay(120);
[0099] walkActorToObject(VAR_EGO,408);
[009D] waitForActor(VAR_EGO);
[009F] Var[44] = 2;
[00A3] unless (VAR_EGO == 2) goto 00AD;
[00A9] Var[44] = 1;
[00AD] VAR_RESULT = getActorRoom(Var[44]);
[00B0] unless (VAR_RESULT == VAR_ROOM) goto 00BF;
[00B5] putActorInRoom(Var[44],219);
[00B8] putActor(Var[44],22,44);
[00BC] animateActor(Var[44],246);
[00BF] cursorCommand(247, 1);
[00C2] doSentence(13,408,0,1);
[00C9] stopObjectCode();
```

## OCv2_0410 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0410.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0410.txt); entry `0013`.

```text
[0013] startSound(82);
[0015] delay(30);
[0019] waitForMessage();
[001A] printEgo("Uh oh, I think it's waking up!");
[0034] delay(300);
[0038] cursorCommand(15, 2);
[003B] Var[249] = Var[234];
[003E] Var[66] = getActorX(VAR_EGO);
[0041] walkActorTo(VAR_EGO,Var[66],63);
[0045] printEgo("STAY AWAY!");
[0050] delay(45);
[0054] printEgo("HELP!");
[005B] delay(45);
[005F] printEgo("ARRRRGHHHH!");
[006C] ActorOps(VAR_EGO,[Costume(0)]);
[0070] delay(120);
[0074] print(255,"");
[0077] delay(120);
[007B] Var[44] = 2;
[007F] unless (VAR_EGO == 2) goto 0089;
[0085] Var[44] = 1;
[0089] VAR_RESULT = getActorRoom(Var[44]);
[008C] unless (VAR_RESULT == VAR_ROOM) goto 009B;
[0091] putActorInRoom(Var[44],219);
[0094] putActor(Var[44],21,44);
[0098] animateActor(Var[44],246);
[009B] Var[166] = 5;
[009F] startScript(78);
[00A1] stopObjectCode();
```

## OCv2_0411 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0411.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0411.txt); entry `0017`.

```text
[0017] unless (VAR_EGO == 2) goto 005C;
[001D] printEgo("Those who enter, BEWARE! The Guardian\x01\x01of the Sphinx sleeps lightly.");
[005C] printEgo("I can't read this stuff.");
[0072] stopObjectCode();
```

## OCv2_0412 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0412.txt](../../zak/converted/scripts_flat/LFv2_0023/ROv2/OCv2_0412.txt); entry `0013`.

```text
[0013] startSound(82);
[0015] delay(60);
```
