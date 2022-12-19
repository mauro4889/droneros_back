import { Request, Response } from "express";
import { GetCategoryByIdService } from "../../service/category/getOne";


export class GetCategoryByIdController{
    constructor(){}

    static async getOneById(req: Request, res: Response){
        const {id} = req.params
        const getData = await GetCategoryByIdService.getOneById(id)

        res.status(getData.success ? 200: 400).send(getData)
    }
}