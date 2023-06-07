import errors from "../errors/errors";
import { AdminSignUp } from "../protocols/adminSingUpType";
import adminRepository from "../repositories/admin-repository";
import userRepository from "../repositories/users-repository";

async function findAdminById(user_id: number) {
  await validateUserById(user_id);

  const admin = await validateAdminByUserId(user_id);

  if (!admin) throw errors.notFoundError();

  return admin;
}

async function createAdmin({ name, job, user_id }: AdminSignUp) {
  const user = await validateUserById(user_id)
  if(user.user_type!== "admin") throw errors.unauthorizedError()
  const admin = await validateAdminByUserId(user_id);
  if (admin) throw errors.conflictError("Administrador já registrado");
  const newAdmin = adminRepository.createAdmin({ name, job, user_id });
  return newAdmin;
}

async function validateUserById(user_id: number) {
  const checkUser = await userRepository.getUserById(user_id);
  if (!checkUser) throw errors.notFoundError();
  return checkUser
}

async function validateAdminByUserId(user_id: number) {

  const admin = await adminRepository.findAdminById(user_id);
  

  return admin;
}

const adminService = {
  findAdminById,
  createAdmin,
};

export default adminService;
