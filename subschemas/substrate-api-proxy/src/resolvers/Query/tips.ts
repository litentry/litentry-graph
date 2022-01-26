import type { Option, Bytes } from '@polkadot/types';
import type { PalletTipsOpenTip } from '@polkadot/types/lookup';
import { BN_ZERO } from '@polkadot/util';
import type {
  Hash,
  AccountId,
  // BlockNumber,
  Balance,
  OpenTipTo225,
} from '@polkadot/types/interfaces';
import type { ApiPromise } from '@polkadot/api';
import { hexToString } from '@polkadot/util';
import type { Context } from '../../types';

type Tip = [string, PalletTipsOpenTip];

export async function tips(
  _: Record<string, never>,
  __: Record<string, never>,
  { api }: Context,
): Promise<
  {
    id: string;
    who: string;
    finder: string;
    reason: string;
    closes?: string;
    deposit: string;
  }[]
> {
  const hashes = await api.query.tips.tips
    .keys()
    .then((keys) => keys.map((key) => key.args[0].toHex()));

  if (hashes.length) {
    const optionTips = await api.query.tips.tips.multi(hashes);
    const openTips = extractTips([hashes, optionTips], hashes);

    const tips =
      openTips?.map(async (openTip) => ({
        id: openTip[0],
        who: openTip[1].who.toString(),
        finder: openTip[1].finder.toString(),
        reason: await getTipReason(api, openTip[1].reason),
        closes: openTip[1].closes.unwrapOr(null)?.toString(),
        deposit: openTip[1].deposit.toString(),
      })) || [];

    return Promise.all(tips);
  }

  return [];
}

export async function tip(
  _: Record<string, never>,
  { id }: { id: string },
  { api }: Context,
) {
  const tipOption = await api.query.tips.tips(id);
  const tip = tipOption.unwrap();
  const tipState = await extractTipState(tip);

  return {
    id,
    who: tip.who.toString(),
    reason: await getTipReason(api, tip.reason),
    ...tipState,
  };
}

async function extractTipState(tip: PalletTipsOpenTip | OpenTipTo225) {
  const closes = tip.closes?.unwrapOr(null)?.toString();
  let finder: AccountId | null = null;
  let deposit: Balance | null = null;

  if (isCurrentTip(tip)) {
    finder = tip.finder;
    deposit = tip.deposit;
  } else if (tip.finder.isSome) {
    const finderInfo = tip.finder.unwrap();

    finder = finderInfo[0];
    deposit = finderInfo[1];
  }

  const values = tip.tips.map(([, value]) => value).sort((a, b) => a.cmp(b));
  const midIndex = Math.floor(values.length / 2);
  const median = values.length
    ? values.length % 2
      ? values[midIndex]
      : values[midIndex - 1]?.add(values[midIndex] ?? BN_ZERO).divn(2)
    : BN_ZERO;

  return {
    closes,
    deposit: deposit?.toString(),
    finder: finder?.toString(),
    median: median.toString(),
  };
}

function isCurrentTip(
  tip: PalletTipsOpenTip | OpenTipTo225,
): tip is PalletTipsOpenTip {
  return !!(tip as PalletTipsOpenTip)?.findersFee;
}

function extractTips(
  tipsWithHashes?: [string[], Option<PalletTipsOpenTip>[]],
  inHashes?: string[] | null,
): Tip[] | undefined {
  if (!tipsWithHashes || !inHashes) {
    return undefined;
  }

  const [hashes, optTips] = tipsWithHashes;

  return optTips
    ?.map((opt, index): [string, PalletTipsOpenTip | null] => [
      hashes[index] as string,
      opt.unwrapOr(null),
    ])
    .filter(
      (val): val is [string, PalletTipsOpenTip] =>
        inHashes.includes(val[0]) && !!val[1],
    )
    .sort((a, b) =>
      a[1].closes.isNone
        ? b[1].closes.isNone
          ? 0
          : -1
        : b[1].closes.isSome
        ? b[1].closes.unwrap().cmp(a[1].closes.unwrap())
        : 1,
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
