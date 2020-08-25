import { Service } from '../types';

export const facebookService: Service = (url) => {
  if (!url) return Promise.resolve(null);
  return Promise.resolve('https://facebook.com');
};
