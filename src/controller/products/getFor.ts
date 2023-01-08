import { Request, Response } from "express";
import { ProductGetForService } from "../../service/products/getFor";



export class ProductsGetForController{
    constructor (){}

    static async getFor(req: Request, res: Response){
        const {id} = req.params
        console.log(id)
        const data = await ProductGetForService.getFor(+id)

        res.status(data.success ? 200 : 400).send(data)
    }
}