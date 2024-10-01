// update the collection's data 

const dbConnection = require('./seperate_file_connection_mongodb');


const updateData = async () => {
    try {
        const data = await dbConnection();
        const result = await data.updateOne(
            { name: "Ajay Kumar" }, {
            $set: { name: "Ajay" }
        }

        );
        console.log(result);

        if (result.acknowledged) {
            console.log("Data update successfully");
        }
    } catch (error) {
        console.log(error);
    }
};


updateData();