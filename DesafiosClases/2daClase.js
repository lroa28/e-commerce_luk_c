//1)
function mostrarLista(lista) {
    if(lista.length != 0){
        console.log(lista)
    }else {
        console.log("Lista vacía")
    }
}
let lista= ["La Parra Handball", "Sedalo", "Ferro", "River", "CID Moreno"]
mostrarLista ()


function mostrarListaVacia(listaVacia) {
    if (listaVacia.length = 0) {
        console.log("Lista vacía")
    }else {
        console.log(lista)
    }
}
let listaVacia= []
mostrarListaVacia ()

//2)
console.log (( (lista) => lista.length== 0 ) ("Lista Vacía"))

//3(
let numero1 = 2
function crearMultiplicador (numero1) {
    return function (numero2 = 3) {
    return numero1 * numero2
    }
}

crearMultiplicador ();
console.log (((crearDuplicar) => crearMultiplicador * 2 ))
console.log (((crearTriplicar) => crearMultiplicador* 3 ))

/*Resoluciones en clase*/
// // Punto 1
// function mostrarLista(lista) {
//     if(lista.length != 0) {
//         console.log(lista);
//     } else {
//         console.log("lista vacía");
//     }
// }

// mostrarLista([]);
// mostrarLista([1,2,3]);


// // Punto 2
// (function (lista) {
//     if(lista.length != 0) {
//         console.log(lista);
//     } else {
//         console.log("lista vacía");
//     }
// }) ([1,2,3]);

// Punto 3
function crearMultiplicador (numero) {
    let numero_interno = numero;
    return function(numero2) {
    return numero_interno * numero2;
    }
}

let duplicar = crearMultiplicador(2); //Crea función
console.log(duplicar(2)); // 4
console.log(duplicar(4)); // 8

let triplicar = crearMultiplicador(3); //Crea función
console.log(triplicar(3)); // 9
console.log(triplicar(4)); // 9

//Ejercicio Clases Slide 38, mi resuelto

class Contador {
 constructor (responsable, cuentaIndividual, cuentaGlobal, contador){
    this.responsable= responsable
    this.cuentaIndividual= cuentaIndividual
    this.cuentaGlobal= cuentaGlobal
    this.contador= contador
 }

static cuentaTotal = 0

//4)    Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.
obtenerResponsable (){
    console.log(`${this.responsable}`)
}
//5)    Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.
obtenerCuentaIndividual(){
    console.log(`${this.cuentaIndividual}`)
}
//6)    Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores creados hasta el momento.
obtenerCuentaGlobal(){
    console.log(`${Contador.cuentaTotal}`)
}
//7)    Definir el método contar que incremente en uno tanto la cuenta individual como la cuenta general
contar(){
    cuentaIndividual++
    cuentaGlobal++ 
}
}

//----------------------------- Resolución en clase CORREGIDO ---------------------------//
class Contador {
    constructor (responsable){ //construye la instancia del objeto
    this.responsable= responsable
    this.cuentaIndividual= 0
}
static cuentaTotal = 0 //propiedad de la clase que comparten todos los objetos creados en el new

//4)    Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.
obtenerResponsable (){
    return `${this.responsable}`
}
//5)    Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.
obtenerCuentaIndividual(){
     return `${this.cuentaIndividual}`
}
//6)    Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores creados hasta el momento.
obtenerCuentaGlobal(){
     return `${Contador.cuentaTotal}`//muestra el valor de la clase
}
//7)    Definir el método contar que incremente en uno tanto la cuenta individual como la cuenta general
contar(){
    this.cuentaIndividual++
    Contador.cuentaTotal++ //acceden todas las instancias del new porque es una propiedad de la clase
}
}

// Objetos que pertenecen a la clase Contador, crear instancias/objetos que cumple con los requisitos
let maria = new Contador ('Maria')
let jose = new Contador ('Jose')

maria.contar()
maria.contar()
maria.contar()
jose.contar()

let obtenerCuentas = (responsable) => {//le pasa un objeto? 
    return `Responsable: ${responsable.obtenerResponsable ()}/
    Cuenta Individual: ${responsable.obtenerCuentaIndividual ()}/
    Cuenta Total: ${responsable.obtenerCuentaGlobal ()} `
}

console.log(obtenerCuentas(maria)) //atributo del objeto
console.log(obtenerCuentas(jose)) //atributo del objeto
console.log(Contador.cuentaTotal) //atributo estatico de la clase, no nec un obj/instancia de una clase para acceder
//Muestra 
//Maria 3 4
//Jose 1 4 
//4