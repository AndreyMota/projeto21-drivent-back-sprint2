import { Router } from 'express';
import { authenticateToken } from '@/middlewares';

const paymentRouter = Router();

paymentRouter.post('/process', authenticateToken);
paymentRouter.get('/', authenticateToken);

export { paymentRouter };
