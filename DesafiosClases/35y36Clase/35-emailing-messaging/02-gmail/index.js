/*const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
import __dirname from './utils.js'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.GMAIL_USER,//cuenta de gmail que utilice para conectar
        pass: process.env.GMAIL_PASS //pass del aplicativo creado desde gmail
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: 'emanuelbalcazar13@gmail.com',
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba con archivo adjunto desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
    attachments: [
        {   // filename and content type is derived from path
            path: __dirname+ 'nodemailer.png'
        }
    ]
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err)
        return err
    }
    console.log(info)
})
*/

//USANDO EXPRESS y borrando todo lo anterior=
import __dirname from './utils.js'
import express from 'express'
import mongoose from 'mongoose'
import usersRouter from './routers/users.router.js'

const app = express ()
//const connection = mongoose.connect ('mongosh "mongodb+srv://cluster0.cjnbo.mongodb.net/myFirstDatabase" --apiVersion 1 --username lroa_luk_c')
const connection = mongoose.connect('mongodb+srv://lroa_luk_c:luka2107@cluster0.cjnbo.mongodb.net/?retryWrites=true&w=majority');
app.use (express.json())
app.use('/api/users', usersRouter)
app.listen(8080, ()=> console.log (`Listening on 8080`))
