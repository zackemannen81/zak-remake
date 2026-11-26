# ZMATAMR-0002 — Spelbar engine vertical slice: rum 1–3
Status: In Progress
Owner: Agent 008
Created: 2026-11-21
Last updated: 2026-11-22

## Task summary
Start the actual game implementation with Three.js, TypeScript and Vite, using the already-exported original room/object metadata rather than repeating extraction. Deliver a locally runnable and testable point-and-click slice for source rooms 1–3: real scene assets and IDs, classic verbs, inventory, actor movement, deterministic state/scheduler and save/load. Integrate the user's GLB and intro music through a manifest without modifying or regenerating them; retain placeholders/fallbacks if either fails to load.

## Goal and success criteria
- `npm run dev` starts the browser game; `npm test` and `npm run build` pass.
- Original rooms 1–3, dimensions, object IDs/rectangles and available original artwork are loaded from verified repository data. Panorama viewport and object coordinates behave correctly.
- Click/keyboard interaction supports verb selection, look/use/pickup/talk, two-object inventory actions and room travel only through verified links or an explicit clearly labeled slice selector.
- A fixed-step deterministic scheduler, game variables/flags/object ownership, actor position/movement on supplied walkboxes, and versioned save/restore are implemented and covered by repeatable state-hash tests.
- External GLB animation and intro track are declared in a manifest, loaded only from the user's existing files, and fail gracefully. No new or final character/music assets are generated.
- Engine supports the shared stable original object identity independent of visual source (original 2D, optional concept 2D, future GLB scene).
- Docs describe the implemented subset and accurately separate playable functionality from original SCUMM semantics still not implemented.

## Scope
In: runtime contracts, first compatibility-core slice, rendering/input/UI, rooms 1–3, original asset adapters, user-asset manifest, persistence, tests and documentation. Out: claiming complete SCUMM v2 compatibility, full original-game completion, approval of concept images as final art, regenerating user media, remote deployment or main publication.

## References
`docs/IMPLEMENTATION_PLAN.md` steps 2–7; `docs/ASSET_PIPELINE.md`; `docs/ROOM_GRAPH.md`; `docs/SCENE_ATLAS.md`; `docs/scenes/room_001.md`–`room_003.md`; `zak/converted/metadata/rooms.json`, `walkboxes.json`, `logical_room_map.json`, `event_contracts.json`; original backgrounds below `docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/images/backgrounds/`; user assets in `temp/` (preserve as-is).

## Checklist
- [x] Read workflow, current charter, engine plan, asset contract, room source contracts and verify repository/user asset locations.
- [x] Pause/checkpoint unfinished ZMATAMR-0001 before taking over.
- [x] Create runnable Vite/Three.js/TypeScript app and runtime schema for source rooms 1–3.
- [x] Implement deterministic state, fixed-step scheduler, verbs/object ownership and movement on walkboxes.
- [ ] Render original backgrounds/object overlays, expose playable room/inventory/dialogue flow and manifest-driven GLB/audio.
- [x] Add deterministic tests for logic, movement, save/load and room data; run tests and production build.
- [x] Update status, system docs, file structure, implementation plan and journal with verified evidence and next task.

## Decisions and notes
- Original opaque object rectangles and z-planes are not alpha cutouts. Respect source coordinates and keep depth/occlusion separate; do not composite masks as transparency.
- Room facts are drawn from the canonical exported `rooms.json`; route edges must not be guessed from static script references.
- `temp/zak-walking.glb` and `temp/zacke-mac-kracken_intro.m4a` are pre-existing untracked user assets. Read them only; do not overwrite, rename, regenerate or commit them as new source assets.
- Observed mismatch: `docs/GDD.md` is empty, despite CURRENT_STATUS referring to a v0.2 GDD; requested `READINESS_AUDIT_2026-11-21.md` and `A008_ENGINE_HANDOFF.md` are absent from `docs/`. Current engine implementation is grounded in the existing implementation plan and source contracts. Resolve the stale/missing docs as a separate documented correction, not as an excuse to stop implementation.

## Verification
- [x] Unit and content-validation tests (`npm test`, 9/9 passed).
- [x] Deterministic scheduler/save replay and stable state hash.
- [x] TypeScript/Vite production build (`npm run build`).
- [ ] Browser smoke of actual input → state → render and asset-load fallback; repeat after the latest hit-test/render separation.
- [x] Document any browser check not run; never claim complete original game/SCUMM equivalence.

## Handoff
Current state: Vite/Three.js game shell and initial source room slice are implemented in the existing worktree; the room-1 state factory uses script 108's skip-intro coordinate `(21,56)`. `npm test` passes 9/9 and `npm run build` passes. Existing user assets and earlier worktree changes remain preserved.
Next: verify initial object-bit/draw semantics through the complete intro/global initialization; then integrate POC-catalog imagery for rooms 1–3 with original fallbacks and an exact missing-image report, followed by the intro sequence/dialogue/transition/music implementation.
Open verification: repeat browser smoke after the latest hit-test/render separation.
Blockers: none for engine work.


## Recovery checkpoint — 2026-11-22

See docs/A008_RECOVERY_HANDOFF_2026-11-22.md. Backup of the pre-fix workspace and databases is verified. Rendering was fixed; typecheck, 7/7 tests and production build pass. Actual Chrome browser smoke confirms a visible room, lit GLB actor, loaded animation and click-to-movement (98,98 -> 72,104), with no page errors. Continue this task; no final acceptance or full VM compatibility is claimed. Next: browser checks for room travel, source-backed interaction, inventory/save and visual state/occlusion; maintain checkpoints and finish the original charter.


## Production priority — 2026-11-22
User requests acceleration toward the modern visual prototype and original intro. See docs/A008_PRODUCTION_HANDOFF_2026-11-22.md and src/content/poc-catalog.json. Continue autonomously; no new approval gates. Prior recovery remains valid. Catalog is an inventory, not runtime integration; do actual rendering/intro implementation and tests.

## Implementation checkpoint — 2026-11-22

- Initial playable room-1 state now starts Zak at script 108's skip-intro position `(21,56)`. The ordinary intro branch's `(9,52)` start and move to `(21,56)` are not yet implemented as an intro sequence.
- Drawing requires a registered visual (`objectIsDrawable`); hotspot eligibility is separately tested with `objectIsTargetable`, so missing art does not remove an otherwise eligible source hotspot.
- `objectStates` remains empty in the current state factory. That is a neutral runtime default, **not** a source-verified claim about all flags after the original intro. The test title/body no longer treats room-1 objects 85/95 as proven original initial draw states.
- `npm test` passed 9/9 before this test wording/state assertion cleanup; rerun after the final edit. `npm run build` passed. Browser smoke has not been repeated after the latest hit-test separation.
- Remaining scope: verify full intro/global initialization, integrate catalog-backed artwork for rooms 1–3, implement the intro runner/dialogue/transitions/music, and report any unresolved image IDs. ZMATAMR-0002 remains **In Progress**.

## POC visual-preview checkpoint — 2026-11-22

- Added a reversible preview activated only by `?pocAssets=1`; original artwork remains the default. The selected room-1–3 background and room-1 object candidates are still explicitly unapproved concepts, and are not promoted to production defaults.
- Candidate backgrounds use catalog UV crops, linear filtering, and original-background fallbacks. Candidate and fallback texture loads are lazy; missing candidate paths are reported in the preview notice/console.
- Added registry tests for UV conversion and restoring original artwork when an override is cleared.
- Verification after the changes: `npm test` — 11/11 passed; `npm run build` — passed (exit 0). Browser smoke of the new preview URL has not yet been run, so runtime image failures are not yet confirmed or ruled out.
- Next: smoke-test `?pocAssets=1`, implement the ordinary original intro branch and its dialogue/animation/music using extracted sources, then report any exact candidate-image gaps observed at runtime.


## Runtime correction checkpoint
2026-11-25 — ChatGPT / GPT-6.2, ZMATAMR-0002 runtime correction: initialized original 780 global object owner/state bytes from XOR-decoded 00.LFL; room owner 15, Zak owner 1; intrinsic-bit patches separate from touchability; recursive exact parent-state gating; pickup sets intrinsic/untouchable; closed door gate. Follow-up uses ascending source slot hotspot priority, explicit open/close container preference, reverse source patch layering and permanent room-1 bed occlusion mask independent of color state. 34/34 Vitest tests pass, including coordinate-based kazoo, bill, egg, crayons and bed mask selection. Browser visual verification and full SCUMM script coverage remain open. User PNG edits preserved; no commit.

## Script interaction checkpoint
2026-11-25 — ChatGPT / GPT-6.2, ZMATAMR-0002 interaction checkpoint: inventory-to-inventory selection and combinations, persisted objectNames and scriptSequence afterWalk, source-backed wallpaper/phone bill map (SCv2_0061), crayon pickup and rename (OCv2_0117), cushion interactions (OCv2_0119 and 0131), cord/outlet (OCv2_0118). 38/38 Vitest tests pass; production build passed before adding regression tests. Right cushion distance-triggered reset, full original script VM, additional puzzles, browser visual tests remain open. No art changes or commit.

## Scene animation checkpoint
2026-11-25: Added bounded SCUMM v2 costume extraction for 2,3,17,18,34, transparent scene overlays, abbreviated deterministic TV timeline and baker bread drop, and cord ownership transfer/unplug. 43/43 tests passed. Original assets preserved. Costume placement, palette and visual playback await browser verification; not a full costume VM or original broadcast.

## ZMATAMR-0002 bounded scene-lab work — 2026-11-26
User requests the smallest working PoC for visual alternatives before choosing a production pipeline. Status: In Progress. Existing gameplay scope remains open.
Deliver a separate /scene-lab.html for rooms 1–2: scaled source rectangles, draggable quadrilateral masks, independent state layers, full-background masked patch import/export, clean-plate input, approximate hinged/sliding preview, master comparison, overlap diagnostics and JSON round-trip. Use supplied room-1 examples as optional demo assets; preserve originals. No paid generation, full 3D editor, runtime integration or automatic script changes in this experiment.
Acceptance: typecheck/build and meaningful geometry/project tests; browser exercise of selection, mask editing, combinations and export/import where available. Document geometric-preview limitations and next decision.

## Scene Lab checkpoint — 2026-11-26
Bounded visual experiment delivered at /scene-lab.html; see SCENE_LAB.md for workflow and limits. Rooms 1–2, scaled source areas, adjustable quad masks, supplied room-1 demo states, masked patch import/export, approximate hinged/sliding preview, clean plate, combinations, undo and self-contained project JSON. 58/58 tests passed; build passed; headless browser verified round-trip, pixel preservation, masks, movement, drag/undo and room change. The original gameplay task remains In Progress; no runtime state integration or full 3D implementation is claimed.

## Scene Lab 02 — 2026-11-26
In Progress: user authorizes real Three.js door/drawer geometry, local per-object reveal surfaces, side/back materials and removable drawer content. Preserve v1 projects and existing experimental work. Verify geometry, round-trip and browser rendering. No external image generation or gameplay integration.

### Scene Lab 02 verification — 2026-11-26
Delivered real Three.js hinge/sliding geometry, editable depth/thickness/materials, object-local reveal input and procedural placeholders, separate removable drawer card with occlusion-aware ray picking. Room-1 preset available. v1 projects preserved. 61/61 tests and build pass; headless UI verifies material imports, round-trip, old project loading, visible pickup/undo and export without page errors. Bounded PoC complete; parent gameplay task still In Progress. No external generation or runtime integration.

## Scene Lab 03 — room lighting experiment
In Progress: shared serializable room lighting/tint, optional baked-front relighting, procedural cavity shading and adjustable invisible shadow receivers. Use saved user JSON read-only as a reference. Verify shadows change with light/movement, disabled comparison and save/load; no character integration claimed.

### Scene Lab 03 checkpoint — 2026-11-26
Bounded lighting experiment delivered: shared project light profile, Lambert side/interior lighting with optional front relighting, UV cavity approximation, real per-object shadow maps and transparent screen-plane shadow receivers with margin/helpers. Saved user dresser project imported read-only for browser verification. 62 tests and build passed; UI light/shadow toggles, direction, helper and light roundtrip verified without shader/page errors. Character/shared room-scene integration remains open; parent task In Progress.

## Scene Lab 04 — playable editor preview
In Progress: launch actual game from editor with in-memory authored room projects, shared compositing, state-driven layers, adjusted hit targets and isolated playtest saves. Preserve author data on return. Rooms without a loaded project use normal assets. Validate actual interaction/state/render flow and roundtrip. Original walkboxes/masks remain unless explicitly authored.

### Scene Lab 04 delivery checkpoint — 2026-11-26
Playable editor overlay implemented with actual game engine, shared authored compositor, state bindings, interpolation, canonical-ID target mapping and isolated saves. Original authoring session preserved on return; loaded room drafts retained. 64 tests/build passed; actual browser Open/Close and source bit transitions verified from saved user project. Original movement/z-mask data and shared actor depth/shadows remain limitations. Parent task remains In Progress.

## Playtest pickup correction — In Progress
Investigate authored container hit interception, add explicit present-in-room visual binding for item sprites, and expose missing-art contained items without generating artwork. Verify source pickup/rename and egg ownership transitions; preserve user JSON.

### Pickup correction checkpoint — 2026-11-26
Fixed source-child hit interception by authored container faces; added missing-art contained-item verb buttons and explicit room-owned/parent-gated present binding for item sprites. User egg binding remains explicit, not automatically changed. 66 tests and build passed; source kazoo/crayon pickup and rename regressions covered. Missing artwork is still missing, with a temporary playtest interaction aid.

## Cropped backgrounds and compact game UI — In Progress
User completed San Francisco through airport. Import all available cropped backgrounds with explicit source/version selection and no second UV crop; default runtime with original opt-out and authored room precedence. Compact verbs/inventory dock, paginated readable inventory, collapsible game/debug menus. Reset completed interactions to Walk to, preserving pending walk and two-item selection. Validate assets, logic and desktop/narrow UI.

### Cropped rollout / UI checkpoint — 2026-11-26
Delivered 58 imported cropped backgrounds by default, authored lab precedence, compact paginated inventory/control dock and collapsible menus, action reset to Walk with combinations preserved. 69 tests pass; build and browser checked airport load, 23 inventory entries, responsive widths, actual lab Open/reset. Source aspect mismatches recorded in docs/evidence/cropped-background-import.json. Gameplay charter remains In Progress; no claim to missing airport script support.

## Walkthrough-driven scripting — 2026-11-26 — In Progress
User authorizes missing gameplay/script functionality using supplied walkthrough. Preserve existing artwork/editor projects. Audit source contracts and implement/test the supplied progression (San Francisco, flights, Seattle, Nepal, Zaire), including negative prerequisites and save/resume. The supplied text ends at the Zaire dance, so full-game completion remains unverified. Prefer explicit source-backed adapters over silently ignoring unsupported instructions; expose precise diagnostics for remaining VM gaps.

### Walkthrough implementation checkpoint — 2026-11-26
Added source-backed progression adapters for missing SF interactions, tickets and logical airports, cabin puzzle, Seattle crystal, summarized Annie meeting, Nepal and Zaire dance clue. Named NPC interaction fallback and exact unsupported-script diagnostics added. 79 tests pass, including ten staged engine-action regressions and mid-timer save/resume. Browser verified devotee purchase, terminal, ticket, boarding, Seattle arrival and saved money/identity. See SCRIPT_PROGRESS.md for exact coverage and deliberate substitutions. Task stays In Progress: full actor/script VM, Switch, multi-character progression, complete choreography and later/endgame chains are not finished. Do not equate alias resolution or staged fixture tests with a complete game.

Verification completion: production build passed (both entries); existing bundle-size advisory remains. Browser screenshots inspected. No commit or push.

## Restore per-object fallback — 2026-11-26 — In Progress
User reports invisible state patches over cropped backgrounds, compared with read-only A008 snapshot. Restore original object graphics for missing replacements, including un-authored objects in lab previews. Preserve new backgrounds and authored object overrides. Verify browser Open/Close, visible original patches and actual item pickup, plus explicit replacement precedence.

Fallback verification: browser exercised real fridge Open/Close, visible original open-fridge patch, egg pickup, cabinet Open and crayon pickup in both the normal game and an editor room with a new background but no object replacements. Original frame requests returned 200; screenshots inspected; no page errors. Existing saved 3D-drawer project also passed Open/Walk-reset/save smoke. 80 tests and build passed.

This bounded fallback correction is delivered; parent gameplay task remains In Progress. No rollback of scripting, no asset edits and no commit/push.

## Mountain and cabin retry correction — 2026-11-26 — In Progress
Trace room-12 unsupported interactions and cabin coordinate targeting against source scripts. Restore consumed toilet paper on subsequent flights, preserve a retry path for the egg distraction, and test actual hit-test dispatch plus save/re-entry. Preserve artwork and authored projects.

### Mountain/cabin checkpoint — 2026-11-26
Delivered source-class digging tools/knife conditions, oven/bin command hit priority and next-flight paper reset. Retry accommodations preserve unheated egg and allow reheating exploded remains; landing waits for pending cooking effects. 83 tests pass. Browser real clicks verified oven Open, egg placement, Turn on and timed explosion; no page errors, screenshot inspected. Parent gameplay task remains In Progress; see SCRIPT_PROGRESS.md for deliberate simplifications.

Production build passed (TypeScript and both Vite entries); existing chunk-size advisory only. No commit/push.

## Dream map, initial ticket and original reference coverage — In Progress
Implement source-backed map inspection and boss ticket; inventory all rooms/logical variants and costume resources, export animation reference assets and integrate verified NPC visuals. Provide an explicit missing-view/behavior list; do not label extracted assets as complete actor scripting. Preserve user artwork and projects.

User extension: after missing views, complete script/actor/animation/functionality support, expose the rest of the game in Scene Lab for master-background authoring. This is an outstanding parent-task phase, not a claim that the current extraction milestone completes gameplay.

## Original reference, map and ticket checkpoint — 2026-11-26
Delivered Look at for drawn wallpaper/phone-bill maps using original room-29 composition and modal Done/Escape; cave/actor state retained and simulation paused. New bedroom games receive source ticket 82 (SF→Seattle, value260), including intro skip. Existing saves are not retroactively refunded or given duplicate tickets.

All 39 COv2 costume resources decoded into 771 cel images, 984 directional animation previews and lossless channel metadata/provenance. Original reference browser exposes all 58 backgrounds, object patches and costume previews. docs/MISSING_VIEWS.md inventories every resource/logical variant and special-view gap. Full source audit: 1,011 script files / 19,236 instructions; extraction does not mean interpreter coverage.

Reviewed visual fallback placements added for Lou, SF devotee, London bum, stewardess, Nepal guard and Guru; moving/talking stewardess follows adapter state. Palette overrides, full original actor choreography, generic script VM and all companion/endgame logic remain open. NPC art uses original positions and may need authoring alignment to replacement backgrounds.

Verification: 86 tests pass and production build passes. Fresh Chromium tested map Look/Done/cave return, gallery room/animation selection and NPC room load without page errors; screenshots inspected. User room-3 and room-11 background changes preserved. No commit/push. Remaining parent scope and requested later all-room Scene Lab stage are NOT completed.

## Intro checkpoint — 2026-11-26 (In Progress)
User priority: restore the original opening. Compare SC1/127/111/109/122, restore actors, ordered dream changes and camera direction, safe startup/skip/replay. Verify tests/build/browser; disclose timing/audio deviations from the original interpreter.

## Original opening adaptation — 2026-11-26
- Replaced the abbreviated slideshow with 53 source-ordered phases based on SC1, SC127, SC111 and SC109: office actors and pacing, black intertitles, sequential 766/767/768, vision frames, concurrent credits, street transformations, chase, opposing panorama directions and flashing 761. Reuses original backgrounds/object patches and exported costume 30/31/32 atlases.
- Normal fresh entry starts the opening. Explicit room, skipIntro=1, intro=0 and editor play bypass it. Skip enters SC108 skip branch; completion enters ordinary wake-up. Menu replay freezes and resumes existing game instead of replacing it. Renderer gets a separate child surface so async loading cannot erase intro. Game input/save is blocked during playback.
- Verification: 89 unit/content tests pass. Browser checked office actors, startup survival, skip, replay and full phase traversal; original office/dream screenshots inspected.
- Remaining fidelity work: this is a deterministic authored adaptation, NOT execution of SC1 bytecode. Walk paths, frame cycling, palette remaps, credit trigger timing and wait-for-music timing are not exact SCUMM behavior. User intro track is retained; original sound81/music95 playback is not implemented. Full-script and all-room Scene Lab work remains open.

## All-room Scene Lab — 2026-11-26 (In Progress)
User now wants to author other rooms. Expose all extracted resource rooms, cropped/original master fallback, retain room1/2 projects, round-trip and browser-check additional rooms. This advances authoring without claiming all game scripts complete.

## Scene Lab 05 — all resource rooms, 2026-11-26
Expanded selector and project validation from rooms1/2 to all58 extracted resource rooms, including special views. Preserve legacy PoC masters for1/2; other rooms use runtime cropped catalog or original background, with image-load fallback to original. Existing project format unchanged. Room drafts remain session-local; save each room before closing/reloading. Logical aliases share resource backgrounds and are not separate authored projects. Full script coverage remains unfinished.
Browser verified all58 loads, airport layer retention across room switches, embedded save/import round-trip and airport playtest, no page errors. Airport screenshot inspected. Existing89 tests pass; dedicated all-room catalog round-trip test added. No user artwork changed.
