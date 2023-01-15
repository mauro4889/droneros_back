import { prisma } from "../.."


export class ProductGetForService{
    constructor(){}

    static async getFor(id: number){
        try {
            const data = await prisma.category.findUnique({
                where: {id},
                include:{
                    products: true
                }
            })
            return {success: true, data}
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}