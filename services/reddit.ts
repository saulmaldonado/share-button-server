import { Service } from '../types';
import { useCache } from './RedisHelpers';

export const redditService: Service = async (url, ctx) => {
  if (!url) return Promise.resolve(null);
  const cacheField = 'reddit';

  const [getCache, setCache] = useCache(ctx, cacheField);

  const cachedUrl = await getCache(url);

  if (!cachedUrl) {
    const newValue = 'https://reddit.com';
    await setCache(url, newValue);
    return newValue;
  } else {
    return cachedUrl;
  }
};
