import { Router } from "express";
import { ProductsCreateController } from "../controller/products/create";
import { ProductsDeleteController } from "../controller/products/delete";
import { GetAllProductsController } from "../controller/products/getAll";
import { ProductsGetByIdController } from "../controller/products/getOne";
import { ProductsUpdateController } from "../controller/products/update";
import { authenticate } from "../middlewares/authentication";
import { isAdmin, isUser } from "../middlewares/roles";


const router = Router()
router.use(authenticate)

router.post('/', isAdmin, ProductsCreateController.create)
router.get('/:id', isAdmin, isUser, ProductsGetByIdController.getOneById)
router.patch('/:id', isAdmin, ProductsUpdateController.update)
router.delete('/:id', isAdmin, ProductsDeleteController.delete)
router.get('/', isAdmin, GetAllProductsController.getAll)
router.get('/getbyname', isAdmin, ProductsGetByIdController.getByName)


export default router