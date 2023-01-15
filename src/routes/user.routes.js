"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getById_1 = require("../controller/user/getById");
const update_1 = require("../controller/user/update");
const authentication_1 = require("../middlewares/authentication");
const router = (0, express_1.Router)();
router.get('/:id', getById_1.UserGetByIdController.getOneById);
router.patch('/update', authentication_1.authenticate, update_1.UserUpdateController.update);
exports.default = router;
