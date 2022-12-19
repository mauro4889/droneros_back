import { genSalt, hash } from "bcrypt"
import { UserCreate } from "../user/create"



export class RegisterService{
    constructor(){}

    static async register(data: any){
        try {
            const {email, password, firstname, lastname} = data

            const salt = await genSalt(10)
            const encrypted = await hash(password, salt)
            const {user} = await UserCreate.create({email, password: encrypted, firstname, lastname})
            
            return user

        } catch (error) {
            console.log(error)

            return null
        }
    }
}