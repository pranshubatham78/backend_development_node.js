const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";

const database = 'sales';


const connection = new MongoClient(url);

async function dbConnection() {
    let result = await connection.connect();
    let db = result.db(database);
    return db.collection('sales');
   
}


module.exports = dbConnection;
