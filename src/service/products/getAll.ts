import { prisma } from "../..";




export class GetAllProductsService{
    constructor(){}

    static async getAll(){
        try {
            const data = await prisma.products.findMany()

            return {success: true, data}
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}