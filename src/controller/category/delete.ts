import { Request, Response } from "express";
import { DeleteCategotyService } from "../../service/category/delete";



export class DeleteCategoryController{
    constructor(){}

    static async delete(req: Request, res: Response){
        const {id} = req.params

        const deleted = await DeleteCategotyService.delete(+id)

        res.status(deleted.success ? 200: 400).send(deleted)
    }
}