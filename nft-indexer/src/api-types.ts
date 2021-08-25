import type { RegistryTypes } from '@polkadot/types/types';

// TODO pull in from lib once created
const types: RegistryTypes = {
  Address: 'MultiAddress',
  LookupSource: 'MultiAddress',
  Properties: {
    _enum: ['None', 'Transferable', 'Burnable', 'Both'],
  },
  CID: 'Vec<u8>',
  ClassId: 'u32',
  ClassIdOf: 'ClassId',
  TokenId: 'u64',
  TokenIdOf: 'TokenId',
  TokenInfoOf: {
    metadata: 'CID',
    owner: 'AccountId',
    data: 'TokenData',
  },
  TokenData: { used: 'bool', rarity: 'u8' },
  HashByte32: '[u8; 32]',
  BN: 'BlockNumber',
  ClassType: {
    _enum: {
      Simple: 'u32',
      Claim: 'HashByte32',
      Merge: '(CID, CID, bool)',
    },
  },
  ClassInfoOf: {
    metadata: 'CID',
    totalIssuance: 'TokenId',
    owner: 'AccountId',
    data: 'ClassData',
  },
  ClassData: {
    properties: 'Properties',
    start_block: 'Option<BN>',
    end_block: 'Option<BN>',
    class_type: 'ClassType<ID>',
  },
  DataSource: 'u64',
  EthAddress: '[u8; 20]',
  QueryKey: 'u64',
};

export default types;
