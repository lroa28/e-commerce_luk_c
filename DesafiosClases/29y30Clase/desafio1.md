SERVIDOR NODE CON CLUSTER
Servidor Node con Cluster

Tomando como base el ejercicio anterior, agregar la lógica que permita construir un cluster de servidores, poniendo un evento de escucha en cada servidor para reiniciarlo si se cae.
Representar por consola el número de procesadores detectados, el momento en el que un servidor se cae, el pid de los procesos worker y el del master. 
Poner en marcha el servidor con node y nodemon en el puerto 8081, verificando en cada caso, la respuesta en su ruta raíz y el número de procesos activos de node en el sistema operativo, relacionándolos con el número de procesadores.
Finalizar en el sistema operativo un proceso worker comprobando que se reinicia en un nuevo pid.
Como último identificar el pid del master y finalizar su proceso de node, analizando qué ocurre en el caso de haberlo ejecutado con node y con nodemon.