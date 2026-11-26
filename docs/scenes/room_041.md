# Room 041 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] VerbOps(New-13(13,19,2,0,"Swim to@@"));
[0014] cursorCommand(0, 0);
[0017] doSentence(250,615,0,1);
[001E] ActorOps(5,[Costume(13)]);
[0022] unless (getState02(614)) goto 0033;
[0027] unless (!getState08(78)) goto 0033;
[002C] doSentence(250,606,0,1);
[0033] doSentence(250,614,0,1);
[003A] stopObjectCode();
```

## OCv2_0078 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0078.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0078.txt); entry `0033`.

```text
[0033] unless (VAR_ACTIVE_OBJECT2 == 1) goto 003D;
[0039] Var[171] = 4;
[003D] startScript(20);
[003F] stopObjectCode();
```

## OCv2_0078 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0078.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0078.txt); entry `002D`.

```text
[002D] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0032] stopObjectCode();
```

## OCv2_0078 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0078.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0078.txt); entry `0025`.

```text
[0025] doSentence(253,607,0,1);
[002C] stopObjectCode();
```

## OCv2_0605 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0605.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0605.txt); entry `001A`.

```text
[001A] loadRoomWithEgo(505,31,28,86);
[0020] stopObjectCode();
```

## OCv2_0606 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0606.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0606.txt); entry `0013`.

```text
[0013] drawObject(606,255,255);
[0018] breakHere();
[0019] drawObject(607,255,255);
[001E] breakHere();
[001F] drawObject(608,255,255);
[0024] breakHere();
[0025] drawObject(607,255,255);
[002A] breakHere();
```

## OCv2_0607 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0607.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0607.txt); entry `0013`.

```text
[0013] doSentence(254,606,0,1);
[001A] pickupObject(VAR_ACTIVE_OBJECT1);
[001C] unless (getState04(169)) goto 004D;
[0021] printEgo("This looks like the bottom part of the\x01\x01device!");
[004D] printEgo("Didn't I see this in my dream?");
[0067] stopObjectCode();
```

## OCv2_0609 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0609.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0609.txt); entry `001E`.

```text
[001E] setState02(VAR_ACTIVE_OBJECT1);
[0020] clearState08(611);
[0023] clearState08(612);
[0026] clearState08(613);
[0029] clearState08(VAR_ACTIVE_OBJECT1);
[002B] stopObjectCode();
```

## OCv2_0609 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0609.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0609.txt); entry `001E`.

```text
[001E] setState02(VAR_ACTIVE_OBJECT1);
[0020] clearState08(611);
[0023] clearState08(612);
[0026] clearState08(613);
[0029] clearState08(VAR_ACTIVE_OBJECT1);
[002B] stopObjectCode();
```

## OCv2_0609 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0609.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0609.txt); entry `001E`.

```text
[001E] setState02(VAR_ACTIVE_OBJECT1);
[0020] clearState08(611);
[0023] clearState08(612);
[0026] clearState08(613);
[0029] clearState08(VAR_ACTIVE_OBJECT1);
[002B] stopObjectCode();
```

## OCv2_0610 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0610.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0610.txt); entry `001E`.

```text
[001E] setState02(VAR_ACTIVE_OBJECT1);
[0020] clearState08(611);
[0023] clearState08(612);
[0026] clearState08(613);
[0029] clearState08(VAR_ACTIVE_OBJECT1);
[002B] stopObjectCode();
```

## OCv2_0610 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0610.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0610.txt); entry `001E`.

```text
[001E] setState02(VAR_ACTIVE_OBJECT1);
[0020] clearState08(611);
[0023] clearState08(612);
[0026] clearState08(613);
[0029] clearState08(VAR_ACTIVE_OBJECT1);
[002B] stopObjectCode();
```

## OCv2_0610 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0610.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0610.txt); entry `001E`.

```text
[001E] setState02(VAR_ACTIVE_OBJECT1);
[0020] clearState08(611);
[0023] clearState08(612);
[0026] clearState08(613);
[0029] clearState08(VAR_ACTIVE_OBJECT1);
[002B] stopObjectCode();
```

## OCv2_0614 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0614.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0614.txt); entry `0020`.

```text
[0020] setState02(VAR_ACTIVE_OBJECT1);
[0022] clearState08(615);
[0025] clearState08(616);
[0028] clearState08(617);
[002B] clearState08(VAR_ACTIVE_OBJECT1);
[002D] clearState02(78);
[0030] doSentence(250,606,0,1);
[0037] stopObjectCode();
```

## OCv2_0614 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0614.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0614.txt); entry `0020`.

```text
[0020] setState02(VAR_ACTIVE_OBJECT1);
[0022] clearState08(615);
[0025] clearState08(616);
[0028] clearState08(617);
[002B] clearState08(VAR_ACTIVE_OBJECT1);
[002D] clearState02(78);
[0030] doSentence(250,606,0,1);
[0037] stopObjectCode();
```

## OCv2_0614 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0614.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0614.txt); entry `0020`.

```text
[0020] setState02(VAR_ACTIVE_OBJECT1);
[0022] clearState08(615);
[0025] clearState08(616);
[0028] clearState08(617);
[002B] clearState08(VAR_ACTIVE_OBJECT1);
[002D] clearState02(78);
[0030] doSentence(250,606,0,1);
[0037] stopObjectCode();
```

## OCv2_0614 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0614.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0614.txt); entry `0038`.

```text
[0038] unless (!getState02(614)) goto 0042;
[003D] drawObject(617,255,255);
[0042] unless (!getState02(609)) goto 004C;
[0047] drawObject(612,18,9);
[004C] unless (!getState02(610)) goto 0056;
[0051] drawObject(611,61,12);
[0056] delay(30);
[005A] unless (!getState02(614)) goto 0064;
[005F] drawObject(616,255,255);
[0064] unless (!getState02(609)) goto 006E;
[0069] drawObject(613,18,9);
[006E] unless (!getState02(610)) goto 0078;
[0073] drawObject(612,61,12);
[0078] delay(30);
[007C] unless (!getState02(614)) goto 0086;
[0081] drawObject(615,255,255);
[0086] unless (!getState02(609)) goto 0090;
[008B] drawObject(612,18,9);
[0090] unless (!getState02(610)) goto 009A;
[0095] drawObject(613,61,12);
[009A] delay(30);
[009E] unless (!getState02(614)) goto 00A8;
[00A3] drawObject(616,255,255);
[00A8] unless (!getState02(609)) goto 00B2;
[00AD] drawObject(611,18,9);
[00B2] unless (!getState02(610)) goto 00BC;
[00B7] drawObject(612,61,12);
[00BC] delay(30);
```

## OCv2_0615 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0615.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0615.txt); entry `0013`.

```text
[0013] setActorElevation(5,0);
[0016] breakHere();
[0017] breakHere();
[0018] setActorElevation(5,1);
[001B] breakHere();
[001C] breakHere();
[001D] setActorElevation(5,2);
[0020] breakHere();
[0021] breakHere();
[0022] setActorElevation(5,1);
[0025] breakHere();
[0026] breakHere();
```

## OCv2_0618 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0618.txt](../../zak/converted/scripts_flat/LFv2_0041/ROv2/OCv2_0618.txt); entry `001B`.

```text
[001B] setState04(483);
[001E] stopObjectCode();
```
