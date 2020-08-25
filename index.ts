import Koa, { Context } from 'koa';
import redis from 'redis';
import { config } from 'dotenv';
import bodyParser from 'koa-bodyparser';

import { Sites } from './types';
import { facebookService } from './services/facebook';
import { facebookMessengerService } from './services/facebookMessenger';
import { pinterestService } from './services/pinterest';
import { redditService } from './services/reddit';
import { linkedinService } from './services/linkedin';
import { twitterService } from './services/twitter';

config();

const app = new Koa();
app.use(bodyParser());

const redisClient = redis.createClient();

redisClient.on('error', (error) => {
  console.error(error);
});

redisClient.on('connect', (what) => {
  console.log('redis connected');
});

app.use(async (ctx: Context) => {
  const {
    facebook,
    facebookMessenger,
    linkedin,
    pinterest,
    reddit,
    twitter,
  }: Sites = ctx.request.body;

  const urls = await Promise.all([
    facebookService(facebook),
    facebookMessengerService(facebookMessenger),
    pinterestService(pinterest),
    redditService(reddit),
    linkedinService(linkedin),
    twitterService(twitter),
  ]);

  ctx.body = JSON.stringify(urls);
});

const port = process.env.port ?? 5000;

app.listen({ port }, () => console.log(`Listening on port ${port}...`));
