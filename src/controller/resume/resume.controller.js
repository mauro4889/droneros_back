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
exports.ResumeController = void 0;
const resume_service_1 = require("../../service/resume/resume.service");
class ResumeController {
    constructor() { }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { quantity, totalPrice, products } = req.body;
            const { user } = req;
            const created = yield resume_service_1.ResumseService.created({
                quantity,
                totalPrice,
                products,
                user: user.id
            });
            res.status(created.success ? 200 : 400).send(created);
        });
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield resume_service_1.ResumseService.getAll();
            res.status(data.success ? 200 : 400).send(data);
        });
    }
}
exports.ResumeController = ResumeController;
