const socket = io.connect();

function enviarMensaje() {
  const nombre = document.getElementById("nombre");
  const mensaje = document.getElementById("mensaje");

  if (!nombre.value || !mensaje.value) {
    alert("Debe completar los campos");
    return false;
  }

  socket.emit("mensajeNuevo", { autor: nombre.value, texto: mensaje.value });
  mensaje.value = "";
  return false;
}

function borrarMensajes() {
  const autor = document.getElementById("nombre").value;

  socket.emit("borrarMensajes", autor);
}

const btnBorrarMensajes = document.getElementById("eliminarMensaje");
btnBorrarMensajes.addEventListener("click", borrarMensajes);

socket.on("mensajes", (mensajes) => {
  let mensajesHtml = mensajes
    .map((mensaje) => `<span><b>${mensaje.autor}: </b>${mensaje.texto}</span>`)
    .join("<br>");

  document.getElementById("listaMensajes").innerHTML = mensajesHtml;
});
