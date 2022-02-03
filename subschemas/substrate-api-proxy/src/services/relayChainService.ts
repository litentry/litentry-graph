import {BlockNumber} from '@polkadot/types/interfaces';
import {BN, BN_ONE, extractTime} from '@polkadot/util';
import {Context} from '../types';

type Result = {
  blockTime: number;
  timeStringParts: string[];
  formattedTime: string;
};

const DEFAULT_TIME = new BN(6000);

export function getBlockTime(api: Context['api'], blockNumber: BlockNumber | BN = BN_ONE): Result {
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
