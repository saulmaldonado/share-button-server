import { Service } from '../types';
import { twitterGenerator } from './generators';
import { useCache } from './RedisHelpers';

export const twitterService: Service = async (url, ctx) => {
  if (!url) return null;
  const cacheField = 'twitter';

  const [getCache, setCache] = useCache(ctx, cacheField);

  const cachedUrl = await getCache(url);

  if (!cachedUrl) {
    const transformedUrl = twitterGenerator(url);
    await setCache(url, transformedUrl);
    return transformedUrl;
  } else {
    return cachedUrl;
  }
};
