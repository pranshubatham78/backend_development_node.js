// Uploading apis

const multer = require('multer');
const express = require('express');
const app = express();
const path = require('path');

// Middleware to handle uploading files
const upload = multer({
    storage : multer.diskStorage({
        destination : function(req,file,cb){
            cb(null,'uploads');
        },
        filename : function(req,file,cb){
            cb(null , file.filename + '-'+ Date.now()+path.extname(file.originalname));
        }
    })
}).array("user_upload", 10);


// check valiadity of the files
app.post('/upload', upload , (req, res) => {
    try {
        upload(req,res,function(error){
            // Handling multer error
            if (error instanceof multer.MulterError){
                res.status(404).send({message : 'Something went wrong while uploading the photo'});
            }else if(error){
                res.status(400).send({message: 'unknown error occrued durign upload the file.'})
            }
        });
        res.status(200).send({message :"File uploaded successfully", files : req.files});
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});


app.listen(5000);