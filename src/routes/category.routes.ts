import { Router } from "express";
import { CreateCategoryController } from "../controller/category/create";
import { DeleteCategoryController } from "../controller/category/delete";
import { GetCategoryByIdController } from "../controller/category/getOne";
import { authenticate } from "../middlewares/authentication";
import { isAdmin } from "../middlewares/roles";



const router = Router()

router.post('/', authenticate, isAdmin, CreateCategoryController.create)
router.get('/', GetCategoryByIdController.getOneById)
router.delete('/:id', authenticate, isAdmin, DeleteCategoryController.delete)

export default router