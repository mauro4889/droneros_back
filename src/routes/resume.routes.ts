import { Router } from "express";
import { ResumeController } from "../controller/resume/resume.controller";
import { authenticate } from "../middlewares/authentication";



const router = Router()
router.use(authenticate)

router.post('/', ResumeController.create)
router.get('/', ResumeController.getAll)
export default router