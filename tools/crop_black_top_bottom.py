from __future__ import annotations

import argparse
from pathlib import Path
from typing import Iterable

from PIL import Image


SUPPORTED_EXTS = {".png", ".jpg", ".jpeg", ".webp"}


def iter_images(root: Path) -> Iterable[Path]:
    for path in root.rglob("*"):
        if path.is_file() and path.suffix.lower() in SUPPORTED_EXTS:
            yield path


def is_dark_row(img: Image.Image, y: int, black_threshold: int, dark_ratio: float) -> bool:
    """
    Return True if the row is 'black enough'.
    A pixel counts as dark if R,G,B are all <= black_threshold.
    The row counts as black if at least dark_ratio of pixels are dark.
    """
    width = img.width
    dark_pixels = 0

    for x in range(width):
        px = img.getpixel((x, y))

        if isinstance(px, int):
            # grayscale
            r = g = b = px
        else:
            if len(px) >= 3:
                r, g, b = px[:3]
            else:
                r = g = b = px[0]

        if r <= black_threshold and g <= black_threshold and b <= black_threshold:
            dark_pixels += 1

    return (dark_pixels / width) >= dark_ratio


def find_crop_bounds(
    img: Image.Image,
    black_threshold: int = 16,
    dark_ratio: float = 0.995,
) -> tuple[int, int]:
    """
    Returns (top, bottom_exclusive) crop bounds.
    Only trims black bands from top and bottom.
    """
    height = img.height

    top = 0
    while top < height and is_dark_row(img, top, black_threshold, dark_ratio):
        top += 1

    bottom = height - 1
    while bottom >= 0 and is_dark_row(img, bottom, black_threshold, dark_ratio):
        bottom -= 1

    # bottom is inclusive here, convert to exclusive
    bottom_exclusive = bottom + 1

    # safety: if the whole image is dark, don't crop to nothing
    if top >= bottom_exclusive:
        return 0, height

    return top, bottom_exclusive


def process_image(
    src: Path,
    dst: Path,
    black_threshold: int,
    dark_ratio: float,
    in_place: bool,
) -> tuple[bool, int, int]:
    with Image.open(src) as img:
        img = img.convert("RGBA")
        top, bottom = find_crop_bounds(img, black_threshold=black_threshold, dark_ratio=dark_ratio)

        crop_needed = not (top == 0 and bottom == img.height)

        if crop_needed:
            cropped = img.crop((0, top, img.width, bottom))
            dst.parent.mkdir(parents=True, exist_ok=True)
            cropped.save(dst)
            removed_top = top
            removed_bottom = img.height - bottom
            return True, removed_top, removed_bottom
        else:
            if not in_place:
                dst.parent.mkdir(parents=True, exist_ok=True)
                img.save(dst)
            return False, 0, 0


def main():
    parser = argparse.ArgumentParser(
        description="Crop black bars from top and bottom of background images."
    )
    parser.add_argument(
        "input_root",
        type=Path,
        help="Root folder containing background images in subfolders.",
    )
    parser.add_argument(
        "--output-root",
        type=Path,
        default=None,
        help="Where to save processed images. Default: <input_root>_cropped",
    )
    parser.add_argument(
        "--in-place",
        action="store_true",
        help="Overwrite original files instead of writing to a new folder.",
    )
    parser.add_argument(
        "--black-threshold",
        type=int,
        default=16,
        help="RGB threshold for considering a pixel black/dark. Default: 16",
    )
    parser.add_argument(
        "--dark-ratio",
        type=float,
        default=0.995,
        help="Minimum fraction of dark pixels in a row to count as a black row. Default: 0.995",
    )

    args = parser.parse_args()

    input_root: Path = args.input_root.resolve()

    if not input_root.exists():
        raise SystemExit(f"Input folder does not exist: {input_root}")

    if args.in_place:
        output_root = input_root
    else:
        output_root = args.output_root.resolve() if args.output_root else input_root.parent / f"{input_root.name}_cropped"

    total = 0
    changed = 0
    unchanged = 0

    for src in iter_images(input_root):
        total += 1

        if args.in_place:
            dst = src
        else:
            rel = src.relative_to(input_root)
            dst = output_root / rel

        cropped, removed_top, removed_bottom = process_image(
            src=src,
            dst=dst,
            black_threshold=args.black_threshold,
            dark_ratio=args.dark_ratio,
            in_place=args.in_place,
        )

        if cropped:
            changed += 1
            print(f"[CROPPED] {src}  top={removed_top}px  bottom={removed_bottom}px")
        else:
            unchanged += 1
            print(f"[OK]      {src}")

    print("\nDone.")
    print(f"Total images : {total}")
    print(f"Cropped      : {changed}")
    print(f"Unchanged    : {unchanged}")
    if not args.in_place:
        print(f"Output saved to: {output_root}")


if __name__ == "__main__":
    main()