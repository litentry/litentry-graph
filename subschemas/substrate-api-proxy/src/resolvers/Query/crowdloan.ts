import type { Context } from '../../types';
import type { CrowdloanSummary } from '../../generated/resolvers-types';
import type { ParaId } from '@polkadot/types/interfaces';
import { getFunds, extractActiveFunds } from '../../services/crowdloanService';
import { getLeasePeriod } from '../../services/parachainsService';
import { BN, BN_ZERO } from '@polkadot/util';

export async function crowdloanSummary(
  _: Record<string, never>,
  __: Record<string, never>,
  { api }: Context,
): Promise<CrowdloanSummary> {
  const [paraIdKeys, bestNumber] = await Promise.all([
    api.query.crowdloan?.funds?.keys<[ParaId]>(),
    api.derive.chain.bestNumber(),
  ]);

  const paraIds = paraIdKeys.map(({ args: [paraId] }) => paraId);
  const data = await getFunds(paraIds, bestNumber, api);
  const leasePeriod = await getLeasePeriod(api);

  const activeFunds = extractActiveFunds(data.funds, leasePeriod);
  const [activeRaised, activeCap] = activeFunds.reduce(
    ([par, pac], current) => {
      return [
        par.iadd(
          current.info.raised.gte(BN_ZERO) ? current.info.raised : BN_ZERO,
        ),
        pac.iadd(current.info.cap.gte(BN_ZERO) ? current.info.cap : BN_ZERO),
      ];
    },
    [new BN(0), new BN(0)],
  );

  const activeProgress = activeCap.isZero()
    ? 0
    : activeRaised.muln(10000).div(activeCap).toNumber() / 10000;
  const totalProgress = data.totalCap.isZero()
    ? 0
    : data.totalRaised.muln(10000).div(data.totalCap).toNumber() / 10000;

  return {
    activeCap: activeCap.toString(),
    activeRaised: activeRaised.toString(),
    activeProgress,
    totalCap: data.totalCap.toString(),
    totalRaised: data.totalRaised.toString(),
    totalProgress,
    totalFunds: data.funds.length,
  };
}
