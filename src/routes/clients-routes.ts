import {Router} from 'express'
import clientsController from '../controllers/clients-controller'

const clientRoutes = Router()

clientRoutes.get("/", clientsController.findClientById).post("/signup", clientsController.createClient)


export default clientRoutes