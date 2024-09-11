// Every file in the node is the module.So, how can we use the content of another file into other file.

const app = require("./app,.js") // Import the content or logic of the app.js in the index.js.
console.log(app)
console.log(app.sum(4,5))
console.log(app.diff(20,23))


/**
 * Global module : If we use any module without importing called global module.
 * Non-Global module : If we use any module after importing called non-global module.
 */

const fs = require("fs") // fs is a file system module helps to read and write the txt files.(Non-GlobaL module).
fs.writeFileSync("Intro.txt","I am a Non-global module") // We create a file Intro.txt and insert some data into it.

console.log("Hi,I am a global module")

console.log('-->', __dirname) //  It tell us in which directory we are actually working.
console.log("-->", __filename) // It tell us the file name in which we are actually working.


