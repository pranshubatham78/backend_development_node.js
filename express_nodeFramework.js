// Here , We're going to see express framework
const express = require('express');
const app = express();

// send data to the server
app.get('/', (req,res)=>{
    try{
        res.status(200).send("This is the webpage made with the help of express.js framework");
    }catch(error){
        res.status(404).send("Something went wrong");
    }
})

app.listen(8000); // creating server
