import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';//marca de ruta absoluta
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/session.router.js';
import MongoStore from 'connect-mongo';
import session from 'express-session';

const app = express(); 
const server = app.listen(9090,()=>console.log("Listening :)"));
const connection = mongoose.connect('mongodb+srv://lroa_luk_c:luka2107@cluster0.cjnbo.mongodb.net/?retryWrites=true&w=majority');

app.engine('handlebars',handlebars.engine());//para trabajar con el motor de handlerbars, lo seteamos
app.set('views',__dirname+'/views');//carpeta de vistas o puts
app.set('view engine','handlebars');
app.use('/',viewsRouter);// en la ruta raiz xq el cliente ve la vista en la page principal sin poner /views
//Conectar a la base de datos
app.use('/api/sessions',sessionsRouter)
app.use(express.json());
app.use(express.static(__dirname+'/public'))

//ya lo dejamos en el archivo views.routers.js
//app.get('/',(req,res) => { 
//    res.render('home');
//})

//middleware de sesion
app.use(session({
    store:MongoStore.create({
        mongoUrl:'mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/coderBase?retryWrites=true&w=majority',
        mongoOptions:{useNewUrlParser:true,useUnifiedTopology:true},
        ttl:100
    }),
    secret:"PapaConQuesito",
    resave:false,
    saveUninitialized:false
}))


