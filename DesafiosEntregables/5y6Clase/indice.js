/*El formato de cada producto será : 
{
    title: (nombre del producto),
    price: (precio),
    thumbnail: (url de la foto del producto)
}
*/

const Contenedor = require('./DesafiosEntregables/5tay6taClase/contenedor');

const producto1 =    {
    "title": "Set1",
    "price": 500,
    "thumbnail": "https://firebasestorage.googleapis.com/v0/b/lukc-ecarrito-npx.appspot.com/o/set2.jpg?alt=media&token=7fa4adbe-8a02-481f-a5b1-99ce3cd25ee6",
    "id": 1
}
const producto2 =    {
    "title": "Buzo",
    "price": 6500,
    "thumbnail": "https://firebasestorage.googleapis.com/v0/b/lukc-ecarrito-npx.appspot.com/o/canguroNegro.png?alt=media&token=1b2bbc64-183e-4172-9e81-4b11fcd34dfc",
    "id": 2
}
const producto3 =   {
    "title": "Cuello",
    "price": 700,
    "thumbnail": "https://firebasestorage.googleapis.com/v0/b/lukc-ecarrito-npx.appspot.com/o/cuellos1.jpg?alt=media&token=b36435f7-7442-46ce-8e34-d6b9dde74b88",
    "id": 3
}
const producto4 = {
    "title": "Barbijo",
    "price": 500,
    "thumbnail": "https://firebasestorage.googleapis.com/v0/b/lukc-ecarrito-npx.appspot.com/o/barbijos.jpg?alt=media&token=85d80891-ec40-4354-a189-7b666d4004d1",
    "id": 4
}
    
async function main (){
     const contenedor = new Contenedor('./DesafiosEntregables/3ray4taClase/productos.txt');

     console.log("Mostrando Productos")
     let objs =  await contenedor.getAll();
     console.log(objs)
     console.log('******************');

     console.log("GUARDO PRODUCTO 1")
     let idp1 = await contenedor.save(producto1)
     console.log("id de producto1:" ,idp1)
     console.log('******************');

     console.log("GUARDO PRODUCTO 2")
     let idp2 = await contenedor.save(producto2)
     console.log("id de producto2:" ,idp2)
     console.log('******************');
   
     console.log("GUARDO PRODUCTO 3")
     let idp3 = await contenedor.save(producto3);
     console.log("id de producto3:" ,idp3)
     console.log('******************');

     console.log("GUARDO PRODUCTO 3")
     let idp4 = await contenedor.save(producto4);
     console.log("id de producto4:" ,idp4)
     console.log('******************'); 

     console.log("Mostrando Productos")
     objs =  await contenedor.getAll();
     console.log(objs)
     console.log('******************');

      console.log("BUSCANDO POR ID")
      const res = await contenedor.getById(idp1);   
      console.log("res",res);
      console.log('******************');

      console.log("ELIMINANDO POR ID")
      objs =  await contenedor.deleteById(1);
      console.log('******************');

     console.log("ELIMINANDO TODO")
     objs =  await contenedor.deleteAll();
     console.log('******************');
}

main ()