import Koa, { Context } from 'koa';
import redis from 'redis';
import { config } from 'dotenv';
import bodyParser from 'koa-bodyparser';
import Router from '@koa/router';
import cors from '@koa/cors';

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
app.use(cors({ origin: '*' }));
const router = new Router({ prefix: process.env.ROUTE_PREFIX });

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

  let urls = await Promise.all([
    facebookService(facebook, ctx),
    facebookMessengerService(facebookMessenger, ctx),
    pinterestService(pinterest, ctx),
    redditService(reddit, ctx),
    linkedinService(linkedin, ctx),
    twitterService(twitter, ctx),
  ]);

  const urlMap = {
    facebook: urls[0],
    facebookMessenger: urls[1],
    pinterest: urls[2],
    reddit: urls[3],
    linkedin: urls[4],
    twitter: urls[5],
  };

  ctx.body = JSON.stringify(urlMap);
});

app.use(bodyParser());
app.use(router.routes());

const port = process.env.PORT ?? 5000;

app.listen({ port }, () => console.log(`Listening on port ${port}...`));
