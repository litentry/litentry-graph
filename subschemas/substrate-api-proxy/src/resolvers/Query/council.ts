import type {Context} from '../../types';
import {BN, bnToBn} from '@polkadot/util';
import type {BlockNumber} from '@polkadot/types/interfaces';
import type {Council, TermProgress} from '../../generated/resolvers-types';
import {getBlockTime} from '../../services/substrateChainService';

type PartialCouncil = Omit<Council, 'members' | 'runnersUp' | 'candidates' | 'primeMember'>;

interface CouncilInfo extends PartialCouncil {
  members: PartialCouncilMember[];
  runnersUp: PartialCouncilMember[];
  candidates: PartialCouncilCandidate[];
  primeMember: PartialCouncilMember | null;
}

export async function council(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<CouncilInfo> {
  const [electionsInfo, votes, prime, bestNumber] = await Promise.all([
    api.derive.elections.info(),
    api.derive.council.votes(),
    api.derive.council.prime(),
    api.derive.chain.bestNumber(),
  ]);

  const votesByCandidates = votes.reduce<Record<string, string[]>>((result, [voter, {votes}]) => {
    votes.forEach((candidate) => {
      const address = candidate.toString();

      if (!result[address]) {
        result[address] = [];
      }

      result[address]?.push(voter.toString());
    });

    return result;
  }, {});

  const members = electionsInfo.members.map<PartialCouncilMember>(([accountId, balance]) => ({
    address: String(accountId),
    backing: balance.toString(),
    voters: votesByCandidates[String(accountId)] || [],
  }));

  const runnersUp = electionsInfo.runnersUp.map<PartialCouncilMember>(([accountId, balance]) => ({
    address: String(accountId),
    backing: balance.toString(),
    voters: votesByCandidates[String(accountId)] || [],
  }));

  const candidates = electionsInfo.candidates.map<PartialCouncilCandidate>((accountId) => ({
    address: String(accountId),
  }));

  const primeMember: PartialCouncilMember | null = prime
    ? {
        address: String(prime),
        backing: electionsInfo.members.find(([accountId]) => accountId.eq(prime))?.[1]?.toString(),
        voters: [],
      }
    : null;

  const {termLeft, percentage} = getTermLeft(bnToBn(electionsInfo.termDuration || 0), bestNumber);
  const {formattedTime: formattedTermLeft, timeStringParts: termLeftParts} = getBlockTime(api, termLeft);
  const {formattedTime: formattedTermDuration, timeStringParts: termDurationParts} = getBlockTime(
    api,
    electionsInfo.termDuration,
  );

  const termProgress: TermProgress = {
    termDuration: formattedTermDuration,
    termDurationParts: termDurationParts,
    termLeft: formattedTermLeft,
    termLeftParts,
    percentage,
  };

  return {
    members,
    runnersUp,
    candidates,
    primeMember,
    desiredSeats: Number(electionsInfo.desiredSeats),
    totalMembers: members.length,
    desiredRunnersUp: Number(electionsInfo.desiredRunnersUp),
    totalRunnersUp: runnersUp.length,
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

export type PartialCouncilCandidate = {
  address: string;
};

export type PartialCouncilMember = {
  address: string;
  backing?: string;
  voters: string[];
};
