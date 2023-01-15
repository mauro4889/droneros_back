import { JWTService } from "../jwt/service";
import {UserGetOneService} from '../user/getOne'
import { UserUpdateService } from "../user/update";
import Handlebars from 'handlebars'


export class ValidateEmailService {
    constructor() { }

    static async validateEmail(token: any) {
        try {

            const payload = await JWTService.verify(token);

            const { data } = await UserGetOneService.getOneById(payload.id);

			if (!data) {
				return {
					message: 'El token que estás usando es inválido',
				};
			}

            if (data.validated) {
                const mail = Handlebars.compile(`<!DOCTYPE html>
				<html lang="es">
				<head>
					<meta charset="UTF-8">
					<meta http-equiv="X-UA-Compatible" content="IE=edge">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Correo existente</title>
				</head>
				<body>
				Ya está validado el correo electrónico, {{name}}. BASTA!!!
				</body>
				</html>`);

                return mail({
                    name: data.firstname,
                });
            }

            await UserUpdateService.update(payload.id, {
                validated: true,
            });

            const mail = Handlebars.compile(`<!DOCTYPE html>
			<html lang="es">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Document</title>
			</head>
			<body>
			Genial, validaste tu correo. Nos vemos pronto {{name}}
			</body>
			</html>`);

            return mail({
                name: data.firstname
            });
        } catch (error) {
            const mail = Handlebars.compile(`<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Document</title>
			</head>
			<body>
			Hubo un error para validar tu correo, volve a intentarlo
			</body>
			</html>`);
			console.log(error)
            return mail({});
        }
    }
}