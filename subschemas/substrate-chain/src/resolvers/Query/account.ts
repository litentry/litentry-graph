import type {Account} from '../../generated/resolvers-types';
import type {Context} from '../../types';
import {AccountsService} from '../../services/accountsService';

export const account = async (
  parent: {address?: string},
  args: {address?: string},
  {api}: Context,
): Promise<Account> => {
  const accountsService = new AccountsService(api);
  const address = parent?.address || args?.address;

  if (!address) {
    throw new Error('address is required');
  }

  return accountsService.getAccount(address);
};
