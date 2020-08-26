import { RedisClient } from 'redis';
import { Context } from 'koa';

export const asyncGet = async (
  client: RedisClient,
  key: string,
  field: string
): Promise<string | null> => {
  return new Promise<string>((resolve, reject) =>
    client.hget(key, field, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    })
  );
};

export const asyncSet = async (client: RedisClient, key: string, field: string, value: string) => {
  return new Promise<number>((resolve, reject) => {
    client.hset(key, field, value, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

type useCacheTuple = [
  (url: string) => Promise<string | null>,
  (url: string, value: string) => Promise<void>
];

export const useCache = (ctx: Context, cacheField: string): useCacheTuple => {
  const redisClient = ctx.redis as RedisClient;

  let val: string | null;

  const getCache = async (url: string) => {
    try {
      val = await asyncGet(redisClient, url, cacheField);
      console.log(`from cache: ${val}`);
    } catch (error) {
      console.error(error);
    }
    return val;
  };

  const setCache = async (url: string, value: string) => {
    try {
      await asyncSet(redisClient, url, cacheField, value);
    } catch (error) {
      console.error(error);
    }
    console.log(`set: ${url}: ${value}`);
    val = value;
  };

  return [getCache, setCache];
};
