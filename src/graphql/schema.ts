import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    authors: [Author]!,
    author(id: ID!): Author!
    books: [Book]!
  }

  type Mutation {
    createdAuthor(name: String!, email: String!): Author!
    createdBook(title: String!, resume: String!, link: String!, authorId: ID!): Book!
  }

  type Author {
    id: ID!
    name: String!
    email: String!
    books: [Book!]
  }

  type Book {
    id: ID!
    title: String!
    resume: String!
    link: String!
    authorId: ID!
  }
`);
