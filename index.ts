import Koa, { Context } from 'koa';
import redis from 'redis';
import { config } from 'dotenv';

config();

const app = new Koa();
const redisClient = redis.createClient();

redisClient.on('error', (error) => {
  console.error(error);
});

redisClient.on('connect', (what) => {
  console.log('redis connected');
});

app.use(async (ctx: Context) => {
  ctx.body = 'Hello World!';
});

const port = process.env.port ?? 5000;

app.listen({ port }, () => console.log(`Listening on port ${port}...`));
