import { Service } from '../types';
import { useCache } from './RedisHelpers';

export const linkedinService: Service = async (url, ctx) => {
  if (!url) return Promise.resolve(null);
  const cacheField = 'linkedin';

  const [getCache, setCache] = useCache(ctx, cacheField);

  const cachedUrl = await getCache(url);

  if (!cachedUrl) {
    const newValue = 'https://linkedin.com';
    await setCache(url, newValue);
    return newValue;
  } else {
    return cachedUrl;
  }
};
