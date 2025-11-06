import { Router } from 'express';

import { healthRouter } from './health.route.js';

export const createRootRouter = (): Router => {
  const router = Router();

  router.use('/health', healthRouter);

  return router;
};
