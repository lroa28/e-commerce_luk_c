/* ----------------------- Variables de Entorno ----------------------- */

import {config} from "dotenv";
config();

export default {
    mongo:{ //las esta usando el archivo dao
        USER : process.env.MONGO_USER,
        PWD : process.env.MONGO_PWD,
        DATABASE: process.env.MONGO_DATABASE || "mongoDB",
        URLMongo: process.env.URLMONGO,
        firebase: process.env.FIREBASE,
        PORT: process.env.PORT || 8080,
    }
}