#!/usr/bin/env python3
"""Export SCUMM v2 room backgrounds (IMv2) as indexed PNGs.

A Python 3 port of the SCUMM Image Encoder's v2 EGA column-RLE decoder.
Source dump files are read-only; output goes to converted/images/backgrounds.
Upstream reference: https://github.com/loonaticx/scumm-image-encoder
"""

# MIT License
# Copyright (c) 2011 Laurence Dougal Myers
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

from __future__ import annotations

import argparse
import csv
import hashlib
import struct
import sys
from pathlib import Path

from PIL import Image

EGA_COLORS = bytes([
    0x00, 0x00, 0x00, 0x00, 0x00, 0xAA, 0x00, 0xAA, 0x00, 0x00, 0xAA, 0xAA,
    0xAA, 0x00, 0x00, 0xAA, 0x00, 0xAA, 0xAA, 0x55, 0x00, 0xAA, 0xAA, 0xAA,
    0x55, 0x55, 0x55, 0x55, 0x55, 0xFF, 0x55, 0xFF, 0x55, 0x55, 0xFF, 0xFF,
    0xFF, 0x55, 0x55, 0xFF, 0x55, 0xFF, 0xFF, 0xFF, 0x55, 0xFF, 0xFF, 0xFF,
])
EGA_PALETTE = EGA_COLORS + bytes(768 - len(EGA_COLORS))
MAX_WIDTH = 4096
MAX_HEIGHT = 128  # The reference decoder's horizontal-bleed table is 128 rows.


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def decode_v2_bitmap(raw: bytes, width: int, height: int) -> tuple[bytearray, int]:
    """Decode the v2 column-oriented EGA RLE stream; return pixels and bytes read."""
    if not 1 <= width <= MAX_WIDTH:
        raise ValueError(f"unsupported image width: {width}")
    if not 1 <= height <= MAX_HEIGHT:
        raise ValueError(f"unsupported image height: {height}; decoder supports 1..{MAX_HEIGHT}")

    pixels = bytearray(width * height)
    bleed_table = bytearray(MAX_HEIGHT)
    pos = 0
    run = 1
    colour = 0
    data = 0
    bleed = False

    # Preserve the reference algorithm's run state across column boundaries.
    for x in range(width):
        for y in range(height):
            run -= 1
            if run == 0:
                if pos >= len(raw):
                    raise EOFError(f"unexpected end of IMv2 data at pixel ({x}, {y})")
                data = raw[pos]
                pos += 1
                if data & 0x80:
                    run = data & 0x7F
                    bleed = True
                else:
                    run = data >> 4
                    bleed = False
                if run == 0:
                    if pos >= len(raw):
                        raise EOFError(f"missing extended run length at pixel ({x}, {y})")
                    run = raw[pos]
                    pos += 1
                    if run == 0:
                        raise ValueError(f"zero extended run length at pixel ({x}, {y})")
                colour = data & 0x0F

            if not bleed:
                bleed_table[y] = colour
            pixels[y * width + x] = bleed_table[y]

    return pixels, pos


def export_room(room_dir: Path, output_path: Path) -> dict[str, object]:
    ro = room_dir / "ROv2"
    header_path = ro / "HDv2"
    bitmap_path = ro / "IMv2"
    if not header_path.is_file() or not bitmap_path.is_file():
        raise FileNotFoundError(f"expected {header_path} and {bitmap_path}")

    header = header_path.read_bytes()
    if len(header) < 4:
        raise ValueError(f"HDv2 is only {len(header)} bytes; expected at least 4")
    width, height = struct.unpack("<HH", header[:4])
    raw = bitmap_path.read_bytes()
    pixels, consumed = decode_v2_bitmap(raw, width, height)

    image = Image.frombytes("P", (width, height), bytes(pixels))
    image.putpalette(EGA_PALETTE)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    image.save(output_path, format="PNG", optimize=True)

    # Independently reopen and verify the generated PNG.
    with Image.open(output_path) as check:
        if check.format != "PNG" or check.size != (width, height):
            raise ValueError(f"PNG verification failed for {output_path}")
        check.verify()
    with Image.open(output_path) as check:
        if check.mode != "P" or check.size != (width, height):
            raise ValueError(f"unexpected PNG mode/size for {output_path}: {check.mode} {check.size}")

    png = output_path.read_bytes()
    return {
        "room": room_dir.name,
        "width": width,
        "height": height,
        "source_block": f"{room_dir.name}/ROv2/IMv2",
        "source_bytes": len(raw),
        "source_sha256": sha256(raw),
        "decoded_bytes": consumed,
        "trailing_bytes": len(raw) - consumed,
        "unique_palette_indices": len(set(pixels)),
        "png_file": output_path.name,
        "png_bytes": len(png),
        "png_sha256": sha256(png),
    }


def main() -> int:
    script_path = Path(__file__).resolve()
    default_dump = script_path.parents[2] / "dump"
    default_output = script_path.parents[1] / "images" / "backgrounds"

    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-root", type=Path, default=default_dump,
                        help="directory containing LFv2_* room folders")
    parser.add_argument("--output-dir", type=Path, default=default_output,
                        help="PNG output directory (default: converted/images/backgrounds)")
    parser.add_argument("--only", metavar="LFv2_NAME",
                        help="export only one room folder, e.g. LFv2_0001")
    parser.add_argument("--overwrite", action="store_true",
                        help="replace existing PNGs and manifest")
    args = parser.parse_args()

    source_root = args.source_root.resolve()
    output_dir = args.output_dir.resolve()
    if not source_root.is_dir():
        parser.error(f"source directory does not exist: {source_root}")

    rooms = sorted((p for p in source_root.glob("LFv2_*") if p.is_dir()), key=lambda p: p.name.lower())
    if args.only:
        rooms = [p for p in rooms if p.name == args.only]
        if not rooms:
            parser.error(f"room folder not found: {args.only}")
    if not rooms:
        parser.error(f"no LFv2_* room folders found in {source_root}")

    output_dir.mkdir(parents=True, exist_ok=True)
    manifest_path = output_dir / "backgrounds_manifest.csv"
    expected_outputs = [output_dir / f"{room.name}.png" for room in rooms]
    if not args.overwrite:
        existing = [p for p in expected_outputs if p.exists()]
        if manifest_path.exists() or existing:
            paths = ([str(p) for p in existing] + ([str(manifest_path)] if manifest_path.exists() else []))
            parser.error("refusing to overwrite existing output(s): " + ", ".join(paths))

    rows: list[dict[str, object]] = []
    failures: list[str] = []
    for room, output_path in zip(rooms, expected_outputs):
        try:
            row = export_room(room, output_path)
            rows.append(row)
            print(f"OK {row['room']}: {row['width']}x{row['height']}, "
                  f"{row['unique_palette_indices']} colors -> {output_path.name}")
        except Exception as exc:
            failures.append(f"{room.name}: {type(exc).__name__}: {exc}")
            print(f"ERROR {failures[-1]}", file=sys.stderr)

    if rows:
        columns = [
            "room", "width", "height", "source_block", "source_bytes", "source_sha256",
            "decoded_bytes", "trailing_bytes", "unique_palette_indices", "png_file",
            "png_bytes", "png_sha256",
        ]
        with manifest_path.open("w", newline="", encoding="utf-8") as manifest_file:
            writer = csv.DictWriter(manifest_file, fieldnames=columns)
            writer.writeheader()
            writer.writerows(rows)

    print(f"Exported {len(rows)}/{len(rooms)} backgrounds to {output_dir}")
    if failures:
        print(f"{len(failures)} room(s) failed; see errors above.", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
