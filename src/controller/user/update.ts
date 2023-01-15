import { Request, Response } from "express"
import { UserUpdateService } from "../../service/user/update"




export class UserUpdateController{
    constructor(){}

    static async update(req: any, res: Response){
        const {user} = req
        console.log(req.body)
        const update = await UserUpdateService.update(user.id, req.body)

        res.status(update.success ? 200 : 400).send(update)
    }
}