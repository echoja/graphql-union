import { GraphQLResolveInfo } from "graphql";
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

export type IBiography = {
  __typename?: "Biography";
  author: Scalars["String"]["output"];
  subject: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type IBook = IBiography | IComic | INovel;

export type IBookType = "BIOGRAPHY" | "COMIC" | "NOVEL";

export type IComic = {
  __typename?: "Comic";
  author: Scalars["String"]["output"];
  illustrator: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type INovel = {
  __typename?: "Novel";
  author: Scalars["String"]["output"];
  genre: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type IQuery = {
  __typename?: "Query";
  books: Array<IBook>;
};

export type IQueryBooksArgs = {
  type?: InputMaybe<IBookType>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type IResolversUnionTypes<RefType extends Record<string, unknown>> = {
  Book: IBiography | IComic | INovel;
};

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  Biography: ResolverTypeWrapper<IBiography>;
  Book: ResolverTypeWrapper<IResolversUnionTypes<IResolversTypes>["Book"]>;
  BookType: IBookType;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Comic: ResolverTypeWrapper<IComic>;
  Novel: ResolverTypeWrapper<INovel>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Biography: IBiography;
  Book: IResolversUnionTypes<IResolversParentTypes>["Book"];
  Boolean: Scalars["Boolean"]["output"];
  Comic: IComic;
  Novel: INovel;
  Query: {};
  String: Scalars["String"]["output"];
};

export type IBiographyResolvers<
  ContextType = any,
  ParentType extends
    IResolversParentTypes["Biography"] = IResolversParentTypes["Biography"],
> = {
  author?: Resolver<IResolversTypes["String"], ParentType, ContextType>;
  subject?: Resolver<IResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<IResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IBookResolvers<
  ContextType = any,
  ParentType extends
    IResolversParentTypes["Book"] = IResolversParentTypes["Book"],
> = {
  __resolveType: TypeResolveFn<
    "Biography" | "Comic" | "Novel",
    ParentType,
    ContextType
  >;
};

export type IComicResolvers<
  ContextType = any,
  ParentType extends
    IResolversParentTypes["Comic"] = IResolversParentTypes["Comic"],
> = {
  author?: Resolver<IResolversTypes["String"], ParentType, ContextType>;
  illustrator?: Resolver<IResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<IResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type INovelResolvers<
  ContextType = any,
  ParentType extends
    IResolversParentTypes["Novel"] = IResolversParentTypes["Novel"],
> = {
  author?: Resolver<IResolversTypes["String"], ParentType, ContextType>;
  genre?: Resolver<IResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<IResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IQueryResolvers<
  ContextType = any,
  ParentType extends
    IResolversParentTypes["Query"] = IResolversParentTypes["Query"],
> = {
  books?: Resolver<
    Array<IResolversTypes["Book"]>,
    ParentType,
    ContextType,
    Partial<IQueryBooksArgs>
  >;
};

export type IResolvers<ContextType = any> = {
  Biography?: IBiographyResolvers<ContextType>;
  Book?: IBookResolvers<ContextType>;
  Comic?: IComicResolvers<ContextType>;
  Novel?: INovelResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
};
