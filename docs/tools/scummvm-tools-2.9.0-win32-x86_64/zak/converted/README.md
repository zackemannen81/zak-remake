# Zak McKracken (SCUMM v2) — konverterade resurser

## Resultat
- `dialogue/zakv2_en.utf8.txt` — ScummTR-textutdrag i UTF-8 (engelska originaltexter).
- `scripts/LFv2_####/SCv2_####.txt` — 148 SCUMM v2-skriptblock dekompilerade med `descumm -2`; filnamnen behåller rums- och block-ID.
- `scripts/manifest.csv` — lista över de dekompilerade skriptblocken.
- `rooms/room-catalog.csv` — inventering per rum: antal råblock, total storlek och blockantal per tagg.
- `metadata/resource-index.csv` — fullständig inventering av råfilerna.

## Bilder
- `images/backgrounds/LFv2_####.png` — 58 avkodade SCUMM v2-bakgrunder från `ROv2/IMv2`. Måtten hämtas från `HDv2`; bilderna är indexerade EGA-PNG:er (320–960 × 128 px).
- `images/backgrounds/backgrounds_manifest.csv` — källblock, dimensioner, storlekar och SHA-256 för rådata respektive PNG per rum.
- `tools/export_scumm_v2_backgrounds.py` — Python 3/Pillow-exporter, portad från MIT-licensierad SCUMM Image Encoder. Kör från `zak\` med `python converted\tools\export_scumm_v2_backgrounds.py`; `--only LFv2_####` väljer ett rum och `--overwrite` skriver om befintliga resultat.
- `images/objects/` — objektbilder är ännu inte exporterade. Dumpen innehåller 578 råa `OIv2`-block; den använda avkodaren hanterar bakgrunder, inte objektframes, så de kräver separat avkodning.

Rådumpen i `dump/` har inte skrivits över eller flyttats.

## Noteringar
Dialogutdraget innehåller engelska originaltexter. Skripten är disassemblerad SCUMM-kod, inte redigerbar originalkällkod. Rumskatalogens taggkolumner är filnamnsbaserad inventering, inte semantiska bildtolkningar.
