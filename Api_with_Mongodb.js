//  API basically helps to communicated with the user irrespective of the language.
/*
GET : Helps to get the data from the database and send it to the user
POST : Helps to send the data from the data to the server.
PUT :  Helps to update the data 
DELETE : Helps to delete the data
*/
const express = require('express');
const { ObjectId } = require('mongodb');  // Helps to handle with ObjectID 
const dbConnection = require('./seperate_file_connection_mongodb');
const app = express();
app.use(express.json());


app.get('/', async (req, res) => {
    try {
        const db = await dbConnection();
        const data = await db.find().toArray();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);

    }
});


app.post('/insert', async (req, res) => {
    try {
        const data = await dbConnection();
        const result = await data.insertOne(req.body);
        if (result.acknowledged) {
            res.send({ message: "Data is inserted Sucessfully", id: result.insertedId });
        } else {
            res.status(500).send({ error: "Failed to insert data into the database" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});



app.put('/updateUser/:_id', async (req, res) => {
    try {
        const data = await dbConnection();
        const userId = req.params._id;  // passing Id of the user whose data I want to update.
        const update = req.body;  // passing the data which I want to update through body.

        // Ensure the provided _id is a valid MongoDB ObjectId
        if (!ObjectId.isValid(userId)) {
            return res.status(400).send({ error: "Invalid User ID" });
        }

        // Update the user with the given ObjectId
        const result = await data.updateOne({ _id: new ObjectId(userId) }, { $set: update });

        if (result.matchedCount > 0) {
            res.status(200).send({
                message: "Data updated successfully",
                id: userId
            });
        } else {
            res.status(404).send({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error", message: error.message });
    }
});




app.delete('/deleteUser/:_id', async (req, res) => {
    try {
        const data = await dbConnection();
        const userId = req.params._id;
        const results = await data.deleteOne({ _id: new ObjectId(userId) });
        if (results.deletedCount > 0) {
            res.status(200).send({ messsage: "Data is deleted successfully" });
        } else {
            res.status(500).send("User already deleted");
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }

});



app.listen(8000);