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
exports.UserUpdateService = void 0;
const __1 = require("../..");
const getOne_1 = require("./getOne");
class UserUpdateService {
    constructor() { }
    static update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = getOne_1.UserGetOneService.getOneById(id);
                if (!user) {
                    throw Error();
                }
                const updated = yield __1.prisma.user.update({
                    where: { id },
                    data
                });
                return { success: true, updated };
            }
            catch (error) {
                console.log(error);
                return { success: false, error: 'Hubo un error' };
            }
        });
    }
}
exports.UserUpdateService = UserUpdateService;
