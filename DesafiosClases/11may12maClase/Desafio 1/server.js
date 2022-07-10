const express = require('express')
const { Server: HttpServer } = require('http') // Requerimos desde HTTP sino socket no funciona
const { Server: IOServer } = require('socket.io')

const app = express() //Instanciamos express
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer) //Llamamos a socket, hacemos la conexion

// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static('./public'))// Middleware

// Esta ruta carga nuestro archivo index.html en la raíz de la misma
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

// El servidor funcionando en el puerto 3000
httpServer.listen(3000, () => console.log('Listening on port 3000'));

// Conexion socket io, prendido desde el lado del servidor
io.on('connection', socket => {
    console.log('Nuevo cliente conectado!')  
})