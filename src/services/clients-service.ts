import errors from "../errors/errors";
import clientsRepository from "../repositories/clients-repository";
import userRepository from "../repositories/users-repository";

async function findClientByEmail(user_id: number) {
  await validateUserById(user_id);

  const client = await clientsRepository.findClientById(user_id);

  if (!client) throw errors.notFoundError();

  return client;
}

async function validateUserById(user_id: number) {
  const checkUser = await userRepository.getUserById(user_id);
  if (!checkUser) throw errors.notFoundError();
}

const clientsService = {
  findClientByEmail,
};

export default clientsService;
