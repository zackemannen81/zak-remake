# Room 052 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/ENv2.txt); entry `0000`.

```text
[0000] lights(11,0,0);
[0004] loadSound(44)
[0007] unless (Var[119] == 1) goto 0027;
[000D] RoomColor(6,8);
[0011] RoomColor(14,7);
[0015] clearState08(724);
[0018] clearState08(725);
[001B] clearState08(726);
[001E] clearState02(722);
[0021] clearState02(723);
[0027] unless (Var[119] == 2) goto 0044;
[002D] setBitVar(1458,0,Var[235]);
[0032] setState08(724);
[0035] setState08(725);
[0038] setState08(726);
[003B] setState02(722);
[003E] setState02(723);
[0041] /* goto 0044; */
[0044] stopObjectCode();
```

## OCv2_0712 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0712.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0712.txt); entry `001D`.

```text
[001D] startSound(44);
[001F] setState08(VAR_ACTIVE_OBJECT1);
[0021] Var[121] = VAR_ACTIVE_OBJECT1;
[0024] Var[121] -= 712;
[0028] Var[120]++;
[002A] Var[122]++;
[002C] breakHere();
[002D] unless (Var[121] == 10) goto 003B;
[0033] print(255,"*\x02\x02");
[003B] unless (Var[121] == 11) goto 0049;
[0041] print(255,"#\x02\x02");
[0049] print(255,"\x04\x79\x04\x02\x02");
[004F] clearState08(VAR_ACTIVE_OBJECT1);
[0051] breakHere();
[0052] Var[122] = Var[234];
[0055] stopObjectCode();
```

## OCv2_0712 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0712.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0712.txt); entry `0015`.

```text
[0015] doSentence(253,713,0,1);
[001C] stopObjectCode();
```

## OCv2_0713 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0713.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0713.txt); entry `001D`.

```text
[001D] unless (!Var[122]) goto 0028;
[0021] doSentence(253,712,0,1);
[0028] stopObjectCode();
```

## OCv2_0713 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0713.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0713.txt); entry `0015`.

```text
[0015] doSentence(253,713,0,1);
[001C] stopObjectCode();
```

## OCv2_0714 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0714.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0714.txt); entry `0013`.

```text
[0013] doSentence(253,713,0,1);
[001A] stopObjectCode();
```

## OCv2_0715 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0715.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0715.txt); entry `0013`.

```text
[0013] doSentence(253,713,0,1);
[001A] stopObjectCode();
```

## OCv2_0716 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0716.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0716.txt); entry `0013`.

```text
[0013] doSentence(253,713,0,1);
[001A] stopObjectCode();
```

## OCv2_0717 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0717.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0717.txt); entry `0013`.

```text
[0013] doSentence(253,713,0,1);
[001A] stopObjectCode();
```

## OCv2_0718 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0718.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0718.txt); entry `0014`.

```text
[0014] doSentence(253,713,0,1);
[001B] stopObjectCode();
```

## OCv2_0719 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0719.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0719.txt); entry `0013`.

```text
[0013] doSentence(253,713,0,1);
[001A] stopObjectCode();
```

## OCv2_0720 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0720.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0720.txt); entry `0013`.

```text
[0013] doSentence(253,713,0,1);
[001A] stopObjectCode();
```

## OCv2_0721 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0721.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0721.txt); entry `0013`.

```text
[0013] doSentence(253,713,0,1);
[001A] stopObjectCode();
```

## OCv2_0722 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0722.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0722.txt); entry `0013`.

```text
[0013] doSentence(253,713,0,1);
[001A] stopObjectCode();
```

## OCv2_0723 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0723.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0723.txt); entry `0013`.

```text
[0013] doSentence(253,713,0,1);
[001A] stopObjectCode();
```

## OCv2_0727 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0727.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0727.txt); entry `001D`.

```text
[001D] startSound(44);
[001F] setState08(VAR_ACTIVE_OBJECT1);
[0021] Var[121] = VAR_ACTIVE_OBJECT1;
[0024] Var[121] -= 727;
[0028] Var[120]++;
[002A] Var[122]++;
[002C] breakHere();
[002D] print(255,"#\x02\x02");
[0032] clearState08(VAR_ACTIVE_OBJECT1);
[0034] breakHere();
[0035] Var[122] = Var[234];
[0038] stopObjectCode();
```

## OCv2_0727 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0727.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0727.txt); entry `0015`.

```text
[0015] doSentence(253,728,0,1);
[001C] stopObjectCode();
```

## OCv2_0728 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0728.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0728.txt); entry `001D`.

```text
[001D] unless (!Var[122]) goto 0028;
[0021] doSentence(253,727,0,1);
[0028] stopObjectCode();
```

## OCv2_0728 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0728.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0728.txt); entry `0015`.

```text
[0015] doSentence(253,728,0,1);
[001C] stopObjectCode();
```

## OCv2_0729 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0729.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0729.txt); entry `0013`.

```text
[0013] doSentence(253,728,0,1);
[001A] stopObjectCode();
```

## OCv2_0730 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0730.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0730.txt); entry `0013`.

```text
[0013] doSentence(253,728,0,1);
[001A] stopObjectCode();
```

## OCv2_0731 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0731.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0731.txt); entry `0013`.

```text
[0013] doSentence(253,728,0,1);
[001A] stopObjectCode();
```

## OCv2_0732 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0732.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0732.txt); entry `0014`.

```text
[0014] doSentence(253,728,0,1);
[001B] stopObjectCode();
```

## OCv2_0733 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0733.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0733.txt); entry `0013`.

```text
[0013] doSentence(253,728,0,1);
[001A] stopObjectCode();
```

## OCv2_0734 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0734.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0734.txt); entry `0013`.

```text
[0013] doSentence(253,728,0,1);
[001A] stopObjectCode();
```

## OCv2_0735 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0735.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0735.txt); entry `0013`.

```text
[0013] doSentence(253,728,0,1);
[001A] stopObjectCode();
```

## OCv2_0736 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0736.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0736.txt); entry `0013`.

```text
[0013] doSentence(253,728,0,1);
[001A] stopObjectCode();
```

## OCv2_0737 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0737.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0737.txt); entry `0013`.

```text
[0013] doSentence(253,728,0,1);
[001A] stopObjectCode();
```

## OCv2_0738 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0738.txt](../../zak/converted/scripts_flat/LFv2_0052/ROv2/OCv2_0738.txt); entry `0013`.

```text
[0013] doSentence(253,728,0,1);
[001A] stopObjectCode();
```

## SCv2_0015 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0052/SCv2_0015.txt](../../zak/converted/scripts_flat/LFv2_0052/SCv2_0015.txt); entry `0000`.

```text
[0000] setBitVar(1470,0,Var[235]);
[0005] Var[118] = Var[234];
[0008] cursorCommand(15, 2);
[000B] breakHere();
[000C] loadRoom(52);
[000E] setBitVar(1467,0,Var[234]);
[0013] unless (Var[119] == 3) goto 0058;
[0019] setCameraAt(20);
[001B] delay(30);
[001F] Var[66] = Var[242];
[0022] Var[66] += 64;
[0026] Var[67] = Var[234];
[0029] print(255,"Travel key is: Section \x04\xF3\x04 (\x07\x42\x07 \x04\xF1\x04)\x01\x01Enter code: \x02\x02");
[0058] setCameraAt(60);
[005A] unless (Var[119] == 2) goto 0078;
[0060] delay(60);
[0064] print(255,"Enter four digits: \x02\x02");
[0078] doSentence(STOP);
[007A] cursorCommand(31, 3);
[007D] Var[122] = Var[234];
[0080] Var[117] = Var[234];
[0083] Var[120] = Var[234];
[0086] breakHere();
[0087] unless (Var[120]) goto 0086;
[008B] unless (Var[119] == 2) goto 00AF;
[0091] Var[14] = Var[117];
[0094] Var[14] += 208;
[0098] Var[Var[14]] = Var[121];
[009B] Var[14] = Var[117];
[009E] Var[14] += 212;
[00A2] unless (Var[121] != Var[14]) goto 00AC;
[00A7] setBitVar(1458,0,Var[234]);
[00AF] Var[14] = Var[117];
[00B2] Var[14] += 139;
[00B6] unless (Var[121] != Var[14]) goto 00C0;
[00BB] setBitVar(1467,0,Var[235]);
[00C0] Var[117]++;
[00C2] unless (Var[117] > 3) goto 0083;
[00C8] cursorCommand(2, 0);
[00CB] setBitVar(1470,0,Var[234]);
[00D0] delay(90);
[00D4] print(255,"");
[00D7] unless (Var[119] != 3) goto 00E5;
[00DD] cursorCommand(247, 1);
[00E0] actorFollowCamera(VAR_EGO);
[00E5] VAR_RESULT = getBitVar(1467,0);
[00EA] unless (VAR_RESULT) goto 0110;
[00EE] Var[118]++;
[00F0] print(255,"INCORRECT ENTRY #\x04\x76\x04");
[0104] waitForMessage();
[0105] unless (Var[118] == 5) goto 010D;
[010B] chainScript(135);
[0110] print(255,"Successful entry.\x01\x01Thank you for flying Air Airlines.");
[0141] waitForMessage();
[0142] cursorCommand(1, 0);
[0145] stopObjectCode();
```
