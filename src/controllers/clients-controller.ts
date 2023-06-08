import { NextFunction, Request, Response } from "express";
import clientsService from "../services/clients-service";
import {ClientSignUp} from '../protocols/ClientSignUp'

async function findClientById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = Number(req.query.user_id);
  try {
    const client = await clientsService.findClientById(userId);

    return res.send(client);
  } catch (error) {
    console.log(error)
    next(error);
  }
}

async function createClient(req: Request, res: Response, next: NextFunction) {
  const { name, user_id } = req.body as ClientSignUp;
  try {
    const client = await clientsService.createClient({ name, user_id });
    return res.status(201).send(client);
  } catch (error) {
   
    next(error);
  }
}

async function getAllClients(req: Request, res: Response, next: NextFunction) {
  console.log('poi')
  try {
      const clients = await clientsService.getAllClients()
      return res.send(clients)
  } catch (error) {
    next(error)
  }
}

const clientsController = {
  findClientById,
  createClient,
  getAllClients
};

export default clientsController;
