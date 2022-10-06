import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port =8080;
const server = app.listen(port,()=>console.log(`Listening on port: ${port}`))

app.use(express.json());
app.use(cookieParser());

app.get('/cookies',(req,res)=>{//para poder devolverlas
    res.send(req.cookies);
})
app.post('/cookies',(req,res)=>{
    let {name,value,expires} = req.body; //post usa y lo recibe de body
    if(!name||!value) return res.status(400).send({status:"error",error:"Incomplete Values"})
    res.cookie(name,value,{ //seteamos la cookie
        maxAge:expires?expires*1000:10000 //si, si lo enviaron al exp, caso contrario que genere 1000segundos
    }).send("cookie set");
})

app.delete('/cookies/:cname',(req,res)=>{
    let cookie = req.params.cname;//para recibir cname 
    res.clearCookie(cookie).send("Cookie clear")
})