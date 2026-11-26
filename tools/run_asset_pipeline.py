"""Reproduce source extraction, catalogs and verification on Windows."""
from pathlib import Path
import subprocess,sys
ROOT=Path(__file__).resolve().parents[1]
for name in ['export_objects.py','build_source_catalog.py','build_event_contracts.py','build_room_links.py','build_inventory_atlas.py','export_walkboxes.py','test_pipeline.py','test_event_contracts.py','test_walkboxes.py','reuse_identical_poc_states.py','build_poc_review.py','build_correction_review.py','build_object_viewports.py','build_asset_gallery.py','build_poc_provenance.py','verify_delivery.py']:
    print('Running '+name,flush=True)
    subprocess.run([sys.executable,str(ROOT/'tools'/name)],cwd=ROOT,check=True)
