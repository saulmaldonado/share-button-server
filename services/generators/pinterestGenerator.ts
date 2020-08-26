import { Generator } from './types';
import qs from 'querystring';

export const pinterestGenerator: Generator = (url) => {
  const pinterestBaseUrl = 'http://pinterest.com/pin/create/button/?';
  const queryString = qs.stringify({ url: url });
  return `${pinterestBaseUrl}${queryString}`;
};
