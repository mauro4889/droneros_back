import { genSalt, hash } from "bcrypt"
import Handlebars from "handlebars"
import { JWTService } from "../jwt/service"
import { UserCreate } from "../user/create"
import {EmailSend} from '../mailer.service'
import { getOneByEmailService } from "./getOneByEmail"



export class RegisterService{
    constructor(){}

    static async register(data: any){
        
        try {
            const {email, password, firstname, lastname, role, validated, city, street, cp} = data

            const candidate = await getOneByEmailService.getOneByEmail(email)

            if (candidate.data) {
                throw {existEmail: true}
            }

            const salt = await genSalt(10)
            const encrypted = await hash(password, salt)
            const {user} = await UserCreate.create({
                email: email.toLowerCase(),
                firstname, 
                lastname, 
                role, 
                validated, 
                city, 
                street, 
                cp, 
                password: encrypted})

            const validateToken = JWTService.generate({ email, id: user?.id }, '15m')

            const url = `http://localhost:3002/auth/validate/${validateToken}`
            
            EmailSend({email, firstname, url})
            
            return {success: true, user}

        } catch (error) {
            console.log(error)

            return error
        }
    }
}