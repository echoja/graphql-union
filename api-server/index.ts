import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { IQuery, IQueryBooksArgs } from "graphql-api-types";
import { books } from "./books";

const typeDefs = readFileSync("./schema.graphql").toString("utf-8");

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: async (
      _parent: unknown,
      args: IQueryBooksArgs,
    ): Promise<IQuery["books"]> => {
      switch (args.type) {
        case "NOVEL":
          return books.filter((book) => book.__typename === "Novel");
        case "BIOGRAPHY":
          return books.filter((book) => book.__typename === "Biography");
        case "COMIC":
          return books.filter((book) => book.__typename === "Comic");
        default:
          return books;
      }
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
