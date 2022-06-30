import express from 'express'

const app = express()

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/hello', (req, res) => { //entrar a la URL y poner esa ruta
    res.render('hello.pug', { mensaje: 'Hola estoy usando Pug desde Express' }); //le pasamos el archivo hello.pug
}
);
/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))