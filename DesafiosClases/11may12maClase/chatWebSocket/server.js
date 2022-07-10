const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("public"));

const mensajes = [ // array con objetos
  { author: "Juan", text: "¡Hola! ¿Que tal?" },
  { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
  { author: "Ana", text: "¡Genial!" }
];

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado!");

  /* Envio los mensajes al cliente que se conectó */
  socket.emit("mensajes", mensajes); //1re param es el indentificador y el 2do el mensaje

  /* Recibo los mensajes, 1re parametro lo traigo del front y 2do parametro es un callback q llegue a todos 
  con un io.sockets.emit */
  socket.on('nuevoMensaje', mensaje =>{
    mensajes.push(mensaje); // Push al array
    io.sockets.emit('mensajes', mensajes); //en plural sockets pq llegue a todos
  })
  
});

// conexión standar para el local host
const PORT = 8080 || process.env.PORT;
const connectedServer = httpServer.listen(PORT, function () {
  console.log(
    `Servidor Http con Websockets escuchando en el puerto ${
      connectedServer.address().port
    }`
  );
});
connectedServer.on("error", (error) =>
  console.log(`Error en servidor ${error}`)
);