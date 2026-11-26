# Pussel och progression — källankrad specifikation
ZMATAMR-0001 · 2026-11-21

[V] = direkt instruktion/data, [H] = härledning/walkthrough, [F] = remakebeslut. Alla objektprogram och verbstartpunkter finns i `zak/converted/metadata/interactions.json`; alla variabelreferenser i `variables.json`. Detta är den fullständiga statiska källbilagan, inte en påstådd full genomspelning.

## Verifierade lokala kontrakt

| Kedja | Villkor, trigger och effekt [V] | Källa |
|---|---|---|
| Skrivbordslåda → kazoo | Låda 94 sätter/rensar state08 med ljud 68/69. Kazoo 16 har parent slot 22/state 8. Verb E plockar upp aktivt objekt; B/C startar skript 137. | rum 1 OC94 @0024/@002D; OC16 @001C/@001F; objects.json |
| Spela kazoo | Aktivt verb 11 och ego 1. Var167=64/56 eller Var164=60 stoppar användning med respons. Ljud 33 får inte redan gå. Rum31 och Var171=Var234 anropar systemhändelse 253 på objekt500. Rum3, state08(142) av och distans ≤20 utlöser objekt147. | SC137 @0015–00D9 |
| Plastkort under skrivbord | Första pickup-försöket på 106 sätter state08 på både 106 och 18 och väntar 30. Senare försök ger annan respons. Verb B anropar objekt93/händelse253. | rum1 OC106 @0023/@006A |
| Fisk/skål och huvudutrustning | Objekt14 kontrollerar ego1, Var138 mot Var234 och Var167; sätter Var167=56 eller64 beroende på state04(14), startar script150. | rum1 OC14 @003B–009D |
| Slutmaskinens bas | Användning med objekt78 tar bort dess ägare, rensar state08/state02 på427 och startar dess händelse250. Annat objekt går till script3. | rum25 OC426 @0017–0033 |
| Slutmaskinens vänstra brytare | Händelse4 lagrar VAR_EGO i Var200, startar ljud27, sätter state08. Händelse5 återställer Var200 från Var234, rensar state08, stoppar ljud98 och rensar maskindelstillstånd433/435. | rum25 OC424 @0021–0058 |

Sökvägar för OC-källorna: `zak/converted/scripts/LFv2_NNNN/ROv2/OCv2_NNNN.txt`. SC137 finns i den tidigare verifierade `docs/scummvm-tools-2.9.0-win32-x86_64/zak/converted/scripts/LFv2_0001/SCv2_0137.txt`. @ anger hex-offset i disassemblyn. Dessa exempel är testbara kontrakt; inga härledda semantiska variabelnamn skrivs tillbaka över original-ID.

## Global lösningskedja [H]
Källa: hela `docs/GAME_SOLUTION.md`, en lokal walkthrough med ej verifierad författare/version. Kedjan är en testkandidat. Dess instruktioner får inte ersätta motstridiga originalprogram. Exakt ordning kan delvis vara valfri.

1. Lägenheten: samla skål, telefonräkning, kazoo och tapet. I vardagsrum/kök finns fjärrkontroll under kudde, kniv, ägg, nyckel och kritor. Använd kniv för kortet. [V] Namn/ID/parentrelationer stöds av rum1–2; full ordningsfrihet är inte bevisad.
2. Stad och inköp: köp verktyg och utrustning, hämta bröd genom bagarens dörrklocka, bearbeta hårnålsskylten med verktyg. Kritor/tapet och rör/bröd ingår i senare kombinationer. Se walkthroughens exakta steg, inte denna sammanfattning, för replaydata.
3. Resor och informationsinhämtning: CashCard/biljetter leder till fler regioner. Flygplatser och flygpanoramor återkommer. Kostnad, tider och åtkomst måste bindas till respektive script och variabelbank; inget obegränsat resesystem antas.
4. Kristallprogression: kristallskärvor, blå kristall, gul kristall och vit kristall kopplas till världsplatsernas maskiner och förmågor. Källobjekt inkluderar blå55 i rum14, vit58 i rum15 och gul81 i rum44. Visningsobjekt185/186 i rum7 är inte automatiskt samma pickup-objekt.
5. Delfin/undervatten: walkthroughen beskriver fall med fallskärm, kazoo som kallar delfin, blå kristall för kontroll och sökning bland sjögräs efter glödande objekt. [V] Kazoo-script137 har rum31-villkor och objekt500-trigger. Aktörsbyte och samtliga villkor kräver fortfarande samkörning med anropade objektprogram.
6. Mars: hjälm/syrgas/skål, CashCard vid monolit, tokens/spårvagn och flera figurer behövs enligt walkthrough. Broom alien/skylt/nyckel och sarkofag ingår i pyramidsekvensen. Kritiska samtidiga handlingar och timeout får inte implementeras som en enkel linjär dialog.
7. Vit kristall: walkthroughen använder Leslie, Zak och Melissa på olika positioner; nyckel och knapp skapar ett tidsfönster för hämtning. Exakta tickvärden ska komma från script, inte från ordet ”quickly”.
8. Slutmaskin: glödande objekt + bas + crystalabra + tre kristaller; två figurer drar brytare. [V] rum25 har bas426, glödande del427, crystalabra428, kristallbilder429–431 och brytare424/425. Den lokala walkthroughens felstavning ”calendra” normaliseras inte till originalnamn utan källnamnet crystalabra används.

## Fullständig verifieringsstrategi [F]
För varje verbentry: positivt test, fel objekt2, fel aktör, saknat ägarskap, båda tillståndsgrenarna, återinträde i rum, avbruten interaktion och save/load mitt i tillåten väntan. För tidsfönster testas precis före, på och efter gränsen. För dynamisk indexering loggas beräknat index. För actorväxling verifieras separata inventarier och rum.

Skapa replay från walkthrough med checkpoints efter varje kausal ändring. Jämför vars/ägare/state/scheduler mot original eller en validerad kompatibilitetstolk. Markera uppnådda och ouppnådda branches. Statisk närvaro av ett anrop är inte tillräckligt för att kryssa en pusselgren som speltestad. Replays och scenproduktion får fortsätta i oberoende regioner när en annan region har en dokumenterad blockerare.

## Produktionskedjor för hela walkthroughen [H]
Detta är en mer detaljerad arbetsnedbrytning av GAME_SOLUTION.md. Varje rad ska kopplas till event_contracts innan den används som färdig runtime-logik. Ordningen nedan är walkthroughens lösning, inte ett bevis att alla beroenden är obligatoriska.

| Kedja | Förutsättningar och handlingar | Resultat / nästa beroende |
|---|---|---|
| P01 Lägenhet | Öppna lådor; samla skål, räkning, kazoo, tapet; lyft kuddar; anslut TV; hämta kniv, ägg, nyckel; använd kniv på kortet | CashCard och basutrustning, tillgång till resor |
| P02 Stadens utrustning | Köp golfklubba, våtdräkt, verktyg, hatt och förklädnad; klipp hårnålsskylten; ring bagaren tills brödet lämnas | Verktyg, senare låsverktyg och bröd |
| P03 Brödsmulor och karta | Hämta kritor; rita på tapet; lossa diskbänksrör; kör gammalt bröd i diskhon; samla smulor | Fågelmat, kartunderlag och rör-/skåltillstånd |
| P04 Telefonbolag och ansökan | Förklädnad; matthörn→bräda→rep→hål; dator och diskdörr; blankett+krita; posta via brevlådan | Senare brev/fankort; tillträde och poststatus |
| P05 Buss och första resa | Kazoo vid bussen; kortläsare; möte med devotee och flyg | Seattle-spåret och bok-/resurskedja |
| P06 Flygdistraktion | Papper i handfat, vatten, anropsknapp; ägg i mikrovågsugn; sök bagagefack; lyft första kudden | Syrgastank och tändare; flera tidsstyrda flygpersonalstillstånd |
| P07 Rainiergrotta | Jord+gren; jordekorre+jordnötter; gren/bo i eldstad; tändare; krita på markeringar; fjärrkontroll vid ankh-dörr | Blå kristall och fortsatt möte med Annie |
| P08 Annie | Hämta post; blå kristall i brevinkast; möte | Figurväxling och tillgång till Annies egna föremål |
| P09 Nepal | Bok till vakten; Guru lär ut kristallbruk; bränn hö; ta flaggstång; yak/resa | Blå kristallförmåga och flaggstång |
| P10 Zaire-dans | Golfklubba till shaman; observera sex danssteg | Kod till Marsport; koden får inte hårdkodas från ett genomspel |
| P11 Marsläger | Leslie: säkring/kort i bil, rätt kort till Melissa; monolit; token/säkring till kabin; tejp, ficklampa, stege och broom alien | Kabintillträde, utrustning och sandröjning |
| P12 Mars stora port | Stege vid dörr; danskod; återta stege; pedestal och kristallsfär | Tillgång till kamrar/labyrint |
| P13 Atmosfär och markeringar | Ficklampa och spakar i första labyrinten; läs kort-/kartkammarens och statyns markeringar | Andningsvillkor, egyptiska och mexikanska mönster |
| P14 Inspelning och ankh | Melissa: kassett/boombox, syrgasventil, spela in sfärljud; spela upp vid andra dörren | Ankh; ljudtillstånd är ett pusselvillkor |
| P15 Ancient Ones | Ankh i panel efter tredje dörrens gångar; hämta gyllene nyckel; tryck knapp | Meddelande och nyckel för vit kristall |
| P16 Sfinxen | Zak ritar Egyptenmönster; följ dörrsymboler; Annie reser dit och läser hieroglyfer; knappar i rätt ordning | Kart-/Marsmarkeringar och gemensam figurprogression |
| P17 Mexiko | Resa via Miami, bok till bum; djungel/templets facklor och labyrint; rita Mexikomönster | Kristallskärva; labyrintordningen måste bevaras i replay |
| P18 Peru-fågel | Smulor i matare; blå kristall på fågel; flyg till ristningens öga; hämta rulle och lämna till Zak | Rulle för Stonehenge; kontrollerad aktör och ägare skiljs åt |
| P19 Stonehenge | Zak överför whiskey, avbitare, rulle, flaggstång och två skärvor till Annie; vakt+whiskey, brytare, stängsel; skärvor/stång på altarsten; läs rulle | Gul kristall; ge den till Zak |
| P20 Gul kristall | Shaman lär ut användning; teleportera till Peru och hämta crystalabra; res vidare | Teleportförmåga och del till slutmaskinen |
| P21 Bermuda/utomjordingar | Flyg, observera pilotens färgkod; valfritt fankort och framtida lottonummer; lämna skeppet | Återfärd/fallsekvens; frivillig pengargren ska inte göras obligatorisk |
| P22 Delfin | Fallskärm under fallet; kazoo i vattnet; blå kristall på delfin; röj sjögräs; överlämna glödande del | Undervattenskomponent och återgång till Zak |
| P23 Egypten och Marsövergång | Zak öppnar lucka, Annie går till brytare; tejpa skål; teleportera till Mars, rita Marsmönster; ta på tank/skål | Överlevnad och återförening på Mars |
| P24 Mars transport | Tre figurer använder monolit och token i spårvagn i tidsfönstret; Leslie röjer sand; Zak använder hårnålsskylt | Pyramidöppning; samtidighet/timer måste valideras |
| P25 Vit kristall | Leslie trycker sarkofagfötter; Zak och Melissa tar trappan; Melissa använder nyckel och knapp medan Zak står vid kristallen | Tidsstyrd hämtning av vit kristall |
| P26 Slutmaskin | Teleport till Egypten; glödande del→bas, crystalabra→del, tre kristaller→hållare; Zak och Annie drar varsin brytare | Slutsekvens |

### Källkontroller som fyller luckor i walkthroughen [V]
- Whiskey 46 erhålls genom `OCv2_0208` i resursrum8, systemverb253, pickup vid0107. Programmet innehåller bok-/bum/devotee-relaterad dialog och överföring av ägodelar. Förvärvet är inte ett generiskt pickup-verb på flaskans eget program; det startar bara SC138 vid användning/läsning.
- Fallskärm77 tas upp i resursrum40:s ENv2 @0029 när logiskt rum131 och objektets ägare15 prövas. Användningen kontrollerar logiskt rum131/132; dessa är alias till grafikresurs40, inte saknade LFL-filer.
- Jordnötter51 har inget eget verbprogram. Pickup finns i SC104 @01F8 och SC116 @0025 i resursrum11. Den tomma eventtabellen betyder därför inte att föremålet är oanvändbart.
- Kristallskärva33 i resursrum6 har pickup-händelseE @0022. Walkthroughens senare ”två skärvor” får inte tolkas som att båda kommer från Mexiko.

### Kvarstående explicita källluckor
Walkthroughen hänvisar till en sista sida med labyrintkartor som saknas i den lokala texten. Kartorna kan därför inte behandlas som inlästa. Originalskripten och PseudoRoom-mappningen är primärt underlag för att rekonstruera gångvalen. ”Quickly” är inte ett tickvärde; timers ska hämtas ur exekverad kod. Platsnamn från walkthroughen ska inte automatiskt bindas till ett enda grafiskt rum-ID. P26 är en testkandidat tills ett helt genomspel passerat.
