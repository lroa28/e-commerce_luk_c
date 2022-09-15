import express from 'express';
import crearRouterUsuarios from './router/usuarios.js'

const app = express();
const PORT = 8080;
const server = app.listen ( PORT, () => console.log('Listo conectado'))

//llamo a la ruta de users
app.use ('/users', crearRouterUsuarios);