import { users } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import authService from "../services/authentication-service";

async function signIn(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body as Omit<users, "id" | "user_type">;
  console.log(email)
  try {
    const user = await authService.signIn({ email, password });
    return res.send(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const authController = {
  signIn,
};

export default authController;
