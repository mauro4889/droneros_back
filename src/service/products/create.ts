import { prisma } from "../.."
import { GetCategoryByName } from "../category/getId"



export class ProductsCreateService{
    constructor(){}

    static async create({name, description, price, stock, img, category, categoryId}: any){
        try {
            const created = await prisma.products.create({
                data:{
                    name,
                    description,
                    price,
                    stock,
                    img,
                    category:{
                        connect: {id: categoryId}
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