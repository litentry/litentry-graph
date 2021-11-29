import config from './config';

export default `mongodb+srv://${config.username}:${config.password}@${config.clusterUrl}/${config.databaseName}?retryWrites=true&w=majority`;
