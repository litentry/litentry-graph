import type { u32 } from '@polkadot/types';

const RANGES_DEFAULT: [number, number][] = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 1],
  [1, 2],
  [1, 3],
  [2, 2],
  [2, 3],
  [3, 3],
];

function isU32(leasePeriodsPerSlot: unknown): leasePeriodsPerSlot is u32 {
  return !!leasePeriodsPerSlot;
}

export function getLeaseRanges(leasePeriodsPerSlot: any): [number, number][] {
  if (isU32(leasePeriodsPerSlot)) {
    const ranges: [number, number][] = [];

    for (let i = 0; leasePeriodsPerSlot.gtn(i) ?? 0; i++) {
      for (let j = i; leasePeriodsPerSlot.gtn(j) ?? 0; j++) {
        ranges.push([i, j]);
      }
    }

    return ranges;
  }

  return RANGES_DEFAULT;
}
