"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const resume_routes_1 = __importDefault(require("./routes/resume.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
dotenv_1.default.config();
exports.prisma = new client_1.PrismaClient();
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.use('/auth', auth_routes_1.default);
server.use('/category', category_routes_1.default);
server.use('/products', products_routes_1.default);
server.use('/resume', resume_routes_1.default);
server.use('/user', user_routes_1.default);
server.listen(process.env.PORT, () => {
    console.log(`Funcionando en el puerto ${process.env.PORT}`);
});
