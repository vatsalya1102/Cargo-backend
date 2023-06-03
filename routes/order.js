import express from 'express';
import auth from '../middleware/auth.js'

import { getOrdersForManu } from '../controller/order.js';

const router = express.Router();

router.get('/:manufacturer', auth, getOrdersForManu);

export default router;