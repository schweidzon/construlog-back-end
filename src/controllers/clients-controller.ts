import { NextFunction, Request, Response } from "express";
import clientsService from "../services/clients-service";

async function findClientById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = Number(req.query.user_id);
  console.log(userId);
  try {
    const client = await clientsService.findClientById(userId);

    return res.send(client);
  } catch (error) {
    next(error);
  }
}

const clientsController = {
  findClientById,
};

export default clientsController;
