import { ServerContext } from '../../types';
import { getBlockTime } from '../../utils/blockTime';
import { BN, BN_ONE, formatNumber } from '@polkadot/util';
import { BlockNumber } from '@polkadot/types/interfaces';
import { notEmpty } from '../../utils/notEmpty';

export async function eventsResolver(
  _parent: undefined,
  _args: undefined,
  context: ServerContext
) {
  const { api } = context;
  const bestNumber = await api.derive.chain.bestNumber();
  const { blockTime } = getBlockTime(api);

  const getterContext = { api, bestNumber, blockTime };

  return [
    getCouncilElection(getterContext),
    getDemocracyLaunch(getterContext),
    getParachainLease(getterContext),
    getSocietyChallenge(getterContext),
    getSocietyRotate(getterContext),
    getTreasurySpend(getterContext),
    ...(await getDemocracyDispatches(getterContext)),
    ...(await getCouncilMotions(getterContext)),
  ].filter(notEmpty);
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

function newDate(blocks: BN, blockTime: number) {
  return new Date(Date.now() + blocks.muln(blockTime).toNumber());
}
