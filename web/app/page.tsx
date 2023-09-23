import { client } from "@/graphql";
import { gql } from "@apollo/client";
import type { IExampleQuery, IExampleQueryVariables } from "common";

export default async function Home() {
  const res = await client.query<IExampleQuery, IExampleQueryVariables>({
    query: gql`
      query Example {
        books {
          title
        }
      }
    `,
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
