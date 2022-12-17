//como lo hizo en clase el prof=
import __dirname from './utils.js'
import express from 'express'
//import mongoose from 'mongoose'
//import usersRouter from './routers/users.router.js'
import twilio from 'twilio'

const app = express ()
//const connection = mongoose.connect ('mongosh "mongodb+srv://cluster0.cjnbo.mongodb.net/myFirstDatabase" --apiVersion 1 --username lroa_luk_c')
//const connection = mongoose.connect('mongodb+srv://lroa_luk_c:luka2107@cluster0.cjnbo.mongodb.net/?retryWrites=true&w=majority');
app.use (express.json())

const TWILIO_ACCOUNT_SID= ""
const TWILIO_AUTH_TOKEN= ""
const TWILIO_SMS_NUMBER= "+13000000241"
const TWILIO_WS_NUMBER= "+14000000886"
const client = twilio (TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN ) 

//creamos los sms
app.get('/twiliosms', async (req, res)=>{
    let result = await client.messages.create({
        body:"este es un mensaje de twilio",
        from: WILIO_SMS_NUMBER, //quien te esta enviado, telef de tw
        to: "" //telefono de prueba que poseo de pruebas
    })
    res.send({status:"success", message:"sms enviado"})
})

//creamos los sms para WhatsApp
app.get('/twiliowhatsapp', async (req, res)=>{
    let result = await client.messages.create({
        body:"este es un mensaje de twilio como si fuera ws",
        from:`whatsapp:${TWILIO_WS_NUMBER}`, //quien te esta enviado, telef de tw
        to: `+5215562201635`, //telefono de prueba que poseo de pruebas,
        mediaUrl:['https://media.istockphoto.com/id/1341633075/es/foto/dulce-y-lindo-perro-corgi-cachorro-caminando-sobre-fondo-blanco-amigo-peludo.jpg?b=1&s=170667a&w=0&k=20&c=xdwfVmw-kBhdTgWynQREMnVhRNDiusye-Iu-fj3hIkU=']
    })
    res.send({status:"success", message:"whatsapp enviado"})
})

//app.use('/api/users', usersRouter)
app.listen(8080, ()=> console.log (`Listening on 8080`))    