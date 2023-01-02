import { Prisma } from "@prisma/client";
import { prisma } from "../..";
import {UserRoles} from "../../entities/roles.enum"


export class UserCreate{
    constructor(){}

    static async create(userData: Prisma.UserCreateInput){
        try {
            const created = await prisma.user.create({
                data:{
                    ...userData
                },
                select:{
                    id: true,
                    firstname: true,
                    role: true
                }
            })

            return {success: true, user: created}
            
        } catch (error) {

            console.log(error)
            return {success: false, error: 'Hubo un error'}

        }
    }
}