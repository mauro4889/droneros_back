import { prisma } from "../.."



export class CreateCategoryService{
    constructor(){}

    static async create(categoryName: any){
        
        try {
            const created = await prisma.category.create({
                data:{
                    categoryName
                }
            })

            return {success: true, created}
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }

}