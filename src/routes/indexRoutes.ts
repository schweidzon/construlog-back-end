import { Router } from "express";
import userRoutes from "./users-routes";
import authenticationRoutes from "./authentication-routes";
import clientRoutes from "./clients-routes";
import adminRoutes from "./admins-routes-";
import constructionsRoutes from "./constructions-routes";
import photoRoutes from "./photos-routes";
import constructionsDiaryRoutes from "./constructions-diary-routes";

const routes = Router();

routes
  .use("/users", userRoutes)
  .use("/signin", authenticationRoutes)
  .use("/clients", clientRoutes)
  .use("/admins", adminRoutes)
  .use("/constructions", constructionsRoutes)
  .use("/photos", photoRoutes)
  .use("/constructions-diary", constructionsDiaryRoutes);

export default routes;
