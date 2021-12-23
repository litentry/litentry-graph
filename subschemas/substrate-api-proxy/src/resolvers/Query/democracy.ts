import { ServerContext } from '../../types';
import { isAscii, isHex, isU8a, u8aToHex, u8aToString } from '@polkadot/util';
import { IExtrinsic, IMethod } from '@polkadot/types/types';

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

export const democracy = async (
  parent: { address?: string },
  args: { address?: string },
  context: ServerContext,
) => {
  const { api } = context;
  const [activeProposals] = await Promise.all([
    api.derive.democracy.proposals(),
  ]);

  const proposals = activeProposals.map((proposal) => {
    const imageProposal = proposal.image?.proposal;

    if (imageProposal) {
      return { hash: imageProposal?.hash, ...getCallParams(imageProposal) };
    }
  });

  return {
    proposals,
  };
};

function getCallParams(c: IExtrinsic | IMethod) {
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
        }

        if (a.type.toString() === 'Bytes') {
          value =
            isU8a(value) && isAscii(value)
              ? u8aToString(value)
              : isHex(value)
              ? value
              : u8aToHex(value as Uint8Array, 256);
        }
      }

      return {
        name: a.name,
        type: a.type.toString(),
        value: String(value),
        subCalls,
      };
    }),
  };
}
