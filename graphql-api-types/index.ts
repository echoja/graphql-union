/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type IBook = {
  __typename?: "Book";
  author?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type IQuery = {
  __typename?: "Query";
  books: Array<IBook>;
};

export type IExampleQueryVariables = Exact<{ [key: string]: never }>;

export type IExampleQuery = {
  __typename?: "Query";
  books: Array<{ __typename?: "Book"; title?: string | null }>;
};
