import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port =8080;
const server = app.listen(port,()=>console.log(`Listening on port: ${port}`))

app.use(express.json()); // para q express pueda leer los json y poder recibirlo
app.use(cookieParser('palabraSecreta007DelPoder')); //use especial uso para middleware, va a tomar las cook de esta petision

//get para obtenerlas
app.get('/getCookie',(req,res)=>{ 
    console.log(req.cookies);
    res.send(req.cookies); 
})

//set para colocar las cookie de conexion
app.get('/setCookie',(req,res)=>{
    res.cookie('cookieConQuesito',{a:1,b:3}).status(400).send("Cookie set") //nombre de la cookie y el valor a1 b3
})

//tiempo expiracion de cookie 
app.get('/setExpCookie',(req,res)=>{
    res.cookie('cookieMortal','cookie :)',{
        maxAge:10000,
        signed:true //cookie firmada, para no poder modificar el valor en el campo VALUE del navegador
    }).send("Otra cookie mortal ha sido seteada")
})

//borra una cookie en especial, cookieConQuesito
app.get('/logout',(req,res)=>{
    res.clearCookie('cookieConQuesito').send('No more cookie');
})

//nos trae la cookie firmada, pero si la cambiamos lo muestra como false
app.get('/getSignedCookies',(req,res)=>{
    res.send(req.signedCookies);
})
