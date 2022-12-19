import express, { Router } from 'express';
import { initialize, session as _session, authenticate } from 'passport';
import session from 'express-session';

const router = Router();
const app = express();

import main from './mainRoutes.js';
import productos from './productosRoutes.js';
import orders from './ordenRoutes.js';
import cart from './carritoRoutes.js';
import mensajes from './mensajesRoutes.js';
import system from './systemRoutes.js';


app.use(('public'));

app.use(initialize());
app.use(_session());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 60000
    }
}));

router.use('/auth', main);
//router.use('/', main);
router.use('/products', authenticate('jwt', {session: false}), productos);
router.use('/orders', authenticate('jwt', {session: false}), orders);
router.use('/cart', authenticate('jwt', {session: false}), cart);
router.use('/chat', authenticate('jwt', {session: false}), mensajes);
router.use('/system', system);

router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({error: err});
});

export default router;

// passport.authenticate('jwt', {session: false}),