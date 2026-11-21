# Room 042 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] Var[50] = Var[234];
[0007] loadSound(39)
[000A] lockSound(39)
[000D] doSentence(250,624,0,1);
[0014] doSentence(253,625,0,1);
[001B] unless (VAR_EGO != 6) goto 003E;
[0021] unless (!getState08(623)) goto 0037;
[0026] doSentence(250,629,0,1);
[002D] doSentence(253,626,0,1);
[0037] doSentence(250,628,0,1);
[003E] ActorOps(6,[Name("bird")]);
[0047] doSentence(253,627,0,1);
[004E] startSound(17);
[0050] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/EXv2.txt); entry `0000`.

```text
[0000] stopSound(17);
[0002] unlockSound(39)
[0005] setVarRange(Var[42],2,[1,4]);
[000A] setState02(630);
[000D] Var[66] = 0;
[0011] setBoxFlags(Var[66],0);
[0014] Var[66]++;
[0016] unless (Var[66] > 5) goto 0011;
[001C] Var[203] = Var[234];
[001F] stopObjectCode();
```

## OCv2_0619 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0619.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0619.txt); entry `0019`.

```text
[0019] unless (VAR_EGO == 6) goto 004A;
[001F] printEgo("The jungle's too dense for me to fly\x01\x01through.");
[004A] Var[58] = 573;
[004E] Var[59] = 619;
[0052] Var[255] = VAR_ROOM;
[0055] Var[14] = VAR_EGO;
[0058] Var[14] += 219;
[005C] Var[Var[14]] = 218;
[0060] Var[14] = VAR_EGO;
[0063] Var[14] += 222;
[0067] Var[Var[14]] = 149;
[006B] Var[14] = VAR_EGO;
[006E] Var[14] += 216;
[0072] Var[Var[14]] = 3;
[0076] loadRoomWithEgo(Var[58],172,255,255);
[007B] stopObjectCode();
```

## OCv2_0620 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0620.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0620.txt); entry `001F`.

```text
[001F] unless (VAR_EGO != 6) goto 005A;
[0025] printEgo("It's way across the valley!");
[003E] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 0055;
[0042] waitForMessage();
[0043] printEgo("I don't have wings!");
[0055] setState04(VAR_ACTIVE_OBJECT1);
[005A] loadRoomWithEgo(638,138,61,51);
[0060] stopObjectCode();
```

## OCv2_0621 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0621.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0621.txt); entry `001E`.

```text
[001E] unless (VAR_ACTIVE_OBJECT2 == 23) goto 0031;
[0024] clearState08(623);
[0027] clearState02(623);
[002A] setOwnerOf(23,0);
[0031] startScript(3);
[0033] stopObjectCode();
```

## OCv2_0622 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0622.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0622.txt); entry `0019`.

```text
[0019] printEgo("Ancient Incan Bird Feeder:\x01\x01Fill only with dry bread crumbs.");
[004E] stopObjectCode();
```

## OCv2_0622 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0622.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0622.txt); entry `004F`.

```text
[004F] VAR_RESULT = getBitVar(1549,0);
[0054] unless (!VAR_RESULT) goto 0098;
[0058] printEgo("REPORTER BECOMES BIRD-BRAINED\x01\x01AFTER TRADING MINDS WITH SPARROW.");
[0093] setBitVar(1549,0,Var[235]);
[0098] stopObjectCode();
```

## OCv2_0623 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0623.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0623.txt); entry `001F`.

```text
[001F] unless (VAR_EGO == 6) goto 0038;
[0025] printEgo("Yuck! Bird food!");
[0038] printEgo("I'll leave it for the birds.");
[0051] stopObjectCode();
```

## OCv2_0624 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0624.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0624.txt); entry `0013`.

```text
[0013] Var[45] = 624;
[0017] Var[46] = 627;
[001B] drawObject(Var[45],255,255);
[001F] breakHere();
[0020] drawObject(Var[46],255,255);
[0024] breakHere();
[0025] Var[45]++;
[0027] Var[46]++;
[0029] unless (Var[45] > 626) goto 001B;
```

## OCv2_0625 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0625.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0625.txt); entry `0013`.

```text
[0013] breakHere();
[0014] VAR_RESULT = getActorRoom(VAR_EGO);
[0017] unless (VAR_RESULT == VAR_ROOM) goto 0013;
[001C] unless (Var[50] != VAR_EGO) goto 0028;
[0021] Var[50] = VAR_EGO;
[0024] Var[47] = 3;
[0028] VAR_RESULT = getActorX(VAR_EGO);
[002B] unless (VAR_RESULT > 42) goto 003E;
[0031] unless (Var[47] != Var[234]) goto 003B;
[0036] panCameraTo(60);
[0038] Var[47] = Var[234];
[003E] unless (Var[47] != Var[235]) goto 0051;
[0043] VAR_RESULT = getActorRoom(VAR_EGO);
[0046] unless (VAR_RESULT == 42) goto 004E;
[004C] actorFollowCamera(VAR_EGO);
[004E] Var[47] = Var[235];
```

## OCv2_0626 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0626.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0626.txt); entry `0013`.

```text
[0013] Var[203] = Var[235];
[0016] breakHere();
[0017] unless (VAR_ACTIVE_VERB == 3) goto 003A;
[001D] waitForActor(VAR_EGO);
[001F] unless (VAR_ACTIVE_OBJECT2 == 6) goto 003A;
[0025] waitForActor(VAR_EGO);
[0027] printEgo("It won't take it.");
[0037] VAR_ACTIVE_OBJECT2 = Var[234];
```

## OCv2_0627 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0627.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0627.txt); entry `0013`.

```text
[0013] unless (VAR_EGO == 6) goto 0039;
[0019] setVarRange(Var[42],2,[6,6]);
[001E] Var[66] = 0;
[0022] setBoxFlags(Var[66],160);
[0025] Var[66]++;
[0027] unless (Var[66] > 5) goto 0022;
[002D] setBoxFlags(6,0);
[0030] setBoxFlags(7,0);
[0033] setBoxFlags(8,0);
[0039] setVarRange(Var[42],2,[1,4]);
[003E] Var[66] = 0;
[0042] setBoxFlags(Var[66],0);
[0045] Var[66]++;
[0047] unless (Var[66] > 5) goto 0042;
[004D] setBoxFlags(6,160);
[0050] setBoxFlags(7,160);
[0053] setBoxFlags(8,160);
[0056] stopObjectCode();
```

## OCv2_0628 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0628.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0628.txt); entry `0013`.

```text
[0013] Var[49] = 11;
[0017] ActorOps(6,[Costume(15)]);
[001B] putActorInRoom(6,42);
[001E] putActor(6,12,Var[49]);
[0022] ActorOps(6,[Sound(Var[234])]);
[0026] loadCostume(14)
[0029] Var[48] = getRandomNr(16);
[002C] Var[48] += 9;
[0030] Var[49]++;
[0032] VAR_RESULT = getRandomNr(1);
[0035] unless (VAR_RESULT) goto 0043;
[0039] unless (Var[49] > 8) goto 0043;
[003F] Var[49] -= 2;
[0043] unless (Var[49] > 24) goto 004D;
[0049] Var[49] -= 3;
[004D] walkActorTo(6,Var[48],Var[49]);
[0051] waitForActor(6);
[0053] unless (getState08(623)) goto 005B;
[005B] walkActorTo(6,17,0);
[005F] waitForActor(6);
[0061] setActorElevation(6,10);
[0064] delay(300);
[0068] doSentence(250,629,0,1);
[006F] stopObjectCode();
```

## OCv2_0629 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0629.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0629.txt); entry `0013`.

```text
[0013] ActorOps(6,[Costume(14)]);
[0017] setActorElevation(6,Var[234]);
[001A] ActorOps(6,[Sound(39)]);
[001E] VAR_RESULT = getActorX(6);
[0021] unless (VAR_RESULT == 27) goto 0033;
[0027] VAR_RESULT = getActorY(6);
[002A] unless (VAR_RESULT == 31) goto 0033;
[0033] walkActorTo(6,29,29);
[0037] waitForActor(6);
[0039] animateActor(6,244);
[003C] waitForActor(6);
[003E] delay(60);
[0042] walkActorTo(6,27,31);
[0046] waitForActor(6);
[0048] animateActor(6,244);
[004B] clearState02(630);
[004E] animateActor(6,24);
[0051] delay(180);
[0055] animateActor(6,28);
[0058] delay(60);
```

## OCv2_0630 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0630.txt](../../zak/converted/scripts_flat/LFv2_0042/ROv2/OCv2_0630.txt); entry `0017`.

```text
[0017] unless (VAR_ACTIVE_OBJECT2 == 55) goto 0025;
[001D] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0025] startScript(3);
[0027] stopObjectCode();
```
