import { prisma } from "../.."


export class ProductsUpdateService {
    constructor() { }

    static async update(id: any, data: any) {
        try {
            const updateProduct = await prisma.products.update({
                where: { id },
                data
            })

            return { success: true, updateProduct }
        } catch (error) {
            console.log(error)
            return {
                success: false, error: 'Hubo un error'
            }
        }
    }
}