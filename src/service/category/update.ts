import { prisma } from "../..";


export class UpdateCategoryService{
    constructor(){}

    static async update(id: number, data: any){
        try {
            const updatedCategory = await prisma.category.update({
                where: {id},
                data:{
                    categoryName: data
                }
            })

            return {success: true, updatedCategory}
        } catch (error) {
            console.log(error)
            return {
                success: false, error: 'Hubo un error'
            }
        }
    }
}