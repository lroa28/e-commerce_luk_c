const socket = io.connect();

const input = document.querySelector('input') // trabajamos con el DOM, seleccionamos el input
input.addEventListener('input', () => {
    socket.emit('mensaje', input.value); //emito desde el cli al servidor
});

//prendemos el socket
socket.on('mensajes', data => {
    document.querySelector('p').innerText = data //enviamos a la etiq <p> le paso la data de backend
});
