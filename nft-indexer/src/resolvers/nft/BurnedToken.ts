import { saveEvent } from '../../services';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.BurnedToken
  [owner, classId, tokenId]: [string, number, number]
): Promise<void> {
  await saveEvent({
    name: 'BurnedToken',
    data: [owner, classId, tokenId],
  });
}
