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