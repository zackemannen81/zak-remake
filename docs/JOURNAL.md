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
