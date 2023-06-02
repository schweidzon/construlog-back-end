import { NextFunction, Request, Response } from "express"
import clientsService from '../services/clients-service'

async function findClientByEmail(req: Request, res:Response, next: NextFunction) {
    const userId= Number(req.query.user_id)
    console.log(userId)
    try {
        const client = await clientsService.findClientByEmail(userId)
        
        return res.send(client)
    } catch (error) {
        next(error)
    }
}

const clientsController = {
    findClientByEmail
}

export default clientsController