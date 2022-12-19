import users from "../models/users.js";
import generic from "./generic.js";

export default class userservice extends generic {
    constructor(dao) { //recibo dao
        super(dao,users.collection) //super p ejecut el constructor del padre
    }

    /* si deseo usar el servicio como DTO solo especifico para users puedo usarlo de la sig manera=
    metodoUnicoParaUsers = () => { 
       this.dao.find()  
    }*/

}