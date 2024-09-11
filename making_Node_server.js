// NOTE: We can create the server using express also.

// FIRST WAY OF DEFINING THE SERVER

const http = require('http'); // require is for the importing any lybrariry.

// Create a server
const server = http.createServer((req, res) => {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/html' }); // writeHead() ---> It is used to send a response header to the incoming request.

    // Send the response body
    res.write('<h1>This is my first Node.js server</h1>');

    // End the response
    res.end();
});

// Start the server and listen on port 8000
server.listen(8000, () => {
    console.log('Server is running on port 8000')}); 


// SECOND WAY OF DEFING THE SERVER

const http =  require("http"); //Import http module and it's a non-global module.

function dataControl(req,res)
{
    res.write("<h1>Hello,This is my first node.js server</h1>")
    res.end();
}
console.log("server is going to start")
http.createServer(dataControl).listen(8000)  // createServer() takes arrow function as a parameter and helps to create a server for handling the resquest and response.























