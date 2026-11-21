# Reproducerbar assetpipeline
ZMATAMR-0001 · 2026-11-21

## Kanonisk input och bevarande
Input är `docs/scummvm-tools-2.9.0-win32-x86_64/zak/`. Dess 59 LFL, dumpfiler och tidigare bakgrundsfiler har SHA-256-baslinje i `evidence/source-baseline.json`. Den andra kopian `docs/gamefiles/` är en annan byteversion: bara 6/59 LFL är identiska. Jämförelsen finns i `evidence/source-copy-comparison.json`. Blanda inte deras offsetar. Desktop-kopian behövs inte för denna export och har inte återinventerats.

Alla 578 OI har jämförts byte för byte med intakt kanonisk LFL. Inga filnamnsassociationer accepteras utan tabell- och bytebevis. Nya kanoniska leveranser finns under projektrotens `zak/converted/`; den gamla converted-mappen behåller A008:s bakgrunder/dialog/SC-skript. En första körning skapade också objektfiler i den tidigare tomma gamla objectsmappen; den kopian är inte den aktuella kanoniska leveransen.

## Formatkontrakt
LFL dekrypteras i minnet med XOR FF. Roomstorlek är little-endian uint16 vid 0; width/height vid 4/6; antal objekt vid 20. V2 har två parallella offsettabeller från 28: n bildoffsetar följt av n kodoffsetar. Indexet är 1-baserad lokal slot, inte objekt-ID.

Vid kodoffset c: ID är LE16(c+4), x=c+7 gånger8, y=(c+8 &127) gånger8, width=c+9 gånger8, parent=c+10, walkX=c+11 gånger8, walkY=(c+12 &31) gånger8, height=c+13 &248, direction=c+13 &7, nameOffset=c+14. Parentstate är bit7 i c+8, normaliserad till8. Detta motsvarar ScummVM:s GF_OLD_BUNDLE-justering ptr-=2; den tidigare draftens misslyckade dimensioner använde fel bas.

Bilddata börjar direkt vid OI-offset utan extra header. Färgströmmen är kolumn-RLE med bakåtkopiering till föregående kolumn och nollinitierad radtabell. Efter färgerna följer komprimerad z-plane. Z-plane läses som vertikala 8-pixelremsor med högsta biten till vänster. Den är skymning av aktörer, inte alfa. Exporterad färg är RGBA med full opacitet, vilket bevarar originalets rektangelritning. Vissa rektanglar tar bort ett föremål som redan är målat i bakgrunden; exempel rum1/objekt14. Rum2/125 innehåller den öppna kylskåpsversionen, rum25/424 ett brytartillstånd.

En OI innehåller en bild, ingen allmän v5-frame-tabell. Script kan växla bilder genom olika objekt-ID. `metadata/animations.json` bevarar drawObject-anrop och deras källor. Konkret exempel: rum35/OC554 växlar objekt553/554 med breakHere i loop. Detta är en tvåbildsanimation i script, inte två dolda frames i en OI.

## Reproduktion från reporoten
```powershell
python -m pip install -r tools/requirements-assets.txt
python tools/export_objects.py
python tools/build_source_catalog.py
python tools/test_pipeline.py
python tools/poc_sfx.py
python tools/tts_zak.py --limit 1
python tools/verify_delivery.py
```
Pillow krävs för bilder; edge-tts är ett separat frivilligt ljudberoende och kräver nätverk. `descumm.exe` i befintliga ScummVM-tools behövs för nya OC/EN/EX-utskrifter. Tidigare 148 SCv2 återanvänds. EN/EX saknar den fyrabytes-header descumm -2 väntar sig; en temporär nollheader läggs till i genererad output, originalet ändras inte. Tom verbtabell redovisas som inga events.

Exporteraren kan även köras med `--output <separat mapp>`. Den avvisar output under skyddad dump/gamefiles/bakgrundsmapp. Samma källa och verktyg ger identiska PNG/JSON. Inga nätanrop ingår i originalexporten. AI-bilder och TTS sparas med request/text/källreferens men är inte garanterat bitreproducerbara; bevarade utdatahashar gör den valda versionen reproducerbar som bygginput.

## Verifiering och kända avvikelser
- 578/578 färg-PNG exporterade; separat RLE-expansion jämför samtliga RGBA-pixlar.
- 578 zplane-PNG finns. 568 masker slutar inom exakt dumpblock, 8 använder en byte från följande del av den intakta LFL-resursen. Detta är rapporterat, inte utfyllt med gissad data.
- Rum35/553 lämnar 124 splitbytes, rum35/554 behöver 3 bytes efter blocket. Originalets faktiska renderertraversering har exporterats men markeras `requires_runtime_review`. Ingen gissad dimension eller maskerreparation används.
- 762 roomslots, 183 utan eget dumpat OI. Av dessa delar 172 image-offset med andra slots och 18 har nollarea (överlappande kategorier). Det gör dem inte till 183 saknade bilder; större hotspotmått kan peka på en annan bild och aldrig ritas. Dubblett-ID384 i rum19 redovisas som två slots, inte förlorad information.
- Tre visuella prov i `evidence/object-visual-check.png` visar borttagningsbild, öppen dörr och brytarläge. Detta är en granskning mot bakgrundsklipp och källformat, inte ett påstått ScummVM-runtime-screenshotprov.
- Full COv2/actor-animation, BXv2-gångytor och SOv2-ljud är ännu inte avkodade. De inventerade OI-bilderna ersätter inte dessa resursklasser.

## Referenskod och ursprung
Fast referens: ScummVM v2.9.0, `engines/scumm/object.cpp` (resetRoomObjects/resetRoomObject/getObjectImage), `gfx.cpp` (GdiV2::prepareDrawBitmap) och `resource.cpp`. Descumm-referens: ScummVM-tools v2.9.0 `engines/scumm/descumm*.cpp`. Lokala snapshots finns i `evidence/scummvm/` med ursprungliga licenshuvuden. Bakgrundsavkodaren som återanvänds har sin tidigare MIT-notis. Source snapshots är dokumentationsbevis och inte en ny runtime-dependency.

## Metodlogg
Tidigare suffix-/dimensionsgissningar återanvändes inte. En första lokal probe använde fel dumpnivå (saknade ROv2); den rättades utan ändring av data. När dubbel-ID384 upptäcktes byttes ”första suffixträff” mot full byteverifiering. Maskläsning på splitfiler misslyckades i tio fall; läsning på intakt LFL löste åtta gränsfall och exponerade två ärliga avvikelser. Hämtning av descumm från repositoryroten gav 404; korrekt sökväg var engines/scumm vid samma version. Bildgeneratorn har hittills ändrat 5:1/7.5:1-panoramor till cirka3:1 även efter explicit formatprompt; sådana utdata är inte godkända bakgrundsersättningar.

## Händelsegrafer och återkörning
Kör `python tools/build_event_contracts.py` efter källkatalogen och `python tools/test_event_contracts.py` för verifiering. Byggaren använder descumm -2 -i -e -f -w -b och cache med råresurs-, verktygs-, flagg- och utdatahash. Detta undviker ny dekompilering av oförändrade resurser. 1 011 grafer, 19 236 instruktioner, 1 475 ingångar och noll olösta statiska hopp. Graferna modellerar inte hela schedulern; ingen komplett beteendeekvivalens hävdas.

## POC-generering: metodbyten
Direkta 5:1/7.5:1-önskemål begränsades av generatorns bildformat. Letterbox-master med fullständig innehållsremsa används som alternativ; UV-utsnitt måste granskas och är metadata, inte en omskalning av originalet. Två bildreferenser för objektsprites gav ibland hela rum; en enda originalpatch gav bättre tillståndstrohet. Upprepade stora bildförhandsvisningar överskred verktygstransportens 64 MiB-gräns. Resultat sparas lokalt och granskas i mindre kontaktkartor; genererade filer återanvänds.

## Navigationsdata och lagring — verifierad komplettering
[V] `metadata/walkboxes.json` innehåller samtliga 58 BXv2-resurser: 323 gångboxar, råa actor-koordinater, pixelkoordinater, mask/flags, rad-offsetar och nästa-box-matriser. Alla 58 block återbildas byteexakt. Referens: ScummVM v2.9.0 `boxes.cpp` (v2-struktur/getNextBox), `actor.h` (`V12_X_SHIFT=3`, `V12_Y_SHIFT=1`). Pixelkoordinater är x*8,y*2; de får inte blandas med actor-enheter. Geometrin och vägvalsmatrisen är verifierade data; faktisk gång, box-flaggor under scripts och actor-occlusion behöver fortfarande testas i VM/replay.

POC-lagringen använder på denna dator kataloglänken `C:/code/zac/zak/converted/poc` → `D:/zac-asset-storage/poc` efter fullt C:. Genererade originalbilder nås fortfarande på sina ursprungliga Codex-sökvägar via motsvarande kataloglänk. Inga bildfiler raderades; flytten hashverifierades. Vid leverans till annan dator kopieras länkens innehåll som vanliga filer. Käll-LFL, dump och originalexport ligger kvar oförändrade på C:.

## Lokal bildvisare och genereringsloggar
`zak/converted/poc/asset_review.html` öppnas via projektets C:-sökväg. Välj rum, objekt och version; original och POC visas med bevarat bildförhållande. Överlagring är diagnostik och exporterar inga ändrade bilder. `tools/build_asset_gallery.py` bygger om visaren från befintliga filer. `build_poc_review.py` skapar kontaktkartor och `docs/evidence/poc-qa/review_index.json` med versionshashar.

`tools/build_poc_provenance.py` kopplar PNG-hashar till sparade promptloggar och referenser. Saknade äldre prompter markeras uttryckligen. Originalexporten är deterministisk; AI-genereringen är stokastisk och en identisk prompt garanterar inte identiska pixlar. Sparad utdatahash identifierar därför varje faktisk bildversion.

Metodavvikelse: två referenser (objekt och helt rum) orsakade ibland att generatorn återgav hela rummet i stället för rätt patch. Berörda versioner bevaras och korrigeras med enbart patchbilden och textbaserad semantisk kontext. Bildkörköer sparas som JSON innan körning och färdiga PNG/request-par kan återanvändas efter verktygsomstart.
