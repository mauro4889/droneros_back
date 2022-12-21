import { Request, Response } from "express";
import { ProductsUpdateService } from "../../service/products/update";



export class ProductsUpdateController{
    constructor(){}

    static async update(req: Request, res: Response){
        const update = await ProductsUpdateService.update(req.params.id, req.body)

        res.status(update.success ? 200 : 400).send(update)
    }
}