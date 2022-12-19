import { Promise as _Promise, connect } from 'mongoose';
_Promise = global.Promise;

let isConnected;

const connectToDB = async (databaseName = process.env.DB_NAME) => {
    
    if(isConnected) {
        console.log('Utilizando conexión existente a la BD');
        return Promise.resolve()
    }
    //else
    const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(process.env.MONGO_PSW)}coderhouse.j2t64.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

    try {
        const db = await connect(uri, {
            useNewUrlParser: true
        });
        isConnected = db.connections[0].readyState;
    } catch (err) {
        return console.log(err);
    }

    
};

export default {
    connectToDB
};