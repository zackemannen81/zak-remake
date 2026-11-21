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
