import { Service } from '../types';
import { useCache } from './RedisHelpers';

export const pinterestService: Service = async (url, ctx) => {
  if (!url) return Promise.resolve(null);
  const cacheField = 'pinterest';

  const [getCache, setCache] = useCache(ctx, cacheField);

  const cachedUrl = await getCache(url);

  if (!cachedUrl) {
    const newValue = 'https://pinterest.com';
    await setCache(url, newValue);
    return newValue;
  } else {
    return cachedUrl;
  }
};
