import type {Context} from '../../types';
import type {CrowdloanSummary, Crowdloan} from '../../generated/resolvers-types';
import type {ParaId} from '@polkadot/types/interfaces';
import {getFunds, extractActiveFunds} from '../../services/crowdloanService';
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

interface CrowdloanInfo extends Omit<Crowdloan, 'depositor'> {
  depositor: PartialDepositor;
}

export type PartialDepositor = {
  address: string;
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
  const currentLease = new BN(leasePeriod.currentLease);
  const activeFunds = extractActiveFunds(data.funds, leasePeriod);

  const funds = activeFunds.map(async (fund) => {
    const {info, isCapped, isEnded, isWinner, firstSlot, paraId} = fund;
    const {end, firstPeriod, lastPeriod, cap, raised, depositor} = info;
    const blocksLeft = end.gt(bestNumber) ? end.sub(bestNumber) : new BN(6000);
    const isOngoing = !(isCapped || isEnded || isWinner) && currentLease.lte(firstSlot);
    const status = fund.isWinner
      ? 'Winner'
      : blocksLeft
      ? fund.isCapped
        ? 'Capped'
        : isOngoing
        ? 'Active'
        : 'Past'
      : 'Ended';
    const ending = getBlockTime(api, blocksLeft);

    const contribution = await api.derive.crowdloan.contributions(paraId);

    return {
      key: fund.key,
      depositor: {address: depositor.toString()},
      status,
      ending: ending.timeStringParts,
      firstPeriod: firstPeriod.toString(),
      lastPeriod: lastPeriod.toString(),
      raised: raised.toString(),
      formattedRaised: formatBalance(api, raised),
      cap: cap.toString(),
      formattedCap: formatBalance(api, cap),
      contributorsCount: formatNumber(contribution.contributorsHex.length),
    };
  });

  return await Promise.all(funds);
}
