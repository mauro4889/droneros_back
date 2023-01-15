import { prisma } from "../..";


export class EmailUserService{
    constructor(){}

    static async getOneByEmail(email: any){
        try {
            const data = await prisma.user.findUnique({
                where: {email}
            })
            
            if (!data){
                throw data
            }

            return {success: true, data}

        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}