import { saveEvent } from '../../services';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.TransferredToken
  [from, to, classId, tokenId]: [string, string, number, number]
): Promise<void> {
  await saveEvent({
    name: 'TransferredToken',
    data: [from, to, classId, tokenId],
  });
}
