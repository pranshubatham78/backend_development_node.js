// import http module 
const http = require('http')
console.log("server is going to start")
const api_data = require('./api_data.js')

http.createServer((req,res) =>{ // here we create a server 
res.writeHead(200,{'Content-type': 'application\json'}) // Header of the api
/**
 * Now we are going to make a body the APIs, we can write anything in the body.
 */
// res.write((api_data)) // Without JSON.stringify ---> {"data":[{"name":"Pranshu gutpa","email":"abc@gmial.com","learning":"Here I am trying to learn how to make APIs"},{"name":"Ajay kumar","email":"abc@gmial.com","learning":"Here I am trying to learn how to make APIs too"},{"name":"Suman kumar","email":"abc@gmial.com","learning":"Here, I am trying to test my api"},{"name":"Suraj agrawal","email":"abc@gmial.com","learning":"Learning backend development"}]}
res.write(JSON.stringify(api_data))
res.write('This is only the testing')
res.end()

}).listen(5000);   

