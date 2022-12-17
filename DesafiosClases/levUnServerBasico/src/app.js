import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.send('ok');
})

app.listen(8080, ()=> console.log("Conectada"))

//correr
//node src/app.js , ok
//nodemon src/app.js, en este me sale un error ->zsh: command not found: nodemon