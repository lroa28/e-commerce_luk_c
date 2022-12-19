import { Router } from "express";
import carritoController from "../controllers/carritoController.js";

const router = Router();

router.get('/:userID', carritoController.getCarrito);
router.post('/', carritoController.addProducto);
router.delete('/:productID', carritoController.deleteProducto);

export default router;

