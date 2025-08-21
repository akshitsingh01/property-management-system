import mongoose from 'mongoose' ;
import { dbName } from '../constatns.js';
const connectToDB = async () => {
    try{
        const conn = await mongoose.connect(`${process.env.MONGO_DB_URI}${dbName}`)  ;
        console.log(`connected to => ${conn.connection.host} `)  ; 
     }
    catch(err) 
    {
        console.log('mongo db  connection failed -> ' , err?.message) ; 
    }
}

export {connectToDB} ;
