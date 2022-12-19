import { prisma } from "../..";



export class GetCategoryByIdService{
    constructor(){}

    static async getOneById(id: any){
        try {
            const data = await prisma.category.findUnique({
                where: {id}
            })

            return {success: true, data}
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}