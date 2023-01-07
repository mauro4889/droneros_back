import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/category/update";


export class UpdateCategoryController {
    constructor(){}

    static async update (req: Request, res: Response){

        const {categoryName} = req.body
        const {id} = req.params

        const updated = await UpdateCategoryService.update(+id, categoryName.toUpperCase())

        res.status(updated.success ? 200 : 400).send(updated)
    }
}