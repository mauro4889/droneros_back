import { NextFunction, Response } from "express";
import { JWTService } from "../service/jwt/service";
import { UserGetOneService } from "../service/user/getOne";


export const authenticate = async (req: any, res: Response, next: NextFunction) =>{
    try {
        const {authorization} = req.headers

        if(!authorization || !authorization.startsWith('Bearer')){
            throw 'No tenes Token'
        }

        const {1: token} = authorization.split(' ')

        if(!token){
            throw 'Token incorrecto'
        }

        const {id} = JWTService.verify(token)

        const {data} = await UserGetOneService.getOneById(id)
        req.user = data

        next()
    } catch (error) {
        next(error)
    }
}