import { ServerContext } from '../../types';
import { getBlockTime } from '../../utils/blockTime';
import { BN, BN_ONE, formatNumber } from '@polkadot/util';
import { BlockNumber, LeasePeriodOf } from '@polkadot/types/interfaces';
import { u32 } from '@polkadot/types';
import type { Option } from '@polkadot/types';
import { notEmpty } from '../../utils/notEmpty';
import type { ITuple } from '@polkadot/types/types';

export async function eventsResolver(
  _parent: undefined,
  _args: undefined,
  context: ServerContext
) {
  const { api } = context;
  const bestNumber = await api.derive.chain.bestNumber();
  const { blockTime } = getBlockTime(api);

  const getterContext = { api, bestNumber, blockTime };

  const consts = [
    getCouncilElection(getterContext),
    getDemocracyLaunch(getterContext),
    getParachainLease(getterContext),
    getSocietyChallenge(getterContext),
    getSocietyRotate(getterContext),
    getTreasurySpend(getterContext),
  ];

  const promises = await Promise.all([
    getDemocracyDispatches(getterContext),
    getCouncilMotions(getterContext),
    getReferendums(getterContext),
    getAuctionInfo(getterContext),
  ]);

  return [...consts, ...promises.flat()].filter(notEmpty);
}

type EVENT = {
  id: string;
  blockNumber: BN;
  date: string;
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
    blockNumber: bestNumber.add(blocks),
    date: newDate(blocks, blockTime).toISOString(),
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
    blockNumber: bestNumber.add(blocks),
    date: newDate(blocks, blockTime).toISOString(),
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
    blockNumber: bestNumber.add(blocks),
    date: newDate(blocks, blockTime).toISOString(),
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
    blockNumber: bestNumber.add(blocks),
    date: newDate(blocks, blockTime).toISOString(),
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
    blockNumber: bestNumber.add(blocks),
    date: newDate(blocks, blockTime).toISOString(),
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
    blockNumber: bestNumber.add(blocks),
    date: newDate(blocks, blockTime).toISOString(),
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
      blockNumber: at,
      date: newDate(blocks, blockTime).toISOString(),
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
        blockNumber: votes.end,
        date: newDate(blocks, blockTime).toISOString(),
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

    const id = index;

    return [
      {
        id: `referendumVote_${id}`,
        blockNumber: bestNumber.add(voteBlocks),
        date: newDate(voteBlocks, blockTime).toISOString(),
        title: `Voting ends for referendum ${id}`,
      },
      {
        id: `referendumDispatch_${id}`,
        blockNumber: bestNumber.add(enactBlocks),
        date: newDate(enactBlocks, blockTime).toISOString(),
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
    blockNumber: endBlock,
    date: newDate(blocks, blockTime).toISOString(),
    title: `End of the current parachain auction ${id}`,
  };
}

function newDate(blocks: BN, blockTime: number) {
  return new Date(Date.now() + blocks.muln(blockTime).toNumber());
}
