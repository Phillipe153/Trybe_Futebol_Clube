import { Router } from "express";
import loginValidateMidlleware from '../middlewares/validateLogin'

const router = Router();

router.post('/login', loginValidateMidlleware)

export default router;
