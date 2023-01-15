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
exports.ResumseService = void 0;
const __1 = require("../..");
class ResumseService {
    constructor() { }
    static created({ user, quantity, totalPrice, products }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const created = yield __1.prisma.resume.create({
                    include: {
                        createdBy: true,
                        products: true
                    },
                    data: {
                        quantity,
                        totalPrice,
                        createdBy: {
                            connect: { id: user }
                        },
                        products: {
                            create: products.map(({ id, name, price }) => ({
                                name,
                                price,
                                products: {
                                    connect: {
                                        id
                                    }
                                }
                            }))
                        }
                    }
                });
                return { success: true, task: created };
            }
            catch (error) {
                console.log({ error });
                return { sucess: false, error: 'Hubo un error' };
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield __1.prisma.resume.findMany({
                    include: {
                        products: true
                    }
                });
                return { success: true, data };
            }
            catch (error) {
                console.log(error);
                return { success: false, error: 'Hubo un error' };
            }
        });
    }
}
exports.ResumseService = ResumseService;
