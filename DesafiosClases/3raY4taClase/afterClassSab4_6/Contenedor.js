const fs = require('fs') //nos traemos-requerimos el modulo file system

class Contenedor {
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }

/*Metodos de la Class Contenedor*/

    async getAll() { //metodo que lee el archivo y devuelve el contenido. Obtiene todo.
        try {
            const file = await fs.promises.readFile(this.nombreArchivo)
            const fileConverted = JSON.parse(file) 
            //el archivo anterior lo convertimos a un obj Json de javascript
            //El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis.
            return fileConverted
           
        } catch (error) {
           const array = []
           await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(array))
           //El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
           // Por ej: console.log(JSON.stringify({ x: 5, y: 6 }));
           // expected output: "{"x":5,"y":6}"
           return array
        }
    }
 /* EJEMPLO DE JSON.parse y JSON.stringify
const myObj = {
  name: 'Skip',
  age: 2,
  favoriteFood: 'Steak'
};

const myObjStr = JSON.stringify(myObj);

console.log(myObjStr);
// "{"name":"Sammy","age":6,"favoriteFood":"Tofu"}"

console.log(JSON.parse(myObjStr));
// Object {name:"Sammy",age:6,favoriteFood:"Tofu"}

 */

    async save(objeto) {
        //siempre para las tareas asincronas hacer un try y catch
        try { 
            //debemos volver a leer el archivo, nos traemos el try anterior
            //necesitamos mostrar los elementos o un array, usamos await xq es asincrono
            const elementos = await this.getAll()                                  
            //const elementos = [ {id: 1, title: 'prueba'}, {id: 2, title: 'prueba1'} ].length = 2  //hay 2 elementos
            // let id
            // if(elementos.length === 0){
            //     id = 0 
            // } else {
            //     id = elementos[elementos.length - 1].id + 1
            // }
            // objeto.id = id 
            const nuevoID = elementos.length === 0 ? 1 : elementos[elementos.length - 1].id + 1 //operador ternario
            objeto.id = nuevoID
            elementos.push(objeto)
            const elementosJson = JSON.stringify(elementos, null, 3) //3 espacio entre lineas
            await fs.promises.writeFile(this.nombreArchivo, elementosJson) //le pasamos la ruta y el archivo parseado
            return nuevoID
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async getById(id) { //id podria ser cualquier nombre
        try {
            const elementos = await this.getAll()
            const elementoEncontrado = elementos.find((elemento) => elemento.id == id) //metodo find para buscar un solo elemento. Buscamos el ID del getByID
            return elementoEncontrado
        } catch (error) {
            console.log(error)    
        }
    }

    async deleteById(id) {
        try {
            const elementos = await this.getAll()
            const nuevoArray = elementos.filter((elemento) => elemento.id != id)
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(nuevoArray, null, 3))
            return 'Eliminado'
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify([]))
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports =  Contenedor //sentencia para poder requerirlo en otro archivo

// const ProductosContenedor = new Contenedor('./productos.txt')
// ProductosContenedor.getAll().then(data => console.log(data)).catch()
// const prueba = async () => {
//     const resultado = await 
// }

// const prueba = async () => { 

//     //const productos = await ProductosContenedor.getAll() //guardamos lo que devuelve el getAll()
//     //console.log(productos)
//     //const respuesta = await ProductosContenedor.save({ title: 'Prueba4', price: 600 })
//     //console.log(`El nuevo producto tiene el id: ${respuesta}`)

//     // const elementoEncontrado = await ProductosContenedor.getById(1) 
//     // console.log(elementoEncontrado)

//     //await ProductosContenedor.deleteById(2)
//     await ProductosContenedor.deleteAll()
// }
// prueba()
// ProductosContenedor.getAll().then(data => console.log(data)).catch(error => console.log(error))
