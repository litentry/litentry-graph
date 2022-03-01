import {ApiPromise} from '@polkadot/api';
import type {RegistrationJudgement, Account} from '../generated/resolvers-types';
import {formatBalance} from './substrateChainService';

export class AccountsService {
  #api: ApiPromise;

  constructor(api: ApiPromise) {
    this.#api = api;
  }

  public async getAccount(address: string): Promise<Account> {
    const accountInfo = await this.#api.derive.accounts.info(address);
    const {data: accountData} = await this.#api.query.system.account(address);
    const subAccountsData = await this.#api.query.identity.subsOf(address);
    const subAccounts = await Promise.all(subAccountsData[1].map((accountId) => this.getAccount(accountId.toString())));

    const total = accountData.free.add(accountData.reserved);
    const reserved = accountData.reserved;
    const free = accountData.free;
    const freeFrozen = accountData.feeFrozen;

    const display = accountInfo.identity.displayParent
      ? `${accountInfo.identity.displayParent}/${accountInfo.identity.display || accountInfo.identity.displayParent}`
      : accountInfo.identity.display ?? address;

    return {
      address: address,
      registration: {
        ...accountInfo.identity,
        judgements: accountInfo.identity.judgements.map<RegistrationJudgement>(([index, judgement]) => ({
          index: index.toNumber(),
          judgement: {
            isErroneous: judgement.isErroneous,
            isFeePaid: judgement.isFeePaid,
            isKnownGood: judgement.isKnownGood,
            isLowQuality: judgement.isLowQuality,
            isOutOfDate: judgement.isOutOfDate,
            isReasonable: judgement.isReasonable,
            isUnknown: judgement.isUnknown,
          },
        })),
      },
      display: display.toUpperCase(),
      balance: {
        total: total.toString(),
        formattedTotal: formatBalance(this.#api, total),
        reserved: reserved.toString(),
        formattedReserved: formatBalance(this.#api, reserved),
        free: free.toString(),
        formattedFree: formatBalance(this.#api, free),
        freeFrozen: freeFrozen.toString(),
        formattedFreeFrozen: formatBalance(this.#api, freeFrozen),
      },
      subAccounts,
    };
  }
}
