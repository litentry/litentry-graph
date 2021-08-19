import { saveEvent } from '../../repositories/events';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.MintedToken
  [from, to, class_id, quantity]: [string, string, number, number]
): Promise<void> {
  await saveEvent({
    name: 'MintedToken',
    data: [from, to, class_id, quantity],
  });
}
