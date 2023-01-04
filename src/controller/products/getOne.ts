import { Request, Response } from "express";
import { ProductsGetByIdService } from "../../service/products/getOne";



export class ProductsGetByIdController{
    constructor(){}

    static async getOneById(req: Request, res: Response){
        const {id} = req.params
        const data = await ProductsGetByIdService.getOneById(id)

        res.status(data.success ? 200 : 400).send(data)
    }

    static async getByName(req: Request, res: Response){
        const data = await ProductsGetByIdService.getByName(req.body)

        res.status(data.success ? 200 : 400).send(data)
    }
    
}