import errors from "../errors/errors";
import adminRepository from "../repositories/admin-repository";
import userRepository from "../repositories/users-repository";

async function findAdminById(user_id: number) {
  await validateUserById(user_id);

  const admin = await adminRepository.findAdminById(user_id);

  if (!admin) throw errors.notFoundError();

  return admin;
}

async function validateUserById(user_id: number) {
  const checkUser = await userRepository.getUserById(user_id);
  if (!checkUser) throw errors.notFoundError();
}

const adminService = {
    findAdminById,
};

export default adminService;
