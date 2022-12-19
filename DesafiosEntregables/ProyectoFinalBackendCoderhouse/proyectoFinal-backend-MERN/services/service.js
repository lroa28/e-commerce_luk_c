/* ----------------------- IMPORTS ----------------------- */
import dao from "../models/dao.js";
import userservice from "./userservice.js";
import carritoservice from "./carritoservice.js";
import mensajeservice from "./mensajeservice.js";
import ordeneservice from "./ordeneservice.js";
import productoservice from "./productoservice.js";
import config from "../config/config.js";

/* ----------------------- Conectamos los servivios con el DAO ----------------------- */

//const dao = new dao(config);

export const userservice = new userservice(dao);
export const carritoservice = new carritoservice(dao);
export const mensajeservice = new mensajeservice(dao);
export const ordeneservice = new ordeneservice(dao);
export const productoservice = new productoservice(dao);