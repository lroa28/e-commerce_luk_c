//app.js será ntro servidor express
import express from 'express';
const app = express ();

const PORT = 8080;
const server = app.listen (PORT, () => console.log ("Hola mundo!"))

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']


app.get ( '/test' , (req,res) => {
// mostrar un nombre random
let testUser ={
    name: nombres [Math.floor(Math.random()*4)],
    last_name: apellidos [Math.floor(Math.random()*4)],
    colour: colores [Math.floor(Math.random()*4)]
}
res.send (testUser);

})