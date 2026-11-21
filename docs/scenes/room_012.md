# Room 012 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] ActorOps(VAR_EGO,[Sound(Var[234])]);
[0008] unless (Var[147] == Var[234]) goto 0014;
[000D] doSentence(250,269,0,1);
[0014] unless (!getState08(52)) goto 001F;
[0019] setBoxFlags(4,64);
[001F] setBoxFlags(4,0);
[0022] setObjectName(267,"loose dirt");
[0030] unless (getState08(267)) goto 0046;
[0035] setObjectName(267,"cave entrance");
[0046] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/EXv2.txt); entry `0000`.

```text
[0000] ActorOps(VAR_EGO,[Sound(6)]);
[0004] stopObjectCode();
```

## OCv2_0052 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0052.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0052.txt); entry `0022`.

```text
[0022] doSentence(253,266,0,1);
[0029] stopObjectCode();
```

## OCv2_0052 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0052.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0052.txt); entry `002A`.

```text
[002A] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002F] stopObjectCode();
```

## OCv2_0052 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0052.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0052.txt); entry `0022`.

```text
[0022] doSentence(253,266,0,1);
[0029] stopObjectCode();
```

## OCv2_0266 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0266.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0266.txt); entry `001C`.

```text
[001C] setBitVar(1572,0,Var[235]);
[0021] loadRoomWithEgo(191,144,255,255);
[0027] stopObjectCode();
```

## OCv2_0266 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0266.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0266.txt); entry `0028`.

```text
[0028] setBoxFlags(4,0);
[002B] startSound(97);
[002D] pickupObject(52);
[0030] stopObjectCode();
```

## OCv2_0267 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0267.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0267.txt); entry `0031`.

```text
[0031] printEgo("I don't want to dirty my hands.");
[004C] stopObjectCode();
```

## OCv2_0267 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0267.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0267.txt); entry `004D`.

```text
[004D] unless (classOfIs(VAR_ACTIVE_OBJECT2,2)) goto 00A9;
[0052] unless (Var[147] != Var[234]) goto 0085;
[0057] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0082;
[005B] unless (VAR_ACTIVE_OBJECT2 == 26) goto 0080;
[0061] unless (getState04(26)) goto 0080;
[0066] printEgo("It's too bent to dig with.");
[0080] startScript(33);
[0085] printEgo("Not with a vicious squirrel in my way.");
[00A9] printEgo("I can't dig with that.");
[00BD] stopObjectCode();
```

## OCv2_0267 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0267.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0267.txt); entry `0026`.

```text
[0026] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0030;
[002A] loadRoomWithEgo(272,13,5,48);
[0030] stopObjectCode();
```

## OCv2_0267 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0267.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0267.txt); entry `0031`.

```text
[0031] printEgo("I don't want to dirty my hands.");
[004C] stopObjectCode();
```

## OCv2_0268 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0268.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0268.txt); entry `003F`.

```text
[003F] unless (VAR_ACTIVE_OBJECT2 == 51) goto 0048;
[0048] unless (classOfIs(VAR_ACTIVE_OBJECT2,2)) goto 006D;
[004D] unless (VAR_EGO == 1) goto 0058;
[0053] startScript(144);
[0058] printEgo("That might kill it!");
[006D] printEgo("That won't do any good.");
[0082] stopObjectCode();
[0089] Var[147] = Var[235];
[008C] printEgo("It took them and left!");
[00A0] setOwnerOf(51,0);
[00A4] doSentence(254,269,0,1);
[00AB] clearState08(268);
[00AE] setState02(268);
[00B1] clearState08(269);
[00B4] clearState08(270);
[00D2] stopObjectCode();
```

## OCv2_0268 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0268.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0268.txt); entry `002A`.

```text
[002A] printEgo("No way, it'll bite me!");
[003E] stopObjectCode();
```

## OCv2_0268 / verb 19
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0268.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0268.txt); entry `0083`.

```text
[0083] unless (VAR_ACTIVE_OBJECT2 == 51) goto 00BA;
[0089] Var[147] = Var[235];
[008C] printEgo("It took them and left!");
[00A0] setOwnerOf(51,0);
[00A4] doSentence(254,269,0,1);
[00AB] clearState08(268);
[00AE] setState02(268);
[00B1] clearState08(269);
[00B4] clearState08(270);
[00BA] printEgo("It doesn't seem to want it.");
[00D2] stopObjectCode();
```

## OCv2_0269 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0269.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0269.txt); entry `0013`.

```text
[0013] drawObject(268,255,255);
[0018] breakHere();
[0019] Var[45] = getClosestObjActor(268);
[001D] VAR_RESULT = getActorX(Var[45]);
[0020] unless (VAR_RESULT > 23) goto 0018;
[0026] Var[46] = getRandomNr(2);
[0029] Var[46] += 268;
[002D] unless (Var[46] == 269) goto 004B;
[0033] startSound(93);
[0035] VAR_RESULT = getBitVar(1554,0);
[003A] unless (!VAR_RESULT) goto 004B;
[003E] unless (VAR_EGO == 1) goto 004B;
[0044] doSentence(253,270,0,1);
[004B] drawObject(Var[46],255,255);
[004F] breakHere();
[0050] Var[45] = getClosestObjActor(268);
[0054] VAR_RESULT = getActorX(Var[45]);
[0057] unless (VAR_RESULT < 23) goto 0026;
```

## OCv2_0270 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0270.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0270.txt); entry `0013`.

```text
[0013] setBitVar(1554,0,Var[235]);
[0018] setBitVar(1559,Var[235],Var[235]);
[001D] unless (VAR_ACTIVE_OBJECT2 == 268) goto 0026;
[0026] cutscene();
[0027] beginOverride();
[002B] animateActor(1,255);
[002E] Var[48] = getActorY(1);
[0031] delay(60);
[0035] printEgo("There's that two-headed squirrel!");
[0055] waitForMessage();
[0056] animateActor(1,246);
[0059] breakHere();
[005A] printEgo("Lemme think^what would be a good\x01\x01headline?");
[0081] waitForMessage();
[0082] delay(60);
[0086] printEgo("How about^ TWO-HEADED SQUIRREL\x01\x01ATTACKS TABLOID REPORTER.");
[00BB] Var[66] = getActorX(1);
[00BE] Var[66] -= 18;
[00C2] walkActorTo(1,Var[66],Var[48]);
[00C6] waitForActor(1);
[00C8] animateActor(1,246);
[00CB] waitForMessage();
[00CC] delay(60);
[00D0] printEgo("Maybe^ TWO-HEADED SQUIRREL\x01\x01DEVOURS SEATTLE AND TACOMA.");
[0103] Var[66] = getActorX(1);
[0106] Var[66] += 19;
[010A] walkActorTo(1,Var[66],Var[48]);
[010E] waitForActor(1);
[0110] animateActor(1,246);
[0113] waitForMessage();
[0114] delay(60);
[0118] printEgo("VICIOUS TABLOID REPORTER TURNS\x01\x01TWO-HEADED SQUIRREL INTO MONSTER.");
[0154] walkActorTo(1,19,Var[48]);
[0158] waitForActor(1);
[015A] animateActor(1,246);
[015D] waitForMessage();
[015E] delay(60);
[0162] walkActorTo(1,19,63);
[0166] waitForActor(1);
[0168] printEgo("I hate my job!");
[0175] unless (VAR_OVERRIDE) goto 017C;
[0179] print(255,"");
[017C] endCutscene();
[017D] stopObjectCode();
```

## OCv2_0271 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0271.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0271.txt); entry `0020`.

```text
[0020] printEgo("It's way too high!");
[0031] stopObjectCode();
```

## OCv2_0271 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0271.txt](../../zak/converted/scripts_flat/LFv2_0012/ROv2/OCv2_0271.txt); entry `0032`.

```text
[0032] unless (!getState04(271)) goto 004E;
[0037] setState04(271);
[003A] animateActor(1,246);
[003D] printEgo("Come on^ get real.");
[004E] stopObjectCode();
```

## SCv2_0033 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0012/SCv2_0033.txt](../../zak/converted/scripts_flat/LFv2_0012/SCv2_0033.txt); entry `0000`.

```text
[0000] cutscene();
[0001] loadRoom(0);
[0003] setState08(267);
[0006] beginOverride();
[000A] dummy(EE);
[000B] print(255,"After digging for a long time^");
[0027] waitForMessage();
[0028] print(255,"");
[002B] endCutscene();
[002C] unless (VAR_ACTIVE_OBJECT2 == 26) goto 004A;
[0032] setObjectName(26,"bent butter knife");
[0047] setState04(26);
[004A] delay(60);
[004E] animateActor(1,246);
[0051] printEgo("Sheesh^ that was a lot of work!");
[006C] stopObjectCode();
```

## SCv2_0144 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0012/SCv2_0144.txt](../../zak/converted/scripts_flat/LFv2_0012/SCv2_0144.txt); entry `0000`.

```text
[0000] setBitVar(1559,Var[235],Var[235]);
[0005] Var[147] = 2;
[0009] stopSound(93);
[000B] breakHere();
[000C] startSound(24);
[000E] setState02(285);
[0011] delay(30);
[0015] printEgo("Uh oh, I killed it.");
[0026] Var[225] += 12;
[002A] VAR_RESULT = getObjectOwner(51);
[002E] unless (VAR_RESULT == VAR_EGO) goto 006D;
[0033] breakHere();
[0034] unless (VAR_ROOM == 144) goto 0033;
[003A] delay(180);
[003E] waitForMessage();
[003F] setOwnerOf(51,0);
[0043] animateActor(VAR_EGO,246);
[0046] printEgo("I'm hungry! I think I'll eat these\x01\x01peanuts.");
[006D] stopObjectCode();
```
