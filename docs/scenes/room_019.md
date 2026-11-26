# Room 019 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0019/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0019/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] Var[199] = Var[234];
[0007] ActorOps(10,[TalkColor(7)]);
[000B] ActorOps(10,[Costume(22)]);
[000F] ActorOps(10,[Name("Guru")]);
[0018] ActorOps(10,[Sound(Var[234])]);
[001C] Var[50] = Var[234];
[001F] doSentence(250,381,0,1);
[0026] doSentence(253,382,0,1);
[002D] VAR_RESULT = isScriptRunning(42);
[0030] unless (!VAR_RESULT) goto 0040;
[0034] startScript(42);
[0036] putActorInRoom(10,19);
[0039] putActor(10,60,56);
[003D] animateActor(10,251);
[0040] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0019/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0019/ROv2/EXv2.txt); entry `0000`.

```text
[0000] Var[203] = Var[234];
[0003] stopObjectCode();
```

## OCv2_0375 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0375.txt](../../zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0375.txt); entry `0017`.

```text
[0017] ActorOps(10,[Name()]);
[001C] Var[199] = Var[235];
[001F] cursorCommand(1, 0);
[0022] setState08(351);
[0025] clearState02(351);
[0028] loadRoomWithEgo(351,17,255,255);
[002E] stopObjectCode();
```

## OCv2_0376 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0376.txt](../../zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0376.txt); entry `0021`.

```text
[0021] doSentence(12,378,0,0);
[0028] stopObjectCode();
```

## OCv2_0377 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0377.txt](../../zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0377.txt); entry `0018`.

```text
[0018] printEgo("Buy `How To Raise Your Consciousness\x01\x01And Lower Your Golf Scores`,\x03\x03available at airports around the world.");
[0075] stopObjectCode();
```

## OCv2_0378 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0378.txt](../../zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0378.txt); entry `001B`.

```text
[001B] printEgo("It's a picture of \x02\x02");
[002C] VAR_RESULT = getBitVar(1458,VAR_EGO);
[0031] unless (VAR_RESULT) goto 0054;
[0035] printEgo("my friend, the Witch\x01\x01Doctor, \x02\x02");
[0054] printEgo("an African Shaman\x01\x01\x02\x02");
[0067] printEgo("and the Guru playing golf.");
[007F] stopObjectCode();
```

## OCv2_0380 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0380.txt](../../zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0380.txt); entry `001E`.

```text
[001E] printEgo("Awarded to Swami Holanwanda:\x03\x03For a record-shattering score of 19 at\x01\x01Pebble Beach.");
[0067] stopObjectCode();
```

## OCv2_0381 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0381.txt](../../zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0381.txt); entry `0013`.

```text
[0013] breakHere();
[0014] Var[49] = getRandomNr(5);
[0017] Var[49] += 381;
[001B] drawObject(Var[49],55,5);
[001F] Var[49] = getRandomNr(5);
[0022] Var[49] += 381;
[0026] drawObject(Var[49],65,5);
[002A] Var[49] = getRandomNr(5);
[002D] Var[49] += 381;
[0031] drawObject(Var[49],51,5);
[0035] Var[49] = getRandomNr(5);
[0038] Var[49] += 381;
[003C] drawObject(Var[49],69,5);
[0040] Var[49] = getRandomNr(5);
[0043] Var[49] += 381;
[0047] drawObject(Var[49],53,4);
[004B] Var[49] = getRandomNr(5);
[004E] Var[49] += 381;
[0052] drawObject(Var[49],67,4);
[0056] Var[49] = getRandomNr(5);
[0059] Var[49] += 381;
[005D] drawObject(Var[49],56,2);
```

## OCv2_0382 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0382.txt](../../zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0382.txt); entry `0013`.

```text
[0013] Var[203] = Var[235];
[0016] breakHere();
[0017] unless (VAR_ACTIVE_VERB == 3) goto 00BB;
[001D] unless (VAR_ACTIVE_OBJECT2 == 10) goto 00BB;
[0023] waitForActor(VAR_EGO);
[0025] unless (VAR_ACTIVE_OBJECT1 == 44) goto 0069;
[002B] print(10,"I already have a great sand wedge,\x01\x01but I have a friend who needs one.");
[0069] unless (classOfIs(VAR_ACTIVE_OBJECT1,32)) goto 008C;
[006E] print(10,"You'd better hold on to that!");
[008C] print(10,"I have no need of your earthly\x01\x01possessions.");
[00B4] VAR_ACTIVE_OBJECT2 = Var[234];
[00B7] waitForMessage();
[00B8] animateActor(10,247);
```

## OCv2_0383 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0383.txt](../../zak/converted/scripts_flat/LFv2_0019/ROv2/OCv2_0383.txt); entry `0013`.

```text
[0013] Var[50] = Var[225];
[0016] delay(600);
[001A] Var[50]--;
[001C] unless (!Var[50]) goto 0016;
[0020] Var[225] = Var[234];
[0023] Var[50] = Var[235];
[0026] setBitVar(1559,5,Var[235]);
[002B] startScript(42);
[002D] stopObjectCode();
```

## SCv2_0042 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0019/SCv2_0042.txt](../../zak/converted/scripts_flat/LFv2_0019/SCv2_0042.txt); entry `0000`.

```text
[0000] breakHere();
[0001] unless (VAR_ROOM != 19) goto 0009;
[0007] stopScript(0);
[0009] VAR_RESULT = getDist(VAR_EGO,10);
[000E] unless (VAR_RESULT < 15) goto 0000;
[0014] cutscene();
[0015] panCameraTo(60);
[0017] animateActor(VAR_EGO,255);
[001A] breakHere();
[001B] unless (VAR_CAMERA_POS_X == 60) goto 001A;
[0021] walkActorToActor(10,VAR_EGO,4);
[0025] waitForActor(10);
[0027] faceActor(10,VAR_EGO);
[002A] faceActor(VAR_EGO,10);
[002D] stopObjectCode();
```
