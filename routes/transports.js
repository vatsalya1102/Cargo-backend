import express from 'express';
import auth from '../middleware/auth.js'

import { createOrder, getOrders, updateOrder } from "../controller/transports.js";

const router = express.Router();

router.post('/', auth, createOrder);

router.get('/:transporter', auth, getOrders);

router.patch('/:id', auth, updateOrder); 

export default router;