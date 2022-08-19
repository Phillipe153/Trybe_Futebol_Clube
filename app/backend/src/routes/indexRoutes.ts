import { Router } from "express";
import loginController from "../controller/loginController";
import loginValidateMidlleware from '../middlewares/validateLogin'

const router = Router();

router.post('/login', loginValidateMidlleware, loginController)

export default router;
