import { prisma } from "../..";



export class AddresUpdateService{
    constructor(){}

    static async updateAddress(id: number, data: any){
        try {
            const updated = await prisma.address.update({
                where: {id},
                data
            })

            return {success: true, updated}
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}