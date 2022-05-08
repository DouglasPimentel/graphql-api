import supertest from 'supertest';
import { graphql } from 'graphql';
import app from './app';
import { schema } from './schema';

describe('Root route test', () => {
  it('should return message hello world', async () => {
    const response = await supertest(app.callback()).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'GraphQL API' });
  });
});

describe('GraphQL test', () => {
  it('Graphql query test', async () => {
    const query = `
      query MyQuery {
        message
      }
    `;

    const rootValue = {};
    const { data } = await graphql({ schema, source: query, rootValue });

    expect(data).toEqual({ message: 'GraphQL API' });
  });
});
