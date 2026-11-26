# File Structure
Updated: 2026-11-22

- `AGENTS.md`, `docs/CURRENT_TASK.md`, `TASK_WORKFLOW.md`, `TASK_IDS.md`, `CONTRIBUTING.md`: docs-first och autonom uppgiftsstatus.
- `docs/GDD.md`, `SCENE_ATLAS.md`, `PUZZLE_SPEC.md`, `IMPLEMENTATION_PLAN.md`: aktuell spel- och produktionsspecifikation.
- `src/main.ts`, `src/style.css`: app bootstrap and canvas/UI styling.
- `src/content/`: imported room data, visual manifest/registry catalog and source-object policies; `pocAssets.ts` provides lazy URLs for selected in-review concepts in the opt-in preview.
- `src/core/`: game state, engine, movement and scheduler; `game.test.ts` covers room data, interactions, movement and save/replay basics.
- `src/render/GameRenderer.ts`: Three.js room, actor, visual loading and hotspot input, including UV crops, per-kind filtering and original-art fallback. `visualRegistry.test.ts` covers UV conversion and restoring original art after an override is cleared.
- `src/scenes/`, `src/ui/`, `src/save/`, `src/audio/`: scene scripts, controls, persistence and media manifest/bindings.
- `package.json`, lockfile, `vite.config.ts`, `tsconfig.json`: local TypeScript/Vite app and reproducible dependencies.
- `docs/evidence/`: hashbaslinje, källkopiejämförelse, visuella granskningsbilder, äldre GDD och versionsbundna ScummVM-källor.
- `docs/adr/0001-source-and-runtime.md`: kanonisk källa och designbeslut.
- `tools/export_objects.py`, `build_source_catalog.py`, `test_pipeline.py`, `verify_delivery.py`: originalpipeline och kontroller.
- `tools/tts_zak.py`, `poc_sfx.py`: nya Zak-anpassade POC-ljudverktyg.
- `zak/converted/images/objects/room_NNN/object_NNNN/`: `frame_000.png` och `zplane_000.png`; centralt `objects.json`.
- `zak/converted/scripts/LFv2_NNNN/ROv2/`: kompletterande OC/EN/EX-utskrifter.
- `zak/converted/metadata/`: rooms, scripts, dialogue, variables, references, transitions, inventory_actions, actor_actions, animations, interactions, opcodes, scene_labels, coverage och verification JSON.
- `zak/converted/poc/backgrounds/room_NNN/`: versionssatta nya bildkoncept.
- `zak/converted/poc/objects/room_NNN/object_NNNN/`: nya objektkoncept.
- `zak/converted/poc/audio/`: voice och sfx, med separata manifest.
- `zak/converted/poc/asset_queue.json`: alla 58+578 beställda bildposter och faktisk genereringsstatus.
- `zak/converted/delivery_manifest.json`: SHA-256 för genererade leveransfiler.

## Tidigare material, bevarat
`docs/scummvm-tools-2.9.0-win32-x86_64/zak/` innehåller kanoniska LFL, dump och A008:s converted (58 bakgrunder, dialog, 148 SC-skript, bakgrundsexportör). Den tidigare tomma objectsmappen där innehåller också en tidig exportkopia; projektrotens zak/converted är aktuell leverans. `docs/gamefiles/` är en annan LFL-kopia och får inte blandas med offsetarna. `docs/tools/tts/` är tidigare projekts ljudverktyg och är bevarade. `A008_session-work.txt` är historiskt arbetsunderlag, inte nya instruktioner. `docs/GAME_SOLUTION.md` är walkthroughunderlag, inte runtimebevis.

### Fördjupad checkpoint: logik och rum
1 011 platta skriptgrafer, 19 236 instruktioner och 1 475 händelseingångar; kontrollflödestester passerar inklusive cutscene override. 88 byteverifierade PseudoRoom-alias återanvänder de 58 grafiska rumsresurserna. `ROOM_GRAPH.md`, `docs/scenes/room_NNN.md`, `metadata/event_contracts.json` och `metadata/logical_room_map.json` är implementationens källbilagor. Kör `build_event_contracts.py`, `test_event_contracts.py` och `build_room_links.py` efter källkatalogen.

### Kompletterande register och bildverktyg
- `docs/INVENTORY_ATLAS.md`, `metadata/inventory_catalog.json`: 67 objekts ägar-/pickup-evidens och 37 dynamiska operationer.
- `metadata/walkboxes.json`: 58 rum, 323 gångboxar, pixel-/actor-koordinater och nästa-box-matriser.
- `tools/run_asset_pipeline.py`: samlad reproduktion och verifiering.
- `tools/build_asset_gallery.py`, `build_object_viewports.py`, `build_poc_provenance.py`: lokal jämförelsevisare, UV-kandidater och prompt/hash-proveniens.
- `tools/reuse_identical_poc_states.py`: samma genererade bild återanvänds för byteidentiska originalbilder inom samma rum.
- `tools/build_correction_review.py`: separat granskning av korrigerade versioner.
- `zak/converted/poc/asset_review.html`: local asset gallery/UV review, separate from the game runtime.
- `zak/converted/poc/provenance.json`, `reused_state_images.json`, `object_viewports.json`: spårbarhet och föreslagna visningsutsnitt.

## Runtime correction checkpoint
2026-11-25 — ChatGPT / GPT-6.2, ZMATAMR-0002 runtime correction: initialized original 780 global object owner/state bytes from XOR-decoded 00.LFL; room owner 15, Zak owner 1; intrinsic-bit patches separate from touchability; recursive exact parent-state gating; pickup sets intrinsic/untouchable; closed door gate. Follow-up uses ascending source slot hotspot priority, explicit open/close container preference, reverse source patch layering and permanent room-1 bed occlusion mask independent of color state. 34/34 Vitest tests pass, including coordinate-based kazoo, bill, egg, crayons and bed mask selection. Browser visual verification and full SCUMM script coverage remain open. User PNG edits preserved; no commit.

## Script interaction checkpoint
2026-11-25 — ChatGPT / GPT-6.2, ZMATAMR-0002 interaction checkpoint: inventory-to-inventory selection and combinations, persisted objectNames and scriptSequence afterWalk, source-backed wallpaper/phone bill map (SCv2_0061), crayon pickup and rename (OCv2_0117), cushion interactions (OCv2_0119 and 0131), cord/outlet (OCv2_0118). 38/38 Vitest tests pass; production build passed before adding regression tests. Right cushion distance-triggered reset, full original script VM, additional puzzles, browser visual tests remain open. No art changes or commit.

## Scene animation checkpoint
2026-11-25: Added bounded SCUMM v2 costume extraction for 2,3,17,18,34, transparent scene overlays, abbreviated deterministic TV timeline and baker bread drop, and cord ownership transfer/unplug. 43/43 tests passed. Original assets preserved. Costume placement, palette and visual playback await browser verification; not a full costume VM or original broadcast.

## Runtime asset consolidation
2026-11-25: Consolidated runtime assets in public/assets; 58 normal backgrounds, 578 object patches and 578 masks, 20 costume frames, 58 opt-in previews, actor and music. Existing UI retained. Source dumps and POC files unchanged. runtime-assets.json indexes public paths; tools/index_runtime_assets.py refreshes index for new PNGs. 51 tests passed. User room 1/2 and fish bowl images verified byte-identical.

## Scene Lab files — 2026-11-26
- `scene-lab.html`, `src/lab/main.ts`, `lab.css`: separate local experiment UI.
- `src/lab/model.ts`, `render.ts`, `model.test.ts`: project/geometry validation, compositing and tests.
- `public/assets/scene-lab/`: copied user room-1 master/edit examples and cropped room-2 master; source images preserved.
- `docs/SCENE_LAB.md`: minimum scope, usage, verification and limitations.
- `vite.config.ts`: game and lab HTML production entry points.

- 2026-11-26 Scene Lab 02: `src/lab/geometry.ts` (Three.js mesh preview and ray picking), `src/lab/geometry.test.ts` (closed registration, hinge/thickness invariants and settings validation). Existing lab UI/model extended for local reveals, side/back textures and movable content.

- 2026-11-26 Scene Lab 03 extends existing `model.ts`, `geometry.ts`, `main.ts` and `geometry.test.ts` with validated room lighting, shadow receivers, comparison controls and round-trip checks. No new source media; downloaded user project read-only.

- Scene Lab 04: `src/lab/compositor.ts` shared rendering; `playRuntime.ts` validated project loading/state animation/canvas updates; `playState.ts` visual eligibility and hit mapping; `playState.test.ts` real engine open/close regression. `src/main.ts` adds opt-in iframe handoff/isolation; `GameRenderer.ts` adds authored canvas/hit hooks. Existing normal game path preserved.

- Pickup correction: existing lab playState/model/main/playRuntime and game bootstrap updated; no new asset or source file paths.

- 2026-11-26: `tools/import_cropped_backgrounds.py`, `docs/evidence/cropped-background-import.json`, `public/assets/cropped/backgrounds/room_NNN/` implement reproducible cropped asset rollout. `src/core/actionReset.test.ts` covers post-action Walk and two-item selection. `src/ui/gameShell.ts`/`style.css` provide compact controls and six-item paging.

- `src/scenes/progression.ts`: reviewed walkthrough gameplay, airport route tables, named NPC choices and timed adapters.
- `src/core/roomIdentity.ts`, `src/content/logical-rooms.json`, `tools/export_logical_rooms.py`: source-verified logical/resource room mapping.
- `src/core/progression.test.ts`: ten staged real-engine puzzle, travel, ownership, prerequisite and save/resume scenarios.
- `docs/SCRIPT_PROGRESS.md`, `docs/evidence/user-walkthrough.txt`: explicit implementation matrix, source contracts, known omissions and supplied walkthrough.

- Fallback correction extends existing GameRenderer/visualRegistry and lab playRuntime/playState; no artwork, source assets or project format changes. Registry and playState regressions cover background-only replacement and disabled/empty authoring layers.

- Mountain/cabin correction updates existing rooms.ts, progression.ts and progression.test.ts. No new runtime files or assets; three regression scenarios add coordinate targeting, repeat-flight save/resume and digging-tool conditions.

- tools/export_original_reference.py → public/assets/reference/ (maps, 39 costume folders, catalog.json), src/content/costume-reference.json. Raw commands/source hashes retained; preview timing is not full SCUMM execution.
- public/original-reference.html: browser for all original rooms, object patches and costume animations; linked from Game menu.
- tools/build_remaining_coverage.py → docs/MISSING_VIEWS.md and docs/evidence/full-script-inventory.json.
- src/scenes/npcVisuals.ts / npcVisuals.test.ts: reviewed fallback placements and state-dependent cabin pose. Existing gameShell/progression/state/engine cover map inspection and initial ticket; tests extend progression/game suites.

- src/scenes/intro.ts: source-ordered cinematic adaptation, original costume atlas animation, camera and patch placement.
- src/scenes/introPolicy.ts / intro.test.ts: entry policy and source asset/sequence regression checks.
