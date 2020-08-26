import { Generator } from './types';
import qs from 'querystring';

export const twitterGenerator: Generator = (url) => {
  const twitterBaseUrl = 'https://twitter.com/intent/tweet?';
  const queryString = qs.stringify({ url: url });
  return `${twitterBaseUrl}${queryString}`;
};
