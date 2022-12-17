import mongoose from 'mongoose';

const collection = "Users"
const schema = new mongoose.Schema({ 
    name: string,
    email: string,
    password: string
})

const userModel= mongoose.model(collection,schema).find
export default userModel