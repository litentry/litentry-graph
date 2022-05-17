import { ApiPromise } from '@polkadot/api';
import type { Account, RegistrationJudgement } from '../generated/resolvers-types';
import { formatBalance } from './substrateChainService';

export class AccountsService {
  #api: ApiPromise;

  constructor(api: ApiPromise) {
    this.#api = api;
  }

  public async getAccountDisplay(address: string): Promise<Account> {
    const account = await this.#api.derive.accounts.hasIdentity(address);
    return {
      address,
      display: account.display ?? address.toUpperCase(),
      hasIdentity: account.hasIdentity,
    };
  }

  public async getAccounts(addresses: string[]): Promise<Account[]> {
    return Promise.all(addresses.map((address) => this.getAccountDisplay(address)));
  }

  public async getAccount(address: string): Promise<Account> {
    const accountInfo = await this.#api.derive.accounts.info(address);
    const { data: accountData } = await this.#api.query.system.account(address);

    const total = accountData.free.add(accountData.reserved);
    const reserved = accountData.reserved;
    const free = accountData.free;
    const feeFrozen = accountData.feeFrozen;
    const miscFrozen = accountData.miscFrozen;

    const display = accountInfo.identity.displayParent
      ? `${accountInfo.identity.displayParent}/${accountInfo.identity.display || accountInfo.identity.displayParent}`
      : accountInfo.identity.display;

    return {
      address,
      registration: {
        ...accountInfo.identity,
        judgements: accountInfo.identity.judgements.map<RegistrationJudgement>(([index, judgement]) => ({
          registrarIndex: index.toNumber(),
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
      display: display ?? address.toUpperCase(),
      hasIdentity: Boolean(display),
      balance: {
        total: total.toString(),
        formattedTotal: formatBalance(this.#api, total),
        reserved: reserved.toString(),
        formattedReserved: formatBalance(this.#api, reserved),
        free: free.toString(),
        formattedFree: formatBalance(this.#api, free),
        freeFrozen: feeFrozen.toString(),
        formattedFreeFrozen: formatBalance(this.#api, feeFrozen),
        feeFrozen: feeFrozen.toString(),
        formattedFeeFrozen: formatBalance(this.#api, feeFrozen),
        miscFrozen: miscFrozen.toString(),
        formattedMiscFrozen: formatBalance(this.#api, miscFrozen),
      },
    };
  }
}
