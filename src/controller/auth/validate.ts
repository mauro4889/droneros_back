import { Request, Response } from "express";
import { ValidateEmailService } from "../../service/auth/validate";



export class ValidateEmailController{
    constructor(){}

    static async validate(req: Request, res: Response){
        const {token} = req.params

        const validated = await ValidateEmailService.validateEmail(token)
        res.redirect('http://localhost:3000/login')
        res.status(200).send({
            success: true,
            validated
        })
    }
}