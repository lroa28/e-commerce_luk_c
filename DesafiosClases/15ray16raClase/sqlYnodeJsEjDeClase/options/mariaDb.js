// Archivo para la conexión con la BD 

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'mi_tienda'
    }
  });
  
  module.exports = {knex}