# Walkthrough scripting checkpoint — 2026-11-26

Status: **In Progress**, ZMATAMR-0002. This is an extension of the playable prototype, not a full SCUMM implementation or proof that the entire game can be finished.

The supplied walkthrough is retained in `evidence/user-walkthrough.txt`. It ends with the six-movement dance in Zaire. It supplies neither the subsequent multi-character puzzles nor the ending. Read source contracts alongside the walkthrough: it occasionally omits ticket purchases/connecting flights and uses location names loosely.

## Implemented progression

`src/scenes/progression.ts` contains explicit gameplay adapters, before the existing room handlers and transactional object interpreter. Unknown VM operations still fail transactionally; they are not silently treated as successful.

| Segment | Implementation and source evidence | Verification |
| --- | --- | --- |
| Clothing, boards, rope and phone company | Original object IDs: wet suit 39, glasses 40, hat 43; SC37 boards/rope; OC152/153 bill; OC156 counter disguise check. Hat and glasses allow access; guitar 41 is not wearable. | Engine action chain from bedroom through sewer, computer, counter, application and street. Clothing changes logic, not the rendered costume. |
| Pipe and disposal | OC126 opens pipe with wrench; SC21 produces/reveals crumbs or washes them away. | Real open/pickup/use/turn-on actions; final crumb ownership checked. |
| Application and mailbox | SC61 application crayon combination and OC138 mail gating. Delivery uses a bounded 300-tick adapter instead of the full mailman actor timeline. | Combination, mailing, delivery and fan-card pickup tested with actual engine actions. Full mailman presentation is not implemented. |
| Airports and tickets | EN8/EN9 original route/fare tables; SC30 ticket/cash/refund; SC115 boarding; SC120 airport mapping. CashCard retained, ticket consumed at boarding. | Real engine inputs test pricing, replacement/refund, insufficient balance, boarding, landing and save identity. Browser clicks independently verify book, terminal, Seattle, gate, arrival and saved cash. |
| Devotee | SC43: CashCard purchase costs $42, grants book 45. | Actual browser inventory selection and named actor button. |
| Plane | OC242/SC106 sink clog/600-tick flood; SC36 microwave/600-tick egg; OC262 oxygen prerequisite; OC259 cushion/lighter. | Full engine-action puzzle chain including negative prerequisite and deterministic save/resume mid-flood. |
| Seattle | OC266 branch/airport, OC268 peanuts, OC267 digging, OC273 fire, OC282 yellow drawing, OC281 logical room 129, SC23 remote, OC298 crystal release. | Actual target eligibility and actions through cave and return to airport; no forced crystal unlock in test. |
| Annie | SC62 summarized meeting, room 6 arrival, source blue-crystal return and shard 33 transfer, doors opened. | Transfer/room arrival and ordinary exit back to street tested. **Switch and companion simulation are still absent.** |
| Nepal | Guru guard book requirement; SC42 training sets crystal bit 4; OC359 hay; OC358 flagpole; SC31 $100 yak trip. | Engine chain via London → Cairo → Kathmandu; admission, training, guarded pickup and return fare tested. |
| Zaire | Kathmandu → Kinshasa (147); source five-stage jungle traversal toward logical room 150, door to 151; SC70 club trade and dance. SC48 generates six values 531–533 with all three represented. | Engine routes to shaman hut; trade, six timed text cues, persistent code and save/resume verified. |

## Deliberate prototype substitutions and remaining gaps

- NPC buttons below the scene provide interaction where actor rendering/hit testing is absent. Select Give/Use and an inventory item, then the named NPC. This is not a complete NPC VM.
- Stewardess distraction remains active once the flooding puzzle succeeds. The original moving actor, cleanup/reprimand loop and narrow timing windows are not simulated. The tank appears at its existing source hotspot after opening a bin; original randomized bin placement is not implemented. Peanuts are supplied at cabin entry instead of animated service.
- Return or **Continue flight** lands at the ticket destination. After acquiring both lighter and oxygen tank, later flights are abbreviated as in SC115. Complete cabin service, sounds and actor animations are not reproduced.
- Jungle traversal preserves the five-step destination progression for the supplied Zaire route, but alternates two visual variants; the original randomized maze and backtracking rules remain open. Other jungle routes are not covered by this adapter.
- Shaman choreography is represented by timed numbered text cues, not animated dancers. The persistent code uses a seeded PRNG with the original SC48 range/all-three constraint, not the original random generator. Repeated paid performances remain open.
- Annie's meeting is shortened. Actual character switching, separate character locations/inventories, cross-character gifts and later Mars/crystal/ending chains remain open. Do not label the supplied walkthrough or full game complete while Switch is missing.
- Generic room entry/exit scripts, actor scheduling, nested scripts, dynamic walkbox flags and palette/drawing operations are still incomplete. Logical aliases now work, but mapping an alias does not mean every variant's entry logic has been ported. Airport doors and room artwork outside the tested routes still need individual validation.
- Cropped artwork, authored room projects, original walkboxes and original source files are unchanged by this scripting work.

## Engine and persistence

`roomId` continues to identify the 58 graphics resources; optional `logicalRoomId` preserves source locations such as Seattle 144, San Francisco 145, Kathmandu 148 and cave chamber 129. The scheduler resolves aliases through `logical-rooms.json`. Reproduce that file with `python tools/export_logical_rooms.py` from the byte-verified metadata. Save validation rejects inconsistent room pairs and malformed flight data; old saves without these fields still load. Legacy resource-only airport saves default to San Francisco (room 8) or Kathmandu (room 9), since the old data has no city identity to recover.

Ticket, choice, timer, flags, source object ownership and scheduled events serialize with ordinary saves. Sink timing has its own optional field so it does not overwrite original script variables. The existing lab playtest save key remains separate.

Unknown object programs record room, object, verb, instruction and error in `scriptDiagnostic`, displayed under Recent events & diagnostics. The transactional interpreter additionally handles source bit variables, object names and logical-room travel. This is diagnostic coverage, not total script coverage.

## Verification commands and limits

`npm test` includes `src/core/progression.test.ts`. Its ten scenario tests use real engine selection, target eligibility, path completion and scheduled effects, with inventory fixtures at chapter boundaries. They are not a continuous fresh-game-to-ending playthrough. `npm run build` checks TypeScript and bundles both game/editor.

The browser smoke uses a fresh isolated Chromium context and an airport inventory fixture. It clicks real inventory/NPC/terminal/gate controls, lands in Seattle, and validates the saved destination and cash. Screenshots were inspected. It does not establish all NPC visuals or every hotspot against the new artwork.
