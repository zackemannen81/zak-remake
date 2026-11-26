# Room 035 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] unless (!getState04(558)) goto 000B;
[0009] Var[154]++;
[000B] unless (VAR_ROOM == 195) goto 00A4;
[0011] RoomScroll(20,20);
[0015] clearState08(550);
[0018] clearState08(551);
[001B] clearState08(552);
[001E] clearState08(545);
[0021] clearState02(545);
[0024] clearState08(546);
[0027] clearState08(547);
[002A] setBoxFlags(10,128);
[002D] ActorOps(10,[TalkColor(9)]);
[0031] ActorOps(10,[Costume(29)]);
[0035] ActorOps(10,[Color(3, 1)]);
[003A] ActorOps(10,[Name("projection")]);
[0049] loadCostume(29)
[004C] loadScript(47)
[004F] unless (!getState08(549)) goto 005D;
[0054] setBoxFlags(4,0);
[0057] setBoxFlags(6,0);
[005D] setBoxFlags(4,64);
[0060] setBoxFlags(6,64);
[0063] Var[66] = 1;
[0067] VAR_RESULT = getActorRoom(Var[66]);
[006A] unless (VAR_RESULT == 195) goto 0085;
[0070] setBitVar(1440,Var[66],Var[234]);
[0075] VAR_RESULT = getActorWalkBox(Var[66]);
[0078] unless (VAR_RESULT != 9) goto 0085;
[007E] putActorInRoom(Var[66],195);
[0081] putActor(Var[66],29,56);
[0085] Var[66]++;
[0087] unless (Var[66] > 4) goto 0067;
[008D] loadSound(29)
[0090] loadSound(19)
[0093] doSentence(253,554,0,1);
[009A] doSentence(253,551,0,1);
[00A4] RoomScroll(60,60);
[00A8] setBoxFlags(9,128);
[00AB] drawObject(559,Var[161],5);
[00B0] drawObject(560,Var[162],8);
[00B5] setVarRange(Var[49],2,[57,61]);
[00BA] doSentence(253,558,0,1);
[00C1] unless (getState08(556)) goto 00C8;
[00C6] startSound(55);
[00C8] unless (getState08(557)) goto 00CF;
[00CD] startSound(57);
[00CF] loadSound(9)
[00D2] ActorOps(VAR_EGO,[Sound(9)]);
[00D6] unless (VAR_EGO == 3) goto 00E3;
[00DC] doSentence(253,555,0,1);
[00E3] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/EXv2.txt); entry `0000`.

```text
[0000] Var[154] = Var[234];
[0003] Var[203] = Var[234];
[0006] unless (VAR_ROOM == 194) goto 0035;
[000C] ActorOps(VAR_EGO,[Sound(6)]);
[0010] setState04(558);
[0013] unless (getState08(556)) goto 001E;
[0018] Var[161] = Var[50];
[001E] Var[161] = Var[49];
[0021] clearState04(558);
[0024] unless (getState08(557)) goto 002F;
[0029] Var[162] = Var[50];
[002F] Var[162] = Var[49];
[0032] clearState04(558);
[0035] stopSound(19);
[0037] stopSound(52);
[0039] stopSound(40);
[003B] stopSound(55);
[003D] stopSound(57);
[003F] stopSound(56);
[0041] stopSound(58);
[0043] setBoxFlags(9,0);
[0046] setBoxFlags(10,0);
[0049] ActorOps(10,[Name()]);
[004E] stopScript(47);
[0050] print(255,"");
[0053] putActorInRoom(10,0);
[0056] clearState08(561);
[0059] clearState08(562);
[005C] clearState08(559);
[005F] clearState08(560);
[0062] stopObjectCode();
```

## OCv2_0076 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0076.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0076.txt); entry `0022`.

```text
[0022] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0027] stopObjectCode();
```

## OCv2_0076 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0076.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0076.txt); entry `001F`.

```text
[001F] pickupObject(VAR_ACTIVE_OBJECT1);
[0021] stopObjectCode();
```

## OCv2_0543 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0543.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0543.txt); entry `0017`.

```text
[0017] loadRoomWithEgo(566,196,255,255);
[001D] stopObjectCode();
```

## OCv2_0544 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0544.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0544.txt); entry `001C`.

```text
[001C] setState08(VAR_ACTIVE_OBJECT1);
[001E] setState02(VAR_ACTIVE_OBJECT1);
[0020] delay(60);
[0024] printEgo("Oops! It crumbled to dust.");
[003C] waitForMessage();
[003D] animateActor(VAR_EGO,246);
[0040] printEgo("I wonder if there's a locksmith nearby?");
[0063] stopObjectCode();
```

## OCv2_0545 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0545.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0545.txt); entry `001B`.

```text
[001B] setState08(VAR_ACTIVE_OBJECT1);
[001D] setState02(VAR_ACTIVE_OBJECT1);
[001F] startSound(52);
[0021] doSentence(250,552,0,1);
[0028] breakHere();
[0029] unless (Var[45] <= 24) goto 0028;
[002F] drawObject(546,255,255);
[0034] breakHere();
[0035] unless (Var[45] <= 12) goto 0034;
[003B] drawObject(547,255,255);
[0040] startSound(40);
[0042] delay(120);
[0046] startScript(47);
[0048] Var[203]++;
[004A] doSentence(253,548,0,1);
[0051] stopObjectCode();
```

## OCv2_0545 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0545.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0545.txt); entry `001B`.

```text
[001B] setState08(VAR_ACTIVE_OBJECT1);
[001D] setState02(VAR_ACTIVE_OBJECT1);
[001F] startSound(52);
[0021] doSentence(250,552,0,1);
[0028] breakHere();
[0029] unless (Var[45] <= 24) goto 0028;
[002F] drawObject(546,255,255);
[0034] breakHere();
[0035] unless (Var[45] <= 12) goto 0034;
[003B] drawObject(547,255,255);
[0040] startSound(40);
[0042] delay(120);
[0046] startScript(47);
[0048] Var[203]++;
[004A] doSentence(253,548,0,1);
[0051] stopObjectCode();
```

## OCv2_0548 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0548.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0548.txt); entry `001D`.

```text
[001D] breakHere();
[001E] unless (VAR_ACTIVE_VERB == 3) goto 0043;
[0024] unless (VAR_ACTIVE_OBJECT2 == 10) goto 0043;
[002A] waitForActor(VAR_EGO);
[002C] printEgo("It's just a hologram.");
[0040] VAR_ACTIVE_OBJECT2 = Var[234];
```

## OCv2_0549 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0549.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0549.txt); entry `004C`.

```text
[004C] unless (VAR_ACTIVE_OBJECT2 == 57) goto 007B;
[0052] setOwnerOf(57,0);
[0056] clearState08(VAR_ACTIVE_OBJECT1);
[0058] doSentence(254,554,0,1);
[005F] doSentence(254,551,0,1);
[0066] breakHere();
[0067] stopSound(19);
[0069] clearState08(553);
[006C] setState02(553);
[006F] clearState08(554);
[0072] setBoxFlags(4,0);
[0075] setBoxFlags(6,0);
[007B] startScript(3);
[007D] stopObjectCode();
```

## OCv2_0549 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0549.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0549.txt); entry `001A`.

```text
[001A] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0049;
[001E] printEgo("There's an indentation the shape of an\x01\x01ankh.");
[0049] startScript(3);
[004B] stopObjectCode();
```

## OCv2_0551 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0551.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0551.txt); entry `0013`.

```text
[0013] breakHere();
[0014] VAR_RESULT = getActorX(VAR_EGO);
[0017] unless (VAR_RESULT < 28) goto 0055;
[001D] startSound(29);
[001F] setBitVar(1440,VAR_EGO,Var[235]);
[0024] breakHere();
[0025] printEgo("YEEEOUCH!");
[0030] Var[47] = getActorX(VAR_EGO);
[0033] Var[47] += 3;
[0037] Var[48] = getActorY(VAR_EGO);
[003A] unless (VAR_ACTIVE_OBJECT1 == 553) goto 0042;
[0040] doSentence(STOP);
[0042] unless (VAR_ACTIVE_OBJECT2 == 553) goto 004A;
[0048] doSentence(STOP);
[004A] walkActorTo(VAR_EGO,Var[47],Var[48]);
[004E] waitForActor(VAR_EGO);
[0050] setBitVar(1440,VAR_EGO,Var[234]);
```

## OCv2_0552 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0552.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0552.txt); entry `0013`.

```text
[0013] setVarRange(Var[51],4,[550,551,552,551]);
[001E] Var[45] = 48;
[0022] Var[46] = Var[234];
[0025] Var[14] = Var[46];
[0028] Var[14] += 51;
[002C] drawObject(Var[14],255,255);
[0030] delayVariable(Var[45]);
[0032] unless (Var[45] > 0) goto 003C;
[0038] Var[45] -= 6;
[003C] Var[46]++;
[003E] unless (Var[46] > 3) goto 0025;
```

## OCv2_0554 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0554.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0554.txt); entry `0013`.

```text
[0013] startSound(19);
[0015] drawObject(553,255,255);
[001A] breakHere();
[001B] drawObject(554,255,255);
[0020] breakHere();
```

## OCv2_0555 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0555.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0555.txt); entry `0019`.

```text
[0019] loadRoomWithEgo(565,200,255,255);
[001F] stopObjectCode();
```

## OCv2_0555 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0555.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0555.txt); entry `0020`.

```text
[0020] setState04(555);
[0023] cursorCommand(15, 2);
[0026] breakHere();
[0027] walkActorTo(3,66,59);
[002B] waitForActor(3);
[002D] animateActor(3,246);
[0030] delay(60);
[0034] printEgo("YIKES! It must be a zillion miles to the\x01\x01bottom!");
[005E] delay(60);
[0062] walkActorTo(3,68,55);
[0066] waitForActor(3);
[0068] animateActor(3,246);
[006B] waitForMessage();
[006C] delay(60);
[0070] printEgo("I'm SCARED of heights!");
[0085] delay(120);
[0089] walkActorToObject(3,555);
[008D] waitForActor(3);
[008F] cursorCommand(247, 1);
[0092] doSentence(13,555,0,1);
[0099] stopObjectCode();
```

## OCv2_0556 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0556.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0556.txt); entry `0021`.

```text
[0021] setState08(VAR_ACTIVE_OBJECT1);
[0023] doSentence(253,559,0,1);
[002A] stopObjectCode();
```

## OCv2_0556 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0556.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0556.txt); entry `002B`.

```text
[002B] clearState08(VAR_ACTIVE_OBJECT1);
[002D] doSentence(253,559,0,1);
[0034] stopObjectCode();
```

## OCv2_0556 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0556.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0556.txt); entry `0035`.

```text
[0035] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 003E;
[0039] clearState08(VAR_ACTIVE_OBJECT1);
[003E] setState08(VAR_ACTIVE_OBJECT1);
[0040] doSentence(253,559,0,1);
[0047] stopObjectCode();
```

## OCv2_0556 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0556.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0556.txt); entry `0035`.

```text
[0035] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 003E;
[0039] clearState08(VAR_ACTIVE_OBJECT1);
[003E] setState08(VAR_ACTIVE_OBJECT1);
[0040] doSentence(253,559,0,1);
[0047] stopObjectCode();
```

## OCv2_0556 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0556.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0556.txt); entry `0035`.

```text
[0035] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 003E;
[0039] clearState08(VAR_ACTIVE_OBJECT1);
[003E] setState08(VAR_ACTIVE_OBJECT1);
[0040] doSentence(253,559,0,1);
[0047] stopObjectCode();
```

## OCv2_0557 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0557.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0557.txt); entry `0021`.

```text
[0021] setState08(VAR_ACTIVE_OBJECT1);
[0023] doSentence(253,560,0,1);
[002A] stopObjectCode();
```

## OCv2_0557 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0557.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0557.txt); entry `002B`.

```text
[002B] clearState08(VAR_ACTIVE_OBJECT1);
[002D] doSentence(253,560,0,1);
[0034] stopObjectCode();
```

## OCv2_0557 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0557.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0557.txt); entry `0035`.

```text
[0035] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 003E;
[0039] clearState08(VAR_ACTIVE_OBJECT1);
[003E] setState08(VAR_ACTIVE_OBJECT1);
[0040] doSentence(253,560,0,1);
[0047] stopObjectCode();
```

## OCv2_0557 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0557.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0557.txt); entry `0035`.

```text
[0035] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 003E;
[0039] clearState08(VAR_ACTIVE_OBJECT1);
[003E] setState08(VAR_ACTIVE_OBJECT1);
[0040] doSentence(253,560,0,1);
[0047] stopObjectCode();
```

## OCv2_0557 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0557.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0557.txt); entry `0035`.

```text
[0035] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 003E;
[0039] clearState08(VAR_ACTIVE_OBJECT1);
[003E] setState08(VAR_ACTIVE_OBJECT1);
[0040] doSentence(253,560,0,1);
[0047] stopObjectCode();
```

## OCv2_0558 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0558.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0558.txt); entry `001A`.

```text
[001A] printEgo("The temperature is \x02\x02");
[002D] unless (Var[161] == Var[50]) goto 0043;
[0032] printEgo("quite nice,\x01\x01\x02\x02");
[0043] printEgo("way too cold,\x01\x01\x02\x02");
[0052] printEgo("and the air pressure is \x02\x02");
[0068] unless (Var[162] == Var[50]) goto 007E;
[006D] printEgo("comfortable.");
[007E] printEgo("dangerous!");
[008A] stopObjectCode();
```

## OCv2_0558 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0558.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0558.txt); entry `008B`.

```text
[008B] breakHere();
[008C] unless (Var[161] == Var[50]) goto 009F;
[0091] unless (Var[162] == Var[50]) goto 009F;
[0096] setState04(558);
[0099] Var[154] = Var[234];
[009F] clearState04(558);
[00A2] Var[154] = Var[235];
```

## OCv2_0559 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0559.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0559.txt); entry `0013`.

```text
[0013] unless (getState08(556)) goto 0039;
[0018] stopSound(56);
[001A] startSound(55);
[001C] unless (Var[161] < Var[50]) goto 0036;
[0021] delay(240);
[0025] drawObject(561,Var[161],5);
[002A] Var[161]++;
[002C] drawObject(559,Var[161],5);
[0031] unless (Var[161] == Var[50]) goto 0021;
[0039] startSound(56);
[003B] delay(60);
[003F] stopSound(55);
[0041] unless (Var[161] > Var[49]) goto 005D;
[0046] delay(60);
[004A] drawObject(561,Var[161],5);
[004F] Var[161] -= 1;
[0053] drawObject(559,Var[161],5);
[0058] unless (Var[161] == Var[49]) goto 0046;
[005D] stopObjectCode();
```

## OCv2_0560 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0560.txt](../../zak/converted/scripts_flat/LFv2_0035/ROv2/OCv2_0560.txt); entry `0013`.

```text
[0013] unless (getState08(557)) goto 0039;
[0018] stopSound(58);
[001A] startSound(57);
[001C] unless (Var[162] < Var[50]) goto 0036;
[0021] delay(300);
[0025] drawObject(562,Var[162],8);
[002A] Var[162]++;
[002C] drawObject(560,Var[162],8);
[0031] unless (Var[162] == Var[50]) goto 0021;
[0039] startSound(58);
[003B] delay(60);
[003F] stopSound(57);
[0041] unless (Var[162] > Var[49]) goto 005D;
[0046] delay(120);
[004A] drawObject(562,Var[162],8);
[004F] Var[162] -= 1;
[0053] drawObject(560,Var[162],8);
[0058] unless (Var[162] == Var[49]) goto 0046;
[005D] stopObjectCode();
```

## SCv2_0047 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0035/SCv2_0047.txt](../../zak/converted/scripts_flat/LFv2_0035/SCv2_0047.txt); entry `0000`.

```text
[0000] putActorInRoom(10,195);
[0003] putActor(10,4,58);
[0007] animateActor(10,250);
[000A] delay(120);
[000E] animateActor(10,245);
[0011] breakHere();
[0012] waitForMessage();
[0013] print(10,"Greetings!\x03\x03Our race departed this dimension fifty\x01\x01millennia ago.\x03\x03We, the Skolarians, were your guardians.\x03\x03We knew of the corrupt Caponians and\x01\x01took steps to protect you.\x03\x03They will subvert the Earth with their\x01\x01deadly machines.");
[00DB] waitForMessage();
[00DC] print(10,"We sent you dreams to lead you here.\x03\x03You must construct our device to\x01\x01neutralize the Caponian menace.\x03\x03Use these keys to obtain the Power\x01\x01Crystal.\x03\x03Hurry, before they stop you.");
[0174] waitForMessage();
```
