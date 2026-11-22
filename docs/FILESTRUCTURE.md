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
