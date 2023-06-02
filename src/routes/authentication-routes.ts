import {Router} from 'express'
import usersControllers from '../controllers/users-controllers'
import {validateSchema} from '../middlewares/validateSchema'
import authSchema from '../schemas/authentication-schema'
import authController from '../controllers/authentication-controllers'

const authenticationRoutes = Router()

authenticationRoutes.post("/", validateSchema(authSchema),authController.signIn)

export default authenticationRoutes