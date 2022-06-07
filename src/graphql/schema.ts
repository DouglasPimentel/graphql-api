import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type User {
    id: String
    name: String
    email: String
  },  

  type Query {
    hello: String,
    me: User,
  } 
`);
