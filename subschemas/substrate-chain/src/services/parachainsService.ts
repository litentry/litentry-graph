import type {BlockNumber, Event, ParaId, CandidateReceipt} from '@polkadot/types/interfaces';
import type {PolkadotRuntimeParachainsParasParaLifecycle} from '@polkadot/types/lookup';
import type {Option, StorageKey} from '@polkadot/types';
import type {LeasePeriod} from '../generated/resolvers-types';
import type {Context} from '../types';

import {BN_ZERO, formatNumber, BN, BN_ONE, BN_HUNDRED} from '@polkadot/util';
import {getBlockTime} from './substrateChainService';
import { IEvent } from '@polkadot/types/types';

type ParaIdEntries = [StorageKey<[ParaId]>, Option<PolkadotRuntimeParachainsParasParaLifecycle>][];
interface EventMapInfo {
  blockHash?: string;
  blockNumber?: BN;
  relayParent: string;
}

type EventMap = Record<string, EventMapInfo>;

export interface Result {
  lastBacked: EventMap;
  lastIncluded: EventMap;
  lastTimeout: EventMap;
}

const EMPTY_EVENTS: Result = { lastBacked: {}, lastIncluded: {}, lastTimeout: {} };

export async function getLeasePeriod(api: Context['api']): Promise<LeasePeriod> {
  const bestNumber = await api.derive.chain.bestNumber();
  const leasePeriodLength = api.consts.slots.leasePeriod as BlockNumber;
  const {formattedTime: totalPeriod} = getBlockTime(api, leasePeriodLength);
  const startNumber = bestNumber.sub((api.consts.slots.leaseOffset as BlockNumber) || BN_ZERO);
  const currentPeriod = startNumber.div(leasePeriodLength);
  const progress = startNumber.mod(leasePeriodLength);
  const progressPercent = progress
    .mul(BN_HUNDRED)
    .div(leasePeriodLength ?? BN_ONE)
    .toNumber();
  const periodRemainder = leasePeriodLength.sub(progress);
  const {formattedTime: remainder} = getBlockTime(api, periodRemainder);

  return {
    currentLease: formatNumber(currentPeriod),
    totalPeriod,
    progressPercent,
    remainder,
  };
}

export async function getUpcomingParaIds(api: Context['api']) {
  const paraIdEntries = (await api.query.paras?.paraLifecycles?.entries()) as ParaIdEntries | undefined;

  return extractUpcomingParaIds(paraIdEntries);
}

export async function getLastEvents(api: Context['api']): Promise<Result> {
  const lastBlock = await api.derive.chain.subscribeNewBlocks();
  const lastBacked: EventMap = {};
  const lastIncluded: EventMap = {};
  const lastTimeout: EventMap = {};
  const blockNumber = lastBlock.block.header.number.unwrap();
  const blockHash = lastBlock.block.header.hash.toHex();
  const paraEvents = (api.events.paraInclusion || api.events.parasInclusion || api.events.inclusion);

  paraEvents && lastBlock.events.forEach(({ event, phase }) => {
    if (phase.isApplyExtrinsic) {
      if (paraEvents.CandidateBacked.is(event)) {
        includeEntry(lastBacked, event, blockHash, blockNumber);
      } else if (paraEvents.CandidateIncluded.is(event)) {
        includeEntry(lastIncluded, event, blockHash, blockNumber);
      } else if (paraEvents.CandidateTimedOut.is(event)) {
        includeEntry(lastTimeout, event, blockHash, blockNumber);
      }
    }
  });

  return {
      lastBacked,
      lastIncluded,
      lastTimeout,
    };
}

function extractUpcomingParaIds(entries: ParaIdEntries = []): ParaId[] {
  return entries
    .map(
      ([
        {
          args: [paraId],
        },
        optValue,
      ]): ParaId | null => {
        const value = optValue.unwrapOr(null);

        return value &&
          (value.isParathread || value.isUpgradingParathread || value.isOffboardingParathread || value.isOnboarding)
          ? paraId
          : null;
      },
    )
    .filter((paraId): paraId is ParaId => !!paraId)
    .sort((a, b) => a.cmp(b));
}

function includeEntry(map: EventMap, event: Event, blockHash?: string, blockNumber?: BN): void {
  const {descriptor} = (event as unknown as IEvent<[CandidateReceipt]>).data[0];

  if (descriptor) {
    map[descriptor.paraId.toString()] = {
      blockHash,
      blockNumber,
      relayParent: descriptor.relayParent.toHex(),
    };
  }
}
