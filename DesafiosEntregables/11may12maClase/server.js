const express = require('express')

const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static('public'))

// Esta ruta carga nuestro archivo index.html en la raíz de la misma
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})


//...
io.on('connection', (socket) => {
// "connection" se ejecuta la primera vez que se abre una nueva conexión
  console.log('Usuario conectado')
// Se imprimirá solo la primera vez que se ha abierto la conexión    
})

 // Servidor
 io.on('connection', socket => {
    console.log('Usuario conectado')
    socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor')
})

 // Cliente
 socket.on('mi mensaje', data => {
    alert(data)
})

// Cliente
socket.on('mi mensaje', data => {
    alert(data)
    socket.emit('notificacion', 'Mensaje recibido exitosamente')
})

 // Servidor
 socket.on('notificacion', data => {
    console.log(data)
})

io.on('connection', socket => {
    console.log('¡Nuevo cliente conectado!');

/* Envio los mensajes al cliente que se conectó*/
socket.emit('mensajes', mensajes);

/*Escucho los mensajes enviados por el cliente y se los propago a todos*/
socket.on('mensaje', data => {
    mensajes.push({ socketid: socket.id, mensaje: data })
    io.sockets.emit('mensajes', mensajes);
});
});

// El servidor funcionando en el puerto 3000
// httpServer.listen(3000, () => console.log('SERVER ON'))

// conexión standar para el local host
const PORT = 8080 || process.env.PORT;
const connectedServer = httpServer.listen(PORT, function () {
  console.log(
    `Servidor Http con Websockets escuchando en el puerto ${connectedServer.address().port
    }`
  );
});

connectedServer.on("error", (error) =>
  console.log(`Error en servidor ${error}`)
);