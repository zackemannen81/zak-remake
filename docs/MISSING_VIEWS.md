# Originalvyer och återstående stöd

Inventering 2026-11-26. Komplett resurslista, inte ett bevis på full spelbarhet. Namn från scene_labels är visuella inventeringsetiketter och kan behöva rättas geografiskt.

**Ingen av de 58 rumsbakgrunderna saknas som original-PNG.** Samtliga har även en cropped-kandidat. Det som saknas är främst korrekt komposition, skript, logiska varianter, NPC-förlopp och verifierade nya masterbilder. Ny grafik räknas inte som godkänd bara för att filen finns.

Öppna `/original-reference.html` för originalbakgrunder, objektbilder, samtliga kostymer och animationsförhandsvisning. Manifest: `public/assets/reference/catalog.json`. Originalfilerna har inte ändrats.

## Vyer som kräver särskild implementation eller kontroll

- **29** — Drömkarta: wallpaper/phone bill, med/utan Mars. Look at kopplat; teleportation återstår.
- **34** — Väggkarta/lejon: objektlager och pusseltillstånd återstår att verifiera.
- **45** — Resebokning: originalgrafik finns; nu används textval i spelet.
- **46** — Titel/kontor: befintligt intro är en förenklad presentation.
- **47** — Övergångsyta: får inte bedömas som tomt spelrum.
- **48** — Speciallager: kräver skriptstyrd komposition.
- **49** — Dröm/tidningsöverlägg: delar används av introt; full sekvens återstår.
- **50** — Originalets save/load-porträtt: ersatt av webbmeny.
- **51** — Rymdpanorama: används i introt; hela originalsekvensen återstår.
- **52** — Fönster/rutnätslager: specialkomposition återstår.
- **54** — Flygande bil: sekvens/animation återstår.
- **55** — Drömnärbilder: bakgrund ensam är svart, objektbilder behövs.
- **56** — Mask/glasögon/övergång: specialkomposition, inte vanlig masterbakgrund.
- **57** — Pyramid i rymden: slutsekvens återstår.
- **58** — Säng/dröm/slut: intro delvis; slutsekvens återstår.

## Alla rumsresurser och logiska varianter

Varje rad har originalbakgrund och exporterade objektbilder i katalogen. “Återstår” betyder ej verifierat i denna motor, inte att originalresursen saknas.

| Resurs | Inventeringsnamn | Mått | Logiska varianter | Spelstöd / kvarvarande arbete |
|---|---|---|---|---|
| 01 | Bedroom | 320 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 02 | Living room and kitchen | 640 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 03 | City street with bakery and TPC | 960 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 04 | Phone company lobby | 320 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 05 | City street with shops | 640 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 06 | Library | 320 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 07 | Pawn shop | 480 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 08 | Airport terminal | 320 × 128 | 141, 142, 143, 144, 145 | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 09 | Damaged airport terminal | 320 × 128 | 146, 147, 148, 149 | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 10 | Aircraft corridor | 768 × 128 | — | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 11 | Aircraft cabin | 800 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 12 | Mountain path | 320 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 13 | Cave with fire and markings | 480 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 14 | Crystal chamber | 320 × 128 | 129, 130, 192, 193 | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 15 | Temple interior | 640 × 128 | 152, 188 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 16 | Machine corridor | 800 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 17 | Village exterior | 960 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 18 | Jail cell | 320 × 128 | — | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 19 | Temple display hall | 640 × 128 | — | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 20 | Egypt desert | 800 × 128 | — | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 21 | Sand-covered doorway | 320 × 128 | 183, 135 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 22 | Sphinx exterior | 320 × 128 | 139, 140 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 23 | Egyptian corridor | 960 × 128 | 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 206, 187 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 24 | Burial chamber | 480 × 128 | 155, 186 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 25 | Crystal machine chamber | 384 × 128 | — | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 26 | Mars pyramid landscape | 880 × 128 | — | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 27 | Mars landing site | 960 × 128 | 184, 185 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 28 | Mars machinery interior | 744 × 128 | 180, 181 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 29 | Map and symbols | 320 × 128 | 153, 154 | Drömkarta: wallpaper/phone bill, med/utan Mars. Look at kopplat; teleportation återstår. |
| 30 | Mars equipment room | 320 × 128 | — | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 31 | Ocean surface | 320 × 128 | — | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 32 | Temple corridor | 960 × 128 | — | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 33 | Red temple interior | 640 × 128 | 189, 190, 191, 182 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 34 | Wall map and lion | 320 × 128 | — | Väggkarta/lejon: objektlager och pusseltillstånd återstår att verifiera. |
| 35 | Machine room | 640 × 128 | 194, 195 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 36 | Space corridor | 960 × 128 | 198, 199, 200, 201, 202, 203, 204, 205, 196, 197 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 37 | Jungle | 520 × 128 | 168, 169, 170, 171, 172, 173, 174, 175 | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 38 | Village panorama | 960 × 128 | 150, 151 | Delvis: utvalda pussel/rutter testade. Fullt skript-/aktörsstöd återstår. |
| 39 | Jungle temple exterior | 640 × 128 | — | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 40 | Biplane in flight | 640 × 128 | 131, 132 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 41 | Underwater ruins | 640 × 128 | — | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 42 | Mountain/temple landscape | 640 × 128 | — | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 43 | Rock passages | 640 × 128 | 136, 137, 138 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 44 | Alien chambers | 640 × 128 | 133, 134 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 45 | Destinations interface | 320 × 128 | — | Resebokning: originalgrafik finns; nu används textval i spelet. |
| 46 | Title and office sequence | 640 × 128 | — | Titel/kontor: befintligt intro är en förenklad presentation. |
| 47 | Black transition background | 320 × 128 | — | Övergångsyta: får inte bedömas som tomt spelrum. |
| 48 | Gray overlay with highlights | 320 × 128 | — | Speciallager: kräver skriptstyrd komposition. |
| 49 | Speech/overlay frame | 320 × 128 | — | Dröm/tidningsöverlägg: delar används av introt; full sekvens återstår. |
| 50 | Save/load menu portrait | 320 × 128 | — | Originalets save/load-porträtt: ersatt av webbmeny. |
| 51 | Planets in space | 640 × 128 | — | Rymdpanorama: används i introt; hela originalsekvensen återstår. |
| 52 | Window/grid overlays | 640 × 128 | — | Fönster/rutnätslager: specialkomposition återstår. |
| 53 | Repeating stone corridor | 960 × 128 | 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167 | Återstår: rumsskript, NPC-förlopp och pusselkedja behöver full genomgång. |
| 54 | Flying car | 320 × 128 | — | Flygande bil: sekvens/animation återstår. |
| 55 | Black transition background | 320 × 128 | — | Drömnärbilder: bakgrund ensam är svart, objektbilder behövs. |
| 56 | Mask/glasses overlay | 640 × 128 | — | Mask/glasögon/övergång: specialkomposition, inte vanlig masterbakgrund. |
| 57 | Pyramid in space | 320 × 128 | — | Pyramid i rymden: slutsekvens återstår. |
| 58 | Bed/end sequence | 320 × 128 | — | Säng/dröm/slut: intro delvis; slutsekvens återstår. |

## Karaktärer / animationer

39 kostymresurser är extraherade: 984 animationsposter (inklusive riktningar/återanvändning), 771 delbilder. Detta är inte 984 unika rörelser. Alla råa kanaler och kommandon finns i costume_NN/source.json. Preview-atlaser använder init-/grundpose plus vald animation. Ljud, stop/resume, palettändringar, spegling, full aktörsrörelse och skriptkoreografi är inte fullt emulerade.

Kopplade visuella fallback-placeringar: Lou (7), devotee (SF flygplats), bum (London), flygvärdinna (11), vakt (17), Guru (19), plus befintlig TV/bagare. Flygvärdinnans position följer pusslets distraktion; dessa är inte fulla originalaktörsskript. Övriga kostymer finns i katalogen för fortsatt integration.

## Fortsatt ordning

1. Full skriptkörning: nästlade/globala objekt- och rumsskript, coroutine-väntan, aktörer, rumspaletter, ljud och dynamiska objektpositioner.
2. Switch och fyra separata karaktärers rum/inventarier; återstående pussel till slutsekvens med save/resume.
3. Alla logiska varianter och specialvyer granskas mot originalets komposition.
4. Därefter resten av spelet i Scene Lab, enligt användarens ordning; separata master/state-lager där samma bakgrund delas.

## Biljett och karta — källor

SC0001/0063 ger biljett 82 även när introt hoppas över. SC108/023B–025B anger destination 662 (Seattle), ursprung 145 (San Francisco), värde 260. SC115 förbrukar biljetten vid boarding. Ingen gratis returbiljett är belagd av dessa skript. Nya spel får biljetten; befintliga sparfiler får ingen retroaktiv återbetalning eller duplicerad biljett.

SC41 öppnar logiskt rum 153/154 för ritad wallpaper/phone bill map. EN29 döljer Mars med objekt 485–487 tills respektive kartvariabel är 2. Webbversionen visar originalbilden i en modal utan att flytta spelaren eller ändra grottans tillstånd.

Avkodningens formatreferens: https://github.com/scummvm/scummvm/blob/master/engines/scumm/costume.cpp . Ingen ScummVM-kod kopierad; den befintliga projektavkodaren har generaliserats.
