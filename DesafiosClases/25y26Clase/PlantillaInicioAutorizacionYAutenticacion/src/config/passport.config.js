import passport from "passport";
import local from 'passport-local'; //la estrategia
import usersService from '../models/Users.js';//la persistencuia  
import { createHash, isValidPassword } from "../utils.js";
import GithubStrategy from 'passport-github2';

const LocalStrategy = local.Strategy; //strategy local = username + password

const initializePassport = () => {//funcion

    passport.use('register', new LocalStrategy({ passReqToCallback: true, usernameField: 'email' }, async (req, email, password, done) => {
        //passport no devuelve rtas
        //fx done permite devolver todo
        //usamos la misma logica de session
        try {
            const { name } = req.body;
            if (!name || !email || !password) return done(null, false);
            let exists = await usersService.findOne({ email: email });
            if (exists) return done(null, false);
            let result = await usersService.create({
                name,
                email,
                password: createHash(password)
            })
            //SI TODO SALIÓ BIEN
            return done(null, result)
        }
        catch (error) {
            return done(error);
        }
    }))

    passport.use('login',new LocalStrategy({usernameField:"email"},async(email,password,done)=>{
        try{
            if(!email||!password) return done(null,false);
            let user = await usersService.findOne({email:email});
            if(!user) return done(null,false);
            if(!isValidPassword(user,password)) return done(null,false);
            return done(null,user)
        }catch(error){
            console.log(error);
            return done(error);
        }
    }))

    passport.use('github', new GithubStrategy({
        clientID:'Iv1.074d9b40a4be4b11',
        clientSecret:'5aa3d0b33e58ace42cf445bf18d0a415696f08a5',
        callbackURL:'http://localhost:8080/api/sessions/githubcallback'
    },async(accesToken,refreshToken,profile,done)=>{
        try{
            let user = await usersService.findOne({email:profile._json.email})
            if(!user){//Create
                let newUser = {
                    name:profile._json.name,
                    email:profile._json.email,
                    password:''
                }
                let result = await usersService.create(newUser);
                return done(null,result);
            }
            else{
                return done(null,user);
            }
        }catch(error){
            console.log(error);
            done(error);
        }
    }))

    //serializar y deserializar/crear un archivo en mongo por ID del usuario
    passport.serializeUser((user,done)=>{
        done(null,user._id)
    })
    passport.deserializeUser(async(id,done)=>{
        let result = await usersService.findOne({_id:id})
        return done(null,result);
    })
}

export default initializePassport;
