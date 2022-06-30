//Clase 5: Administradores de Paquetes - NPM
//Calculadora de edad
/*Realizar un proyecto en node.js que permita calcular cuántos años y días totales transcurrieron desde la 
fecha de tu nacimiento. Para ello utilizar la dependencia moment instalándola en forma local desde npm. 
Imprimir los resultados por consola. Hacer las modificaciones necesarias para que sólo se actualicen los patches para 
la librería recién instalada.

Un ejemplo de salida:
Hoy es 11/01/2021
Nací el 29/11/1968
Desde mi nacimiento han pasado 52 años.
Desde mi nacimiento han pasado 19036 días.

Ayuda:
Utilizar los métodos diff y format de la librería moment*/

/*
Tiempo de diseño=
> npm -v //verifico si tengo instalado npmjs
> nmp init -y //(instala todo Yes, genera el archivo package.json)
> npm i moment
*/

/* 
En el archivo package.json cambiar la librería para que sólo se actualicen los patches
"moment": "^2.29.3"
por
"moment": "~2.29.3"
*/

// Comienzo a usar los métodos de la libreria moment= https://www.npmjs.com/package/moment
// https://drive.google.com/drive/u/0/folders/1fxXFJTsZnzHcSOpWLeDKRlYQRjcdExdD. Archivo exercise01.js

var moment = require('moment') //dependencia moment de node.js

const nacimiento = moment("28/10/1982", "DD/MM/YYYY")
const now = moment()
//console.log(moment.from(nacimiento).format("d/M/YYYY"))

console.log("Hoy es " + now.format('DD/MM/YYYY')) 
console.log("Nací el " + nacimiento.format("DD/MM/YYYY"))
console.log("Desde mi nacimiento han pasado " + now.diff(nacimiento, 'years') + "años")
console.log("Desde mi nacimiento han pasado " + now.diff(nacimiento, 'days') + "días")