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
exports.ProductsPurchaseController = void 0;
const purchase_1 = require("../../service/products/purchase");
class ProductsPurchaseController {
    constructor() { }
    static pruchase(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, quantity } = req.body;
            const purchased = yield purchase_1.ProductsPurchaseService.purchase({ id, quantity });
            res.status(purchased.success ? 200 : 400).send(purchased);
        });
    }
}
exports.ProductsPurchaseController = ProductsPurchaseController;
