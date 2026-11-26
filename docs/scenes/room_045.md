# Room 045 — verb and script contracts

Generated from original bytecode. Conditions are possible branch tests, not a conjunction of prerequisites. Follow the linked flat graph for alternatives and ordering. Calls, scheduler and cutscene overrides require runtime validation.

## ENv2 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/ENv2.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/ENv2.txt); entry `0000`.

```text
[0000] loadSound(16)
[0003] lights(11,0,0);
[0007] doSentence(250,669,0,1);
[000E] RoomColor(5,1);
[0012] RoomColor(15,11);
[0016] Var[117] = 659;
[001A] clearState08(Var[117]);
[001C] setState02(Var[117]);
[001E] Var[117]++;
[0020] unless (Var[117] > 668) goto 001A;
[0026] clearState08(670);
[0029] clearState08(657);
[002C] clearState08(658);
[002F] clearState08(669);
[0032] Var[253] = Var[234];
[0035] clearState08(773);
[0038] stopObjectCode();
```

## OCv2_0657 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0657.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0657.txt); entry `0013`.

```text
[0013] Var[121] = Var[235];
[0016] stopObjectCode();
```

## OCv2_0658 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0658.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0658.txt); entry `0013`.

```text
[0013] Var[121] = Var[234];
[0016] stopObjectCode();
```

## OCv2_0659 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0659.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0659.txt); entry `0013`.

```text
[0013] Var[121] = VAR_ACTIVE_OBJECT1;
[0016] stopObjectCode();
```

## OCv2_0660 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0660.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0660.txt); entry `0013`.

```text
[0013] Var[121] = VAR_ACTIVE_OBJECT1;
[0016] stopObjectCode();
```

## OCv2_0661 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0661.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0661.txt); entry `0013`.

```text
[0013] Var[121] = VAR_ACTIVE_OBJECT1;
[0016] stopObjectCode();
```

## OCv2_0662 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0662.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0662.txt); entry `0013`.

```text
[0013] Var[121] = VAR_ACTIVE_OBJECT1;
[0016] stopObjectCode();
```

## OCv2_0663 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0663.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0663.txt); entry `0013`.

```text
[0013] Var[121] = VAR_ACTIVE_OBJECT1;
[0016] stopObjectCode();
```

## OCv2_0664 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0664.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0664.txt); entry `0013`.

```text
[0013] Var[121] = VAR_ACTIVE_OBJECT1;
[0016] stopObjectCode();
```

## OCv2_0665 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0665.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0665.txt); entry `0013`.

```text
[0013] Var[121] = VAR_ACTIVE_OBJECT1;
[0016] stopObjectCode();
```

## OCv2_0666 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0666.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0666.txt); entry `0013`.

```text
[0013] Var[121] = VAR_ACTIVE_OBJECT1;
[0016] stopObjectCode();
```

## OCv2_0667 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0667.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0667.txt); entry `0013`.

```text
[0013] Var[121] = VAR_ACTIVE_OBJECT1;
[0016] stopObjectCode();
```

## OCv2_0668 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0668.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0668.txt); entry `0013`.

```text
[0013] Var[121] = VAR_ACTIVE_OBJECT1;
[0016] stopObjectCode();
```

## OCv2_0669 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0669.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0669.txt); entry `0019`.

```text
[0019] Var[66] = getRandomNr(255);
[001C] breakHere();
```

## OCv2_0669 / verb 255
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0669.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0669.txt); entry `0015`.

```text
[0015] Var[121] = VAR_ACTIVE_OBJECT1;
[0018] stopObjectCode();
```

## OCv2_0670 / verb 253
Source: [zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0670.txt](../../zak/converted/scripts_flat/LFv2_0045/ROv2/OCv2_0670.txt); entry `0013`.

```text
[0013] delay(30);
[0017] Var[14] = VAR_EGO;
[001A] Var[14] += 81;
[001E] Var[66] = Var[14];
[0021] unless (VAR_EGO == 1) goto 002B;
[0027] ActorOps(0,[TalkColor(10)]);
[002B] print(255,"I cashed in my old ticket for $\x04\x42\x04.");
[0049] ActorOps(0,[TalkColor(9)]);
[004D] setOwnerOf(Var[61],14);
[0050] Var[14] = VAR_EGO;
[0053] Var[14] += 81;
[0057] Var[Var[14]] = Var[234];
[005A] stopObjectCode();
```

## SCv2_0030 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0045/SCv2_0030.txt](../../zak/converted/scripts_flat/LFv2_0045/SCv2_0030.txt); entry `0000`.

```text
[0000] unless (VAR_EGO == 1) goto 0029;
[0006] Var[118] = 18;
[000A] VAR_RESULT = getObjectOwner(Var[118]);
[000D] unless (VAR_RESULT == 1) goto 0026;
[0013] Var[61] = 82;
[0017] VAR_RESULT = getObjectOwner(Var[61]);
[001A] unless (VAR_RESULT == 1) goto 0023;
[0029] Var[118] = 32;
[002D] VAR_RESULT = getObjectOwner(Var[118]);
[0030] unless (VAR_RESULT == 2) goto 0070;
[0036] Var[61] = 83;
[003A] VAR_RESULT = getObjectOwner(Var[61]);
[003D] unless (VAR_RESULT == 2) goto 006D;
[0043] Var[14] = VAR_EGO;
[0046] Var[14] += 61;
[004A] Var[15] = VAR_EGO;
[004D] Var[15] += 81;
[0051] Var[Var[14]] += Var[15];
[0054] Var[14] = VAR_EGO;
[0057] Var[14] += 154;
[005B] Var[Var[14]] = Var[234];
[005E] cursorCommand(31, 3);
[0061] loadRoom(45);
[0063] doSentence(253,670,0,1);
[0070] printEgo("Oops! I don't have my CashCard here.");
[0090] stopScript(0);
[0092] cursorCommand(31, 3);
[0095] loadRoom(45);
[0097] setCameraAt(20);
[0099] Var[117] = Var[234];
[009C] Var[120] = 3;
[00A0] Var[14] = Var[117];
[00A3] Var[14] += 68;
[00A7] drawObject(Var[14],7,Var[120]);
[00AB] Var[14] = Var[117];
[00AE] Var[14] += 68;
[00B2] clearState02(Var[14]);
[00B4] Var[120] += 2;
[00B8] Var[117]++;
[00BA] unless (Var[117] > Var[46]) goto 00A0;
[00BF] Var[14] = VAR_EGO;
[00C2] Var[14] += 78;
[00C6] Var[Var[14]] = Var[234];
[00C9] Var[14] = VAR_EGO;
[00CC] Var[14] += 154;
[00D0] Var[Var[14]] = Var[234];
[00D3] Var[121] = 1024;
[00D7] breakHere();
[00D8] unless (Var[121] != 1024) goto 00D7;
[00DE] unless (Var[121] >= 659) goto 01BF;
[00E4] Var[117] = Var[234];
[00E7] Var[120] = 3;
[00EB] Var[14] = Var[117];
[00EE] Var[14] += 68;
[00F2] unless (Var[121] == Var[14]) goto 01B1;
[00F7] unless (Var[253] >= 3) goto 0102;
[00FD] drawObject(773,7,Var[253]);
[0102] drawObject(670,7,Var[120]);
[0107] startSound(44);
[0109] Var[253] = Var[120];
[010C] print(255,"");
[010F] breakHere();
[0110] Var[14] = VAR_EGO;
[0113] Var[14] += 61;
[0117] Var[122] = Var[14];
[011A] Var[14] = Var[117];
[011D] Var[14] += 73;
[0121] Var[244] = Var[14];
[0124] unless (Var[244] <= Var[122]) goto 0141;
[0129] Var[122] -= Var[244];
[012C] unless (getState08(669)) goto 0134;
[0131] clearState08(669);
[0134] Var[14] = VAR_EGO;
[0137] Var[14] += 78;
[013B] Var[Var[14]] = Var[121];
[0141] drawObject(669,255,255);
[0146] Var[14] = VAR_EGO;
[0149] Var[14] += 78;
[014D] Var[Var[14]] = Var[234];
[0150] startSound(16);
[0152] breakHere();
[0153] print(255,"One way fare is $\x04\xF4\x04.00\x01\x01\x02\x02");
[016A] Var[244] = Var[234];
[016D] unless (Var[45] >= 143) goto 01AB;
[0173] unless (Var[45] <= 145) goto 01AB;
[0179] unless (Var[121] < 661) goto 0182;
[0182] unless (Var[121] > 663) goto 01AB;
[0188] print(255,"WARNING: Exit Visa Code Required.\x02\x02");
[01A9] Var[244]++;
[01AB] print(255,"");
[01B1] Var[120] += 2;
[01B5] Var[117]++;
[01B7] unless (Var[117] > Var[46]) goto 00EB;
[01BF] cursorCommand(15, 2);
[01C2] unless (Var[121] == Var[235]) goto 0201;
[01C7] Var[14] = VAR_EGO;
[01CA] Var[14] += 78;
[01CE] unless (Var[14]) goto 01F9;
[01D2] Var[14] = VAR_EGO;
[01D5] Var[14] += 61;
[01D9] Var[Var[14]] = Var[122];
[01DC] clearState08(Var[78]);
[01DE] Var[14] = VAR_EGO;
[01E1] Var[14] += 154;
[01E5] Var[Var[14]] = Var[45];
[01E8] Var[14] = VAR_EGO;
[01EB] Var[14] += 81;
[01EF] Var[15] = Var[117];
[01F2] Var[15] += 73;
[01F6] Var[Var[14]] = Var[15];
[01F9] drawObject(657,255,255);
[0201] drawObject(658,255,255);
[0206] startSound(16);
[0208] breakHere();
[0209] delay(60);
[020D] unless (!getState08(Var[78])) goto 021E;
[0211] unless (Var[244]) goto 021E;
[0215] startScript(110);
[0217] Var[119] = 3;
[021B] startScript(15);
[021D] breakHere();
[021E] actorFollowCamera(VAR_EGO);
[0220] delay(30);
[0224] unless (!getState08(Var[78])) goto 02E1;
[0228] walkActorToObject(VAR_EGO,Var[78]);
[022B] waitForActor(VAR_EGO);
[022D] setState08(Var[78]);
[022F] unless (VAR_EGO == 2) goto 023C;
[0235] setOwnerOf(83,2);
[023C] setOwnerOf(82,1);
[0240] unless (!getState04(169)) goto 02E1;
[0245] unless (!getState08(55)) goto 02E1;
[024A] unless (Var[45] != 144) goto 02E1;
[0250] Var[14] = 1;
[0254] Var[14] += 78;
[0258] unless (Var[14] != 662) goto 02E1;
[025E] cutscene();
[025F] beginOverride();
[0263] delay(30);
[0267] animateActor(1,246);
[026A] waitForActor(1);
[026C] printEgo("I should really go \x02\x02");
[027E] VAR_RESULT = getBitVar(1557,0);
[0283] unless (VAR_RESULT) goto 028E;
[0287] printEgo("back \x02\x02");
[028E] printEgo("to Seattle.");
[029A] waitForMessage();
[029B] unless (!getState04(657)) goto 02DD;
[02A0] setState04(657);
[02A3] printEgo("I have a strong feeling that there's\x01\x01something that I need there!");
[02DC] waitForMessage();
[02DD] print(255,"");
[02E0] endCutscene();
[02E1] cursorCommand(247, 1);
[02E4] stopObjectCode();
```

## SCv2_0058 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0045/SCv2_0058.txt](../../zak/converted/scripts_flat/LFv2_0045/SCv2_0058.txt); entry `0000`.

```text
[0000] unless (VAR_ACTIVE_VERB == 3) goto 00F7;
[0006] unless (VAR_ACTIVE_OBJECT2 == 2) goto 0030;
[000C] VAR_RESULT = getObjectOwner(83);
[0010] unless (VAR_RESULT == 2) goto 001E;
[0016] print(2,"I\x02\x02");
[001E] setOwnerOf(83,2);
[0022] Var[66] = 2;
[0026] Var[67] = 1;
[0030] unless (VAR_ACTIVE_OBJECT2 == 1) goto 00EA;
[0036] VAR_RESULT = getObjectOwner(82);
[003A] unless (VAR_RESULT == 1) goto 009B;
[0040] print(2,"No way! You\x02\x02");
[004D] print(2," already have a ticket,\x01\x01and you know the FAA's new rules:\x03\x03only one ticket per person!");
[009B] setOwnerOf(82,1);
[009F] Var[66] = 1;
[00A3] Var[67] = 2;
[00A7] setOwnerOf(VAR_ACTIVE_OBJECT1,14);
[00AA] Var[14] = Var[66];
[00AD] Var[14] += 78;
[00B1] Var[15] = Var[67];
[00B4] Var[15] += 78;
[00B8] Var[Var[14]] = Var[15];
[00BB] Var[14] = Var[66];
[00BE] Var[14] += 154;
[00C2] Var[15] = Var[67];
[00C5] Var[15] += 154;
[00C9] Var[Var[14]] = Var[15];
[00CC] Var[14] = Var[67];
[00CF] Var[14] += 154;
[00D3] Var[Var[14]] = Var[234];
[00D6] Var[14] = Var[66];
[00D9] Var[14] += 81;
[00DD] Var[15] = Var[67];
[00E0] Var[15] += 81;
[00E4] Var[Var[14]] = Var[15];
[00EA] printEgo("I'll keep it.");
[00F7] unless (VAR_ACTIVE_VERB == 12) goto 027E;
[00FD] Var[117] = VAR_ACTIVE_OBJECT1;
[0100] printEgo("Point of departure: \x02\x02");
[0114] Var[14] = VAR_EGO;
[0117] Var[14] += 154;
[011B] Var[184] = Var[14];
[011E] Var[184] += 518;
[0122] Var[185] = Var[234];
[0125] unless (Var[184] == 664) goto 013D;
[012B] printEgo("Cairo, Egypt\x01\x01\x02\x02");
[013D] unless (Var[184] == 666) goto 0158;
[0143] printEgo("Katmandu, Nepal\x01\x01\x02\x02");
[0158] unless (Var[184] == 665) goto 0173;
[015E] printEgo("Kinshasa, Zaire\x01\x01\x02\x02");
[0173] unless (Var[184] == 667) goto 0189;
[0179] printEgo("Lima, Peru\x01\x01\x02\x02");
[0189] unless (Var[184] == 659) goto 01A4;
[018F] printEgo("London, England\x01\x01\x02\x02");
[01A4] unless (Var[184] == 660) goto 01C2;
[01AA] printEgo("Mexico City, Mexico\x01\x01\x02\x02");
[01C2] unless (Var[184] == 661) goto 01D7;
[01C8] printEgo("Miami, FL\x01\x01\x02\x02");
[01D7] unless (Var[184] == 663) goto 01F3;
[01DD] printEgo("San Francisco, CA\x01\x01\x02\x02");
[01F3] unless (Var[184] == 662) goto 020A;
[01F9] printEgo("Seattle, WA\x01\x01\x02\x02");
[020A] unless (Var[184] == 668) goto 0226;
[0210] printEgo("Bermuda Triangle\x01\x01\x02\x02");
[0223] /* goto 0226; */
[0226] Var[185]++;
[0228] unless (Var[185] == Var[235]) goto 024D;
[022D] printEgo("Destination:        \x02\x02");
[0240] Var[14] = VAR_EGO;
[0243] Var[14] += 78;
[0247] Var[184] = Var[14];
[024D] printEgo("");
[024F] waitForMessage();
[0250] unless (VAR_ACTIVE_OBJECT1 == Var[117]) goto 027E;
[0255] Var[14] = VAR_EGO;
[0258] Var[14] += 81;
[025C] Var[66] = Var[14];
[025F] printEgo("Value: $\x04\x42\x04. Ticket is refundable.");
[027E] stopObjectCode();
```

## SCv2_0110 / verb entry
Source: [zak/converted/scripts_flat/LFv2_0045/SCv2_0110.txt](../../zak/converted/scripts_flat/LFv2_0045/SCv2_0110.txt); entry `0000`.

```text
[0000] Var[242] = getRandomNr(7);
[0003] unless (!Var[242]) goto 0009;
[0007] Var[242]++;
[0009] Var[241] = getRandomNr(30);
[000C] unless (!Var[241]) goto 0012;
[0010] Var[241]++;
[0012] Var[243] = getRandomNr(7);
[0015] unless (!Var[243]) goto 001B;
[0019] Var[243]++;
[001B] Var[66] = Var[242];
[001E] Var[67] = Var[243];
[0021] Var[66] += 23;
[0025] Var[67]--;
[0027] unless (!Var[67]) goto 0021;
[002B] Var[66] += Var[241];
[002E] Var[66] += Var[241];
[0031] unless (Var[242] >= 3) goto 003B;
[0037] Var[66] -= 2;
[003B] Var[66] += Var[241];
[003E] unless (Var[241] < 5) goto 0048;
[0044] Var[66] += 3;
[0048] Var[66] += 12;
[004C] Var[66] -= 9;
[0050] unless (Var[66] < 12) goto 004C;
[0056] Var[141] = Var[66];
[0059] Var[66] += Var[242];
[005C] Var[66] += Var[241];
[005F] Var[66] += 19;
[0063] unless (Var[241] > 7) goto 006D;
[0069] Var[66] -= 3;
[006D] Var[66] += 7;
[0071] Var[66] -= 7;
[0075] unless (Var[66] < 8) goto 0071;
[007B] Var[66] += 19;
[007F] unless (Var[66] <= Var[141]) goto 0087;
[0084] Var[66] += Var[141];
[0087] Var[66] -= 12;
[008B] unless (Var[66] <= 11) goto 0087;
[0091] Var[142] = Var[66];
[0094] Var[66] += Var[242];
[0097] Var[66] += Var[242];
[009A] Var[66] += Var[241];
[009D] Var[66] += 14;
[00A1] unless (Var[241] < 10) goto 00AA;
[00A7] Var[66] += Var[241];
[00AA] Var[66] -= 5;
[00AE] unless (Var[66] < 10) goto 00AA;
[00B4] unless (Var[66] != Var[142]) goto 00BC;
[00B9] Var[66] += Var[141];
[00BC] Var[66] += 23;
[00C0] Var[66] -= 12;
[00C4] unless (Var[66] < 12) goto 00C0;
[00CA] Var[140] = Var[66];
[00CD] Var[66] += Var[242];
[00D0] Var[66] += Var[242];
[00D3] Var[66] += Var[242];
[00D6] Var[66] += Var[241];
[00D9] Var[66] += 11;
[00DD] unless (Var[242] > 7) goto 00E7;
[00E3] Var[66] += 6;
[00E7] Var[66] -= 8;
[00EB] unless (Var[66] < 17) goto 00E7;
[00F1] unless (Var[66] > Var[140]) goto 00F9;
[00F6] Var[66] += Var[142];
[00F9] Var[66] += 14;
[00FD] Var[66] -= 12;
[0101] unless (Var[66] <= 11) goto 00FD;
[0107] Var[139] = Var[66];
[010A] stopObjectCode();
```
