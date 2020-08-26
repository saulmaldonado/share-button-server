import { Service } from '../types';
import { facebookMessengerGenerator } from './generators';
import { useCache } from './RedisHelpers';

export const facebookMessengerService: Service = async (url, ctx) => {
  if (!url) return null;
  const cacheField = 'facebookMessenger';

  const [getCache, setCache] = useCache(ctx, cacheField);

  const cachedUrl = await getCache(url);

  if (!cachedUrl) {
    const transformedUrl = facebookMessengerGenerator(url);
    await setCache(url, transformedUrl);
    return transformedUrl;
  } else {
    return cachedUrl;
  }
};
