/*El código escrito en origen.js pertenece a ES6 ya que usa const y las nuevas arrow functions y queremos que 
Babel lo convierta a JS5.*/

const lista = [2,3,5,7];
lista.map(x=> x*x).forEach(x => console.log(x));
let array = [...lista, 8]
