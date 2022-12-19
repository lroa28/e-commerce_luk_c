import productos from "../models/productos.js";
import generic from "./generic.js";

export default class productoservice extends generic {
    constructor(dao) { //recibo dao
        super(dao, productos.Collection) //super p ejecut el constructor del padre
    }
}