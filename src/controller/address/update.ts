import { Request, Response } from "express";
import { AddresUpdateService } from "../../service/address/update";



export class AddressUpdateController{
    constructor(){}

    static async update(req: Request, res: Response){
        const {id} = req.params
        const updated = await AddresUpdateService.updateAddress(+id, req.body)

        res.status(updated.success ? 200 : 400).send(updated)
    }
}