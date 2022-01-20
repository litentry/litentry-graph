export default interface Config {
  remoteSchemaConfig: {
    name: 'eth' | 'bsc' | 'khala';
    url: string;
  }[];
  apiPort: number;
}
