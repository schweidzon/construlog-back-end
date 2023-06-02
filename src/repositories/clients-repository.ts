import prisma from "../config/database"

async function findClientById(user_id: number) {
    return prisma.clients.findFirst({
        where: {
            user_id
        }
    })
}

const clientsRepository = {
    findClientById
}
export default clientsRepository