import { Router } from "express";
import loginController from "../controller/loginController";
import loginValidateController from "../controller/loginValidateController";
import loginValidateMidlleware from '../middlewares/validateLogin';
import allTeamsController from '../controller/allTeamsController';
import teamController from "../controller/teamController";

const router = Router();

router.post('/login', loginValidateMidlleware, loginController);
router.get('/login/validate', loginValidateController)

router.get('/teams/:id', teamController)
router.get('/teams', allTeamsController);
export default router;
