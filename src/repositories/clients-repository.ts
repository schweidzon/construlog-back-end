import prisma from "../config/database";
import { ClientSignUp } from "../protocols/ClientSignUp";

function findClientByUserId(user_id: number) {
  return prisma.clients.findFirst({
    where: {
      user_id,
    },
  });
}

function findClientById(client_id : number) {
  return prisma.clients.findFirst({
    where: {
      id: client_id
    }
  })
} 

function createClient(data: ClientSignUp) {
  return prisma.clients.create({
    data,
  });
}

function getAllClients() {
  return prisma.clients.findMany({});
}

const clientsRepository = {
  findClientByUserId,
  createClient,
  getAllClients,
  findClientById
};
export default clientsRepository;
