
interface Logger {
  info: (message: string, ...args: any[]) => void;
  error: (message: string, ...args: any[]) => void;
  warn: (message: string, ...args: any[]) => void;
  debug: (message: string, ...args: any[]) => void;
}

const createLogger = (): Logger => {
  const isDev = process.env.NODE_ENV === 'development';
  
  return {
    info: (message: string, ...args: any[]) => {
      if (isDev) console.info(`[INFO] ${message}`, ...args);
    },
    error: (message: string, ...args: any[]) => {
      console.error(`[ERROR] ${message}`, ...args);
    },
    warn: (message: string, ...args: any[]) => {
      if (isDev) console.warn(`[WARN] ${message}`, ...args);
    },
    debug: (message: string, ...args: any[]) => {
      if (isDev) console.debug(`[DEBUG] ${message}`, ...args);
    }
  };
};

export const logger = createLogger();
