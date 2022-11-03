import {exec,spawn} from 'child_process';

// exec("node ./desafio2.js",(error,stdout,stderror)=>{
//     if(error){ //si existio un error
//         console.log(`error: ${error.message}`);
//     }
//     if(stderror){
//         console.log(`stderror: ${stderror}`)
//     }
//     else{
//         console.log(`stodut: ${stdout}`)
//     }
// })

const testProcess = spawn('node desafio2.js',[],{shell:true});

//nec otros listenings
testProcess.stdout.on('data',data=>{
    console.log(`stdout: ${data}`);
})

testProcess.stderr.on('data',data=>{
    console.log(data);
})
