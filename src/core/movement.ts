import type { GameState, Point, RoomData, Walkbox } from './types';

function pointInPolygon(point: Point, polygon: Point[]): boolean {
  let inside = false;
  for (let index = 0, previous = polygon.length - 1; index < polygon.length; previous = index, index += 1) {
    const a = polygon[index]!;
    const b = polygon[previous]!;
    const nearest = closestOnSegment(point, a, b);
    if ((point.x - nearest.x) ** 2 + (point.y - nearest.y) ** 2 <= 0.5) return true;
    const crosses = (a.y > point.y) !== (b.y > point.y)
      && point.x < ((b.x - a.x) * (point.y - a.y)) / ((b.y - a.y) || Number.EPSILON) + a.x;
    if (crosses) inside = !inside;
  }
  return inside;
}

function closestOnSegment(point: Point, start: Point, end: Point): Point {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const lengthSquared = dx * dx + dy * dy;
  const t = lengthSquared === 0 ? 0 : Math.max(0, Math.min(1, ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared));
  return { x: Math.round(start.x + t * dx), y: Math.round(start.y + t * dy) };
}

function projectToBox(point: Point, box: Walkbox): Point {
  const polygon = box.pixel_coordinates;
  if (polygon.length < 3 || pointInPolygon(point, polygon)) return point;
  let closest = polygon[0]!;
  let closestDistance = Number.POSITIVE_INFINITY;
  for (let index = 0; index < polygon.length; index += 1) {
    const candidate = closestOnSegment(point, polygon[index]!, polygon[(index + 1) % polygon.length]!);
    const distance = (point.x - candidate.x) ** 2 + (point.y - candidate.y) ** 2;
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = candidate;
    }
  }
  return closest;
}

function boxCenter(box: Walkbox): Point {
  const points = box.pixel_coordinates;
  return {
    x: Math.round(points.reduce((total, point) => total + point.x, 0) / points.length),
    y: Math.round(points.reduce((total, point) => total + point.y, 0) / points.length),
  };
}

function nearestBox(point: Point, boxes: Walkbox[]): { box: Walkbox; projected: Point } | null {
  let nearest: { box: Walkbox; projected: Point } | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (const box of boxes) {
    const projected = projectToBox(point, box);
    const distance = (point.x - projected.x) ** 2 + (point.y - projected.y) ** 2;
    if (distance < bestDistance) {
      nearest = { box, projected };
      bestDistance = distance;
    }
  }
  return nearest;
}

export function scriptActorToRoomPixels(point: Point): Point {
  // The extracted walkboxes pair actor coordinates with pixels at x×8 and y×2.
  return { x: point.x * 8, y: point.y * 2 };
}

export function planWalk(state: GameState, room: RoomData, requested: Point): Point {
  const boxes = room.walkboxes;
  if (boxes.length === 0) {
    const target = { x: Math.round(requested.x), y: Math.round(requested.y) };
    state.actor.path = [target];
    state.actor.pose = 'walk';
    state.actor.facing = target.x < state.actor.x ? 'left' : 'right';
    return target;
  }

  const start = nearestBox({ x: state.actor.x, y: state.actor.y }, boxes)!;
  const destination = nearestBox(requested, boxes)!;
  const target = destination.projected;
  const route: Point[] = [];
  let currentIndex = start.box.index;
  let guard = boxes.length + 1;

  while (currentIndex !== destination.box.index && guard-- > 0) {
    const nextIndex = room.nextHop[currentIndex]?.[destination.box.index];
    if (!Number.isInteger(nextIndex) || nextIndex! < 0 || nextIndex! >= boxes.length || nextIndex === currentIndex) break;
    currentIndex = nextIndex!;
    if (currentIndex !== destination.box.index) route.push(boxCenter(boxes[currentIndex]!));
  }
  route.push(target);

  state.actor.path = route;
  state.actor.pose = route.length > 0 ? 'walk' : 'idle';
  state.actor.facing = target.x < state.actor.x ? 'left' : 'right';
  return target;
}

export function advanceActorOneStep(state: GameState, pixelsPerTick = 2): void {
  const next = state.actor.path[0];
  if (!next) {
    state.actor.pose = 'idle';
    return;
  }

  const dx = next.x - state.actor.x;
  const dy = next.y - state.actor.y;
  const distance = Math.hypot(dx, dy);
  if (distance <= pixelsPerTick) {
    state.actor.x = next.x;
    state.actor.y = next.y;
    state.actor.path.shift();
  } else {
    state.actor.x = Math.round(state.actor.x + (dx / distance) * pixelsPerTick);
    state.actor.y = Math.round(state.actor.y + (dy / distance) * pixelsPerTick);
  }
  if (dx !== 0) state.actor.facing = dx < 0 ? 'left' : 'right';
  state.actor.pose = state.actor.path.length > 0 ? 'walk' : 'idle';
}

export function isInsideWalkbox(room: RoomData, point: Point): boolean {
  return room.walkboxes.some((box) => pointInPolygon(point, box.pixel_coordinates));
}
