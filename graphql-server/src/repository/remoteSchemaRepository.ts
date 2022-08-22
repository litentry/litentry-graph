import {
  readFileSync,
  writeFileSync,
  existsSync
} from 'fs';


export type RemoteSchema = {
  name: string,
  url: string
}

const path = '../data/schemas/remote-schemas.json';
let schemas: RemoteSchema[] = [];

const getAll = (): RemoteSchema[] => {
  if (!schemas.length && existsSync(path)) {
    schemas = JSON.parse(readFileSync(path).toString());
  }
  return schemas;
}

const setSchema = (schema: RemoteSchema) => {
  if (!schemas.length) {
    schemas = getAll();
  }

  const schemaToUpdate = schemas.find(cs => cs.name === schema.name);

  if (schemaToUpdate) {
    schemaToUpdate.url = schema.url;
  } else {
    schemas.push(schema)
  }

  writeFileSync(
    path,
    JSON.stringify(schemas)
  );
}

export default {
  getAll,
  setSchema
}

