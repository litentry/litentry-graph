import {BN_ZERO} from '@polkadot/util';
import {Context} from '../../types';
import {formatBalance} from '../../services/substrateChainService';

export type PartialRegistrar = {
  id: string;
  address: string | undefined;
  fee: string | undefined;
  formattedFee: string | undefined;
};

export async function registrars(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<PartialRegistrar[]> {
  const registrarsInfo = await api.query.identity.registrars();
  const registrars = registrarsInfo
    .map((r) => r.unwrapOr(undefined))
    .filter((r) => !!r?.fee.gt(BN_ZERO))
    .map((r, index) => ({
      id: index.toString(),
      address: r?.account.toString(),
      fee: r?.fee.toString(),
      formattedFee: formatBalance(api, r?.fee || BN_ZERO),
    }));

  return registrars;
}
