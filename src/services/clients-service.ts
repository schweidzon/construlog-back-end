import errors from "../errors/errors";
import { ClientSignUp } from "../protocols/ClientSignUp";
import clientsRepository from "../repositories/clients-repository";
import userRepository from "../repositories/users-repository";

async function findClientById(user_id: number) {
  await validateUserById(user_id);

  const client = await clientsRepository.findClientByUserId(user_id);

  if (!client) throw errors.notFoundError();

  return client;
}

async function createClient({ name, user_id }: ClientSignUp) {
  const user = await validateUserById(user_id)
  if(user.user_type !== 'client') throw errors.unauthorizedError()
  const client = await validateClientByUserId(user_id)
  if(client) errors.conflictError("Client já cadastrado")
 const newClient = await clientsRepository.createClient({name, user_id})
 return newClient
}


async function validateUserById(user_id: number) {
  const checkUser = await userRepository.getUserById(user_id);
  if (!checkUser) throw errors.notFoundError();
  return checkUser
}


async function validateClientByUserId(user_id: number) {
  const admin = await clientsRepository.findClientByUserId(user_id);

  return admin;
}

async function getAllClients() {
  const clients = await clientsRepository.getAllClients()
  if(!clients) throw errors.notFoundError()
  return clients
}

const clientsService = {
  findClientById,
  createClient,
  getAllClients
};

export default clientsService;
