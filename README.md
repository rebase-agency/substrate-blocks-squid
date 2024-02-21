# Substrate Blocks Squid

🚀 Blazing fast* and simple real-time blocks indexer for EVM based chains with GraphQL API available out of the box which
can be quickly configured with environment variables and deployed anywhere with Docker. Details about deployment and
configuration will be described soon.

&ast; – the maximum indexing speed can be reached with Subsquid Gateways. The list of supported EVM chains can be found
[here](https://docs.subsquid.io/subsquid-network/reference/evm-networks).

More information about Squids and Subsquid protocol can be found in the [offical documentation](https://docs.subsquid.io).

## Local running

```bash
# 1. Install dependencies
npm ci

# 2. Start a Postgres database container and detach
sqd up

# 3. Build the squid
sqd build

# 4. Start both the squid processor and the GraphQL server
sqd run .
```

A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).

You can also start squid services one by one:

```bash
sqd process
sqd serve
```

## Project conventions

Squid tools assume a certain [project layout](https://docs.subsquid.io/basics/squid-structure):

* All compiled js files must reside in `lib` and all TypeScript sources in `src`.
  The layout of `lib` must reflect `src`.
* All TypeORM classes must be exported by `src/model/index.ts` (`lib/model` module).
* Database schema must be defined in `schema.graphql`.
* Database migrations must reside in `db/migrations` and must be plain js files.
* `sqd(1)` and `squid-*(1)` executables consult `.env` file for environment variables.
