import { Router } from 'express';
import loginController from '../controller/loginController';
import loginValidateController from '../controller/loginValidateController';
import loginValidateMidlleware from '../middlewares/validateLogin';
import allTeamsController from '../controller/allTeamsController';
import teamController from '../controller/teamController';
import matchesController from '../controller/marchesController';

const router = Router();

router.post('/login', loginValidateMidlleware, loginController);
router.get('/login/validate', loginValidateController);

router.get('/teams/:id', teamController);
router.get('/teams', allTeamsController);

router.get('/matches', matchesController);
export default router;
