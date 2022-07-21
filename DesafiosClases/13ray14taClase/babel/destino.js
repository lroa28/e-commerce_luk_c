"use strict";

/*El código escrito en origen.js pertenece a ES6 ya que usa const y las nuevas arrow functions y queremos que 
Babel lo convierta a JS5.*/
var lista = [2, 3, 5, 7];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
var array = [].concat(lista, [8]);
