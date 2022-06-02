//Desafio entregable 1re clase:
/*
1) Declarar una clase Usuario
2) Hacer que Usuario cuente con los siguientes atributos:
nombre: String
apellido: String
libros: Object[]
mascotas: String[]
Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.
*/

/* Estaria mal ponerles datos a alguna propiedad del constructor?
class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre= nombre;
        this.apellido= apellido;
        this.libros= libros [
            {  
            nombre: "Anne Frank",
            autor: "Otto Frank",
            },
            { 
            nombre:"Cien años de soledad",
            autor: "Gabriel Garcia Marquez",
            },
        ];
        this.mascotas= mascotas ["Perro" , "Gato"];
    }
*/
    class Usuario{
        constructor(nombre, apellido, libros, mascotas){ //The class has four initial properties
            this.nombre = nombre;
            this.apellido = apellido;
            this.libros = libros;
            this.mascotas = mascotas;
        }

/* 3) Hacer que Usuario cuente con los siguientes métodos: */
//getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
getFullName (){
    return `${this.nombre}` `-` `${this.apellido}`
}

//addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
addMascota (nombre){
    this.mascotas.push(nombre)
    return this.mascotas
}

//countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
countMascotas (){
    return this.mascotas.length
}

//addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
addBook (){
    this.libros.push({nombre: "Anne Frank", autor: "Otto Frank"})
}
/* esta  podria ser otra forma de hacer lo mismo que lo anterior?
let user= new Usuario (nombre , autor)
user.addBook ("Anne Frank" , "Otto Frank")*/

//getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
getBookNames () {
    return this.libros.map (libros => libros.nombre);
}
}

//4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.
let usuario = new Usuario ("Ricardo" , "Fort", [],[]) 

//Agrego Libros
usuario.addBook("Cien años de soledad", "Gabriel Garcia Marquez"); 
usuario.addBook("Argentina", "Anómino"); 

//Agrego Mascotas 
usuario.addMascota("Caballo"); 
usuario.addMascota("Pato"); 
usuario.addMascota("Conejo"); 

//Consola 
console.log("El Usuario es: ", usuario)
console.log("El Nombre es: ", usuario.nombre)
console.log("El Apellido es: ", usuario.apellido)
console.log("Cantidad de mascotas: ", usuario.countMascotas())
console.log("Nombre de libros: ", usuario.getBookNames()) 

