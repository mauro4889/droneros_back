"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../controller/auth/login");
const register_1 = require("../controller/auth/register");
const validate_1 = require("../controller/auth/validate");
const router = (0, express_1.Router)();
router.post('/login', login_1.LoginController.login);
router.post('/register', register_1.RegisterController.register);
router.get('/validate/:token', validate_1.ValidateEmailController.validate);
exports.default = router;
