# ZMATAMR-0001 — Originalpipeline, GDD och POC
Status: In Progress
Owner: Codex
Created: 2026-11-21
Last updated: 2026-11-21

## Charter
Slutför användarens delar 0–5: fungerande objektpipeline, källgrundad GDD, verifierad leverans, nya premiumbilder för alla rum/objekt samt autonom utvecklingsplan. Den tidigare oaktiverade draftens snävare omfattning ersätts av användarens uttryckliga beställning. Ingen deployment eller publicering ingår.

## Definition of Done
Alla 578 OIv2 har spårbar status; exporter återkörs deterministiskt med autentiska dimensioner; råmaterial och bakgrunder är oförändrade. GDD skiljer original, slutsats och förslag och länkar register. POC-grafikens verkliga täckning och kvalitet verifieras. Utvecklingsplan innehåller körbara steg, självständiga standardbeslut och tester.

## Checklist / checkpoint
- [x] Läs tidigare dokument, A008-checkpoint, GDD och git-status; bevara användarändringar.
- [x] Ta bort publicerings-/godkännandekrav och generiska Expo-testkrav.
- [x] Hashbaslinje, jämförelse av källkopior och kanoniskt urval.
- [x] LFL-tabeller, objektbilder, djupmasker, register och tester.
- [x] Källregister för rum, skript, dialog, variabler och pussel.
- [x] GDD och autonom implementationsplan.
- [ ] Premiumgrafik för 58 bakgrunder och alla spelobjekt.
- [x] Anpassade ljudverktyg med talprov och tre effekter.
- [ ] Slutverifiering, manifest, status och signerad journal.

## Findings
ScummVM v2.9.0 object.cpp resetRoomObjects/resetRoomObject och gfx.cpp GdiV2::prepareDrawBitmap är referenser. V2-mask är z-plane, inte alfa. docs/gamefiles och verktygsmappens LFL skiljer sig; använd den kopia som byteverifieras mot dumpen, blanda inte offsetar mellan dem. Pågående lokala ändringar lämnas orörda utanför beställd dokumentuppdatering.

## Verifierad checkpoint
578 färg- och 578 mask-PNG, 58 rumsregister, 1011 scriptutskrifter, 1856 dialog/namnposter; 2206 skyddade filer oförändrade. Två masker markerade för runtimekontroll. Alla observerade 6904 kodreferenser har kontrollerats mot fil/rad. POC-bilder genereras vidare; aktuellt snapshot finns i zak/converted/metadata/verification.json. Direkt ultrabred generering misslyckades; letterbox-master med UV-crop bevarar proportionerna bättre och prövas nu.

## Aktiv checkpoint
Originalexport, källgrafer, PseudoRoom och gångytor är verifierade. Bildgenerering använder nu enbart originalpatchen som bildreferens och explicit textkontext. Tvåreferensmetoden gav för stora utsnitt; berörda versioner bevaras och korrigeras. Körköerna generation_jobs_resume.json och generation_jobs_crop_correction.json är sparade före körning. Fullt C: avhjälpt med hashverifierad flytt av POC-bilder till D: bakom samma kataloglänkar. Kvar: samtliga koncept, visuell QA, manifest/slutrapport.

### Fördjupad checkpoint: logik och rum
1 011 platta skriptgrafer, 19 236 instruktioner och 1 475 händelseingångar; kontrollflödestester passerar inklusive cutscene override. 88 byteverifierade PseudoRoom-alias återanvänder de 58 grafiska rumsresurserna. `ROOM_GRAPH.md`, `docs/scenes/room_NNN.md`, `metadata/event_contracts.json` och `metadata/logical_room_map.json` är implementationens källbilagor. Kör `build_event_contracts.py`, `test_event_contracts.py` och `build_room_links.py` efter källkatalogen.
