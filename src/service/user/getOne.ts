import { prisma } from "../..";



export class UserGetOneService{
    constructor(){}

    static async getOneById(id: any){
        try {
            const data = await prisma.user.findUnique({where: {id}})

            if (!data) {
                throw data;
            }

            return {success: true, data}
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}