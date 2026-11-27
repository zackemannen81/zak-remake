# Journal

Newest first. Append only.

## 2026-11-21 — A008 SCUMM extraction audit and Codex handoff

**Handoff:** OpenAI assistant, source: A008 execution log provided by user plus read-only inventory of `C:\code\zac` and both observed `zak/converted` trees.
**Result:** 58 indexed EGA background PNGs plus hash manifest; 148 script disassemblies; English ScummTR dialogue; 58-room catalog/2,088 raw blocks; 578 raw object-image blocks inventoried; 0 object PNGs. Review of logged failed object-pairing assumptions and remaining original-LFL offset-table challenge. This is a documentation/handoff milestone, **not** proof of completed object extraction.
**Updated documentation:** `SCUMM_EXTRACTION_REPORT.md`, `CODEX_HANDOFF_SCUMM_OBJECTS.md`, `CURRENT_STATUS.md`, `SYSTEMDOC.md`, `FILESTRUCTURE.md`, `PROJECT_BRIEF.md`, `GDD.md` and draft task material. Existing user changes in task-workflow/template and untracked original assets were preserved.
**Verification:** Independent on-device manifest SHA-256 check: 58 of 58 indexed background PNGs matched recorded hashes in the in-repository copy. Object decoding tests were not run; Pillow-format checks are A008-reported.
**Next:** Codex follows the bounded object parsing/export task, selects canonical data source, validates room offsets, produces object/frame manifest and tests. Exact original source rights remain unresolved.
**Signed handoff:** ChatGPT / GPT-6 — 2026-11-21 (documentation only).

## Bootstrap

- Created by A008 project bootstrap.

## 2026-11-21 — ZMATAMR-0001 verifierad pipelinecheckpoint
Original-LFL-tabeller återställda och bytekopplade till samtliga 578 OIv2/OCv2. Exporterat 578 färg-PNG och 578 zplane-PNG, register över 762 tabellplatser. Sex tester passerar inklusive oberoende färgavkodning, omexport och skyddad hashbaslinje med 2 206 filer. Två zplane-gränser i rum 35 dokumenterade för runtimekontroll. GDD, scenatlas, pusselkontrakt och autonom Three.js-plan uppdaterade. 1 011 skript och 1 475 händelseingångar spårade i platta grafer. Nya POC-bilder genereras och granskas separat; ingen fullständig grafikersättning eller spelbar remake hävdas vid denna checkpoint. Ett TTS-prov och tre föreslagna ljudeffekter skapade med anpassade verktyg. Originaldumpen oförändrad.
Signerad: Codex — 2026-11-21. Uppgiften fortsätter med grafik, granskning och leveransmanifest.

## 2026-11-22 — ZMATAMR-0002 runtime checkpoint

**Result:** Room 1 initial slice start now uses the script-108 skip-intro position `(21,56)`; the normal intro branch starts at `(9,52)` and reaches `(21,56)`. Renderer drawability (`objectIsDrawable`) now additionally requires a registered visual, while engine/hit-test hotspot eligibility uses `objectIsTargetable` and is not coupled to art registration. This prevents missing artwork alone from erasing the source hotspot. No canonical global object-bit initialization was inferred: intro/global state and the full original draw semantics for objects such as 85/95 remain unresolved.
**Verification:** `npm test` — 9/9 passed. `npm run build` — `tsc --noEmit` and Vite production build passed. The browser smoke recorded in the earlier recovery checkpoint predates this hit-test change; no visual/browser recheck was run here.
**Updated documentation:** `CURRENT_TASK.md`, `CURRENT_STATUS.md`, `SYSTEMDOC.md`, `FILESTRUCTURE.md`, and `IMPLEMENTATION_PLAN.md` updated for this active slice. User-owned assets and pre-existing worktree content remain untouched.
**Next:** Verify the full intro/global object state path, then integrate catalog-backed room 1–3 art reversibly and record any missing image IDs; do not claim concept images are final or full SCUMM equivalence.

## 2026-11-22 — ZMATAMR-0002 reversible POC art preview

**Result:** Added an opt-in `?pocAssets=1` preview for selected room-1–3 background concepts and selected room-1 object concepts. Original art remains the normal default and the load-failure fallback; catalog concepts remain unapproved. Candidate UV crops, linear concept filtering, lazy Vite asset URLs, preview failure reporting, and registry tests for UV conversion/original-art restoration are in place.
**Verification:** `npm test` — 11/11 passed. `npm run build` — exited 0. No browser smoke of the new preview mode has been run yet, so no runtime missing-image IDs are confirmed.
**Updated documentation:** `CURRENT_TASK.md`, `CURRENT_STATUS.md`, `SYSTEMDOC.md`, `FILESTRUCTURE.md`, and `IMPLEMENTATION_PLAN.md` updated. Existing user assets remain untouched.
**Next:** Browser-smoke `?pocAssets=1`; then implement the ordinary original intro branch with source-backed dialogue, actor animation, transition, and intro music. Continue documenting exact missing candidate images if runtime loading reveals any.

## Runtime correction checkpoint
2026-11-25 — ChatGPT / GPT-6.2, ZMATAMR-0002 runtime correction: initialized original 780 global object owner/state bytes from XOR-decoded 00.LFL; room owner 15, Zak owner 1; intrinsic-bit patches separate from touchability; recursive exact parent-state gating; pickup sets intrinsic/untouchable; closed door gate. Follow-up uses ascending source slot hotspot priority, explicit open/close container preference, reverse source patch layering and permanent room-1 bed occlusion mask independent of color state. 34/34 Vitest tests pass, including coordinate-based kazoo, bill, egg, crayons and bed mask selection. Browser visual verification and full SCUMM script coverage remain open. User PNG edits preserved; no commit.

## Script interaction checkpoint
2026-11-25 — ChatGPT / GPT-6.2, ZMATAMR-0002 interaction checkpoint: inventory-to-inventory selection and combinations, persisted objectNames and scriptSequence afterWalk, source-backed wallpaper/phone bill map (SCv2_0061), crayon pickup and rename (OCv2_0117), cushion interactions (OCv2_0119 and 0131), cord/outlet (OCv2_0118). 38/38 Vitest tests pass; production build passed before adding regression tests. Right cushion distance-triggered reset, full original script VM, additional puzzles, browser visual tests remain open. No art changes or commit.

## Scene animation checkpoint
2026-11-25: Added bounded SCUMM v2 costume extraction for 2,3,17,18,34, transparent scene overlays, abbreviated deterministic TV timeline and baker bread drop, and cord ownership transfer/unplug. 43/43 tests passed. Original assets preserved. Costume placement, palette and visual playback await browser verification; not a full costume VM or original broadcast.

## Runtime asset consolidation
2026-11-25: Consolidated runtime assets in public/assets; 58 normal backgrounds, 578 object patches and 578 masks, 20 costume frames, 58 opt-in previews, actor and music. Existing UI retained. Source dumps and POC files unchanged. runtime-assets.json indexes public paths; tools/index_runtime_assets.py refreshes index for new PNGs. 51 tests passed. User room 1/2 and fish bowl images verified byte-identical.

## 2026-11-26 — ZMATAMR-0002 Scene Lab experiment
Built a separate room-1/2 PoC for independent masked state patches, full-image inpainting handoff, editable source-derived regions, approximate hinge/slide movement and clean-plate comparison. User example originals preserved; copies only. Export includes binary/alpha full-room masks, cropped RGBA patches, coordinate bundles and embedded project JSON. No service connected, no game logic or source art replaced. All 58 unit tests and production build passed. Headless Chromium exercised controls, state combinations, project round-trip, mask exports, motion, drag/undo and room 2 with no page errors. Bowl-only composite changed zero pixels outside its region. Found/fixed async mask-load/room-switch race; repeated smoke passed. Full 3D, real game integration and original unfinished script work remain open.
Signed: Codex — 2026-11-26.

## 2026-11-26 — ZMATAMR-0002 Scene Lab 02
User approved next geometry build after painted drawer-side example. Implemented real door slab rotation, open drawer geometry, cabinet-plane clipping, local reveal-image masks with procedural cavity/corridor fallback, side/back textures and removable gold test card with depth/raycast occlusion. Preserved prior project import and source artwork. 61 tests and production build passed. Headless UI verified visible pickup/undo, local image embedding/roundtrip, old project loading, closed pickup guard and canvas export; no page errors. Synthetic corridor, oblique camera and layer-level room compositing explicitly documented; no AI generation or gameplay integration claimed. Signed: Codex — 2026-11-26.

## 2026-11-26 — ZMATAMR-0002 Scene Lab 03
Implemented requested lighting/tint and invisible shadow receiver experiment using saved user dresser JSON as read-only reference. Shared serializable profile, Lambert surfaces, optional baked-front relighting, procedural cavity edges and real directional shadow maps with transparent receiver planes. 62 tests and build passed; headless Chromium confirmed direction/shadow/lighting pixel changes, helpers and roundtrip without shader/page errors. Screenshot visually reviewed. Clearly limited to local per-object passes; actor floor shadows/shared room scene remain future work. No source JSON or texture overwritten. Signed: Codex — 2026-11-26.

## 2026-11-26 — ZMATAMR-0002 Scene Lab 04
Implemented user-requested play from editor: actual game overlay, shared prop compositor, per-layer state rule, canonical-ID quad/extended-front hits, state-driven motion, room draft retention and isolated saves. Source gameplay rules preserved. 64 tests/build passed; headless UI exercised saved user project, original Open/Close behavior and state bits, retained drafts and return without authoring mutations. Screenshot inspected. Actor/prop shared depth and shadows, revised walkboxes/masks and missing original scripts remain open. Signed: Codex — 2026-11-26.

## 2026-11-26 — Scene Lab pickup correction
User reported kazoo/crayons unpickable and reversed egg art. Fixed authored-parent hit interception, added playtest missing-art item buttons invoking normal engine, and explicit present binding for room-owned item images. Existing original patch semantics retained. Unit regression verifies kazoo/crayon pickup, yellow crayon rename and egg parent/ownership behavior; 66 tests and build pass. User project files preserved; no missing artwork fabricated. Signed: Codex — 2026-11-26.

## 2026-11-26 — ZMATAMR-0002 cropped art and compact play UI
User completed playtest to airport, requested cropped art throughout, better inventory/menu layout and return to Walk. Imported all 58 selected backgrounds with byte/hash provenance and full UVs; default registration preserves lab overrides and original opt-out. Replaced tall inventory/sidebar with six-item paging beside verbs, game menu and collapsed diagnostics. Added post-action Walk reset without cancelling first item selection or pending approach. 69 tests passed, build passed; browser verified airport image request, four-page 23-item inventory, 800/390 responsive widths and real lab Open-to-Walk behavior. Existing six source aspect mismatches documented; source media and user JSON untouched. Missing airport scripts remain open. Signed: Codex — 2026-11-26.

## 2026-11-26 — ZMATAMR-0002 walkthrough scripting checkpoint
Audited supplied partial walkthrough against original flat scripts. Implemented bounded source-backed adapters for SF prerequisites, flight UI/cash/tickets/logical aliases, cabin puzzle, Seattle, summarized Annie exchange, Nepal and Zaire clue. Added persistent timings and seeded dance code, exact transactional VM diagnostics, NPC interaction fallbacks, Give selection and save validation. Source files, artwork, user projects and prior local work preserved. 79 tests pass; ten staged scenarios invoke real engine input with chapter fixtures. Browser verified real book/terminal/gate clicks, destination/menu visuals, arrival and saved cash/identity with no page errors.
Remaining work is explicit: full VM/actor scheduling, Switch/companions, original time-window/maze/choreography fidelity and subsequent puzzles/ending. This checkpoint is not full-game completion. Signed: Codex — 2026-11-26.

Verification completion: production build passed (both entries); existing bundle-size advisory remains. Browser screenshots inspected. No commit or push.

## 2026-11-26 — ZMATAMR-0002 object fallback regression
Compared A008 snapshot read-only. Both copies contained the background-wide suppression rule; enabling concept backgrounds by default exposed the issue across rooms. Replaced it with object-specific authoring coverage, including disabled/empty-layer hotspot fallback. User media (including existing room-3 background edit) and saved projects preserved. 80 tests and production build pass. Signed: Codex — 2026-11-26.

Fallback verification: browser exercised real fridge Open/Close, visible original open-fridge patch, egg pickup, cabinet Open and crayon pickup in both the normal game and an editor room with a new background but no object replacements. Original frame requests returned 200; screenshots inspected; no page errors. Existing saved 3D-drawer project also passed Open/Walk-reset/save smoke. 80 tests and build passed.

## 2026-11-26 — ZMATAMR-0002 mountain/cabin correction
Traced OC267/SC33, OC260/261/262 and cabin SC120 reset. Implemented source-class digging and knife conditions, appliance/bin hit priority, consumed-paper restoration and explicit egg retry accommodations. 83 tests passed; isolated Chromium UI verified oven-control-edge Open, egg placement, Turn on and timed smell dialogue; screenshot inspected, no page errors. Artwork, saved user projects and existing fallback work preserved. Full source scripting remains open. Signed: Codex — 2026-11-26.

Verification completion: npm run build passed; existing bundle-size advisory remains. No commit/push.

## 2026-11-26 — ZMATAMR-0002 original reference and missing-view audit
Read SC41/EN29, SC0001/SC108/SC127/SC115. Implemented original map inspection and initial Seattle ticket without inventing a round trip. Generalized existing costume decoder with bounds checks and command metadata: 39 costumes, 984 directional animation records, 771 cels; browsable 58-room/object/animation reference. Added six bounded NPC visual placements and explicit coverage report. Format cross-check: ScummVM costume.cpp; no copied implementation.
86 tests and production build pass. Isolated browser verified Look at wallpaper map, modal Done returning to cave, gallery selectors and Lou fallback load; screenshots inspected, no page errors. NPC original placement does not guarantee alignment/occlusion against new art. Full script/actor VM, Switch and ending remain open; requested all-room Scene Lab phase follows those. User artwork including room11 edits preserved. Signed: Codex — 2026-11-26.

## Original opening adaptation — 2026-11-26
- Replaced the abbreviated slideshow with 53 source-ordered phases based on SC1, SC127, SC111 and SC109: office actors and pacing, black intertitles, sequential 766/767/768, vision frames, concurrent credits, street transformations, chase, opposing panorama directions and flashing 761. Reuses original backgrounds/object patches and exported costume 30/31/32 atlases.
- Normal fresh entry starts the opening. Explicit room, skipIntro=1, intro=0 and editor play bypass it. Skip enters SC108 skip branch; completion enters ordinary wake-up. Menu replay freezes and resumes existing game instead of replacing it. Renderer gets a separate child surface so async loading cannot erase intro. Game input/save is blocked during playback.
- Verification: 89 unit/content tests pass. Browser checked office actors, startup survival, skip, replay and full phase traversal; original office/dream screenshots inspected.
- Remaining fidelity work: this is a deterministic authored adaptation, NOT execution of SC1 bytecode. Walk paths, frame cycling, palette remaps, credit trigger timing and wait-for-music timing are not exact SCUMM behavior. User intro track is retained; original sound81/music95 playback is not implemented. Full-script and all-room Scene Lab work remains open.
Signed: Codex — 2026-11-26.

## Scene Lab 05 — all resource rooms, 2026-11-26
Expanded selector and project validation from rooms1/2 to all58 extracted resource rooms, including special views. Preserve legacy PoC masters for1/2; other rooms use runtime cropped catalog or original background, with image-load fallback to original. Existing project format unchanged. Room drafts remain session-local; save each room before closing/reloading. Logical aliases share resource backgrounds and are not separate authored projects. Full script coverage remains unfinished.
Browser verified all58 loads, airport layer retention across room switches, embedded save/import round-trip and airport playtest, no page errors. Airport screenshot inspected. Existing89 tests pass; dedicated all-room catalog round-trip test added. No user artwork changed.
Signed: Codex.

## Character environment / Scene Lab 06 — 2026-11-27
GLB lighting now uses per-room Scene Lab lighting color, key intensity, ambient and direction in playtest. Ordinary play uses a warm default. Added an actor-only render target: each current animated silhouette produces a soft projected floor shadow, foot contact ellipse and faded floor reflection. Default reflection is subtle in room2 and off in other rooms. Profiles expose floor boundary, shadow/contact strengths, shadow length and reflection strength/stretch. Effects retain source actor coordinates and camera scrolling; original background pixels and user GLB files are unchanged.
Project v1 accepts optional actorEnvironment, validates finite ranges and retains compatibility with old files. Settings save with the room and reach GameRenderer through LabPlayRuntime. Scene Lab controls are under “Karaktär · ljus, skugga & reflektion”; use Provspela to preview them.
Limitations: image-space planar projection, not reconstructed floor/mirror geometry. Furniture does not receive shadows, floor boundary is horizontal, and reflective material regions are not masked individually. GLB self-shadow mapping was removed after visual inspection exposed acne in the mirrored coordinate system; cast shadow uses animated rendered silhouette. Actor effects add one fixed960×384 render pass. Room profiles from editor projects apply in playtest, not globally installed artwork.
Verification:92 tests passed; browser standard room2 GLB rendering and editor profile save/import/playtest passed without JS or shader errors after fixing reserved GLSL identifier. Screenshots inspected. Production build passed (known chunk advisory); final polish rechecked separately. No commit/push.
Signed: Codex — 2026-11-27.
