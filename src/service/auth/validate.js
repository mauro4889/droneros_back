"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateEmailService = void 0;
const service_1 = require("../jwt/service");
const getOne_1 = require("../user/getOne");
const update_1 = require("../user/update");
const handlebars_1 = __importDefault(require("handlebars"));
class ValidateEmailService {
    constructor() { }
    static validateEmail(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = yield service_1.JWTService.verify(token);
                const { data } = yield getOne_1.UserGetOneService.getOneById(payload.id);
                if (!data) {
                    return {
                        message: 'El token que estás usando es inválido',
                    };
                }
                if (data.validated) {
                    const mail = handlebars_1.default.compile(`<!DOCTYPE html>
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
                yield update_1.UserUpdateService.update(payload.id, {
                    validated: true,
                });
                const mail = handlebars_1.default.compile(`<!DOCTYPE html>
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
            }
            catch (error) {
                const mail = handlebars_1.default.compile(`<!DOCTYPE html>
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
                console.log(error);
                return mail({});
            }
        });
    }
}
exports.ValidateEmailService = ValidateEmailService;
