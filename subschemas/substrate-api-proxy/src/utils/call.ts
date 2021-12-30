import { isAscii, isHex, isU8a, u8aToHex, u8aToString } from '@polkadot/util';
import { IExtrinsic, IMethod } from '@polkadot/types/types';

export function getCallParams(c: IExtrinsic | IMethod) {
  const { method, section } = c?.registry.findMetaCall(c.callIndex) ?? {};

  return {
    method,
    section,
    args: c.meta.args.map((a, index) => {
      let subCalls: any[] = [];

      let value: unknown = c.args?.[index];

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
