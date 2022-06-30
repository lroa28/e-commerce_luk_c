const socket = io(); // Ya podemos empezar a usar los sockets desde el cliente :)

 //...
 io.on('connection', (socket) => {
    // "connection" se ejecuta la primera vez que se abre una nueva conexión
      console.log('Usuario conectado')
    // Se imprimirá solo la primera vez que se ha abierto la conexión    
    })
  