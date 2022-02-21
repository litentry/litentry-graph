import {ApiPromise} from '@polkadot/api';
import type {RegistrationJudgement, Account} from '../generated/resolvers-types';

export class AccountsService {
  #api: ApiPromise;

  constructor(api: ApiPromise) {
    this.#api = api;
  }

  public async getAccount(address: string): Promise<Account> {
    const info = await this.#api.derive.accounts.info(address);

    const display = info.identity.displayParent
      ? `${info.identity.displayParent}/${info.identity.display || info.identity.displayParent}`
      : info.identity.display ?? address;

    return {
      address: address,
      registration: {
        ...info.identity,
        judgements: info.identity.judgements.map<RegistrationJudgement>(([index, judgement]) => ({
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
    };
  }
}
