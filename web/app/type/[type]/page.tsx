import { Biography, Comic, Novel } from "@/components/book";
import { gql } from "@/generated/graphql";
import { BookType } from "@/generated/graphql/graphql";
import { client } from "@/graphql";

export default async function Books({
  params,
}: {
  params: { type: BookType };
}) {
  const res = await client.query({
    query: gql(/* GraphQL */ `
      query BooksByType($type: BookType) {
        books(type: $type) {
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
    variables: {
      type: params.type,
    },
  });
  return (
    <main>
      <h1 className="m-10 text-3xl font-bold">{params.type}</h1>
      {res.data.books.map((book) => {
        switch (book.__typename) {
          case "Novel":
            return <Novel key={book.title} {...book} />;
          case "Comic":
            return <Comic key={book.title} {...book} />;
          case "Biography":
            return <Biography key={book.title} {...book} />;
        }
      })}
    </main>
  );
}
