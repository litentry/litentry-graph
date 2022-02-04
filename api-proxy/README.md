# API Proxy

Our API Proxy serves the subchemas (defined in `./subschemas/subschema-name`).

## Getting Started

- `yarn` (from repo root - it'll build all the packages)
- `yarn dev` (from this directory)

_If you are working on one of the packages you will need to rebuild the `dist` folder for that package. In another terminal folder `cd` into the package and run `yarn watch` or `yarn build`._

## Subschemas

These are the schemas we control the code of, they belong in `./subschemas` and should be npm packages that export the schema using `makeExecutableSchema` from `@graphql-tools/schema`.

