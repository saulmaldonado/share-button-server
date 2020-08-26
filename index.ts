import Koa, { Context } from 'koa';
import redis from 'redis';
import { config } from 'dotenv';
import bodyParser from 'koa-bodyparser';
import Router from '@koa/router';

import { Sites } from './types';
import {
  facebookMessengerService,
  facebookService,
  linkedinService,
  pinterestService,
  redditService,
  twitterService,
} from './services';

config();

const app = new Koa();
const router = new Router();

const redisClient = redis.createClient();

app.context.redis = redisClient;

redisClient.on('error', (error) => {
  console.error(error);
});

redisClient.on('connect', () => {
  console.log('redis connected');
});

router.post('/', async (ctx: Context) => {
  const {
    facebook,
    facebookMessenger,
    linkedin,
    pinterest,
    reddit,
    twitter,
  }: Sites = ctx.request.body;

  const urls = await Promise.all([
    facebookService(facebook, ctx),
    facebookMessengerService(facebookMessenger, ctx),
    pinterestService(pinterest, ctx),
    redditService(reddit, ctx),
    linkedinService(linkedin, ctx),
    twitterService(twitter, ctx),
  ]);

  ctx.body = JSON.stringify(urls);
});

app.use(bodyParser());
app.use(router.routes());

const port = process.env.PORT ?? 5000;

app.listen({ port }, () => console.log(`Listening on port ${port}...`));
