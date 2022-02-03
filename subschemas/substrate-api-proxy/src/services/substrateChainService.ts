import type BN from 'bn.js';

import {Compact} from '@polkadot/types';
import {Registry} from '@polkadot/types/types';
import {formatBalance as format} from '@polkadot/util';
import {Context} from '../types';

type Balance = Compact<any> | BN | string | number;

// for million, 2 * 3-grouping + comma
const M_LENGTH = 6 + 1;

export function formatBalance(api: Context['api'], value: Balance, isShort?: boolean): string {
  const {decimals, token} = getFormat(api.registry);
  const [prefix = '', postfix = ''] = format(value, {
    decimals,
    forceUnit: '-',
    withSi: false,
  }).split('.');

  if (prefix.length > M_LENGTH) {
    const [major, rest] = format(value, {
      decimals,
      withUnit: false,
    }).split('.');
    const minor = isShort ? '' : `.${rest?.substring(0, 4)}`;
    const unit = rest?.substring(4);

    return `${major}${minor} ${unit}${unit ? token : ' ' + token}`;
  }

  return formatDisplay(prefix, postfix, token, isShort);
}

function getFormat(registry: Registry) {
  const decimals = registry.chainDecimals[0] ?? 0;
  const token = registry.chainTokens[0] ?? '';

  return {decimals, token};
}

function formatDisplay(prefix: string, postfix: string, unit: string, isShort = false): string {
  return `${prefix}${isShort ? '' : '.'}${!isShort ? ('0000' + postfix).slice(-4) : ''} ${unit}`;
}
