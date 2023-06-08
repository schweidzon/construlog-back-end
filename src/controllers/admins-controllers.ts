import { NextFunction, Request, Response } from "express";
import adminService from "../services/admin-service";
import { AdminSignUp } from "../protocols/adminSingUpType";

async function findAdminById(req: Request, res: Response, next: NextFunction) {
  const userId = Number(req.query.user_id);

  try {
    const admin = await adminService.findAdminById(userId);
    
    return res.send(admin);
  } catch (error) {
    next(error);
  }
}

async function createAdmin(req: Request, res: Response, next: NextFunction) {
  const { name, job, user_id} = req.body as AdminSignUp;
  try {
    const admin = await adminService.createAdmin({ name, job, user_id });
    return res.status(201).send(admin);
  } catch (error) {
    console.log(error)
    next(error);
  }
}

const adminController = {
  findAdminById,
  createAdmin,
};

export default adminController;
