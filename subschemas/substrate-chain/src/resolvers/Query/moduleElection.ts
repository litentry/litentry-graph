import type { Context } from '../../types';
import type { ModuleElection } from '../../generated/resolvers-types';
import { BN_ZERO, BN } from '@polkadot/util';
import { formatBalance } from '../../services/substrateChainService';

export default async function moduleElection(
  _: Record<string, never>,
  __: Record<string, never>,
  { api }: Context,
): Promise<ModuleElection> {
  const moduleElections = api.tx.phragmenElection
    ? 'phragmenElection'
    : api.tx.electionsPhragmen
    ? 'electionsPhragmen'
    : api.tx.elections
    ? 'elections'
    : null;

  const electionInfo = api.consts.elections || api.consts.phragmenElection || api.consts.electionsPhragmen;
  const candidacyBond = moduleElections ? api.consts[moduleElections].candidacyBond : BN_ZERO;

  return {
    module: moduleElections,
    hasElections: Boolean(moduleElections),
    votingBondBase: electionInfo.votingBondBase.toString(),
    formattedVotingBondBase: formatBalance(api, electionInfo.votingBondBase),
    votingBondFactor: electionInfo.votingBondFactor.toString(),
    formattedVotingBondFactor: formatBalance(api, electionInfo.votingBondFactor),
    candidacyBond: candidacyBond.toString(),
    formattedCandidacyBond: formatBalance(api, candidacyBond as BN),
  };
}
