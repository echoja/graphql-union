import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "./web/generated/graphql/": {
      schema: ["./api-server/**/*.graphql"],
      documents: ["./web/**/*.tsx", "./web/**/*.ts", "!./web/generated/**/*"],
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        enumsAsTypes: true,
      },
    },
    "./api-server/generated/graphql.ts": {
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
      schema: ["./api-server/**/*.graphql"],
      plugins: ["typescript"],
      config: {
        typesPrefix: "I",
        enumsAsTypes: true,
        skipTypename: false,
        scalars: {
          jsonb: "any",
          JSON: "any",
        },
      },
    },
  },
};

export default config;
