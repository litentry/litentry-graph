import { ServerContext } from '../../types';

export const democracySummary = async (
  parent: { address?: string },
  args: { address?: string },
  context: ServerContext,
) => {
  const { api } = context;
  const [referendumIds, activeProposals, publicPropCount, referendumTotal] =
    await Promise.all([
      api.derive.democracy.referendumIds(),
      api.derive.democracy.proposals(),
      api.query.democracy.publicPropCount(),
      api.query.democracy.referendumCount(),
    ]);

  return {
    activeProposalsCount: activeProposals.length,
    publicPropCount,
    referendumTotal,
    referenda: referendumIds.length,
    launchPeriod: api.consts.democracy.launchPeriod,
  };
};
