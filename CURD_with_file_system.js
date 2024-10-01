// CURD WITH FS MODULE

const fs = require("fs");
const path = require('path');
const dir = path.join(__dirname, "files");
// 1.Read
async function readFiles() {
    try {

        const files = await fs.promises.readdir(dir);
        for (const file of files) {
            const file_path = path.join(dir, file);
            const data = await fs.promises.readFile(file_path, { encoding: 'utf8' });
            console.log(data);
        }

    } catch (error) {
        console.error(error);
    }
};

readFiles();

// 2. Create and Write 


async function writeFile() {
    try{
        const file_paths = path.join(dir,"test.txt"); // foramtion of the file
        await fs.promises.writeFile(file_paths,"this is my testing file", {encoding : "utf8"}); // writing the content inside the file.
        console.log("file has been written sucessfully");

    }catch(error){
        console.error(error);

    }
    
};
writeFile();



// 3. Update

async function updateFiles() {
    try{

        const filePath = path.join(dir, "test.txt");
        await fs.promises.appendFile(filePath, " This is the appended data", { encoding: 'utf8' });
        console.log("file has been updating successfully");

    }catch(error){
        console.error(error);
    }
};


updateFiles();


//4. Delete

async function deleteFile() {
    try{

        const file = path.join(dir,"demo0.txt");
        await fs.promises.unlink(file);
        console.log("File is deleted sucessfully");

    }catch(error){
        console.log(error);
    }
};

deleteFile();