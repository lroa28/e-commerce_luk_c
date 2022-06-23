const express = require('express')
const app = express()

const ContenedorProductos = new Contenedor('./productos.txt') //creamos la instancia y podemos hacer los metodos
const PORT = 8080

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))  
/* 3ra entrega: Servidor con express
>> Consigna:
Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.
*/

// http://localhost:8080/productos
// metodo express, que devuelve un array con todos los productos disponibles en el servidor
app.get('/productos', async (req, res) => {
    try {
        const productos = await ContenedorProductos.getAll()
        res.send(productos)
    } catch (error) {
        res.send(error)
    }
})

app.get('/productoRandom', async (req, res) => {
    const productos = await ContenedorProductos.getAll()
    const indice = Math.floor(Math.random() * productos.length)
    res.send(productos[indice])
})


/* en el package-json puedo hacer que corra automatico
"start": "nodemon nombre del archivo" // para ejecutar npm start desde consola
*/
/* formato JSON Formatter para Chrome 
https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=es
*/