const {MongoClient}= require('mongodb');
const url = "mongodb://localhost:27017";
const database = 'sales';

const client = new MongoClient(url); // making an instance

async function fetchData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('sales');// Connection done here with the collection named "sales".
    if (collection){
        console.log("Connection has been done successfully");
    }
    let response = await collection.find({}).toArray(); // fetching data from the webpage.
    console.log(response);
};



fetchData();