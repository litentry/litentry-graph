export default interface Config {
  remoteSchemaConfig: {
    name: 'eth' | 'bsc' | 'substrate';
    url: string;
  }[];
  apiPort: number;
}
