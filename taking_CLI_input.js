const fs = require('fs')

/**
 * Process : is the object who have large amount of the data.
 * process.argv :  it have by-default two ouput first one where,this file stored and which file is curretly running.
 * EX: It give array output.
 * [
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\hp\\Desktop\\Nodejs_Master_Class\\taking_CLI_input.js'

   <Whaterver content you write after <node taking_CLI_input.js> this it just add those thing in above array,
   and we can make a file with this also.
]
 */


const input = process.argv 
fs.writeFileSync(input[2],input[3]) // this make a txt file apple.txt and write a content into it.


// Wirte content in the file Using conditianl statemnts.

if(input[2] == "add"){
    fs.writeFileSync(input[3],input[4])  // input[3] : it contain your file name and  input[4]: contain content of your file.
}else if ( input[2] == "remove"){
    fs.unlinkSync(input[3])
}else{
    console.log("invlaid input")
}




/**
 * SYNTAX WE USE :
 * 
 * ADDITION:
 * 
 * node taking_CLI_input.js add new_file.txt "Here, we use conditional statement for creating a file with the help of process object."
 * 
 * REMOVING:
 * 
 * node taking_CLI_input.js remove new_file.txt   
 */
