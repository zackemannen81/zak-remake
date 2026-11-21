# Current Status
Updated: 2026-11-21 · ZMATAMR-0001 · Codex

## Verifierad originalpipeline
- 578/578 OIv2 identifierade med intakta LFL-tabeller och full bytejämförelse; 578 färg-PNG och 578 separata zplane-PNG i `zak/converted/images/objects/`.
- 0 färgbilder oexporterade. Två zplane-gränser (rum35, objekt553/554) är öppna runtimefrågor. Åtta andra splitgränser använder en byte från intakt LFL och redovisas uttryckligen.
- 762 objekttabellposter bevarade, inklusive dubblett-ID384 i rum19 och 183 poster utan eget dumpat OI. Bildoffsetalias är dokumenterade.
- 58 tidigare bakgrunder återanvända. 2 206 skyddade käll-/bakgrundsfiler hashkontrollerade oförändrade.
- Sex pipeline-tester passerade; senare ändringar ska köras igen vid slutcheckpoint. Samtliga PNG-färgpixlar jämförs med separat RLE-expansion och en full återkörning jämför filer bytevis.
- 1 011 disassemblies: 148 tidigare SC, 761 OC, 57 EN, 45 EX. 1 856 dialog-/namnposter, 169 variabelnycklar, 6 904 statiska kodreferenser med giltiga fil-/radlänkar.

## Dokumentation och produktionsunderlag
GDD v0.2, komplett resursbaserad scenatlas för alla 58 rum, pusselkontrakt, statiska interaktions-/animations-/övergångsregister och autonom 15-stegs implementationsplan finns. GDD skiljer verifierad data, härledning och remakeförslag. Full semantisk pussel-/actor-/variabelmappning och runtimegenomspelning är inte färdiga.

## POC-grafik och ljud
Ny premiumgrafik produceras i `zak/converted/poc/`, med originalbilder som referens. Exakta aktuella antal och återstående poster finns i `poc/asset_queue.json` och `metadata/verification.json`; dessa regenereras vid checkpoints och är snapshots, inte realtidsräknare. Bilder är koncept tills perspektiv/placering och state-patchfunktion verifierats. Ultrabreda bilder använder svart letterbox-master med föreslagen UV-visning; direkt generering ändrade annars bildförhållandet.

Anpassat `tools/tts_zak.py` har genererat ett fungerande engelskt POC-talprov. `tools/poc_sfx.py` har skapat tre verifierade mono-PCM-effekter. Ingen full dubbning eller original-SOv2-avkodning påstås.

## Kvar
Slutför och granska hela POC-assetmängden, särskilt bakgrundsändrings-/borttagningsbilder och UI. Verifiera två maskgränser med originalruntime. Avkoda kostymer/ljud och runtimevalidera de 323 exporterade gångytorna och kör pusselreplays under spelimplementation. Spelet är ännu inte implementerat. Grundmotor och rum1–3-skiva kan startas med nuvarande register enligt IMPLEMENTATION_PLAN.md.

Kanonisk källa är verktygsmappens LFL; `docs/gamefiles` skiljer sig (6/59 identiska) och har inte ändrats. Ingen commit/push eller publicering har utförts. Befintliga användarändringar och rådump är bevarade.

### Fördjupad checkpoint: logik och rum
1 011 platta skriptgrafer, 19 236 instruktioner och 1 475 händelseingångar; kontrollflödestester passerar inklusive cutscene override. 88 byteverifierade PseudoRoom-alias återanvänder de 58 grafiska rumsresurserna. `ROOM_GRAPH.md`, `docs/scenes/room_NNN.md`, `metadata/event_contracts.json` och `metadata/logical_room_map.json` är implementationens källbilagor. Kör `build_event_contracts.py`, `test_event_contracts.py` och `build_room_links.py` efter källkatalogen.
