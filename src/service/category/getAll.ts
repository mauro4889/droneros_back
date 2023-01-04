import { prisma } from "../..";



export class GetAllCategoryService{
    constructor(){}

    static async getAll(){
        try {
            const data = await prisma.category.findMany()
            return {success: true, data}
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}