# Runtime assets

Edit files here, not the extraction dump or temp.
- backgrounds/LFv2_NNNN.png: normal room and intro backgrounds.
- objects/room_NNN/object_NNNN/frame_000.png: state patch.
- objects/room_NNN/object_NNNN/zplane_000.png: original occlusion mask.
- characters/: GLB actors.
- costumes/: NPC frame overlays.
- audio/music/: music.
- actionbar/: UI art.
- preview/backgrounds/: optional pocAssets=1 backgrounds (UV metadata in src/content/runtime-preview.json).

Existing file replacements require no reindex. For added PNG files run python tools/index_runtime_assets.py.
After replacing preview images check UV crop metadata. Original extraction and POC source files are retained separately.
