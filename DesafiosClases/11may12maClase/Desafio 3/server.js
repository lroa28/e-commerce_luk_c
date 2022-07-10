const express = require('express')
const { Server: HttpServer } = require('http') // Requerimos desde HTTP sino socket no funciona
const { Server: IOServer } = require('socket.io')

const app = express() //Instanciamos express
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer) //Llamamos a socket, hacemos la conexion

// Para persistir los mensajes creo una array
const mensajes = []

// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static('public')) // Middleware para que ingrese a la carpeta public

// Conexion socket io, prendido desde el lado del servidor
io.on('connection', socket => {
    console.log(`Nuevo cliente conectado ${socket.id}`)

    /* Envio los mensajes al cliente que se conecta */
    socket.emit('mensajes', mensajes)

    /* Escucho los mensajes enviado por el cliente y se los propago a todos */
    socket.on('mensaje', data => {
        mensajes.push({ socketid: socket.id, mensaje: data }) // es un ID propio del socket lo arma él
        io.sockets.emit('mensajes', mensajes)
    })

})

const PORT = 3000
const connectedServer = httpServer.listen(PORT, function () {
    console.log(`Servidor Http con Websockets escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))
