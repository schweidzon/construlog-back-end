import { AuthenticatedRequest } from "@/middlewares/auth-middleware"
import { ConstructionSignup } from "@/protocols/constructionSignUpType"
import constructionService from "@/services/constructions-service"
import { NextFunction, Request, Response } from "express"

async function createConstruction(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const {user_id} =  req 

   

    const {client_id, name} = req.body as ConstructionSignup

    console.log(client_id, 'cliente')
    try {

        const construction = await constructionService.createConstruction({user_id, client_id, name})
        
        return res.status(201).send(construction)
       
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function getConstructions(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const {user_id} = req;
    
    try {
            const constructions = await constructionService.getConstructions(user_id)
            return res.send(constructions)
    } catch (error) {
        next(error)
    }
}

const constructionsControllers = {
    createConstruction,
    getConstructions
}

export default constructionsControllers