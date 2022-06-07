import { graphql } from 'graphql';
import { schema } from './schema';
import { root } from './root';

describe('GraphQL schema test', () => {
  it('should return a message hello world', async () => {
    const query = `
      query MyQuery {
        hello
      }
    `;

    const { data } = await graphql({ schema, source: query, rootValue: root });

    expect(data).toEqual({ hello: 'Hello world!' });
  });

  it('should return a user', async () => {
    const query = `
    query MyQuery {
      me {
        id
        name
        email
      }
    }
  `;

    const { data } = await graphql({ schema, source: query, rootValue: root });

    expect(data).toEqual({
      me: { id: '123', name: 'John Doe', email: 'johndoe@test.com' },
    });
  });
});
