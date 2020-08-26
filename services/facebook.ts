import { Service } from '../types';
import { useCache } from './RedisHelpers';
import { facebookGenerator } from './generators';

export const facebookService: Service = async (url, ctx) => {
  if (!url) return null;
  const cacheField = 'facebook';

  const [getCache, setCache] = useCache(ctx, cacheField);

  const cachedUrl = await getCache(url);

  if (!cachedUrl) {
    const transformedUrl = facebookGenerator(url);
    await setCache(url, transformedUrl);
    return transformedUrl;
  } else {
    return cachedUrl;
  }
};
