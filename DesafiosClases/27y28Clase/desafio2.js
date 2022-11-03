/*
USO DEL OBJETO PROCESS
Realizar una función en Node.js  “processNumbers()” que permita recibir como parámetros una cantidad ilimitada de números, con los cuales debe confeccionar el siguiente objeto (se imprimirá por consola):

En el caso de ingresar un número no válido, se lanzará un Error de código “INVALID TYPE”. La excepción deberá mostrar por consola el siguiente mensaje:
En este caso de error, la aplicación saldrá con código de error -5

Si no ingresó ningún número, el objeto de error será:

En este caso de error, la aplicación saldrá con código de error -4
En los casos de error, se representará en consola el código antes de finalizar.
*/

const processNumbers = (...numbers) =>{//funcion q recibe nros de manera ilimitada
    let sum = 0;
    if(numbers.length===0){
        console.error({
            error:{
                description:"Empty input"
            }
        })
        throw new Error('EMPTY INPUT')
    }
    for(const number of numbers){//for xq van a ser un arreglo
        if(isNaN(number)){// si no es un nro el q estoy recorriendo
            console.log({
                error:{
                    description:'INVALID TYPE',
                    numbers,
                    types:numbers.map(value=>typeof value)
                }
            })
            throw new Error("INVALID TYPE")
        }
        sum+=number;
    }
    console.log(sum);
}
processNumbers(1,3,1,4,1,9,1,5)

process.on('uncaughtException',evt=>{
    switch(evt.message){
        case "INVALID TYPE":
            process.exit(-5);
            break;
        case "EMPTY INPUT":
            process.exit(-4)
    }
})

process.on('exit',evt=>{
    console.log(`Process ended with code ${evt}`);//cod 0 es una salida limpia
})