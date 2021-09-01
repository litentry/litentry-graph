import { saveEvent } from '../../repositories/events';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.MergedToken
  [owner, classId, tokenId]: [string, number, number]
): Promise<void> {
  await saveEvent({
    name: 'MergedToken',
    data: [owner, classId, tokenId],
  });
}
