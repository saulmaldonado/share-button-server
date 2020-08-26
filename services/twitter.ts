import { Service } from '../types';
import { useCache } from './RedisHelpers';

export const twitterService: Service = async (url, ctx) => {
  if (!url) return null;
  const cacheField = 'twitter';

  const [getCache, setCache] = useCache(ctx, cacheField);

  const cachedUrl = await getCache(url);

  if (!cachedUrl) {
    const newValue = 'https://twitter.com';
    await setCache(url, newValue);
    return newValue;
  } else {
    return cachedUrl;
  }
};
