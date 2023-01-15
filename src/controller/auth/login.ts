import { Request, Response } from "express";
import { LoginService } from "../../service/auth/login";



export class LoginController{
    constructor(){}

    static async login(req: Request, res: Response){
        const {email, password} = req.body
        
        const {token, data} = await LoginService.login({email: email.toLowerCase(), password})

        res.status(200).send({
            success: true,
            token,
            data
        })
    }
}