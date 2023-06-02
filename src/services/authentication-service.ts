import { users } from "@prisma/client";
import userRepository from "../repositories/users-repository";
import errors from "../errors/errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sessionRepository from "../repositories/sessions-repository";
import { exclude } from "../utils/exclude-util";

async function signIn({ email, password }: Omit<users, "id" | "user_type">) {
  const user = await checkUser(email);
  await validatePassowrd(password, user.password);
  const token = await createSession(user.id);
  console.log(token)
  return {
    user: exclude(user, 'password'),
    token
  }
}

async function checkUser(email: string) {
  const user = await userRepository.getUserByEmail(email);
  if (!user) throw errors.notFoundError();
  return user;
}

async function validatePassowrd(passowrd: string, userPassword: string) {
  const checkPassword = await bcrypt.compare(passowrd, userPassword);
  if (!checkPassword) throw errors.invalidCredentials();
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET || "senha_secreta");
  await sessionRepository.createSession({ token, user_id: userId });
  return token
}

const authService = {
  signIn,
};

export default authService;
