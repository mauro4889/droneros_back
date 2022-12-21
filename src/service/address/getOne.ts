import { prisma } from "../..";



export class AddressGetOneService {
    constructor() { }

    static async getOneById(id: any) {
        try {
            const data = await prisma.address.findUnique({ where: { id } })

            return { success: true, data }
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}