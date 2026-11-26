# Scene Lab — ZMATAMR-0002 experiment

Open `/scene-lab.html` on the Vite server (`npm run dev`). This is a separate visual experiment; game scripts and production artwork are unchanged.

## Smallest useful experiment

Rooms 1–2, source object IDs/rectangles scaled to the master, four draggable convex mask corners, independent state layers, source object z-mask reference, master comparison, full-image masked patches, approximate hinged/sliding movement, clean-plate import, undo/redo and self-contained JSON save/load. No generation service or paid request is connected.

Click **Ladda rum 1-exempel** to compare the user's master and edited background. Bowl, dresser drawer and door have approximate starter regions linked to IDs 14, 92 and 84. These regions are editable, not approved artwork. Toggle each layer and combinations; the overlap message is conservative bounding-box detection. Multiple states of the same source object may be authored as separate layers; enable only the desired state. Later layers draw on top.

## Inpainting experiment

1. Select a source object and add a state layer. Drag corners / drag inside the selected region to fit the new art. Include both old and new object footprint and changed shadows.
2. Export master PNG and a full-resolution mask. The binary convention is white=edit, black=preserve; the alternate alpha convention is transparent=edit. Select the convention supported by the external provider. Margin expands only the generation mask.
3. Generate externally, then import the returned full image into the selected layer. Mismatched dimensions are rejected, not silently resized.
4. Compare against the master and other active states. Adjust the export mask as needed. The compositor preserves pixels outside the export mask; it cannot correct changes or misalignment inside it.
5. Export patch PNG or **Patch + placering (JSON)**. The bundle includes embedded RGBA PNG, integer x/y/width/height, room/object ID, experimental state label and master coordinate dimensions. State labels are not yet bindings to SCUMM bits.
6. Save the project before switching rooms/reloading. Projects embed images and can be large; there is no automatic persistence.

## Geometry experiment

Select hinged or sliding. The master supplies the moving face texture. Import a full-size clean plate to expose what is behind the moving surface. The imported plate becomes the scene base, so use a plate that matches the intended experiment. Drag mask corners tightly around the moving face rather than around a patch's shadows/background. Sliding translates that face in pixel coordinates; hinged contracts it around the left/right edge using a cosine angle proxy. Two affine triangles are used, not a calibrated perspective/3D box. No side/back textures, depth, generated shadows, actor occlusion, reflections or continuous game-state integration are claimed. This probe evaluates whether to build those next.

## Verification — 2026-11-26

- `npm test`: 58/58, including seven geometry/project contract tests.
- `npm run build`: passed; existing large bundle warning remains.
- Headless Chromium UI: three demo states, independent combinations, embedded project round-trip, exact patch coordinates, both mask exports, hinged/sliding, plate import, pointer drag/undo, room 2 and narrow layout. No page errors.
- Pixel comparison of bowl-only composite against master: 37,864 changed pixels inside its rectangle, zero outside.
- Pillow: both masks 1640×656; edit and protected pixel values verified for binary and alpha variants.
- Browser MCP had no connected browser; used an already installed Playwright client and local Chromium. A rapid mask-load/room-change race was found and fixed by serializing asynchronous UI actions; the full smoke then passed.

Next decision: evaluate seams and independent state combinations using real generated results; only then choose masked patches, moving geometry, or a mixture per object. New background rollout and missing game scripts remain separate unfinished work.

## Scene Lab 02 — real geometry (2026-11-26)

This section supersedes the earlier affine-only motion description. Click **Prova 3D-låda + dörr** for room 1 object 94 (desk drawer) and 84 (door). New presets are approximate authoring starting points, not source-verified art placement.

- Three.js meshes now provide a thick door rotating around its authored edge and an open-top drawer with front, bottom, side and back surfaces. An oblique orthographic projection keeps closed fronts registered with source-image pixels. Utdrag X/Y controls the screen projection of one depth unit; it is not calibrated perspective.
- Drawer geometry behind the cabinet front is clipped at the aperture plane. Within an object, depth testing hides the item behind the front/sides. Different object layers still composite in layer order; there is no shared room depth buffer or actor integration.
- Each moving object gets its own reveal image, clipped to its original quadrilateral. **Lokal bakom-bild** accepts a full-size aligned image. Without one, a dark cavity or simple corridor/floor placeholder is drawn. These placeholders are procedural, not generated/inpainted views of the adjacent game room.
- Side and back/interior images may use independent pixel dimensions. Color, depth, thickness and signed opening angle are editable. All local image inputs are embedded at native dimensions in saved projects. Existing v1 projects remain readable; optional geometry settings extend that format.
- The separate gold test card follows the drawer and participates in depth occlusion. Open the drawer and use **Plocka upp / återställ provkort**, or turn off Maskhörn and click a visible card surface. Raycasting rejects clicks occluded by drawer surfaces. This is an editor-local visibility experiment, not an original inventory object or script binding.
- The new preset starts with the drawer fully extended so the card and floor can be seen. For shallower projection angles the front may naturally hide the contents. Increase Utdrag Y to look further into the drawer.
- Tests: 61/61 passed; production build passed (existing bundle-size warning). Headless browser confirmed visible item removal/undo, local reveal and side-image imports, self-contained 3D project round-trip, old v1 project import, closed-drawer pickup guard and composite export with no page errors. Visual screenshot inspected during implementation.

Still outside this PoC: calibrated camera, realistic generated interiors, independent opening-vs-front masks, bevels/rim thickness on drawer walls, dynamic shadows/reflections, room-wide depth/actor interactions and production game state bindings. The door has actual slab thickness; drawer walls are currently planar surfaces.

## Scene Lab 03 — lighting and shadow receivers (2026-11-26)
Open **Ljus & skuggor · Scene Lab 03** in the left panel. Import the saved user project via Öppna projekt; its source file is read-only and was not overwritten.

A shared optional project `lighting` profile controls directional light color/intensity/direction (X left negative, Y up positive, Z toward camera), ambient fill, procedural edge darkening, shadow opacity/PCF softness and receiver margin. Enable/disable gives an A/B comparison. **Belys även bildens front** is off by default because source front textures already contain baked lighting. Side/interior surfaces use Lambert lighting. Edge darkening is UV-based artistic cavity shading, not computed geometric ambient occlusion.

Moving meshes cast real shadow maps and receive self-shadows. A transparent ShadowMaterial plane behind each object darkens the existing room background only where shadows land. **Visa skuggmottagare** outlines the plane; margin controls its size. The plane is screen-aligned, not fitted to furniture perspective or a room floor. Larger margins may put shadows onto unrelated background features. Softness controls PCF filtering, not physically varying area-light penumbrae.

The room profile is serialized once and reused for each object preview. The directional vector is shared, while each local pass centers its shadow camera on its object. Preview objects are still rendered in separate passes: no cross-object/character shadow casting is implemented. Future character integration needs one shared room scene, authored floor/wall receivers and consistent world-space depth; this profile is reusable input to that work, not proof it is already implemented. No displacement or background relighting is applied.

Verification: 62/62 tests; production build passed with existing bundle warning. Headless Chromium imported the user's saved dresser drawer, confirmed pixel differences for shadows on/off, reversed light direction and lighting disabled, rendered receiver helpers, and saved/reloaded the profile without shader or page errors. Visual screenshot reviewed. User JSON and textures preserved.

## Scene Lab 04 — playable preview (2026-11-26)

Click **▶ Provspela** in the header. The actual game opens in an overlay, using Zak's existing GLB, verbs, inventory, scripts, scheduler, room transitions and movement. **Tillbaka till editorn** closes that isolated game instance and keeps authoring values intact. A new preview starts a fresh game; its Save/Load uses a separate `zak-remake-save-v1:scene-lab` key.

Current editor room and room drafts opened in this editor session are sent in memory to the same-origin game iframe. Room switching now retains those drafts; import each saved room project before launching to play both authored rooms. Unauthored rooms retain normal game art. There is no automatic disk persistence; use Spara projekt for each room before reloading the editor.

Editor and game now share `compositor.ts`. The game receives canvas textures, so authored patches, geometry, local reveals, materials and prop-lighting match the editor pipeline. Layers follow a selectable **Visas i spelet när** rule: default original bit 8 plus parent gating, explicit bit set/clear, owner no longer room, or always for static details. Enabled checkboxes include/exclude layers from the playtest. Patch layers toggle; moving layers interpolate from closed to the authored open amount. This is an explicit visual binding, not inferred from the state label. If a patch depicts the opposite state, select the corresponding rule.

Authored quads map to original object IDs for interaction. Open/close can target the extended drawer or rotated door front as well as its original opening. Original script reachability, ownership and parent rules remain authoritative. The editor's gold test card is excluded from gameplay; original inventory items still need their own authored layers. Room doors should use patch layers per the user's chosen visual convention.

Limits: walkboxes and original z-masks remain source-based. Props are composited into the room image; actor/prop depth and shared shadow casting are not yet a shared 3D scene. Actor lighting remains the existing game renderer's lighting. Unimplemented original scripts remain unimplemented; this preview does not invent puzzle behavior or change game source state. No editor values are written back from play.

Verification: 64 tests and production build pass (existing bundle warning). Headless UI imported the saved user room, retained it across editor room changes, launched the actual game, clicked Open on the authored drawer, then Close on its extended front, verified original state bit transitions through isolated saves, and returned with original authoring amount unchanged; no page errors. Screenshot reviewed with Zak rendered in the authored room.

## Pickup/state correction — 2026-11-26
Authored container faces no longer intercept an un-authored original child hotspot (except explicit Open/Close, which still selects the container). A playtest-only panel lists targetable contained objects with no enabled authored layer; choosing a verb and clicking a name executes the normal engine action. It is a temporary missing-art interaction aid, not generated item artwork or a replacement puzzle handler. Items disappear from this panel when picked up or parent availability changes.

New binding **Föremålet finns kvar i rummet** (`present`) checks room ownership plus original parent gating. Use this for a patch depicting the egg itself: closed fridge hides it, open fridge reveals it, pickup hides it. Original `auto` remains unchanged for backwards compatibility because original color patches often depict the empty/removed state. No user project binding is silently rewritten. Removing a patch reveals the base/reveal image, which must itself be free of the object. Phone bill, kazoo, crayons and torn-wallpaper artwork remain to be authored.

Verification: 66 tests and production build passed, including original kazoo and crayon pickup via authored container hits, yellow-crayon rename, missing-art eligibility after pickup and egg closed/open/picked states.

## Default art and play controls — 2026-11-26
Unauthored playtest rooms now use all 58 cropped backgrounds. Authored room canvases retain precedence. Use `originalAssets=1` on normal game URL for original art. Game menu contains Save/Load; inventory is six items per page, beside verbs, and completed actions return to Walk. First item selection remains Use until a second item/scene target is chosen. Asset provenance/aspect checks: docs/evidence/cropped-background-import.json. Raw crop inputs for rooms 3,11,17,26,52,54 still differ from source proportions; imported as supplied without further UV cropping.
