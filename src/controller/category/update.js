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
exports.UpdateCategoryController = void 0;
const update_1 = require("../../service/category/update");
class UpdateCategoryController {
    constructor() { }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { categoryName } = req.body;
            const { id } = req.params;
            const updated = yield update_1.UpdateCategoryService.update(+id, categoryName.toUpperCase());
            res.status(updated.success ? 200 : 400).send(updated);
        });
    }
}
exports.UpdateCategoryController = UpdateCategoryController;
