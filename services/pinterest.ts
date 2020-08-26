import { Service } from '../types';
import { pinterestGenerator } from './generators';
import { useCache } from './RedisHelpers';

export const pinterestService: Service = async (url, ctx) => {
  if (!url) return null;
  const cacheField = 'pinterest';

  const [getCache, setCache] = useCache(ctx, cacheField);

  const cachedUrl = await getCache(url);

  if (!cachedUrl) {
    const transformedUrl = pinterestGenerator(url);
    await setCache(url, transformedUrl);
    return transformedUrl;
  } else {
    return cachedUrl;
  }
};
