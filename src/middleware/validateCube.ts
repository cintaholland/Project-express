import { NextFunction, Request, Response } from "express"
import Joi from "joi"

/** create validation schema */
let schema = Joi.object({
    p: Joi.number().required().min(1), 
    l: Joi.number().required().min(1),
    t: Joi.number().required().min(1)
})

/** create validation function */
let validateCube = (request:Request, response:Response, next:NextFunction) => {
    let {error} = schema.validate (request.body)
    if(error){
        /** status 400 is bad request */
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

export {validateCube}