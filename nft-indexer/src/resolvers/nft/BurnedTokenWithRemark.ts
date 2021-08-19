import { saveEvent } from '../../repositories/events';

export default async function handler(
  // https://litentry.github.io/litentry-pallets/pallet_nft/pallet/enum.Event.html#variant.BurnedTokenWithRemark
  [owner, class_id, token_id, remark_hash]: [string, number, number, string]
): Promise<void> {
  await saveEvent({
    name: 'BurnedTokenWithRemark',
    data: [owner, class_id, token_id, remark_hash],
  });
}
