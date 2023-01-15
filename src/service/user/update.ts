import { prisma } from "../..";
import { UserGetOneService } from "./getOne";


export class UserUpdateService{
    constructor(){}

    static async update(id: any, data: any){
        try {
            const user = UserGetOneService.getOneById(id)
            if(!user){
                throw Error()
            }

            const updated = await prisma.user.update({
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