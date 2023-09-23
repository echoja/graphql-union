import { ApolloClient, InMemoryCache } from "@apollo/client";

export const GRAPHQL_ENDPOINT =
  process.env.GRAPHQL_ENDPOINT || "http://localhost:4000";

export const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});
