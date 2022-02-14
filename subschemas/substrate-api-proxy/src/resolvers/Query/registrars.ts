import {BN_ZERO} from '@polkadot/util';
import type {Context} from '../../types';
import {formatBalance} from '../../services/substrateChainService';
import type {Registrar, RegistrarsSummary} from '../../generated/resolvers-types';

export type PartialRegistrar = Omit<Registrar, 'account'>;

export async function registrars(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<PartialRegistrar[]> {
  const registrars = await api.query.identity.registrars();
  return registrars
    .map((r) => r.unwrap())
    .sort((a, b) => (a.fee.toNumber() > b.fee.toNumber() ? 1 : -1))
    .map((r, index) => ({
      id: index.toString(),
      address: r.account.toString(),
      fee: r.fee.toString(),
      formattedFee: formatBalance(api, r.fee || BN_ZERO),
    }));
}

export async function registrarsSummary(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<RegistrarsSummary> {
  const registrarData = await api.query.identity.registrars();
  const registrars = registrarData
    .map((r) => r.unwrap())
    .sort((a, b) => (a.fee.toNumber() > b.fee.toNumber() ? 1 : -1));
  const lowestFee = registrars[0].fee.toString();
  const formattedLowestFee = formatBalance(api, lowestFee);
  const highestFee = registrars[registrars.length - 1].fee.toString();
  const formattedHighestFee = formatBalance(api, highestFee);

  return {
    registrarsCount: registrars.length,
    lowestFee,
    formattedLowestFee,
    highestFee,
    formattedHighestFee,
  };
}
