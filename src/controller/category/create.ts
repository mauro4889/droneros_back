import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/category/create";



export class CreateCategoryController{
    constructor(){}

    static async create(req: Request, res: Response){
        const {categoryName} = req.body
        
        const created = await CreateCategoryService.create(categoryName)

        res.status(200).send({
            success: true,
            created
        })
    }
}