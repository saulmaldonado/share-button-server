import { Generator } from './types';
import qs from 'querystring';

export const redditGenerator: Generator = (url) => {
  const redditBaseUrl = 'https://www.reddit.com/submit?';
  const queryString = qs.stringify({ url: url });
  return `${redditBaseUrl}${queryString}`;
};
