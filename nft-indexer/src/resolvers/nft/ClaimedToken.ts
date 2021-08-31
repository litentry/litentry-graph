import { saveEvent } from '../../repositories/events';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.ClaimedToken
  [claimer, class_id, token_id]: [string, number, number]
): Promise<void> {
  await saveEvent({
    name: 'ClaimedToken',
    data: [claimer, class_id, token_id],
  });
}
