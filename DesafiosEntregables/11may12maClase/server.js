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


//... Conexiones socket ...

io.on('connection', (socket) => {
  console.log("Nuevo cliente conectado!");

  /* Envio los mensajes al cliente que se conectó */
  socket.emit("nuevoMensaje", mensajes); //1re param es el indentificador y el 2do el mensaje

  /*Escucho los mensajes enviados por el cliente y se los propago a todos*/
  socket.on('mensaje', data => {
    mensajes.push({ socketid: socket.id, mensaje: data })
    io.sockets.emit('mensajes', mensajes);
});
});

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