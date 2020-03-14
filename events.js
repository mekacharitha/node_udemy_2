const EventEmitter = require("events");
const http = require('http');
const myEmitter = new EventEmitter();

myEmitter.on('newSale' , ()=>{
    console.log("there was a new sale!");
})

myEmitter.on('newSale' , ()=>{
    console.log("customer name : Charitha");
})

myEmitter.on('newSale' , (stock)=>{
    console.log(`there are now ${stock} items left in the stock`);
})

myEmitter.emit("newSale" , 9)

const server = http.createServer();

server.on('request' , (req,res)=>{
    console.log("Request received");
    res.end("Request received")
})
  
server.on("close", () => {
    console.log("Server closed");
  });
  
server.listen(8000 , '127.0.0.1' , ()=>{
    console.log(("waiting ..."));
})