"use strict";
// O puedo hacer el sig comando
// import * as operaciones from './lib/operaciones'
Object.defineProperty(exports, "__esModule", { value: true });
var operaciones_1 = require("./lib/operaciones");
var num1 = 10;
var num2 = 5;
console.log("la suma de ".concat(num1, " y ").concat(num2, " es: ").concat((0, operaciones_1.sumar)(num1, num2)));
console.log("la resta de ".concat(num1, " y ").concat(num2, " es: ").concat((0, operaciones_1.restar)(num1, num2)));
console.log("la multiplicaci\u00F3n de ".concat(num1, " y ").concat(num2, " es: ").concat((0, operaciones_1.multiplicar)(num1, num2)));
console.log("la divisi\u00F3n de ".concat(num1, " y ").concat(num2, " es: ").concat((0, operaciones_1.dividir)(num1, num2)));
var array = [1, 2, 3, 4, 5];
