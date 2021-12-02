import type { ApiPromise } from '@polkadot/api';
import type { Vec } from '@polkadot/types';
import type { EventRecord } from '@polkadot/types/interfaces';
import type { Handlers } from './types';
declare const parseEvents: (handlers: Handlers) => (api: ApiPromise, allRecords: Vec<EventRecord>) => Promise<void>;
export default parseEvents;
//# sourceMappingURL=parse-events.d.ts.map