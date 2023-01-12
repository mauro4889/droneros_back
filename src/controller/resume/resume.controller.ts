import { Request, Response } from "express";
import { ResumseService } from "../../service/resume/resume.service";



export class ResumeController{
    constructor(){}

    static async create(req: any, res: Response){
        const {quantity, totalPrice, products} = req.body
        const {user} = req
        const created = await ResumseService.created({
            quantity,
            totalPrice,
            products,
            user: user.id
        })

        res.status(created.success ? 200 : 400).send(created)
    }
}