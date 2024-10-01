// In, this we're going to see how we remove our file extension which result no one able to predict which language I used to make my wwebsite.
const express = require('express');
const path = require('path');
const app = express();

const filePath = path.join(__dirname,"HTML_website");


app.get('/', (req,res)=>{
    try{

        res.status(200).sendFile(`${filePath}/home.html`);
    }catch(error){
        console.error(error);
    }
});


app.get('/about', (req,res)=>{
    try{

        res.status(200).sendFile(`${filePath}/about.html`);
    }catch(error){
        console.error(error);
    }
});



app.get('/help', (req,res)=>{
    try{

        res.status(200).sendFile(`${filePath}/help.html`);
    }catch(error){
        console.error(error);
    }
});


app.get('/services', (req,res)=>{
    try{

        res.status(200).sendFile(`${filePath}/services.html`);
    }catch(error){
        console.error(error);
    }
});



app.get('*', (req,res)=>{
    try{

        res.status(200).sendFile(`${filePath}/index.html`);
    }catch(error){
        console.error(error);
    }
});
app.listen(5000);