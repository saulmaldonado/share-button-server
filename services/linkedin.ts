import { Service } from '../types';
import { linkedinGenerator } from './generators';
import { useCache } from './RedisHelpers';

export const linkedinService: Service = async (url, ctx) => {
  if (!url) return null;
  const cacheField = 'linkedin';

  const [getCache, setCache] = useCache(ctx, cacheField);

  const cachedUrl = await getCache(url);

  if (!cachedUrl) {
    const transformedUrl = linkedinGenerator(url);
    await setCache(url, transformedUrl);
    return transformedUrl;
  } else {
    return cachedUrl;
  }
};
