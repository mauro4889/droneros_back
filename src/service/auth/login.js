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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const bcrypt_1 = require("bcrypt");
const service_1 = require("../jwt/service");
const email_1 = require("../user/email");
class LoginService {
    constructor() { }
    static login({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield email_1.EmailUserService.getOneByEmail(email);
                if (!data) {
                    throw data;
                }
                const isValid = yield (0, bcrypt_1.compare)(password, data.password);
                if (!isValid) {
                    throw isValid;
                }
                const { id, firstname, role, validated, city, street, cp } = data;
                const token = service_1.JWTService.generate({
                    id,
                    email,
                    firstname,
                    role,
                });
                return {
                    success: true,
                    token,
                    data: {
                        email,
                        firstname,
                        role,
                        validated,
                        city,
                        street,
                        cp
                    }
                };
            }
            catch (error) {
                console.log(error);
                return { error };
            }
        });
    }
}
exports.LoginService = LoginService;
