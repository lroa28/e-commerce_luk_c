import express, { urlencoded, json } from 'express';
import { cartsservice, userservice } from "../services/service.js";
import {createHash} from '../utils.js';
const app = express();
import { authenticate } from 'passport';
import { sign } from "jsonwebtoken";
import handlebars from 'express-handlebars';

require('dotenv').config();

app.engine(
    "hbs", 
    handlebars({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
    })
);

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(('public'));
app.use(urlencoded({extended:true}));
app.use(json());
//const userModel = require('../models/users');

    
/* -------------- routes -------------- */

// login

const logUser = async (req, res, next) => {
    authenticate('login', async(err, user, info) => {
        try {
            if(err) {
                return next(err);
            }
            console.log('----USER FOUND PASS AUTHENTICATE----');
            console.log(user);

            if(!user && info){
                return res.status(401).json({message: info.message});
            }

            req.login(
                user, 
                {session: false},
                async(error) => {
                    if(error){
                        return next(error);
                    }

                    const body = {_id: user._id, email: user.username, admin: user.admin};
                    const token = sign({user:body}, process.env.JWT_SECRET_KEY, {expiresIn: process.env.TOKEN_KEEP_ALIVE});

                    console.log(token);
                    return res.json({token});
                    //return done(null, user);
                }
            );
        } catch(error) {
            return next(error);
        }
    })(req, res, next);
}

const LoginOk = (req, res, next) => {
    console.log('----USER AUTHENTICATED----');
    console.log(req.isAuthenticated())
    if(req.isAuthenticated()){
        res.render("welcome", { user }); //da constantemente false
    }
    else {
        res.sendFile(process.cwd() + '/public/login.html')
    }
}

const LoginFail = (req, res, next) => {
    res.render('login-error', {});
}

const Logout = (req, res, next) => {
    let nombre = req.user.name;

    req.logout();
    res.render("logout", { nombre });
}

const Redirect = (req, res, next) => {
    res.redirect('/api/auth/login');
}

// register

//const register = async(req, res, next) => {
//    res.json({
//        message: 'Registro exitoso',
//        user: req.user
//    });
//}

const register = async(req,res) =>{
    let {username,name, last_name,email,phoneNumber,password} = req.body;
    try{
        if(!req.file) return res.status(500).send({status:"error",error:"No se pudo cargar la imagen"}) //multer devuelve un file
        let user = await userservice.getBy({email});
        if(user) return res.status(400).send({status:"error",error:"El usuario ya existe"})
        let cart = await cartsservice.save({products:[]});
        const hashedPassword = await createHash(password);
        const newUser = {
            username,
            name, 
            last_name,
            email,
            password:hashedPassword,
            phoneNumber,
            carritos:cart._id,/* anexo cada carrito a cada usuario segun el modelo*/
            avatar:`${req.protocol}://${req.host}:${process.env.PORT}/images/${req.file.filename}`
        }
        let result = await userservice.save(newUser);
        res.send({status:"success",message:"User added"});

    }catch(error){
        res.status(500).send({status:"error",error:"Error del Servidor"})
    }
} 

const RegisterOk = (req, res, next) => {
    res.sendFile(process.cwd() + '/public/register.html');
}; 

const RegisterFail = (req, res) => {
    res.render('register-error', {});
}


export default {
    logUser,
    register,
    RegisterOk,
    RegisterFail,
    LoginOk,
    LoginFail,
    Logout,
    Redirect
};

