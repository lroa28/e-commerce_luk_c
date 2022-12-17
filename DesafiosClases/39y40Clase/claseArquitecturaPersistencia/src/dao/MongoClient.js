import mongoose from 'mongoose';

//
export default class MongoClient {
    constructor(){
        this.connection = mongoose.connect('mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/?retryWrites=true&w=majority',error=>{
            console.log("conectado");
        })
    }
    static getInstance = () =>{ //pq q solo se pueda tener una sola instancia
        if(!this.instance){
            this.instance = new MongoClient();
        }
        else{
            return this.instance
        }
    }
}