import { Router } from "express";
import { AddressCreateController } from "../controller/address/create";
import { AddresDeleteController } from "../controller/address/delete";
import { AddressGetOneController } from "../controller/address/getOne";
import { AddressUpdateController } from "../controller/address/update";
import { authenticate } from "../middlewares/authentication";
import { isAdmin } from "../middlewares/roles";


const router = Router()
router.use(authenticate, isAdmin)

router.post('/', AddressCreateController.create)
router.get('/:id', AddressGetOneController.getOneByid)
router.patch('/:id', AddressUpdateController.update)
router.delete('/:id', AddresDeleteController.delete)


export default router