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
exports.isUser = exports.isAdmin = void 0;
const service_1 = require("../service/jwt/service");
const isAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        const { 1: token } = authorization.split(' ');
        const { role } = service_1.JWTService.verify(token);
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.isAdmin = isAdmin;
const isUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        const { 1: token } = authorization.split(' ');
        const { role } = service_1.JWTService.verify(token);
        if (role !== "USER") {
            throw 'No tienes permisos';
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.isUser = isUser;
