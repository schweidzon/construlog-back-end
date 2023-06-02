import {Router} from 'express'
import clientsController from '../controllers/clients-controller'

const clientRoutes = Router()

clientRoutes.get("/", clientsController.findClientByEmail)


export default clientRoutes