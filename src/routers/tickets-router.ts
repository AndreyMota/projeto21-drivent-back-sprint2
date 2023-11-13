import { Router } from "express";
import { authenticateToken } from "@/middlewares";

const ticketRouter = Router()

ticketRouter.post('/tickets', authenticateToken);
ticketRouter.get('/tickets', authenticateToken);
ticketRouter.get('/tickets/types', authenticateToken);

export { ticketRouter };