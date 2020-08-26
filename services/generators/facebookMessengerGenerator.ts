import { Generator } from './types';
import qs from 'querystring';

export const facebookMessengerGenerator: Generator = (url) => {
  const messengerBaseUrl = 'http://www.facebook.com/dialog/send?display=popup&';
  const queryString = qs.stringify({ app_id: process.env.FB_APP_ID, link: url, redirect_uri: url });
  return `${messengerBaseUrl}${queryString}`;
};
