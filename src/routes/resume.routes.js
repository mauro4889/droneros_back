"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resume_controller_1 = require("../controller/resume/resume.controller");
const authentication_1 = require("../middlewares/authentication");
const router = (0, express_1.Router)();
router.use(authentication_1.authenticate);
router.post('/', resume_controller_1.ResumeController.create);
router.get('/', resume_controller_1.ResumeController.getAll);
exports.default = router;
