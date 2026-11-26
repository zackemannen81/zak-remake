# ZMATAMR-0001 — Originalpipeline, GDD och POC
Status: Paused
Owner: Codex
Created: 2026-11-21
Last updated: 2026-11-21

## Charter
Slutför användarens delar 0–5: fungerande objektpipeline, källgrundad GDD, verifierad leverans, nya premiumbilder för alla rum/objekt samt autonom utvecklingsplan. Den tidigare oaktiverade draftens snävare omfattning ersätts av användarens uttryckliga beställning. Ingen deployment eller publicering ingår.

## Definition of Done
Alla 578 OIv2 har spårbar status; exporter återkörs deterministiskt med autentiska dimensioner; råmaterial och bakgrunder är oförändrade. GDD skiljer original, slutsats och förslag och länkar register. POC-grafikens verkliga täckning och kvalitet verifieras. Utvecklingsplan innehåller körbara steg, självständiga standardbeslut och tester.

## Checkpoint
- [x] Läs tidigare dokument, A008-checkpoint, GDD och git-status; bevara användarändringar.
- [x] Ta bort publicerings-/godkännandekrav och generiska Expo-testkrav.
- [x] Hashbaslinje, jämförelse av källkopior och kanoniskt urval.
- [x] LFL-tabeller, objektbilder, djupmasker, register och tester.
- [x] Källregister för rum, skript, dialog, variabler och pussel.
- [x] GDD och autonom implementationsplan.
- [ ] Premiumgrafik för 58 bakgrunder och alla spelobjekt.
- [x] Anpassade ljudverktyg med talprov och tre effekter.
- [ ] Slutverifiering, manifest, status och signerad journal.

## Findings and verified checkpoint
ScummVM v2.9.0 object.cpp resetRoomObjects/resetRoomObject och gfx.cpp GdiV2::prepareDrawBitmap är referenser. V2-mask är z-plane, inte alfa. docs/gamefiles och verktygsmappens LFL skiljer sig; använd den kopia som byteverifieras mot dumpen, blanda inte offsetar mellan dem.

578 färg- och 578 mask-PNG, 58 rumsregister, 1011 scriptutskrifter, 1856 dialog/namnposter; 2206 skyddade filer oförändrade. Två masker markerade för runtimekontroll. Alla observerade 6904 kodreferenser har kontrollerats mot fil/rad. POC-bilder genereras vidare; aktuellt snapshot finns i zak/converted/metadata/verification.json. Letterbox-master med UV-crop används för panoramor. Originalexport, källgrafer, PseudoRoom och gångytor är verifierade. 1 011 platta skriptgrafer, 19 236 instruktioner och 1 475 händelseingångar; kontrollflödestester passerar inklusive cutscene override. 88 byteverifierade PseudoRoom-alias återanvänder de 58 grafiska rumsresurserna. Täydet yksityiskohdat ja ajot docs/CURRENT_STATUS.md, docs/ASSET_PIPELINE.md ja docs/IMPLEMENTATION_PLAN.md.

## Pause decision and resumption
Paused to prioritize the user's newly explicit request to begin an actual Three.js game implementation. This is a deliberate sequencing decision, not an external blocker. Resume the remaining premium-art QA/coverage and final delivery manifest after independent engine milestones. Preserve all generated assets and prior checkpoints; do not repeat original extraction or overwrite user files.

## Next
Continue from the POC image queue, inspect its latest verification snapshot, review concepts against source composition/state, complete final verification and journal. Game implementation is tracked separately as ZMATAMR-0002.
