import type {ParaId, ParaLifecycle, CandidatePendingAvailability} from '@polkadot/types/interfaces';
import type {LinkOption} from '@polkadot/apps-config/endpoints/types';
import type {Context} from '../../types';
import type {Parachain, ParachainsSummary} from '../../generated/resolvers-types';
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
import {getEndpoints} from '../../utils/endpoints';
import {AccountsService} from '../../services/accountsService';

export async function parachainsSummary(
  _: Record<string, never>,
  __: Record<string, never>,
  {api}: Context,
): Promise<ParachainsSummary> {
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
  const [parachainIds, lastEvents, validators] = await Promise.all([
    api.query.paras?.parachains?.<ParaId[]>(),
    getLastEvents(api),
    getParachainValidators(api),
  ]);

  const endpoints = getEndpoints(api);

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
  const [parachainIds, lastEvents, validators] = await Promise.all([
    api.query.paras?.parachains?.<ParaId[]>(),
    getLastEvents(api),
    getParachainValidators(api),
  ]);

  const paraId = parachainIds.find((p) => p.toString() === params.id);
  if (!paraId) {
    return null;
  }

  const endpoints = getEndpoints(api);
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
  const accountsService = new AccountsService(api);
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

  const notVoters = getNonVoters(validators.validators, optPending?.unwrapOr(undefined));
  const validatorInfo = getValidatorInfo(id.toString(), validators);

  const nonVoterAccounts = await accountsService.getAccounts(notVoters);
  const validatorAccounts = await accountsService.getAccounts(validatorInfo.validators);

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
      groupIndex: validatorInfo.groupIndex,
      validators: validatorAccounts,
    },
    nonVoters: nonVoterAccounts,
  };
};
