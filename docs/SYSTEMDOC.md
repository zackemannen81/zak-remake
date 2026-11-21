# System Document
Updated: 2026-11-21 · ZMATAMR-0001

## Befintlig pipeline
1. Kanonisk källa `docs/scummvm-tools-2.9.0-win32-x86_64/zak/*.LFL`, läst utan skrivning. A008:s dump, bakgrunder, dialog och 148 SC-utskrifter återanvänds.
2. `tools/export_objects.py`: XOR-avkodning i minne, riktiga roomtabeller, bild-ID/offset/dimensioner, kolumn-RLE, separat z-plane och JSON-register. Output `zak/converted/images/objects`.
3. `tools/build_source_catalog.py`: kompletterar OC/EN/EX med descumm -2 och bygger rum, verbhändelser, instruktioner, variabler, actor-/inventarieanrop, transitioner, animationsanrop, dialog och scenatlas. Output `zak/converted/metadata` och `scripts`.
4. `tools/test_pipeline.py`: källinvarians, färg-/maskfall, alla originalpixlar mot separat decoder, skyddade outputpaths och byteidentisk återkörning.
5. `tools/verify_delivery.py`: källhashar, PNG/hash/mått, kod-/bildkoppling, radreferenser, POC-täckning, bildformat och ffmpeg-ljudkontroll; skriver verifieringsrapport och leveransmanifest.
6. `tools/tts_zak.py` och `tools/poc_sfx.py`: POC-ljud med stabila ID, hashar och återkörning. TTS-speaker är explicit olöst tills runtimebindning finns.

## Gränser
Originalets objektbilder är opaka state-rektanglar. Z-plane är inte alfa. Moderniserade cutouts och bildpatchar är separata produkter med egen status. AI/TTS kan inte lovas bitreproducerbara från enbart prompt; spara valda filer med hash och referens. Varken sourceplats för script/dialog eller statiskt anrop bevisar runtimeplats/nåbarhet.

Fullständigt formatkontrakt, källversioner, maskavvikelser och reproduktionskommandon: ASSET_PIPELINE.md. Spelarkitektur: GDD.md och IMPLEMENTATION_PLAN.md. Ingen browser-runtime finns ännu; den planerade renderaren äger inte spelstatus. Original-ID, scheduler och koordinatadapter är kärnkontrakt.

### Fördjupad checkpoint: logik och rum
1 011 platta skriptgrafer, 19 236 instruktioner och 1 475 händelseingångar; kontrollflödestester passerar inklusive cutscene override. 88 byteverifierade PseudoRoom-alias återanvänder de 58 grafiska rumsresurserna. `ROOM_GRAPH.md`, `docs/scenes/room_NNN.md`, `metadata/event_contracts.json` och `metadata/logical_room_map.json` är implementationens källbilagor. Kör `build_event_contracts.py`, `test_event_contracts.py` och `build_room_links.py` efter källkatalogen.

### Navigations- och inventariekontrakt
`walkboxes.json` bevarar 323 gångboxar från alla 58 BXv2. Actor-enheter konverteras med x*8,y*2 enligt ScummVM v2.9.0 actor.h; object walk-positioner och bildrektanglar har separata format och får inte skalas dubbelt. Originalens vägvalsmatriser används av kompatibilitetslagret. `inventory_catalog.json` skiljer numerisk objektidentitet från kontextuell VAR_ACTIVE_OBJECT1-association och helt dynamiska ägaruttryck. UI och renderer ska läsa dessa register genom validerade TypeScript-scheman.
