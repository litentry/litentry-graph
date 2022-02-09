FROM node:14
WORKDIR /

COPY package.json .
COPY yarn.lock .
COPY subschemas ./subschemas
COPY graphql-server ./graphql-server

RUN yarn install --pure-lockfile --non-interactive

EXPOSE 5000
CMD [ "yarn", "run", "start" ]