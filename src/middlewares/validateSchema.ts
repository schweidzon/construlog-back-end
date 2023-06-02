import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import httpStatus from 'http-status'

export function validateSchema(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {    
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        
        return res.status(httpStatus.BAD_REQUEST).send(error.details.map((detail) => detail.message));
      }
  
      next();
    };
  }