import { Router } from "express";
import { LoginController } from "../controller/auth/login";
import { RegisterController } from "../controller/auth/register";


const router = Router()


router.post('/login', LoginController.login)
router.post('/register', RegisterController.register)
router.get('/validate/:token')

export default router