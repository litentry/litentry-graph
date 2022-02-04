import type {Context} from '../../types';
import type {CrowdloanSummary, Crowdloan} from '../../generated/resolvers-types';
import type {ParaId} from '@polkadot/types/interfaces';
import {getFunds, extractActiveFunds, extractEndedFunds} from '../../services/crowdloanService';
import {getLeasePeriod} from '../../services/parachainsService';
import {BN, BN_ZERO} from '@polkadot/util';
import {formatBalance} from '../../services/substrateChainService';
import {getBlockTime} from '../../services/relayChainService';
import {formatNumber} from '@polkadot/util';

export async function crowdloanSummary(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<CrowdloanSummary> {
  const [paraIdKeys, bestNumber] = await Promise.all([
    api.query.crowdloan?.funds?.keys<[ParaId]>(),
    api.derive.chain.bestNumber(),
  ]);

  const paraIds = paraIdKeys.map(({args: [paraId]}) => paraId);
  const data = await getFunds(paraIds, bestNumber, api);
  const leasePeriod = await getLeasePeriod(api);

  const activeFunds = extractActiveFunds(data.funds, leasePeriod);
  const [activeRaised, activeCap] = activeFunds.reduce(
    ([par, pac], current) => {
      return [
        par.iadd(current.info.raised.gte(BN_ZERO) ? current.info.raised : BN_ZERO),
        pac.iadd(current.info.cap.gte(BN_ZERO) ? current.info.cap : BN_ZERO),
      ];
    },
    [new BN(0), new BN(0)],
  );

  const activeProgress = activeCap.isZero() ? 0 : activeRaised.muln(10000).div(activeCap).toNumber() / 10000;
  const totalProgress = data.totalCap.isZero() ? 0 : data.totalRaised.muln(10000).div(data.totalCap).toNumber() / 10000;

  return {
    activeCap: activeCap.toString(),
    formattedActiveCap: formatBalance(api, activeCap),
    activeRaised: activeRaised.toString(),
    formattedActiveRaised: formatBalance(api, activeRaised),
    activeProgress,
    totalCap: data.totalCap.toString(),
    formattedTotalCap: formatBalance(api, data.totalRaised),
    totalRaised: data.totalRaised.toString(),
    formattedTotalRaised: formatBalance(api, data.totalRaised),
    totalProgress,
    totalFunds: data.funds.length,
  };
}

interface CrowdloanInfo extends Omit<Crowdloan, 'depositor' | 'contribution'> {
  depositor: PartialDepositor;
  contribution: PartialContribution;
}

export type PartialDepositor = {
  address: string;
};

export type PartialContribution = {
  paraId: string;
};

export async function activeCrowdloans(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<CrowdloanInfo[]> {
  const [paraIdKeys, bestNumber] = await Promise.all([
    api.query.crowdloan?.funds?.keys<[ParaId]>(),
    api.derive.chain.bestNumber(),
  ]);

  const paraIds = paraIdKeys.map(({args: [paraId]}) => paraId);
  const data = await getFunds(paraIds, bestNumber, api);
  const leasePeriod = await getLeasePeriod(api);
  const activeFunds = extractActiveFunds(data.funds, leasePeriod);

  return activeFunds.map((fund) => {
    const {info, isWinner, paraId} = fund;
    const {end, firstPeriod, lastPeriod, cap, raised, depositor} = info;
    const blocksLeft = end.gt(bestNumber) ? end.sub(bestNumber) : BN_ZERO;
    const status = isWinner ? 'Winner' : 'Active';
    const ending = getBlockTime(api, blocksLeft);

    return {
      paraId: paraId.toString(),
      depositor: {address: depositor.toString()},
      status,
      ending: ending.timeStringParts,
      firstPeriod: firstPeriod.toString(),
      lastPeriod: lastPeriod.toString(),
      raised: raised.toString(),
      formattedRaised: formatBalance(api, raised),
      cap: cap.toString(),
      formattedCap: formatBalance(api, cap),
      contribution: {paraId: paraId.toString()},
    };
  });
}

export async function endedCrowdloans(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<CrowdloanInfo[]> {
  const [paraIdKeys, bestNumber] = await Promise.all([
    api.query.crowdloan?.funds?.keys<[ParaId]>(),
    api.derive.chain.bestNumber(),
  ]);

  const paraIds = paraIdKeys.map(({args: [paraId]}) => paraId);
  const data = await getFunds(paraIds, bestNumber, api);
  const leasePeriod = await getLeasePeriod(api);
  const endedFunds = extractEndedFunds(data.funds, leasePeriod);

  return endedFunds.map((fund) => {
    const {info, isWinner, paraId} = fund;
    const {end, firstPeriod, lastPeriod, cap, raised, depositor} = info;
    const blocksLeft = end.gt(bestNumber) ? end.sub(bestNumber) : BN_ZERO;
    const status = isWinner ? 'Winner' : 'Ended';
    const ending = getBlockTime(api, blocksLeft);

    return {
      paraId: paraId.toString(),
      depositor: {address: depositor.toString()},
      status,
      ending: ending.timeStringParts,
      firstPeriod: firstPeriod.toString(),
      lastPeriod: lastPeriod.toString(),
      raised: raised.toString(),
      formattedRaised: formatBalance(api, raised),
      cap: cap.toString(),
      formattedCap: formatBalance(api, cap),
      contribution: {paraId: paraId.toString()},
    };
  });
}

export async function crowdloan(
  _: Record<string, never>,
  {paraId: key}: {paraId: string},
  {api}: Context,
): Promise<CrowdloanInfo | null> {
  const paraIdKeys = await api.query.crowdloan?.funds?.keys<[ParaId]>();
  const paraIdKey = paraIdKeys.find(({args: [paraId]}) => paraId.toString() === key);

  if (paraIdKey) {
    const {
      args: [paraId],
    } = paraIdKey;
    const bestNumber = await api.derive.chain.bestNumber();
    const data = await getFunds([paraId], bestNumber, api);

    return data.funds.reduce((_, fund) => {
      const {info, isWinner} = fund;
      const {end, firstPeriod, lastPeriod, cap, raised, depositor} = info;
      const blocksLeft = end.gt(bestNumber) ? end.sub(bestNumber) : BN_ZERO;
      const status = isWinner ? 'Winner' : 'Ended';
      const ending = getBlockTime(api, blocksLeft);

      return {
        paraId: paraId.toString(),
        depositor: {address: depositor.toString()},
        status,
        ending: ending.timeStringParts,
        firstPeriod: firstPeriod.toString(),
        lastPeriod: lastPeriod.toString(),
        raised: raised.toString(),
        formattedRaised: formatBalance(api, raised),
        cap: cap.toString(),
        formattedCap: formatBalance(api, cap),
        contribution: {paraId: paraId.toString()},
      };
    }, {} as CrowdloanInfo);
  }

  return null;
}
