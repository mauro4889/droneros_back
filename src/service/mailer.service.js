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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSend = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const Email = (options) => __awaiter(void 0, void 0, void 0, function* () {
    let transpoter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS, //password
        },
    });
    transpoter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
    });
});
const EmailSend = ({ email, firstname, url }) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        from: `${process.env.EMAIL}`,
        to: email,
        subjet: 'DRONEROS',
        html: `
            <h2>Gracias ${firstname} por crearte una cuenta</h2>
			Ingresa a este link para validar tu correo: <b>{${url}}</b>
        `
    };
    Email(options);
});
exports.EmailSend = EmailSend;
