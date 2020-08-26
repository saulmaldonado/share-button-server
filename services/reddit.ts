import { Service } from '../types';
import { redditGenerator } from './generators';
import { useCache } from './RedisHelpers';

export const redditService: Service = async (url, ctx) => {
  if (!url) return null;
  const cacheField = 'reddit';

  const [getCache, setCache] = useCache(ctx, cacheField);

  const cachedUrl = await getCache(url);

  if (!cachedUrl) {
    const transformedUrl = redditGenerator(url);
    await setCache(url, transformedUrl);
    return transformedUrl;
  } else {
    return cachedUrl;
  }
};
