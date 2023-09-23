import { IBook } from "./generated/graphql";

export const books: IBook[] = [
  {
    __typename: "Novel",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-age fiction",
  },
  {
    __typename: "Novel",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Southern Gothic",
  },
  {
    __typename: "Novel",
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian fiction",
  },
  {
    __typename: "Novel",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Tragedy",
  },
  {
    __typename: "Comic",
    title: "Watchmen",
    author: "Alan Moore",
    illustrator: "Dave Gibbons",
  },
  {
    __typename: "Comic",
    title: "Maus",
    author: "Art Spiegelman",
    illustrator: "Art Spiegelman",
  },
  {
    __typename: "Comic",
    title: "Batman: The Dark Knight Returns",
    author: "Frank Miller",
    illustrator: "Frank Miller",
  },
  {
    __typename: "Biography",
    title: "Steve Jobs",
    author: "Walter Isaacson",
    subject: "Steve Jobs",
  },
  {
    __typename: "Biography",
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    subject: "Henrietta Lacks",
  },
  {
    __typename: "Biography",
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    author: "Ashlee Vance",
    subject: "Elon Musk",
  },
];
