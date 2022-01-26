import { Context } from '../../types';
import { getCallParams } from '../../utils/call';
import { notEmpty } from '../../utils/notEmpty';
import type {DemocracySummary, Democracy} from '../../generated/resolvers-types'

export const democracySummary = async (
  _: { address?: string },
  __: { address?: string },
  context: Context,
): Promise<DemocracySummary> => {
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
    publicPropCount: publicPropCount.toNumber(),
    referendumTotal: referendumTotal.toNumber(),
    referenda: referendumIds.length,
    launchPeriod: String(api.consts.democracy.launchPeriod),
  };
};

export const democracy = async (
  _: { address?: string },
  __: { address?: string },
  context: Context,
): Promise<Democracy> => {
  const { api } = context;
  const [activeProposals] = await Promise.all([
    api.derive.democracy.proposals(),
  ]);

  const proposals = activeProposals
    .map((proposal) => {
      const imageProposal = proposal.image?.proposal;

      if (imageProposal) {
        return {
          proposer: { address: String(proposal.proposer) },
          hash: String(imageProposal.hash),
          ...getCallParams(imageProposal),
        };
      }
    })
    .filter(notEmpty);

  return {
    proposals,
  };
};
