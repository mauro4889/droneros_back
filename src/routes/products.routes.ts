import { Router } from "express";
import { ProductsCreateController } from "../controller/products/create";
import { ProductsDeleteController } from "../controller/products/delete";
import { ProductsGetByIdController } from "../controller/products/getOne";
import { ProductsUpdateController } from "../controller/products/update";


const router = Router()

router.post('/', ProductsCreateController.create)
router.get('/:id', ProductsGetByIdController.getOneById)
router.patch('/:id', ProductsUpdateController.update)
router.delete('/:id', ProductsDeleteController.delete)


export default router