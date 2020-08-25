import { Service } from '../types';

export const linkedinService: Service = (url) => {
  if (!url) return Promise.resolve(null);
  return Promise.resolve('https://linkedin.com');
};
