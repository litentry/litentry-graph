import {isAscii, isHex, isU8a, u8aToHex, u8aToString} from '@polkadot/util';
import {IExtrinsic, IMethod} from '@polkadot/types/types';
import {FunctionMetadataLatest} from '@polkadot/types/interfaces';

export function getCallParams(call: IExtrinsic | IMethod) {
  const {method, section} = call?.registry.findMetaCall(call.callIndex) ?? {};

  return {
    method,
    section,
    args: call.meta.args.map((a, index) => {
      let subCalls: any[] = [];

      let value: unknown = call.args?.[index];

      if (value) {
        if (Array.isArray(value) && a.type.toString() === 'Vec<Call>') {
          subCalls = value.map(getCallParams);
          value = 'SubCalls';
        } else if (a.type.toString() === 'Bytes') {
          value =
            isU8a(value) && isAscii(value)
              ? u8aToString(value)
              : isHex(value)
              ? value
              : u8aToHex(value as Uint8Array, 256);
        }
      }

      return {
        name: String(a.name),
        type: String(a.type),
        value: String(value),
        subCalls,
      };
    }),
  };
}

export function formatCallMeta(meta?: FunctionMetadataLatest): string {
  if (!meta || !meta.docs.length) {
    return '';
  }

  const strings = meta.docs.map((doc) => doc.toString().trim());
  const firstEmpty = strings.findIndex((doc) => !doc.length);
  const combined = (firstEmpty === -1 ? strings : strings.slice(0, firstEmpty))
    .join(' ')
    .replace(/#(<weight>| <weight>).*<\/weight>/, '');
  const parts = splitParts(combined.replace(/\\/g, '').replace(/`/g, ''));

  return parts.join(' ');
}

function splitParts(value: string): string[] {
  return ['[', ']'].reduce((result: string[], sep) => splitSingle(result, sep), [value]);
}

function splitSingle(value: string[], sep: string): string[] {
  return value.reduce((result: string[], _value: string): string[] => {
    return _value.split(sep).reduce((_result: string[], __value: string) => _result.concat(__value), result);
  }, []);
}
