import { Request, Response } from "express";
import { GetAllCategoryService } from "../../service/category/getAll";


export class GetAllCategoryController{
    constructor(){}

    static async getAll(req: Request, res: Response){
        
        const data = await GetAllCategoryService.getAll()

        res.status(data.success ? 200 : 400).send(data)
    }
}