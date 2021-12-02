import type { ApiPromise } from '@polkadot/api';
import type { VoidFn } from '@polkadot/api/types';
import type { Vec } from '@polkadot/types';
import type { EventRecord } from '@polkadot/types/interfaces';
/**
 * Listens for new heads on the chain,
 * gets the block and all events from the block,
 * passes them to the callback
 */
export default function blockListener(api: ApiPromise, callback: (api: ApiPromise, allRecords: Vec<EventRecord>) => void): Promise<VoidFn>;
//# sourceMappingURL=block-listener.d.ts.map