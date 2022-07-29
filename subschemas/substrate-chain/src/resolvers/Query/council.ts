import type { BlockNumber } from '@polkadot/types/interfaces';
import { BN, bnToBn } from '@polkadot/util';
import type { Council, CouncilMember, TermProgress } from '../../generated/resolvers-types';
import { AccountsService } from '../../services/accountsService';
import { formatBalance, getBlockTime } from '../../services/substrateChainService';
import type { Context } from '../../types';

export async function council(
  _: Record<string, never>,
  { address: addressFilter }: { address?: string | null },
  { api }: Context,
): Promise<Council> {
  const [electionsInfo, votes, prime, bestNumber] = await Promise.all([
    api.derive.elections.info(),
    api.derive.council.votes(),
    api.derive.council.prime(),
    api.derive.chain.bestNumber(),
  ]);

  const accountsService = new AccountsService(api);

  const votesByCandidates = votes.reduce<Record<string, string[]>>((result, [voter, { votes }]) => {
    votes.forEach((candidate) => {
      const candidateAddress = candidate.toString();
      if (addressFilter && candidateAddress !== addressFilter) {
        return;
      }
      if (!result[candidateAddress]) {
        result[candidateAddress] = [];
      }
      result[candidateAddress]?.push(voter.toString());
    });
    return result;
  }, {});

  const memberAccounts = electionsInfo.members.filter(
    ([accountId, _]) => !addressFilter || addressFilter === accountId.toString(),
  );
  const members = await Promise.all(
    memberAccounts.map<Promise<CouncilMember>>(async ([accountId, balance]) => {
      const account = await accountsService.getAccountDisplay(accountId.toString());
      return {
        address: accountId.toString(),
        account,
        backing: balance.toString(),
        formattedBacking: formatBalance(api, balance),
        voters: votesByCandidates[String(accountId)] || [],
      };
    }),
  );

  const runnersUpAccounts = electionsInfo.runnersUp.filter(
    ([accountId, _]) => !addressFilter || addressFilter === accountId.toString(),
  );
  const runnersUp = await Promise.all(
    runnersUpAccounts.map<Promise<CouncilMember>>(async ([accountId, balance]) => {
      const account = await accountsService.getAccountDisplay(accountId.toString());
      return {
        address: accountId.toString(),
        account,
        backing: balance.toString(),
        formattedBacking: formatBalance(api, balance),
        voters: votesByCandidates[String(accountId)] || [],
      };
    }),
  );

  const candidateAccounts = electionsInfo.candidates.filter(
    (accountId) => !addressFilter || addressFilter === accountId.toString(),
  );
  const candidates = await Promise.all(
    candidateAccounts.map<Promise<CouncilMember>>(async (accountId) => {
      const account = await accountsService.getAccountDisplay(accountId.toString());
      return {
        address: accountId.toString(),
        account,
        backing: '0',
        formattedBacking: formatBalance(api, 0),
        voters: [],
      };
    }),
  );

  let primeMember: CouncilMember | null = null;
  if (prime) {
    const backing = electionsInfo.members.find(([accountId]) => accountId.eq(prime))?.[1];
    const primeAccount = await accountsService.getAccount(prime.toString());
    if (backing) {
      primeMember = {
        address: prime.toString(),
        account: primeAccount,
        backing: backing?.toString() as string,
        formattedBacking: formatBalance(api, backing),
        voters: [],
      };
    }
  }

  let termProgress: TermProgress | null = null
  if(electionsInfo.termDuration) {
    const { termLeft, percentage } = getTermLeft(bnToBn(electionsInfo.termDuration || 0), bestNumber);
    const { formattedTime: formattedTermLeft, timeStringParts: termLeftParts } = getBlockTime(api, termLeft);
    const { formattedTime: formattedTermDuration, timeStringParts: termDurationParts } = getBlockTime(
      api,
      electionsInfo.termDuration,
    );
  
    termProgress = {
      termDuration: formattedTermDuration,
      termDurationParts: termDurationParts,
      termLeft: formattedTermLeft,
      termLeftParts,
      percentage,
    };
  }

  return {
    members,
    runnersUp,
    candidates,
    totalCandidates: candidates.length,
    primeMember,
    desiredSeats: electionsInfo.desiredSeats ? electionsInfo.desiredSeats.toNumber() : 0,
    totalMembers: members.length,
    desiredRunnersUp: electionsInfo.desiredRunnersUp ? electionsInfo.desiredRunnersUp.toNumber() : 0,
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
