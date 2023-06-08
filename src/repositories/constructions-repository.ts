import prisma from "@/config/database"
import {  CreateConstruction } from "@/protocols/constructionSignUpType"


async function createConstruction(data: CreateConstruction) {
    return prisma.constructions.create({
        data
    })

}

async function getConstructions() {
    return prisma.constructions.findMany({})
}

const constructionRepository = {
    createConstruction,
    getConstructions
}

export default constructionRepository