import { ServerContext } from '../../types';

export async function account(
  parent: { address: string } | undefined,
  args: { address: string } | undefined,
  context: ServerContext
) {
  const { api } = context;
  const address = parent?.address || args?.address;

  if(!address) {
    throw new Error('address is required');
  }

  const info = await api.derive.accounts.info(address);

  const display = info.identity.displayParent
    ? `${info.identity.displayParent}/${
        info.identity.display || info.identity.displayParent
      }`
    : info.identity.display ?? address;

  return {
    address: address,
    registration: {
      ...info.identity,
      judgements: info.identity.judgements.map(([index, judgement]) => ({
        index,
        judgement,
      })),
    },
    display: display.toUpperCase(),
  };
}
