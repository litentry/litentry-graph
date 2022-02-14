import {BN_ZERO} from '@polkadot/util';
import type {Context} from '../../types';
import {formatBalance} from '../../services/substrateChainService';
import type {Registrar, RegistrarsSummary} from '../../generated/resolvers-types';
import type {PalletIdentityRegistrarInfo} from '@polkadot/types/lookup';

export type PartialRegistrar = Omit<Registrar, 'account'>;

export async function registrars(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<PartialRegistrar[]> {
  const registrarsData = await api.query.identity.registrars();
  const registrars = registrarsData
    .map((r) => r.unwrapOr(undefined))
    .filter((r) => r !== undefined) as PalletIdentityRegistrarInfo[];

  return registrars
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
  const registrarsData = await api.query.identity.registrars();
  const registrars = registrarsData
    .map((r) => r.unwrapOr(undefined))
    .filter((r) => r !== undefined) as PalletIdentityRegistrarInfo[];
  const sortedRegistrars = registrars.sort((a, b) => (a.fee.toNumber() > b.fee.toNumber() ? 1 : -1));

  const lowestFee = sortedRegistrars[0].fee.toString();
  const formattedLowestFee = formatBalance(api, lowestFee);
  const highestFee = sortedRegistrars[sortedRegistrars.length - 1].fee.toString();
  const formattedHighestFee = formatBalance(api, highestFee);

  return {
    registrarsCount: registrars.length,
    lowestFee,
    formattedLowestFee,
    highestFee,
    formattedHighestFee,
  };
}
