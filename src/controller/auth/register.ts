import { Request, Response } from "express";
import { RegisterService } from "../../service/auth/register";


export class RegisterController{
    constructor(){}

    static async register(req: Request, res: Response){
        const {email, password, firstname, lastname} = req.body

        const created = await RegisterService.register({
            email,
            password,
            firstname,
            lastname
        })

        res.status(200).send({
            success: true,
            created
        })

    }
}