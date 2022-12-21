import { prisma } from "../..";



export class AddresDeleteService {
    constructor() { }

    static async delete(id: number) {
        try {
            const deleted = await prisma.address.delete({ where: { id } })

            return { success: true, deleted }
        } catch (error) {
            console.log(error)
            return { success: false, error: 'Hubo un error' }
        }
    }
}