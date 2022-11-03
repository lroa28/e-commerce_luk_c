import os from 'os';
const CPUs = os.cpus().length;
console.log (CPUs);

import cluster from 'cluster';
import express from 'express';

const app = express();

//No listening, vamos a forkear todo el servidor
if(cluster.isPrimary){// antes era isMaster // reconoce el proceso que estamos corriendo 
    //INGRESA EL PROCESO PRIMARIO
    console.log(`Soy un proceso primario con pid ${process.pid}`)//nos da el ID del proceso
    for(let i = 0; i<CPUs;i++){ //for para aprovechar todos los CPUS existentes
        cluster.fork(); 
    }
    cluster.on('message',message=>{ //los hijos pueden hacer un listening
        console.log(message);
    })
    cluster.on('exit',worker=>{//DESAFIO 1
        console.log(`El proceso hijo con pid ${worker.process.pid} murió :( `)//mata un proceso hijo y levanta otro
        cluster.fork();
    })
}
else{
    console.log(`Proceso hijo con pid ${process.pid} inicializado`)
    app.listen(8080,()=>console.log(`Listening on PORT 8080`)) //todos los hijos pueden escuchar en el 8080
}
app.get('/',(req,res)=>{
    res.send(`El proceso ${process.pid} Ha atendido esta petición `)
})
app.get('/operacion',(req,res)=>{
    let result = 0;
    process.send("Hola");
    for(let i=0;i<5e9;i++){
        result+=i
    }
    res.send(`Proceso con pid ${process.pid} finaliza operación con ${result}`)
})
