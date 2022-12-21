import { prisma } from "../..";



export class ProductsGetByIdService{
    constructor(){}

    static async getOneById(id: any){
        try {
            const data = await prisma.products.findUnique({where: {id}})

            return {success: true, data}
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}