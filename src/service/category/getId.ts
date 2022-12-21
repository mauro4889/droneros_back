import { prisma } from "../..";


export class GetCategoryByName{
    constructor(){}

    static async getByName(categoryName: any){
        try {
            const data = await prisma.category.findUnique({
                where: {categoryName}
            })
            return data?.id
        } catch (error) {
            console.log(error)
            return error
        }
    }
}