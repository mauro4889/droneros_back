import { prisma } from "../..";


export class ResumseService{
    constructor(){}

    static async created({user, quantity, totalPrice, products}:any){
        try {
            const created = await prisma.resume.create({
                include:{
                    createdBy: true
                },
                data:{
                    quantity,
                    totalPrice,
                    createdBy:{
                        connect:{id: user}
                    },
                    products:{
                        create:[
                            products
                        ]
                    }
                }
            })
            return {success: true, task: created}
        } catch (error) {
            console.log({error})
            return { sucess: false, error: 'Hubo un error' };
        }
    }
}