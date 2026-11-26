"""Read-only source/art inventory for the runtime. No images or source exports are rewritten."""
from pathlib import Path
import json, re
from PIL import Image
ROOT = Path(__file__).resolve().parents[1]
POC = ROOT / "zak/converted/poc"
OUT = ROOT / "src/content/poc-catalog.json"
def build():
    html = (POC / "asset_review.html").read_text(encoding="utf-8")
    review = json.loads(re.search(r"const data=(\[.*?\]),el=", html, re.S).group(1))
    views = {}
    for name in ("viewports.json", "object_viewports.json"):
        for entry in json.loads((POC / name).read_text(encoding="utf-8")):
            views[(entry["room"], entry.get("object_id", 0))] = entry
    rows = []
    for r in review:
        room, obj = r["room"], r["id"]
        base = (POC / f"backgrounds/room_{room:03}") if r["kind"] == "background" else (POC / f"objects/room_{room:03}/object_{obj:04}")
        original = (POC / r["original"]).resolve()
        assert original.is_file(), original
        view = views.get((room, obj))
        versions = []
        for f in sorted(base.glob("*.png")):
            rel = f.relative_to(ROOT).as_posix()
            with Image.open(f) as im:
                width,height = im.size
            uv = view["uv_top_left"] if view and view["file"] == rel else None
            ratio = r["width"] / r["height"]
            if uv is None and abs((width/height)/ratio - 1) < 0.015:
                uv = [0,0,1,1]
            versions.append({"file":rel,"width":width,"height":height,"candidateUvTopLeft":uv,"inReview":f.relative_to(POC).as_posix() in r["versions"]})
        candidate = next((v["file"] for v in versions if view and v["file"] == view["file"]), None)
        rows.append({"room":room,"objectId":obj,"kind":r["kind"],"name":r["name"],
                     "sourceRect":[r.get("x",0),r.get("y",0),r["width"],r["height"]],
                     "original":original.relative_to(ROOT).as_posix(),"versions":versions,
                     "viewportCandidate":candidate,"approved":False})
    actual = {f.relative_to(ROOT).as_posix() for kind in ("backgrounds","objects") for f in (POC/kind).rglob("*.png")}
    indexed = {v["file"] for r in rows for v in r["versions"]}
    assert len(rows)==len({(r["room"],r["objectId"]) for r in rows})
    data = {"schemaVersion":1,"source":"zak/converted/poc/asset_review.html + on-disk PNGs + candidate viewport metadata",
            "note":"Versions are alternative production concepts, not SCUMM state numbers. UVs are candidate crops, not approved anchors. Do not blindly draw all state patches.",
            "counts":{"resources":len(rows),"withConcept":sum(bool(r["versions"]) for r in rows),
                      "versions":len(indexed),"onDisk":len(actual),"unmapped":len(actual-indexed)},
            "unmappedFiles":sorted(actual-indexed),"resources":rows}
    OUT.write_text(json.dumps(data,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print(data["counts"])
if __name__ == "__main__":
    build()
