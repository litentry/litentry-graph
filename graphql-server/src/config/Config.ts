export default interface Config {
  remoteSchemaConfig: {
    name: string;
    url: string;
  }[];
  apiPort: number;
}
