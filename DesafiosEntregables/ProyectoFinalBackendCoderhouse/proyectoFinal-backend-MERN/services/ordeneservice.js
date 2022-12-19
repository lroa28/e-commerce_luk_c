import ordenes from "../models/ordenes.js";
import generic from "./generic.js";

export default class ordeneservice extends generic {
    constructor(dao) { //recibo dao
        super(dao,ordenes.Collection) //super p ejecut el constructor del padre
    }
}