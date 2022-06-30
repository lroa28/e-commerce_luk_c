const express =  require('express');

/* 1re Ejemplo: metodo APP.GET:

const express =  require('express');
const app = express();

app.get('/api/user', (req, res) => { //el endpoint es la ruta al que le vamos a pegar
    //req no recibe nada
    res.json (mje: 'Hola mundo!')
})

const PORT  = 8080;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
*/

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* Ejemplo para  req.query, RECIBE algo*/

app.get('/api/productos',(req, res)=> { //el endpoint es la ruta. Req y Res son objetos
 if(Object.entries(req.query).length > 0){ //req recibe algo
    res.json({
    result: 'obtuve una query',
    query: req.query
   })
 }
 else{
  res.json({
    result: 'no obtuve una query',
  })
 }
})

/* Ejemplo para req.params se escribe en la URI /:id */

// let productos = [{ nombre: "Laptop", precio: 1000},	{nombre: "Teclado", precio: 200},	{nombre: "Mouse", precio: 50}]; //array con objetos
// app.get('/api/productos/:id',(req, res)=> {
// let id = req.params.id;
// console.log(id);
// let producto = productos[id];
// res.json({result: 'todo ok', producto: producto});
// }
// )
//Resultado que veo: localhost:8080/api/productos/1
/*
{
    "result": "todo ok",
    "producto": {
        "nombre": "Laptop", 
        "precio": 1000
    }
}
*/

/* Ejemplo POST*/

// app.post('/api/productos',(req, res)=> {
//   let producto = req.body;
//   console.log(producto);
//   productos.push(producto); //sin BD esta es ntra persistencia hoy
//   res.json({
//     result: 'obtuve una query',
//     producto: producto
//   })
// });

let productosID = [{id: 1, nombre: "Laptop", precio: 1000},	{id: 2, nombre: "Teclado", precio: 200},	{id: 3,nombre: "Mouse", precio: 50}];

/* Ejemplo DELETE */ //TERMINAR!
app.delete("/api/productos/:id", (req, res)=>{
  res.json({
    result: 'obtuve una query',
    id: req.params.id,
  })
})

/* Ejemplo PUT*/
app.put("/api/productos/:id", (req, res)=>{
  let productoID = parseInt(req.params.id); //siempre viene como string
  let producto = req.body;
  let productoEncontrado = productosID.find(producto => producto.id === productoID); //productosID busco del array let productosID
  //actualizo
  productoEncontrado.nombre = producto.nombre;
  productoEncontrado.precio = producto.precio;
  console.log(productoEncontrado);
  res.json({producto: productoEncontrado})
})

const PORT  = 8080;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);