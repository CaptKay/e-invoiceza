import cors from 'cors';
import express, { type Express } from 'express';
import helmet from 'helmet';

import type { AppConfig } from './config/env.js';
import { createRootRouter } from './routes/index.js';

export const createApp = (config: AppConfig): Express => {
  const app = express();

  app.disable('x-powered-by');
  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: '1mb' }));

  app.use(config.apiPrefix, createRootRouter());

  return app;
};
