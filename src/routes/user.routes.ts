import { Router } from "express";
import { UserGetByIdController } from "../controller/user/getById";
import { UserUpdateController } from "../controller/user/update";
import { authenticate } from "../middlewares/authentication";


const router = Router()

router.get('/:id', UserGetByIdController.getOneById)
router.patch('/update', authenticate, UserUpdateController.update)

export default router