 import {Router} from 'express'
 import userRoutes from './users-routes'
 import authenticationRoutes from './authentication-routes'
 import clientRoutes from './clients-routes'


 const routes = Router();

 routes.use("/users", userRoutes).use("/signin", authenticationRoutes).use("/clients", clientRoutes)

export default routes