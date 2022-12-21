import { Request, Response } from "express";
import { AddressGetOneService } from "../../service/address/getOne";


export class AddressGetOneController{
    constructor(){}

    static async getOneByid(req: Request, res: Response){
        const {id} = req.params
        const data = await AddressGetOneService.getOneById(id)

        res.status(data.success ? 200 : 400).send(data)
    }
}