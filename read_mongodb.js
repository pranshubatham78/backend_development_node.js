// Read data from the database.
const dbConnection = require('./seperate_file_connection_mongodb');

const main = async () => {
    try {
        let data = await dbConnection();
        data = await data.find().toArray();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};


main();