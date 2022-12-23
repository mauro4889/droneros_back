import { Request, Response } from "express";
import { ProductsPurchaseService } from "../../service/products/purchase";



export class ProductsPurchaseController{
    constructor(){}

    static async pruchase(req: Request, res: Response){
        const {id, quantity} = req.body

        const purchased = await ProductsPurchaseService.purchase({id, quantity})

        res.status(purchased.success ? 200 : 400).send(purchased)
    }
}