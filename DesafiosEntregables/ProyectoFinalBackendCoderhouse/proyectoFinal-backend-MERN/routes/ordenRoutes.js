import { Router } from 'express';
import { getOrden, getOrdenesByID, checkout, complete } from '../controllers/ordenController.js';

const router = Router();

router.get('/:numOrden', getOrden);
router.get('/:userID', getOrdenesByID);
router.post('/checkout/:userID', checkout);
router.post('/complete/:numOrden', complete);

export default router;