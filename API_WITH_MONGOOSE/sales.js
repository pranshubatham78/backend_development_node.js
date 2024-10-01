const express = require('express');
const ObjectId = require('mongodb');
const connection = require('./config');
const SalesModel = require('./indexx');
const app = express();
app.use(express.json());

connection();
app.get('/', async (req, res) => {
    try {
        const data = await SalesModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ message: "Internal sever error" });
    }
});



app.put('/create', async (req, res) => {
    try {
        const data = new SalesModel(req.body);
        const savedata = await data.save();
        if (savedata) {
            res.status(200).send({ message: "data has been created successfully" });
        } else {
            res.status(500).send('failed to create the data');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" });
    }
});




app.post('/update/:_id', async (req, res) => {
    try {
        const id = req.params._id;
        const update = await SalesModel.updateOne({ _id: (id) }, {
            $set: req.body
        });
        if (update.matchedCount > 0) {
            res.status(200).send("Data has been update successfully");
        }
        else {
            res.status(400).send("Something went wrong");
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error", error: error });
    }
});



app.delete('/delete/:_id', async (req, res) => {
    try {
        const id = req.params._id;
        const deleteData = await SalesModel.deleteOne({ _id: id });
        if (deleteData.deletedCount > 0) {
            res.status(200).send({ message: 'Your data has been deleted successfully' });
        } else {
            
            res.status(400).send({ message: "Something went wrong" });
        }
    } catch(error) {
        res.status(500).send('Internal server error');
    }
});



app.listen(8000);