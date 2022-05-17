import {ApiPromise} from '@polkadot/api';
import {SubstrateTipper, SubstrateTip} from '../generated/tips-types';
import type {AccountsService} from './accountsService';
import {formatBalance, getBlockTime} from './substrateChainService';
import {TipStatus} from '../generated/resolvers-types';
import {bnToBn} from '@polkadot/util';

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
      medianTipValue: null,
      formattedMedianTipValue: null,
    };
  }

  const median = tippers.map((tipper) => Number(tipper.tipValue)).sort((a, b) => a - b)[Math.floor(tippers.length / 2)];

  return {
    medianTipValue: median.toString(),
    formattedMedianTipValue: formatBalance(api, median),
  };
}

export async function processTip(tip: SubstrateTip, api: ApiPromise, accountsService: AccountsService) {
  const {medianTipValue, formattedMedianTipValue} = processTipMedian(tip.tippers, api);

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
    medianTipValue,
    formattedMedianTipValue,
    tippersCount: tip.tippers.length,
    tippers: await processTippers(tip.tippers, accountsService, api),
  };
}
