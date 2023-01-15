import { Request, Response } from "express"
import { UserGetOneByIdService } from "../../service/auth/user/getOneById"



export class UserGetByIdController{
    constructor(){}

    static async getOneById(req: Request, res: Response){
        const {id} = req.params
        
        const data = await UserGetOneByIdService.getOneById(id)

        res.status(data.success ? 200 : 400).send(data)
    }
}