import { Request, Response } from "express";
import { GetAllProductsService } from "../../service/products/getAll";



export class GetAllProductsController{
    constructor(){}

    static async getAll(req: Request, res: Response){
        const data = await GetAllProductsService.getAll()

        res.status(data.success ? 200 : 400).send(data)
    }
}