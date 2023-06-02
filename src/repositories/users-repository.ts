import prisma from "../config/database";
import { EnrollUser } from "../protocols/userType";

async function createUser(data: EnrollUser) {
  return prisma.users.create({
    data,
  });
}

async function getUserByEmail(email: string) {
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
}

async function getUserById(user_id: number) {
  return prisma.users.findFirst({
    where: {
      id: user_id
    }
  })
}

const userRepository = {
  createUser,
  getUserByEmail,
  getUserById
};

export default userRepository;
