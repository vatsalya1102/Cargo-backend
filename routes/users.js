import express from "express";
import { signin, signup, getTransporters } from "../controller/users.js";

const router = express.Router();

router.post('/signin', signin);

router.post('/signup', signup);

router.get('/', getTransporters);

export default router;