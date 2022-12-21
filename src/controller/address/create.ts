import { Request, Response } from "express";
import { AddressCreateService } from "../../service/address/create";


export class AddressCreateController{
    constructor(){}

    static async create(req: Request, res: Response){
        const {city, street, cp, user} = req.body
        const created = await AddressCreateService.create({
            city,
            street,
            cp,
            user
        })

        res.status(created?.success ? 200 : 400).send(created)
    }
}