# Game Design Document — Zac McKracken and the Alien Mindbenders REMAKE

**Dokumentstatus:** Draft  
**Version:** 0.1  
**Projekt:** zac mcKracken and the Alien Mindbenders REMAKE  
**Avsedd engine/renderare:** Three.js  
**Omfattning:** Produkt- och produktionsspecifikation; ingen spelimplementation ingår här.

## 1. Vision

Skapa en modern, berättelsedriven 3D-remake som bevarar originalspelets berättelse, scenföljd, centrala karaktärer, platser och pusselstruktur, men presenterar dem med genomarbetad samtida 3D-grafik, filmisk regi, ett nyskrivet och dynamiskt musikspår, professionella voiceovers och fullständiga undertexter.

Det ska kännas som ett rikt äventyr att utforska, inte som ett actionspel. Spelaren ska kunna ta sig tid att läsa miljöerna, undersöka märkliga detaljer, prata med karaktärer och lösa pussel. Den visuella och ljudmässiga upplevelsen ska vara påkostad utan att göra den ursprungliga tonen, humorn eller berättelsens igenkännbara scener otydliga.

### Designpelare

1. **Berättelsetrogen:** behåll berättelsens händelser, scenordning och igenkännbara situationer. Förändringar i kanon kräver uttryckligt godkännande.
2. **Visuellt storslagen:** varje plats komponeras som en levande 3D-scen med stark silhuett, stämningsfull ljussättning, tydliga fokuspunkter och omsorg om små miljödetaljer.
3. **Lätt att läsa, rolig att lösa:** interaktioner och pussel ska kännas upptäckbara och rättvisa, utan att ge bort lösningen.
4. **En komplett audiovisuell produktion:** dialog framförs av skådespelare, undertexter är synkroniserade och musiken reagerar på scenens läge och känsla.
5. **Tillgängligt och robust:** centrala funktioner ska fungera med alternativa inmatningssätt, begripliga inställningar och tydliga återhämtningsvägar.

## 2. Produktöversikt

| Egenskap | Målbild |
|---|---|
| Genre | Enspelarläge, berättelsedrivet peka-och-klicka-äventyr med utforskning och inventariepussel |
| Plattform | Modern desktop-webbläsare är planeringsantagandet; målplattformar och lägsta webbläsarversion måste beslutas |
| Teknik | Three.js för 3D-rendering, med projektets spel-, scen-, UI- och ljudlogik byggd som separata moduler |
| Kamera | Regisserade, huvudsakligen fasta eller mjukt animerade kameror per plats; kameran prioriterar läsbarhet och filmisk komposition |
| Spelsätt | Utforska, undersök, tala, samla och kombinera/använd föremål, lös pussel och följ berättelsen |
| Grafikmål | Hög detaljrikedom och tydlig konstnärlig stil; prestationsmål fastställs med en tidig teknisk prototyp |
| Ljud | Fullt originalkomponerad musik och professionellt inspelad dialog; miljöljud och interaktiv ljudmix |
| Spara | Automatiska checkpoints och beständigt sparande; exakta sparplatser och molnsparande är beslutspunkter |

Webb är ett antagande grundat på Three.js, inte ett slutligt plattformsbeslut. Mobil och konsol ingår inte i grundomfattningen utan separat beslut och kapacitetsprov.

## 3. Berättelse och scenstruktur

### Berättelsekrav

- Remaken ska följa originalets berättelse och scenföljd. Centrala händelser, karaktärsbågar, relationer, humor och utfall ska förbli igenkännbara.
- Varje ursprunglig scen ska finnas med och fylla motsvarande berättelse- och spelmässiga funktion. Nya övergångsbilder får binda scener samman, men får inte ersätta eller ändra deras innehåll utan godkännande.
- Pusselns avsikter och beroenden ska bevaras. Om ett ursprungligt pussel behöver justeras för användbarhet eller teknisk genomförbarhet ska ändringen dokumenteras och godkännas innan den byggs.
- Slutlig scenlista, exakt dialog, scenmanus och kanonreferenser ska tas fram från behörigt referensmaterial under produktion. Detta GDD återger inte originalmanus eller dialog.

### Scenbibel och innehållsplan

Innan en scen produceras ska dess scenpost innehålla:

- auktoriserad scenreferens och scenens plats i berättelseordningen;
- berättelsefunktion, närvarande karaktärer och nödvändiga övergångar;
- spelbara hotspots, samtalsämnen, föremål och pusselberoenden;
- kamerakomposition, nivåblockning, fokuspunkter och planerade animationer;
- miljöljud, musikläge, dialograder och undertext-/lokaliseringsnycklar;
- krav på grafik, ljud, voiceover och gränssnitt;
- testfall för att säkerställa att scenen går att slutföra och att ingen viktig händelse missas;
- rättighets-/godkännandestatus för materialet.

Scenregistret ska täcka **100 % av originalets scener** innan innehållsproduktionen betraktas som komplett. Detaljer hämtas från godkända källor; dokumentet ska inte användas för att återskapa skyddad dialog ordagrant.

## 4. Spelupplevelse

### Grundloop

1. Anländ till en scen och orientera dig med kamera, miljödetaljer och eventuella berättelsehändelser.
2. Peka ut och undersök intressanta personer och objekt.
3. Samla ledtrådar och föremål; prata med karaktärer och öppna nya möjligheter.
4. Använd föremål eller information på relevanta objekt och lös pussel.
5. Se konsekvensen i berättelsen, få en tydlig övergång och fortsätt till nästa scen.

### Interaktion

- Primär styrning är muspekare och klick. Objekt som kan undersökas ska ge tydlig visuell återkoppling när pekaren hålls över dem.
- Interaktion ska vara kontextuell: undersök, prata, plocka upp och använd föremål utan onödiga klicksekvenser. Ett val av klassiska verb eller en mer direkt modern kontrollmodell är en öppen designpunkt som ska prototypas.
- Tillgängliga hotspot-ledtrådar och valbar hjälp ska kunna aktiveras i inställningar. De får inte vara obligatoriska.
- Dialogval ska endast införas där de bevarar originalets avsikt; de får inte skapa oavsiktliga alternativa kanonförlopp.
- Stöd tangentbord och, om prototypen visar att det fungerar väl, handkontroll. Samma centrala handlingar ska kunna utföras utan precision med mus.

### Pussel och progression

- Pussel bygger på observation, dialog, föremålsanvändning och samband mellan scener enligt originalets struktur.
- Viktiga ledtrådar ska finnas i spelet självt. Progression får inte vara beroende av att spelaren känner till lösningar utanför spelet.
- Kombinationsförsök ska ge informativ återkoppling utan att exponera lösningen. Undvik permanent förlust av kritiska föremål och mjuklås.
- Valbara ledtrådar kan ge stegvis stöd: påminnelse om mål, antydan om relevant plats/objekt och först därefter en tydligare pusselväg.
- Autosparning ska ske vid säkra övergångar och centrala framsteg. Återupptagning ska inte tvinga spelaren att spela om långa sekvenser.

## 5. Konst, kamera och animation

### Visuell riktning

Sikta på en distinkt, detaljrik och filmisk 3D-värld: handgjorda former, tydliga silhuetter, uttrycksfull färgsättning och rik men kontrollerad materialkänsla. Uttrycket får gärna vara lekfullt och lätt surrealistiskt; det ska inte bli generisk fotorealism eller imitation av en specifik samtida spelstudio.

- Platser ska kännas större och mer levande än bakgrundsmålningar, men deras ursprungliga layout och berättelserelevanta landmärken måste förbli lätt igenkännbara.
- Förgrund, spelplan och bakgrund separeras med komposition, ljus, atmosfär och djup — inte enbart med kontrast eller färg.
- Karaktärer behöver läsbara ansikten, tydlig kroppshållning och tillräcklig animation för att bära dialog och komedi.
- Animation prioriterar blick, ansiktsuttryck, idle-rörelser och tydliga interaktionsreaktioner. Kamera- och skärmshake ska vara återhållsamma och kunna minskas.
- Varje scen får en egen färg- och ljuspalett som stödjer dess känsla, samtidigt som karaktärernas färger förblir läsbara.

### Grafisk kvalitetsriktning

- Fysiskt baserade material där det förbättrar läsbarhet och sammanhållning; konstnärlig kontroll prioriteras framför materialrealism.
- Hybridljussättning: förberäknat ljus/ljusdata för stabila miljöer och selektivt dynamiskt ljus för karaktärer, viktiga händelser och stämningsskiften.
- Mjuka skuggor och subtil atmosfär, med begränsad efterbehandling. Bloom, skärpedjup och färggradering ska förstärka bilden utan att göra interaktionspunkter eller text suddiga.
- UI och undertexter ska renderas skarpt, fristående från scenens skärpedjup och med god kontrast.
- Bildskärpa och visuell läsbarhet ska prioriteras före effekter som kostar mycket GPU-tid.

## 6. Ljud, musik och voiceover

### Musik

Beställ ett **nyskrivet originalsoundtrack** med starka, minnesvärda teman, varierad instrumentering och professionell mix. Musiken ska lyfta äventyr, spänning, humor och miljöernas särprägel. Den ska inte kopiera originalets melodier, arrangemang eller inspelningar; användning av befintligt material kräver separat klarering.

- Bygg musik i lager/stems som kan växla efter scen, dialog och spelstatus.
- Låt övergångar vara musikaliskt mjuka; undvik abrupta loopstarter och att musik konkurrerar med viktig dialog.
- Miljöljud och konkreta interaktioner ska ge platserna liv och hjälpa spelaren att uppfatta viktiga händelser.
- Ge separata reglage för musik, dialog och ljudeffekter samt stöd för mute och lämpligt dynamiskt omfång.

### Voiceover och dialog

- All spelad dialog ska ha professionell voiceover. Dialoginnehåll och framförande ska vara godkänt och rättighetsklarerat före inspelning.
- Casting ska ge karaktärerna tydliga, särskiljbara röster och stödja tonens humor och berättelsens känslomässiga skiften.
- Inspelning, redigering och mix ska ge konsekvent nivå, tydlig diktion och god separation från musik och miljöljud.
- Varje replik ska vara en separat, metadataförsedd tillgång med speaker, scen, språk, undertextnyckel, timing och mixnivå. Inspelningar av skådespelare får inte återanvändas eller syntetiseras utanför beviljade rättigheter.

### Undertexter

- Alla talade repliker ska ha synkroniserade undertexter; även viktiga ljudhändelser ska kunna textas där de förmedlar nödvändig information.
- Undertexter ska kunna slås av/på och erbjuda storleksalternativ, läsbar kontrast/bakgrund, tillräcklig visningstid och speakeridentifiering när det behövs.
- Textning får inte täcka centrala interaktionspunkter eller kritisk bildinformation. Placering och radbrytning ska testas på olika bildformat.
- Dialog, undertexter och lokalisering ska ha gemensamma stabila ID:n så att ändringar kan valideras och synkas.
- Språk för röst och text är inte beslutat. Planera för lokalisering utan att anta att svensk dubbning eller en viss originalspråksversion är beställd.

## 7. Gränssnitt och tillgänglighet

- Huvudmeny, fortsätt/nytt spel, inställningar, paus och spar-/återupptagningsflöde ska vara tydliga och lätta att använda.
- Inventariet ska vara snabbt att öppna, förståeligt med mus och tangentbord och ge klar återkoppling när ett föremål väljs eller kombineras.
- Textstorlek, undertextutseende, ljudbalans, kamerarörelse och ledtrådsnivå ska ha begripliga inställningar.
- Undvik att viktig information enbart kommuniceras med färg eller ljud. Erbjud möjlighet att minska rörelse och blinkande effekter.
- Tillgänglighetsgranskning ska omfatta tangentbordsnavigation, fokusordning, kontrast, skalning av text, skärmläsbar UI-text där plattformen medger det och alternativa ledtrådar för ljudsignaler.

## 8. Teknisk riktning: Three.js

Three.js ansvarar för rendering och 3D-resurser; spelregler, berättelseflöde, sparsystem, UI och ljud ska vara tydligt separerade från renderingskod. Undvik att bygga spelstatus direkt in i renderloopen.

### Föreslagen struktur

- **Appskal:** laddning, inställningar, tillgångskontroll och felåterhämtning.
- **Spelstatus:** scen, berättelseflaggor, inventarium, dialog och pusselprogression i deterministisk och testbar form.
- **Scenhantering:** laddning/frigöring av scenresurser, hotspot-register, kamerariggar och övergångar.
- **Interaktion/UI:** pekare, tangentbord/handkontroll, hotspots, inventarium, dialog, undertexter och tillgänglighetsinställningar.
- **Ljudtjänst:** musiklager, ambience, effekter, dialoguppspelning, volymgrupper och synkroniserade undertexthändelser.
- **Spar/lokalisering:** versionshanterade sparfiler samt externa text- och ljudmetadata med stabila nycklar.

### Rendering och innehåll

- Använd glTF/GLB som standardformat för 3D-scener och modeller; håll geometrin och materialuppsättningen optimerade för webbladdning.
- Utvärdera komprimerade texturer och mesh-optimering i prototypen. Ladda sceninnehåll stegvis och frigör resurser vid scenbyte.
- Välj en välstödd Three.js-renderingsväg som baseline. WebGL2 är en möjlig kompatibilitetsbas; eventuell WebGPU-användning ska vara en uppmätt förbättring, inte ett krav innan browserstöd och fallback har verifierats.
- Färghantering, tonmappning och HDR-miljöljus ska kalibreras mot godkända referensbilder och testas på vanliga bildskärmar.
- LOD, texturupplösning, skuggor, ljus och efterbehandling ska ha kvalitetsnivåer om mätningar visar behov. Mät först på representativa scener.
- Kör automatiska kontroller för trasiga tillgångar, saknade repliker/undertexter och ogiltiga scenreferenser.

### Prestandamål

Prestandanivåerna nedan är **mål att validera**, inte verifierade löften: sikta på stabila 60 bildrutor/s vid 1080p på den beslutade miniminivån och 60 bildrutor/s vid 1440p på rekommenderad desktopnivå. Fastställ en konkret testmaskin- och webbläsarmatris när målplattformen har beslutats. Scenladdning, minnesanvändning och återhämtning från långsamma nätverk ska mätas innan kvalitetsnivån låses.

## 9. Produktion och omfattning

### Föreslagna faser

1. **Rättigheter och förproduktion:** verifiera ägande/licens, källmaterial, namn, karaktärer, story, scener, musik och manus. Samla auktoriserade referenser och besluta plattform, språk och målgrupp.
2. **Vertikal skiva:** bygg en representativ scen med slutlig avsedd bildkvalitet, interaktion, dialog, undertexter, musik, sparning och prestandamätning.
3. **Innehållsproduktion:** bygg och granska samtliga scener med scenbibel, versionsstyrda tillgångar och berättelse-/rättighetsgrindar.
4. **Integration och kvalitet:** testa pusselberoenden, scenövergångar, ljudsynk, sparfiler, tillgänglighet, browserkompatibilitet och prestanda.
5. **Releaseberedskap:** slutför lokalisering, rättighets- och krediteringskontroll, säkerhetskopiering, felrapportering och godkännande av hela spelet.

### Omfattning i denna designuppgift

**Ingår:** GDD, designmål, spel-loop och mekanik, scenkrav, konst- och ljudriktning, Three.js-teknisk riktning, kvalitetsmål, risker och beslutspunkter.

**Ingår inte:** spelkod, färdig scenlista baserad på ej verifierade källor, reproduktion av originalmanus/dialog, skapande eller kopiering av originaltillgångar, inspelning av röster, komponerad slutmusik, lokalisering eller produktionsgodkännande.

## 10. Kvalitetsgrindar och acceptanskriterier

GDD:n och framtida produktion bedöms mot följande:

- GDD:n anger en sammanhängande målbild för berättelse, spel, bild, ljud, teknik och tillgänglighet.
- Scenbibel och testplan visar hur varje ursprunglig scen och berättelsehändelse bevaras och verifieras när behörigt material finns tillgängligt.
- Ingen produktionsmässig användning, publicering eller marknadsföring av skyddat namn, berättelse, karaktär, scen, manus, musik eller originaltillgång sker innan erforderliga rättigheter och godkännanden har verifierats.
- Den vertikala skivan visar avsedd 3D-kvalitet, läsbar interaktion, spelbar pusselprogression, sparning, voiceover, synkroniserade undertexter och mätbar prestanda.
- För release täcks 100 % av talad dialog av korrekt synkroniserade undertexter för varje färdigställd språkversion.
- Hela spelet klarar scen-för-scen-test, pussel-/mjuklåsgranskning, ljud- och bildinställningar, återupptagning och den beslutade plattformsmatrisen.

## 11. Risker och öppna beslut

| Fråga/risk | Hantering eller beslut som krävs |
|---|---|
| Rättigheterna till IP, namn, sceninnehåll, manus och musik är inte verifierade i detta repo | Bekräfta rättighetsinnehav och skriftliga tillstånd före trogen asset-/manusproduktion, inspelning eller release. Om tillstånd saknas måste projektets omfattning ändras; en fristående andlig efterföljare är inte samma produkt som denna remake. |
| Exakt originalreferens och fullständig sceninventering saknas i GDD-underlaget | Skapa scenbibel med behörigt referensmaterial när det finns tillgängligt; gissa inte scendetaljer. |
| Plattform och minsta browser/GPU är inte beslutade | Prototypa och mät, välj miniminivå och dokumentera testmatris före produktionslåsning. |
| Voiceover- och undertextspråk, rollbesättning och lokalisering är inte beslutade | Bekräfta språk, budget, casting och lokalisering innan dialoginspelning. |
| Omfattningen av förnyad kontrollmodell kan påverka originalpussel | Prototypa kontextuell kontra verbbaserad interaktion och godkänn förändringar utan att ändra pusslens avsedda lösning. |
| Hög grafisk kvalitet kan öka laddtid och utesluta svagare datorer | Mät vertikal skiva, använd nivåer/streaming och prioritera läsbarhet och stabil bildfrekvens. |
| Musik och tal kan konkurrera eller falla ur synk | Använd separata ljudbussar, repliksmetadata och automatiska synk-/täckningskontroller. |

### Beslut som ska låsas senare

1. Bekräftad rättighetsstatus och godkänd användning av IP.
2. Slutlig plattform, browser-/hårdvaruminimum och leveransformat.
3. Röst- och textningsspråk, lokalisering och eventuell tillgänglighetsbudget.
4. Slutlig interaktionsmodell, sparflöde och ledtrådssystem.
5. Scenvis omfattning, godkännare och releaseacceptans.

---

**Dokumentägare:** projektet (ej tilldelad)  
**Nästa uppdatering:** efter att uppgifts-ID, rättighetsstatus, plattform och språk har beslutats.
