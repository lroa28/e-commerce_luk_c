//configuraciones del lado del CLIENTE DESDE EL FRONT

const socket = io(); // Ya podemos empezar a usar los sockets desde el cliente 

const input = document.querySelector('input');
input.addEventListener('input', ()=>{
  socket.emit('mensaje', input.value);
})

//Cliente, Recepción de datos del servidor (cliente)
socket.on('mensajes', data =>{

  document.querySelector('p').innerText = data
})