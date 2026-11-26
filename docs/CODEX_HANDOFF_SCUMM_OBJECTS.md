# Codex handoff — SCUMM v2 object asset extraction

**Prepared:** 2026-11-21
**State:** Ready-to-copy engineering brief; not a completed task
**Scope:** Object resource decoding/export and evidence-backed handoff for later scene asset production. GDD design expansion is a separate follow-up after reliable object metadata is available.

## Copy this task to Codex

You are working in the docs-first project `C:\code\zac` for **Zac McKracken and the Alien Mindbenders REMAKE**. Read `AGENTS.md` and the ordered `docs/` authority files first. Read `docs/SCUMM_EXTRACTION_REPORT.md`, `docs/CURRENT_STATUS.md`, the existing `docs/GDD.md` and the A008 output's `converted/README.md`. Before claiming `Ready`, claim a unique `ZMATAMR-####` ID in `docs/TASK_IDS.md` according to `docs/TASK_WORKFLOW.md`, and make the charter explicit. Preserve existing user edits in the working tree; do not reset or commit unrelated changes.

**Goal:** Produce a reproducible, verified SCUMM v2 object-image export and source-backed object map, starting from the real LFL room/object directories, with honest accounting for undecodable or non-image resources.

### Inputs and preservation

- Use in-repository data at `docs/scummvm-tools-2.9.0-win32-x86_64/zak/` if intact, otherwise the user-local source at `C:\Users\zakri\Desktop\ffs\scummvm-tools-2.9.0-win32-x86_64\zak\`. Document your canonical input path, source hashes and any differences between copies.
- Raw original LFL data is in `zak/00.LFL` and `zak/01.LFL`–`58.LFL`; raw split blocks are under `zak/dump/LFv2_####/ROv2/`.
- Existing completed resources: `converted/images/backgrounds` (58 PNG + SHA-256 manifest), `converted/scripts` (148 disassemblies), `converted/dialogue` (ScummTR UTF-8), room/catalog manifests and `converted/tools/export_scumm_v2_backgrounds.py`.
- Keep source LFL, `dump/` and validated background PNGs immutable. Do not copy GBs of binaries into git or rewrite original game resources. If the repo is on a different branch/worktree, state which tree you are editing and preserve its pending changes.

### Technical problem

There are **578 raw `OIv2` image-data blocks**. Prior A008 diagnostics paired `OIv2` to `OCv2` using identical filename suffixes but found many incompatible dimensions/failed decodes. Only 193 of those suffix candidates yielded positive heights in the tested field; this does not prove they are valid images. **Filename equality is not a trusted object mapping.** `scummrp` split output does not preserve the full enclosing room offset table. A008's trial GUI exporter did not function in the current desktop session. **Do not spend another cycle repeating the same suffix or GUI experiments without new evidence.**

### Implementation steps

1. Trace SCUMM v2's room/object offset and ID resolution, code/image address mapping, dimensions, image compression, palette and masking in trustworthy source (prefer the same ScummVM version); cite file/function or byte offsets in comments/docs. Inspect `00.LFL` directory and the relevant original numbered LFL room streams rather than relying solely on `scummrp` tags.
2. Build a read-only room/object parser that reconstructs the original lookup table and emits an inventory such as `room_id, object_id, room_offset, code_offset, image_offset, frame, width, height, raw_block_paths, source_sha256`. Distinguish 578 resource *blocks* from the number of visual objects or frames.
3. Validate a small set of nontrivial examples against the original engine/display: at least one ordinary object, an image with transparency, and a room with multiple objects. Reject ambiguous or invalid mappings rather than inventing sizes.
4. Implement the PNG export (e.g., `converted/tools/export_scumm_v2_objects.py`) using existing Python 3/Pillow where appropriate. Store assets under `converted/images/objects/LFv2_####/`, stable names using true object IDs and frame indices, and a machine-readable `object_manifest.csv` (or JSON with schema). Do not merge unrelated props into one image. Preserve dimensions, palette and transparency.
5. Provide safe `--dry-run`/`--list`, `--only-room` or `--only-object`, and explicit `--overwrite` semantics. Ensure deterministic output and no silent fallback. Record each failed/unsupported resource with reason, offsets, source hash and the next needed investigation.
6. Add tests and an independent verification script for mapping, PNG readability, dimension/alpha correctness, SHA-256 manifest and reproducible exports. Cross-check at least three finished objects visually with reliable original render/reference, not with unverified AI reinterpretations.
7. Update `zak/converted/README.md`, `docs/SCUMM_EXTRACTION_REPORT.md`, `docs/CURRENT_STATUS.md`, `docs/SYSTEMDOC.md`, `docs/FILESTRUCTURE.md`, `docs/JOURNAL.md` and, where *source evidence supports it*, append a source-grounded object/scenes section to `docs/GDD.md`. Include exact paths, counts, failures and coverage. Keep `docs/CURRENT_TASK.md` aligned to the active frozen task charter.

### Definition of Done

- An inspectable, deterministic parser resolves object identities and image/code associations from authoritative room data, with byte/source traceability.
- The image export emits a manifest row for **every one of the 578 candidate OIv2 raw blocks** with `exported / nonvisual / unsupported / failed / ambiguous` status and specific evidence. Do not force 578 PNGs if some blocks are nonvisual or frame containers.
- All reported successful images decode as valid PNGs, have correct dimensions and transparency/masks, and pass automatic integrity checks. Representative visuals checked against original rendering.
- Re-running without `--overwrite` is non-destructive; source bytes and prior background outputs remain unchanged. Preserve an immutable baseline or compare hashes before/after.
- Final summary states the exact count of distinct objects, raw image blocks, image frames, successful exports, exceptions and the reason for each exception. A status of partial completion is preferable to invented success.
- Documentation, verification commands and reproducible instructions are saved in the repository and a signed handoff is appended to the journal.

### Out of scope

- New/reimagined 3D objects, GLBs, scene assembly, voiceover, music and full game logic are **not** part of this decoding task; they depend on reliable source object identifiers but can be separate parallel tasks.
- Do not rewrite the existing design vision or reproduce original dialogue in the GDD unnecessarily.
- No game release/public distribution until rights status is resolved.

### Developer handoff format

Return a concise report with: exact branch/worktree; files changed; tests run and results; source counts; decoded/failed inventory with manifest path; original resource integrity; residual blockers and one prioritized next step. Cite every unsupported case to source bytes or a failing test.

## Senare verifierad status 2026-11-21
Den historiska uppgiften om 0 exporterade objekt är ersatt av 578/578 verifierade färgbilder. Se ASSET_PIPELINE.md, CURRENT_TASK.md och zak/converted/metadata/verification.json. Historiken ovan bevaras som checkpoint.
