import { Request, Response } from "express";
import { ProductsDeleteService } from "../../service/products/delete";



export class ProductsDeleteController{
    constructor(){}

    static async delete(req: Request, res: Response){
        const {id} = req.params
        const deleteProduct = await ProductsDeleteService.delete(id)

        res.status(deleteProduct.success ? 200 : 400).send(deleteProduct)
    }
}