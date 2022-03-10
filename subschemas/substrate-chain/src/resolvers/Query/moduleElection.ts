import type {Context} from '../../types';

export default async function moduleElection(_: Record<string, never>, __: Record<string, never>, {api}: Context) {
  const moduleElections = api.tx.phragmenElection
    ? 'phragmenElection'
    : api.tx.electionsPhragmen
    ? 'electionsPhragmen'
    : api.tx.elections
    ? 'elections'
    : null;

  const electionInfo = api.consts.elections || api.consts.phragmenElection || api.consts.electionsPhragmen;
  const candidacyBond = moduleElections ? api.consts[moduleElections].candidacyBond : '0';

  return {
    module: moduleElections,
    hasElections: Boolean(moduleElections),
    votingBondBase: electionInfo.votingBondBase.toString(),
    votingBondFactor: electionInfo.votingBondFactor.toString(),
    candidacyBond: candidacyBond.toString(),
  };
}
