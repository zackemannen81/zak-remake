# Logical rooms and resource reuse

[V] PseudoRoom arguments are byte-verified against SC108. descumm prints mapper indexes without bit 7; actual logical room IDs below include it. ScummVM resource.cpp ensureResourceLoaded maps IDs >127 through resourceMapper. Keeping these IDs distinct is required for game state.

| Logical room | Graphic resource | Init source / offset |
|---|---|---|
| 129 | 14 | SC108 / 018E |
| 130 | 14 | SC108 / 018E |
| 131 | 40 | SC108 / 0195 |
| 132 | 40 | SC108 / 0195 |
| 133 | 44 | SC108 / 019A |
| 134 | 44 | SC108 / 019A |
| 135 | 21 | SC108 / 019F |
| 136 | 43 | SC108 / 01A4 |
| 137 | 43 | SC108 / 01A4 |
| 138 | 43 | SC108 / 01A4 |
| 139 | 22 | SC108 / 01AA |
| 140 | 22 | SC108 / 01AA |
| 141 | 8 | SC108 / 01B9 |
| 142 | 8 | SC108 / 01B9 |
| 143 | 8 | SC108 / 01B9 |
| 144 | 8 | SC108 / 01B9 |
| 145 | 8 | SC108 / 01B9 |
| 146 | 9 | SC108 / 01C1 |
| 147 | 9 | SC108 / 01C1 |
| 148 | 9 | SC108 / 01C1 |
| 149 | 9 | SC108 / 01C1 |
| 150 | 38 | SC108 / 01C8 |
| 151 | 38 | SC108 / 01C8 |
| 152 | 15 | SC108 / 01CD |
| 153 | 29 | SC108 / 01D2 |
| 154 | 29 | SC108 / 01D2 |
| 155 | 24 | SC108 / 01D7 |
| 156 | 53 | SC108 / 01DC |
| 157 | 53 | SC108 / 01DC |
| 158 | 53 | SC108 / 01DC |
| 159 | 53 | SC108 / 01DC |
| 160 | 53 | SC108 / 01DC |
| 161 | 53 | SC108 / 01DC |
| 162 | 53 | SC108 / 01DC |
| 163 | 53 | SC108 / 01DC |
| 164 | 53 | SC108 / 01DC |
| 165 | 53 | SC108 / 01DC |
| 166 | 53 | SC108 / 01DC |
| 167 | 53 | SC108 / 01DC |
| 168 | 37 | SC108 / 01F0 |
| 169 | 37 | SC108 / 01F0 |
| 170 | 37 | SC108 / 01F0 |
| 171 | 37 | SC108 / 01F0 |
| 172 | 37 | SC108 / 01F0 |
| 173 | 37 | SC108 / 01F0 |
| 174 | 37 | SC108 / 01F0 |
| 175 | 37 | SC108 / 01F0 |
| 180 | 28 | SC108 / 01EB |
| 181 | 28 | SC108 / 01EB |
| 182 | 33 | SC108 / 0187 |
| 183 | 21 | SC108 / 019F |
| 184 | 27 | SC108 / 01AF |
| 185 | 27 | SC108 / 01AF |
| 186 | 24 | SC108 / 01D7 |
| 187 | 23 | SC108 / 01FB |
| 188 | 15 | SC108 / 01CD |
| 189 | 33 | SC108 / 0187 |
| 190 | 33 | SC108 / 0187 |
| 191 | 33 | SC108 / 0187 |
| 192 | 14 | SC108 / 018E |
| 193 | 14 | SC108 / 018E |
| 194 | 35 | SC108 / 01B4 |
| 195 | 35 | SC108 / 01B4 |
| 196 | 36 | SC108 / 020E |
| 197 | 36 | SC108 / 020E |
| 198 | 36 | SC108 / 020E |
| 199 | 36 | SC108 / 020E |
| 200 | 36 | SC108 / 020E |
| 201 | 36 | SC108 / 020E |
| 202 | 36 | SC108 / 020E |
| 203 | 36 | SC108 / 020E |
| 204 | 36 | SC108 / 020E |
| 205 | 36 | SC108 / 020E |
| 206 | 23 | SC108 / 01FB |
| 207 | 23 | SC108 / 01FB |
| 208 | 23 | SC108 / 01FB |
| 209 | 23 | SC108 / 01FB |
| 210 | 23 | SC108 / 01FB |
| 211 | 23 | SC108 / 01FB |
| 212 | 23 | SC108 / 01FB |
| 213 | 23 | SC108 / 01FB |
| 214 | 23 | SC108 / 01FB |
| 215 | 23 | SC108 / 01FB |
| 216 | 23 | SC108 / 01FB |
| 217 | 23 | SC108 / 01FB |
| 218 | 23 | SC108 / 01FB |
| 219 | 23 | SC108 / 01FB |
| 220 | 23 | SC108 / 01FB |

The 58 resource rooms plus these aliases are an identity inventory, not a count of independently reachable playable rooms. Room 0 is a special unloaded/transition state. Initialization mappings must be applied by the VM, not discarded after import.

## Transitions
`zak/converted/metadata/room_transitions.json` distinguishes resource preload opcodes 0C/8C from actual scene changes. Dynamic expressions remain unresolved; the source storage room must not be treated as a runtime origin.