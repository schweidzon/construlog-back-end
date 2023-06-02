import { NextFunction, Request, Response } from "express";
import userService from "../services/users-service";

async function createUser(req: Request, res: Response, next: NextFunction) {
  const { email, password, user_type } = req.body;
  try {
    const user = await userService.createUser({ email, password, user_type });

    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const usersControllers = {
  createUser,
};

export default usersControllers;
