declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REDIS_URL?: string;
      PORT?: string;
    }
  }
}

export {};
