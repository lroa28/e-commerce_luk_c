class api {
    constructor() {
        this.productos = []; // inicializa un array en 0
    }

// Devuelve todos los productos
getAll() {
    return this.productos;
}      

// Buscar en el array un producto por su id y devolver error en caso que no exista.
getById(id) {
    const producto = this.productos.find(producto => producto.id === id); //buscar dentro de ntro array
    if (!producto) {
        throw new Error('Producto no encontrado');
    }
    return producto;
}

/* POST '/api/productos' -> recibe un objeto y agrega un producto, y lo devuelve con su id asignado.*/
save(element) {
    element.id =
      this.elements.length === 0
        ? 1 //si no hay nada comienza en id: 1 por pedido del enunciado
        : this.elements[this.elements.length - 1].id + 1; //buscamos el mayor id
    this.elements.push(element);

    return element;
}

// Update de un producto segun su id, actualiza la posicion del array
updateById(id, producto) {
    const index = this.productos.findIndex(producto => producto.id === id);

    if(!index || index === -1) {
        throw new Error('Producto no encontrado');
    }
    //actualizamos el elemento, idem el after:
    this.elements[elementIndex] = {
        ...this.elements[elementIndex], //pisamos el objeto completo, pasamos copia del obj anterior con los nuevos datos en esa posicion
        ...newData,//copia del objeto
      };
     return this.elements[elementIndex]; //devolvemos el objeto nuevo en esa posicion
    //this.productos[index] = producto
    //this.productos[index].id = id;
    //return producto;
}

// Eliminar un producto del array segun su id
     deleteById(id) {
         if(!this.getById(id)){
             throw new Error('Producto no encontrado');
         }
         this.productos.splice(this.productos.findIndex(producto => producto.id === id),1);
     }
 
 }
/* resolucion del after:
  deleteById(id) {
    const elementIndex = this.elements.findIndex((e) => e.id == id);
    if (elementIndex === -1) return { error: true };
    this.elements = this.elements.filter((e) => e.id != id);//traer todo los id que son distintos a esos y creamos un nuevo array
    return { error: false };
  }
} 
*/

/* extras van?
//  Agregar un producto
    add(producto) {
         this.productos.push(producto);
      }
// Asignar una id a un producto.
     getId() {
         return this.productos.length > 0 ? this.productos[this.productos.length - 1].id + 1 : 1;
     }
*/

module.exports = api; // type commonjs (por defecto)
//export { api }; // type module


