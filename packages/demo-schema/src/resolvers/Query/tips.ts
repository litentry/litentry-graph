import type { Option, Bytes } from '@polkadot/types';
import type {
  OpenTip,
  Hash,
  AccountId,
  // BlockNumber,
  Balance,
} from '@polkadot/types/interfaces';
import type { ApiPromise } from '@polkadot/api';
import { hexToString } from '@polkadot/util';
import type { ServerContext } from '../../types';

type Tip = [string, OpenTip];

export default async function tips(
  _: undefined,
  __: undefined,
  { api }: ServerContext
): Promise<
  {
    id: string;
    who: AccountId;
    finder: AccountId;
    reason: string;
    // closes: Option<BlockNumber>;
    deposit: Balance;
  }[]
> {
  const hashes = await api.query.tips.tips
    .keys()
    .then((keys) => keys.map((key) => key.args[0].toHex()));

  if (hashes.length) {
    const optionTips: Option<OpenTip>[] = await api.query.tips.tips.multi(
      hashes
    );
    const openTips = extractTips([hashes, optionTips], hashes);

    const tips =
      openTips?.map(async (openTip) => ({
        id: openTip[0],
        who: openTip[1].who,
        finder: openTip[1].finder,
        reason: await getTipReason(api, openTip[1].reason),
        // closes: openTip[1].closes,
        deposit: openTip[1].deposit,
      })) || [];

    return Promise.all(tips);
  }

  return [];
}

function extractTips(
  tipsWithHashes?: [string[], Option<OpenTip>[]],
  inHashes?: string[] | null
): Tip[] | undefined {
  if (!tipsWithHashes || !inHashes) {
    return undefined;
  }

  const [hashes, optTips] = tipsWithHashes;

  return optTips
    ?.map((opt, index): [string, OpenTip | null] => [
      hashes[index] as string,
      opt.unwrapOr(null),
    ])
    .filter(
      (val): val is [string, OpenTip] => inHashes.includes(val[0]) && !!val[1]
    )
    .sort((a, b) =>
      a[1].closes.isNone
        ? b[1].closes.isNone
          ? 0
          : -1
        : b[1].closes.isSome
        ? b[1].closes.unwrap().cmp(a[1].closes.unwrap())
        : 1
    );
}

const transformReason = {
  transform: (optBytes: Option<Bytes>) =>
    optBytes.isSome ? hexToString(optBytes.unwrap().toHex()) : null,
};

async function getTipReason(api: ApiPromise, reasonHash: Hash) {
  const reasonText = await api.query.tips.reasons(reasonHash);
  const transformed = transformReason.transform(reasonText);

  return transformed || reasonHash.toHex();
}
