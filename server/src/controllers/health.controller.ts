import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import type { HealthResponse } from '../schemas/health.schema.js';
import { healthResponseSchema } from '../schemas/health.schema.js';
import { successResponse } from '../utils/api-response.js';

export const healthController = (_req: Request, res: Response): void => {
  const payload: HealthResponse = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '0.1.0'
  };

  const body = healthResponseSchema.parse(payload);
  res.status(StatusCodes.OK).json(successResponse(body));
};
