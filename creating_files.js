// Creating a file in a simple way.

const fs = require('fs')
const path = require('path')

// aap jis folder mein work kr rahe ho usme file create kr dega but if you create any other file inside your folder then it not create file in that folder.

//fs.writeFileSync('demo_file.txt','Basic manner for creating a file' ) 

/**
 * Create a multiple files in a single shot.
 */

// STEP1 : Identify the path of your nested file.

const dirPath = path.join(__dirname,"files") // files : is the name of the folder in which you want create a multiple times.

for(i=0; i<5 ;i++){
    fs.writeFileSync(dirPath+"/demo"+i+".txt", "A simple demo files"); // make our file dynamic, if we not do this then it create a single file with the same name and delete that file then again create that and at the end you got only one file.
}


// fetching name of all the files which you created in your nested folder.


fs.readdir(dirPath , (err,file)=>{ // it takes a call-back function as a parameter which have two argument err and file(indentifier).

     // console.log(file) // it also print the name of all the files but in array format.
     
    file.forEach((item)=>{ // it print all the file names on by one
        console.log(item)
    })

});



