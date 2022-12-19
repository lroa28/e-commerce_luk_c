import { Schema, model } from 'mongoose';

const productosCollection = 'productos';

const ProductosSchema = new Schema({
    nombre: {type: String, require: true, max: 100},
    descripcion: {type: String, require: true, max: 20},
    precio: {type: Number, require: true},
    foto: {type: String, require: true},
    categoria: {type: String, require: true, max: 10},
    stock: {type: Number, require: true}
})

export default model(productosCollection, ProductosSchema);
