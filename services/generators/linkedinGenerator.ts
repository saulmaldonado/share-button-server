import { Generator } from './types';
import qs from 'querystring';

export const linkedinGenerator: Generator = (url) => {
  const linkedinBaseUrl = 'https://www.linkedin.com/sharing/share-offsite/?';
  const queryString = qs.stringify({ url: url });
  return `${linkedinBaseUrl}${queryString}`;
};
