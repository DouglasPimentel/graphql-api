import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      message: {
        type: GraphQLString,
        resolve: () => 'GraphQL API',
      },
    },
  }),
});
