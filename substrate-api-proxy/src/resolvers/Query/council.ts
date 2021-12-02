import type { ServerContext } from '../../types';
import { BN, bnToBn } from '@polkadot/util';
import type { BlockNumber } from '@polkadot/types/interfaces';

export async function council(
  _: undefined,
  __: undefined,
  { api }: ServerContext,
) {
  const [electionsInfo, votes, prime, bestNumber] = await Promise.all([
    api.derive.elections.info(),
    api.derive.council.votes(),
    api.derive.council.prime(),
    api.derive.chain.bestNumber(),
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
    {},
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

  const candidates = electionsInfo.candidates.map((accountId) => ({
    address: String(accountId),
  }));

  const primeMember = prime
    ? {
        address: String(prime),
        backing: electionsInfo.members.find(([accountId]) =>
          accountId.eq(prime),
        )?.[1],
      }
    : null;

  const { termLeft, percentage } = getTermLeft(
    bnToBn(electionsInfo.termDuration || 0),
    bestNumber,
  );
  const termProgress = {
    termDuration: electionsInfo.termDuration,
    termLeft,
    percentage,
  };

  return {
    members,
    runnersUp,
    candidates,
    primeMember,
    desiredSeats: Number(electionsInfo.desiredSeats),
    desiredRunnersUp: Number(electionsInfo.desiredRunnersUp),
    termProgress,
  };
}

function getTermLeft(termDuration: BN, bestNumber: BlockNumber) {
  const total = termDuration;
  const value = bestNumber.mod(termDuration);
  const angle = total.gtn(0)
    ? bnToBn(value || 0)
        .muln(36000)
        .div(total)
        .toNumber() / 100
    : 0;
  const percentage = Math.floor((angle * 100) / 360);

  return {
    termLeft: total.sub(value),
    percentage,
  };
}
