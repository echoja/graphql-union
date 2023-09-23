import { gql } from "@/generated/graphql";
import { client } from "@/graphql";

export default async function Home() {
  const res = await client.query({
    query: gql(/* GraphQL */ `
      query Example {
        books {
          ... on Novel {
            author
            title
            genre
          }
          ... on Comic {
            author
            title
            illustrator
          }
          ... on Biography {
            author
            title
            subject
          }
        }
      }
    `),
  });

  return (
    <main>
      <h1 className="m-10 text-3xl font-bold">GraphQL Union</h1>
      <pre className="rounded px-6 py-4 shadow bg-slate-50 text-sm m-10">
        {JSON.stringify(res.data, null, 2)}
      </pre>
    </main>
  );
}
