//import mongoose from 'mongoose';
//import { Schema, model } from 'mongoose';
import { hash as _hash } from 'bcrypt';

const usersCollection = 'users';

/* -------------- SCHEMA -------------- */
const UserSchema = new Schema({
    username: {type: String, require: true, max: 100},
    password: {type: String, require: true, max: 30},
    role: {type: String, require: true, max: 30, enum:['user', 'admin'], default: 'user'},
    //admin: {type: String, default: false}
    email: {type: String, require: true, max: 30},
    avatar: {type: String, require: false},
    name: {type: String, require: true, max: 100},
    last_name: {type: String, require: true, max: 100},
    address: {type: String, require: true, max: 50},
    phoneNumber: {type: String, require: true, max: 20},
    cart:{ /* si anexo cada carrito a cada usuario, uso=*/
            type:mongoose.SchemaTypes.ObjectId,
            ref:'carritos'    
        }
});

UserSchema.pre(
    'save',
    async function(next){
        const user = this;
        const hash = await _hash(user.password, 10);

        this.password = hash;
        next()
    }
)

export default model(usersCollection, UserSchema);