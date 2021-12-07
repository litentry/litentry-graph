import { ApiPromise } from '@polkadot/api';

export type BlockEvent = {
  _id: string;
  blockNumber: number;
  phase: string;
  phaseIndex?: number;
  section: string;
  method: string;
  data: unknown[];
  topics: unknown[];
};

export enum IdentityEvent {
  IdentitySet = 'IdentitySet',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type EventHandler = (api: ApiPromise, data: any[]) => Promise<void>;

export type AccountIdentity = {
  _id: string;
  judgements: {
    registrar: number;
    judgement: string;
  }[];
  deposit: number;
  display: string;
  legal?: string;
  web?: string;
  riot?: string;
  email?: string;
  image?: string;
  twitter?: string;
  pgpFingerprint?: string;
  additional: string[];
};
