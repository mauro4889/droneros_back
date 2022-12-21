import { prisma } from '../..'


export class ProductsDeleteService {
    constructor() { }

    static async delete(id: any) {
        try {
            const deleted = await prisma.products.delete({ where: {id} })

            return { success: true, deleted }
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}