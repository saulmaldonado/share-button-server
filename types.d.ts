import { Context } from 'koa';

export type Sites = {
  facebook: string | null;
  facebookMessenger: string | null;
  reddit: string | null;
  pinterest: string | null;
  twitter: string | null;
  linkedin: string | null;
};

export type Service = (url: string | null, ctx: Context) => Promise<string | null>;
