const dbConnection = require('./seperate_file_connection_mongodb');



const deleteData = async () => {
    try {
        const data = await dbConnection();
        const result = await data.deleteOne({ name: "Ajay" });
        console.log(result);
        if (result.acknowledged) {
            console.log("data is deleted successfully");
        }
    } catch (error) {
        console.log(error);
    }
};


deleteData();