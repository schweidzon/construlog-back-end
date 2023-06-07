import prisma from "../config/database"
import { AdminSignUp } from "../protocols/adminSingUpType"

 function findAdminById(user_id: number) {
    console.log(user_id)
    return prisma.admins.findFirst({
        where: {
            user_id
        }
    })
}

function createAdmin(data: AdminSignUp) {
    return prisma.admins.create({
        data
    })
}

const adminRepository = {
    findAdminById,
    createAdmin
}
export default adminRepository