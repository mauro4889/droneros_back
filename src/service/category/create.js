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
exports.CreateCategoryService = void 0;
const __1 = require("../..");
class CreateCategoryService {
    constructor() { }
    static create(categoryName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const created = yield __1.prisma.category.create({
                    data: {
                        categoryName
                    }
                });
                return { success: true, created };
            }
            catch (error) {
                console.log(error);
                return { success: false, error: 'Hubo un error' };
            }
        });
    }
}
exports.CreateCategoryService = CreateCategoryService;
