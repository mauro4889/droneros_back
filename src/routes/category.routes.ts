import { Router } from "express";
import { CreateCategoryController } from "../controller/category/create";
import { DeleteCategoryController } from "../controller/category/delete";
import { GetAllCategoryController } from "../controller/category/getAll";
import { GetCategoryByIdController } from "../controller/category/getOne";
import { UpdateCategoryController } from "../controller/category/update";
import { authenticate } from "../middlewares/authentication";
import { isAdmin } from "../middlewares/roles";



const router = Router()

router.post('/', authenticate, isAdmin, CreateCategoryController.create)
router.get('/:id', GetCategoryByIdController.getOneById)
router.patch('/:id', authenticate, isAdmin, UpdateCategoryController.update)
router.delete('/:id', authenticate, isAdmin, DeleteCategoryController.delete)
router.get('/', GetAllCategoryController.getAll)

export default router