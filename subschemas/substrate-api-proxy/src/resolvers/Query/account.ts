import type { RegistrationJudgement } from '../../generated/resolvers-types';
import type { Context } from '../../types';

export const account = async (
  parent: { address?: string },
  args: { address?: string },
  context: Context,
) => {
  const { api } = context;
  const address = parent?.address || args?.address;

  if (!address) {
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
      judgements: info.identity.judgements.map<RegistrationJudgement>(
        ([index, judgement]) => ({
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
        }),
      ),
    },
    display: display.toUpperCase(),
  };
};
