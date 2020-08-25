import { Service } from '../types';

export const twitterService: Service = (url) => {
  if (!url) return Promise.resolve(null);
  return Promise.resolve('https://twitter.com');
};
