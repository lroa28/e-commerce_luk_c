//PARA RECIBIR LOS MENSAJES

const socket = io.connect(); // depende la version puede o no funcionar con connect

function render(data) { // recibe la data del servidor
  const html = makeHTML(data);
  document.getElementById("mensajes").innerHTML = html;
}

function makeHTML(mensajes) { // Recibe los mensajes
  return mensajes
    .map((elem, index) => { //Crea una matriz de la original
      return `<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`;
    })
    .join(" ");
}

socket.on("mensajes", (mensajes) => { //On para que nos escuche, mismo nombre de parametro que tiene el server en -> socket.emit("mensajes", mensajes);
  render(mensajes);
});

// desde el front hacia el back, se envia al server
function addMessage(e) {
  const mensaje = {
    author: document.getElementById("username").value,
    text: document.getElementById("texto").value,
  };
  socket.emit("nuevoMensaje", mensaje);
  return false;
}