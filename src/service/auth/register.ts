import { genSalt, hash } from "bcrypt"
import Handlebars from "handlebars"
import { JWTService } from "../jwt/service"
import { MailerServices } from "../mailer.service"
import { UserCreate } from "../user/create"



export class RegisterService{
    constructor(){}

    static async register(data: any){
        try {
            const {email, password, firstname, lastname} = data

            const salt = await genSalt(10)
            const encrypted = await hash(password, salt)
            const {user} = await UserCreate.create({email, password: encrypted, firstname, lastname})
            const validateToken = JWTService.generate({ email, id: user?.id }, '15m')

            const mail = Handlebars.compile(`<!DOCTYPE html>
			<html lang="es">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>ToDoList</title>
			</head>
			<body>
            <h2>Gracias por crearte una cuenta</h2>
			Ingresa a este link para validar tu correo: <b>{{url}}</b>
			</body>
			</html>`);

            const link = `http://localhost:3000/auth/validate/${validateToken}`

            MailerServices.send(mail({ url: link }), email)
            
            return user

        } catch (error) {
            console.log(error)

            return null
        }
    }
}