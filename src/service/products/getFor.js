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
exports.ProductGetForService = void 0;
const __1 = require("../..");
class ProductGetForService {
    constructor() { }
    static getFor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield __1.prisma.category.findUnique({
                    where: { id },
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
exports.ProductGetForService = ProductGetForService;
