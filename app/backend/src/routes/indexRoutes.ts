import { Router } from "express";
import loginController from "../controller/loginController";
import loginValidateController from "../controller/loginValidateController";
import loginValidateMidlleware from '../middlewares/validateLogin';
import allTeamsController from '../controller/allTeamsController';

const router = Router();

router.post('/login', loginValidateMidlleware, loginController);
router.get('/login/validate', loginValidateController)

router.get('/teams', allTeamsController);
// router.get('teams/:id', teamController)
export default router;
