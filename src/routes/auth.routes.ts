import { Router } from "express";
import { LoginController } from "../controller/auth/login";
import { RegisterController } from "../controller/auth/register";
import { ValidateEmailService } from "../service/auth/validate";


const router = Router()

const saludar = () =>{
    console.log('hola')
    return {success: true}
}

router.post('/login', LoginController.login)
router.post('/register', RegisterController.register)
router.get('/validate/:token', ValidateEmailService.validateEmail)
router.get('/validate', saludar)

export default router