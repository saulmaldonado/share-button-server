import { Service } from '../types';

export const pinterestService: Service = (url) => {
  if (!url) return Promise.resolve(null);
  return Promise.resolve('https://pinterest.com');
};
