import { Schema, model } from 'mongoose';

const carritosCollection = 'carritos';

const CarritosSchema = new Schema({
    userEmail: {type: String, require: true, max: 50},
    userID: {type: String, require: true},
    productos: [{
        productID: {type: String,},
        nombre: String,
        cantidad: {type: Number, required: true, default: 1},
        precio: Number
    }],
    //{type: Array, require: true},
    direccion: {type: String, require: true, max: 50},
    total: {type: Number, required: true, default: 0},
    timestamp: {type: String, require: true}
})

export default model(carritosCollection, CarritosSchema);
