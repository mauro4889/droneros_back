import { prisma } from "../..";


export class ProductsPurchaseService{
    constructor(){}

    static async purchase({id, quantity}: any){
        try {
            const data = await prisma.products.update({
                where: {id},
                data:{
                    stock:{
                        decrement: quantity
                    }
                }
            })
        
            return {success: true, data}
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}