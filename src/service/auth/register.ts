import { genSalt, hash } from "bcrypt"
import Handlebars from "handlebars"
import { JWTService } from "../jwt/service"
import { UserCreate } from "../user/create"
import {EmailSend} from '../mailer.service'



export class RegisterService{
    constructor(){}

    static async register(data: any){
        try {
            const {email, password, firstname, lastname} = data

            const salt = await genSalt(10)
            const encrypted = await hash(password, salt)
            const {user} = await UserCreate.create({email, password: encrypted, firstname, lastname})
            const validateToken = JWTService.generate({ email, id: user?.id }, '15m')
            const url = `http://localhost:3000/auth/validate/${validateToken}`

            console.log(data)

            EmailSend({email, firstname, url})
            
            return user

        } catch (error) {
            console.log(error)

            return null
        }
    }
}