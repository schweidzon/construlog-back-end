import joi from 'joi'
import { users } from '@prisma/client'

const userSchema = joi.object<Omit<users, 'id'>>({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    user_type: joi.string().valid("client", "admin").required()
})

export default userSchema