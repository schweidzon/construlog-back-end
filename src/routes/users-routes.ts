import {Router} from 'express'
import usersControllers from '../controllers/users-controllers'
import {validateSchema} from '../middlewares/validateSchema'
import userSchema from '../schemas/users-schema'

const userRoutes = Router()

userRoutes.post("/signup", validateSchema(userSchema),usersControllers.createUser)


export default userRoutes