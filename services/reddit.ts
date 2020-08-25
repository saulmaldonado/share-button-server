import { Service } from '../types';

export const redditService: Service = (url) => {
  if (!url) return Promise.resolve(null);
  return Promise.resolve('https://reddit.com');
};
