import prisma from "@/config/database"
import {  CreateConstruction } from "@/protocols/constructionSignUpType"


async function createConstruction(data: CreateConstruction) {
    return prisma.constructions.create({
        data
    })

}

async function getConstructions(id: number, user_type: string) {
    if(user_type === 'admin') {
        return prisma.constructions.findMany({
            where: {
                admin_id: id
            }
        })

    } else {
        return prisma.constructions.findMany({
            where: {
                client_id: id
            }
        })
    }
   
}

const constructionRepository = {
    createConstruction,
    getConstructions
}

export default constructionRepository