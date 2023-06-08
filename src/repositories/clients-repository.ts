import prisma from "../config/database"
import { ClientSignUp } from "../protocols/ClientSignUp"

async function findClientById(user_id: number) {
    return prisma.clients.findFirst({
        where: {
            user_id
        }
    })
}

function findClientByUserId(user_id: number) {
    return prisma.clients.findFirst({
        where: {
            user_id
        }
    })
}   

function createClient(data: ClientSignUp) {
    return prisma.clients.create({
        data
    })
}

function getAllClients() {
    return prisma.clients.findMany({})
}

const clientsRepository = {
    findClientById,
    findClientByUserId,
    createClient,
    getAllClients
}
export default clientsRepository