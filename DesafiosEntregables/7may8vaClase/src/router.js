const API =require('./api'); // usando la dependencia common js
const express = require('express');
const {Router} = express;
//import { ContainerMemoria } from "../Api/MemoryContainer.js"; // usando type module

const router = Router();
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/api/productos', router)
app.on("error", () => {console.log("error del servidor")})

let api= new API();
const PORT=8080;

app.listen(PORT, () => {console.log(`Servidor corriendo en el puerto ${PORT}`)});

// Devuelve todos los productos
router.get('/', (req, res) => {
   res.json(api.getAll());
   });

// Devuelve un producto segun su id
router.get('/:id', (req, res) => {
      res.json(api.getById(parseInt(req.params.id)));
   });

// Recibe y agrega un producto, y lo devuelve con su id asignado.
router.post('/', (req, res) => {
      const producto ={
         title: req.body.title, 
         price: req.body.price, 
         thumbnail: req.body.thumbnail};
      producto.id = api.getId();
      api.add(producto);
      res.json(api.getAll());
   });

// Recibe y actualiza un producto segun su id.
router.put('/:id', (req, res) => {
   const producto ={
      title: req.body.title, 
      price: req.body.price, 
      thumbnail: req.body.thumbnail};
      api.update(parseInt(req.params.id), producto);
      res.json(producto);
      
      if (api.error) res.json({ error: "Producto no encontrado" });
      res.json(producto);
   });

// Elimina un producto segun su id.
router.delete('/:id', (req, res) => {
      api.delete(parseInt(req.params.id));
      res.json(api.getAll());
      
      if (response.error) return res.json({ error: "Producto no encontrado" });
      res.json({ success: "Producto eliminado correctamente" });

});