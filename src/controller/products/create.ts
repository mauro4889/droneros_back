import { Request, Response } from "express";
import { ProductsCreateService } from "../../service/products/create";


export class ProductsCreateController{
    constructor (){}

    static async create(req: Request, res: Response){
        const {name, description, price, stock, img, categoryId} = req.body

        const created = await ProductsCreateService.create({
            name,
            description,
            price,
            stock,
            img,
            categoryId
        })

        res.status(created.success ? 200 : 400).send(created)
    }
}