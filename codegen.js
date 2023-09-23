module.exports = {
  schema: ["./api-server/**/*.graphql"],

  documents: ["./web/**/*.tsx", "./web/**/*.ts"],
  overwrite: true,
  generates: {
    "./common/src/generated/graphql.ts": {
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
      plugins: [
        {
          add: {
            content:
              "\
/* eslint-disable @typescript-eslint/no-explicit-any */\n\
/* eslint-disable @typescript-eslint/naming-convention */\n\
/* eslint-disable @typescript-eslint/ban-types */\n\
\n\
",
          },
        },
        "typescript",
        "typescript-operations",
      ],
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
