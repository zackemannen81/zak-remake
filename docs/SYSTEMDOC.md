# System Document
Updated: 2026-11-22 · ZMATAMR-0002

## Befintlig pipeline
1. Kanonisk källa `docs/scummvm-tools-2.9.0-win32-x86_64/zak/*.LFL`, läst utan skrivning. A008:s dump, bakgrunder, dialog och 148 SC-utskrifter återanvänds.
2. `tools/export_objects.py`: XOR-avkodning i minne, riktiga roomtabeller, bild-ID/offset/dimensioner, kolumn-RLE, separat z-plane och JSON-register. Output `zak/converted/images/objects`.
3. `tools/build_source_catalog.py`: kompletterar OC/EN/EX med descumm -2 och bygger rum, verbhändelser, instruktioner, variabler, actor-/inventarieanrop, transitioner, animationsanrop, dialog och scenatlas. Output `zak/converted/metadata` och `scripts`.
4. `tools/test_pipeline.py`: källinvarians, färg-/maskfall, alla originalpixlar mot separat decoder, skyddade outputpaths och byteidentisk återkörning.
5. `tools/verify_delivery.py`: källhashar, PNG/hash/mått, kod-/bildkoppling, radreferenser, POC-täckning, bildformat och ffmpeg-ljudkontroll; skriver verifieringsrapport och leveransmanifest.
6. `tools/tts_zak.py` och `tools/poc_sfx.py`: POC-ljud med stabila ID, hashar och återkörning. TTS-speaker är explicit olöst tills runtimebindning finns.

## Gränser
Originalets objektbilder är opaka state-rektanglar. Z-plane är inte alfa. Moderniserade cutouts och bildpatchar är separata produkter med egen status. AI/TTS kan inte lovas bitreproducerbara från enbart prompt; spara valda filer med hash och referens. Varken sourceplats för script/dialog eller statiskt anrop bevisar runtimeplats/nåbarhet.

Fullständigt formatkontrakt, källversioner, maskavvikelser och reproduktionskommandon: ASSET_PIPELINE.md. Spelplan: GDD.md och IMPLEMENTATION_PLAN.md. Browser-runtimen finns nu i `src/`: kärnlagret äger `GameState`, rumsdata och visuell input/render kopplas genom stabila original-ID. Detta är en vertikal slice, inte en fullständig SCUMM-VM. Original-ID, scheduler och koordinatadapter är kärnkontrakt.

### Ritning och interaktionshotspots
`objectIsDrawable` kräver state-/owner-/parent-eligibility och en registrerad visuell resurs; `objectIsTargetable` baseras på source-geometri och samma nuvarande eligibility men är inte beroende av bildregistrering. Saknad modern/original bild ska därför inte i sig radera interaktionsrektangeln. Dessa helpers skiljer policy, men global intro-init och betydelsen av state-bitar för objektens fulla original-rendering är ännu inte fastställda. Rum 1:s slice-start använder script 108:s skip-intro-position `(21,56)`; den vanliga introgrenen går från `(9,52)` till samma position.


### Fördjupad checkpoint: logik och rum
1 011 platta skriptgrafer, 19 236 instruktioner och 1 475 händelseingångar; kontrollflödestester passerar inklusive cutscene override. 88 byteverifierade PseudoRoom-alias återanvänder de 58 grafiska rumsresurserna. `ROOM_GRAPH.md`, `docs/scenes/room_NNN.md`, `metadata/event_contracts.json` och `metadata/logical_room_map.json` är implementationens källbilagor. Kör `build_event_contracts.py`, `test_event_contracts.py` och `build_room_links.py` efter källkatalogen.

### Navigations- och inventariekontrakt
`walkboxes.json` bevarar 323 gångboxar från alla 58 BXv2. Actor-enheter konverteras med x*8,y*2 enligt ScummVM v2.9.0 actor.h; object walk-positioner och bildrektanglar har separata format och får inte skalas dubbelt. Originalens vägvalsmatriser används av kompatibilitetslagret. `inventory_catalog.json` skiljer numerisk objektidentitet från kontextuell VAR_ACTIVE_OBJECT1-association och helt dynamiska ägaruttryck. UI och renderer ska läsa dessa register genom validerade TypeScript-scheman.

### Opt-in POC-artpreview
`src/content/pocAssets.ts` läser katalogens valda kandidater från lazy Vite-URL:er; preview aktiveras endast med `?pocAssets=1`. Rum 1–3:s valda bakgrundskoncept och utvalda rum-1-objektkoncept visas med katalogens UV-crops. Kandidaterna är fortfarande in-review/ej godkända. Standardläget använder originalkonst. Om en kandidat inte kan laddas försöker renderern originalbildens fallback och rapporterar status; klassiska texturer använder nearest-filter, POC-koncept linear-filter. `candidateUvToTextureCrop` konverterar katalogens top-left UV-rektangel till rendererns `flipY=false`-koordinater.

## Runtime correction checkpoint
2026-11-25 — ChatGPT / GPT-6.2, ZMATAMR-0002 runtime correction: initialized original 780 global object owner/state bytes from XOR-decoded 00.LFL; room owner 15, Zak owner 1; intrinsic-bit patches separate from touchability; recursive exact parent-state gating; pickup sets intrinsic/untouchable; closed door gate. Follow-up uses ascending source slot hotspot priority, explicit open/close container preference, reverse source patch layering and permanent room-1 bed occlusion mask independent of color state. 34/34 Vitest tests pass, including coordinate-based kazoo, bill, egg, crayons and bed mask selection. Browser visual verification and full SCUMM script coverage remain open. User PNG edits preserved; no commit.

## Script interaction checkpoint
2026-11-25 — ChatGPT / GPT-6.2, ZMATAMR-0002 interaction checkpoint: inventory-to-inventory selection and combinations, persisted objectNames and scriptSequence afterWalk, source-backed wallpaper/phone bill map (SCv2_0061), crayon pickup and rename (OCv2_0117), cushion interactions (OCv2_0119 and 0131), cord/outlet (OCv2_0118). 38/38 Vitest tests pass; production build passed before adding regression tests. Right cushion distance-triggered reset, full original script VM, additional puzzles, browser visual tests remain open. No art changes or commit.

## Scene animation checkpoint
2026-11-25: Added bounded SCUMM v2 costume extraction for 2,3,17,18,34, transparent scene overlays, abbreviated deterministic TV timeline and baker bread drop, and cord ownership transfer/unplug. 43/43 tests passed. Original assets preserved. Costume placement, palette and visual playback await browser verification; not a full costume VM or original broadcast.

## Runtime asset consolidation
2026-11-25: Consolidated runtime assets in public/assets; 58 normal backgrounds, 578 object patches and 578 masks, 20 costume frames, 58 opt-in previews, actor and music. Existing UI retained. Source dumps and POC files unchanged. runtime-assets.json indexes public paths; tools/index_runtime_assets.py refreshes index for new PNGs. 51 tests passed. User room 1/2 and fish bowl images verified byte-identical.

## Scene Lab architecture — 2026-11-26
Separate Vite HTML entry imports canonical rooms/object IDs without changing runtime state. `src/lab/model.ts` owns pixel-space quads, layer representations and validated version-1 project JSON; `render.ts` owns masked compositing and deliberately approximate two-triangle motion. `main.ts` provides local file IO, per-layer states and mask/patch/project exports. Project images are embedded on save; full-image imports must match master dimensions. Async file/room operations are serialized to prevent dropped actions. Source z-masks are references, not generation masks. See SCENE_LAB.md for limits.

## Scene Lab 02 geometry — 2026-11-26
`src/lab/geometry.ts` renders each moving object with Three.js into an offscreen transparent canvas: full-resolution source UV front, true hinge rotation/slab thickness, open drawer surfaces clipped at cabinet z=0, optional card and ray picking. Affine z shear provides adjustable oblique projection. Per-object reveal masks composite before geometry; inter-object occlusion remains author layer order. Optional `GeometrySettings` extends v1 layer JSON with validated dimensions/material sources/item visibility. Scene Lab 02 supersedes the affine-only preview for moving objects; patch rendering is retained.

## Scene Lab lighting — 2026-11-26
Optional validated `Project.lighting` stores room directional vector, tint, fill, cavity strength, shadow parameters and helper/front toggles. `GeometryPreview` uses Lambert side/interior materials, default unlit baked fronts, UV edge shading and PCF directional shadows onto transparent local ShadowMaterial planes. Each object's local pass reuses the room direction but has independent depth/shadow maps. Character integration requires a shared scene and authored floor receivers; no cross-object shadows currently.

## Scene Lab 04 architecture — 2026-11-26
`compositor.ts` is shared by editor and `playRuntime.ts`. Same-origin/source-checked postMessage handshake supplies validated project snapshots to `index.html?labPlay=1`. `playState.ts` binds layers to source state/ownership and maps authored/moving quads to canonical target IDs. `GameRenderer.setLabCanvas` uses a retained CanvasTexture and suppresses original color patches in authored rooms while preserving the source z-mask path. Actual engine logic is unchanged. Preview saves use a separate key. Mesh previews are still flattened before actor rendering; not a unified room scene. Editor session drafts are in memory, not persistent storage.

### Playtest pickup/state policy — 2026-11-26
`playState.ts` preserves source child hits under authored parent faces and exposes missingContainerItems to the playtest-only UI. `present` means room owner 15 plus source parent gating, independent of intrinsic bit; `auto` remains original replacement-patch semantics. No ordinary game pickup logic changed.

## Default cropped assets and controls — 2026-11-26
`runtime-preview.json` now points to all 58 selected cropped PNGs with uv:null. `main.ts` registers them by default unless originalAssets=1; authored CanvasTexture rooms retain precedence. Importer copies/hashes files without modifying source PNGs and records aspect differences. Existing original fallback behavior retained. Scene Lab handoff now also attaches when renderer initialization completes after project arrival.

GameUI uses a six-item inventory page with explicit navigation, bounded grid, visible selection summary and collapsed menus/diagnostics. GameEngine clears activeVerb/selectedItemId after resolving a pending action and after inventory verb/combinations; initial selection remains Use. Original puzzle effects/timing unchanged. Debug inventory fixtures verify layout without relying on gameplay progression.

## Progression adapters and logical rooms — 2026-11-26
GameEngine dispatches reviewed progression adapters before existing handlers/VM. Scheduled travel resolves resourceRoom(logicalRoomId) while retaining the original logical destination; renderer and original resource hotspots continue to use roomId. Optional flight/choice/timer/random state persists without changing save schemaVersion. Old resource-only airports migrate to a documented default city; malformed room pairs/flight data are rejected. NPC fallback choices execute through the engine, respecting movement and script locks. Object interpreter now supports bit variables/names/alias travel and records exact unsupported instruction diagnostics transactionally. This is not a general script scheduler or actor VM. See SCRIPT_PROGRESS.md for timing, jungle and cutscene substitutions.
