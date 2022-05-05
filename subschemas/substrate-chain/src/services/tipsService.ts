import {ApiPromise} from '@polkadot/api';
import {SubstrateTipper, SubstrateTip} from '../generated/tips-types';
import type {AccountsService} from './accountsService';
import {formatBalance, getBlockTime} from './substrateChainService';
import {TipStatus} from '../generated/resolvers-types';
import {bnToBn} from '@polkadot/util';
import {tips} from '../resolvers/Query/tips';

async function processTippers(tippers: SubstrateTipper[], accountsService: AccountsService, api: ApiPromise) {
  return Promise.all(
    tippers.map(async (tipper) => ({
      account: await accountsService.getAccountDisplay(tipper.account),
      balance: tipper.tipValue,
      formattedBalance: formatBalance(api, tipper.tipValue),
    })),
  );
}

function processTipMedian(tippers: SubstrateTipper[], api: ApiPromise) {
  if (tippers.length === 0) {
    return {
      median: null,
      formattedMedian: null,
    };
  }

  const median = tippers.map((tipper) => Number(tipper.tipValue)).sort((a, b) => a - b)[Math.floor(tippers.length / 2)];

  return {
    median: median.toString(),
    formattedMedian: formatBalance(api, median),
  };
}

export async function processTip(tip: SubstrateTip, api: ApiPromise, accountsService: AccountsService) {
  const {median, formattedMedian} = processTipMedian(tip.tippers, api);

  return {
    id: tip.id,
    who: await accountsService.getAccountDisplay(tip.who),
    finder: tip.finder ? await accountsService.getAccountDisplay(tip.finder) : null,
    reason: tip.reason,
    status: TipStatus[tip.status],
    deposit: tip.deposit,
    formattedDeposit: Boolean(tip.deposit) ? formatBalance(api, tip.deposit) : null,
    closes: tip.closes,
    closesTime: Boolean(tip.closes) ? getBlockTime(api, bnToBn(tip.closes)).timeStringParts : null,
    createdAt: tip.createdAt,
    median,
    formattedMedian,
    tippersCount: tip.tippers.length,
    tippers: await processTippers(tip.tippers, accountsService, api),
  };
}
