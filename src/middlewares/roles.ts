import { NextFunction, Request, Response } from "express";
import { JWTService } from "../service/jwt/service";


export const isAdmin = async (req: any, res: Response, next: NextFunction)=> {
    try {
        const {authorization} = req.headers

        const {1: token} = authorization.split(' ')

        const {role} = JWTService.verify(token)
        
        if (role !== "ADMIN"){
            throw 'No tienes permisios'
        }

        next()
    } catch (error) {
        next(error)
    }
}

export const isUser = async (req: any, res: Response, next: NextFunction)=> {
    try {
        const {authorization} = req.headers

        const {1: token} = authorization.split(' ')

        const {role} = JWTService.verify(token)
        
        if (role !== "USER"){
            throw 'No tienes permisos'
        }

        next()
    } catch (error) {
        next(error)
    }
}