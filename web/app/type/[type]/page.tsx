import { Biography, Comic, Novel } from "@/components/render-books";
import { client } from "@/graphql";
import { gql } from "@apollo/client";
import {
  IBook,
  IBookType,
  IBooksByTypeQuery,
  IBooksByTypeQueryVariables,
} from "graphql-api-types";

export const renderBooks = (books: IBook[]) => {
  return books.map((book) => {
    switch (book.__typename) {
      case "Novel":
        return <Novel key={book.title} {...book} />;
      case "Comic":
        return <Comic key={book.title} {...book} />;
      case "Biography":
        return <Biography key={book.title} {...book} />;
    }
  });
};

export default async function Books({
  params,
}: {
  params: { type: IBookType };
}) {
  const res = await client.query<IBooksByTypeQuery, IBooksByTypeQueryVariables>(
    {
      query: gql`
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
      `,
      variables: {
        type: params.type,
      },
    },
  );
  return (
    <main>
      <h1 className="m-10 text-3xl font-bold">{params.type}</h1>
      {renderBooks(res.data.books)}
    </main>
  );
}
