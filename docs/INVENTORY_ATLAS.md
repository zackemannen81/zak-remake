# Inventory and ownership atlas

[V] Literal pickup/owner operations are indexed below. [H] VAR_ACTIVE_OBJECT1 inside an object program is a contextual association, not proof of runtime identity. Owner changes include hiding/removal and do not by themselves prove player inventory membership. Dynamic/global operations remain explicit in the JSON. Names and event tables are original metadata; use conditions and effects are in the linked per-room contracts.

## Object 14: Sushi in fish bowl

- Resource room 1; verbs 3, 6, 7, 11, 14; [program](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0014.txt), [conditions/effects](scenes/room_001.md).
- [OCv2_0091.txt:15](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0091.txt): `[0041] (29)     setOwnerOf(14,0);` — literal object ID.
- [OCv2_0091.txt:16](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0091.txt): `[0045] (29)     setOwnerOf(14,15);` — literal object ID.
- [OCv2_0098.txt:6](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0098.txt): `[002D] (50) pickupObject(14);` — literal object ID.

## Object 15: phone bill@@@@

- Resource room 1; verbs 11, 12, 14; [program](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0015.txt), [conditions/effects](scenes/room_001.md).
- [OCv2_0015.txt:6](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0015.txt): `[0025] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [OCv2_0153.txt:22](../zak/converted/scripts/LFv2_0004/ROv2/OCv2_0153.txt): `[0089] (29)       setOwnerOf(15,0);` — literal object ID.
- [SCv2_0074.txt:53](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0004/SCv2_0074.txt): `[018E] (29) setOwnerOf(15,0);` — literal object ID.

## Object 16: kazoo

- Resource room 1; verbs 11, 12, 14; [program](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0016.txt), [conditions/effects](scenes/room_001.md).
- [OCv2_0016.txt:6](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0016.txt): `[001C] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 17: torn wallpaper

- Resource room 1; verbs 10, 11, 12, 14; [program](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0017.txt), [conditions/effects](scenes/room_001.md).
- [OCv2_0097.txt:5](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0097.txt): `[0015] (50) pickupObject(17);` — literal object ID.

## Object 18: CashCard

- Resource room 1; verbs 3, 11, 12; [program](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0018.txt), [conditions/effects](scenes/room_001.md).
- [OCv2_0018.txt:12](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0018.txt): `[002F] (A9)   setOwnerOf(VAR_ACTIVE_OBJECT1,1);` — contextual object program; runtime active object must still be checked.
- [OCv2_0093.txt:9](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0093.txt): `[0029] (50)   pickupObject(18);` — literal object ID.

## Object 19: receiver

- Resource room 1; verbs 11, 14, 253; [program](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0019.txt), [conditions/effects](scenes/room_001.md).
- [SCv2_0014.txt:4](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0001/SCv2_0014.txt): `[0000] (50) pickupObject(19);` — literal object ID.
- [SCv2_0014.txt:21](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0001/SCv2_0014.txt): `[0030] (29) setOwnerOf(19,0);` — literal object ID.
- [SCv2_0014.txt:22](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0001/SCv2_0014.txt): `[0034] (29) setOwnerOf(19,15);` — literal object ID.
- [SCv2_0018.txt:4](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0001/SCv2_0018.txt): `[0000] (29) setOwnerOf(19,0);` — literal object ID.
- [SCv2_0018.txt:5](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0001/SCv2_0018.txt): `[0004] (29) setOwnerOf(19,15);` — literal object ID.

## Object 20: power cord

- Resource room 2; verbs 3, 10, 11, 14; [program](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0020.txt), [conditions/effects](scenes/room_002.md).
- [OCv2_0020.txt:9](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0020.txt): `[0029] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [OCv2_0128.txt:4](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0128.txt): `[0013] (29) setOwnerOf(20,0);` — literal object ID.
- [OCv2_0128.txt:5](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0128.txt): `[0017] (29) setOwnerOf(20,15);` — literal object ID.

## Object 21: remote control

- Resource room 2; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0021.txt), [conditions/effects](scenes/room_002.md).
- [OCv2_0021.txt:5](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0021.txt): `[0023] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 22: egg

- Resource room 2; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0022.txt), [conditions/effects](scenes/room_002.md).
- [OCv2_0022.txt:5](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0022.txt): `[0018] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [OCv2_0260.txt:16](../zak/converted/scripts/LFv2_0011/ROv2/OCv2_0260.txt): `[0055] (29)         setOwnerOf(22,14);` — literal object ID.
- [OCv2_0262.txt:6](../zak/converted/scripts/LFv2_0011/ROv2/OCv2_0262.txt): `[001A] (69) setOwnerOf(22,VAR_EGO);` — literal object ID.
- [SCv2_0036.txt:21](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0011/SCv2_0036.txt): `[0066] (29)   setOwnerOf(22,0);` — literal object ID.
- [SCv2_0079.txt:66](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0011/SCv2_0079.txt): `[0091] (69)     setOwnerOf(22,Var[52]);` — literal object ID.
- [SCv2_0079.txt:88](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0011/SCv2_0079.txt): `[0113] (69)   setOwnerOf(22,Var[52]);` — literal object ID.

## Object 23: bread crumbs

- Resource room 2; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0023.txt), [conditions/effects](scenes/room_002.md).
- [OCv2_0023.txt:5](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0023.txt): `[0021] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [OCv2_0621.txt:7](../zak/converted/scripts/LFv2_0042/ROv2/OCv2_0621.txt): `[002A] (29)   setOwnerOf(23,0);` — literal object ID.

## Object 24: small key

- Resource room 2; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0024.txt), [conditions/effects](scenes/room_002.md).
- [OCv2_0024.txt:5](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0024.txt): `[001E] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 26: butter knife@@@@@

- Resource room 2; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0026.txt), [conditions/effects](scenes/room_002.md).
- [OCv2_0026.txt:5](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0026.txt): `[0026] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 27: fan club card

- Resource room 3; verbs 11, 12; [program](../zak/converted/scripts/LFv2_0003/ROv2/OCv2_0027.txt), [conditions/effects](scenes/room_003.md).
- [OCv2_0139.txt:7](../zak/converted/scripts/LFv2_0003/ROv2/OCv2_0139.txt): `[001F] (50) pickupObject(27);` — literal object ID.

## Object 29: stale bread

- Resource room 3; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0003/ROv2/OCv2_0029.txt), [conditions/effects](scenes/room_003.md).
- [OCv2_0129.txt:20](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0129.txt): `[003E] (29)   setOwnerOf(29,14);` — literal object ID.
- [OCv2_0130.txt:6](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0130.txt): `[0022] (69) setOwnerOf(29,VAR_EGO);` — literal object ID.
- [OCv2_0029.txt:5](../zak/converted/scripts/LFv2_0003/ROv2/OCv2_0029.txt): `[0020] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [SCv2_0021.txt:9](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0002/SCv2_0021.txt): `[0011] (29)   setOwnerOf(29,0);` — literal object ID.

## Object 30: application

- Resource room 4; verbs 11, 12, 14; [program](../zak/converted/scripts/LFv2_0004/ROv2/OCv2_0030.txt), [conditions/effects](scenes/room_004.md).
- [OCv2_0138.txt:30](../zak/converted/scripts/LFv2_0003/ROv2/OCv2_0138.txt): `[0090] (29)       setOwnerOf(30,0);` — literal object ID.
- [OCv2_0030.txt:6](../zak/converted/scripts/LFv2_0004/ROv2/OCv2_0030.txt): `[0022] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 31: bobby pin sign

- Resource room 5; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0005/ROv2/OCv2_0031.txt), [conditions/effects](scenes/room_005.md).
- [OCv2_0167.txt:12](../zak/converted/scripts/LFv2_0005/ROv2/OCv2_0167.txt): `[0051] (50)   pickupObject(31);` — literal object ID.
- [OCv2_0393.txt:7](../zak/converted/scripts/LFv2_0021/ROv2/OCv2_0393.txt): `[0027] (29)   setOwnerOf(31,0);` — literal object ID.

## Object 32: CashCard

- Resource room 6; verbs 3, 11, 12, 14; [program](../zak/converted/scripts/LFv2_0006/ROv2/OCv2_0032.txt), [conditions/effects](scenes/room_006.md).
- [OCv2_0032.txt:7](../zak/converted/scripts/LFv2_0006/ROv2/OCv2_0032.txt): `[0021] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [OCv2_0032.txt:19](../zak/converted/scripts/LFv2_0006/ROv2/OCv2_0032.txt): `[003F] (A9)   setOwnerOf(VAR_ACTIVE_OBJECT1,2);` — contextual object program; runtime active object must still be checked.

## Object 33: crystal shard

- Resource room 6; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0006/ROv2/OCv2_0033.txt), [conditions/effects](scenes/room_006.md).
- [OCv2_0033.txt:5](../zak/converted/scripts/LFv2_0006/ROv2/OCv2_0033.txt): `[0022] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [OCv2_0645.txt:4](../zak/converted/scripts/LFv2_0044/ROv2/OCv2_0645.txt): `[0020] (69) setOwnerOf(33,VAR_EGO);` — literal object ID.
- [OCv2_0648.txt:9](../zak/converted/scripts/LFv2_0044/ROv2/OCv2_0648.txt): `[0037] (29)   setOwnerOf(33,14);` — literal object ID.
- [OCv2_0651.txt:35](../zak/converted/scripts/LFv2_0044/ROv2/OCv2_0651.txt): `[006F] (29)     setOwnerOf(33,0);` — literal object ID.
- [OCv2_0653.txt:7](../zak/converted/scripts/LFv2_0044/ROv2/OCv2_0653.txt): `[0027] (69) setOwnerOf(33,VAR_EGO);` — literal object ID.
- [SCv2_0062.txt:188](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0005/SCv2_0062.txt): `[0520] (50)     pickupObject(33);` — literal object ID.
- [SCv2_0062.txt:190](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0005/SCv2_0062.txt): `[0523] (29)   setOwnerOf(33,1);` — literal object ID.

## Object 37: rope

- Resource room 7; verbs 11; [program](../zak/converted/scripts/LFv2_0007/ROv2/OCv2_0037.txt), [conditions/effects](scenes/room_007.md).
- [OCv2_0110.txt:7](../zak/converted/scripts/LFv2_0001/ROv2/OCv2_0110.txt): `[001D] (69) setOwnerOf(37,VAR_EGO);` — literal object ID.
- [SCv2_0037.txt:29](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0001/SCv2_0037.txt): `[00A5] (29)   setOwnerOf(37,14);` — literal object ID.

## Object 40: nose glasses

- Resource room 7; verbs 3, 6, 7, 17; [program](../zak/converted/scripts/LFv2_0007/ROv2/OCv2_0040.txt), [conditions/effects](scenes/room_007.md).
- [OCv2_0234.txt:18](../zak/converted/scripts/LFv2_0010/ROv2/OCv2_0234.txt): `[0045] (29) setOwnerOf(40,7);` — literal object ID.
- [SCv2_0141.txt:57](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0004/SCv2_0141.txt): `[0126] (29)       setOwnerOf(40,7);` — literal object ID.
- [SCv2_0098.txt:97](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0016/SCv2_0098.txt): `[0159] (29)     setOwnerOf(40,7);` — literal object ID.

## Object 42: Lotto ticket

- Resource room 7; verbs 3, 12; [program](../zak/converted/scripts/LFv2_0007/ROv2/OCv2_0042.txt), [conditions/effects](scenes/room_007.md).
- [SCv2_0072.txt:80](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0007/SCv2_0072.txt): `[0252] (29) setOwnerOf(42,0);` — literal object ID.
- [SCv2_0072.txt:81](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0007/SCv2_0072.txt): `[0256] (29) setOwnerOf(42,15);` — literal object ID.

## Object 43: hat

- Resource room 7; verbs 3, 6, 7, 17; [program](../zak/converted/scripts/LFv2_0007/ROv2/OCv2_0043.txt), [conditions/effects](scenes/room_007.md).
- [OCv2_0234.txt:19](../zak/converted/scripts/LFv2_0010/ROv2/OCv2_0234.txt): `[0049] (29) setOwnerOf(43,7);` — literal object ID.
- [SCv2_0141.txt:58](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0004/SCv2_0141.txt): `[012A] (29)       setOwnerOf(43,7);` — literal object ID.

## Object 44: golf club

- Resource room 7; verbs 11, 12, 17; [program](../zak/converted/scripts/LFv2_0007/ROv2/OCv2_0044.txt), [conditions/effects](scenes/room_007.md).
- [SCv2_0070.txt:11](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0038/SCv2_0070.txt): `[0042] (29)   setOwnerOf(44,0);` — literal object ID.

## Object 45: book

- Resource room 8; verbs 12; [program](../zak/converted/scripts/LFv2_0008/ROv2/OCv2_0045.txt), [conditions/effects](scenes/room_008.md).
- [OCv2_0208.txt:21](../zak/converted/scripts/LFv2_0008/ROv2/OCv2_0208.txt): `[00B1] (29)   setOwnerOf(45,0);` — literal object ID.
- [SCv2_0043.txt:27](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0008/SCv2_0043.txt): `[0092] (50)     pickupObject(45);` — literal object ID.
- [SCv2_0139.txt:14](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0017/SCv2_0139.txt): `[003D] (29)         setOwnerOf(45,0);` — literal object ID.

## Object 46: whiskey

- Resource room 8; verbs 11, 12; [program](../zak/converted/scripts/LFv2_0008/ROv2/OCv2_0046.txt), [conditions/effects](scenes/room_008.md).
- [OCv2_0208.txt:36](../zak/converted/scripts/LFv2_0008/ROv2/OCv2_0208.txt): `[0107] (50) pickupObject(46);` — literal object ID.
- [SCv2_0076.txt:17](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0044/SCv2_0076.txt): `[0050] (29) setOwnerOf(46,0);` — literal object ID.

## Object 47: toilet paper

- Resource room 11; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0011/ROv2/OCv2_0047.txt), [conditions/effects](scenes/room_011.md).
- [OCv2_0047.txt:5](../zak/converted/scripts/LFv2_0011/ROv2/OCv2_0047.txt): `[0021] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [SCv2_0106.txt:69](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0011/SCv2_0106.txt): `[0124] (29)     setOwnerOf(47,15);` — literal object ID.
- [SCv2_0120.txt:16](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0011/SCv2_0120.txt): `[0028] (29)   setOwnerOf(47,15);` — literal object ID.

## Object 48: cushion

- Resource room 11; verbs 10, 11, 14; [program](../zak/converted/scripts/LFv2_0011/ROv2/OCv2_0048.txt), [conditions/effects](scenes/room_011.md).
- [OCv2_0259.txt:12](../zak/converted/scripts/LFv2_0011/ROv2/OCv2_0259.txt): `[0035] (50)     pickupObject(48);` — literal object ID.

## Object 49: lighter@@@@

- Resource room 11; verbs 4, 5, 11, 14; [program](../zak/converted/scripts/LFv2_0011/ROv2/OCv2_0049.txt), [conditions/effects](scenes/room_011.md).
- [OCv2_0049.txt:7](../zak/converted/scripts/LFv2_0011/ROv2/OCv2_0049.txt): `[0024] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 50: oxygen tank

- Resource room 11; verbs 3, 6, 7, 11, 12, 14, 253; [program](../zak/converted/scripts/LFv2_0011/ROv2/OCv2_0050.txt), [conditions/effects](scenes/room_011.md).
- [OCv2_0262.txt:12](../zak/converted/scripts/LFv2_0011/ROv2/OCv2_0262.txt): `[0035] (50)       pickupObject(50);` — literal object ID.

## Object 51: peanuts

- Resource room 11; verbs none; [program](../zak/converted/scripts/LFv2_0011/ROv2/OCv2_0051.txt), [conditions/effects](scenes/room_011.md).
- [OCv2_0268.txt:24](../zak/converted/scripts/LFv2_0012/ROv2/OCv2_0268.txt): `[00A0] (29) setOwnerOf(51,0);` — literal object ID.
- [SCv2_0104.txt:78](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0011/SCv2_0104.txt): `[01F8] (50)     pickupObject(51);` — literal object ID.
- [SCv2_0116.txt:15](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0011/SCv2_0116.txt): `[0025] (50)   pickupObject(51);` — literal object ID.
- [SCv2_0144.txt:19](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0012/SCv2_0144.txt): `[003F] (29)   setOwnerOf(51,0);` — literal object ID.

## Object 52: tree branch

- Resource room 12; verbs 10, 11, 14; [program](../zak/converted/scripts/LFv2_0012/ROv2/OCv2_0052.txt), [conditions/effects](scenes/room_012.md).
- [OCv2_0266.txt:10](../zak/converted/scripts/LFv2_0012/ROv2/OCv2_0266.txt): `[002D] (50) pickupObject(52);` — literal object ID.
- [OCv2_0273.txt:60](../zak/converted/scripts/LFv2_0013/ROv2/OCv2_0273.txt): `[0171] (29)     setOwnerOf(52,0);` — literal object ID.

## Object 55: blue crystal

- Resource room 14; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0014/ROv2/OCv2_0055.txt), [conditions/effects](scenes/room_014.md).
- [OCv2_0428.txt:17](../zak/converted/scripts/LFv2_0025/ROv2/OCv2_0428.txt): `[0057] (29)   setOwnerOf(55,14);` — literal object ID.
- [OCv2_0431.txt:6](../zak/converted/scripts/LFv2_0025/ROv2/OCv2_0431.txt): `[0025] (69) setOwnerOf(55,VAR_EGO);` — literal object ID.

## Object 56: crystal shard

- Resource room 14; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0014/ROv2/OCv2_0056.txt), [conditions/effects](scenes/room_014.md).
- [OCv2_0646.txt:4](../zak/converted/scripts/LFv2_0044/ROv2/OCv2_0646.txt): `[0020] (69) setOwnerOf(56,VAR_EGO);` — literal object ID.
- [OCv2_0648.txt:19](../zak/converted/scripts/LFv2_0044/ROv2/OCv2_0648.txt): `[005B] (29)   setOwnerOf(56,14);` — literal object ID.
- [OCv2_0651.txt:36](../zak/converted/scripts/LFv2_0044/ROv2/OCv2_0651.txt): `[0073] (29)     setOwnerOf(56,0);` — literal object ID.
- [OCv2_0653.txt:8](../zak/converted/scripts/LFv2_0044/ROv2/OCv2_0653.txt): `[002B] (69) setOwnerOf(56,VAR_EGO);` — literal object ID.

## Object 57: ankh

- Resource room 14; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0014/ROv2/OCv2_0057.txt), [conditions/effects](scenes/room_014.md).
- [OCv2_0057.txt:5](../zak/converted/scripts/LFv2_0014/ROv2/OCv2_0057.txt): `[0019] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [OCv2_0549.txt:12](../zak/converted/scripts/LFv2_0035/ROv2/OCv2_0549.txt): `[0052] (29)   setOwnerOf(57,0);` — literal object ID.

## Object 58: white crystal

- Resource room 15; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0015/ROv2/OCv2_0058.txt), [conditions/effects](scenes/room_015.md).
- [OCv2_0314.txt:5](../zak/converted/scripts/LFv2_0015/ROv2/OCv2_0314.txt): `[0018] (50)   pickupObject(58);` — literal object ID.
- [OCv2_0428.txt:12](../zak/converted/scripts/LFv2_0025/ROv2/OCv2_0428.txt): `[003D] (29)   setOwnerOf(58,0);` — literal object ID.

## Object 59: flagpole

- Resource room 17; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0017/ROv2/OCv2_0059.txt), [conditions/effects](scenes/room_017.md).
- [OCv2_0648.txt:5](../zak/converted/scripts/LFv2_0044/ROv2/OCv2_0648.txt): `[0024] (29)   setOwnerOf(59,0);` — literal object ID.
- [SCv2_0139.txt:33](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0017/SCv2_0139.txt): `[00C0] (29)     setOwnerOf(59,8);` — literal object ID.

## Object 60: jail key

- Resource room 18; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0018/ROv2/OCv2_0060.txt), [conditions/effects](scenes/room_018.md).
- [OCv2_0060.txt:7](../zak/converted/scripts/LFv2_0018/ROv2/OCv2_0060.txt): `[0028] (D0)   pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [OCv2_0366.txt:35](../zak/converted/scripts/LFv2_0018/ROv2/OCv2_0366.txt): `[0085] (29) setOwnerOf(60,0);` — literal object ID.
- [OCv2_0366.txt:36](../zak/converted/scripts/LFv2_0018/ROv2/OCv2_0366.txt): `[0089] (29) setOwnerOf(60,15);` — literal object ID.
- [SCv2_0139.txt:36](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0017/SCv2_0139.txt): `[00D9] (29)     setOwnerOf(60,8);` — literal object ID.

## Object 61: token@

- Resource room 27; verbs 3, 11, 12; [program](../zak/converted/scripts/LFv2_0027/ROv2/OCv2_0061.txt), [conditions/effects](scenes/room_027.md).
- [SCv2_0081.txt:93](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0026/SCv2_0081.txt): `[024D] (50) pickupObject(61);` — literal object ID.
- [SCv2_0081.txt:94](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0026/SCv2_0081.txt): `[0250] (29) setOwnerOf(61,14);` — literal object ID.

## Object 62: token@

- Resource room 27; verbs 3, 11, 12; [program](../zak/converted/scripts/LFv2_0027/ROv2/OCv2_0062.txt), [conditions/effects](scenes/room_027.md).
- [SCv2_0081.txt:95](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0026/SCv2_0081.txt): `[0254] (50) pickupObject(62);` — literal object ID.
- [SCv2_0081.txt:96](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0026/SCv2_0081.txt): `[0257] (29) setOwnerOf(62,14);` — literal object ID.

## Object 63: token@

- Resource room 27; verbs 3, 11, 12; [program](../zak/converted/scripts/LFv2_0027/ROv2/OCv2_0063.txt), [conditions/effects](scenes/room_027.md).
- [SCv2_0081.txt:97](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0026/SCv2_0081.txt): `[025B] (50) pickupObject(63);` — literal object ID.
- [SCv2_0081.txt:98](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0026/SCv2_0081.txt): `[025E] (29) setOwnerOf(63,14);` — literal object ID.

## Object 64: burnt fuse

- Resource room 28; verbs 11, 14, 253; [program](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0064.txt), [conditions/effects](scenes/room_028.md).
- [OCv2_0064.txt:6](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0064.txt): `[0021] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [OCv2_0064.txt:17](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0064.txt): `[0066] (29) setOwnerOf(64,0);` — literal object ID.

## Object 65: helmet

- Resource room 26; verbs 3, 6, 7, 12; [program](../zak/converted/scripts/LFv2_0026/ROv2/OCv2_0065.txt), [conditions/effects](scenes/room_026.md).
- [OCv2_0494.txt:46](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0494.txt): `[0111] (29)       setOwnerOf(65,14);` — literal object ID.
- [OCv2_0494.txt:56](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0494.txt): `[0138] (29)         setOwnerOf(65,0);` — literal object ID.
- [SCv2_0081.txt:9](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0026/SCv2_0081.txt): `[0009] (50) pickupObject(65);` — literal object ID.
- [SCv2_0081.txt:10](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0026/SCv2_0081.txt): `[000C] (29) setOwnerOf(65,3);` — literal object ID.

## Object 66: helmet

- Resource room 26; verbs 12, 255; [program](../zak/converted/scripts/LFv2_0026/ROv2/OCv2_0066.txt), [conditions/effects](scenes/room_026.md).
- [OCv2_0494.txt:52](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0494.txt): `[0127] (29)       setOwnerOf(66,0);` — literal object ID.
- [SCv2_0081.txt:8](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0026/SCv2_0081.txt): `[0006] (50) pickupObject(66);` — literal object ID.
- [SCv2_0081.txt:11](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0026/SCv2_0081.txt): `[0010] (29) setOwnerOf(66,4);` — literal object ID.

## Object 67: vinyl tape

- Resource room 28; verbs 10, 11, 14; [program](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0067.txt), [conditions/effects](scenes/room_028.md).
- [OCv2_0067.txt:6](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0067.txt): `[0021] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [OCv2_0067.txt:12](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0067.txt): `[0049] (A9)   setOwnerOf(VAR_ACTIVE_OBJECT1,0);` — contextual object program; runtime active object must still be checked.

## Object 68: broom alien

- Resource room 28; verbs 3, 11, 14; [program](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0068.txt), [conditions/effects](scenes/room_028.md).
- [OCv2_0479.txt:27](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0479.txt): `[00C8] (50)   pickupObject(68);` — literal object ID.
- [SCv2_0099.txt:5](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0021/SCv2_0099.txt): `[0001] (29) setOwnerOf(68,0);` — literal object ID.

## Object 69: flashlight@@@@

- Resource room 28; verbs 4, 5, 11, 14; [program](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0069.txt), [conditions/effects](scenes/room_028.md).
- [OCv2_0069.txt:7](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0069.txt): `[0027] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 70: ladder

- Resource room 28; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0070.txt), [conditions/effects](scenes/room_028.md).
- [OCv2_0477.txt:18](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0477.txt): `[0068] (50)   pickupObject(70);` — literal object ID.
- [OCv2_0518.txt:5](../zak/converted/scripts/LFv2_0033/ROv2/OCv2_0518.txt): `[0021] (29)   setOwnerOf(70,14);` — literal object ID.
- [OCv2_0530.txt:10](../zak/converted/scripts/LFv2_0033/ROv2/OCv2_0530.txt): `[0029] (29)   setOwnerOf(70,14);` — literal object ID.
- [OCv2_0537.txt:13](../zak/converted/scripts/LFv2_0033/ROv2/OCv2_0537.txt): `[0031] (69)   setOwnerOf(70,VAR_EGO);` — literal object ID.

## Object 72: Digital Audio Tape

- Resource room 30; verbs 11, 12, 14; [program](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0072.txt), [conditions/effects](scenes/room_030.md).
- [OCv2_0072.txt:10](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0072.txt): `[0032] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
- [OCv2_0492.txt:27](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0492.txt): `[0068] (29)   setOwnerOf(72,0);` — literal object ID.
- [OCv2_0492.txt:28](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0492.txt): `[006C] (29)   setOwnerOf(72,15);` — literal object ID.
- [SCv2_0055.txt:23](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0030/SCv2_0055.txt): `[00AF] (29)       setOwnerOf(72,0);` — literal object ID.
- [SCv2_0055.txt:25](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0030/SCv2_0055.txt): `[00B6] (29)       setOwnerOf(72,14);` — literal object ID.
- [SCv2_0055.txt:151](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0030/SCv2_0055.txt): `[0303] (69)       setOwnerOf(72,VAR_EGO);` — literal object ID.

## Object 73: fuse

- Resource room 30; verbs 10, 11, 14; [program](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0073.txt), [conditions/effects](scenes/room_030.md).
- [OCv2_0470.txt:35](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0470.txt): `[00A1] (29)     setOwnerOf(73,14);` — literal object ID.
- [OCv2_0471.txt:4](../zak/converted/scripts/LFv2_0028/ROv2/OCv2_0471.txt): `[0017] (69) setOwnerOf(73,VAR_EGO);` — literal object ID.
- [OCv2_0489.txt:15](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0489.txt): `[004A] (29)   setOwnerOf(73,0);` — literal object ID.
- [OCv2_0489.txt:16](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0489.txt): `[004E] (29)   setOwnerOf(73,15);` — literal object ID.
- [OCv2_0491.txt:23](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0491.txt): `[0077] (50)   pickupObject(73);` — literal object ID.

## Object 74: CashCards

- Resource room 30; verbs 3, 11, 12, 14; [program](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0074.txt), [conditions/effects](scenes/room_030.md).
- [OCv2_0074.txt:19](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0074.txt): `[0048] (A9)   setOwnerOf(VAR_ACTIVE_OBJECT1,3);` — contextual object program; runtime active object must still be checked.
- [OCv2_0495.txt:5](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0495.txt): `[0015] (50) pickupObject(74);` — literal object ID.

## Object 75: CashCard

- Resource room 30; verbs 3, 11, 12; [program](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0075.txt), [conditions/effects](scenes/room_030.md).
- [OCv2_0075.txt:16](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0075.txt): `[003D] (A9)   setOwnerOf(VAR_ACTIVE_OBJECT1,4);` — contextual object program; runtime active object must still be checked.
- [OCv2_0495.txt:6](../zak/converted/scripts/LFv2_0030/ROv2/OCv2_0495.txt): `[0018] (50) pickupObject(75);` — literal object ID.

## Object 76: golden key

- Resource room 35; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0035/ROv2/OCv2_0076.txt), [conditions/effects](scenes/room_035.md).
- [OCv2_0325.txt:8](../zak/converted/scripts/LFv2_0015/ROv2/OCv2_0325.txt): `[0022] (29)   setOwnerOf(76,0);` — literal object ID.
- [OCv2_0076.txt:5](../zak/converted/scripts/LFv2_0035/ROv2/OCv2_0076.txt): `[001F] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 77: parachute

- Resource room 40; verbs 1, 6, 7, 10, 11, 12; [program](../zak/converted/scripts/LFv2_0040/ROv2/OCv2_0077.txt), [conditions/effects](scenes/room_040.md).
- [ENv2.txt:11](../zak/converted/scripts/LFv2_0031/ROv2/ENv2.txt): `[002E] (29)   setOwnerOf(77,0);` — literal object ID.
- [ENv2.txt:12](../zak/converted/scripts/LFv2_0031/ROv2/ENv2.txt): `[0032] (29)   setOwnerOf(77,15);` — literal object ID.
- [ENv2.txt:11](../zak/converted/scripts/LFv2_0040/ROv2/ENv2.txt): `[0029] (50)       pickupObject(77);` — literal object ID.
- [SCv2_0064.txt:101](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0010/SCv2_0064.txt): `[0143] (29)     setOwnerOf(77,0);` — literal object ID.
- [SCv2_0064.txt:102](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0010/SCv2_0064.txt): `[0147] (29)     setOwnerOf(77,15);` — literal object ID.
- [SCv2_0069.txt:85](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0040/SCv2_0069.txt): `[029C] (29)   setOwnerOf(77,0);` — literal object ID.
- [SCv2_0069.txt:86](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0040/SCv2_0069.txt): `[02A0] (29)   setOwnerOf(77,15);` — literal object ID.

## Object 78: glowing object

- Resource room 41; verbs 3, 11, 14; [program](../zak/converted/scripts/LFv2_0041/ROv2/OCv2_0078.txt), [conditions/effects](scenes/room_041.md).
- [OCv2_0426.txt:5](../zak/converted/scripts/LFv2_0025/ROv2/OCv2_0426.txt): `[001D] (29)   setOwnerOf(78,0);` — literal object ID.

## Object 79: scroll

- Resource room 43; verbs 12, 14; [program](../zak/converted/scripts/LFv2_0043/ROv2/OCv2_0079.txt), [conditions/effects](scenes/room_043.md).
- [OCv2_0651.txt:37](../zak/converted/scripts/LFv2_0044/ROv2/OCv2_0651.txt): `[0077] (29)     setOwnerOf(79,0);` — literal object ID.

## Object 80: candelabra

- Resource room 43; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0043/ROv2/OCv2_0080.txt), [conditions/effects](scenes/room_043.md).
- [OCv2_0427.txt:9](../zak/converted/scripts/LFv2_0025/ROv2/OCv2_0427.txt): `[002F] (29)   setOwnerOf(80,0);` — literal object ID.

## Object 81: yellow crystal

- Resource room 44; verbs 11, 14; [program](../zak/converted/scripts/LFv2_0044/ROv2/OCv2_0081.txt), [conditions/effects](scenes/room_044.md).
- [OCv2_0428.txt:8](../zak/converted/scripts/LFv2_0025/ROv2/OCv2_0428.txt): `[002A] (29)   setOwnerOf(81,14);` — literal object ID.
- [OCv2_0429.txt:7](../zak/converted/scripts/LFv2_0025/ROv2/OCv2_0429.txt): `[0029] (69) setOwnerOf(81,VAR_EGO);` — literal object ID.
- [OCv2_0081.txt:12](../zak/converted/scripts/LFv2_0044/ROv2/OCv2_0081.txt): `[0036] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 82: ticket

- Resource room 46; verbs 3, 11, 12; [program](../zak/converted/scripts/LFv2_0046/ROv2/OCv2_0082.txt), [conditions/effects](scenes/room_046.md).
- [SCv2_0115.txt:29](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0009/SCv2_0115.txt): `[007E] (29)     setOwnerOf(82,14);` — literal object ID.
- [SCv2_0113.txt:14](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0018/SCv2_0113.txt): `[0029] (29) setOwnerOf(82,14);` — literal object ID.
- [SCv2_0030.txt:161](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0045/SCv2_0030.txt): `[023C] (29)     setOwnerOf(82,1);` — literal object ID.
- [SCv2_0058.txt:21](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0045/SCv2_0058.txt): `[009B] (29)       setOwnerOf(82,1);` — literal object ID.
- [SCv2_0001.txt:30](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0049/SCv2_0001.txt): `[0063] (50) pickupObject(82);` — literal object ID.

## Object 83: ticket

- Resource room 46; verbs 3, 11, 12; [program](../zak/converted/scripts/LFv2_0046/ROv2/OCv2_0083.txt), [conditions/effects](scenes/room_046.md).
- [SCv2_0115.txt:31](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0009/SCv2_0115.txt): `[0085] (29)     setOwnerOf(83,14);` — literal object ID.
- [SCv2_0030.txt:159](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0045/SCv2_0030.txt): `[0235] (29)     setOwnerOf(83,2);` — literal object ID.
- [SCv2_0058.txt:11](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0045/SCv2_0058.txt): `[001E] (29)     setOwnerOf(83,2);` — literal object ID.
- [SCv2_0001.txt:28](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0049/SCv2_0001.txt): `[005C] (50) pickupObject(83);` — literal object ID.
- [SCv2_0001.txt:29](../docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0049/SCv2_0001.txt): `[005F] (29) setOwnerOf(83,14);` — literal object ID.

## Object 117: infrared sensor

- Resource room 2; verbs 253; [program](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0117.txt), [conditions/effects](scenes/room_002.md).
- [OCv2_0117.txt:4](../zak/converted/scripts/LFv2_0002/ROv2/OCv2_0117.txt): `[0022] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 210: (unnamed)

- Resource room 8; verbs 253; [program](../zak/converted/scripts/LFv2_0008/ROv2/OCv2_0210.txt), [conditions/effects](scenes/room_008.md).
- [OCv2_0210.txt:33](../zak/converted/scripts/LFv2_0008/ROv2/OCv2_0210.txt): `[0079] (A9)       setOwnerOf(VAR_ACTIVE_OBJECT1,10);` — contextual object program; runtime active object must still be checked.

## Object 236: viewscreen

- Resource room 10; verbs 12, 253; [program](../zak/converted/scripts/LFv2_0010/ROv2/OCv2_0236.txt), [conditions/effects](scenes/room_010.md).
- [OCv2_0236.txt:29](../zak/converted/scripts/LFv2_0010/ROv2/OCv2_0236.txt): `[00BF] (A9)       setOwnerOf(VAR_ACTIVE_OBJECT1,0);` — contextual object program; runtime active object must still be checked.

## Object 274: (unnamed)

- Resource room 13; verbs 253; [program](../zak/converted/scripts/LFv2_0013/ROv2/OCv2_0274.txt), [conditions/effects](scenes/room_013.md).
- [OCv2_0274.txt:4](../zak/converted/scripts/LFv2_0013/ROv2/OCv2_0274.txt): `[0013] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 276: (unnamed)

- Resource room 13; verbs 253; [program](../zak/converted/scripts/LFv2_0013/ROv2/OCv2_0276.txt), [conditions/effects](scenes/room_013.md).
- [OCv2_0276.txt:8](../zak/converted/scripts/LFv2_0013/ROv2/OCv2_0276.txt): `[003D] (D0)   pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 358: (unnamed)

- Resource room 17; verbs 253; [program](../zak/converted/scripts/LFv2_0017/ROv2/OCv2_0358.txt), [conditions/effects](scenes/room_017.md).
- [OCv2_0358.txt:5](../zak/converted/scripts/LFv2_0017/ROv2/OCv2_0358.txt): `[0019] (D0)   pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.

## Object 371: flyer

- Resource room 18; verbs 12, 253; [program](../zak/converted/scripts/LFv2_0018/ROv2/OCv2_0371.txt), [conditions/effects](scenes/room_018.md).
- [OCv2_0371.txt:52](../zak/converted/scripts/LFv2_0018/ROv2/OCv2_0371.txt): `[0173] (A9)             setOwnerOf(VAR_ACTIVE_OBJECT1,2);` — contextual object program; runtime active object must still be checked.

## Object 607: (unnamed)

- Resource room 41; verbs 253; [program](../zak/converted/scripts/LFv2_0041/ROv2/OCv2_0607.txt), [conditions/effects](scenes/room_041.md).
- [OCv2_0607.txt:5](../zak/converted/scripts/LFv2_0041/ROv2/OCv2_0607.txt): `[001A] (D0) pickupObject(VAR_ACTIVE_OBJECT1);` — contextual object program; runtime active object must still be checked.
