import MemoryContainer from "../contenedor/memContainer.js";
import {generateUser} from "../utils.js"

//genera un arreglo pero de usuario
class Users extends MemoryContainer { //users hijo del MemoryContainers que lo va a utilizar propiamente
    constructor () { super () }
    //para conectar la API en gral, poblar ... generar muchos usuarios en el arreglo. Populate en Mongo.
    populate (quantify=50) { //generar tantos usuarios como me indique el cliente, default 50
        const newUsers = [];
        for (let i = 0; i < quantity; i++){
            let newUsers = generateUser ();
            this.save (generateUser()); //usa como el DAO la clase MemoryContainer importada
            newUsers.push (newUsers)   //para tener una referencia de lo guardado, pusheamos tanto en el constructor como el nuevo newUsers
            return newUsers;
        }
    }
}

export default Users;

/* ejemplo Peters
import MemoryContainer from "../contenedor/MemContainer.js"

class Pet extends MemoryContainer {
    constructor () {super()}
}
*/