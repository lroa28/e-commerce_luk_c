import express, { Router } from 'express';
const app = express();
import passport from 'passport';
const router = Router();

import { getProducts, getByCategory, addProduct, updateProduct, deleteProduct } from '../controllers/productsController.js';
import auth from '../middleware/auth.js';


// routes

router.get('/:id?', getProducts);

router.get('/cat/:categoria', getByCategory);

router.post('/', addProduct);

router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;

