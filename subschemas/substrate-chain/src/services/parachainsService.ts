import type {
  BlockNumber,
  Event,
  ParaId,
  CandidateReceipt,
  AccountId,
  CoreAssignment,
  ParaValidatorIndex,
  CandidatePendingAvailability,
} from '@polkadot/types/interfaces';
import type {PolkadotRuntimeParachainsParasParaLifecycle} from '@polkadot/types/lookup';
import type {Option, StorageKey} from '@polkadot/types';
import type {LeasePeriod} from '../generated/resolvers-types';
import type {Context} from '../types';

import {BN_ZERO, formatNumber, BN, BN_ONE, BN_HUNDRED, bnToBn} from '@polkadot/util';
import {getBlockTime} from './substrateChainService';
import {IEvent} from '@polkadot/types/types';
import {notEmpty} from '../utils/notEmpty';

type ParaIdEntries = [StorageKey<[ParaId]>, Option<PolkadotRuntimeParachainsParasParaLifecycle>][];
interface EventMapInfo {
  blockHash?: string;
  blockNumber?: BN;
  relayParent: string;
}

type EventMap = Record<string, EventMapInfo>;

export interface LastEvents {
  lastBacked: EventMap;
  lastIncluded: EventMap;
  lastTimeout: EventMap;
}
export interface ValidatorsInfo {
  validators: AccountId[];
  assignments: CoreAssignment[];
  validatorGroups: ParaValidatorIndex[][];
  validatorIndices: ParaValidatorIndex[];
}

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
    remainderBlockTime: periodRemainder.toString(),
  };
}

export async function getUpcomingParaIds(api: Context['api']) {
  const paraIdEntries = (await api.query.paras?.paraLifecycles?.entries()) as ParaIdEntries | undefined;

  return extractUpcomingParaIds(paraIdEntries);
}

export function getBlocks(api: Context['api'], leases: number[], leasePeriod: LeasePeriod): BN | undefined {
  const length = api.consts.slots.leasePeriod as BlockNumber;
  const lastLease = leases ? leases[leases.length - 1] : null;
  const leaseValue = lastLease ? lastLease + 1 : null;

  if (!leasePeriod || !leaseValue) {
    return undefined;
  }

  return bnToBn(leaseValue).sub(BN_ONE).imul(length).iadd(bnToBn(leasePeriod.remainderBlockTime));
}

export function getLeasePeriodString(currentPeriod: BN, leases: number[]): string {
  return leases
    .reduce((all: [BN, BN][], _period): [BN, BN][] => {
      const bnp = currentPeriod.addn(_period);

      if (!all.length || all[all.length - 1]?.[1].add(BN_ONE).lt(bnp)) {
        all.push([bnp, bnp]);
      } else {
        const bn = all[all.length - 1];
        bn ? (bn[1] = bnp) : null;
      }

      return all;
    }, [])
    .map(([a, b]) => (a.eq(b) ? formatNumber(a) : `${formatNumber(a)} - ${formatNumber(b)}`))
    .join(', ');
}

export async function getLastEvents(api: Context['api']): Promise<LastEvents> {
  const lastBlock = await api.derive.chain.subscribeNewBlocks();
  const lastBacked: EventMap = {};
  const lastIncluded: EventMap = {};
  const lastTimeout: EventMap = {};
  const blockNumber = lastBlock.block.header.number.unwrap();
  const blockHash = lastBlock.block.header.hash.toHex();
  const paraEvents = api.events.paraInclusion || api.events.parasInclusion || api.events.inclusion;

  paraEvents &&
    lastBlock.events.forEach(({event, phase}) => {
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

export async function getParachainValidators(api: Context['api']): Promise<ValidatorsInfo> {
  const scheduler = api.query.parasScheduler || api.query.paraScheduler || api.query.scheduler;
  const shared = api.query.parasShared || api.query.paraShared || api.query.shared;

  const [validators, assignments, validatorGroups, validatorIndices] = await Promise.all([
    api.query.session.validators<AccountId[]>(),
    scheduler?.scheduled?.<CoreAssignment[]>(),
    scheduler?.validatorGroups?.() as unknown as ParaValidatorIndex[][],
    shared?.activeValidatorIndices?.<ParaValidatorIndex[]>(),
  ]);

  return {
    validators,
    assignments,
    validatorGroups,
    validatorIndices,
  };
}

export function getNonVoters(validators?: AccountId[], pendingAvail?: CandidatePendingAvailability) {
  let list: AccountId[] = [];

  if (validators && pendingAvail) {
    list = pendingAvail.availabilityVotes
      .toHuman()
      .slice(2)
      .replace(/_/g, '')
      .split('')
      .map((c, index) => (c === '0' ? validators[index] : null))
      .filter((v, index): v is AccountId => !!v && index < validators.length);
  }

  return list;
}

export function getValidatorInfo(id: string, parachainValidators?: ValidatorsInfo) {
  const assignment = parachainValidators?.assignments?.find(({paraId}) => paraId.eq(id));

  if (!assignment) {
    return undefined;
  }

  return {
    groupIndex: assignment.groupIdx,
    validators: parachainValidators?.validatorGroups[assignment.groupIdx.toNumber()]
      ?.map((indexActive) => [indexActive, parachainValidators?.validatorIndices?.[indexActive.toNumber()]])
      .filter(([, a]) => a)
      .map(([, indexValidator]) =>
        indexValidator ? parachainValidators.validators[indexValidator?.toNumber()] : undefined,
      )
      .filter(notEmpty),
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
