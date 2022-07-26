import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { graphqlHTTP } from 'koa-graphql';
import koaPlayground from 'graphql-playground-middleware-koa';
import { schema } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import startDatabase from './ database';

const app: Koa = new Koa();
const router: Router = new Router();

const context = async () => {
  const db = await startDatabase();

  return { db };
};

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

router.get('/', (ctx: Koa.ParameterizedContext) => {
  ctx.status = 200;
  ctx.body = {
    message: 'GraphQL API',
  };
});

router.all(
  '/graphql',
  graphqlHTTP({ schema, rootValue: resolvers, context, graphiql: true }),
);
router.all('/playground', koaPlayground({ endpoint: '/graphql' }));

export default app;
