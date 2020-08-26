import { Generator } from './types';
import qs from 'querystring';

export const facebookGenerator: Generator = (url) => {
  const fbBaseUrl = 'https://facebook.com/sharer.php?display=popup&';
  const queryString = qs.stringify({ u: url });
  return `${fbBaseUrl}${queryString}`;
};
