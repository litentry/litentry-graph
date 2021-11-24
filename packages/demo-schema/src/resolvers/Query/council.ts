import type { ServerContext } from '../../types';


export async function council(
  _: undefined,
  __: undefined,
  { api }: ServerContext
) {
  const electionsInfo = await api.derive.elections.info();
  const members = electionsInfo.members.map(([accountId, balance]) => ({
    accountId,
    backing: balance, 
  }));
  
  return {
    members,
  }
}

