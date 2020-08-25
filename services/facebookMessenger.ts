import { Service } from '../types';

export const facebookMessengerService: Service = (url) => {
  if (!url) return Promise.resolve(null);
  return Promise.resolve('https://messenger.com');
};
