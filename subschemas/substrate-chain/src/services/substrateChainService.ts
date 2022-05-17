import type BN from 'bn.js';
import {Compact} from '@polkadot/types';
import {BlockNumber} from '@polkadot/types/interfaces';
import {Registry} from '@polkadot/types/types';
import {formatBalance as format, BN as Bn, BN_ONE, extractTime} from '@polkadot/util';
import {Context} from '../types';

type Balance = Compact<any> | BN | string | number;

type BlockTimeResult = {
  blockTime: number;
  timeStringParts: string[];
  formattedTime: string;
};

// for million, 2 * 3-grouping + comma
const M_LENGTH = 6 + 1;

const DEFAULT_TIME = new Bn(6000);

export function getBlockTime(api: Context['api'], blockNumber: BlockNumber | 0 | BN = BN_ONE): BlockTimeResult {
  if (!blockNumber) {
    return {
      blockTime: DEFAULT_TIME.toNumber(),
      timeStringParts: [],
      formattedTime: '',
    };
  }

  const blockTime =
    api.consts.babe?.expectedBlockTime ||
    api.consts.difficulty?.targetBlockTime ||
    api.consts.timestamp?.minimumPeriod.muln(2) ||
    DEFAULT_TIME;

  const {days, hours, minutes, seconds} = extractTime(Math.abs(blockTime.mul(blockNumber).toNumber()));

  const timeStr = [
    days ? (days > 1 ? `${days} days` : '1 day') : null,
    hours ? (hours > 1 ? `${hours} hrs` : '1 hr') : null,
    minutes ? (minutes > 1 ? `${minutes} mins` : '1 min') : null,
    seconds ? (seconds > 1 ? `${seconds} s` : '1 s') : null,
  ].filter((value): value is string => !!value);

  return {
    blockTime: blockTime.toNumber(),
    timeStringParts: timeStr,
    formattedTime: timeStr.filter(Boolean).slice(0, 2).join(' '),
  };
}

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

export function getChain(api: Context['api']) {
  return api.runtimeChain.toString().toLowerCase();
}
