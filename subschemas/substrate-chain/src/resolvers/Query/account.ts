import type {Account, AccountInfo} from '../../generated/resolvers-types';
import type {Context} from '../../types';
import {AccountsService} from '../../services/accountsService';

export type PartialAccountInfo = Omit<AccountInfo, 'account'>;
interface PartialAccount extends Omit<Account, 'subAccounts'> {
  subAccounts: PartialAccountInfo[];
}

export async function account(
  parent: {address?: string},
  args: {address?: string},
  {api}: Context,
): Promise<PartialAccount> {
  const accountsService = new AccountsService(api);
  const address = parent?.address || args?.address;

  if (!address) {
    throw new Error('address is required');
  }

  const account = await accountsService.getAccount(address);
  const subAccountsData = await api.query.identity?.subsOf(address);
  const subAccounts = subAccountsData?.[1].map((accountId) => ({address: accountId.toString()}));

  return {
    ...account,
    subAccounts,
  };
}
