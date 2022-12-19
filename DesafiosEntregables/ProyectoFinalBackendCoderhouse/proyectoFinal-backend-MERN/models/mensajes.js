import { Schema, model } from 'mongoose';

const mensajesCollection = 'mensajes';

const MensajesSchema = new Schema({
    userEmail: {type: String, require: true, max: 50},
    tipo: {type: String, require: true, max: 20},
    timestamp: {type: String, require: true},
    mensaje: {type: String, require: true}
})

export default model(mensajesCollection, MensajesSchema);
