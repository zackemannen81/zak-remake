# Room 007 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] setBitVar(1445,0,Var[235]);
[0009] doSentence(253,183,0,1);
[0010] Var[66] = Var[234];
[0013] Var[14] = Var[66];
[0016] Var[14] += 45;
[001A] Var[Var[14]] = Var[234];
[001D] Var[66]++;
[001F] unless (Var[66] > 8) goto 0013;
[0025] ActorOps(10,[Name("Lou")]);
[002D] ActorOps(10,[Costume(16)]);
[0031] ActorOps(10,[Sound(6)]);
[0035] ActorOps(10,[TalkColor(15)]);
[0039] VAR_RESULT = getBitVar(1461,0);
[003E] unless (VAR_RESULT) goto 004C;
[0042] putActorInRoom(10,7);
[0045] putActorAtObject(10,181);
[004C] putActorInRoom(10,7);
[004F] putActor(10,30,36);
[0053] animateActor(10,250);
[0056] loadScript(26)
[0059] unless (getState04(180)) goto 008B;
[005E] clearState04(180);
[0061] unless (VAR_EGO == 1) goto 0084;
[0067] VAR_RESULT = getBitVar(1455,0);
[006C] unless (VAR_RESULT) goto 007A;
[0070] setBitVar(1455,0,Var[234]);
[0075] startScript(72);
[007A] doSentence(253,187,0,1);
[0084] doSentence(253,188,0,1);
[008B] VAR_RESULT = getBitVar(1461,0);
[0090] unless (VAR_RESULT) goto 009B;
[0094] doSentence(253,189,0,1);
[009B] startScript(27);
[009D] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/EXv2.txt); entry `0000`.

```text
[0000] setBitVar(1445,0,Var[234]);
[0005] startScript(19);
[0007] stopScript(24);
[0009] stopScript(25);
[000B] stopScript(26);
[000D] stopScript(27);
[000F] unless (Var[45]) goto 001D;
[0013] clearState08(Var[45]);
[0015] clearState02(Var[45]);
[0017] setOwnerOf(Var[45],0);
[001A] setOwnerOf(Var[45],15);
[001D] ActorOps(10,[Name()]);
[0022] stopObjectCode();
```

## OCv2_0034 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0034.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0034.txt); entry `002D`.

```text
[002D] startScript(138);
[002F] stopObjectCode();
```

## OCv2_0034 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0034.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0034.txt); entry `002D`.

```text
[002D] startScript(138);
[002F] stopObjectCode();
```

## OCv2_0034 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0034.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0034.txt); entry `002D`.

```text
[002D] startScript(138);
[002F] stopObjectCode();
```

## OCv2_0034 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0034.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0034.txt); entry `0026`.

```text
[0026] Var[47] = 45;
[002A] startScript(24);
[002C] stopObjectCode();
```

## OCv2_0035 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0035.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0035.txt); entry `0020`.

```text
[0020] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0025] stopObjectCode();
```

## OCv2_0036 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0036.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0036.txt); entry `001C`.

```text
[001C] unless (VAR_ACTIVE_OBJECT2 == 14) goto 0027;
[0022] startScript(138);
[0027] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[002C] stopObjectCode();
```

## OCv2_0037 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0037.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0037.txt); entry `0017`.

```text
[0017] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[001C] stopObjectCode();
```

## OCv2_0038 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0038.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0038.txt); entry `001F`.

```text
[001F] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0024] stopObjectCode();
```

## OCv2_0039 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0039.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0039.txt); entry `002A`.

```text
[002A] startScript(138);
[002C] stopObjectCode();
```

## OCv2_0039 / verb 6
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0039.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0039.txt); entry `002A`.

```text
[002A] startScript(138);
[002C] stopObjectCode();
```

## OCv2_0039 / verb 7
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0039.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0039.txt); entry `002A`.

```text
[002A] startScript(138);
[002C] stopObjectCode();
```

## OCv2_0039 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0039.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0039.txt); entry `002A`.

```text
[002A] startScript(138);
[002C] stopObjectCode();
```

## OCv2_0039 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0039.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0039.txt); entry `0023`.

```text
[0023] Var[47] = 145;
[0027] startScript(24);
[0029] stopObjectCode();
```

## OCv2_0040 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0040.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0040.txt); entry `0062`.

```text
[0062] Var[14] = VAR_EGO;
[0065] Var[14] += 163;
[0069] unless (Var[14] == 40) goto 007C;
[006F] Var[14] = VAR_EGO;
[0072] Var[14] += 163;
[0076] Var[Var[14]] = 44;
[007A] startScript(150);
[007C] unless (VAR_ACTIVE_VERB == 3) goto 0084;
[0082] startScript(20);
[0084] stopObjectCode();
```

## OCv2_0040 / verb 6
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0040.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0040.txt); entry `002C`.

```text
[002C] Var[14] = VAR_EGO;
[002F] Var[14] += 163;
[0033] unless (Var[14] == 60) goto 0054;
[0039] printEgo("Gotta remove my mask.");
[004D] doSentence(7,50,0,1);
[0054] Var[14] = VAR_EGO;
[0057] Var[14] += 163;
[005B] Var[Var[14]] = 40;
[005F] startScript(150);
[0061] stopObjectCode();
```

## OCv2_0040 / verb 7
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0040.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0040.txt); entry `0062`.

```text
[0062] Var[14] = VAR_EGO;
[0065] Var[14] += 163;
[0069] unless (Var[14] == 40) goto 007C;
[006F] Var[14] = VAR_EGO;
[0072] Var[14] += 163;
[0076] Var[Var[14]] = 44;
[007A] startScript(150);
[007C] unless (VAR_ACTIVE_VERB == 3) goto 0084;
[0082] startScript(20);
[0084] stopObjectCode();
```

## OCv2_0040 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0040.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0040.txt); entry `0025`.

```text
[0025] Var[47] = 3;
[0029] startScript(24);
[002B] stopObjectCode();
```

## OCv2_0041 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0041.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0041.txt); entry `0022`.

```text
[0022] printEgo("I don't know how.");
[0032] stopObjectCode();
```

## OCv2_0041 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0041.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0041.txt); entry `001B`.

```text
[001B] Var[47] = 139;
[001F] startScript(24);
[0021] stopObjectCode();
```

## OCv2_0042 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0042.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0042.txt); entry `0021`.

```text
[0021] startScript(138);
[0023] stopObjectCode();
```

## OCv2_0042 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0042.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0042.txt); entry `0021`.

```text
[0021] startScript(138);
[0023] stopObjectCode();
```

## OCv2_0043 / verb 3
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0043.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0043.txt); entry `0066`.

```text
[0066] Var[14] = VAR_EGO;
[0069] Var[14] += 166;
[006D] unless (Var[14] == 48) goto 0080;
[0073] Var[14] = VAR_EGO;
[0076] Var[14] += 166;
[007A] Var[Var[14]] = 52;
[007E] startScript(150);
[0080] unless (VAR_ACTIVE_VERB == 3) goto 0088;
[0086] startScript(20);
[0088] stopObjectCode();
```

## OCv2_0043 / verb 6
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0043.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0043.txt); entry `0023`.

```text
[0023] Var[14] = VAR_EGO;
[0026] Var[14] += 166;
[002A] unless (Var[14] == 64) goto 0033;
[0033] Var[14] = VAR_EGO;
[0036] Var[14] += 166;
[003A] unless (Var[14] == 56) goto 0058;
[0040] printEgo("Gotta remove my fishbowl.");
[0058] Var[14] = VAR_EGO;
[005B] Var[14] += 166;
[005F] Var[Var[14]] = 48;
[0063] startScript(150);
[0065] stopObjectCode();
```

## OCv2_0043 / verb 7
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0043.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0043.txt); entry `0066`.

```text
[0066] Var[14] = VAR_EGO;
[0069] Var[14] += 166;
[006D] unless (Var[14] == 48) goto 0080;
[0073] Var[14] = VAR_EGO;
[0076] Var[14] += 166;
[007A] Var[Var[14]] = 52;
[007E] startScript(150);
[0080] unless (VAR_ACTIVE_VERB == 3) goto 0088;
[0086] startScript(20);
[0088] stopObjectCode();
```

## OCv2_0043 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0043.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0043.txt); entry `001C`.

```text
[001C] Var[47] = 15;
[0020] startScript(24);
[0022] stopObjectCode();
```

## OCv2_0044 / verb 11
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0044.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0044.txt); entry `003D`.

```text
[003D] doSentence(11,VAR_ACTIVE_OBJECT2,VAR_ACTIVE_OBJECT1,0);
[0042] stopObjectCode();
```

## OCv2_0044 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0044.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0044.txt); entry `0027`.

```text
[0027] printEgo("Golden Boar Sand Wedge");
[003C] stopObjectCode();
```

## OCv2_0044 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0044.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0044.txt); entry `0020`.

```text
[0020] Var[47] = 75;
[0024] startScript(24);
[0026] stopObjectCode();
```

## OCv2_0180 / verb 1
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0180.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0180.txt); entry `001B`.

```text
[001B] startScript(10);
[001D] setState08(161);
[0020] stopObjectCode();
```

## OCv2_0180 / verb 2
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0180.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0180.txt); entry `0021`.

```text
[0021] startScript(11);
[0023] clearState08(161);
[0026] stopObjectCode();
```

## OCv2_0180 / verb 13
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0180.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0180.txt); entry `0027`.

```text
[0027] unless (getState08(VAR_ACTIVE_OBJECT1)) goto 0031;
[002B] loadRoomWithEgo(161,5,255,255);
[0031] stopObjectCode();
```

## OCv2_0181 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0181.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0181.txt); entry `001D`.

```text
[001D] printEgo("Pay for goods here. CashCards only.");
[003D] stopObjectCode();
```

## OCv2_0182 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0182.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0182.txt); entry `0020`.

```text
[0020] printEgo("Cash offered for merchandise.\x01\x01No questions asked.");
[004E] stopObjectCode();
```

## OCv2_0182 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0182.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0182.txt); entry `004F`.

```text
[004F] unless (VAR_EGO == 1) goto 0067;
[0055] VAR_RESULT = getObjectOwner(18);
[0059] unless (VAR_RESULT != 1) goto 0064;
[005F] setBitVar(848,1,Var[235]);
[0067] VAR_RESULT = getObjectOwner(32);
[006B] unless (VAR_RESULT != 2) goto 0076;
[0071] setBitVar(848,2,Var[235]);
[0076] stopObjectCode();
```

## OCv2_0183 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0183.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0183.txt); entry `0022`.

```text
[0022] Var[47] = 120;
[0026] Var[46] = 33;
[002A] startScript(24);
[002C] stopObjectCode();
```

## OCv2_0183 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0183.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0183.txt); entry `002D`.

```text
[002D] VerbOps(New-17(13,20,7,0,"Buy@@@@@@"));
[003D] VerbOps(New-18(0,21,10,0,"Sell@@"));
[004A] cursorCommand(0, 0);
[004D] stopObjectCode();
```

## OCv2_0184 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0184.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0184.txt); entry `0022`.

```text
[0022] Var[47] = 120;
[0026] Var[46] = 56;
[002A] startScript(24);
[002C] stopObjectCode();
```

## OCv2_0184 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0184.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0184.txt); entry `002D`.

```text
[002D] Var[51] = getActorX(VAR_EGO);
[0030] Var[51]--;
[0032] unless (Var[51] < 5) goto 003C;
[0038] Var[51] = 5;
[003C] unless (Var[51] > 52) goto 0046;
[0042] Var[51] = 52;
[0046] walkActorTo(10,Var[51],47);
[004A] breakHere();
[004B] VAR_RESULT = getActorX(10);
[004E] unless (VAR_RESULT == Var[51]) goto 002D;
[0053] animateActor(10,246);
[0056] waitForActor(10);
[0058] Var[51] = 255;
[005C] stopObjectCode();
```

## OCv2_0185 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0185.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0185.txt); entry `0023`.

```text
[0023] Var[47] = 750;
[0027] Var[46] = 81;
[002B] startScript(24);
[002D] stopObjectCode();
```

## OCv2_0185 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0185.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0185.txt); entry `002E`.

```text
[002E] Var[66] = Var[234];
[0031] unless (Var[45] == 44) goto 003B;
[0037] Var[66] = 38;
[003B] unless (Var[45] == 184) goto 0045;
[0041] Var[66] = 33;
[0045] unless (Var[45] == 188) goto 004F;
[004B] Var[66] = 49;
[004F] unless (Var[45] == 187) goto 0059;
[0055] Var[66] = 30;
[0059] unless (Var[66]) goto 0069;
[005D] walkActorTo(10,Var[66],44);
[0061] waitForActor(10);
[0063] animateActor(10,246);
[0069] walkActorToObject(10,Var[45]);
[006C] stopObjectCode();
```

## OCv2_0186 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0186.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0186.txt); entry `001F`.

```text
[001F] Var[47] = 550;
[0023] Var[46] = 55;
[0027] startScript(24);
[0029] stopObjectCode();
```

## OCv2_0187 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0187.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0187.txt); entry `0021`.

```text
[0021] Var[47] = 140;
[0025] Var[46] = 26;
[0029] startScript(24);
[002B] stopObjectCode();
```

## OCv2_0187 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0187.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0187.txt); entry `002C`.

```text
[002C] delay(30);
[0030] animateActor(10,245);
[0033] print(10,"Hiya buddy.");
[0040] waitForMessage();
[0041] VAR_RESULT = isScriptRunning(73);
[0044] unless (VAR_RESULT) goto 0083;
[0048] print(10,"Sorry, but today's Super Lucky Lotto\x01\x01numbers ain't been picked.");
[0082] waitForMessage();
[0083] animateActor(10,246);
[0086] stopObjectCode();
```

## OCv2_0188 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0188.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0188.txt); entry `0023`.

```text
[0023] Var[47] = 75;
[0027] Var[46] = 21;
[002B] startScript(24);
[002D] stopObjectCode();
```

## OCv2_0188 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0188.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0188.txt); entry `002E`.

```text
[002E] delay(30);
[0032] animateActor(10,245);
[0035] print(10,"Hello.");
[003E] waitForMessage();
[003F] animateActor(10,246);
[0042] stopObjectCode();
```

## OCv2_0189 / verb 12
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0189.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0189.txt); entry `00AA`.

```text
[00AA] printEgo("PLAY LOTTO\x01\x01`If you don't play, you can't lose!`");
[00D4] stopObjectCode();
```

## OCv2_0189 / verb 17
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0189.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0189.txt); entry `001C`.

```text
[001C] unless (VAR_EGO == 1) goto 0095;
[0022] unless (Var[232] < 5) goto 0074;
[0028] VAR_RESULT = getObjectOwner(42);
[002C] unless (VAR_RESULT == 15) goto 003F;
[0032] VAR_ACTIVE_OBJECT1 = 42;
[0036] Var[47] = 10;
[003A] startScript(24);
[003F] print(10,"Dontcha know the law?\x01\x01Only one Lotto ticket per person.");
[0074] print(10,"I told ya, NO MORE LOTTO TICKETS!");
[0095] animateActor(2,246);
[0098] waitForActor(2);
[009A] printEgo("I don't gamble.");
[00A9] stopObjectCode();
```

## OCv2_0189 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0189.txt](../../zak/converted/scripts_flat/LFv2_0007/ROv2/OCv2_0189.txt); entry `00D5`.

```text
[00D5] setBitVar(1461,0,Var[234]);
[00DA] walkActorTo(1,23,60);
[00DE] waitForActor(1);
[00E0] printEgo("Gee, I hope I win!");
[00F0] waitForMessage();
[00F1] unless (!getState04(189)) goto 0144;
[00F6] setState04(189);
[00F9] print(10,"Come back after the numbers are picked\x01\x01and I'll tell ya if yer a winner.");
[0137] animateActor(1,247);
[013A] waitForMessage();
[013B] printEgo("Thanks!");
[0144] stopObjectCode();
```

## SCv2_0024 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0007/SCv2_0024.txt](../../zak/converted/scripts_flat/LFv2_0007/SCv2_0024.txt); entry `0000`.

```text
[0000] cutscene();
[0001] unless (!Var[45]) goto 000C;
[0005] startScript(25);
[0007] breakHere();
[0008] unless (!Var[45]) goto 0007;
[000C] VAR_RESULT = getBitVar(848,VAR_EGO);
[0011] unless (VAR_RESULT) goto 0058;
[0015] doSentence(253,184,0,1);
[001C] breakHere();
[001D] unless (Var[51] == 255) goto 001C;
[0023] print(10,"You can't buy somethin with no CashCard!");
[0048] waitForMessage();
[0049] animateActor(VAR_EGO,246);
[004C] printEgo("Oh yeah!");
[0058] Var[45] = VAR_ACTIVE_OBJECT1;
[005B] VAR_RESULT = getObjectOwner(Var[45]);
[005E] unless (VAR_RESULT == VAR_EGO) goto 007B;
[0063] print(10,"You already own that!");
[007B] printEgo("I want to buy the \x06\x2D\x06.");
[008D] doSentence(253,182,0,1);
[0094] beginOverride();
[0098] delay(60);
[009C] doSentence(253,185,0,1);
[00A3] waitForActor(10);
[00A5] breakHere();
[00A6] setState08(Var[45]);
[00A8] setState02(Var[45]);
[00AA] breakHere();
[00AB] walkActorTo(10,22,47);
[00AF] print(10,"Come over here.");
[00BF] breakHere();
[00C0] walkActorToObject(VAR_EGO,181);
[00C4] waitForActor(10);
[00C6] animateActor(10,250);
[00C9] waitForActor(VAR_EGO);
[00CB] waitForMessage();
[00CC] print(10,"That'll be \x04\x2F\x04 bucks, friend.");
[00E8] waitForMessage();
[00E9] VAR_RESULT = getBitVar(848,VAR_EGO);
[00EE] unless (VAR_RESULT) goto 014B;
[00F2] printEgo("Uh, I don't have my CashCard with me.");
[0112] waitForMessage();
[0113] print(10,"Can't ya read? `CashCards only!` Come\x01\x01back when ya have it!");
[014B] printEgo("Here's my CashCard.");
[015E] waitForMessage();
[015F] print(10,"Thanks.");
[0169] waitForMessage();
[016A] animateActor(10,247);
[016D] delay(60);
[0171] startSound(84);
[0173] delay(120);
[0177] animateActor(10,246);
[017A] Var[14] = VAR_EGO;
[017D] Var[14] += 61;
[0181] unless (Var[47] > Var[14]) goto 01C0;
[0186] print(10,"Sorry, ya don't have enough money.\x01\x01Here's yer card back.");
[01B9] delay(120);
[01C0] print(10,"Here\x02\x02");
[01C8] unless (Var[45] == 42) goto 01E1;
[01CE] print(10,", and good luck!");
[01E1] print(10,".");
[01E5] waitForMessage();
[01E6] Var[49] = 181;
[01EA] unless (VAR_OVERRIDE) goto 0244;
[01EE] animateActor(10,255);
[01F1] animateActor(VAR_EGO,255);
[01F4] putActor(10,22,47);
[01F8] animateActor(10,250);
[01FB] putActorAtObject(VAR_EGO,181);
[01FF] animateActor(VAR_EGO,251);
[0202] startScript(5);
[0204] setState08(Var[45]);
[0206] setState02(Var[45]);
[0208] breakHere();
[0209] VAR_RESULT = getBitVar(848,VAR_EGO);
[020E] unless (VAR_RESULT) goto 0215;
[0215] Var[14] = VAR_EGO;
[0218] Var[14] += 61;
[021C] unless (Var[47] > Var[14]) goto 0224;
[0224] unless (Var[45] != 42) goto 0244;
[022A] print(10,"It's a bargain at \x04\x2F\x04 bucks!");
[0244] unless (getState01(Var[45])) goto 024D;
[0248] pickupObject(Var[45]);
[024D] setOwnerOf(Var[46],VAR_EGO);
[0250] Var[14] = VAR_EGO;
[0253] Var[14] += 61;
[0257] Var[Var[14]] -= Var[47];
[025A] unless (Var[45] == 34) goto 027A;
[0260] Var[66] = 35;
[0264] VAR_RESULT = getObjectOwner(Var[66]);
[0267] unless (VAR_RESULT == 15) goto 0272;
[026D] pickupObject(Var[66]);
[026F] setOwnerOf(Var[66],12);
[0272] Var[66]++;
[0274] unless (Var[66] > 38) goto 0264;
[027A] unless (Var[45] == 39) goto 02AA;
[0280] waitForMessage();
[0281] print(10,"That's my last \x06\x2D\x06 with transparent\x01\x01gloves.");
[02AA] unless (Var[45] == 42) goto 02CD;
[02B0] Var[45] = Var[234];
[02B3] setBitVar(1461,0,Var[235]);
[02B8] Var[119] = 2;
[02BC] startScript(15);
[02BE] startScript(73);
[02C0] breakHere();
[02C1] VAR_RESULT = getBitVar(1470,0);
[02C6] unless (!VAR_RESULT) goto 02C0;
[02CD] Var[45] = Var[234];
[02D3] waitForMessage();
[02D4] startScript(25);
[02D6] walkActorTo(VAR_EGO,24,60);
[02DA] waitForActor(VAR_EGO);
[02DC] printEgo("How embarrassing!");
[02EE] endCutscene();
[02EF] stopObjectCode();
```

## SCv2_0025 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0007/SCv2_0025.txt](../../zak/converted/scripts_flat/LFv2_0007/SCv2_0025.txt); entry `0000`.

```text
[0000] Var[50] = Var[235];
[0003] unless (Var[45]) goto 0025;
[0007] unless (getState01(Var[45])) goto 0011;
[000B] setOwnerOf(Var[45],0);
[000E] setOwnerOf(Var[45],15);
[0011] doSentence(253,185,0,1);
[0018] waitForActor(10);
[001A] breakHere();
[001B] clearState02(Var[45]);
[001D] clearState08(Var[45]);
[001F] Var[45] = Var[234];
[0022] animateActor(10,246);
[0025] Var[50] = Var[234];
[0028] stopObjectCode();
```

## SCv2_0026 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0007/SCv2_0026.txt](../../zak/converted/scripts_flat/LFv2_0007/SCv2_0026.txt); entry `0000`.

```text
[0000] breakHere();
[0001] unless (!Var[50]) goto 0000;
[0005] VAR_RESULT = getBitVar(848,VAR_EGO);
[000A] unless (VAR_RESULT) goto 0054;
[000E] cursorCommand(15, 2);
[0011] doSentence(253,184,0,1);
[0018] breakHere();
[0019] unless (Var[51] == 255) goto 0018;
[001F] print(10,"You need a CashCard to sell somethin'!");
[0042] waitForMessage();
[0043] animateActor(VAR_EGO,246);
[0046] printEgo("Whoops!");
[004F] cursorCommand(247, 1);
[0052] stopScript(0);
[0054] Var[50] = Var[235];
[0057] VAR_RESULT = getDist(VAR_EGO,182);
[005C] unless (VAR_RESULT > 4) goto 008F;
[0062] doSentence(253,184,0,1);
[0069] breakHere();
[006A] unless (Var[51] == 255) goto 0069;
[0070] print(10,"Ya gotta go to the Sell window.");
[008F] Var[49] = 182;
[0093] cutscene();
[0094] walkActorToObject(VAR_EGO,182);
[0098] unless (Var[45]) goto 00BE;
[009C] print(10,"Someone will be with ya in a moment.");
[00BC] startScript(25);
[00BE] breakHere();
[00BF] unless (!Var[45]) goto 00BE;
[00C3] Var[47] = Var[234];
[00C6] Var[45] = VAR_ACTIVE_OBJECT1;
[00C9] Var[52] = Var[45];
[00CC] doSentence(253,182,0,1);
[00D3] beginOverride();
[00D7] walkActorTo(10,16,47);
[00DB] waitForActor(10);
[00DD] animateActor(10,246);
[00E0] printEgo("I'd like to sell this to you.");
[00F9] waitForMessage();
[00FA] VAR_RESULT = getObjectOwner(Var[52]);
[00FD] unless (VAR_RESULT != VAR_EGO) goto 0139;
[0102] print(10,"Hey, what are ya trying to pull! I'm\x01\x01not gonna buy my own \x06\x2D\x06!");
[0139] print(10,"Hmmm.");
[0141] unless (Var[45] == 21) goto 014F;
[0147] Var[45] = 188;
[014B] Var[47] = 50;
[014F] unless (Var[45] == 34) goto 0159;
[0155] Var[47] = 30;
[0159] unless (Var[45] == 81) goto 0167;
[015F] Var[45] = 185;
[0163] Var[47] = 500;
[0167] unless (Var[45] == 33) goto 0175;
[016D] Var[45] = 183;
[0171] Var[47] = 60;
[0175] unless (Var[45] == 56) goto 0183;
[017B] Var[45] = 184;
[017F] Var[47] = 60;
[0183] unless (Var[45] == 55) goto 0191;
[0189] Var[45] = 186;
[018D] Var[47] = 250;
[0191] unless (Var[45] == 26) goto 020C;
[0197] Var[45] = 187;
[019B] waitForMessage();
[019C] unless (getState04(26)) goto 01F2;
[01A1] print(10,"Oh!\x03\x03Wow!\x03\x03What a beautiful silver sculpture!\x01\x01I'm adding this to my art collection!");
[01EB] Var[47] = 1500;
[01F2] print(10,"An antique silver \x06\x2D\x06!");
[0207] Var[47] = 100;
[020B] waitForMessage();
[020C] unless (Var[45] == 41) goto 0216;
[0212] Var[47] = 99;
[0216] unless (Var[45] == 40) goto 0227;
[021C] Var[47] = 2;
[0220] doSentence(7,40,0,1);
[0227] unless (Var[45] == 39) goto 0238;
[022D] Var[47] = 100;
[0231] doSentence(7,39,0,1);
[0238] unless (Var[45] == 43) goto 0249;
[023E] Var[47] = 10;
[0242] doSentence(7,43,0,1);
[0249] unless (Var[45] == 44) goto 0253;
[024F] Var[47] = 50;
[0253] unless (VAR_OVERRIDE) goto 0261;
[0257] putActor(10,16,47);
[025B] animateActor(10,250);
[0261] beginOverride();
[0265] waitForMessage();
[0266] delay(60);
[026A] unless (!Var[47]) goto 0284;
[026E] print(10,"I don't want yer \x06\x2D\x06.");
[0284] print(10,"Gimme yer CashCard.");
[0298] waitForMessage();
[0299] VAR_RESULT = getBitVar(848,VAR_EGO);
[029E] unless (VAR_RESULT) goto 02FD;
[02A2] printEgo("Uh, I don't have it with me.");
[02BA] waitForMessage();
[02BB] print(10,"I only deal in CashCards. Come back when\x01\x01ya have one.");
[02EA] waitForMessage();
[02EB] walkActorTo(VAR_EGO,20,60);
[02EF] waitForActor(VAR_EGO);
[02F1] printEgo("Whoops!");
[02FD] printEgo("Here.");
[0304] waitForMessage();
[0305] print(10,"Thanks.");
[030F] waitForMessage();
[0310] animateActor(10,247);
[0313] delay(60);
[0317] startSound(84);
[0319] delay(120);
[031D] unless (VAR_OVERRIDE) goto 0343;
[0321] animateActor(10,250);
[0324] breakHere();
[0325] VAR_RESULT = getObjectOwner(Var[52]);
[0328] unless (VAR_RESULT != VAR_EGO) goto 0330;
[0330] VAR_RESULT = getBitVar(848,VAR_EGO);
[0335] unless (VAR_RESULT) goto 033C;
[033C] unless (!Var[47]) goto 0343;
[0343] setOwnerOf(Var[52],14);
[0346] unless (Var[52] == 34) goto 036A;
[034C] setState04(34);
[034F] Var[66] = 35;
[0353] VAR_RESULT = getObjectOwner(Var[66]);
[0356] unless (VAR_RESULT == 12) goto 0362;
[035C] setOwnerOf(Var[66],0);
[035F] setOwnerOf(Var[66],15);
[0362] Var[66]++;
[0364] unless (Var[66] > 38) goto 0353;
[036A] animateActor(10,246);
[036D] waitForActor(10);
[036F] print(10,"Here's \x04\x2F\x04 bucks for it.\x01\x01A pleasure doin' business with ya.");
[03A4] Var[14] = VAR_EGO;
[03A7] Var[14] += 61;
[03AB] Var[Var[14]] += Var[47];
[03AE] unless (Var[47] == 1500) goto 03BD;
[03B4] setOwnerOf(Var[52],0);
[03B7] Var[45] = Var[234];
[03BD] startScript(25);
[03C2] unless (!VAR_OVERRIDE) goto 03C7;
[03C6] waitForMessage();
[03C7] animateActor(10,247);
[03CA] Var[45] = Var[234];
[03CD] endCutscene();
[03CE] Var[50] = Var[234];
[03D1] stopObjectCode();
```

## SCv2_0027 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0007/SCv2_0027.txt](../../zak/converted/scripts_flat/LFv2_0007/SCv2_0027.txt); entry `0000`.

```text
[0000] breakHere();
[0001] unless (!Var[50]) goto 0000;
[0005] waitForMessage();
[0006] VAR_RESULT = isScriptRunning(24);
[0009] unless (!VAR_RESULT) goto 0079;
[000D] VAR_RESULT = getDist(VAR_EGO,181);
[0012] unless (VAR_RESULT < 3) goto 0079;
[0018] unless (Var[49] != 181) goto 0079;
[001E] Var[49] = 181;
[0022] walkActorTo(10,22,47);
[0026] waitForActor(10);
[0028] animateActor(10,246);
[002B] waitForActor(10);
[002D] waitForMessage();
[002E] VAR_RESULT = getDist(VAR_EGO,181);
[0033] unless (VAR_RESULT < 3) goto 0079;
[0039] VAR_RESULT = getBitVar(848,VAR_EGO);
[003E] unless (VAR_RESULT) goto 0061;
[0042] print(10,"I told ya, no card, no bizness.");
[0061] print(10,"Show me what ya wanna buy.");
[0079] VAR_RESULT = isScriptRunning(26);
[007C] unless (!VAR_RESULT) goto 00E3;
[0080] VAR_RESULT = getDist(VAR_EGO,182);
[0085] unless (VAR_RESULT < 3) goto 00E3;
[008B] unless (Var[49] != 182) goto 00E3;
[0091] walkActorTo(10,16,47);
[0095] waitForActor(10);
[0097] animateActor(10,246);
[009A] waitForActor(10);
[009C] waitForMessage();
[009D] VAR_RESULT = getDist(VAR_EGO,182);
[00A2] unless (VAR_RESULT < 3) goto 00E3;
[00A8] Var[49] = 182;
[00AC] VAR_RESULT = getBitVar(848,VAR_EGO);
[00B1] unless (VAR_RESULT) goto 00D5;
[00B5] print(10,"Can't help ya without yer card.");
[00D5] print(10,"Can I help ya?");
[00E3] VAR_RESULT = getDist(VAR_EGO,181);
[00E8] unless (VAR_RESULT > 2) goto 00FC;
[00EE] VAR_RESULT = getDist(VAR_EGO,182);
[00F3] unless (VAR_RESULT > 2) goto 00FC;
[00F9] Var[49] = Var[234];
[00FC] breakHere();
```

## SCv2_0072 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0007/SCv2_0072.txt](../../zak/converted/scripts_flat/LFv2_0007/SCv2_0072.txt); entry `0000`.

```text
[0000] cutscene();
[0001] Var[50] = Var[235];
[0004] walkActorTo(10,49,47);
[0008] waitForActor(10);
[000A] animateActor(10,246);
[000D] animateActor(1,247);
[0010] VAR_RESULT = getBitVar(1458,0);
[0015] unless (VAR_RESULT) goto 0102;
[0019] Var[232]++;
[001B] unless (Var[232] > 4) goto 009B;
[0021] print(10,"Friend, ya won the big one a few too\x01\x01many times. Now, I'm not accusin' ya^\x03\x03I'll pay up this last time, but I ain't\x01\x01sellin' ya another ticket.");
[009B] clearState04(237);
[009E] Var[66] = Var[234];
[00A1] Var[67] = getRandomNr(9);
[00A4] Var[14] = Var[66];
[00A7] Var[14] += 212;
[00AB] Var[Var[14]] = Var[67];
[00AE] Var[66]++;
[00B0] unless (Var[66] > 3) goto 00A1;
[00B6] Var[54] = 10000;
[00BA] print(10,"Congratulations lucky fella! Ya won the\x01\x01big lotto prize! 10,000 Smackeroos!");
[0102] Var[66] = getRandomNr(9);
[0105] unless (Var[66] == 7) goto 01F1;
[010B] Var[66] = getRandomNr(99);
[010E] Var[66] += Var[235];
[0111] Var[54] = Var[234];
[0114] Var[67] = Var[234];
[0117] Var[54] += 10;
[011B] Var[67]++;
[011D] unless (Var[67] > Var[66]) goto 0117;
[0122] print(10,"Hey bud, yer lotto ticket won ya $\x04\x36\x04!");
[0143] Var[62] += Var[54];
[0146] beginOverride();
[014A] waitForMessage();
[014B] walkActorTo(10,16,47);
[014F] print(10,"C'mere, I'll give ya yer winnin's.");
[016F] breakHere();
[0170] breakHere();
[0171] walkActorToObject(1,182);
[0175] waitForActor(10);
[0177] animateActor(10,250);
[017A] waitForActor(1);
[017C] waitForMessage();
[017D] print(10,"Gimme that ticket and yer CashCard.");
[019E] waitForMessage();
[019F] animateActor(10,247);
[01A2] delay(60);
[01A6] startSound(84);
[01A8] delay(120);
[01AC] animateActor(10,246);
[01AF] waitForActor(10);
[01B1] unless (Var[232] < 5) goto 01D2;
[01B7] print(10,"Ya sure are one lucky guy!");
[01D2] print(10,"So tell me, what's yer secret?");
[01F1] print(10,"Sorry bud, but yer lotto tick's a dud.\x01\x01Give it here and I'll toss it for ya.");
[0231] beginOverride();
[0235] delay(120);
[0239] Var[51] = getActorX(10);
[023C] Var[51]++;
[023E] walkActorTo(1,Var[51],49);
[0242] waitForActor(1);
[0244] animateActor(1,247);
[0247] waitForMessage();
[0248] unless (VAR_OVERRIDE) goto 0252;
[024C] animateActor(10,255);
[024F] animateActor(10,250);
[0252] setOwnerOf(42,0);
[0256] setOwnerOf(42,15);
[025A] endCutscene();
[025B] stopObjectCode();
```

## SCv2_0073 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0007/SCv2_0073.txt](../../zak/converted/scripts_flat/LFv2_0007/SCv2_0073.txt); entry `0000`.

```text
[0000] setBitVar(1455,0,Var[234]);
[0005] delay(14400);
[0009] setBitVar(1455,0,Var[235]);
[000E] stopObjectCode();
```

## SCv2_0138 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0007/SCv2_0138.txt](../../zak/converted/scripts_flat/LFv2_0007/SCv2_0138.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_OBJECT1 == 46) goto 0051;
[0006] unless (VAR_ACTIVE_VERB == 12) goto 001C;
[000C] printEgo("Old Spitinureye");
[001C] unless (VAR_ACTIVE_VERB == 11) goto 0051;
[0022] unless (VAR_EGO == 1) goto 0046;
[0028] printEgo("Glug, glug.\x03\x03It tastes AWFUL!");
[0046] printEgo("No thanks.");
[0051] unless (VAR_ACTIVE_OBJECT1 == 45) goto 00F5;
[0057] printEgo("It's `How To Raise Your Consciousness\x01\x01And Lower Your Golf Scores.`");
[0092] waitForMessage();
[0093] printEgo("It was written by a guru in Nepal named\x01\x01Swami Holanwanda. I'\x02\x02");
[00C8] unless (VAR_EGO == 2) goto 00E3;
[00CE] printEgo("ve already read it.");
[00E3] printEgo("ll read it later.");
[00F3] stopScript(0);
[00F5] unless (VAR_ACTIVE_OBJECT1 == 36) goto 0143;
[00FB] unless (VAR_ACTIVE_OBJECT2 == 14) goto 0141;
[0101] unless (Var[138] == Var[234]) goto 011C;
[0106] printEgo("The \x06\x09\x06 will get wet.");
[011C] setObjectName(14,"taped fish bowl");
[012F] setState04(14);
[0132] setOwnerOf(VAR_ACTIVE_OBJECT1,0);
[0135] unless (Var[167] == 56) goto 0141;
[013B] Var[167] = 64;
[013F] startScript(150);
[0141] stopScript(0);
[0143] unless (VAR_ACTIVE_OBJECT1 == 39) goto 0227;
[0149] unless (VAR_ACTIVE_VERB == 6) goto 01BB;
[014F] VAR_RESULT = getObjectOwner(VAR_ACTIVE_OBJECT1);
[0152] unless (VAR_RESULT == 1) goto 01B3;
[0158] Var[66] = getActorCostume(1);
[015B] unless (Var[66] == 1) goto 0165;
[0161] ActorOps(1,[Costume(37)]);
[0165] unless (Var[66] == 5) goto 016F;
[016B] ActorOps(1,[Costume(38)]);
[016F] unless (Var[66] == 9) goto 0179;
[0175] ActorOps(1,[Costume(39)]);
[0179] startScript(150);
[017B] Var[172] = 37;
[017F] Var[176] = 38;
[0183] Var[180] = 39;
[0187] unless (VAR_ROOM == 11) goto 0195;
[018D] unless (!getState08(263)) goto 0195;
[0192] setState08(774);
[0195] setState04(VAR_ACTIVE_OBJECT1);
[0197] printEgo("It's uncomfortably tight!");
[01B3] printEgo("Not me!");
[01BB] unless (VAR_ACTIVE_VERB == 12) goto 01CC;
[01C1] printEgo("size small");
[01CC] unless (VAR_ACTIVE_VERB == 7) goto 01D5;
[01D5] unless (VAR_ACTIVE_VERB == 3) goto 0227;
[01DB] startScript(20);
[01DD] unless (VAR_EGO == 1) goto 0227;
[01E3] setBitVar(1506,0,Var[234]);
[01E8] Var[66] = getActorCostume(1);
[01EB] unless (Var[66] == 37) goto 01F5;
[01F1] ActorOps(1,[Costume(1)]);
[01F5] unless (Var[66] == 38) goto 01FF;
[01FB] ActorOps(1,[Costume(5)]);
[01FF] unless (Var[66] == 39) goto 0209;
[0205] ActorOps(1,[Costume(9)]);
[0209] Var[172] = 1;
[020D] Var[176] = 5;
[0211] Var[180] = 9;
[0215] startScript(150);
[0217] unless (VAR_ROOM == 11) goto 0225;
[021D] unless (!getState08(263)) goto 0225;
[0222] clearState08(774);
[0225] clearState04(VAR_ACTIVE_OBJECT1);
[0227] unless (VAR_ACTIVE_OBJECT1 == 49) goto 0253;
[022D] unless (VAR_ACTIVE_VERB == 11) goto 0251;
[0233] printEgo("Ouch! It burned up in my hands!");
[024E] setOwnerOf(VAR_ACTIVE_OBJECT2,0);
[0251] stopScript(0);
[0253] unless (VAR_ACTIVE_OBJECT1 == 42) goto 02B9;
[0259] unless (VAR_ACTIVE_VERB == 12) goto 028F;
[025F] printEgo("Super Lucky Lotto - \x02\x02");
[0272] Var[67] = Var[234];
[0275] Var[14] = Var[67];
[0278] Var[14] += 208;
[027C] Var[66] = Var[14];
[027F] printEgo("\x04\x42\x04 \x02\x02");
[0285] Var[67]++;
[0287] unless (Var[67] > 3) goto 0275;
[028D] printEgo("");
[028F] unless (VAR_ACTIVE_VERB == 3) goto 02B9;
[0295] unless (VAR_ACTIVE_OBJECT2 <= 13) goto 02B7;
[029B] print(VAR_ACTIVE_OBJECT2,"No thanks, I don't gamble.");
[02B7] chainScript(3);
[02B9] unless (VAR_ACTIVE_OBJECT1 == 34) goto 0363;
[02BF] unless (VAR_ACTIVE_VERB == 1) goto 0308;
[02C5] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 0308;
[02C9] setObjectName(VAR_ACTIVE_OBJECT1,"open tool kit");
[02D9] clearState04(VAR_ACTIVE_OBJECT1);
[02DB] startSound(26);
[02DD] unless (!getState04(35)) goto 02FE;
[02E2] printEgo("Wow! Look at all this stuff!");
[02FB] setState04(35);
[02FE] Var[61] = VAR_EGO;
[0301] Var[67] = 12;
[0308] unless (VAR_ACTIVE_VERB == 2) goto 033F;
[030E] unless (!getState04(VAR_ACTIVE_OBJECT1)) goto 033F;
[0312] setState04(VAR_ACTIVE_OBJECT1);
[0314] setObjectName(VAR_ACTIVE_OBJECT1,"tool kit");
[031F] startSound(11);
[0321] Var[61] = 12;
[0325] Var[67] = VAR_EGO;
[0328] Var[66] = 35;
[032C] VAR_RESULT = getObjectOwner(Var[66]);
[032F] unless (VAR_RESULT == Var[67]) goto 0337;
[0334] setOwnerOf(Var[66],Var[61]);
[0337] Var[66]++;
[0339] unless (Var[66] > 38) goto 032C;
[033F] unless (VAR_ACTIVE_VERB == 11) goto 0363;
[0345] unless (getState04(VAR_ACTIVE_OBJECT1)) goto 0361;
[0349] printEgo("Maybe I should open it.");
[0361] chainScript(3);
[0363] stopObjectCode();
```
