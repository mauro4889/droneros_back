import { Request, Response } from "express";
import { AddresDeleteService } from "../../service/address/delete";



export class AddresDeleteController{
    constructor(){}

    static async delete(req: Request, res: Response){
        const {id} = req.params
        const deleted = await AddresDeleteService.delete(+id)

        res.status(deleted.success ? 200 : 400).send(deleted)
    }
}