import constructionsControllers from "@/controllers/constructions-controllers";
import { authenticateToken } from "@/middlewares/auth-middleware";
import { Router } from "express";

const constructionsRoutes = Router();

constructionsRoutes
  .post(
    "/signup",
    authenticateToken,
    constructionsControllers.createConstruction
  )
  .get("/", authenticateToken, constructionsControllers.getConstructions);

export default constructionsRoutes;
