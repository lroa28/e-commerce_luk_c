// Clase 6: Servidores Web

//Ejercicio 1
/* Servidor en Node
MENSAJE SEGÚN LA HORA
Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo
a la hora actual: 
Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
Entre las 13 y las 19 hs será 'Buenas tardes!'. 
De 20 a 5 hs será 'Buenas noches!'.
Se mostrará por consola cuando el servidor esté listo para operar y en qué puerto lo está haciendo.
*/

/*

const http= require ('http')

const server = http.createServer((peticion, respuesta) => {
  let date = new Date(Date.now());
  let hour = date.getHours();
  
  if (hour >= 6 && hour < 13) {
    respuesta.end('Buenos días!');
  } else if (hour >= 13 && hour < 20) {
    respuesta.end('Buenas tardes!');
  } else {
    respuesta.end('Buenas noches!');
  }
});

const connectedServer = server.listen(8080, () => {
  console.log(
    `Servidor HTTP escuchando en el puerto ${connectedServer.address().port}`
  );
});
*/

//Ejercicio 2
/* Servidor con express= Crear un proyecto de servidor http en node.js que utilice la dependencia express
Crear un proyecto de servidor http en node.js que utilice la dependencia express, escuche en el puerto 8080 y tenga tres rutas get configuradas:
A) '/' en esta ruta raíz, el servidor enviará string con un elemento de título nivel 1 (un h1 en formato HTML) que contenga el mensaje: 'Bienvenidos al servidor express' en color azul.
B) '/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. Por ej. 'La cantidad de visitas es 10'
C) '/fyh' donde se devolverá la fecha y hora actual en formato objeto: 
{ fyh: '11/1/2021 11:36:04' }

Mostrar por consola el puerto de escucha del servidor al momento de realizar el listen. En caso de error, representar el detalle.
*/

const express = require("express")
const app = express()

const PORT = 8080
let counter = 0

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

// RUTAS
app.get('/', (req, res) => {
    res.send("<h1>Bienvenidos al server express</h1>");
 })

app.get('/visitas', (req, res) => {
    counter++;
    res.send("La cantidad de visitas es: "+counter);
 })
 
app.get('/fyh', (req, res) => {
    let fecha = new Date()
    let fecha_formateada = 
        fecha.getFullYear()+"-"
        +(fecha.getMonth()+1)+"-"
        +fecha.getDate()+" "
        +fecha.getHours()+":"
        +fecha.getMinutes()+":"
        +fecha.getSeconds();
    res.send({fyh: fecha_formateada});
 })
 
 //http://localhost:8080