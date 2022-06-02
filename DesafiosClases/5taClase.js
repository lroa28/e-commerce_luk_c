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
