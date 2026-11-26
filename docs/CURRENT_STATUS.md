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

## Scene Lab — 2026-11-26
Separate visual PoC available at `/scene-lab.html`, rooms 1–2. Supplied room-1 master/edit examples are copied under public/assets/scene-lab. Independent masked patches and approximate hinged/sliding previews can be compared and saved; full-resolution masks and patch-coordinate bundles export locally. 58/58 unit tests, production build and headless UI smoke passed. Not integrated with gameplay scripts. See SCENE_LAB.md.

## Scene Lab 02 — 2026-11-26
Hinged/sliding now use actual Three.js geometry under an oblique orthographic projection. Desk drawer and door preset includes local reveal placeholders, material/depth controls and removable, depth-occluded test card. Local images embed on save; prior projects load. 61 tests, build and headless UI checks passed. This remains an editor PoC with no game logic integration or calibrated camera. See SCENE_LAB.md for current limitations.

## Scene Lab 03 — 2026-11-26
Room light/tint/ambient, approximate cavity shading and dynamic per-object shadow receivers added. User's saved dresser drawer verified in headless browser; 62 tests and build passed. Shared light profile serializes with project. Receivers remain screen-aligned local planes; characters and room-wide shadow interaction are not yet integrated. See SCENE_LAB.md.

## Scene Lab 04 runtime preview — 2026-11-26
Added header playtest overlay using real engine and same-origin in-memory project transfer. Shared compositor generates dynamic canvas backgrounds from original object state; adjusted quad/front hit-testing retains canonical object IDs. Moving layers interpolate; user-selectable visual state binding. Session room drafts survive editor room changes; test saves isolated; return preserves authoring data. 64 tests/build and headless real Open/Close interaction passed. Original walkboxes/z-masks remain; actor/prop shared geometry/light/shadow integration is still open.

## Playtest pickup correction — 2026-11-26
Container hit priority fixed for un-authored children. Preview lists targetable contained items without art so original pickup scripts can be tested. New present binding supports egg/item sprites disappearing on pickup while respecting parent state. 66 tests/build passed. User artwork and JSON untouched.

## Cropped rollout and compact UI — 2026-11-26
User reports completing San Francisco through airport. All 58 cropped room backgrounds copied byte-identically to `public/assets/cropped/backgrounds/`; manifest now uses full-image UV (null), default game loads these, authored lab room canvases take precedence, `?originalAssets=1` restores original backgrounds. `tools/import_cropped_backgrounds.py` preserves selected version basename where available, otherwise selects last version; report includes source, size, hash and aspect mismatch. Originals and user's saved editor files preserved.

UI now has one bounded scene/dialogue/verb+inventory layout; inventory has six readable items per page with Previous/Next controls, selected item text persists across pages, menu holds Save/Load/intro/status and diagnostics are collapsed. Completed object actions and completed inventory combinations reset to Walk to; first inventory selection and pending approach preserve the intended action.

Verification: 69 tests and build passed; browser verified airport background, 23-item pagination (four pages), desktop layout and 800/390 widths without overflow, and real editor drawer open followed by Walk reset and isolated save. Six existing cropped inputs have aspect deviations >2% (rooms 3,11,17,26,52,54; see evidence report); no hidden recropping/stretching of files was performed. Renderer still fits backgrounds to original room geometry. Missing script support at airport remains outside this change.

## Walkthrough-driven progression — 2026-11-26
Implemented bounded adapters from the supplied walkthrough through the Zaire clue: missing SF tools/disguise/application/pipe behavior, original airport fares and ticket replacement, logical destination identity, cabin flooding/egg/oxygen/lighter chain, Seattle cave/crystal, summarized Annie artifact exchange, Nepal guard/Guru/yak and Zaire traversal/trade. UI provides named NPC fallback controls and flight destination choices; Give retains its selected item and completed actions return to Walk.
79 automated tests pass. Ten new scenarios use actual engine action dispatch with chapter inventory fixtures; timer and dance resume deterministically. Headless browser independently verified CashCard book purchase, flight terminal, Seattle ticket, boarding/arrival and saved balance/logical room, without page errors. These checks do not establish a full fresh-game completion. Full Switch/companion control, remaining original scripts, original NPC timelines and the ending remain open. Details and source contracts: SCRIPT_PROGRESS.md.

Verification completion: production build passed (both entries); existing bundle-size advisory remains. Browser screenshots inspected. No commit or push.

## Object fallback restored — 2026-11-26
Fixed invisible state changes over new backgrounds: the room-wide concept-image filter incorrectly suppressed original object patches. Original art now remains available per object; authored lab replacements suppress only their own object IDs. New cropped backgrounds, source state gating, item ownership and user-authored geometry are retained. 80 tests and production build pass.

Fallback verification: browser exercised real fridge Open/Close, visible original open-fridge patch, egg pickup, cabinet Open and crayon pickup in both the normal game and an editor room with a new background but no object replacements. Original frame requests returned 200; screenshots inspected; no page errors. Existing saved 3D-drawer project also passed Open/Walk-reset/save smoke. 80 tests and build passed.

## Mountain/cabin gameplay correction — 2026-11-26
Added source-compatible digging tool/knife conditions and oven/bin coordinate command targeting. Consumed toilet paper returns on next cabin entry. Interrupted egg attempts remain retryable; pending cooking must finish before landing. 83 tests passed; real browser oven Open/egg/Turn on/explosion verified. Full source actor/room scripting remains incomplete; retry accommodations are documented in SCRIPT_PROGRESS.md.

## Original-reference delivery — 2026-11-26
Look at drawn maps now opens original room29 in a modal without leaving current location. New games include the boss's Seattle ticket; source evidence supports one-way consumption, not a free return. Original reference browser at /original-reference.html (also Game menu) contains 58 rooms, 39 costumes, 984 directional animation previews and 771 cel images. MISSING_VIEWS.md lists every room/logical variant and remaining special-view/runtime work; full-script-inventory.json records 1,011 source files and 19,236 instructions.
Six reviewed NPC placements use extracted original visuals; full actor script choreography, palettes, masking/alignment against new backgrounds and companion/game completion remain incomplete. 86 tests and build pass; browser map/gallery/NPC smoke passed. All-room Scene Lab remains a later requested phase after complete gameplay support.

## Original opening adaptation — 2026-11-26
- Replaced the abbreviated slideshow with 53 source-ordered phases based on SC1, SC127, SC111 and SC109: office actors and pacing, black intertitles, sequential 766/767/768, vision frames, concurrent credits, street transformations, chase, opposing panorama directions and flashing 761. Reuses original backgrounds/object patches and exported costume 30/31/32 atlases.
- Normal fresh entry starts the opening. Explicit room, skipIntro=1, intro=0 and editor play bypass it. Skip enters SC108 skip branch; completion enters ordinary wake-up. Menu replay freezes and resumes existing game instead of replacing it. Renderer gets a separate child surface so async loading cannot erase intro. Game input/save is blocked during playback.
- Verification: 89 unit/content tests pass. Browser checked office actors, startup survival, skip, replay and full phase traversal; original office/dream screenshots inspected.
- Remaining fidelity work: this is a deterministic authored adaptation, NOT execution of SC1 bytecode. Walk paths, frame cycling, palette remaps, credit trigger timing and wait-for-music timing are not exact SCUMM behavior. User intro track is retained; original sound81/music95 playback is not implemented. Full-script and all-room Scene Lab work remains open.
