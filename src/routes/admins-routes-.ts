import {Router} from 'express'
import adminController from '../controllers/admins-controllers'

const adminRoutes = Router()

adminRoutes.get("/", adminController.findAdminById).post("/signup", adminController.createAdmin)


export default adminRoutes