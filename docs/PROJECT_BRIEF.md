# Project Brief

**Status:** Draft product direction; observed production status updated 2026-11-21.

## Purpose

`Zac McKracken and the Alien Mindbenders REMAKE` — a scene-faithful, modernized 3D point-and-click adventure preserving recognizable room layouts, interactable objects, puzzle dependencies and narrative intent, subject to rights clearance. See `GDD.md` for full proposed scope; Three.js is the current design assumption, not a formally confirmed final engine.

## Practical production approach

Source SCUMM v2 resources are being inventoried, decompiled and decoded into traceable image/text/metadata assets. The planned visual conversion uses modernized concept images and **separate 3D GLB props** assembled in room shells; a combined image-to-3D room has been tested only as a proof of concept. Protect the relationship between original object identity, scene placement and resulting 3D/hotspot assets.

## Evidence and next task

On 2026-11-21 the file inspection found 58 background PNGs, 148 script disassemblies, dialogues, room catalogs and 578 raw object-image blocks, with no decoded object PNGs yet. Refer to `SCUMM_EXTRACTION_REPORT.md` and `CODEX_HANDOFF_SCUMM_OBJECTS.md`. The immediate goal is reliable object-to-source mapping and verifiable per-object export, **not** a declaration that the remake or full GDD scene catalog is finished.

**Rights:** IP permissions and release/public distribution rights are not verified; source extraction must not be interpreted as clearance.

## Aktiv uppdatering 2026-11-21 — ZMATAMR-0001
Den historiska omedelbara objektblockeringen ovan är löst för färgbilder: 578/578 exporterade och byte-/pixelverifierade. Se CURRENT_STATUS.md för kvarvarande två maskfrågor. Three.js, desktop-webb, engelska och klassiska verb är nu autonoma POC-standardbeslut enligt användarens beställning. GDD v0.2 och IMPLEMENTATION_PLAN.md styr fortsatt arbete. Ny grafik är under produktion, inte färdigställd i den historiska auditposten.
