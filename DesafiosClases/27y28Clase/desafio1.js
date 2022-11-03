/*
ARGUMENTOS POR LÍNEA DE COMANDOS
Realizar una aplicación en Javascript ejecutada a través de Node.JS que al ejecutarse de la siguiente manera:
node main.js 1 2 3 -m dev -p 8080 -d
Construya y muestre por pantalla el siguiente objeto:
{ modo: 'dev', puerto: 8080, debug: true, otros: [ 1, 2, 3 ] }
Y con el siguiente llamado:
node main.js 1 2 3
Construya y muestre por pantalla el siguiente objeto:
{ modo: 'prod', puerto: 0, debug: false, otros: [ 1, 2, 3 ] }
*/


import minimist from 'minimist';

const args = minimist(process.argv.slice(2),{alias:{m:"MODE",p:"PORT",d:"DEBUG"},default:{m:"prod",p:0,d:false}});
const {MODE,PORT,DEBUG} = args;
let configObject = { 
    mode : MODE,
    port : PORT,
    debug: DEBUG,
    others: args._
}

console.log(configObject);

/*
Sino usamos el default configuramos asi:
let configObject = { //valores de config de mi programa
    mode : args.m??"prod"
    port : args.p??0,
    debug: !!args.d,
    others: args._
}
*/