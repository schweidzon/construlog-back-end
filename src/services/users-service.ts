import { EnrollUser } from "../protocols/userType";
import userRepository from "../repositories/users-repository";
import errors from "../errors/errors";
import bcrypt from "bcrypt";

async function createUser({ email, password, user_type }: EnrollUser) {
  await validateEmail(email);

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userRepository.createUser({
    email,
    password: hashedPassword,
    user_type,
  });
  console.log(user)
  return user;
}

 async function validateEmail(email: string) {
  const checkEmail = await userRepository.getUserByEmail(email);
  if (checkEmail) throw errors.conflictError("Email already exists");
}

const userService = {
  createUser,
};

export default userService;
