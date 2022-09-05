import { Router } from 'express';
import loginController from '../controller/loginController';
import loginValidateController from '../controller/loginValidateController';
import loginValidateMidlleware from '../middlewares/validateLogin';
import allTeamsController from '../controller/allTeamsController';
import teamController from '../controller/teamController';
import matchesController from '../controller/marchesController';
import matchesControllerSearch from '../controller/matchesControllerSearch';
import newMatchController from '../controller/newMatchController';
import updatedMatchController from '../controller/updateMatchController';
import ValidateTeamsMidlleware from '../middlewares/validateTeams';
import updatedMatchInProgressController from '../controller/updateMatchInProgress';
import getLeaderboardController from '../controller/getLearderboardController';
import getLeaderboardHomeController from '../controller/getLearderboardHomeController';
import getLeaderboardAwayController from '../controller/getLearderboardAwayController';

const router = Router();

router.post('/login', loginValidateMidlleware, loginController);
router.get('/login/validate', loginValidateController);

router.get('/teams/:id', teamController);
router.get('/teams', allTeamsController);

router.patch('/matches/:id/finish', updatedMatchController);
router.patch('/matches/:id', updatedMatchInProgressController);
router.get('/matches/search', matchesControllerSearch);
router.get('/matches', matchesController);
router.post('/matches', ValidateTeamsMidlleware, newMatchController);

router.get('/leaderboard/home', getLeaderboardHomeController);
router.get('/leaderboard/away', getLeaderboardAwayController);
router.get('/leaderboard', getLeaderboardController);

export default router;
