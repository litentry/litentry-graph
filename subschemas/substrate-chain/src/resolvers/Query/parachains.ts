import type {AccountId, ParaId, ParaLifecycle, CandidatePendingAvailability} from '@polkadot/types/interfaces';
import {createWsEndpoints} from '@polkadot/apps-config/endpoints';
import type {LinkOption} from '@polkadot/apps-config/endpoints/types';
import type {Context} from '../../types';
import type {Account, AccountInfo, Parachain, ParachainsInfo} from '../../generated/resolvers-types';
import {
  ValidatorsInfo,
  getParachainValidators,
  LastEvents,
  getLastEvents,
  getLeasePeriod,
  getUpcomingParaIds,
  getBlocks,
  getLeasePeriodString,
  getNonVoters,
  getValidatorInfo,
} from '../../services/parachainsService';
import {getBlockTime} from '../../services/substrateChainService';
import {bnToBn} from '@polkadot/util';
import type {Option} from '@polkadot/types';
import {AccountsService} from '../../services/accountsService';

export async function parachainsInfo(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<ParachainsInfo> {
  const [parachainIds, proposals, upcomingParaIds, leasePeriod] = await Promise.all([
    api.query.paras?.parachains?.<ParaId[]>(),
    api.query.proposeParachain?.proposals?.entries(),
    getUpcomingParaIds(api),
    getLeasePeriod(api),
  ]);

  return {
    parachainsCount: parachainIds?.length ?? 0,
    parathreadsCount: upcomingParaIds.length,
    proposalsCount: proposals?.length ?? 0,
    leasePeriod,
  };
}

export async function parachains(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<Promise<Parachain>[]> {
  const [parachainIds, genesisHash, lastEvents, validators] = await Promise.all([
    api.query.paras?.parachains?.<ParaId[]>(),
    api.genesisHash.toHex(),
    getLastEvents(api),
    getParachainValidators(api),
  ]);

  const startingEndpoints = createWsEndpoints((key: string, value: string | undefined) => value || key);
  const endpoints = startingEndpoints.filter(({genesisHashRelay}) => genesisHash === genesisHashRelay);

  return parachainIds.map((paraId) => {
    const parachain = endpoints.find((e) => e.paraId === paraId.toNumber());
    return extractParachainData(api, paraId.toString(), parachain, lastEvents, validators);
  });
}

export async function parachain(
  _: Record<string, never>,
  params: {id: string},
  {api}: Context,
): Promise<Parachain | null> {
  const [parachainIds, genesisHash, lastEvents, validators] = await Promise.all([
    api.query.paras?.parachains?.<ParaId[]>(),
    api.genesisHash.toHex(),
    getLastEvents(api),
    getParachainValidators(api),
  ]);

  const paraId = parachainIds.find((p) => p.toString() === params.id);
  if (!paraId) {
    return null;
  }

  const startingEndpoints = createWsEndpoints((key: string, value: string | undefined) => value || key);
  const endpoints = startingEndpoints.filter(({genesisHashRelay}) => genesisHash === genesisHashRelay);
  const parachain = endpoints.find((e) => e.paraId === paraId.toNumber());

  return extractParachainData(api, paraId.toString(), parachain, lastEvents, validators);
}

const extractParachainData = async (
  api: Context['api'],
  id: string,
  parachain: LinkOption | undefined,
  lastEvents: LastEvents,
  validators: ValidatorsInfo,
): Promise<Parachain> => {
  const [leases, leasePeriod, optLifecycle, optPending] = await Promise.all([
    api.query.slots?.leases?.(id) as any,
    getLeasePeriod(api),
    api.query.paras?.paraLifecycles?.<Option<ParaLifecycle>>(id),
    (api.query.parasInclusion || api.query.paraInclusion || api.query.inclusion)?.pendingAvailability?.<
      Option<CandidatePendingAvailability>
    >(id),
  ]);

  const filteredLeases = leases
    .map((opt: {isSome: any}, index: any) => (opt.isSome ? index : -1))
    .filter((period: number) => period !== -1);
  const period =
    leasePeriod?.currentLease && leases && getLeasePeriodString(bnToBn(leasePeriod.currentLease), filteredLeases);
  const validatorInfo = getValidatorInfo(id.toString(), validators);
  const nonVoters = getNonVoters(validators.validators, optPending?.unwrapOr(undefined));

  const validatorsAccounts = await Promise.all(getAccountsInfoFromValidators(api, validatorInfo?.validators) ?? []);
  const nonVotersAccounts = await Promise.all(getAccountsInfoFromValidators(api, nonVoters) ?? []);

  return {
    id,
    name: parachain?.text?.toString() ?? `#${id.toString()}`,
    lease: {
      period,
      blockTime: getBlockTime(api, getBlocks(api, filteredLeases, leasePeriod)).timeStringParts,
    },
    lifecycle: optLifecycle?.unwrapOr(undefined)?.toString() ?? '',
    lastIncludedBlock: lastEvents.lastIncluded[id]?.blockNumber?.toString() ?? '',
    lastBackedBlock: lastEvents.lastBacked[id]?.blockNumber?.toString() ?? '',
    homepage: parachain?.homepage,
    validators: {
      groupIndex: validatorInfo?.groupIndex.toString(),
      validators: validatorsAccounts,
    },
    nonVoters: nonVotersAccounts,
  };
};

const getAccountsInfoFromValidators = (
  api: Context['api'],
  validators: AccountId[] | undefined,
): Promise<AccountInfo>[] | undefined => {
  const accountsService = new AccountsService(api);

  return validators?.map(async (v): Promise<AccountInfo> => {
    return {
      address: v.toString(),
      account: accountsService.getAccount(v.toString()) as unknown as Account,
    };
  });
};
