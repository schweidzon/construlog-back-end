import prisma from "../config/database"

async function findAdminById(user_id: number) {
    return prisma.admins.findFirst({
        where: {
            user_id
        }
    })
}

const adminRepository = {
    findAdminById
}
export default adminRepository