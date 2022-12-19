import mensajes from "../models/mensajes.js";
import generic from "./generic.js";

export default class mensajeservice extends generic {
    constructor(dao) { //recibo dao
        super(dao,mensajes.Collection) //super p ejecut el constructor del padre
    }
}