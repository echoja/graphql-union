import { ApolloServer, BaseContext } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { books } from "./books";
import { IResolvers } from "./generated/graphql";

const typeDefs = readFileSync("src/schema.graphql").toString("utf-8");

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.

const resolvers: IResolvers = {
  Query: {
    books: async (_parent, args) => {
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
const server = new ApolloServer<BaseContext>({
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
