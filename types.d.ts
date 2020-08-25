export type Sites = {
  facebook?: string;
  facebookMessenger?: string;
  reddit?: string;
  pinterest?: string;
  twitter?: string;
  linkedin?: string;
};

export type Service = (url?: string, options?: any) => Promise<string | null>;
