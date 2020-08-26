declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      FB_APP_ID?: string;
      ROUTE_PREFIX?: string;
    }
  }
}

export {};
