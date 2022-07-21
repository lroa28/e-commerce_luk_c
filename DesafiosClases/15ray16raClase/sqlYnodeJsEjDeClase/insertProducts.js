const {knex} = require('./options/mariaDB');

const insertProducts = async (knex) => {
  
  try{
    await knex('productos').insert({name: 'Heladera', price:200})
  }
 catch(e){
  console.log(e)
 }
 finally{
  knex.destroy(); //libera el sistema
 }
  console.log('Producto Agregado')
}

insertProducts(knex);