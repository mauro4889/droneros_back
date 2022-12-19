import { prisma } from "../..";
import {UserRoles} from "../../entities/roles.enum"


export class UserCreate{
    constructor(){}

    static async create({email, password, firstname, lastname}: any){
        try {
            const created = await prisma.user.create({
                data:{
                    email,
                    password,
                    firstname,
                    lastname,
                    role: UserRoles.USER
                }
            })

            return {success: true, user: created}
            
        } catch (error) {

            console.log(error)
            return {success: false, error: 'Hubo un error'}

        }
    }
}