import { compare } from "bcrypt";
import { JWTService } from "../jwt/service";
import { EmailUserService } from "../user/email";




export class LoginService {
    constructor(){}

    static async login({email, password}: any){
        try {
            const {data} = await EmailUserService.getOneByEmail(email)
            console.log(data)
            if (!data){
                throw data
            }

            const isValid = await compare(password, data.password)

            if (!isValid){
                throw isValid
            }

            const {id, firstname, role} = data
            const token = JWTService.generate({
                id, 
                email,
                firstname,
                role
            })

            return{
                success: true,
                token,
                data: {
                    email,
                    firstname,
                    role
                }
            }

        } catch (error) {
            console.log(error)
            return { error }
        }
    }
}