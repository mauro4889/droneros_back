import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/category/update";


export class UpdateCategoryController {
    constructor(){}

    static async update (req: Request, res: Response){

        const updated = await UpdateCategoryService.update(req.params.id, req.body)
    }
}