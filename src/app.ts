import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { graphqlHTTP } from 'koa-graphql';
import koaPlayground from 'graphql-playground-middleware-koa';
import { schema } from './schema';

const app: Koa = new Koa();
const router: Router = new Router();

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

router.get('/', (ctx: Koa.ParameterizedContext) => {
  ctx.status = 200;
  ctx.body = {
    message: 'GraphQL API',
  };
});

router.all('/graphql', graphqlHTTP({ schema, graphiql: true }));
router.all('/playground', koaPlayground({ endpoint: '/graphql' }));

export default app;
