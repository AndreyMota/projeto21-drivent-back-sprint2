import { Request, Response } from 'express';
import { createTicketService } from '@/services/tickets-service';

export const createTicketController = async (req: Request, res: Response) => {
  try {
    const { ticketTypeId } = req.body;

    // Adicione lógica para verificar a existência do usuário na inscrição (enrollment)
    // Adicione lógica para verificar se o ticketTypeId é fornecido

    const ticketData = {
      ticketTypeId,
      // Adicione outras propriedades do ticket aqui conforme necessário
    };

    const createdTicket = await createTicketService(ticketData);

    res.status(201).json(createdTicket);
  } catch (error) {
    console.error('Error creating ticket:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
