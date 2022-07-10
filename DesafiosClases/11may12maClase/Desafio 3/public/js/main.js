//frontend
const socket = io.connect();

const input = document.querySelector('input') // Podemos buscarlo por id tb
document.querySelector('button').addEventListener('click', () => { // lo que necesito enviarle a mi backend
    socket.emit('mensaje', input.value);
})

socket.on('mensajes', msjs => { // msjs es la var data, son los mensajes que recibo
    const mensajesHTML = msjs //la guardo en una const para mapearla
        .map(msj => `SocketId: ${msj.socketid} -> Mensaje: ${msj.mensaje}`) // recorre el array y hace lo que le digo en el callback, viene del obj del server
        .join('<br>') //join para separar los elems del array
    document.querySelector('p').innerHTML = mensajesHTML
});

