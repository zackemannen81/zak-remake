export const SCUMM_V2_Z_BUFFER_COUNT = 2;

/**
 * SCUMM V2 exposes mask buffer indices through `_imgBufOffs`. Rooms have two
 * entries (empty plane 0 plus the occlusion plane 1); higher walkbox mask
 * values resolve to the final available plane rather than acting as bit flags.
 */
export function scummV2MaskBufferIndex(walkboxMask: number): number {
  if (!Number.isFinite(walkboxMask)) return 0;
  return Math.max(0, Math.min(SCUMM_V2_Z_BUFFER_COUNT - 1, Math.trunc(walkboxMask)));
}

/** Place binary object-mask pixels into a room-sized RGBA texture, in source coordinates. */
export function composeRoomMaskPixels(
  roomWidth: number,
  roomHeight: number,
  objectX: number,
  objectY: number,
  maskWidth: number,
  maskHeight: number,
  sourceRgba: ArrayLike<number>,
): Uint8Array {
  const output = new Uint8Array(roomWidth * roomHeight * 4);
  if (roomWidth <= 0 || roomHeight <= 0 || maskWidth <= 0 || maskHeight <= 0) return output;

  for (let y = 0; y < maskHeight; y += 1) {
    const targetY = objectY + y;
    if (targetY < 0 || targetY >= roomHeight) continue;
    for (let x = 0; x < maskWidth; x += 1) {
      const targetX = objectX + x;
      if (targetX < 0 || targetX >= roomWidth) continue;
      const sourceIndex = (y * maskWidth + x) * 4;
      if ((sourceRgba[sourceIndex] ?? 0) < 128) continue;
      const targetIndex = (targetY * roomWidth + targetX) * 4;
      output[targetIndex] = 255;
      output[targetIndex + 3] = 255;
    }
  }
  return output;
}
