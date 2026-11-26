# Room 028 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] loadSound(2)
[0007] loadSound(38)
[000A] unless (getState08(465)) goto 0011;
[000F] Var[154]++;
[0011] unless (VAR_ROOM == 181) goto 003C;
[0017] RoomScroll(73,73);
[001B] setBoxFlags(4,128);
[001E] setObjectName(470,"metal plate");
[002D] unless (!getState04(470)) goto 0039;
[0032] doSentence(253,470,0,1);
[003C] RoomScroll(20,33);
[0040] setBoxFlags(5,128);
[0043] unless (getState08(70)) goto 004E;
[0048] setBoxFlags(6,128);
[004E] setBoxFlags(6,0);
[0051] unless (getState08(463)) goto 005D;
[0056] unless (getState08(472)) goto 005D;
[005B] Var[154]++;
[005D] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/EXv2.txt); entry `0000`.

```text
[0000] Var[154] = Var[234];
[0003] setBoxFlags(4,0);
[0006] setBoxFlags(5,0);
[0009] stopObjectCode();
```

## OCv2_0064 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0064.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0064.txt); entry `002B`.

```text
[0021] pickupObject(VAR_ACTIVE_OBJECT1);
[0023] doSentence(253,64,0,1);
[002A] stopObjectCode();
[002B] unless (VAR_ACTIVE_OBJECT2 == 73) goto 003B;
[0031] doSentence(11,73,470,0);
[003E] stopObjectCode();
```

## OCv2_0064 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0064.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0064.txt); entry `0021`.

```text
[0021] pickupObject(VAR_ACTIVE_OBJECT1);
[0023] doSentence(253,64,0,1);
[002A] stopObjectCode();
```

## OCv2_0064 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0064.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0064.txt); entry `003F`.

```text
[003F] doSentence(13,470,0,0);
[0046] printEgo("Hmm. It crumbled to dust in my hands.");
[0066] setOwnerOf(64,0);
[006A] stopObjectCode();
```

## OCv2_0067 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0067.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0067.txt); entry `0021`.

```text
[0021] pickupObject(VAR_ACTIVE_OBJECT1);
[0023] clearState08(VAR_ACTIVE_OBJECT1);
[0025] stopObjectCode();
```

## OCv2_0067 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0067.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0067.txt); entry `0026`.

```text
[0026] unless (VAR_ACTIVE_OBJECT2 == 72) goto 004F;
[002C] setState04(493);
[002F] printEgo("Great, now I can record on it.");
[0049] setOwnerOf(VAR_ACTIVE_OBJECT1,0);
[004F] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0054] stopObjectCode();
```

## OCv2_0067 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0067.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0067.txt); entry `0021`.

```text
[0021] pickupObject(VAR_ACTIVE_OBJECT1);
[0023] clearState08(VAR_ACTIVE_OBJECT1);
[0025] stopObjectCode();
```

## OCv2_0068 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0068.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0068.txt); entry `0030`.

```text
[0030] print(VAR_ACTIVE_OBJECT2,"I'm not touching a dead alien!");
[004C] stopObjectCode();
```

## OCv2_0068 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0068.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0068.txt); entry `002A`.

```text
[002A] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002F] stopObjectCode();
```

## OCv2_0068 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0068.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0068.txt); entry `0022`.

```text
[0022] doSentence(253,479,0,1);
[0029] stopObjectCode();
```

## OCv2_0069 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0069.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0069.txt); entry `002A`.

```text
[002A] setState04(VAR_ACTIVE_OBJECT1);
[002C] setObjectName(VAR_ACTIVE_OBJECT1,"lit flashlight");
[0050] unless (VAR_CURRENT_LIGHTS == 12) goto 005A;
[0056] lights(Var[234],0,0);
[005A] stopObjectCode();
```

## OCv2_0069 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0069.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0069.txt); entry `0041`.

```text
[0041] clearState04(VAR_ACTIVE_OBJECT1);
[0043] setObjectName(VAR_ACTIVE_OBJECT1,"flashlight");
[0050] unless (VAR_CURRENT_LIGHTS == 12) goto 005A;
[0056] lights(Var[234],0,0);
[005A] stopObjectCode();
```

## OCv2_0069 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0069.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0069.txt); entry `002A`.

```text
[002A] setState04(VAR_ACTIVE_OBJECT1);
[002C] setObjectName(VAR_ACTIVE_OBJECT1,"lit flashlight");
[0050] unless (VAR_CURRENT_LIGHTS == 12) goto 005A;
[0056] lights(Var[234],0,0);
[005A] stopObjectCode();
```

## OCv2_0069 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0069.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0069.txt); entry `0027`.

```text
[0027] pickupObject(VAR_ACTIVE_OBJECT1);
[0029] stopObjectCode();
```

## OCv2_0070 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0070.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0070.txt); entry `0023`.

```text
[0023] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0028] stopObjectCode();
```

## OCv2_0070 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0070.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0070.txt); entry `001B`.

```text
[001B] doSentence(253,477,0,1);
[0022] stopObjectCode();
```

## OCv2_0463 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0463.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0463.txt); entry `002B`.

```text
[002B] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0039;
[002F] doSentence(9,466,0,0);
[0039] printEgo("The door is already open.");
[0050] stopObjectCode();
```

## OCv2_0463 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0463.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0463.txt); entry `0051`.

```text
[0051] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 005F;
[0055] doSentence(9,466,0,0);
[005F] printEgo("The door is already closed.");
[0078] stopObjectCode();
```

## OCv2_0463 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0463.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0463.txt); entry `0020`.

```text
[0020] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 002A;
[0024] loadRoomWithEgo(449,185,255,255);
[002A] stopObjectCode();
```

## OCv2_0464 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0464.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0464.txt); entry `002D`.

```text
[002D] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 003B;
[0031] doSentence(9,468,0,0);
[003B] printEgo("The door is already open.");
[0052] stopObjectCode();
```

## OCv2_0464 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0464.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0464.txt); entry `0053`.

```text
[0053] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0061;
[0057] doSentence(9,468,0,0);
[0061] printEgo("The door is already closed.");
[007A] stopObjectCode();
```

## OCv2_0464 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0464.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0464.txt); entry `0022`.

```text
[0022] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 002C;
[0026] loadRoomWithEgo(472,180,255,255);
[002C] stopObjectCode();
```

## OCv2_0466 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0466.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0466.txt); entry `001B`.

```text
[001B] startSound(2);
[001D] delay(30);
[0021] unless (getState08(471)) goto 0097;
[0026] unless (!getState08(463)) goto 008C;
[002B] unless (!getState08(465)) goto 0086;
[0030] cursorCommand(15, 2);
[0033] Var[44] = 3;
[0037] startSound(37);
[0039] clearState08(467);
[003C] clearState08(474);
[003F] clearState08(465);
[0042] startSound(38);
[0044] breakHere();
[0045] setState08(465);
[0048] breakHere();
[0049] Var[44]--;
[004B] unless (!Var[44]) goto 003F;
[004F] setState08(455);
[0052] breakHere();
[0053] VAR_RESULT = isSoundRunning(37);
[0056] unless (!VAR_RESULT) goto 0052;
[005A] delay(30);
[005E] startSound(25);
[0060] setState08(463);
[0063] setState08(449);
[0066] unless (getState08(464)) goto 0079;
[006B] unless (!Var[154]) goto 0076;
[006F] doSentence(253,475,0,1);
[0079] delay(60);
[007D] cursorCommand(247, 1);
[0080] Var[154] = Var[235];
[008C] startSound(25);
[008E] clearState08(463);
[0091] clearState08(449);
[0097] printEgo("It seems to be broken.");
[00AB] stopObjectCode();
```

## OCv2_0466 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0466.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0466.txt); entry `001B`.

```text
[001B] startSound(2);
[001D] delay(30);
[0021] unless (getState08(471)) goto 0097;
[0026] unless (!getState08(463)) goto 008C;
[002B] unless (!getState08(465)) goto 0086;
[0030] cursorCommand(15, 2);
[0033] Var[44] = 3;
[0037] startSound(37);
[0039] clearState08(467);
[003C] clearState08(474);
[003F] clearState08(465);
[0042] startSound(38);
[0044] breakHere();
[0045] setState08(465);
[0048] breakHere();
[0049] Var[44]--;
[004B] unless (!Var[44]) goto 003F;
[004F] setState08(455);
[0052] breakHere();
[0053] VAR_RESULT = isSoundRunning(37);
[0056] unless (!VAR_RESULT) goto 0052;
[005A] delay(30);
[005E] startSound(25);
[0060] setState08(463);
[0063] setState08(449);
[0066] unless (getState08(464)) goto 0079;
[006B] unless (!Var[154]) goto 0076;
[006F] doSentence(253,475,0,1);
[0079] delay(60);
[007D] cursorCommand(247, 1);
[0080] Var[154] = Var[235];
[008C] startSound(25);
[008E] clearState08(463);
[0091] clearState08(449);
[0097] printEgo("It seems to be broken.");
[00AB] stopObjectCode();
```

## OCv2_0468 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0468.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0468.txt); entry `001B`.

```text
[001B] startSound(2);
[001D] delay(30);
[0021] unless (getState08(471)) goto 0095;
[0026] unless (!getState08(464)) goto 008A;
[002B] unless (!getState08(467)) goto 0084;
[0030] cursorCommand(15, 2);
[0033] Var[44] = 3;
[0037] startSound(37);
[0039] clearState08(465);
[003C] clearState08(455);
[003F] clearState08(467);
[0042] startSound(38);
[0044] breakHere();
[0045] setState08(467);
[0048] breakHere();
[0049] Var[44]--;
[004B] unless (!Var[44]) goto 003F;
[004F] setState08(474);
[0052] breakHere();
[0053] VAR_RESULT = isSoundRunning(37);
[0056] unless (!VAR_RESULT) goto 0052;
[005A] delay(30);
[005E] startSound(25);
[0060] setState08(464);
[0063] setState08(472);
[0066] Var[154] = Var[234];
[0069] unless (getState08(463)) goto 007A;
[006E] doSentence(253,475,0,1);
[0075] Var[154]++;
[007A] delay(60);
[007E] cursorCommand(247, 1);
[008A] startSound(25);
[008C] clearState08(464);
[008F] clearState08(472);
[0095] printEgo("It seems to be broken.");
[00A9] stopObjectCode();
```

## OCv2_0468 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0468.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0468.txt); entry `001B`.

```text
[001B] startSound(2);
[001D] delay(30);
[0021] unless (getState08(471)) goto 0095;
[0026] unless (!getState08(464)) goto 008A;
[002B] unless (!getState08(467)) goto 0084;
[0030] cursorCommand(15, 2);
[0033] Var[44] = 3;
[0037] startSound(37);
[0039] clearState08(465);
[003C] clearState08(455);
[003F] clearState08(467);
[0042] startSound(38);
[0044] breakHere();
[0045] setState08(467);
[0048] breakHere();
[0049] Var[44]--;
[004B] unless (!Var[44]) goto 003F;
[004F] setState08(474);
[0052] breakHere();
[0053] VAR_RESULT = isSoundRunning(37);
[0056] unless (!VAR_RESULT) goto 0052;
[005A] delay(30);
[005E] startSound(25);
[0060] setState08(464);
[0063] setState08(472);
[0066] Var[154] = Var[234];
[0069] unless (getState08(463)) goto 007A;
[006E] doSentence(253,475,0,1);
[0075] Var[154]++;
[007A] delay(60);
[007E] cursorCommand(247, 1);
[008A] startSound(25);
[008C] clearState08(464);
[008F] clearState08(472);
[0095] printEgo("It seems to be broken.");
[00A9] stopObjectCode();
```

## OCv2_0469 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0469.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0469.txt); entry `0017`.

```text
[0017] printEgo("Don't be a space goof -\x01\x01always wear your spacesuit!\x03\x03A reminder from The Friendly Hostel.");
[0064] stopObjectCode();
```

## OCv2_0470 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0470.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0470.txt); entry `0024`.

```text
[0024] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 003D;
[0028] printEgo("It's screwed shut.");
[003D] startScript(10);
[003F] stopObjectCode();
```

## OCv2_0470 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0470.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0470.txt); entry `0040`.

```text
[0040] startScript(11);
[0042] stopObjectCode();
```

## OCv2_0470 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0470.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0470.txt); entry `0050`.

```text
[0050] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 008A;
[0054] unless (classOfIs(VAR_ACTIVE_OBJECT2,16)) goto 0085;
[0059] startScript(10);
[005B] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 0082;
[005F] clearState04(VAR_ACTIVE_OBJECT1);
[0061] delay(60);
[0065] printEgo("It looks like a fuse box!");
[007B] doSentence(253,470,0,1);
[0085] startScript(3);
[008A] unless (VAR_ACTIVE_OBJECT2 == 73) goto 00DE;
[0090] unless (getState08(64)) goto 00C2;
[0095] walkActorToObject(VAR_EGO,471);
[0099] waitForActor(VAR_EGO);
[009B] setState08(471);
[009E] clearState02(471);
[00A1] setOwnerOf(73,14);
[00A5] printEgo("That ought to fix it!");
[00B8] doSentence(13,470,0,0);
[00C2] printEgo("The burnt fuse is in the box.");
[00DE] startScript(3);
[00E0] stopObjectCode();
```

## OCv2_0470 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0470.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0470.txt); entry `0043`.

```text
[0043] setObjectName(470,"fuse box");
[004F] stopObjectCode();
```

## OCv2_0471 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0471.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0471.txt); entry `0017`.

```text
[0017] setOwnerOf(73,VAR_EGO);
[001B] clearState08(VAR_ACTIVE_OBJECT1);
[001D] setState02(VAR_ACTIVE_OBJECT1);
[001F] doSentence(13,470,0,0);
[0026] stopObjectCode();
```

## OCv2_0472 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0472.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0472.txt); entry `001B`.

```text
[001B] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0029;
[001F] doSentence(9,473,0,0);
[0029] printEgo("The door is already open.");
[0040] stopObjectCode();
```

## OCv2_0472 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0472.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0472.txt); entry `0041`.

```text
[0041] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 004F;
[0045] doSentence(9,473,0,0);
[004F] printEgo("The door is already closed.");
[0068] stopObjectCode();
```

## OCv2_0472 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0472.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0472.txt); entry `0069`.

```text
[0069] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0073;
[006D] loadRoomWithEgo(464,181,255,255);
[0073] stopObjectCode();
```

## OCv2_0473 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0473.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0473.txt); entry `001B`.

```text
[001B] startSound(2);
[001D] delay(30);
[0021] unless (getState08(471)) goto 0087;
[0026] clearState08(463);
[0029] clearState08(449);
[002C] unless (!getState08(464)) goto 007C;
[0031] unless (!getState08(467)) goto 0076;
[0036] cursorCommand(15, 2);
[0039] Var[44] = 3;
[003D] startSound(37);
[003F] clearState08(465);
[0042] clearState08(455);
[0045] clearState08(474);
[0048] startSound(38);
[004A] breakHere();
[004B] setState08(474);
[004E] breakHere();
[004F] Var[44]--;
[0051] unless (!Var[44]) goto 0045;
[0055] setState08(467);
[0058] breakHere();
[0059] VAR_RESULT = isSoundRunning(37);
[005C] unless (!VAR_RESULT) goto 0058;
[0060] delay(30);
[0064] startSound(25);
[0066] setState08(464);
[0069] setState08(472);
[006C] delay(60);
[0070] cursorCommand(247, 1);
[007C] startSound(25);
[007E] clearState08(464);
[0081] clearState08(472);
[0087] printEgo("It seems to be broken.");
[009B] stopObjectCode();
```

## OCv2_0473 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0473.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0473.txt); entry `001B`.

```text
[001B] startSound(2);
[001D] delay(30);
[0021] unless (getState08(471)) goto 0087;
[0026] clearState08(463);
[0029] clearState08(449);
[002C] unless (!getState08(464)) goto 007C;
[0031] unless (!getState08(467)) goto 0076;
[0036] cursorCommand(15, 2);
[0039] Var[44] = 3;
[003D] startSound(37);
[003F] clearState08(465);
[0042] clearState08(455);
[0045] clearState08(474);
[0048] startSound(38);
[004A] breakHere();
[004B] setState08(474);
[004E] breakHere();
[004F] Var[44]--;
[0051] unless (!Var[44]) goto 0045;
[0055] setState08(467);
[0058] breakHere();
[0059] VAR_RESULT = isSoundRunning(37);
[005C] unless (!VAR_RESULT) goto 0058;
[0060] delay(30);
[0064] startSound(25);
[0066] setState08(464);
[0069] setState08(472);
[006C] delay(60);
[0070] cursorCommand(247, 1);
[007C] startSound(25);
[007E] clearState08(464);
[0081] clearState08(472);
[0087] printEgo("It seems to be broken.");
[009B] stopObjectCode();
```

## OCv2_0475 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0475.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0475.txt); entry `001D`.

```text
[001D] startScript(10);
[001F] stopObjectCode();
```

## OCv2_0475 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0475.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0475.txt); entry `0020`.

```text
[0020] startScript(11);
[0022] stopObjectCode();
```

## OCv2_0475 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0475.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0475.txt); entry `0023`.

```text
[0023] startSound(54);
[0025] delay(120);
[0029] animateActor(VAR_EGO,246);
[002C] delay(38);
[0030] printEgo("OH NO! I've depressurized the hostel!");
[0052] waitForMessage();
[0053] cursorCommand(247, 1);
[0056] stopObjectCode();
```

## OCv2_0476 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0476.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0476.txt); entry `001B`.

```text
[001B] unless (getState08(67)) goto 0031;
[0020] printEgo("It won't open.");
[0031] startScript(10);
[0033] stopObjectCode();
```

## OCv2_0476 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0476.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0476.txt); entry `0034`.

```text
[0034] startScript(11);
[0036] stopObjectCode();
```

## OCv2_0477 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0477.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0477.txt); entry `0019`.

```text
[0019] unless (VAR_EGO == 3) goto 0041;
[001F] printEgo("No way! Who knows WHAT used it last!");
[0041] printEgo("I'm not sleepy.");
[0050] stopObjectCode();
```

## OCv2_0477 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0477.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0477.txt); entry `0051`.

```text
[0051] Var[60] = 6;
[0055] startScript(83);
[0057] breakHere();
[0058] VAR_RESULT = isScriptRunning(83);
[005B] unless (VAR_RESULT == Var[234]) goto 0057;
[0060] unless (!getState04(70)) goto 006B;
[0065] setBoxFlags(6,128);
[0068] pickupObject(70);
[006B] stopObjectCode();
```

## OCv2_0478 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0478.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0478.txt); entry `0021`.

```text
[0021] unless (VAR_EGO == 4) goto 002A;
[002A] VAR_RESULT = getBitVar(1450,VAR_EGO);
[002F] unless (!VAR_RESULT) goto 0096;
[0033] setBitVar(1450,VAR_EGO,Var[235]);
[0038] Var[45] = VAR_EGO;
[003B] printEgo("I don't know what's under the covers,\x01\x01\x02\x02");
[005E] unless (VAR_EGO == 4) goto 006D;
[0064] printEgo("but \x02\x02");
[006D] printEgo("");
[006F] waitForMessage();
[0070] animateActor(Var[45],246);
[0073] print(Var[45],"and I'd really rather not find out.");
[0096] doSentence(253,478,0,1);
[009D] stopObjectCode();
```

## OCv2_0478 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0478.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0478.txt); entry `0021`.

```text
[0021] unless (VAR_EGO == 4) goto 002A;
[002A] VAR_RESULT = getBitVar(1450,VAR_EGO);
[002F] unless (!VAR_RESULT) goto 0096;
[0033] setBitVar(1450,VAR_EGO,Var[235]);
[0038] Var[45] = VAR_EGO;
[003B] printEgo("I don't know what's under the covers,\x01\x01\x02\x02");
[005E] unless (VAR_EGO == 4) goto 006D;
[0064] printEgo("but \x02\x02");
[006D] printEgo("");
[006F] waitForMessage();
[0070] animateActor(Var[45],246);
[0073] print(Var[45],"and I'd really rather not find out.");
[0096] doSentence(253,478,0,1);
[009D] stopObjectCode();
```

## OCv2_0478 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0478.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0478.txt); entry `0021`.

```text
[0021] unless (VAR_EGO == 4) goto 002A;
[002A] VAR_RESULT = getBitVar(1450,VAR_EGO);
[002F] unless (!VAR_RESULT) goto 0096;
[0033] setBitVar(1450,VAR_EGO,Var[235]);
[0038] Var[45] = VAR_EGO;
[003B] printEgo("I don't know what's under the covers,\x01\x01\x02\x02");
[005E] unless (VAR_EGO == 4) goto 006D;
[0064] printEgo("but \x02\x02");
[006D] printEgo("");
[006F] waitForMessage();
[0070] animateActor(Var[45],246);
[0073] print(Var[45],"and I'd really rather not find out.");
[0096] doSentence(253,478,0,1);
[009D] stopObjectCode();
```

## OCv2_0478 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0478.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0478.txt); entry `0021`.

```text
[0021] unless (VAR_EGO == 4) goto 002A;
[002A] VAR_RESULT = getBitVar(1450,VAR_EGO);
[002F] unless (!VAR_RESULT) goto 0096;
[0033] setBitVar(1450,VAR_EGO,Var[235]);
[0038] Var[45] = VAR_EGO;
[003B] printEgo("I don't know what's under the covers,\x01\x01\x02\x02");
[005E] unless (VAR_EGO == 4) goto 006D;
[0064] printEgo("but \x02\x02");
[006D] printEgo("");
[006F] waitForMessage();
[0070] animateActor(Var[45],246);
[0073] print(Var[45],"and I'd really rather not find out.");
[0096] doSentence(253,478,0,1);
[009D] stopObjectCode();
```

## OCv2_0478 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0478.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0478.txt); entry `009E`.

```text
[009E] Var[45] = VAR_EGO;
[00A1] printEgo("I guess it won't hurt to look.");
[00BB] waitForMessage();
[00BC] startSound(1);
[00BE] setState08(478);
[00C1] setState02(478);
[00C4] print(Var[45],"Oh. It's just a broom.\x03\x03No! WAIT! IT HAS EYES!!");
[00ED] waitForMessage();
[00EE] print(Var[45],"It's a DEAD ALIEN!");
[0100] walkActorTo(Var[45],49,69);
[0104] Var[66] = 3;
[0108] unless (Var[45] == 3) goto 0112;
[010E] Var[66] = 4;
[0112] VAR_RESULT = getActorRoom(Var[66]);
[0115] unless (VAR_RESULT == VAR_ROOM) goto 011E;
[011A] walkActorToObject(Var[66],472);
[011E] waitForActor(Var[45]);
[0120] walkActorToObject(Var[45],472);
[0124] stopObjectCode();
```

## OCv2_0479 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0479.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0479.txt); entry `0025`.

```text
[0025] doSentence(STOP);
[0027] printEgo("I don't need it.");
[0036] waitForMessage();
[0037] animateActor(VAR_EGO,246);
[003A] breakHere();
[003B] breakHere();
[003C] printEgo("It's for a different game.");
[0054] waitForMessage();
[0055] animateActor(VAR_EGO,24);
[0058] delay(120);
[005C] animateActor(VAR_EGO,16);
[005F] stopObjectCode();
```

## OCv2_0479 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0479.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0479.txt); entry `0025`.

```text
[0025] doSentence(STOP);
[0027] printEgo("I don't need it.");
[0036] waitForMessage();
[0037] animateActor(VAR_EGO,246);
[003A] breakHere();
[003B] breakHere();
[003C] printEgo("It's for a different game.");
[0054] waitForMessage();
[0055] animateActor(VAR_EGO,24);
[0058] delay(120);
[005C] animateActor(VAR_EGO,16);
[005F] stopObjectCode();
```

## OCv2_0479 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0479.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0479.txt); entry `0060`.

```text
[0060] printEgo("Use for chainsaws only.");
[0076] stopObjectCode();
```

## OCv2_0479 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0479.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0479.txt); entry `0025`.

```text
[0025] doSentence(STOP);
[0027] printEgo("I don't need it.");
[0036] waitForMessage();
[0037] animateActor(VAR_EGO,246);
[003A] breakHere();
[003B] breakHere();
[003C] printEgo("It's for a different game.");
[0054] waitForMessage();
[0055] animateActor(VAR_EGO,24);
[0058] delay(120);
[005C] animateActor(VAR_EGO,16);
[005F] stopObjectCode();
```

## OCv2_0479 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0479.txt](../../zak/converted/scripts_flat/LFv2_0028/ROv2/OCv2_0479.txt); entry `0077`.

```text
[0077] unless (VAR_EGO != 4) goto 00A0;
[007D] printEgo("No way am I gonna pick up a dead alien!");
[00A0] printEgo("Well, I'll just pretend it's a broom.");
[00C1] doSentence(254,478,0,1);
[00C8] pickupObject(68);
[00CB] stopObjectCode();
```

## SCv2_0071 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0028/SCv2_0071.txt](../../zak/converted/scripts_flat/LFv2_0028/SCv2_0071.txt); entry `0000`.

```text
[0000] printEgo("It reads \x02\x02");
[000A] setVarRange(Var[117],3,[0,0,0]);
[0010] unless (Var[66] >= 240) goto 0034;
[0016] Var[66] = Var[234];
[0019] Var[118]++;
[001B] printEgo("\x04\x76\x04 hour\x02\x02");
[0025] Var[119]++;
[0027] unless (Var[66] >= 4) goto 0034;
[002D] printEgo(" and \x02\x02");
[0034] unless (Var[66] >= 4) goto 005E;
[003A] Var[66] -= 4;
[003E] Var[117]++;
[0040] unless (Var[66] < 4) goto 003A;
[0046] printEgo("\x04\x75\x04 minute\x02\x02");
[0052] Var[119]++;
[0054] unless (Var[117] > 1) goto 005E;
[005A] printEgo("s\x02\x02");
[005E] unless (Var[119] == 0) goto 006C;
[0064] printEgo("no \x02\x02");
[006C] unless (Var[119] == 1) goto 007B;
[0072] printEgo(" of \x02\x02");
[007B] printEgo(" of\x01\x01\x02\x02");
[0082] printEgo("oxygen left.");
[008F] stopObjectCode();
```

## SCv2_0082 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0028/SCv2_0082.txt](../../zak/converted/scripts_flat/LFv2_0028/SCv2_0082.txt); entry `0000`.

```text
[0000] Var[199] = Var[234];
[0003] breakHere();
[0004] VAR_RESULT = isScriptRunning(49);
[0007] unless (!VAR_RESULT) goto 0003;
[000B] VAR_RESULT = getBitVar(1505,VAR_EGO);
[0010] unless (!VAR_RESULT) goto 0040;
[0014] Var[66] = Var[235];
[0017] VAR_RESULT = getBitVar(1505,Var[66]);
[001C] unless (VAR_RESULT) goto 0033;
[0020] unless (VAR_EGO != Var[66]) goto 002C;
[0025] VAR_EGO = Var[66];
[0028] startScript(19);
[002A] actorFollowCamera(VAR_EGO);
[002C] delay(60);
[0033] Var[66]++;
[0035] unless (Var[66] > 4) goto 0017;
[003B] Var[199] = Var[235];
[003E] stopScript(0);
[0040] animateActor(VAR_EGO,246);
[0043] Var[166] = 3;
[0047] unless (VAR_EGO == 1) goto 0094;
[004D] unless (!getState04(39)) goto 006B;
[0052] printEgo("My skin's boiling!");
[0064] Var[166] = 6;
[006B] unless (Var[167] == 56) goto 0094;
[0071] printEgo("The air's leaking from my fish bowl.");
[0094] printEgo("I can't breathe!");
[00A4] Var[219] = Var[235];
[00A7] VAR_RESULT = getBitVar(1505,Var[219]);
[00AC] unless (VAR_RESULT) goto 00E7;
[00B0] Var[14] = Var[219];
[00B3] Var[14] += 225;
[00B7] Var[Var[14]] -= Var[235];
[00BA] Var[14] = Var[219];
[00BD] Var[14] += 225;
[00C1] unless (!Var[14]) goto 00E7;
[00C5] unless (VAR_EGO != Var[219]) goto 00D3;
[00CA] VAR_EGO = Var[219];
[00CD] actorFollowCamera(VAR_EGO);
[00CF] delay(60);
[00D3] unless (VAR_EGO != 1) goto 00DD;
[00D9] Var[166] = 3;
[00DD] startScript(78);
[00DF] breakHere();
[00E0] VAR_RESULT = isScriptRunning(78);
[00E3] unless (!VAR_RESULT) goto 00DF;
[00E7] Var[219]++;
[00E9] unless (Var[219] > 4) goto 00A7;
[00EF] delay(60);
```

## SCv2_0083 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0028/SCv2_0083.txt](../../zak/converted/scripts_flat/LFv2_0028/SCv2_0083.txt); entry `0000`.

```text
[0000] clearState04(70);
[0003] Var[66] = 1;
[0007] unless (Var[66] != VAR_EGO) goto 0032;
[000C] VAR_RESULT = getActorWalkBox(Var[66]);
[000F] unless (VAR_RESULT == Var[60]) goto 0032;
[0014] setState04(70);
[0017] printEgo("I don't want to hurt my friend!");
[0032] Var[66]++;
[0034] unless (Var[66] > 4) goto 0007;
[003A] stopObjectCode();
```
