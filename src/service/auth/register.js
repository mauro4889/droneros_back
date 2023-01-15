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
exports.RegisterService = void 0;
const bcrypt_1 = require("bcrypt");
const service_1 = require("../jwt/service");
const create_1 = require("../user/create");
const mailer_service_1 = require("../mailer.service");
const getOneByEmail_1 = require("./getOneByEmail");
class RegisterService {
    constructor() { }
    static register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, firstname, lastname, role, validated, city, street, cp } = data.data;
                const candidate = yield getOneByEmail_1.getOneByEmailService.getOneByEmail(email);
                if (candidate.data) {
                    throw { existEmail: true };
                }
                const salt = yield (0, bcrypt_1.genSalt)(10);
                const encrypted = yield (0, bcrypt_1.hash)(password, salt);
                const { user } = yield create_1.UserCreate.create({
                    email: email.toLowerCase(),
                    firstname,
                    lastname,
                    role,
                    validated,
                    city,
                    street,
                    cp,
                    password: encrypted
                });
                const validateToken = service_1.JWTService.generate({ email, id: user === null || user === void 0 ? void 0 : user.id }, '15m');
                const url = `http://localhost:3002/auth/validate/${validateToken}`;
                (0, mailer_service_1.EmailSend)({ email, firstname, url });
                return { success: true, user };
            }
            catch (error) {
                console.log(error);
                return error;
            }
        });
    }
}
exports.RegisterService = RegisterService;
