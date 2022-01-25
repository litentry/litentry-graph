import { ServerContext } from '../../types';
import { getBlockTime } from '../../utils/blockTime';
import { BN, BN_ONE, formatNumber } from '@polkadot/util';
import { BlockNumber, LeasePeriodOf } from '@polkadot/types/interfaces';
import { u32 } from '@polkadot/types';
import type { Option } from '@polkadot/types';
import { notEmpty } from '../../utils/notEmpty';
import type { ITuple } from '@polkadot/types/types';
import type {Event} from '../../generated/resolvers-types'

export async function events(
  _: Record<string, never>,
  __: Record<string, never>,
  context: ServerContext,
): Promise<Event[]> {
  const { api } = context;
  const bestNumber = await api.derive.chain.bestNumber();
  const { blockTime } = getBlockTime(api);

  const getterContext = { api, bestNumber, blockTime };

  const constEvents = [
    getCouncilElection(getterContext),
    getDemocracyLaunch(getterContext),
    getParachainLease(getterContext),
    getSocietyChallenge(getterContext),
    getSocietyRotate(getterContext),
    getTreasurySpend(getterContext),
  ];

  const promiseEvents = (
    await Promise.all([
      getDemocracyDispatches(getterContext),
      getCouncilMotions(getterContext),
      getReferendums(getterContext),
      getAuctionInfo(getterContext),
      getSchedule(getterContext),
      getStackingInfo(getterContext),
    ])
  ).flat();

  return [...constEvents, ...promiseEvents]
    .filter(notEmpty)
    .sort(sortByDate)
    .map(dateToIsoString);
}

function dateToIsoString(event: EVENT) {
  return { ...event, date: event.date.toISOString() };
}

function sortByDate(a: EVENT, b: EVENT): number {
  return a.date.getTime() - b.date.getTime();
}

type EVENT = {
  id: string;
  blockNumber: string;
  date: Date;
  title: string;
};

type Context = {
  api: ServerContext['api'];
  bestNumber: BN;
  blockTime: number;
};

function getCouncilElection(context: Context): EVENT | undefined {
  const { api, bestNumber, blockTime } = context;
  const duration = (
    api.consts.elections ||
    api.consts.phragmenElection ||
    api.consts.electionsPhragmen
  )?.termDuration;

  if (duration === undefined) {
    return;
  }

  const blocks = duration.sub(bestNumber.mod(duration));

  return {
    id: 'councilElection',
    blockNumber: bestNumber.add(blocks).toString(),
    date: newDate(blocks, blockTime),
    title: 'Election of new council candidates',
  };
}

function getDemocracyLaunch(context: Context): EVENT | undefined {
  const { api, bestNumber, blockTime } = context;
  const duration = api.consts.democracy?.launchPeriod;

  if (duration === undefined) {
    return;
  }

  const blocks = duration.sub(bestNumber.mod(duration));

  return {
    id: 'democracyLaunch',
    blockNumber: bestNumber.add(blocks).toString(),
    date: newDate(blocks, blockTime),
    title: 'Start of the next referendum voting period',
  };
}

function getParachainLease(context: Context): EVENT | undefined {
  const { api, bestNumber, blockTime } = context;
  const duration = api.consts.parachain?.leasePeriod as BlockNumber | undefined;

  if (duration === undefined) {
    return;
  }

  const blocks = duration.sub(bestNumber.mod(duration));

  const id = formatNumber(bestNumber.div(duration).iadd(BN_ONE));

  return {
    id: 'parachainLease',
    blockNumber: bestNumber.add(blocks).toString(),
    date: newDate(blocks, blockTime),
    title: `Start of the next parachain lease period ${id}`,
  };
}

function getSocietyChallenge(context: Context): EVENT | undefined {
  const { api, bestNumber, blockTime } = context;
  const duration = api.consts.society?.challengePeriod;

  if (duration === undefined) {
    return;
  }

  const blocks = duration.sub(bestNumber.mod(duration));

  return {
    id: 'societyChallenge',
    blockNumber: bestNumber.add(blocks).toString(),
    date: newDate(blocks, blockTime),
    title: 'Start of next membership challenge period',
  };
}

function getSocietyRotate(context: Context): EVENT | undefined {
  const { api, bestNumber, blockTime } = context;
  const duration = api.consts.society?.rotationPeriod;

  if (duration === undefined) {
    return;
  }

  const blocks = duration.sub(bestNumber.mod(duration));

  return {
    id: 'societyRotate',
    blockNumber: bestNumber.add(blocks).toString(),
    date: newDate(blocks, blockTime),
    title: 'Acceptance of new members and bids',
  };
}

function getTreasurySpend(context: Context): EVENT | undefined {
  const { api, bestNumber, blockTime } = context;
  const duration = api.consts.treasury?.spendPeriod;

  if (duration === undefined) {
    return;
  }

  const blocks = duration.sub(bestNumber.mod(duration));

  return {
    id: 'treasurySpend',
    blockNumber: bestNumber.add(blocks).toString(),
    date: newDate(blocks, blockTime),
    title: 'Start of the next treasury spend period',
  };
}

async function getDemocracyDispatches(context: Context): Promise<EVENT[]> {
  const { api, bestNumber, blockTime } = context;
  const dispatches = await api.derive.democracy?.dispatchQueue();

  if (dispatches === undefined) {
    return [];
  }

  return dispatches.map(({ at, index }) => {
    const blocks = at.sub(bestNumber);

    return {
      id: `democracyDispatch_${index}`,
      blockNumber: at.toString(),
      date: newDate(blocks, blockTime),
      title: `Enactment of the result of referendum ${index}`,
    };
  });
}

async function getCouncilMotions(context: Context): Promise<EVENT[]> {
  const { api, bestNumber, blockTime } = context;
  const motions = await api.derive.council.proposals();

  if (motions === undefined) {
    return [];
  }

  return motions
    .map(({ hash, votes }) => {
      if (!votes) {
        return undefined;
      }

      const hashStr = hash.toHex();
      const blocks = votes.end.sub(bestNumber);

      const id = `${hashStr.substr(0, 6)}…${hashStr.substr(-4)}`;

      return {
        id: `councilMotion_${id}`,
        blockNumber: votes.end.toString(),
        date: newDate(blocks, blockTime),
        title: `Voting ends on council motion ${id}`,
      };
    })
    .filter(notEmpty);
}

async function getReferendums(context: Context): Promise<EVENT[]> {
  const { api, bestNumber, blockTime } = context;
  const referendums = await api.derive.democracy?.referendums();

  if (referendums === undefined) {
    return [];
  }

  return referendums.flatMap(({ index, status }) => {
    const enactBlocks = status.end.add(status.delay).isub(bestNumber);
    const voteBlocks = status.end.sub(bestNumber).isub(BN_ONE);

    const id = formatNumber(index);

    return [
      {
        id: `referendumVote_${id}`,
        blockNumber: bestNumber.add(voteBlocks).toString(),
        date: newDate(voteBlocks, blockTime),
        title: `Voting ends for referendum ${id}`,
      },
      {
        id: `referendumDispatch_${id}`,
        blockNumber: bestNumber.add(enactBlocks).toString(),
        date: newDate(enactBlocks, blockTime),
        title: `Potential dispatch of referendum ${id} (if passed)`,
      },
    ];
  });
}

function isU32(leasePeriodsPerSlot: unknown): leasePeriodsPerSlot is u32 {
  return !!leasePeriodsPerSlot;
}

function getLeaseRanges(api: ServerContext['api']) {
  if (isU32(api.consts.auctions?.leasePeriodsPerSlot)) {
    const ranges: [number, number][] = [];

    for (let i = 0; api.consts.auctions.leasePeriodsPerSlot.gtn(i); i++) {
      for (let j = i; api.consts.auctions.leasePeriodsPerSlot.gtn(j); j++) {
        ranges.push([i, j]);
      }
    }

    return ranges;
  }
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
  return RANGES_DEFAULT;
}

async function getAuctionInfo(context: Context): Promise<EVENT | undefined> {
  const { api, bestNumber, blockTime } = context;

  const leaseRanges = getLeaseRanges(api);
  const rangeMax = new BN(leaseRanges[leaseRanges.length - 1][1]);

  const auctionInfo = (await api.query.auctions.auctionInfo()) as Option<
    ITuple<[LeasePeriodOf, BlockNumber]>
  >;

  if (auctionInfo === undefined) {
    return;
  }

  const [leasePeriod, endBlock] = auctionInfo.unwrap();
  const blocks = endBlock.sub(bestNumber);

  const id = `${leasePeriod.toString()} - ${leasePeriod
    .add(rangeMax)
    .toString()}`;

  return {
    id: `parachainAuction_${id}`,
    blockNumber: endBlock.toString(),
    date: newDate(blocks, blockTime),
    title: `End of the current parachain auction ${id}`,
  };
}

async function getSchedule(context: Context): Promise<EVENT[] | undefined> {
  const { api, bestNumber, blockTime } = context;
  const scheduled = await api.query.scheduler?.agenda?.entries();

  if (scheduled === undefined) {
    return;
  }

  return scheduled
    .filter(([, vecSchedOpt]) =>
      vecSchedOpt.some((schedOpt) => schedOpt.isSome),
    )
    .reduce<EVENT[]>((items, [key, vecSchedOpt]) => {
      const blockNumber = key.args[0];

      return vecSchedOpt
        .filter((schedOpt) => schedOpt.isSome)
        .map((schedOpt) => schedOpt.unwrap())
        .reduce((items, { maybeId }) => {
          const idOrNull = maybeId.unwrapOr(null);
          const blocks = blockNumber.sub(bestNumber);
          const id = idOrNull
            ? idOrNull.isAscii
              ? idOrNull.toUtf8()
              : idOrNull.toHex()
            : null;

          items.push({
            id: `scheduler_${id}`,
            blockNumber: blockNumber.toString(),
            date: newDate(blocks, blockTime),
            title: id
              ? `Execute named scheduled task ${id}`
              : 'Execute anonymous scheduled task',
          });

          return items;
        }, items);
    }, []);
}

async function getStackingInfo(context: Context): Promise<EVENT[]> {
  const { api, bestNumber, blockTime } = context;
  const slashDeferDuration = api.consts.staking?.slashDeferDuration;
  const [sessionInfo, slashes] = await Promise.all([
    api.derive.session.progress(),
    api.query.staking?.unappliedSlashes.entries() ?? Promise.resolve([]),
  ]);
  const blocksEra = sessionInfo.eraLength.sub(sessionInfo.eraProgress);
  const blocksSes = sessionInfo.sessionLength.sub(sessionInfo.sessionProgress);
  const slashDuration = slashDeferDuration?.mul(sessionInfo.eraLength);
  const slashEras = slashDuration
    ? slashes
        .filter(([, values]) => values.length)
        .map(([key]) => {
          const eraIndex = key.args[0];
          const blockProgress = sessionInfo.activeEra
            .sub(eraIndex)
            .isub(BN_ONE)
            .imul(sessionInfo.eraLength)
            .iadd(sessionInfo.eraProgress);
          const blocks = slashDuration.sub(blockProgress);
          const id = formatNumber(eraIndex);

          return {
            id: `stakingSlash_${id}`,
            date: newDate(blocks, blockTime),
            blockNumber: bestNumber.add(blocks).toString(),
            title: `Application of slashes from era ${id}`,
          };
        })
    : [];

  return [
    {
      id: 'stakingEpoch',
      date: newDate(blocksSes, blockTime),
      blockNumber: bestNumber.add(blocksSes).toString(),
      title: `Start of a new staking session ${formatNumber(
        sessionInfo.currentIndex.add(BN_ONE),
      )}`,
    },
    {
      id: 'stakingEra',
      blockNumber: bestNumber.add(blocksEra).toString(),
      date: newDate(blocksEra, blockTime),
      title: `Start of a new staking era ${formatNumber(
        sessionInfo.activeEra.add(BN_ONE),
      )}`,
    },
    ...slashEras,
  ];
}

function newDate(blocks: BN, blockTime: number) {
  return new Date(Date.now() + blocks.muln(blockTime).toNumber());
}
