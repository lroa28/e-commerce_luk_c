import express from 'express';
const app = express();
//import { initialize, session as _session, serializeUser, deserializeUser, use } from 'passport';
//import { Strategy as localStrategy } from 'passport-local';
//import { Strategy as JWTstrategy } from 'passport-jwt';
//import { ExtractJwt as ExtractJWT } from 'passport-jwt';
import { compareSync } from 'bcrypt';
import userModel from '../models/users.js';
import { enviarEthereal } from '../email/ethereal.js';
//import cookieParser from 'cookie-parser';

require('dotenv').config();

const strategyOptions = {
    usernameField: 'username',
    passwordField: 'password', 
    passReqToCallback: true,
}

const strategyJWT = {
    secretOrKey: process.env.JWT_SECRET_KEY,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
};

/*--------------*/


const register = (req, username, password, done) => {

        try{
            userModel.findOne({username: username}, function(err, user){
                console.log(username);
                if(err){
                    console.log(err);
                    return done(err);
                }
                // si user ya existe
                if (user) {
                    console.log('User already exists')
                    return done(null, false);
                } else {
                    const {name, address, passwordConfirm, phoneNumber} = req.body;
    
                    if(passwordConfirm === password){
                        const user = {
                            username,
                            password,
                            name, 
                            address,
                            phoneNumber: phoneNumber,
                            admin: "user"
                        }
                        const newUser = new userModel(user);
        
                        newUser.save()
                            .then(() => res.send('Registro exitoso'))
                            .catch((error) => ('Error en el regisro: ' + error))
                        
                        enviarEthereal(process.env.EMAIL_ADMIN, "Nuevo Registro", JSON.stringify(newUser));
    
                        return done(null, newUser);
                    } else {
                        console.log('Las contraseñas no coinciden. Vuelva a intentarlo.')
                        return done(null, false);
                    }
                }
            })
        } catch(error) {
            console.log(error);
            return done(error);
        }
}

const login = async(req, username, password, done) => {
    try{
        userModel.findOne({username: username},
            function(err, user) {
                console.log('----USER FOUND----');
                console.log(user);
                // if there is an error
                if(err) {
                    console.log(err);
                    return done(null, false);
                }
    
                // if username does not exist on db
                if(!user) {
                    console.log('Email incorrecto. Vuelva a intentarlo')
                    return done(null, false);
                }
    
                // if right user but wrong pwrd
                const validate = isValidPassword(user, password);
                console.log('----IS PWRD VALID?----');
                console.log(validate);

                if(!validate) {
                    console.log('Contraseña incorrecta. Vuelva a intentarlo')
                    return done(null, false);
                }
                console.log('----USER FOUND----');
                console.log(user);
                // tout est OK
                return done(null, user);
            }
        );
    } catch(error) {
        console.log(error);
        return done(error);
    }
}

const isValidPassword = function(user, password){        
    return compareSync(password, user.password);
} 

/*--------------*/
import session from 'express-session';

app.use(cookieParser());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 60000
    }
}));

app.use(initialize());
app.use(_session());



/*--------------*/

serializeUser(function(user, done) {
    done(null, user._id);
});

deserializeUser(function(id, done) {
    userModel.findById(id).then(user => {
        console.log(user);
        done(err, user);
    })
});

/*--------------*/

// middleware

use('register', new localStrategy(strategyOptions, register));
use('login', new localStrategy(strategyOptions, login));


use(
    new JWTstrategy(strategyJWT, async (token, done) => {
        try{
            return done(null, token.user);
        } catch(error){
            done(error);
        }
    })
);

