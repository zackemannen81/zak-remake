import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import { actorDepthScale, actorYaw } from './actorPose';

describe('Zak actor orientation and SCUMM room depth', () => {
  it('gets smaller when walking away (towards smaller screen Y)', () => {
    expect(actorDepthScale(44)).toBeLessThan(actorDepthScale(90));
    expect(actorDepthScale(90)).toBeLessThan(actorDepthScale(112));
    expect(actorDepthScale(112)).toBeLessThan(actorDepthScale(126));
    expect(actorDepthScale(112)).toBe(1);
    expect(actorDepthScale(Number.NaN)).toBe(1);
  });

  it('points the GLB towards all four screen directions after the grounding transform', () => {
    const forward = new THREE.Vector3(0, 0, 1);
    const vertical = new THREE.Vector3(0, 1, 0);
    const wrapperCorrection = new THREE.Vector3(0, 0, 1);
    const result = (facing: 'left' | 'right' | 'up' | 'down') =>
      forward.clone()
        .applyAxisAngle(vertical, actorYaw(facing))
        .applyAxisAngle(wrapperCorrection, Math.PI);

    expect(result('right').x).toBeGreaterThan(0.99);
    expect(result('left').x).toBeLessThan(-0.99);
    expect(result('up').z).toBeLessThan(-0.99);
    expect(result('down').z).toBeGreaterThan(0.99);
  });
});
