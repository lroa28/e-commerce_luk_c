import mongoose from 'mongoose';

import users from './users.js';
import carts from './carritos.js';
import mensajes from './mensajes.js';
import ordenes from './ordenes.js';
import productos from './productos.js';

export default class Dao {
    constructor(config){
        this.mongoose = mongoose.connect(`mongodb+srv://${config.mongo.USER}:${config.mongo.PWD}@codercluster.w5adegs.mongodb.net/${config.mongo.DATABASE}?retryWrites=true&w=majority`)
        //timestamps: nos permite saber cuando creo y modifico
        const timestamps = {timestamps:{createdAt:'created_at',updatedAt:'updated_at'}} 
        //para cada esquema le pegamos el timestamps
        const usersSchema = mongoose.Schema(users.schema,timestamps);
        const cartsSchema = mongoose.Schema(carts.schema,timestamps);
        const mensajesSchema = mongoose.Schema(mensajes.schema,timestamps);
        const ordenesSchema = mongoose.Schema(ordenes.schema,timestamps);
        const productosSchema = mongoose.Schema(productos.schema,timestamps);
        
        this.models = {
            [users.collection]: mongoose.model(usersCollection ,usersSchema),
            [carts.collection]: mongoose.model(carritosCollection,cartsSchema),
            [mensajes.collection]: mongoose.model(mensajesCollection,mensajesSchema),
            [ordenes.collection]: mongoose.model(ordenesCollection,ordenesSchema),
            [productos.collection]: mongoose.model(productosCollection,productosSchema),
        }
    }

    getAll = async(options,entity) =>{
        if(!this.models[entity]) throw new Error(`La entidad no existe`);
        let result = await this.models[entity].find(options).lean();
        return result;
    }
    findOne = async(options,entity) =>{
        if(!this.models[entity]) throw new Error(`La entidad no existe`);
        let result = await this.models[entity].findOne(options).lean();
        return result;
    }

    save = async(document,entity) =>{
        if(!this.models[entity]) throw new Error(`La entidad no existe`);
        let result = await this.models[entity].create(document);
        return result;
    }
    //lean() nos permite traer el arch plano js y hacer op mas comunes a nivel js, perdemos funcionalidades de objs
}