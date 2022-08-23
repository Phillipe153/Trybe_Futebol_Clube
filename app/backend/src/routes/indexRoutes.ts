import { Router } from "express";
import loginController from "../controller/loginController";
import loginValidateController from "../controller/loginValidateController";
import loginValidateMidlleware from '../middlewares/validateLogin'

const router = Router();

router.post('/login', loginValidateMidlleware, loginController);
router.get('/login/validate', loginValidateController)

export default router;
