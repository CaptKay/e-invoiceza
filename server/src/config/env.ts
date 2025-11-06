import 'dotenv/config';

const fallbackPort = 4000;

export interface AppConfig {
  readonly nodeEnv: string;
  readonly port: number;
  readonly apiPrefix: string;
}

export const loadConfig = (): AppConfig => {
  const nodeEnv = process.env.NODE_ENV ?? 'development';
  const port = Number(process.env.PORT ?? fallbackPort);

  return {
    nodeEnv,
    port: Number.isNaN(port) ? fallbackPort : port,
    apiPrefix: process.env.API_PREFIX ?? '/api/v1'
  } satisfies AppConfig;
};
