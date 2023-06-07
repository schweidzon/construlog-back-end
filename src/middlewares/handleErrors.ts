import { NextFunction, Request, Response } from "express";
import { ErrorType } from '../protocols/errorType'
import httpStatus from 'http-status'

export default function handleErrors(err: ErrorType, req: Request, res: Response, next: NextFunction) {
 
    if (err.name === "ConflictError") {
        return res.status(httpStatus.CONFLICT).send({
            message: err.name
        })
    }
     if (err.name === "NotFoundError") {
        return res.status(httpStatus.NOT_FOUND).send({
            message: err.message
        })
    }
    if (err.name === "InvalidCredentialsError") {
        return res.status(httpStatus.UNAUTHORIZED).send({
            message: err.message
        })
    }

    if(err.name === 'unauthorizedError') {
        return res.status(httpStatus.UNAUTHORIZED).send({
            message: err.message
        })
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message: "Internal Server Error"
    })

}

