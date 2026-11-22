# A008 recovery handoff — 2026-11-22

Status: ZMATAMR-0002 In Progress; verified recovery milestone; not whole-game completion.

## Worktree authority

Continue in the existing session worktree:
C:\code\a008-sessions\zac-A008_v1_conversation_487f66f6-29a0-4264-95e6-3b8ca912290e

Branch: a008/session-A008_v1_conversation_487f66f6-29a0-4264-95e6-3b8ca912290e
Base observed before recovery: 6f3e6d8.
Task ZMATAMR-0001 remains paused; ZMATAMR-0002 is active. Do not begin another task for this unfinished slice. Follow the user's autonomous TASK_WORKFLOW.md.

The original run ended at 00:36:22 local time (2026-11-22): a working-state reducer call failed after roughly five minutes (fetch failed, MODEL_UNAVAILABLE, ambiguous-delivery, REDUCTION_PAUSED; run status needs_reconciliation). This was not a game-code crash. Original activity and recovery evidence remain in A008's platform database. The reduced workflow's next action was stale; the worktree and verified receipts are newer. Do not replay completed tool effects.

## Preservation

A complete copy of the observed tracked modifications and relevant untracked work (29 files, including src, temp media, config and docs) with SHA-256 manifest, Git diff/status/HEAD, and consistent SQLite backups was created before fixing rendering:
C:\code\a008-recovery-backups\zac-487f66f6-20261122-045224

platform.sqlite, memory.sqlite and workspaces.sqlite backup quick_check: ok.
The original worktree, user assets, databases and other branches were not deleted, reset or overwritten. Do not restore any backup over live work unless explicitly required and reconciled. Keep temp/zak-walking.glb and temp/zacke-mac-kracken_intro.m4a unchanged.

## Verified recovery result

The 16 files in src provide a Three.js/TypeScript/Vite prototype for rooms 1–3, a fixed-step 30 Hz scheduler, movement/walkbox data, verbs, inventory, room transitions, selected source-backed scripted interactions, save/load, and a manifest-based GLB/music integration.

Last A008 edits (Point import, point-in-polygon fix) were already on disk. Recovery changed only src/render/GameRenderer.ts:
- Normal orthographic projection, with source y-down coordinates mapped by a reflected world transform.
- Correct texture orientation for the room planes.
- Hemisphere and directional lights for the GLB model.
- Actor's foot anchor adjusted for the model transform.

Verification executed on this exact session:
- npm run typecheck: exit 0.
- npm test: 7/7 passed.
- npm run build: exit 0; includes background images, object patches, Zak GLB and intro M4A. Large JS bundle warning, not a failure.
- Existing Vite dev server at http://127.0.0.1:5173/ returned 200.
- Playwright/Chrome smoke test: bedroom canvas rendered in color; Zak visible as a lit 3D character; Walking_Woman animation reported loaded. No page errors or failed requests observed for the initial load.
- Actual browser click with Walk to changed visible state from EGO 98,98 to EGO 72,104. No page errors afterwards.
- Screenshots: browser-render-after.png, canvas-render-after.png, browser-walk-after.png in the backup directory.

This proves the first real render and input-to-movement path, not perfect artwork or complete gameplay. The original bedroom backdrop and overlay patches are visible, but depth/occlusion, actor placement, visual state selection and animation facing still require real gameplay testing. Music playback and browser room transitions/inventory/save interactions were not verified in this smoke test. Unit tests for selected gameplay behaviors are not a full SCUMM VM.

## Next actions — execute autonomously

1. Read AGENTS.md, docs/CURRENT_TASK.md, this handoff and current source. Inspect git status and reconcile workspace fingerprints/receipts with the latest files. Trust verified current evidence rather than the older reduced context. Do not re-extract SCUMM data, reinstall dependencies without reason, recreate src, or start a new clean worktree.
2. Reproduce typecheck, all 7 tests and browser smoke; then finish ZMATAMR-0002. Add actual browser regression coverage for valid door travel 1→2→3 and back, source-backed pickup/use, inventory, save/reload, animation and optional intro playback. Use original script evidence to verify behavior, including room 1 fishbowl, rather than inventing missing mechanics. Fix errors and actor/walkbox/occlusion/state-patch presentation using source coordinates; keep zplanes as depth, not alpha.
3. Update CURRENT_TASK checklist and relevant docs with each verified subresult. Keep deterministic replay expectations and report unsupported opcodes/behavior explicitly. Current roomScripts.ts is a bounded set of source-adapted handlers, not a full interpreter. Preserve existing working behavior and data while expanding the VM.
4. Keep a local recovery checkpoint after each verified milestone, including changed-path hashes, test status, outstanding issues and concrete next action. Commit source/docs/test work locally in THIS branch when coherent, without including user-owned media or generated dependency/build directories; do not push/merge main or master. Never run destructive reset/clean. Keep raw evidence and checkpoint if interrupted.
5. Check whether the updated readiness/implementation docs and recovered GDD exist in this session. Earlier main project audit files were uncommitted in C:\code\zac and were not included in this branch's base. Read them as references if available, reconcile non-conflicting changes deliberately; never overwrite session files wholesale or merge branches blindly. This is not a blocker for finishing the current prototype.
6. After ZMATAMR-0002 meets its actual definition of done, update status and journal, archive it and continue autonomously through the implementation plan with local task IDs. Prioritize full game logic and room coverage; integrate vetted modern scene images and individual 3D props via stable IDs without coupling the original logic to visual versions. Do not regenerate user's music or character. Preserve source assets and prior work.

No external review/approval or main-publication gate is required. No need to wait for another user message between ordinary tasks. Do not mark a task complete from this note alone.
