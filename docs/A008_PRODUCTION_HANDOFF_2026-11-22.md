# ZMATAMR-0002 — production acceleration checkpoint (2026-11-22)

User direction: get the original intro running and replace original room art and object art with existing remastered POC assets, using the user's GIMP mockups as presentation direction. Continue autonomously in this exact worktree; do not restart extraction, generate replacement artwork unnecessarily, or introduce approval/main-publication gates. Finish and checkpoint current task, then create subsequent IDs under the existing local workflow.

## Safety and current baseline
- Earlier verified backup: C:\code\a008-recovery-backups\zac-487f66f6-20261122-045224. All 29 workspace entries SHA-256 rechecked. SQLite snapshots still present. A new pre-acceleration workspace snapshot was made before this handoff. Original DBs and original media are untouched.
- Recovery handoff: docs/A008_RECOVERY_HANDOFF_2026-11-22.md. The failed provider call retained all completed work. Current source is present; the old "no game code" checkpoint is obsolete. Do not replay completed edits or blindly retry uncertain writes.
- Preserve untracked temp/zak-walking.glb and temp/zacke-mac-kracken_intro.m4a. No reset, clean, delete, remote push or copying session content over root. Use local commits/checkpoints, without committing user temp media.

## Ready-to-use asset catalog
- Original gallery: zak/converted/poc/asset_review.html (636 resources, 334 with concepts, 440 listed versions; stale relative to disk).
- src/content/poc-catalog.json was generated from exact original resource IDs, actual PNG inventory, and existing viewport candidates. Regenerate using python tools/build_runtime_poc_catalog.py after new artwork arrives. All art stays in place. No manual renaming or mass copy required.
- 65 background PNGs, 805 object PNGs observed on disk. 58 background viewport candidates + 396 object viewport candidates, all referenced files exist. The catalog keeps all alternative versions, original rectangle/dimensions and candidate UV crop. Do not treat version suffix as SCUMM object state.
- Some crops are essential: room 2 image 2172x724 is intended as 640x128, candidate UV [0,.2,1,.8]; room 3 image 2172x724 is intended as 960x128, candidate UV [0,.3,1,.7]. Room 1 candidate concept_v003 matches its 320x128 proportions. Check actual borders/anchors, not only calculated ratio.
- Preserve IDs, hotspots, walkboxes and state independently of rendering. Candidate images may contain full contextual art, not an isolated patch (fish animation candidates are an example). QA selection and crop must be per resource; keep original fallback and reversible Classic/Remastered control. Do not let original and modern patches become simultaneously visible merely because they exist.
- Current objectIsVisible() returns true for parentless objects without checking state08. Correct original draw-state vs hotspot visibility separately using canonical index data and original script semantics; do not simply hide all interaction targets. Initial state currently has empty owners/states/inventory. Original screenshots show empty closed bed, closed drawers, flat rug and starting ticket. Need real startup state and source-backed tests, not guesses. Use original stage as regression and compare to user mockup. Keep non-ready graphics explicit in debug view.
- Current GameRenderer supports VisualRegistry overrides but does not register these POC files. Integrate catalog with Vite asset URLs, candidate UV transformed for the renderer's top-left/flipY=false convention, linear filtering for modern textures, nearest for classic. Ensure image load failure fallback and panorama scroll test. Avoid eager loading hundreds of full-res images into GPU memory.
- Improve Zak model scale/orientation and verb/inventory placement toward the user's mockup, but retain original source coordinate space. Keep presentation reversible.

## Original intro implementation source (verified actual disassemblies)
All below are in zak/converted/scripts_flat/LFv2_0049/:
- SCv2_0001.txt main intro: [0058] loadRoom(46), [005A] setCameraAt(20), [005C..0063] ticket pickup/ownership, [0078] startScript(127), [007B..007E] wait for script, [0084] black screen, [00BE..0118] later that night/alone/again with original delay instructions; [011C] loadRoom(58), [011E] startSound(81), [0123] startScript(111), [0129,0132,013B] drawObject(766,767,768) with delays, [0140..0144] wait for sound81, [0148] startMusic(95), [014B] loadRoom(51) then camera from 60 to 20; [0157] music timer >4 and [015E] camera wait; [0164] loadRoom(55), loop objects 756..760 with clearState08 and timer branches; [01C8] loadRoom(49), drawObject(701), machine speed branches [01D8..03B5] and [03B8..0509] with actor placements, speech, walks, animation, draws/clears (696..702), alien actor 10; [0357]/[04F3] loadRoom(56), cam pan and object 761. [050A..0521] music completion and actor wait. [0527..0541] cleanup, stop audio/music and startScript(108).
- SCv2_0127.txt: office scene, actor 10 costume32, actor positions, camera, all original dialogue and waits; use actual complete script, not manually reconstructed screenshot captions.
- SCv2_0111.txt: original credits and progression signals (Var[60]), source text available.
- SCv2_0109.txt: alien follows ego.
- SCv2_0122.txt: abort path; original escape key 27 configured in main.
- SCv2_0108.txt: gameplay handoff (actors, costumes, logical aliases, globals, room1, normal/skip startup branches, wakeup dialogue and first movement). Do not replace with arbitrary spawn if original can be honored.
- The intro uses rooms 46,58,51,55,49,56. All have background candidates; catalog reports available object versions and missing ones. Original art fallback if modern assets not present. User GIMP edits may be outside repo; let user drop replacements into a documented override folder with stable IDs, no assumed file locations.
- Build a reusable intro runner with source provenance and explicit timing/actor/object/camera/audio events. Use extracted instruction_graphs, event_contracts, dialogue and animations; follow original control flow or clearly mark a partial timeline approximation. Do not interpret original delay units as milliseconds without verifying SCUMM timing. Modern M4A replaces sound/music ID95 only, starts at exact dream cue after snoring; make original timer/music cues explicitly adaptable to new music duration. Preload audio after Start user gesture; support skip/replay, no overlapping playback, transition to correct room1 state. Preserve credits.
- Do not create an invented script or claim exact equivalence until visually compared against original. First get a complete intro preview with missing actor art placeholders and original fallback; then swap remaining assets without rebuilding timeline.

## Prioritized execution
1. Verify current baseline tests and browser smoke, fix state/initial visual semantics, checkpoint. No repeat of original extraction.
2. Implement reversible modern art integration for rooms 1–3 from catalog. Start room1, validate state toggles/doors, then panoramic rooms2/3. Verify screenshots and click targets. Original mode remains intact.
3. Implement runnable/skip/replay intro V1 from source above; integrate existing music cue with actual user-provided track. Preserve existing game and save state; avoid mixing intro actors into gameplay. Record missing visuals precisely by ID; don't block on manual GIMP work.
4. Maintain user vision: modern colors and materials, same original composition, no change to original puzzle identities. Continue next IDs autonomously, with periodic progress/checkpoints. Do not claim full SCUMM VM fidelity, final art approval or all 58 playable rooms until implemented and tested.

Success: dev server playable, intro plays and enters gameplay; room1–3 modern assets selectable and state-correct with classic fallback; existing tests plus intro and render-state tests pass; actual browser smoke of audio, skip, replay, traversal and interaction, screenshots recorded, missing items listed.


Snapshot: C:\code\a008-recovery-backups\zac-before-production-20261122-080026
