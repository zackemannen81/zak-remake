# Task Workflow
Status: Canonical — 2026-11-21

Draft → Ready → In Progress → Complete. Agenten registrerar nästa lediga ZMATAMR-ID lokalt i TASK_IDS.md och fyller mål, omfattning, leverans och verifiering innan arbetet startar. Agenten flyttar själv uppgiften till Ready och In Progress. Ingen publicering till main/default branch, necessity gate eller godkännande från användare/reviewer krävs.

En aktiv uppgift finns i CURRENT_TASK.md. Användarens nya uttryckliga omfattning får ersätta en ännu ej aktiverad draft. Dokumentera ändringen. Bevara tidigare resultat och användarändringar. Sammanhängande delsteg får ingå i samma leverans med egna checklistor.

Spara verifierade resultat och nästa konkreta steg löpande. Vid metodfel: skriv orsak och välj annan metod. Vid extern blockering: dokumentera exakt fel och fortsätt oberoende arbete. Märk aldrig blockerade eller ej verifierade resultat som klara.

Complete kräver att leveranskraven och relevanta tester är uppfyllda samt status, systemdokumentation, filstruktur och signerad journal är uppdaterade. Arkivera då uppgiften i finished/ZMATAMR-NNNN_slug.md och återställ CURRENT_TASK.md från mallen. Avslutade historiska uppgifter ändras inte. Backlog indexeras i backlog/README.md; arkitekturbeslut i adr/README.md.
