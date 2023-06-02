import prisma from "../config/database"
import { Session } from "../protocols/sessionType"

async function createSession(data: Session) {
    return prisma.session.create({data})
}

const sessionRepository = {
    createSession
}

export default sessionRepository