# Room 021 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] setBoxFlags(1,0);
[0007] setState02(391);
[000A] setState02(393);
[000D] setState02(395);
[0010] unless (VAR_ROOM == 183) goto 007A;
[0016] Var[154]++;
[0018] setObjectName(396,"tram station");
[0028] setObjectName(397,"tram station");
[0038] Var[45] = 456;
[003C] Var[46] = 184;
[0040] Var[47] = 187;
[0044] unless (getState04(391)) goto 0055;
[0049] setBoxFlags(1,128);
[004C] clearState08(391);
[004F] clearState02(391);
[0055] setState08(391);
[0058] setState08(393);
[005B] clearState02(393);
[005E] unless (!getState04(392)) goto 0074;
[0063] setState08(392);
[0066] drawObject(395,255,255);
[006B] clearState02(395);
[006E] setState02(393);
[0074] clearState08(392);
[007A] RoomColor(6,4);
[007E] RoomColor(14,6);
[0082] RoomColor(7,12);
[0086] RoomColor(8,5);
[008A] setObjectName(396,"the desert");
[0098] setObjectName(397,"the desert");
[00A6] Var[45] = 386;
[00AA] Var[46] = 20;
[00AE] Var[47] = 206;
[00B2] setState08(391);
[00B5] setState08(392);
[00B8] clearState08(395);
[00BB] clearState08(393);
[00BE] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/EXv2.txt); entry `0000`.

```text
[0000] Var[154] = Var[234];
[0003] stopObjectCode();
```

## OCv2_0391 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0391.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0391.txt); entry `0020`.

```text
[0020] printEgo("It runs right through my fingers.");
[003E] stopObjectCode();
```

## OCv2_0391 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0391.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0391.txt); entry `003F`.

```text
[003F] unless (VAR_ACTIVE_OBJECT2 == 68) goto 004A;
[0045] startScript(99);
[004A] startScript(3);
[004C] stopObjectCode();
```

## OCv2_0391 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0391.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0391.txt); entry `0020`.

```text
[0020] printEgo("It runs right through my fingers.");
[003E] stopObjectCode();
```

## OCv2_0392 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0392.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0392.txt); entry `002A`.

```text
[002A] unless (!getState08(391)) goto 004A;
[002F] printEgo("The sand pile is in the way.");
[004A] printEgo("It won't budge.");
[0059] stopObjectCode();
```

## OCv2_0392 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0392.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0392.txt); entry `002A`.

```text
[002A] unless (!getState08(391)) goto 004A;
[002F] printEgo("The sand pile is in the way.");
[004A] printEgo("It won't budge.");
[0059] stopObjectCode();
```

## OCv2_0392 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0392.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0392.txt); entry `002A`.

```text
[002A] unless (!getState08(391)) goto 004A;
[002F] printEgo("The sand pile is in the way.");
[004A] printEgo("It won't budge.");
[0059] stopObjectCode();
```

## OCv2_0392 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0392.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0392.txt); entry `002A`.

```text
[002A] unless (!getState08(391)) goto 004A;
[002F] printEgo("The sand pile is in the way.");
[004A] printEgo("It won't budge.");
[0059] stopObjectCode();
```

## OCv2_0392 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0392.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0392.txt); entry `001F`.

```text
[001F] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0029;
[0023] loadRoomWithEgo(403,Var[47],255,255);
[0029] stopObjectCode();
```

## OCv2_0393 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0393.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0393.txt); entry `001B`.

```text
[001B] unless (VAR_ACTIVE_OBJECT2 == 31) goto 0055;
[0021] cursorCommand(15, 2);
[0024] loadSound(111)
[0027] setOwnerOf(31,0);
[002B] setState02(393);
[002E] drawObject(394,255,255);
[0033] startSound(111);
[0035] delay(50);
[0039] drawObject(395,255,255);
[003E] startSound(111);
[0040] delay(60);
[0044] startSound(78);
[0046] clearState02(395);
[0049] setState08(392);
[004C] clearState04(392);
[004F] cursorCommand(247, 1);
[0055] startScript(3);
[0057] stopObjectCode();
```

## OCv2_0394 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0394.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0394.txt); entry `0013`.

```text
[0013] VAR_RESULT = getActorRoom(3);
[0016] unless (VAR_RESULT == VAR_ROOM) goto 0036;
[001B] Var[48] = Var[235];
[001E] VAR_RESULT = getActorX(3);
[0021] unless (VAR_RESULT > 27) goto 002B;
[0027] Var[48] = 36;
[002B] walkActorTo(3,Var[48],54);
[002F] doSentence(253,395,0,1);
[0036] VAR_RESULT = getActorRoom(1);
[0039] unless (VAR_RESULT == VAR_ROOM) goto 0058;
[003E] Var[49] = 4;
[0042] VAR_RESULT = getActorX(1);
[0045] unless (VAR_RESULT > 27) goto 004F;
[004B] Var[49] = 32;
[004F] walkActorTo(1,Var[49],54);
[0053] waitForActor(1);
[0055] animateActor(1,246);
[0058] stopObjectCode();
```

## OCv2_0395 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0395.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0395.txt); entry `0029`.

```text
[0029] printEgo("It's stuck in the hole.");
[003E] stopObjectCode();
```

## OCv2_0395 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0395.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0395.txt); entry `0029`.

```text
[0029] printEgo("It's stuck in the hole.");
[003E] stopObjectCode();
```

## OCv2_0395 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0395.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0395.txt); entry `0029`.

```text
[0029] printEgo("It's stuck in the hole.");
[003E] stopObjectCode();
```

## OCv2_0395 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0395.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0395.txt); entry `0029`.

```text
[0029] printEgo("It's stuck in the hole.");
[003E] stopObjectCode();
```

## OCv2_0395 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0395.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0395.txt); entry `003F`.

```text
[003F] waitForActor(3);
[0041] animateActor(3,246);
[0044] stopObjectCode();
```

## OCv2_0396 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0396.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0396.txt); entry `001F`.

```text
[001F] loadRoomWithEgo(Var[45],Var[46],255,255);
[0024] stopObjectCode();
```

## OCv2_0397 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0397.txt](../../zak/converted/scripts_flat/LFv2_0021/ROv2/OCv2_0397.txt); entry `001F`.

```text
[001F] doSentence(13,396,0,1);
[0026] stopObjectCode();
```

## SCv2_0099 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0021/SCv2_0099.txt](../../zak/converted/scripts_flat/LFv2_0021/SCv2_0099.txt); entry `0000`.

```text
[0000] cutscene();
[0001] setOwnerOf(68,0);
[0005] beginOverride();
[0009] loadRoom(0);
[000B] clearState04(391);
[000E] dummy(EE);
[000F] print(255,"After sweeping for some time^");
[002B] waitForMessage();
[002C] ActorOps(10,[Costume(33)]);
[0030] ActorOps(10,[TalkColor(15)]);
[0034] ActorOps(10,[Sound(6)]);
[0038] putActorInRoom(10,183);
[003B] putActor(10,25,56);
[003F] animateActor(10,249);
[0042] loadRoom(183);
[0044] delay(18);
[0048] doSentence(253,394,0,1);
[004F] print(10,"AHhhhCHoooo");
[005D] walkActorTo(10,37,62);
[0061] delay(30);
[0065] animateActor(VAR_EGO,245);
[0068] waitForMessage();
[0069] printEgo("Gesundheit!");
[0076] animateActor(10,244);
[0079] delay(60);
[007D] printEgo("You're ALIVE!");
[008B] waitForMessage();
[008C] print(10,"Ahh \x02\x02");
[0093] delay(30);
[0097] walkActorTo(10,25,60);
[009B] delay(12);
[009F] print(10,"Ahh \x02\x02");
[00A6] delay(18);
[00AA] animateActor(VAR_EGO,246);
[00AD] print(10,"CHoooooo");
[00B8] waitForMessage();
[00B9] print(10,"I try to take a nice, peaceful nap^\x01\x01and what happens?");
[00E8] walkActorTo(10,34,60);
[00EC] delay(60);
[00F0] animateActor(VAR_EGO,245);
[00F3] waitForActor(10);
[00F5] walkActorTo(10,4,62);
[00F9] delay(60);
[00FD] animateActor(VAR_EGO,246);
[0100] delay(60);
[0104] animateActor(VAR_EGO,244);
[0107] waitForActor(10);
[0109] animateActor(10,245);
[010C] waitForMessage();
[010D] delay(60);
[0111] print(10,"An inconsiderate alien - and an ugly one\x01\x01at that - sweeps up sand with my HEAD!");
[0154] delay(180);
[0158] walkActorTo(10,19,57);
[015C] delay(30);
[0160] walkActorTo(VAR_EGO,21,49);
[0164] waitForActor(VAR_EGO);
[0166] animateActor(VAR_EGO,246);
[0169] waitForActor(10);
[016B] animateActor(10,247);
[016E] delay(30);
[0172] printEgo("I'M SORRY!");
[017D] walkActorTo(10,20,51);
[0181] waitForMessage();
[0182] walkActorTo(10,20,63);
[0186] waitForActor(10);
[0188] print(10,"The NERVE of some beings!");
[01A0] waitForMessage();
[01A1] print(10,"I'll go find another planet where I can\x01\x01get some rest.");
[01D1] animateActor(10,247);
[01D4] delay(180);
[01D8] walkActorTo(10,0,63);
[01DC] waitForActor(10);
[01DE] print(255,"");
[01E1] putActorInRoom(10,0);
[01E4] endCutscene();
[01E5] stopObjectCode();
```
