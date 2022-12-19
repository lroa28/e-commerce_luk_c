/* ----------------------- IMPORTS ----------------------- */
import express from 'express'
import { connect } from 'mongoose'
import cors from 'cors'
import app from './services/server.js'
import mainRoutes from './routes/mainRoutes.js'
import {__dirname} from './utils.js' //con llaves por el export


require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working
app.use (cors()) //nos permite permitir las conexiones de origen externas
const http = require('http').createServer(app)
const io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users',usersRouter);
app.use('/api/sessions',sessionsRouter);
const server= app.listen(8080,()=>console.log("Listening"))

/* ----------------------- CHAT ----------------------- */
import messagesModel, { find } from './models/mensajes.js';


io.on('connection', (socket)=>{
    console.log("User connected");

    find({}).lean()
        .then((myMessages) => socket.emit('messages', myMessages))
        .catch((err) => res.send(err));

    socket.on('new-message', function(data) {

        console.log(data);

        const messageSaved = new messagesModel({
            userEmail: data.userEmail,
            tipo: data.tipo,
            timestamp: data.timestamp,
            mensaje: data.mensaje
        });

        console.log(messageSaved);

        messageSaved.save()
            .then( () => io.emit('messages', messageSaved))
            .catch( (err) => res.status(400).json({
                status: 400,
                message: err
            }));
        
    })
})

/* ----------------------- SERVER + DB CONNECTION ----------------------- */

http.listen( process.env.PORT|| process.env.DEV_PORT, ()=>{
    connect(process.env.DB_CONN, 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }
    )
        .then( () => console.log('Base de datos conectada') )
        .catch( (err) => console.log(err) );
    console.log(`Running on PORT ${process.env.DEV_PORT} - PID WORKER ${process.pid}`);
        
});

