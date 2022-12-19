import express, { Router, json } from 'express';
const router = Router();
const app = express();

app.use(json())

import { getChat, getMsgByEmail } from '../controllers/mensajesController.js';

router.get('/', getChat);

router.get('/:email', getMsgByEmail);

export default router;
