import carritos from "../models/carritos.js";
import generic from "./generic.js";

export default class carritoservice extends generic {
    constructor(dao) { //recibo dao
        super(dao,carritos.Collection) //super p ejecut el constructor del padre
    }
}