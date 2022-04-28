export default [
  {
    name: 'substrate-balances',
    url: 'https://squid.litentry.io/balances/graphql',
  },
  {
    name: 'substrate-crowdloans',
    url: 'https://squid.litentry.io/crowdloans/graphql',
  },
  {
    name: 'substrate-governance',
    url: 'https://squid.litentry.io/governance/graphql',
  },
  {
    name: 'substrate-tips',
    url: 'https://squid.litentry.io/tips/graphql',
  },
  {
    name: 'eth',
    url: 'https://api.thegraph.com/subgraphs/name/litentry/identity-subgraph',
  },
  {
    name: 'bsc',
    url: 'https://api.thegraph.com/subgraphs/name/litentry/identity-subgraph-bsc',
  },
];

export const POLKASSEMBLY_URLS = {
  polkadot: 'https://polkadot.polkassembly.io/v1/graphql',
  kusama: 'https://kusama.polkassembly.io/v1/graphql'
}
