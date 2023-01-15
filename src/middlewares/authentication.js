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
exports.authenticate = void 0;
const service_1 = require("../service/jwt/service");
const getOne_1 = require("../service/user/getOne");
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization || !authorization.startsWith('Bearer')) {
            throw 'No tenes Token';
        }
        const { 1: token } = authorization.split(' ');
        if (!token) {
            throw 'Token incorrecto';
        }
        const { id } = service_1.JWTService.verify(token);
        const { data } = yield getOne_1.UserGetOneService.getOneById(id);
        req.user = data;
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.authenticate = authenticate;
