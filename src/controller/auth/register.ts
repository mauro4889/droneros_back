import { Request, Response } from "express";
import { RegisterService } from "../../service/auth/register";


export class RegisterController{
    constructor(){}

    static async register(req: Request, res: Response){

        const created = await RegisterService.register(req.body)

        res.status(created ? 200 : 400).send(created)
    }
}