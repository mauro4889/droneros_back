import { prisma } from "../..";


export class ResumseService{
    constructor(){}

    static async created({user, quantity, totalPrice, products}:any){
        try {
            const created = await prisma.resume.create({
                include:{
                    createdBy: true,
                    products: true
                },
                data:{
                    quantity,
                    totalPrice,
                    createdBy:{
                        connect:{id: user}
                    },
                    products:{
                        create: products.map(({id, name, price}: any)=>({
                            name,
                            price,
                            products: {
                                connect: {
                                    id
                                }
                            }
                        }))
                    }
                }
            })
            return {success: true, task: created}
        } catch (error) {
            console.log({error})
            return { sucess: false, error: 'Hubo un error' };
        }
    }

    static async getAll() {
        try {
            const data = await prisma.resume.findMany({
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