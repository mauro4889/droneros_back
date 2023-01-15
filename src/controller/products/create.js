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
exports.ProductsCreateController = void 0;
const create_1 = require("../../service/products/create");
class ProductsCreateController {
    constructor() { }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, price, stock, img, categoryId } = req.body;
            const created = yield create_1.ProductsCreateService.create({
                name,
                description,
                price,
                stock,
                img,
                categoryId
            });
            res.status(created.success ? 200 : 400).send(created);
        });
    }
}
exports.ProductsCreateController = ProductsCreateController;
