# Room 006 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(Var[234],0,0);
[0004] unless (!getState04(174)) goto 000D;
[0009] lights(11,0,0);
[000D] stopObjectCode();
```

## OCv2_0032 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0032.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0032.txt); entry `0039`.

```text
[0039] unless (VAR_ACTIVE_OBJECT2 == 2) goto 0045;
[003F] setOwnerOf(VAR_ACTIVE_OBJECT1,2);
[0045] startScript(53);
[0047] stopObjectCode();
```

## OCv2_0032 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0032.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0032.txt); entry `0024`.

```text
[0024] unless (VAR_EGO == 2) goto 002F;
[002A] startScript(131);
[002F] startScript(53);
[0031] stopObjectCode();
```

## OCv2_0032 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0032.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0032.txt); entry `0032`.

```text
[0032] Var[67] = 2;
[0036] startScript(53);
[0038] stopObjectCode();
```

## OCv2_0032 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0032.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0032.txt); entry `0021`.

```text
[0021] pickupObject(VAR_ACTIVE_OBJECT1);
[0023] stopObjectCode();
```

## OCv2_0033 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0033.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0033.txt); entry `0025`.

```text
[0025] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002A] stopObjectCode();
```

## OCv2_0033 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0033.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0033.txt); entry `0022`.

```text
[0022] pickupObject(VAR_ACTIVE_OBJECT1);
[0024] stopObjectCode();
```

## OCv2_0172 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0172.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0172.txt); entry `001B`.

```text
[001B] startScript(10);
[001D] setState08(162);
[0020] stopObjectCode();
```

## OCv2_0172 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0172.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0172.txt); entry `0021`.

```text
[0021] startScript(11);
[0023] clearState08(162);
[0026] stopObjectCode();
```

## OCv2_0172 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0172.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0172.txt); entry `0027`.

```text
[0027] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0031;
[002B] loadRoomWithEgo(168,5,46,36);
[0031] stopObjectCode();
```

## OCv2_0173 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0173.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0173.txt); entry `0017`.

```text
[0017] printEgo("There aren't any drawers.");
[002F] stopObjectCode();
```

## OCv2_0174 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0174.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0174.txt); entry `001B`.

```text
[001B] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 0027;
[001F] lights(11,0,0);
[0023] clearState04(VAR_ACTIVE_OBJECT1);
[0025] startSound(27);
[0027] stopObjectCode();
```

## OCv2_0174 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0174.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0174.txt); entry `0028`.

```text
[0028] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 0034;
[002C] startSound(27);
[002E] lights(Var[234],0,0);
[0032] setState04(VAR_ACTIVE_OBJECT1);
[0034] stopObjectCode();
```

## OCv2_0174 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0174.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0174.txt); entry `0035`.

```text
[0035] unless (VAR_ACTIVE_OBJECT2 == 14) goto 0061;
[003B] unless (Var[138] == Var[234]) goto 0061;
[0040] printEgo("There's not enough room in there.");
[0061] startScript(3);
[0063] stopObjectCode();
```

## OCv2_0175 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0175.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0175.txt); entry `0022`.

```text
[0022] setState08(VAR_ACTIVE_OBJECT1);
[0024] stopObjectCode();
```

## OCv2_0175 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0175.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0175.txt); entry `0025`.

```text
[0025] clearState08(VAR_ACTIVE_OBJECT1);
[0027] stopObjectCode();
```

## OCv2_0175 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0175.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0175.txt); entry `0025`.

```text
[0025] clearState08(VAR_ACTIVE_OBJECT1);
[0027] stopObjectCode();
```

## OCv2_0175 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0175.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0175.txt); entry `0022`.

```text
[0022] setState08(VAR_ACTIVE_OBJECT1);
[0024] stopObjectCode();
```

## OCv2_0175 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0175.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0175.txt); entry `0022`.

```text
[0022] setState08(VAR_ACTIVE_OBJECT1);
[0024] stopObjectCode();
```

## OCv2_0176 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0176.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0176.txt); entry `001E`.

```text
[001E] unless (VAR_EGO == 2) goto 0040;
[0024] printEgo("I've already read them all.");
[0040] printEgo("It would take YEARS to read them!");
[005D] stopObjectCode();
```

## OCv2_0176 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0176.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0176.txt); entry `001E`.

```text
[001E] unless (VAR_EGO == 2) goto 0040;
[0024] printEgo("I've already read them all.");
[0040] printEgo("It would take YEARS to read them!");
[005D] stopObjectCode();
```

## OCv2_0176 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0176.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0176.txt); entry `001E`.

```text
[001E] unless (VAR_EGO == 2) goto 0040;
[0024] printEgo("I've already read them all.");
[0040] printEgo("It would take YEARS to read them!");
[005D] stopObjectCode();
```

## OCv2_0176 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0176.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0176.txt); entry `001E`.

```text
[001E] unless (VAR_EGO == 2) goto 0040;
[0024] printEgo("I've already read them all.");
[0040] printEgo("It would take YEARS to read them!");
[005D] stopObjectCode();
```

## OCv2_0177 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0177.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0177.txt); entry `001E`.

```text
[001E] doSentence(12,176,0,1);
[0025] stopObjectCode();
```

## OCv2_0177 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0177.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0177.txt); entry `001E`.

```text
[001E] doSentence(12,176,0,1);
[0025] stopObjectCode();
```

## OCv2_0177 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0177.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0177.txt); entry `001E`.

```text
[001E] doSentence(12,176,0,1);
[0025] stopObjectCode();
```

## OCv2_0177 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0177.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0177.txt); entry `001E`.

```text
[001E] doSentence(12,176,0,1);
[0025] stopObjectCode();
```

## OCv2_0178 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0178.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0178.txt); entry `003A`.

```text
[0026] startSound(64);
[0028] setState08(VAR_ACTIVE_OBJECT1);
[0031] stopObjectCode();
[003A] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0041;
[0041] stopObjectCode();
```

## OCv2_0178 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0178.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0178.txt); entry `0032`.

```text
[002D] startSound(63);
[002F] clearState08(VAR_ACTIVE_OBJECT1);
[0031] stopObjectCode();
[0032] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0039;
[0039] stopObjectCode();
```

## OCv2_0178 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0178.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0178.txt); entry `0042`.

```text
[0042] printEgo("Nope, that won't work.");
[0057] stopObjectCode();
```

## OCv2_0178 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0178.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0178.txt); entry `0022`.

```text
[0022] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 002D;
[0026] startSound(64);
[0028] setState08(VAR_ACTIVE_OBJECT1);
[002D] startSound(63);
[002F] clearState08(VAR_ACTIVE_OBJECT1);
[0031] stopObjectCode();
```

## OCv2_0178 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0178.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0178.txt); entry `0058`.

```text
[0058] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 007A;
[005C] printEgo("It's the device from my dream!");
[007A] printEgo("I can't see it.");
[0088] stopObjectCode();
```

## OCv2_0179 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0179.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0179.txt); entry `0021`.

```text
[0021] unless (VAR_EGO == 2) goto 003F;
[0027] printEgo("No, it's VERY fragile.");
[003F] animateActor(VAR_EGO,246);
[0042] printEgo("I'm NOT touching it!");
[0055] stopObjectCode();
```

## OCv2_0179 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0179.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0179.txt); entry `0021`.

```text
[0021] unless (VAR_EGO == 2) goto 003F;
[0027] printEgo("No, it's VERY fragile.");
[003F] animateActor(VAR_EGO,246);
[0042] printEgo("I'm NOT touching it!");
[0055] stopObjectCode();
```

## OCv2_0179 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0179.txt](../../zak/converted/scripts_flat/LFv2_0006/ROv2/OCv2_0179.txt); entry `0021`.

```text
[0021] unless (VAR_EGO == 2) goto 003F;
[0027] printEgo("No, it's VERY fragile.");
[003F] animateActor(VAR_EGO,246);
[0042] printEgo("I'm NOT touching it!");
[0055] stopObjectCode();
```

## SCv2_0119 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0006/SCv2_0119.txt](../../zak/converted/scripts_flat/LFv2_0006/SCv2_0119.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_VERB == 14) goto 0057;
[0006] pickupObject(VAR_ACTIVE_OBJECT1);
[0008] unless (VAR_EGO != 2) goto 0057;
[000E] unless (!getState04(169)) goto 0055;
[0013] unless (getState04(114)) goto 0035;
[0018] printEgo("This looks like an artifact!");
[0035] printEgo("I wonder who would know what this is.");
[0055] stopScript(0);
[0057] cutscene();
[0058] print(2,"Hmm^");
[005F] delay(60);
[0063] print(2,"This \x06\x09\x06 is \x02\x02");
[0070] unless (VAR_ACTIVE_OBJECT1 != 79) goto 008D;
[0076] print(2,"part of the\x01\x01device!");
[008D] print(2,"VERY old.");
[0098] waitForMessage();
[0099] unless (VAR_ACTIVE_VERB == 14) goto 00BA;
[009F] VAR_RESULT = getActorRoom(1);
[00A2] unless (VAR_RESULT != VAR_ROOM) goto 00AA;
[00AA] walkActorToActor(2,1,4);
[00AE] waitForActor(2);
[00B0] faceActor(2,1);
[00B3] stopObjectCode();
[00BA] unless (VAR_ACTIVE_OBJECT1 == 55) goto 00C6;
[00C6] unless (VAR_ACTIVE_OBJECT1 == 81) goto 012F;
[00CC] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 00F9;
[00D0] print(2,"And you already know how to use its\x01\x01power.");
[00F9] print(2,"It also has tremendous power if you're\x01\x01trained to use it.");
[012F] unless (VAR_ACTIVE_OBJECT1 == 79) goto 0152;
[0135] print(2,"There's some writing on it!");
[0152] unless (VAR_ACTIVE_OBJECT1 == 78) goto 018B;
[0158] print(2,"It's the section that generates the\x01\x01device's power.");
[018B] unless (VAR_ACTIVE_OBJECT1 == 33) goto 01C8;
[0191] Var[66] = getObjectOwner(56);
[0195] unless (Var[66] == 15) goto 01BB;
[019B] print(2,"We must acquire its other half.");
[01BB] unless (Var[66]) goto 01C2;
[01C8] unless (VAR_ACTIVE_OBJECT1 == 56) goto 0239;
[01CE] VAR_RESULT = getObjectOwner(33);
[01D2] unless (!VAR_RESULT) goto 0204;
[01D6] print(2,"We lost its other half! Our mission\x01\x01has failed!");
[0204] print(2,"We can't use it until the two halves are\x01\x01fused together!");
[0239] unless (VAR_ACTIVE_OBJECT1 == 80) goto 026F;
[023F] print(2,"It will hold the crystals when we build\x01\x01the device");
[026F] unless (VAR_ACTIVE_OBJECT1 == 58) goto 02B0;
[0275] print(2,"It is the Master Crystal which will\x01\x01focus the device's energy.");
[02AD] /* goto 02B0; */
[02B0] endCutscene();
[02B1] stopObjectCode();
```
