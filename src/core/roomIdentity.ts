import aliases from '../content/logical-rooms.json';
export function resourceRoom(logical: number): number {
  return (aliases as Record<string, number>)[String(logical)] ?? logical;
}
