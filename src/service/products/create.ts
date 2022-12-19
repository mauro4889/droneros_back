import { prisma } from "../.."



export class ProductsCreateService{
    constructor(){}

    static async create({name, description, price, stock, category}: any){
        try {
            const created = await prisma.products.create({
                data:{
                    name,
                    description,
                    price,
                    stock,
                    category:{
                        connect: {id: category}
                    }
                }
            })
    
            return {success: true, created}
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}