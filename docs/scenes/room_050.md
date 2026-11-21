# Room 050 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0050/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0050/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] doSentence(253,706,0,1);
[000B] doSentence(250,769,0,1);
[0012] loadSound(16)
[0015] lockSound(16)
[0018] drawObject(770,255,255);
[001D] stopObjectCode();
```

## EXv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0050/ROv2/EXv2.txt](../../zak/converted/scripts_flat/LFv2_0050/ROv2/EXv2.txt); entry `0000`.

```text
[0000] clearState08(769);
[0003] clearState08(770);
[0006] unlockSound(16)
[0009] startScript(19);
[000B] print(255,"");
[000E] stopObjectCode();
```

## OCv2_0703 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0703.txt](../../zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0703.txt); entry `0013`.

```text
[0013] stopObjectCode();
```

## OCv2_0704 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0704.txt](../../zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0704.txt); entry `0013`.

```text
[0013] stopObjectCode();
```

## OCv2_0705 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0705.txt](../../zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0705.txt); entry `0016`.

```text
[0016] Var[66] = Var[234];
[0019] VerbOps(Delete(Var[66]););
[001C] Var[66]++;
[001E] unless (Var[66] > 14) goto 0019;
[0024] cursorCommand(0, 0);
[0027] stopObjectCode();
```

## OCv2_0705 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0705.txt](../../zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0705.txt); entry `0015`.

```text
[0015] stopObjectCode();
```

## OCv2_0706 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0706.txt](../../zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0706.txt); entry `0016`.

```text
[0016] clearState08(703);
[0019] clearState08(704);
[001C] clearState08(705);
[001F] clearState08(706);
[0022] setState02(706);
[0025] clearState08(707);
[0028] stopObjectCode();
```

## OCv2_0706 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0706.txt](../../zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0706.txt); entry `0015`.

```text
[0015] stopObjectCode();
```

## OCv2_0707 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0707.txt](../../zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0707.txt); entry `0013`.

```text
[0013] unless (!Var[66]) goto 0026;
[0017] VerbOps(New-35(0,19,0,0,"Game A@@"));
[0026] unless (Var[66] == Var[235]) goto 003A;
[002B] VerbOps(New-36(8,19,1,0,"Game B@@"));
[003A] unless (Var[66] == 2) goto 004F;
[0040] VerbOps(New-37(16,19,2,0,"Game C@@"));
[004F] unless (Var[66] == 3) goto 0064;
[0055] VerbOps(New-38(24,19,3,0,"Game D@@"));
[0064] unless (Var[66] == 4) goto 0079;
[006A] VerbOps(New-39(32,19,4,0,"Game E@@"));
[0079] unless (Var[66] == 5) goto 008E;
[007F] VerbOps(New-40(0,21,5,0,"Game F@@"));
[008E] unless (Var[66] == 6) goto 00A3;
[0094] VerbOps(New-41(8,21,6,0,"Game G@@"));
[00A3] unless (Var[66] == 7) goto 00B8;
[00A9] VerbOps(New-42(16,21,7,0,"Game H@@"));
[00B8] unless (Var[66] == 8) goto 00CD;
[00BE] VerbOps(New-43(24,21,8,0,"Game I@@"));
[00CD] unless (Var[66] == 9) goto 00E2;
[00D3] VerbOps(New-44(32,21,9,0,"Game J@@"));
[00E2] stopObjectCode();
```

## OCv2_0708 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0708.txt](../../zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0708.txt); entry `0013`.

```text
[0013] unless (!Var[66]) goto 0026;
[0017] VerbOps(New-35(0,19,0,0,"Game A*@"));
[0026] unless (Var[66] == Var[235]) goto 003A;
[002B] VerbOps(New-36(8,19,1,0,"Game B*@"));
[003A] unless (Var[66] == 2) goto 004F;
[0040] VerbOps(New-37(16,19,2,0,"Game C*@"));
[004F] unless (Var[66] == 3) goto 0064;
[0055] VerbOps(New-38(24,19,3,0,"Game D*@"));
[0064] unless (Var[66] == 4) goto 0079;
[006A] VerbOps(New-39(32,19,4,0,"Game E*@"));
[0079] unless (Var[66] == 5) goto 008E;
[007F] VerbOps(New-40(0,21,5,0,"Game F*@"));
[008E] unless (Var[66] == 6) goto 00A3;
[0094] VerbOps(New-41(8,21,6,0,"Game G*@"));
[00A3] unless (Var[66] == 7) goto 00B8;
[00A9] VerbOps(New-42(16,21,7,0,"Game H*@"));
[00B8] unless (Var[66] == 8) goto 00CD;
[00BE] VerbOps(New-43(24,21,8,0,"Game I*@"));
[00CD] unless (Var[66] == 9) goto 00E2;
[00D3] VerbOps(New-44(32,21,9,0,"Game J*@"));
[00E2] stopObjectCode();
```

## OCv2_0769 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0769.txt](../../zak/converted/scripts_flat/LFv2_0050/ROv2/OCv2_0769.txt); entry `0013`.

```text
[0013] delay(720);
[0017] drawObject(769,255,255);
[001C] breakHere();
[001D] breakHere();
[001E] drawObject(770,255,255);
[0023] breakHere();
[0024] breakHere();
[0025] drawObject(769,255,255);
[002A] breakHere();
[002B] breakHere();
[002C] drawObject(770,255,255);
```

## SCv2_0007 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0050/SCv2_0007.txt](../../zak/converted/scripts_flat/LFv2_0050/SCv2_0007.txt); entry `0000`.

```text
[0000] Var[122] = isScriptRunning(122);
[0003] clearState08(708);
[0006] clearState02(703);
[0009] stopScript(122);
[000B] cutscene();
[000C] loadRoom(50);
[000E] unless (Var[122]) goto 001A;
[0012] drawObject(708,255,255);
[0017] setState02(703);
[001A] doSentence(253,705,0,1);
[0021] cursorCommand(159, 3);
[0024] Var[117] = 4;
[0028] Var[243] = saveLoadGame(32);
[002B] startScript(8);
[002D] beginOverride();
[0031] VAR_ACTIVE_OBJECT1 = Var[234];
[0034] breakHere();
[0035] unless (VAR_ACTIVE_OBJECT1) goto 0034;
[0039] Var[117] = 255;
[003D] print(255,"");
[0040] drawObject(VAR_ACTIVE_OBJECT1,255,255);
[0044] startSound(16);
[0046] Var[121] = VAR_ACTIVE_OBJECT1;
[0049] breakHere();
[004A] breakHere();
[004B] unless (Var[121] == 705) goto 0054;
[0054] VAR_ACTIVE_OBJECT1 = Var[234];
[0057] VAR_SENTENCE_OBJECT1 = Var[234];
[005A] VAR_ACTIVE_VERB = Var[234];
[005D] Var[122] = 10;
[0061] Var[67] = Var[234];
[0064] Var[66] = 192;
[0068] Var[66] += Var[67];
[006B] Var[61] = saveLoadGame(Var[66]);
[006E] unless (Var[61] == 6) goto 007E;
[0074] setBitVar(4048,Var[67],Var[235]);
[0079] Var[122]--;
[007E] setBitVar(4048,Var[67],Var[234]);
[0083] Var[67]++;
[0085] unless (Var[67] > 9) goto 0064;
[008B] Var[244] = saveLoadGame(7);
[008E] unless (Var[244] > Var[122]) goto 0096;
[0093] Var[244] = Var[122];
[0096] Var[61] = Var[234];
[0099] Var[66] = Var[234];
[009C] VAR_RESULT = getBitVar(4048,Var[66]);
[00A1] unless (VAR_RESULT) goto 00AE;
[00A5] doSentence(253,708,0,1);
[00AC] Var[61]++;
[00AE] Var[66]++;
[00B0] unless (Var[66] > 9) goto 009C;
[00B6] unless (Var[121] == 703) goto 00E7;
[00BC] unless (Var[244]) goto 00E7;
[00C0] Var[67] = Var[244];
[00C3] Var[66] = Var[234];
[00C6] VAR_RESULT = getBitVar(4048,Var[66]);
[00CB] unless (!VAR_RESULT) goto 00DF;
[00CF] doSentence(253,707,0,1);
[00D6] Var[67]--;
[00D8] unless (!Var[67]) goto 00DF;
[00DF] Var[66]++;
[00E1] unless (Var[66] > 9) goto 00C6;
[00E7] unless (Var[121] == 704) goto 00FF;
[00ED] unless (!Var[61]) goto 00FF;
[00F1] Var[117] = 8;
[00F5] doSentence(253,706,0,1);
[00FF] cursorCommand(0, 0);
[0102] breakHere();
[0103] unless (VAR_ACTIVE_OBJECT1) goto 0118;
[0107] doSentence(253,706,0,1);
[010E] doSentence(253,705,0,1);
[0118] unless (VAR_ACTIVE_VERB >= 35) goto 0102;
[011E] Var[118] = VAR_ACTIVE_VERB;
[0121] Var[118] -= 35;
[0125] startSound(16);
[0127] Var[119]++;
[0129] breakHere();
[012A] breakHere();
[012B] unless (Var[121] == 703) goto 0158;
[0131] doSentence(253,705,0,1);
[0138] Var[66] = Var[118];
[013B] Var[66] += 128;
[013F] Var[117] = saveLoadGame(Var[66]);
[0142] unless (Var[117] == 0) goto 0158;
[0148] VAR_RESULT = getBitVar(4048,Var[118]);
[014D] unless (!VAR_RESULT) goto 0158;
[0151] Var[244]--;
[0153] setBitVar(4048,Var[118],Var[235]);
[0158] unless (Var[121] == 704) goto 0172;
[015E] stopScript(8);
[0160] Var[118] += 64;
[0164] Var[117] = saveLoadGame(Var[118]);
[0167] unless (Var[117] == 3) goto 0170;
[0170] startScript(8);
[0172] doSentence(253,706,0,1);
[0179] doSentence(253,705,0,1);
[0183] stopScript(8);
[0185] endCutscene();
[0186] VAR_RESULT = getActorCostume(1);
[0189] unless (VAR_RESULT == 30) goto 0191;
[018F] startScript(108);
[0191] stopObjectCode();
```

## SCv2_0008 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0050/SCv2_0008.txt](../../zak/converted/scripts_flat/LFv2_0050/SCv2_0008.txt); entry `0000`.

```text
[0000] breakHere();
[0001] Var[119] = Var[117];
[0004] unless (Var[117] == 0) goto 0023;
[000A] print(255,"           The game was saved.");
[0023] unless (Var[117] == 2) goto 0044;
[0029] print(255,"         The game was NOT saved.");
[0044] unless (Var[117] == 5) goto 0065;
[004A] print(255,"        The game was NOT loaded.");
[0065] unless (Var[117] == 8) goto 008D;
[006B] print(255,"  There are no saved games on the disk.");
[008D] unless (Var[117] == 4) goto 00D9;
[0093] unless (Var[243]) goto 00D6;
[0097] unless (Var[243] <= 2) goto 00D6;
[009D] print(255," Put a save-load game disk in Drive \x02\x02");
[00BE] unless (Var[243] == Var[235]) goto 00C8;
[00C3] print(255,"A.");
[00C8] unless (Var[243] == 2) goto 00D3;
[00CE] print(255,"B.");
[00D6] print(255,"");
[00D9] Var[120] = Var[235];
[00DC] delay(10);
[00E0] unless (Var[119] != Var[117]) goto 00E8;
[00E8] Var[120]++;
[00EA] unless (Var[120] > 35) goto 00DC;
```
