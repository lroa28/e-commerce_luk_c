/*import faker from 'faker'
faker.locale= 'es'
const faker = require('faker')
const fs = require('fs')

var str = 'NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\n'

for(let i=0; i<100; i++) { //busca 100 veces
    str += faker.name. firstName ( ) +
            ';' + faker.name.lastName() +
            ';' + faker.internet.email() +
            ';' + faker.name. jobTitle() +
            ';' + faker.random.locale() +
            '\n'
}

fs.writeFile ( './test.csv' , str, function ( err ) {
    if( err ) console.log( err );
    console.log( 'archivo guardado' )
})
*/ 


import faker from 'faker'
faker.locale = 'es'
const { name, internet, random } = faker
import { writeFile } from 'fs'

let str = 'NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\n'

for (let i = 0; i < 100; i++) {
   str += name.firstName() +
       ';' + name.lastName() +
       ';' + internet.email() +
       ';' + name.jobTitle() +
       ';' + random.locale() +
       '\n'
}

writeFile('./test.csv', str, err => {
   if (err) console.log(err);
   console.log('archivo guardado')
})
