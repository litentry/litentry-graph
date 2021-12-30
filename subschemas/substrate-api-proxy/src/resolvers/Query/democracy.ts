import { ServerContext } from '../../types';
import { isAscii, isHex, isU8a, u8aToHex, u8aToString } from '@polkadot/util';
import { IExtrinsic, IMethod } from '@polkadot/types/types';
import { notEmpty } from '../../utils/notEmpty';

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
    publicPropCount: publicPropCount.toNumber(),
    referendumTotal: referendumTotal.toNumber(),
    referenda: referendumIds.length,
    launchPeriod: String(api.consts.democracy.launchPeriod),
  };
};

export const democracy = async (
  parent: { address?: string },
  args: { address?: string },
  context: ServerContext,
) => {
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

export function getCallParams(c: IExtrinsic | IMethod) {
  const { method, section } = c?.registry.findMetaCall(c.callIndex) ?? {};

  return {
    method,
    section,
    args: c.meta.args.map((a, index) => {
      let subCalls: any[] = [];

      let value: unknown = c.args?.[index];

      if (value) {
        if (Array.isArray(value) && a.type.toString() === 'Vec<Call>') {
          subCalls = value.map(getCallParams);
          value = 'SubCalls';
        } else if (a.type.toString() === 'Bytes') {
          value =
            isU8a(value) && isAscii(value)
              ? u8aToString(value)
              : isHex(value)
              ? value
              : u8aToHex(value as Uint8Array, 256);
        }
      }

      return {
        name: String(a.name),
        type: String(a.type),
        value: String(value),
        subCalls,
      };
    }),
  };
}
