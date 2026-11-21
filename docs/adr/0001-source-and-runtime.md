# ADR 0001 — Originalkälla, rendering och autonomi
Status: Accepted locally · 2026-11-21 · ZMATAMR-0001

Beslut: använd verktygsmappens kanoniska LFL som byteverifieras mot dumpen. Bevara docs/gamefiles separat. Exportera V2-bilder som opaka rektanglar och djupmask som separat fil. Behåll original-ID även när flera slots delar bildoffset. Three.js är remakens beslutade renderare enligt användarens beställning; bildreferenser får ha UE5-kvalitetsmål utan UE5-runtime.

Konsekvens: 578 bildblock är inte samma sak som 578 frilagda props. Ny grafik måste klassificeras per faktiskt bildtillstånd. Scheduler och spelstatus skiljs från rendering. Lokal uppgiftsregistrering räcker; arbetet kräver inte reviewer-/användargodkännande eller main-publicering. Originalfunktioner gissas inte. Särskilda produktionsval dokumenteras som remakeförslag och kan implementeras autonomt inom användarens beställning.

Evidens: ASSET_PIPELINE.md, objects.json, source-copy-comparison.json och användarens instruktion 2026-11-21.
