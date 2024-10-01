//Inserting data in db

const dbConnection = require('./seperate_file_connection_mongodb');


let insertData = async () => {
    try {
        const data = await dbConnection();
        const result = await data.insertOne({
            "name": "Ajay kumar",
            "contact": 234567892,
            "profession": "IOS-dev"
        });
        console.log(result);

        if (result.acknowledged) {
            console.log("data is inserted successfully");
        }
    } catch (error) {
        console.log(error);
    }
};

insertData();