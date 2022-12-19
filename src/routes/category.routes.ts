import { Router } from "express";
import { CreateCategoryController } from "../controller/category/create";
import { DeleteCategoryController } from "../controller/category/delete";
import { GetCategoryByIdController } from "../controller/category/getOne";



const router = Router()

router.post('/', CreateCategoryController.create)
router.get('/', GetCategoryByIdController.getOneById)
router.delete('/:id', DeleteCategoryController.delete)

export default router