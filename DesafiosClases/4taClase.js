//------- SLIDE #22 Asincronismo y callbacks --------//
/*  Realizar un programa no bloqueante utilizando timers (setTimeout y setInterval) y callbacks
Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres. 
Al finalizar, debe invocar a la siguiente función que se le pasa también  como parámetro: const fin = () => console.log('terminé')
Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen.
*/
function mostrarLetra(aLetter) {
    return new Promise((resolve, reject) => {
        if (aLetter) {
            setTimeout(() => {
                console.log(aLetter)
                resolve()
            }, 1000)
        }
        else {
            reject("No letter")
        }
    })
}

function mostrar(letters) {
  mostrarLetra(letters.substr(0, 1))
        .then(() => mostrarLetra(letters.substr(1, 1)))
        .then(() => mostrarLetra(letters.substr(2, 1)))
        .then(() => mostrarLetra(letters.substr(3, 1)))
        .catch((err) => console.log(err))
        .finally(() => { console.log("Terminé") })
}

mostrar("Hola");
//En esta version aparecen las letras cada segundo una por vez

function mostrarUnaLetra(letters, from) {
    let aLetter = letters.substr(from, 1);
    return new Promise((resolve, reject) => {
        if (aLetter) {
            setTimeout(() => {
                resolve(aLetter)
            }, 1000)
        }
        else {
            reject("No letter")
        }
    })
}

function mostrar(letters) {
    let quantity = letters.length;
    for (let i = 0; i < (quantity - 1); i++) {
        mostrarUnaLetra(letters, i)
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
    }
    mostrarUnaLetra(letters, quantity - 1)
        .then((result) => console.log(result))
        .catch((err) => console.log(err))
        .finally(() => { console.log("Terminé") })
}

mostrar("Hola");

//------- SLIDE #40 Fecha y hora --------//
/*Realizar un programa que:
A) Guarde en un archivo llamado fyh.txt la fecha y hora actual.
B) Lea nuestro propio archivo de programa y lo muestre por consola.
C) Incluya el manejo de errores con try catch (progresando las excepciones con throw new Error).
Aclaración: utilizar las funciones sincrónicas de lectura y escritura de archivos del módulo fs de node.js*/


//En esta version que seria mas escalable para una gran cantidad de letras se presenta un unico delay y las letras se muestran todas de golpe

//Como hacer que la segunda version se comporte como la primera?


//---------- SLIDE #52 Lectura y escritura de archivos --------//
/*Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
A) Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y.
Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
B) Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
C) Muestre por consola el objeto info luego de leer el archivo
D) Guardar el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json
E) Incluir el manejo de errores (con throw new Error)

Aclaraciones:
- Utilizar la lectura y escritura de archivos en modo asincrónico con callbacks.
- Consigna B): Para deserializar un string con contenido JSON utilizar JSON.parse (convierte string en object).
- Consigna C): Para serializar un objeto (convertirlo a string) y guardarlo en un archivo utilizar JSON.stringify.

Ayuda:
Para el Punto 3 considerar usar JSON.stringify(info, null, 2) para preservar el formato de representación del objeto en el archivo (2 representa en este caso la cantidad de espacios de indentación usadas al representar el objeto como string).
En la diapositiva 54 tienen una forma para que el formato dentro del archivo sea "fácilmente legible", en el JSON.stringify dben pasarle unos parámetros más
Ejemplo: JSON.stringify(arrayDeDatos, null, 2)
tengo duda con el ID, por ejemplo, si decidimos eliminar el ID 1 y ya tenemos otros 3 productos hasta el ID 4, el siguiente producto que agreguemos debe adquirir el número del ID 1 o puede continuar aumentando a pesar de que hayamos perdido el ID 1?
Puede continuar, tenemos que obtener el id del ultimo objeto, en todo caso
JSON.stringify(Objeto,null,'\t')*/




//------- SLIDE #63 Lectura y Escritura con promises --------//
/*Realizar un programa que ejecute las siguientes tareas:
A) Lea el archivo info.txt generado en el desafío anterior deserializándolo en un objeto llamado info.
B) Mostrar este objeto info en la consola.
C) Modifique el author a "Coderhouse" y guarde el objeto serializado en otro archivo llamado package.json.coder
D) Mostrar los errores por consola.
Aclaraciones:
Trabajar con fs.promises (then/catch).

Ayuda:
Para el punto 3 considerar usar JSON.stringify(info.contenidoObj, null,2) para preservar el formato de representación del objeto en el archivo.*/

