# Room 038 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] ActorOps(10,[TalkColor(14)]);
[0008] startSound(85);
[000A] Var[66] = 10;
[000E] ActorOps(Var[66],[Costume(21)]);
[0012] ActorOps(Var[66],[Sound(Var[234])]);
[0016] ActorOps(Var[66],[Name()]);
[001B] Var[66]++;
[001D] unless (Var[66] > 12) goto 000E;
[0023] ActorOps(10,[Name("Shaman")]);
[002E] unless (VAR_ROOM == 150) goto 0065;
[0034] RoomScroll(20,60);
[0038] setBoxFlags(6,128);
[003B] setBoxFlags(9,128);
[003E] clearState08(582);
[0041] clearState08(583);
[0044] clearState08(584);
[0047] clearState08(585);
[004A] VAR_RESULT = getObjectOwner(44);
[004E] unless (VAR_RESULT == 0) goto 0062;
[0054] VAR_RESULT = isScriptRunning(70);
[0057] unless (!VAR_RESULT) goto 0062;
[005B] doSentence(250,583,0,1);
[0065] RoomScroll(100,100);
[0069] setBoxFlags(1,128);
[006C] startScript(34);
[006E] loadScript(45)
[0071] doSentence(253,585,0,1);
[0078] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/EXv2.txt); entry `0000`.

```text
[0000] setActorElevation(10,Var[234]);
[0003] stopSound(85);
[0005] setBoxFlags(6,0);
[0008] setBoxFlags(9,0);
[000B] setBoxFlags(1,0);
[000E] stopScript(34);
[0010] stopObjectCode();
```

## OCv2_0576 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0576.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0576.txt); entry `0019`.

```text
[0019] Var[14] = VAR_EGO;
[001C] Var[14] += 219;
[0020] Var[Var[14]] = 218;
[0024] Var[14] = VAR_EGO;
[0027] Var[14] += 222;
[002B] Var[Var[14]] = 147;
[002F] Var[14] = VAR_EGO;
[0032] Var[14] += 216;
[0036] Var[Var[14]] = 5;
[003A] Var[58] = 575;
[003E] Var[59] = 576;
[0042] Var[255] = VAR_ROOM;
[0045] loadRoomWithEgo(Var[58],174,255,255);
[004A] stopObjectCode();
```

## OCv2_0577 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0577.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0577.txt); entry `0017`.

```text
[0017] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 002D;
[001B] printEgo("The Doctor is IN");
[002D] printEgo("The Doctor is OUT");
[003D] stopObjectCode();
```

## OCv2_0578 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0578.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0578.txt); entry `003A`.

```text
[0027] printEgo("The door's locked.");
[0039] stopObjectCode();
[003A] unless (getState08(577)) goto 0042;
[0042] printEgo("It's already open.");
[0054] stopObjectCode();
```

## OCv2_0578 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0578.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0578.txt); entry `0019`.

```text
[0019] unless (!getState08(577)) goto 0027;
[001E] loadRoomWithEgo(579,151,255,255);
[0027] printEgo("The door's locked.");
[0039] stopObjectCode();
```

## OCv2_0579 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0579.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0579.txt); entry `0017`.

```text
[0017] loadRoomWithEgo(578,150,255,255);
[001D] stopObjectCode();
```

## OCv2_0580 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0580.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0580.txt); entry `0017`.

```text
[0017] printEgo("CashCards Accepted");
[002A] stopObjectCode();
```

## OCv2_0582 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0582.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0582.txt); entry `0013`.

```text
[0013] walkActorToActor(11,10,4);
[0017] walkActorToActor(12,11,4);
[001B] breakHere();
[001C] breakHere();
```

## OCv2_0583 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0583.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0583.txt); entry `0013`.

```text
[0013] breakHere();
[0014] Var[66] = getRandomNr(3);
[0017] Var[66] += 582;
[001B] drawObject(Var[66],255,255);
```

## OCv2_0585 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0585.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0585.txt); entry `0013`.

```text
[0013] Var[203] = Var[235];
[0016] VAR_ACTIVE_OBJECT2 = Var[234];
[0019] breakHere();
[001A] unless (VAR_ACTIVE_VERB == 3) goto 01C8;
[0020] unless (VAR_ACTIVE_OBJECT2 == 10) goto 01C8;
[0026] waitForActor(VAR_EGO);
[0028] VAR_RESULT = getDist(VAR_EGO,10);
[002D] unless (VAR_RESULT > 4) goto 003B;
[0033] walkActorToActor(VAR_EGO,10,4);
[0037] breakHere();
[003B] faceActor(VAR_ACTIVE_OBJECT2,VAR_EGO);
[003E] faceActor(VAR_EGO,10);
[0041] stopObjectCode();
```

## OCv2_0586 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0586.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0586.txt); entry `001F`.

```text
[001F] printEgo("They look like a nice set of Pongs\x02\x02");
[003D] VAR_RESULT = getObjectOwner(44);
[0041] unless (VAR_RESULT) goto 0062;
[0045] printEgo(",\x01\x01but there's no sand wedge.");
[0062] printEgo(".");
[0065] stopObjectCode();
```

## OCv2_0586 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0586.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0586.txt); entry `0066`.

```text
[0066] printEgo("I'd better not touch them^ the doctor\x01\x01might get mad.");
[0094] stopObjectCode();
```

## OCv2_0587 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0587.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0587.txt); entry `001C`.

```text
[001C] printEgo("Watsamatta University^\x03\x03^Master of Cranial Diminishment");
[0050] stopObjectCode();
```

## OCv2_0587 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0587.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0587.txt); entry `0051`.

```text
[0051] waitForMessage();
[0052] walkActorTo(10,98,46);
[0056] waitForActor(10);
[0058] animateActor(10,246);
[005B] breakHere();
[005C] setActorElevation(10,250);
[005F] stopObjectCode();
```

## OCv2_0588 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0588.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0588.txt); entry `001A`.

```text
[001A] printEgo("Kinshasa Medical School^\x03\x03^Witch Doctor First Class");
[0049] stopObjectCode();
```

## OCv2_0589 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0589.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0589.txt); entry `001D`.

```text
[001D] printEgo("It's a photo of the Shaman and \x02\x02");
[0038] VAR_RESULT = getBitVar(1461,VAR_EGO);
[003D] unless (VAR_RESULT) goto 0050;
[0041] printEgo("the Guru.\x01\x01\x02\x02");
[0050] printEgo("a guru.\x01\x01\x02\x02");
[005A] printEgo("And they're on a golf course!");
[0074] stopObjectCode();
```

## OCv2_0591 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0591.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0591.txt); entry `0016`.

```text
[0016] printEgo("I don't want to disturb its occupants.");
[0038] stopObjectCode();
```

## OCv2_0592 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0592.txt](../../zak/converted/scripts_flat/LFv2_0038/ROv2/OCv2_0592.txt); entry `0016`.

```text
[0016] doSentence(1,591,0,1);
[001D] stopObjectCode();
```

## SCv2_0034 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0038/SCv2_0034.txt](../../zak/converted/scripts_flat/LFv2_0038/SCv2_0034.txt); entry `0000`.

```text
[0000] Var[46] = Var[234];
[0003] Var[49] = Var[46];
[0006] putActorInRoom(10,151);
[0009] putActor(10,98,46);
[000D] setActorElevation(10,250);
[0010] animateActor(10,250);
[0013] animateActor(10,24);
[0016] unless (VAR_ACTIVE_OBJECT1 == 578) goto 008F;
[001C] setBitVar(1458,VAR_EGO,Var[235]);
[0021] delay(90);
[0025] setActorElevation(10,Var[234]);
[0028] walkActorToActor(10,VAR_EGO,4);
[002C] print(10,"Hello, hello! \x02\x02");
[003C] VAR_RESULT = getObjectOwner(44);
[0040] unless (VAR_RESULT == 0) goto 0079;
[0046] print(10,"I cannot help you until\x01\x01you bring the Yellow Crystal.");
[0079] print(10,"What can I do for you?");
[008D] waitForActor(10);
[008F] doSentence(253,587,0,1);
[0096] stopObjectCode();
```

## SCv2_0045 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0038/SCv2_0045.txt](../../zak/converted/scripts_flat/LFv2_0038/SCv2_0045.txt); entry `0000`.

```text
[0000] stopScript(34);
[0002] cutscene();
[0003] doSentence(254,587,0,1);
[000A] print(10,"Excellent!");
[0017] walkActorToActor(10,VAR_EGO,4);
[001B] setActorElevation(10,Var[234]);
[001E] waitForActor(10);
[0020] faceActor(10,VAR_EGO);
[0023] faceActor(VAR_EGO,10);
[0026] stopObjectCode();
```

## SCv2_0070 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0038/SCv2_0070.txt](../../zak/converted/scripts_flat/LFv2_0038/SCv2_0070.txt); entry `0000`.

```text
[0000] waitForMessage();
[0001] cutscene();
[0002] waitForActor(VAR_EGO);
[0004] Var[120] = getObjectOwner(44);
[0008] unless (Var[120]) goto 0057;
[000C] setBitVar(1559,8,Var[235]);
[0011] print(10,"A Golden Boar Sand Wedge! Just what I\x01\x01needed for my set!");
[0042] setOwnerOf(44,0);
[0046] waitForMessage();
[0047] setActorElevation(10,Var[234]);
[004A] walkActorToObject(10,586);
[004E] waitForActor(10);
[0050] delay(60);
[0057] startSound(84);
[0059] delay(120);
[005D] print(10,"Thanks!");
[0067] waitForMessage();
[0068] setActorElevation(10,Var[234]);
[006B] faceActor(10,VAR_EGO);
[006E] waitForActor(10);
[0070] print(10,"Come, my friend.");
[0081] waitForMessage();
[0082] Var[119] = 1;
[0086] unless (VAR_EGO == Var[119]) goto 008F;
[008B] Var[119] = 2;
[008F] VAR_RESULT = getActorRoom(Var[119]);
[0092] unless (VAR_RESULT == 150) goto 00C9;
[0098] putActorInRoom(Var[119],151);
[009B] putActor(Var[119],117,52);
[009F] startScript(5);
[00A1] walkActorToActor(Var[119],VAR_EGO,4);
[00A5] waitForActor(Var[119]);
[00A7] faceActor(Var[119],VAR_EGO);
[00AA] faceActor(VAR_EGO,Var[119]);
[00AD] waitForActor(Var[119]);
[00AF] print(Var[119],"What's taking you so long?");
[00C8] waitForMessage();
[00C9] VAR_RESULT = getActorRoom(Var[119]);
[00CC] unless (VAR_RESULT == VAR_ROOM) goto 0118;
[00D1] walkActorToActor(10,Var[119],4);
[00D5] waitForActor(10);
[00D7] faceActor(10,Var[119]);
[00DA] faceActor(Var[119],10);
[00DD] stopObjectCode();
[0118] Var[119] = Var[234];
[011B] walkActorToObject(10,579);
[011F] walkActorToObject(VAR_EGO,579);
[0123] waitForActor(10);
[0125] putActorInRoom(VAR_EGO,150);
[0128] putActor(VAR_EGO,8,56);
[012C] putActorInRoom(10,150);
[012F] putActor(10,12,56);
[0133] putActorInRoom(11,150);
[0136] putActor(11,26,43);
[013A] putActorInRoom(12,150);
[013D] putActor(12,22,43);
[0141] setActorElevation(12,0);
[0144] animateActor(11,250);
[0147] animateActor(12,250);
[014A] actorFollowCamera(10);
[014C] animateActor(10,24);
[014F] loadSound(90)
[0152] lockSound(90)
[0155] loadSound(91)
[0158] lockSound(91)
[015B] loadSound(92)
[015E] lockSound(92)
[0161] walkActorTo(10,26,60);
[0165] walkActorTo(VAR_EGO,20,60);
[0169] waitForActor(10);
[016B] unless (Var[120]) goto 01E5;
[016F] animateActor(10,244);
[0172] waitForActor(10);
[0174] print(10,"We will perform the sacred dance taught\x01\x01to us by the Ancient Ones.\x03\x03Watch carefully. It is said to `unlock\x01\x01the door to the head.`");
[01E5] walkActorTo(10,26,63);
[01E9] waitForActor(10);
[01EB] animateActor(10,246);
[01EE] waitForActor(10);
[01F0] print(10,"This time, watch more carefully!");
[020F] waitForMessage();
[0210] panCameraTo(32);
[0212] breakHere();
[0213] unless (VAR_CAMERA_POS_X == 32) goto 0212;
[0219] doSentence(253,582,0,1);
[0220] Var[117] = 2;
[0224] walkActorTo(10,26,55);
[0228] waitForActor(10);
[022A] walkActorTo(10,32,50);
[022E] waitForActor(10);
[0230] unless (!Var[117]) goto 0237;
[0237] walkActorTo(10,38,55);
[023B] waitForActor(10);
[023D] walkActorTo(10,32,59);
[0241] waitForActor(10);
[0243] Var[117]--;
[0245] unless (Var[117] < Var[234]) goto 0224;
[024A] doSentence(254,582,0,1);
[0251] walkActorToObject(10,582);
[0255] walkActorTo(11,38,48);
[0259] walkActorTo(12,41,45);
[025D] waitForActor(12);
[025F] Var[117] = 10;
[0263] animateActor(Var[117],246);
[0266] waitForActor(Var[117]);
[0268] Var[117]++;
[026A] unless (Var[117] > 12) goto 0263;
[0270] stopSound(85);
[0272] delay(120);
[0276] startSound(89);
[0278] doSentence(250,583,0,1);
[027F] delay(60);
[0283] walkActorTo(10,35,51);
[0287] waitForActor(10);
[0289] animateActor(10,246);
[028C] delay(120);
[0290] Var[117] = Var[234];
[0293] Var[14] = Var[117];
[0296] Var[14] += 131;
[029A] Var[118] = Var[14];
[029D] Var[118] -= 521;
[02A1] animateActor(Var[118],32);
[02A4] Var[118] += 80;
[02A8] startSound(Var[118]);
[02AA] delay(120);
[02AE] Var[117]++;
[02B0] unless (Var[117] > 5) goto 0293;
[02B6] delay(120);
[02BA] startSound(85);
[02BC] actorFollowCamera(10);
[02BE] walkActorTo(11,7,43);
[02C2] walkActorTo(12,7,43);
[02C6] print(10,"Don't forget what you have seen!");
[02E4] unless (Var[120]) goto 0302;
[02E8] waitForMessage();
[02E9] print(10,"Next time it will cost you!");
[0302] walkActorToObject(10,578);
[0306] waitForActor(10);
[0308] waitForMessage();
[0309] faceActor(10,VAR_EGO);
[030C] waitForActor(10);
[030E] unless (VAR_EGO == 1) goto 033A;
[0314] print(10,"And come back with the Yellow Crystal!");
[033A] print(10,"Tell your friend to bring me the\x01\x01Yellow Crystal!");
[0366] delay(60);
[036A] faceActor(VAR_EGO,10);
[036D] stopObjectCode();
```
