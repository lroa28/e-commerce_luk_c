import { Router } from 'express';
import { authenticate } from 'passport';
import mainController from '../controllers/mainController.js';

const router = Router();

import { LoginOk, logUser, LoginFail, Logout, RegisterOk, register, RegisterFail } from '../controllers/mainController.js';

/* -------------- routes -------------- */

// login
router.get('/login', LoginOk);
router.post('/login', authenticate('login', {session: false , 
                                                //successRedirect: '/api/auth/login',
                                                failureRedirect: '/api/auth/faillogin'
                                                }),  logUser); // ,  mainController.Redirect
router.get('/faillogin', LoginFail);
router.get('/logout', Logout);

// register
router.get('/register', RegisterOk);
router.post('/register', authenticate('register', {session: false , 
                                                //successRedirect: '/api/auth/login',
                                                failureRedirect: '/api/auth/failregister'}),  register); // ,  mainController.Redirect
router.get('/failregister', RegisterFail);

export default router;
