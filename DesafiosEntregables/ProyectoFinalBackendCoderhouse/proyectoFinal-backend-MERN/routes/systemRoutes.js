import { Router } from 'express';
const router = Router();

import { getInfo } from '../controllers/systemController.js';

router.get('/', getInfo);

export default router;