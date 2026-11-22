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

