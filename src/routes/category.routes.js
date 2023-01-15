"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_1 = require("../controller/category/create");
const delete_1 = require("../controller/category/delete");
const getAll_1 = require("../controller/category/getAll");
const getOne_1 = require("../controller/category/getOne");
const update_1 = require("../controller/category/update");
const authentication_1 = require("../middlewares/authentication");
const roles_1 = require("../middlewares/roles");
const router = (0, express_1.Router)();
router.post('/', authentication_1.authenticate, roles_1.isAdmin, create_1.CreateCategoryController.create);
router.get('/:id', getOne_1.GetCategoryByIdController.getOneById);
router.patch('/:id', authentication_1.authenticate, roles_1.isAdmin, update_1.UpdateCategoryController.update);
router.delete('/:id', authentication_1.authenticate, roles_1.isAdmin, delete_1.DeleteCategoryController.delete);
router.get('/', getAll_1.GetAllCategoryController.getAll);
exports.default = router;