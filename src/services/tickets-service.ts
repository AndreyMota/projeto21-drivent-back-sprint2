
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTicketService = async (ticketData: any) => {
  try {

    const createdTicket = await prisma.ticket.create({
      data: {
        ticketTypeId: ticketData.ticketTypeId,
        userId: ticketData.userId,
    
      },
    });

    return createdTicket;
  } catch (error) {
    console.error('Error creating ticket in service:', error);
    throw new Error('Error creating ticket.');
  }
};



export const checkUserEnrollment = async (userId: number): Promise<boolean> => {
  try {

    const enrollment = await prisma.enrollment.findUnique({ where: { userId } });
    return !!enrollment;
  } catch (error) {
    console.error('Error checking user enrollment:', error);
    throw new Error('Error checking user enrollment.');
  }
};
