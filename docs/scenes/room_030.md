# Room 030 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] loadSound(27)
[0007] loadSound(37)
[000A] Var[154]++;
[000C] unless (!getState08(488)) goto 0014;
[0011] Var[154] = Var[234];
[0014] unless (getState04(492)) goto 0020;
[0019] doSentence(4,492,0,1);
[0020] unless (getState04(454)) goto 002C;
[0025] doSentence(253,490,0,1);
[002C] ActorOps(VAR_EGO,[Costume(0)]);
[0030] doSentence(253,488,0,1);
[0037] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/EXv2.txt); entry `0000`.

```text
[0000] Var[154] = Var[234];
[0003] stopSound(Var[158]);
[0005] stopSound(50);
[0007] stopSound(51);
[0009] stopSound(37);
[000B] stopObjectCode();
```

## OCv2_0071 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt); entry `0031`.

```text
[0031] startScript(55);
[0033] stopObjectCode();
```

## OCv2_0071 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt); entry `0031`.

```text
[0031] startScript(55);
[0033] stopObjectCode();
```

## OCv2_0071 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt); entry `0031`.

```text
[0031] startScript(55);
[0033] stopObjectCode();
```

## OCv2_0071 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt); entry `0031`.

```text
[0031] startScript(55);
[0033] stopObjectCode();
```

## OCv2_0071 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt); entry `0031`.

```text
[0031] startScript(55);
[0033] stopObjectCode();
```

## OCv2_0071 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt); entry `0031`.

```text
[0031] startScript(55);
[0033] stopObjectCode();
```

## OCv2_0071 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0071.txt); entry `0031`.

```text
[0031] startScript(55);
[0033] stopObjectCode();
```

## OCv2_0072 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0072.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0072.txt); entry `0038`.

```text
[0038] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[003D] stopObjectCode();
```

## OCv2_0072 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0072.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0072.txt); entry `0035`.

```text
[0035] startScript(125);
[0037] stopObjectCode();
```

## OCv2_0072 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0072.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0072.txt); entry `0029`.

```text
[0029] unless (getState04(492)) goto 0032;
[002E] stopSound(Var[158]);
[0030] startSound(50);
[0032] pickupObject(VAR_ACTIVE_OBJECT1);
[0034] stopObjectCode();
```

## OCv2_0073 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0073.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0073.txt); entry `001B`.

```text
[001B] unless (!getState08(73)) goto 0027;
[0020] doSentence(33,491,0,1);
[0027] stopObjectCode();
```

## OCv2_0073 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0073.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0073.txt); entry `0028`.

```text
[0028] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002D] stopObjectCode();
```

## OCv2_0073 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0073.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0073.txt); entry `001B`.

```text
[001B] unless (!getState08(73)) goto 0027;
[0020] doSentence(33,491,0,1);
[0027] stopObjectCode();
```

## OCv2_0074 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0074.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0074.txt); entry `0042`.

```text
[0042] unless (VAR_ACTIVE_OBJECT2 == 3) goto 004E;
[0048] setOwnerOf(VAR_ACTIVE_OBJECT1,3);
[004E] startScript(53);
[0050] stopObjectCode();
```

## OCv2_0074 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0074.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0074.txt); entry `002A`.

```text
[002A] unless (VAR_EGO == 3) goto 0038;
[0030] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0038] startScript(53);
[003A] stopObjectCode();
```

## OCv2_0074 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0074.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0074.txt); entry `003B`.

```text
[003B] Var[67] = 3;
[003F] startScript(53);
[0041] stopObjectCode();
```

## OCv2_0074 / verb 14
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0074.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0074.txt); entry `0022`.

```text
[0022] doSentence(33,495,0,1);
[0029] stopObjectCode();
```

## OCv2_0075 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0075.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0075.txt); entry `0037`.

```text
[0037] unless (VAR_ACTIVE_OBJECT2 == 4) goto 0043;
[003D] setOwnerOf(VAR_ACTIVE_OBJECT1,4);
[0043] startScript(53);
[0045] stopObjectCode();
```

## OCv2_0075 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0075.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0075.txt); entry `001F`.

```text
[001F] unless (VAR_EGO == 4) goto 002D;
[0025] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002D] startScript(53);
[002F] stopObjectCode();
```

## OCv2_0075 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0075.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0075.txt); entry `0030`.

```text
[0030] Var[67] = 4;
[0034] startScript(53);
[0036] stopObjectCode();
```

## OCv2_0488 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0488.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0488.txt); entry `001D`.

```text
[001D] unless (!getState04(454)) goto 004D;
[0022] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 004A;
[0026] startScript(10);
[0028] doSentence(254,489,0,1);
[002F] Var[154] = Var[235];
[0032] startSound(37);
[0034] doSentence(253,493,0,1);
[003B] setState08(452);
[003E] unless (getState08(490)) goto 004A;
[0043] doSentence(253,495,0,1);
[004D] doSentence(253,491,0,1);
[0054] stopObjectCode();
```

## OCv2_0488 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0488.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0488.txt); entry `0055`.

```text
[0055] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0077;
[0059] startScript(11);
[005B] clearState08(452);
[005E] unless (getState08(490)) goto 0070;
[0063] doSentence(253,494,0,1);
[006A] Var[154] = Var[234];
[0070] doSentence(250,489,0,1);
[0077] stopObjectCode();
```

## OCv2_0488 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0488.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0488.txt); entry `0078`.

```text
[0078] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0082;
[007C] loadRoomWithEgo(452,185,255,255);
[0082] stopObjectCode();
```

## OCv2_0488 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0488.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0488.txt); entry `0083`.

```text
[0083] breakHere();
[0084] Var[66] = findObject(VAR_VIRT_MOUSE_X,VAR_VIRT_MOUSE_Y);
[0088] unless (Var[66] == 488) goto 0096;
[008E] setBitVar(1440,VAR_EGO,Var[234]);
[0096] setBitVar(1440,VAR_EGO,Var[235]);
[009B] unless (Var[154]) goto 00A2;
[00A2] unless (getState04(454)) goto 00AA;
[00AA] unless (VAR_ACTIVE_VERB == 6) goto 00B6;
[00B0] Var[67] = Var[234];
[00B6] unless (VAR_ACTIVE_VERB == 7) goto 00F8;
[00BC] Var[67] = Var[235];
[00BF] VAR_ACTIVE_VERB = Var[234];
[00C2] unless (VAR_ACTIVE_OBJECT1 == 65) goto 00CB;
[00CB] unless (VAR_ACTIVE_OBJECT1 == 66) goto 00F8;
[00D1] unless (Var[67]) goto 00E3;
[00D5] printEgo("I took off\x02\x02");
[00E3] printEgo("I put on\x02\x02");
[00EC] printEgo(" my helmet.");
```

## OCv2_0489 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0489.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0489.txt); entry `002A`.

```text
[002A] startScript(10);
[002C] doSentence(253,493,0,1);
[0033] stopObjectCode();
```

## OCv2_0489 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0489.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0489.txt); entry `0034`.

```text
[0034] startScript(11);
[0036] doSentence(253,493,0,1);
[003D] stopObjectCode();
```

## OCv2_0489 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0489.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0489.txt); entry `003E`.

```text
[003E] doSentence(1,VAR_ACTIVE_OBJECT1,0,0);
[0044] unless (VAR_ACTIVE_OBJECT2 == 73) goto 0067;
[004A] setOwnerOf(73,0);
[004E] setOwnerOf(73,15);
[0052] clearState08(73);
[0055] clearState02(73);
[0058] unless (getState08(490)) goto 0064;
[005D] doSentence(253,494,0,1);
[0067] startScript(3);
[0069] stopObjectCode();
```

## OCv2_0489 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0489.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0489.txt); entry `006A`.

```text
[006A] startSound(37);
[006C] doSentence(253,493,0,1);
[0073] breakHere();
[0074] VAR_RESULT = isSoundRunning(37);
[0077] unless (!VAR_RESULT) goto 0073;
[007B] Var[154] = Var[234];
[007E] stopObjectCode();
```

## OCv2_0490 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0490.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0490.txt); entry `0025`.

```text
[0025] unless (VAR_EGO != 1) goto 0073;
[002B] Var[46] = 3;
[002F] Var[47] = 4;
[0033] unless (VAR_EGO == 4) goto 0041;
[0039] Var[46] = 4;
[003D] Var[47] = 3;
[0041] VAR_RESULT = getBitVar(1470,Var[47]);
[0046] unless (!VAR_RESULT) goto 0070;
[004A] VAR_RESULT = getActorRoom(Var[47]);
[004D] unless (VAR_RESULT != 30) goto 0070;
[0053] print(Var[46],"I'm not leaving without \x06\x2F\x06!");
[0073] VAR_RESULT = getActorRoom(4);
[0076] unless (VAR_RESULT == 30) goto 007F;
[007F] VAR_RESULT = getActorRoom(3);
[0082] unless (VAR_RESULT == 30) goto 008B;
[008B] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 00A1;
[008F] startSound(27);
[0091] doSentence(253,493,0,1);
[0098] setState08(VAR_ACTIVE_OBJECT1);
[009A] doSentence(253,494,0,1);
[00A1] stopObjectCode();
```

## OCv2_0490 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0490.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0490.txt); entry `00A2`.

```text
[00A2] unless (!getState04(454)) goto 00C0;
[00A7] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 00BD;
[00AB] startSound(27);
[00AD] doSentence(253,493,0,1);
[00B4] clearState08(VAR_ACTIVE_OBJECT1);
[00B6] doSentence(253,495,0,1);
[00C0] doSentence(253,491,0,1);
[00C7] stopObjectCode();
```

## OCv2_0490 / verb 9
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0490.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0490.txt); entry `00C8`.

```text
[00C8] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 00D5;
[00CC] doSentence(4,VAR_ACTIVE_OBJECT1,0,0);
[00D5] doSentence(5,VAR_ACTIVE_OBJECT1,0,0);
[00DB] stopObjectCode();
```

## OCv2_0490 / verb 10
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0490.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0490.txt); entry `00C8`.

```text
[00C8] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 00D5;
[00CC] doSentence(4,VAR_ACTIVE_OBJECT1,0,0);
[00D5] doSentence(5,VAR_ACTIVE_OBJECT1,0,0);
[00DB] stopObjectCode();
```

## OCv2_0490 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0490.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0490.txt); entry `00C8`.

```text
[00C8] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 00D5;
[00CC] doSentence(4,VAR_ACTIVE_OBJECT1,0,0);
[00D5] doSentence(5,VAR_ACTIVE_OBJECT1,0,0);
[00DB] stopObjectCode();
```

## OCv2_0490 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0490.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0490.txt); entry `00DC`.

```text
[00DC] delay(600);
[00E0] Var[66] = getRandomNr(2);
[00E3] unless (Var[66] == 0) goto 010D;
[00E9] printEgo("As soon as I land I'm gonna get a pizza!");
[010D] unless (Var[66] == 1) goto 0138;
[0113] printEgo("Well, at least the view up here is nice.");
[0138] unless (Var[66] == 2) goto 015C;
[013E] printEgo("I wish I had a good book to read.");
[0159] /* goto 015C; */
[015C] stopObjectCode();
```

## OCv2_0491 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0491.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0491.txt); entry `001D`.

```text
[001D] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0042;
[0021] printEgo("Everything appears to be normal.");
[0042] printEgo("They all read zero.");
[0054] stopObjectCode();
```

## OCv2_0491 / verb 33
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0491.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0491.txt); entry `0055`.

```text
[0055] unless (!getState04(454)) goto 007D;
[005A] unless (getState08(490)) goto 0066;
[005F] doSentence(253,495,0,1);
[0066] unless (getState04(492)) goto 0077;
[006B] clearState04(492);
[006E] unless (!getState08(72)) goto 0075;
[0073] stopSound(Var[158]);
[0075] stopSound(50);
[0077] pickupObject(73);
[007D] doSentence(253,491,0,1);
[0084] stopObjectCode();
```

## OCv2_0491 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0491.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0491.txt); entry `0085`.

```text
[0085] printEgo("No way! That would kill me!");
[009D] doSentence(STOP);
[009F] stopObjectCode();
```

## OCv2_0492 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0492.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0492.txt); entry `001E`.

```text
[001E] unless (!getState08(73)) goto 0038;
[0023] setState04(VAR_ACTIVE_OBJECT1);
[0025] unless (!getState08(72)) goto 0033;
[002A] doSentence(253,VAR_ACTIVE_OBJECT1,0,1);
[0033] startSound(50);
[0038] printEgo("Hmmmm^it's not working.");
[004F] stopObjectCode();
```

## OCv2_0492 / verb 5
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0492.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0492.txt); entry `0050`.

```text
[0050] clearState04(VAR_ACTIVE_OBJECT1);
[0052] unless (!getState08(72)) goto 0059;
[0057] stopSound(Var[158]);
[0059] stopSound(50);
[005B] stopObjectCode();
```

## OCv2_0492 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0492.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0492.txt); entry `005C`.

```text
[005C] unless (VAR_ACTIVE_OBJECT2 == 72) goto 0083;
[0062] clearState08(72);
[0065] clearState02(72);
[0068] setOwnerOf(72,0);
[006C] setOwnerOf(72,15);
[0070] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 0080;
[0074] stopSound(50);
[0076] delay(30);
[007A] doSentence(253,VAR_ACTIVE_OBJECT1,0,1);
[0083] startScript(3);
[0085] stopObjectCode();
```

## OCv2_0492 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0492.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0492.txt); entry `0086`.

```text
[0086] startSound(Var[158]);
[0088] unless (!getState04(495)) goto 008F;
[008D] startScript(44);
[008F] stopObjectCode();
```

## OCv2_0493 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0493.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0493.txt); entry `0013`.

```text
[0013] unless (getState04(492)) goto 002C;
[0018] breakHere();
[0019] VAR_RESULT = isSoundRunning(VAR_LAST_SOUND);
[001C] unless (!VAR_RESULT) goto 0018;
[0020] unless (!getState08(73)) goto 002C;
[0025] doSentence(4,492,0,1);
[002C] stopObjectCode();
```

## OCv2_0494 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0494.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0494.txt); entry `0013`.

```text
[0013] unless (!getState08(488)) goto 01A1;
[0018] unless (!getState08(73)) goto 017F;
[001D] Var[199] = Var[234];
[0020] stopSound(Var[158]);
[0022] stopSound(50);
[0024] breakHere();
[0025] startSound(51);
[0027] doSentence(253,493,0,1);
[002E] delay(18);
[0032] setState08(491);
[0035] delay(30);
[0039] clearState08(491);
[003C] delay(120);
[0040] setState08(491);
[0043] delay(360);
[0047] printEgo("Watch out earth, here I come!");
[0061] delay(240);
[0065] Var[45] = 5;
[0069] printEgo("\x04\x2D\x04");
[006D] delay(60);
[0071] Var[45]--;
[0073] unless (Var[45] < 1) goto 0069;
[0079] printEgo("BLASTOFF!");
[0084] setState04(454);
[0087] setState08(454);
[008A] setState02(454);
[008D] setState08(442);
[0090] delay(60);
[0094] setState08(494);
[0097] unless (getState08(71)) goto 009F;
[009C] setState08(495);
[009F] breakHere();
[00A0] delay(120);
[00A4] printEgo("Wheeeeeeeeeeeeeeee!");
[00B9] delay(720);
[00BD] printEgo("Well, I'd better get comfortable. I'm\x01\x01going to be here for over two months!");
[00FE] waitForMessage();
[00FF] Var[44] = Var[234];
[0102] VAR_RESULT = getActorRoom(3);
[0105] unless (VAR_RESULT == VAR_ROOM) goto 0118;
[010A] doSentence(7,65,0,1);
[0111] setOwnerOf(65,14);
[0115] Var[44] = Var[235];
[0118] VAR_RESULT = getActorRoom(4);
[011B] unless (VAR_RESULT == VAR_ROOM) goto 013E;
[0120] doSentence(7,66,0,1);
[0127] setOwnerOf(66,0);
[012B] Var[44] = Var[235];
[012E] VAR_RESULT = getObjectOwner(65);
[0132] unless (VAR_RESULT == 14) goto 013E;
[0138] setOwnerOf(65,0);
[013C] stopScript(84);
[013E] VAR_RESULT = getActorRoom(1);
[0141] unless (VAR_RESULT == VAR_ROOM) goto 0157;
[0146] doSentence(7,14,0,1);
[014D] doSentence(7,50,0,1);
[0154] Var[44] = Var[235];
[0157] unless (Var[44]) goto 0179;
[015B] printEgo("I won't need my helmet any longer.");
[0179] Var[199] = Var[235];
[017F] delay(60);
[0183] printEgo("I wonder why it's not working?");
[01A1] delay(30);
[01A5] startSound(27);
[01A7] doSentence(253,493,0,1);
[01AE] clearState08(490);
[01B1] delay(60);
[01B5] printEgo("It won't work with the door open.");
[01D2] stopObjectCode();
```

## OCv2_0495 / verb 33
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0495.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0495.txt); entry `0015`.

```text
[0015] pickupObject(74);
[0018] pickupObject(75);
[001B] setObjectName(74,"CashCard");
[0027] stopObjectCode();
```

## OCv2_0495 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0495.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0495.txt); entry `0028`.

```text
[0028] doSentence(254,494,0,1);
[002F] stopSound(51);
[0031] clearState08(491);
[0034] Var[199] = Var[235];
[0037] print(255,"");
[003A] unless (getState08(488)) goto 004B;
[003F] startSound(27);
[0041] doSentence(253,493,0,1);
[0048] clearState08(490);
[004B] stopObjectCode();
```

## OCv2_0496 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0496.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0496.txt); entry `0023`.

```text
[0023] unless (getState04(454)) goto 003F;
[0028] printEgo("I don't need to use it.");
[003F] cursorCommand(15, 2);
[0042] unless (VAR_EGO == 1) goto 004C;
[0048] Var[205] = 60;
[004C] unless (VAR_EGO == 3) goto 0056;
[0052] Var[206] = 243;
[0056] unless (VAR_EGO == 4) goto 0060;
[005C] Var[207] = 240;
[0060] setState08(496);
[0063] startSound(37);
[0065] doSentence(253,493,0,1);
[006C] breakHere();
[006D] VAR_RESULT = isSoundRunning(37);
[0070] unless (!VAR_RESULT) goto 006C;
[0074] clearState08(496);
[0077] printEgo("Now my oxygen supply is full.");
[0091] cursorCommand(247, 1);
[0094] stopObjectCode();
```

## OCv2_0496 / verb 4
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0496.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0496.txt); entry `0023`.

```text
[0023] unless (getState04(454)) goto 003F;
[0028] printEgo("I don't need to use it.");
[003F] cursorCommand(15, 2);
[0042] unless (VAR_EGO == 1) goto 004C;
[0048] Var[205] = 60;
[004C] unless (VAR_EGO == 3) goto 0056;
[0052] Var[206] = 243;
[0056] unless (VAR_EGO == 4) goto 0060;
[005C] Var[207] = 240;
[0060] setState08(496);
[0063] startSound(37);
[0065] doSentence(253,493,0,1);
[006C] breakHere();
[006D] VAR_RESULT = isSoundRunning(37);
[0070] unless (!VAR_RESULT) goto 006C;
[0074] clearState08(496);
[0077] printEgo("Now my oxygen supply is full.");
[0091] cursorCommand(247, 1);
[0094] stopObjectCode();
```

## OCv2_0496 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0496.txt](../../zak/converted/scripts_flat/LFv2_0030/ROv2/OCv2_0496.txt); entry `0023`.

```text
[0023] unless (getState04(454)) goto 003F;
[0028] printEgo("I don't need to use it.");
[003F] cursorCommand(15, 2);
[0042] unless (VAR_EGO == 1) goto 004C;
[0048] Var[205] = 60;
[004C] unless (VAR_EGO == 3) goto 0056;
[0052] Var[206] = 243;
[0056] unless (VAR_EGO == 4) goto 0060;
[005C] Var[207] = 240;
[0060] setState08(496);
[0063] startSound(37);
[0065] doSentence(253,493,0,1);
[006C] breakHere();
[006D] VAR_RESULT = isSoundRunning(37);
[0070] unless (!VAR_RESULT) goto 006C;
[0074] clearState08(496);
[0077] printEgo("Now my oxygen supply is full.");
[0091] cursorCommand(247, 1);
[0094] stopObjectCode();
```

## SCv2_0044 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0030/SCv2_0044.txt](../../zak/converted/scripts_flat/LFv2_0030/SCv2_0044.txt); entry `0000`.

```text
[0000] unless (Var[158] == 49) goto 0068;
[0006] setState04(495);
[0009] cutscene();
[000A] beginOverride();
[000E] delay(120);
[0012] animateActor(VAR_EGO,246);
[0015] waitForActor(VAR_EGO);
[0017] printEgo("ZWOW! Darkeen tones! Razor's a wayhot\x01\x01jamster!\x03\x03She blows poodles over old noizglunk!");
[0063] waitForMessage();
[0064] print(255,"");
[0067] endCutscene();
[0068] stopObjectCode();
```

## SCv2_0055 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0030/SCv2_0055.txt](../../zak/converted/scripts_flat/LFv2_0030/SCv2_0055.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_VERB == 12) goto 0046;
[0006] printEgo("Mitachisoniba DAT Recorder\x01\x01Property of Melissa China - Don't Touch!");
[0046] unless (VAR_ACTIVE_VERB == 14) goto 0081;
[004C] unless (VAR_EGO == 3) goto 0061;
[0052] setState01(VAR_ACTIVE_OBJECT1);
[0054] pickupObject(VAR_ACTIVE_OBJECT1);
[0056] unless (getState04(454)) goto 005E;
[005B] setState08(495);
[0061] printEgo("No Way! Melissa would KILL me!");
[007C] doSentence(STOP);
[0081] unless (VAR_ACTIVE_VERB == 3) goto 009B;
[0087] printEgo("No way, it's mine!");
[009B] unless (VAR_ACTIVE_VERB == 11) goto 00C2;
[00A1] unless (VAR_ACTIVE_OBJECT2 == 72) goto 00BD;
[00A7] clearState08(493);
[00AA] unless (getState04(493)) goto 00B6;
[00AF] setOwnerOf(72,0);
[00B6] setOwnerOf(72,14);
[00BD] startScript(3);
[00C2] unless (VAR_ACTIVE_VERB == 4) goto 02E0;
[00C8] unless (getState08(493)) goto 00E6;
[00CD] printEgo("There's no tape in it.");
[00E1] stopScript(0);
[00E6] cutscene();
[00E7] Var[66] = Var[234];
[00EA] VerbOps(Delete(Var[66]););
[00ED] Var[66]++;
[00EF] unless (Var[66] > 14) goto 00EA;
[00F5] VerbOps(New-32(0,20,10,0,"        Play@@@@@@@@"));
[0110] VerbOps(New-31(20,20,11,0,"      Record@@@@@@@@"));
[012B] cursorCommand(0, 0);
[012E] cursorCommand(159, 3);
[0131] beginOverride();
[0135] VAR_ACTIVE_VERB = Var[234];
[0138] VAR_SENTENCE_VERB = Var[234];
[013B] VAR_BACKUP_VERB = 34;
[013F] breakHere();
[0140] unless (VAR_ACTIVE_VERB) goto 013F;
[0144] startScript(19);
[0146] endCutscene();
[0147] unless (VAR_ACTIVE_VERB == 32) goto 01F5;
[014D] unless (!Var[158]) goto 0163;
[0151] printEgo("The DAT is blank.");
[0161] stopScript(0);
[0163] unless (VAR_ROOM == 188) goto 01AD;
[0169] VAR_RESULT = isSoundRunning(70);
[016C] unless (VAR_RESULT) goto 01AD;
[0170] printEgo("Hmmm, it won't play in here. Perhaps\x01\x01it's the crystalinetic force!");
[01AB] stopScript(0);
[01AD] setBitVar(1440,0,Var[235]);
[01B2] unless (VAR_ROOM_RESOURCE == 33) goto 01CD;
[01B8] unless (VAR_ROOM != 182) goto 01CD;
[01BE] unless (Var[158] == 32) goto 01CD;
[01C4] doSentence(11,520,0,1);
[01CB] stopScript(0);
[01CD] startSound(Var[158]);
[01CF] unless (!getState04(495)) goto 01D6;
[01D4] startScript(44);
[01D6] Var[149] = VAR_ROOM;
[01D9] Var[231] = Var[230];
[01DC] unless (Var[149] != VAR_ROOM) goto 01E4;
[01E4] breakHere();
[01E5] Var[231]--;
[01E7] unless (!Var[231]) goto 01DC;
[01EB] stopSound(Var[158]);
[01ED] setBitVar(1440,0,Var[234]);
[01F5] unless (VAR_ACTIVE_VERB == 31) goto 025B;
[01FB] VAR_RESULT = getBitVar(1440,0);
[0200] unless (VAR_RESULT) goto 020B;
[0204] setBitVar(1440,0,Var[234]);
[0209] stopSound(Var[158]);
[020B] unless (getState04(493)) goto 022C;
[0210] setState04(71);
[0213] setObjectName(71,"recording boom box");
[022C] printEgo("It won't record!\x03\x03I think the DAT is write-protected.");
[025B] unless (getState04(71)) goto 02DD;
[0260] Var[230] = 240;
[0264] Var[149] = VAR_ROOM;
[0267] VAR_RESULT = isSoundRunning(86);
[026A] unless (VAR_RESULT) goto 0275;
[026E] Var[158] = 86;
[0275] VAR_RESULT = isSoundRunning(70);
[0278] unless (VAR_RESULT) goto 0287;
[027C] Var[158] = 70;
[0280] delay(240);
[0287] VAR_LAST_SOUND = Var[234];
[028A] Var[158] = VAR_LAST_SOUND;
[028D] unless (Var[149] != VAR_ROOM) goto 0295;
[0295] unless (VAR_LAST_SOUND) goto 02D3;
[0299] Var[66] = 6;
[029D] unless (VAR_LAST_SOUND == Var[66]) goto 02A5;
[02A5] Var[66]++;
[02A7] unless (Var[66] > 9) goto 029D;
[02AD] Var[158] = VAR_LAST_SOUND;
[02B0] Var[230] = Var[234];
[02B3] breakHere();
[02B4] Var[230]++;
[02B6] VAR_RESULT = isSoundRunning(VAR_LAST_SOUND);
[02B9] unless (!VAR_RESULT) goto 02CA;
[02BD] unless (Var[230] < 5) goto 02C7;
[02C3] Var[230] = 5;
[02CA] unless (Var[230] == 240) goto 02B3;
[02D3] breakHere();
[02D4] Var[230]--;
[02D6] unless (!Var[230]) goto 028D;
[02E0] unless (VAR_ACTIVE_VERB == 1) goto 0326;
[02E6] unless (!getState08(493)) goto 0323;
[02EB] unless (!getState04(493)) goto 030A;
[02F0] setState08(493);
[02F3] printEgo("The DAT fell out.");
[0303] setOwnerOf(72,VAR_EGO);
[030A] printEgo("The DAT is stuck inside.");
[0326] unless (VAR_ACTIVE_VERB == 5) goto 0361;
[032C] unless (!getState08(493)) goto 035E;
[0331] unless (!getState04(71)) goto 033D;
[0336] setBitVar(1440,0,Var[234]);
[033B] stopSound(Var[158]);
[033D] clearState04(71);
[0340] setObjectName(71,"boom box");
[034C] unless (VAR_ROOM == 30) goto 035E;
[0352] unless (getState04(492)) goto 035E;
[0357] doSentence(4,492,0,1);
[035E] /* goto 0361; */
[0361] stopObjectCode();
```

## SCv2_0125 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0030/SCv2_0125.txt](../../zak/converted/scripts_flat/LFv2_0030/SCv2_0125.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_OBJECT1 == 72) goto 005D;
[0006] unless (VAR_ACTIVE_VERB == 12) goto 005D;
[000C] unless (!getState08(VAR_ACTIVE_OBJECT1)) goto 0027;
[0010] printEgo("I can't see the label.");
[0027] printEgo("Razor and the Scummettes Greatest Hit,\x01\x01`Inda Glop Oda Krell`");
[005D] stopObjectCode();
```
