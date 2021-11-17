import type { ApiPromise } from '@polkadot/api';
import { RegistrarModel } from '../models';

export default async function handler(
  // https://github.com/paritytech/substrate/blob/master/frame/identity/src/lib.rs#L257
  [registrar_index]: [number],
  api: ApiPromise
): Promise<void> {
  const registrars = await api.query.identity.registrars();
  const unwrapped = registrars[registrar_index].unwrap();

  const doc = new RegistrarModel({
    index: registrar_index,
    address: unwrapped.account.toString(),
    block: 123, // todo
  });

  await doc.save();

  console.log('\nRegistrarModel:', doc);
}
