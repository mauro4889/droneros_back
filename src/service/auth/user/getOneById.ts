import { prisma } from "../../.."



export class UserGetOneByIdService{
    constructor(){}

    static async getOneById(id: any){
        console.log(id)
        try {
            const data = await prisma.user.findUnique({where: {id}})
            console.log(data)
            return {success: true, data}
        } catch (error) {
            console.log(error)
            return {success: false, error: 'Hubo un error'}
        }
    }
}