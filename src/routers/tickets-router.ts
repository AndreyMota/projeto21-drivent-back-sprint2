import { Router } from 'express';
import { authenticateToken } from '@/middlewares';

const ticketRouter = Router();

ticketRouter.post('/', authenticateToken);
ticketRouter.get('/', authenticateToken);
ticketRouter.get('/types', authenticateToken);

export { ticketRouter };
