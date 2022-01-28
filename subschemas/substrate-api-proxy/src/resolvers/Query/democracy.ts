import { Context } from '../../types';
import { getCallParams, formatCallMeta } from '../../utils/call';
import { notEmpty } from '../../utils/notEmpty';
import type {DemocracySummary, Proposal, Referendum} from '../../generated/resolvers-types'
import { getBlockTime } from '../../utils/blockTime';
import {BN_ONE} from '@polkadot/util';

export const democracySummary = async (
  _: Record<string, never>,
  __: Record<string, never>,
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
    activeProposals: activeProposals.length,
    proposals: publicPropCount.toString(),
    referendums: referendumTotal.toString(),
    activeReferendums: referendumIds.length,
    launchPeriod: String(api.consts.democracy.launchPeriod),
  };
};

export const democracyProposals = async (
  _: Record<string, never>,
  __: Record<string, never>,
  context: Context,
): Promise<Proposal[]> => {
  const {api} = context;
  const activeProposals = await api.derive.democracy.proposals();

  return activeProposals
    .map((proposal) => {
      const imageProposal = proposal.image?.proposal;
      if (imageProposal) {
        const meta = formatCallMeta(imageProposal.registry.findMetaCall(imageProposal.callIndex).meta)
        return {
          meta,
          index: proposal.index.toString(),
          proposer: { address: String(proposal.proposer) },
          hash: String(imageProposal.hash),
          ...getCallParams(imageProposal),
        };
      }
    })
    .filter(notEmpty);
}

export const democracyReferendums = async (
  _: Record<string, never>,
  __: Record<string, never>,
  context: Context,
): Promise<Referendum[]> => {
  const {api} = context;
  const [activeReferendums, bestNumber] = await Promise.all([
    api.derive.democracy.referendums(),
    api.derive.chain.bestNumber(),
  ])

  return activeReferendums
    .map((referendum) => {
      const imageProposal = referendum.image?.proposal
      if(imageProposal) {
        const remainBlock = bestNumber ? referendum.status.end.sub(bestNumber).isub(BN_ONE) : undefined;
        const {timeStringParts} = getBlockTime(api, remainBlock);
        const meta = formatCallMeta(imageProposal.registry.findMetaCall(imageProposal.callIndex).meta)
        return {
          meta,
          endPeriod: timeStringParts,
          index: referendum.index.toString(),
          hash: String(imageProposal.hash),
          ...getCallParams(imageProposal),
        }
      }
    })
    .filter(notEmpty);
}
