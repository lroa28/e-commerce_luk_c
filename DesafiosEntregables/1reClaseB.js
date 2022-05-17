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

class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre= nombre
        this.apellido= apellido;
        this.libros= [
            {  
            nombre: "Anne Frank",
            autor: "Otto Frank",
            },
            { 
            nombre:"Cien años de soledad",
            autor: "Gabriel Garcia Marquez",
            },
        ];
        this.mascotas=["Tobi" , "Luna"];
    }

/*3) Hacer que Usuario cuente con los siguientes métodos: */
//getFullName(): String. Retorna el completo del usuario. Utilizar template strings.

getFullName (){
    return (`${this.nombre} + ${this.apellido}`)
}

//addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
addMascota (){
    this.mascotas.push(Pamperito)
    return mascotas
}

//countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
countMascotas (){
    return this.mascotas.length
}

//addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
addBook (){
    this.libros.push(nombre= "Harry Potter", autor= "J. K. Rowling")
    return libros
}

//getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
getBookNames (){
    return this.libros.nombres.map()
}
}

//4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.
let usuario = {
    nombre: 'Ricardo',
    apellido: 'Fort',
    nacimiento: 1970,
    fullName: function() {
        return this.name + " " + this.apellido;
      }
}

function hola () {
    console.log('Hola, mi nombre es: ', usuario.nombre)
    console.log('Hola, mi nombre es: ', this.nombre)
    //otra forma= console.log('Hola, mi nombre es: ', usuario ["nombre"]);
}

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();