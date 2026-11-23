import type { Facing } from '../core/types';

/**
 * SCUMM room pixels are measured top-to-bottom. A smaller y means further
 * from the viewer, so the actor must be SMALLER, never larger, at small y.
 * At the ordinary room-one starting foot position (y=112), scale is 1.
 */
export function actorDepthScale(footY: number): number {
  if (!Number.isFinite(footY)) return 1;
  return Math.max(0.68, Math.min(1.10, 1 + (footY - 112) * 0.0042));
}

/**
 * The imported GLB faces +Z towards the camera. Its grounded wrapper has
 * a 180-degree Z correction, which also reverses local screen X; therefore
 * yaw signs for left/right are opposite the usual Three.js convention.
 */
export function actorYaw(facing: Facing): number {
  switch (facing) {
    case 'up': return Math.PI;            // Back towards the camera
    case 'left': return Math.PI / 2;      // Profile facing screen left
    case 'right': return -Math.PI / 2;    // Profile facing screen right
    case 'down': return 0;                // Front towards the camera
  }
}
