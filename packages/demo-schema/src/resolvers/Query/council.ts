import type { ServerContext } from '../../types';

export async function council(
  _: undefined,
  __: undefined,
  { api }: ServerContext
) {
  const [electionsInfo, votes] = await Promise.all([
    api.derive.elections.info(),
    api.derive.council.votes(),
  ]);

  const votesByCandidates = votes.reduce<Record<string, string[]>>(
    (result, [voter, { votes }]) => {
      votes.forEach((candidate) => {
        const address = candidate.toString();

        if (!result[address]) {
          result[address] = [];
        }

        result[address]?.push(voter.toString());
      });

      return result;
    },
    {}
  );

  const members = electionsInfo.members.map(([accountId, balance]) => ({
    address: accountId,
    backing: balance,
    voters: votesByCandidates[String(accountId)] || [],
  }));

  const runnersUp = electionsInfo.runnersUp.map(([accountId, balance]) => ({
    accountId,
    backing: balance,
    voters: votesByCandidates[String(accountId)] || [],
  }));

  const candidates = electionsInfo.candidates.map((accountId) => ({address: String(accountId)}));

  return {
    members,
    runnersUp,
    candidates,
  };
}
