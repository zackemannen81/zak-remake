# Current Status
Updated: 2026-11-22 · ZMATAMR-0002 · Agent 008

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
Slutför och granska hela POC-assetmängden, särskilt bakgrundsändrings-/borttagningsbilder och UI. Verifiera två maskgränser med originalruntime. Avkoda kostymer/ljud och runtimevalidera de 323 exporterade gångytorna och kör pusselreplays under spelimplementation. En första webbruntime finns för en vertikal slice av rum 1–3, men detta är inte ett färdigt spel eller fullständig SCUMM-runtime.

Kanonisk källa är verktygsmappens LFL; `docs/gamefiles` skiljer sig (6/59 identiska) och har inte ändrats. Ingen commit/push eller publicering har utförts. Befintliga användarändringar och rådump är bevarade.

### Fördjupad checkpoint: logik och rum
1 011 platta skriptgrafer, 19 236 instruktioner och 1 475 händelseingångar; kontrollflödestester passerar inklusive cutscene override. 88 byteverifierade PseudoRoom-alias återanvänder de 58 grafiska rumsresurserna. `ROOM_GRAPH.md`, `docs/scenes/room_NNN.md`, `metadata/event_contracts.json` och `metadata/logical_room_map.json` är implementationens källbilagor. Kör `build_event_contracts.py`, `test_event_contracts.py` och `build_room_links.py` efter källkatalogen.

## Spelimplementation — ZMATAMR-0002 (pågående)
En TypeScript/Vite/Three.js-runtime för rum 1–3 finns nu i `src/`. Rum 1:s state-fabrik använder `(21,56)` från script 108:s skip-intro-gren; normalgrenen börjar vid `(9,52)` och når samma position. `objectIsDrawable` kräver registrerad visuell resurs, medan `objectIsTargetable` avgör hotspot-eligibility utan att saknad grafik i sig tar bort interaktion. Den nuvarande tomma object-state-mapen är ett runtime-default, inte ett påstående om samtliga state-värden efter originalets intro; globala initvärden och objekt 85/95:s fulla draw-semantik är fortfarande öppna källfrågor. `npm test`: 9/9 passerade. `npm run build`: `tsc --noEmit` och Vite production build passerade. Browser smoke har inte körts igen efter den senaste hit-test-ändringen.

### Opt-in POC-grafikpreview
`?pocAssets=1` laddar katalogens valda rum-1–3-bakgrundskandidater och utvalda rum-1-objektkandidater. Förhandsvisningen är opt-in; originalgrafik är fortsatt standard och fallback. Katalogkandidaterna är koncept, inte godkända produktionsbilder. UV-beskärning och linjär filtrering används för konceptbilder. Efter denna ändring passerade `npm test` 11/11 och `npm run build` (exit 0). Preview-läget har ännu inte browser-smoketestats; inga exakta runtime-saknade bild-ID:n är därför bekräftade. Laddningsfel rapporteras i spelets preview-status och konsol.

## Runtime correction checkpoint
2026-11-25 — ChatGPT / GPT-6.2, ZMATAMR-0002 runtime correction: initialized original 780 global object owner/state bytes from XOR-decoded 00.LFL; room owner 15, Zak owner 1; intrinsic-bit patches separate from touchability; recursive exact parent-state gating; pickup sets intrinsic/untouchable; closed door gate. Follow-up uses ascending source slot hotspot priority, explicit open/close container preference, reverse source patch layering and permanent room-1 bed occlusion mask independent of color state. 34/34 Vitest tests pass, including coordinate-based kazoo, bill, egg, crayons and bed mask selection. Browser visual verification and full SCUMM script coverage remain open. User PNG edits preserved; no commit.

## Script interaction checkpoint
2026-11-25 — ChatGPT / GPT-6.2, ZMATAMR-0002 interaction checkpoint: inventory-to-inventory selection and combinations, persisted objectNames and scriptSequence afterWalk, source-backed wallpaper/phone bill map (SCv2_0061), crayon pickup and rename (OCv2_0117), cushion interactions (OCv2_0119 and 0131), cord/outlet (OCv2_0118). 38/38 Vitest tests pass; production build passed before adding regression tests. Right cushion distance-triggered reset, full original script VM, additional puzzles, browser visual tests remain open. No art changes or commit.

## Scene animation checkpoint
2026-11-25: Added bounded SCUMM v2 costume extraction for 2,3,17,18,34, transparent scene overlays, abbreviated deterministic TV timeline and baker bread drop, and cord ownership transfer/unplug. 43/43 tests passed. Original assets preserved. Costume placement, palette and visual playback await browser verification; not a full costume VM or original broadcast.

## Runtime asset consolidation
2026-11-25: Consolidated runtime assets in public/assets; 58 normal backgrounds, 578 object patches and 578 masks, 20 costume frames, 58 opt-in previews, actor and music. Existing UI retained. Source dumps and POC files unchanged. runtime-assets.json indexes public paths; tools/index_runtime_assets.py refreshes index for new PNGs. 51 tests passed. User room 1/2 and fish bowl images verified byte-identical.
