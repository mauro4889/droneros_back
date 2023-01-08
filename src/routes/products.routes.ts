import { Router } from "express";
import { ProductsCreateController } from "../controller/products/create";
import { ProductsDeleteController } from "../controller/products/delete";
import { GetAllProductsController } from "../controller/products/getAll";
import { ProductsGetByIdController } from "../controller/products/getOne";
import { ProductsUpdateController } from "../controller/products/update";
import { authenticate } from "../middlewares/authentication";
import { isAdmin, isUser } from "../middlewares/roles";


const router = Router()

router.post('/', authenticate, isAdmin, ProductsCreateController.create)
router.get('/:id', isAdmin, isUser, ProductsGetByIdController.getOneById)
router.patch('/:id', authenticate, isAdmin, ProductsUpdateController.update)
router.delete('/:id', authenticate, isAdmin, ProductsDeleteController.delete)
router.get('/', GetAllProductsController.getAll)
router.get('/getbyname', ProductsGetByIdController.getByName)


export default router